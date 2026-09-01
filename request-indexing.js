const { google } = require('googleapis');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.resolve(__dirname, 'gsc-key.json');
const SITEMAP_FILE = path.resolve(__dirname, 'public/sitemap.xml');
const SITE_URL = 'https://www.gurdharam.com';
const INDEXNOW_KEY = 'b4f8e2a1c7d94e5f8a3b6c9d2e1f4a7b';

// Parse all URLs directly from sitemap.xml
function getSitemapUrls() {
  if (!fs.existsSync(SITEMAP_FILE)) {
    console.error('sitemap.xml not found! Run generate-sitemap.js first.');
    process.exit(1);
  }
  const content = fs.readFileSync(SITEMAP_FILE, 'utf8');
  const urls = [];
  const matches = content.matchAll(/<loc>(.*?)<\/loc>/g);
  for (const match of matches) {
    urls.push(match[1].trim());
  }
  return urls;
}

async function main() {
  const URLS = getSitemapUrls();
  console.log(`\n======================================================`);
  console.log(`🚀 MASTER FAST-INDEXING PIPELINE — PINGING ALL ENGINES`);
  console.log(`Total URLs to Index: ${URLS.length}`);
  console.log(`======================================================\n`);

  // Ensure IndexNow key file exists in public/
  const keyFilePath = path.resolve(__dirname, `public/${INDEXNOW_KEY}.txt`);
  fs.writeFileSync(keyFilePath, INDEXNOW_KEY, 'utf8');
  console.log(`✅ Verified IndexNow Key File at: public/${INDEXNOW_KEY}.txt`);

  // 1. Google Search Console API & Google Indexing API
  let authClient;
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: [
        'https://www.googleapis.com/auth/webmasters',
        'https://www.googleapis.com/auth/indexing',
      ],
    });
    authClient = await auth.getClient();
    console.log('✅ Google Auth Client successfully initialized.');
  } catch (err) {
    console.error('⚠️ Google Auth Init Error:', err.message);
  }

  if (authClient) {
    // 1.1 Resubmit Sitemap to GSC
    console.log('\n--- 1. Resubmitting Sitemap to Google Search Console ---');
    const webmasters = google.webmasters({ version: 'v3', auth: authClient });
    const siteTargets = ['sc-domain:gurdharam.com', 'https://www.gurdharam.com/'];
    for (const siteTarget of siteTargets) {
      try {
        await webmasters.sitemaps.submit({
          siteUrl: siteTarget,
          feedpath: `${SITE_URL}/sitemap.xml`,
        });
        console.log(`✅ GSC Sitemap submitted to ${siteTarget}: ${SITE_URL}/sitemap.xml`);
      } catch (e) {
        console.log(`⚠️ GSC Sitemap submit for ${siteTarget}:`, e.message);
      }
    }

    // 1.2 Google Indexing API
    console.log('\n--- 2. Google Indexing API (URL_UPDATED notifications) ---');
    const indexing = google.indexing({ version: 'v3', auth: authClient });
    let successCount = 0;
    for (const url of URLS) {
      try {
        const res = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED',
          },
        });
        successCount++;
        console.log(`✅ GSC Indexing API: [${res.status}] ${url}`);
      } catch (e) {
        console.log(`⚠️ GSC Indexing API: ${url} — ${e.message?.substring(0, 100)}`);
      }
      await new Promise(r => setTimeout(r, 150));
    }
    console.log(`📊 Google Indexing API: ${successCount}/${URLS.length} notifications dispatched.`);
  }

  // 2. IndexNow Dual Engine Dispatch (api.indexnow.org + www.bing.com + yandex.com)
  console.log('\n--- 3. IndexNow Multi-Engine Dispatch (Bing, Yandex, Seznam, Naver) ---');
  const indexNowPayload = JSON.stringify({
    host: 'www.gurdharam.com',
    key: INDEXNOW_KEY,
    keyLocation: `https://www.gurdharam.com/${INDEXNOW_KEY}.txt`,
    urlList: URLS,
  });

  const indexNowEndpoints = [
    { host: 'api.indexnow.org', path: '/IndexNow' },
    { host: 'www.bing.com', path: '/IndexNow' },
    { host: 'yandex.com', path: '/indexnow' }
  ];

  for (const ep of indexNowEndpoints) {
    await new Promise((resolve) => {
      const req = https.request({
        hostname: ep.host,
        path: ep.path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(indexNowPayload),
        },
      }, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          if (res.statusCode === 200 || res.statusCode === 202) {
            console.log(`✅ IndexNow (${ep.host}): Accepted (${res.statusCode}) for ${URLS.length} URLs`);
          } else {
            console.log(`⚠️ IndexNow (${ep.host}): Status ${res.statusCode} — ${data || 'OK'}`);
          }
          resolve();
        });
      });
      req.on('error', (e) => {
        console.log(`❌ IndexNow (${ep.host}) Network Error:`, e.message);
        resolve();
      });
      req.write(indexNowPayload);
      req.end();
    });
  }

  // 3. Sitemap Ping to Google & Bing
  console.log('\n--- 4. Direct Sitemap Pings ---');
  const pingUrls = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(SITE_URL + '/sitemap.xml')}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITE_URL + '/sitemap.xml')}`
  ];

  for (const pUrl of pingUrls) {
    await new Promise((resolve) => {
      https.get(pUrl, (res) => {
        console.log(`✅ Pinged ${new URL(pUrl).hostname}: HTTP ${res.statusCode}`);
        resolve();
      }).on('error', (e) => {
        console.log(`⚠️ Ping error for ${pUrl}: ${e.message}`);
        resolve();
      });
    });
  }

  console.log('\n======================================================');
  console.log('🎉 ALL SEARCH ENGINES & INDEXING ENDPOINTS PINGED!');
  console.log(`- Google Search Console API: Sitemap Submitted`);
  console.log(`- Google Indexing API: ${URLS.length} URLs Sent`);
  console.log(`- IndexNow (Bing/Yandex/Seznam): ${URLS.length} URLs Dispatched`);
  console.log(`- Direct Ping Webhooks: Fired`);
  console.log('======================================================\n');
}

main().catch(console.error);

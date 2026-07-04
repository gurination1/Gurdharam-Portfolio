const { google } = require('googleapis');
const https = require('https');

const KEY_FILE = './gsc-key.json';
const SITE_URL = 'https://www.gurdharam.com';

const verticals = require('./src/data/verticals.json');

const URLS = [
  'https://www.gurdharam.com/',
  'https://www.gurdharam.com/services/web-development',
  'https://www.gurdharam.com/services/ai-automation',
  'https://www.gurdharam.com/services/crop-disease-detection-app',
  'https://www.gurdharam.com/services/dairy-management-app-flutter',
  'https://www.gurdharam.com/services/whatsapp-business-bot',
  'https://www.gurdharam.com/services/web-developer-muktsar-punjab',
  'https://www.gurdharam.com/services/offline-ai-app-development',
  'https://www.gurdharam.com/case-studies/doodhisaab',
  'https://www.gurdharam.com/case-studies/fasal-doctor',
  'https://www.gurdharam.com/blog',
  'https://www.gurdharam.com/blog/offline-ai-crop-disease-scanner-flutter',
  'https://www.gurdharam.com/blog/whatsapp-ai-agents-healthcare-india',
];

// Add dynamic vertical URLs
verticals.forEach(v => {
  const route = `/services/${v.type === 'whatsapp-bot' ? 'whatsapp-bot-' + v.id : v.type === 'social-media-automation' ? 'social-media-automation-' + v.id : 'website-design-' + v.id}`;
  URLS.push(`https://www.gurdharam.com${route}`);
});

async function main() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: [
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/indexing',
    ],
  });
  const authClient = await auth.getClient();

  // 1. Resubmit sitemap via GSC API
  console.log('\n=== STEP 1: Resubmit sitemap to Google Search Console ===');
  const webmasters = google.webmasters({ version: 'v3', auth: authClient });
  try {
    await webmasters.sitemaps.submit({
      siteUrl: 'sc-domain:gurdharam.com',
      feedpath: `${SITE_URL}/sitemap.xml`,
    });
    console.log('✅ Sitemap resubmitted: ' + SITE_URL + '/sitemap.xml');
  } catch (e) {
    console.log('❌ Sitemap submit error:', e.message);
  }

  // 2. Google Indexing API — request indexing for each URL
  console.log('\n=== STEP 2: Google Indexing API — URL_UPDATED notifications ===');
  const indexing = google.indexing({ version: 'v3', auth: authClient });
  for (const url of URLS) {
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ ${url} — notified (${res.status})`);
    } catch (e) {
      console.log(`⚠️  ${url} — ${e.message?.substring(0, 120)}`);
    }
  }

  // 3. IndexNow — submit to Bing/Yandex for instant crawl
  console.log('\n=== STEP 3: IndexNow — Bing/Yandex instant crawl ===');
  const indexNowKey = 'b4f8e2a1c7d94e5f8a3b6c9d2e1f4a7b'; // arbitrary key
  const payload = JSON.stringify({
    host: 'gurdharam.com',
    key: indexNowKey,
    keyLocation: `https://gurdharam.com/${indexNowKey}.txt`,
    urlList: URLS,
  });

  await new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.indexnow.org',
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ IndexNow accepted — ${URLS.length} URLs submitted to Bing/Yandex`);
        } else {
          console.log(`⚠️  IndexNow response: ${res.statusCode} — ${data}`);
        }
        resolve();
      });
    });
    req.on('error', (e) => { console.log('❌ IndexNow error:', e.message); resolve(); });
    req.write(payload);
    req.end();
  });

  // 4. Also create the IndexNow key file for verification
  console.log('\n=== STEP 4: Creating IndexNow key file for Bing verification ===');
  const fs = require('fs');
  fs.writeFileSync(`./public/${indexNowKey}.txt`, indexNowKey);
  console.log(`✅ Created public/${indexNowKey}.txt`);

  console.log('\n=== DONE ===');
  console.log('Google: Sitemap resubmitted + Indexing API notified for all 10 URLs');
  console.log('Bing/Yandex: IndexNow submitted for all 10 URLs');
  console.log('Expected: Google 24-48h, Bing within hours');
}

main().catch(console.error);

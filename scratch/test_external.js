const https = require('https');
const http = require('http');

const urls = [
  'https://chandigarh.gov.in/',
  'https://punjab.gov.in/',
  'https://threebestrated.in/web-designers-in-chandigarh',
  'https://www.joonsquare.com',
  'https://developers.facebook.com/docs/whatsapp/cloud-api',
  'https://nsdcindia.org',
  'https://doitpunjab.gov.in',
  'https://www.cii.in'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    try {
      const req = client.request(url, { method: 'GET', timeout: 5000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        resolve({ url, status: res.statusCode, location: res.headers.location || null });
      });
      req.on('error', (err) => {
        resolve({ url, status: 'ERROR', error: err.message });
      });
      req.end();
    } catch (err) {
      resolve({ url, status: 'ERROR', error: err.message });
    }
  });
}

async function main() {
  for (const url of urls) {
    const res = await checkUrl(url);
    console.log(`URL: ${res.url}`);
    console.log(`Status: ${res.status}`);
    if (res.location) console.log(`Redirect Location: ${res.location}`);
    if (res.error) console.log(`Error: ${res.error}`);
    console.log('---');
  }
}

main();

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function scanDir(dir, ext) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name === 'node_modules' || item.name === '.git' || item.name === 'chrome') continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(scanDir(full, ext));
    } else if (full.endsWith(ext)) {
      files.push(full);
    }
  }
  return files;
}

const files = scanDir('./src', '.tsx').concat(scanDir('./src', '.json')).concat(['./index.html']);

const urls = new Set();
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /https?:\/\/[^\s"'`<>]+/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    let u = match[0].replace(/[,\);]+$/, '');
    if (!u.includes('gurdharam.com') && !u.includes('schema.org') && !u.includes('w3.org') && !u.includes('localhost') && !u.includes('example.com')) {
      urls.add(u);
    }
  }
});

console.log(`Found ${urls.size} external URLs to test:`);
Array.from(urls).forEach(u => console.log(' - ' + u));

async function checkUrl(url) {
  return new Promise(resolve => {
    try {
      const client = url.startsWith('https') ? https : http;
      const req = client.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        resolve({ url, status: res.statusCode, location: res.headers.location });
      });
      req.on('error', err => resolve({ url, error: err.message }));
      req.setTimeout(5000, () => {
        req.destroy();
        resolve({ url, error: 'Timeout' });
      });
      req.end();
    } catch (e) {
      resolve({ url, error: e.message });
    }
  });
}

(async () => {
  for (const u of urls) {
    const res = await checkUrl(u);
    if (res.status >= 300 && res.status < 400) {
      console.log(`⚠️ REDIRECT (${res.status}): ${res.url} -> ${res.location}`);
    } else if (res.status) {
      console.log(`✅ OK (${res.status}): ${res.url}`);
    } else {
      console.log(`❌ ERROR: ${res.url} (${res.error})`);
    }
  }
})();

const fs = require('fs');
const path = require('path');
const https = require('https');

const distPath = './dist';

function getHtmlFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name === 'assets') continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getHtmlFiles(full));
    } else if (full.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = getHtmlFiles(distPath);
console.log(`Auditing links across ${htmlFiles.length} HTML files...`);

const allLinks = new Map(); // url -> Array of source files
const titles = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Extract title
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    const title = titleMatch[1].trim();
    if (title.length > 60) {
      titles.push({ file, length: title.length, title });
    }
  }

  // Extract all href links
  const hrefRegex = /href=["']([^"'#\s>]+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    if (!href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('javascript:')) {
      if (!allLinks.has(href)) {
        allLinks.set(href, []);
      }
      allLinks.get(href).push(file);
    }
  }
});

console.log(`\n=== Titles Over 60 Characters (${titles.length}) ===`);
titles.forEach(t => console.log(`[${t.length} chars] ${t.file}\n   "${t.title}"`));

console.log(`\nFound ${allLinks.size} unique href targets in HTML.`);

async function checkUrl(url) {
  return new Promise(resolve => {
    let fullUrl = url;
    if (url.startsWith('/')) {
      fullUrl = `https://gurdharam.com${url}`;
    }
    try {
      const req = https.request(fullUrl, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)' } }, res => {
        resolve({
          url,
          fullUrl,
          statusCode: res.statusCode,
          location: res.headers.location
        });
      });
      req.on('error', err => resolve({ url, fullUrl, error: err.message }));
      req.setTimeout(5000, () => {
        req.destroy();
        resolve({ url, fullUrl, error: 'Timeout' });
      });
      req.end();
    } catch (e) {
      resolve({ url, fullUrl, error: e.message });
    }
  });
}

(async () => {
  let redirects = [];
  let clientErrors = [];

  for (const [url, sources] of allLinks.entries()) {
    const res = await checkUrl(url);
    if (res.statusCode >= 300 && res.statusCode < 400) {
      redirects.push({ url, target: res.location, status: res.statusCode, sources: sources.slice(0, 3) });
    } else if (res.statusCode >= 400) {
      clientErrors.push({ url, status: res.statusCode, sources: sources.slice(0, 3) });
    }
  }

  console.log(`\n=== Internal & External Redirects (${redirects.length}) ===`);
  redirects.forEach(r => {
    console.log(`⚠️ ${r.status} Redirect: ${r.url} -> ${r.target}`);
    console.log(`   Sources: ${r.sources.join(', ')}`);
  });

  console.log(`\n=== 4xx Client Errors (${clientErrors.length}) ===`);
  clientErrors.forEach(c => {
    console.log(`❌ ${c.status} Error: ${c.url}`);
    console.log(`   Sources: ${c.sources.join(', ')}`);
  });
})();

const fs = require('fs');
const path = require('path');

const dist = './dist';
const files = [];

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name === 'assets') continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full);
    else if (full.endsWith('.html')) files.push(full);
  }
}

walk(dist);

console.log(`Auditing ${files.length} HTML files...`);

// Track incoming internal links for every route
const incomingLinks = new Map();
const titles = [];

// Initialize routes in incomingLinks
files.forEach(f => {
  let route = f.replace('./dist', '').replace('dist', '').replace('/index.html', '').replace('.html', '');
  if (!route) route = '/';
  if (!incomingLinks.has(route)) {
    incomingLinks.set(route, new Set());
  }
});

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Title check
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    const title = titleMatch[1].trim();
    titles.push({ file, title, length: title.length });
  }

  // Links check
  let sourceRoute = file.replace('./dist', '').replace('dist', '').replace('/index.html', '').replace('.html', '');
  if (!sourceRoute) sourceRoute = '/';

  const hrefRegex = /href=["']([^"'#\s>]+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    let target = match[1];
    if (target.startsWith('/')) {
      target = target.split('#')[0].split('?')[0];
      if (incomingLinks.has(target)) {
        incomingLinks.get(target).add(sourceRoute);
      }
    }
  }
});

console.log('\n=== Top 10 Longest Titles ===');
titles.sort((a, b) => b.length - a.length).slice(0, 10).forEach(t => {
  console.log(`[${t.length} chars] ${t.file}: "${t.title}"`);
});

console.log('\n=== Routes with <= 2 Incoming Internal Links ===');
let singleLinkCount = 0;
for (const [route, sources] of incomingLinks.entries()) {
  if (sources.size <= 2) {
    console.log(`⚠️ Route ${route} has ${sources.size} incoming links (from: ${Array.from(sources).join(', ')})`);
    singleLinkCount++;
  }
}
console.log(`Total routes with <= 2 incoming links: ${singleLinkCount}`);

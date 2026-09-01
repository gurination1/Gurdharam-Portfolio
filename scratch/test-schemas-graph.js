const fs = require('fs');
const path = require('path');

const distPath = './dist';

function getHtmlFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
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
console.log(`Auditing JSON-LD across ${htmlFiles.length} HTML files...`);

let validTypes = 0;
let errors = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  let index = 0;
  while ((match = regex.exec(content)) !== null) {
    index++;
    try {
      const obj = JSON.parse(match[1]);
      if (obj['@graph']) {
        obj['@graph'].forEach((node, nIdx) => {
          if (!node['@type']) {
            errors.push(`${file} [Block ${index}, Node ${nIdx}]: Missing @type`);
          } else {
            validTypes++;
          }
        });
      } else if (Array.isArray(obj)) {
        obj.forEach((node, nIdx) => {
          if (!node['@type']) {
            errors.push(`${file} [Block ${index}, Item ${nIdx}]: Missing @type`);
          } else {
            validTypes++;
          }
        });
      } else {
        if (!obj['@type']) {
          errors.push(`${file} [Block ${index}]: Missing @type`);
        } else {
          validTypes++;
        }
      }
    } catch (e) {
      errors.push(`${file} [Block ${index}]: JSON Parse Error: ${e.message}`);
    }
  }
});

console.log(`\n=== JSON-LD Audit Results ===`);
console.log(`✅ Valid Structured Data Nodes: ${validTypes}`);
console.log(`❌ Structured Data Errors: ${errors.length}`);
if (errors.length > 0) {
  errors.forEach(e => console.error('  ' + e));
}

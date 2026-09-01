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
console.log(`Found ${htmlFiles.length} pre-rendered HTML files in dist/`);

let schemaErrors = 0;
let validSchemas = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = schemaRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      items.forEach(schema => {
        if (!schema['@context'] || !schema['@type']) {
          console.error(`❌ [SCHEMA ERROR] Missing @context or @type in ${file}`);
          schemaErrors++;
        } else {
          validSchemas++;
        }
      });
    } catch (e) {
      console.error(`❌ [JSON PARSE ERROR] in ${file}: ${e.message}`);
      schemaErrors++;
    }
  }
});

console.log(`\n=== Schema Validation Summary ===`);
console.log(`✅ Valid Schema Blocks: ${validSchemas}`);
console.log(`❌ Schema Errors: ${schemaErrors}`);

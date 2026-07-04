const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'assets' && file !== 'node_modules') {
        getHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function checkH1() {
  const files = getHtmlFiles(distPath);
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(distPath, file);
    
    // Find all h1 tags
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
    const matches = [];
    let match;
    while ((match = h1Regex.exec(content)) !== null) {
      matches.push(match[1].trim());
    }
    
    console.log(`Page: ${relativePath}`);
    console.log(`  Count: ${matches.length}`);
    matches.forEach((txt, idx) => {
      console.log(`  H1 [${idx + 1}]: "${txt.replace(/\s+/g, ' ').substring(0, 100)}"`);
    });
    
    if (matches.length === 0) {
      console.error(`❌ ERROR: Page ${relativePath} is missing H1!`);
    } else if (matches.length > 1) {
      console.error(`❌ ERROR: Page ${relativePath} has multiple H1s!`);
    } else if (matches[0] === '') {
      console.error(`❌ ERROR: Page ${relativePath} has empty H1!`);
    }
    console.log('---');
  });
}

checkH1();

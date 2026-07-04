const fs = require('fs');
const path = require('path');

const pagesPath = path.resolve(__dirname, '../src/pages');

function getTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') && !file.includes('test')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function countWords(text) {
  // Strip HTML/JSX tags
  const cleanText = text
    .replace(/<[^>]*>/g, ' ') // remove HTML tags
    .replace(/\{[^}]*\}/g, ' ') // remove JSX expressions
    .replace(/\s+/g, ' ') // collapse whitespace
    .trim();
  
  return cleanText.split(/\s+/).filter(w => w.length > 1).length;
}

function audit() {
  const files = getTsxFiles(pagesPath);
  console.log('=== WORD COUNT AUDIT FOR REACT TSX PAGES ===');
  files.forEach(file => {
    const relativePath = path.relative(pagesPath, file);
    const content = fs.readFileSync(file, 'utf8');
    const wordCount = countWords(content);
    console.log(`File: ${relativePath} -> Word Count: ~${wordCount}`);
    if (wordCount < 600 && relativePath !== 'home.tsx') {
      console.warn(`⚠️  WARNING: ${relativePath} has only ~${wordCount} words (under 600 threshold)`);
    }
  });
}

audit();

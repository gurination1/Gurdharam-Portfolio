const fs = require('fs');
const path = require('path');

const VALID_ROUTES = new Set([
  '/',
  '/services/web-development',
  '/services/ai-automation',
  '/services/ai-voice-agents',
  '/services/multilingual-voice-ai-telephony',
  '/services/local-gpu-llm-quantization',
  '/services/automated-video-generation-engine',
  '/services/ai-college-automation',
  '/services/crop-disease-detection-app',
  '/services/dairy-management-app-flutter',
  '/services/whatsapp-business-bot',
  '/services/web-developer-muktsar-punjab',
  '/services/offline-ai-app-development',
  '/case-studies/doodhisaab',
  '/case-studies/fasal-doctor',
  '/case-studies/takemyinterview-ai',
  '/blog',
  '/blog/dpdp-act-compliant-air-gapped-llm-legal-tech',
  '/blog/ai-college-admission-bot-punjab',
  '/blog/sarvam-indic-voice-ai-telephony-agent',
  '/blog/local-gpu-llm-quantization-mcp-legal-server',
  '/blog/automated-1080p60-videogen-pipeline',
  '/blog/high-ticket-webgl-3d-spatial-digital-twin',
  '/blog/offline-ai-crop-disease-scanner-flutter',
  '/blog/whatsapp-ai-agents-healthcare-india',
  '/privacy-policy',
  '/terms',
  '/developer-directory'
]);

// Add all 19 verticals
const verticals = require('../src/data/verticals.json');
verticals.forEach(v => {
  const route = `/services/${v.type === 'whatsapp-bot' ? 'whatsapp-bot-' + v.id : v.type === 'social-media-automation' ? 'social-media-automation-' + v.id : 'website-design-' + v.id}`;
  VALID_ROUTES.add(route);
});

console.log('Total Registered Valid Routes:', VALID_ROUTES.size);

// Scan all TSX and HTML files in src and dist
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

const tsxFiles = scanDir('./src', '.tsx');
console.log(`Scanning ${tsxFiles.length} TSX files...`);

let invalidLinks = [];

tsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match to="..." and href="/..."
  const regex = /(?:to|href)=["'](\/[^"']*)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const rawUrl = match[1].split('#')[0].split('?')[0];
    if (rawUrl && rawUrl !== '/' && !VALID_ROUTES.has(rawUrl) && !rawUrl.startsWith('/assets') && !rawUrl.startsWith('/api') && !rawUrl.startsWith('/og-card')) {
      invalidLinks.push({ file, link: rawUrl });
    }
  }
});

console.log('\n=== Link Audit Results ===');
if (invalidLinks.length === 0) {
  console.log('✅ ALL INTERNAL LINKS MATCH VALID ROUTES (0 Broken / 0 Redirects)');
} else {
  console.log(`❌ Found ${invalidLinks.length} potentially invalid links:`);
  invalidLinks.forEach(item => console.log(`  File: ${item.file} -> Link: ${item.link}`));
}

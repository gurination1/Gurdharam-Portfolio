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

const verticals = require('../src/data/verticals.json');
verticals.forEach(v => {
  const route = `/services/${v.type === 'whatsapp-bot' ? 'whatsapp-bot-' + v.id : v.type === 'social-media-automation' ? 'social-media-automation-' + v.id : 'website-design-' + v.id}`;
  VALID_ROUTES.add(route);
});

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

const allCodeFiles = scanDir('./src', '.tsx').concat(scanDir('./src', '.ts')).concat(['./prerender.js']);

console.log(`Checking internal links in ${allCodeFiles.length} files...`);

const suspiciousLinks = [];

allCodeFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /(?:to|href)=["'](\/[^"']*)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const raw = match[1];
    // Check for trailing slashes, .html suffixes, or non-matching paths
    if (raw.endsWith('/') && raw !== '/') {
      suspiciousLinks.push({ file, link: raw, reason: 'Trailing slash redirect' });
    }
    if (raw.endsWith('.html')) {
      suspiciousLinks.push({ file, link: raw, reason: '.html suffix redirect' });
    }
    const clean = raw.split('#')[0].split('?')[0];
    if (clean !== '/' && !VALID_ROUTES.has(clean) && !clean.startsWith('/assets') && !clean.startsWith('/api') && !clean.startsWith('/og-card')) {
      suspiciousLinks.push({ file, link: raw, reason: 'Not in canonical route registry' });
    }
  }
});

console.log(`\n=== Suspicious / Redirect Links (${suspiciousLinks.length}) ===`);
suspiciousLinks.forEach(s => console.log(`[${s.reason}] ${s.file} -> "${s.link}"`));

const fs = require('fs');
const path = require('path');
const verticals = require('./src/data/verticals.json');
const cities = require('./src/data/cities.json');

const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  '/',
  '/services',
  '/developer-directory',
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
  '/services/website-design-company-chandigarh',
  '/services/custom-react-developer-india',
  '/services/indic-ai-voice-agent-developer',
  '/services/ai-automation-agency-india',
  '/websites',
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
  '/blog/whatsapp-ai-agents-healthcare-india'
];

let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static routes
staticRoutes.forEach(route => {
  xmlContent += `  <url>
    <loc>https://www.gurdharam.com${route === '/' ? '' : route}</loc>
    <lastmod>${today}</lastmod>
  </url>\n`;
});

// Add dynamic vertical routes
verticals.forEach(v => {
  const route = `/services/${v.type === 'whatsapp-bot' ? 'whatsapp-bot-' + v.id : v.type === 'social-media-automation' ? 'social-media-automation-' + v.id : 'website-design-' + v.id}`;
  xmlContent += `  <url>
    <loc>https://www.gurdharam.com${route}</loc>
    <lastmod>${today}</lastmod>
  </url>\n`;
});

// Add dynamic city routes
cities.forEach(c => {
  const route = `/services/${c.slug}`;
  xmlContent += `  <url>
    <loc>https://www.gurdharam.com${route}</loc>
    <lastmod>${today}</lastmod>
  </url>\n`;
});

xmlContent += '</urlset>\n';

fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
console.log(`✅ Sitemap successfully generated at: ${sitemapPath} (Total URLs: ${staticRoutes.length + verticals.length + cities.length})`);

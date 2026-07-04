const fs = require('fs');
const path = require('path');
const verticals = require('./src/data/verticals.json');

const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  '/',
  '/services/web-development',
  '/services/ai-automation',
  '/services/crop-disease-detection-app',
  '/services/dairy-management-app-flutter',
  '/services/whatsapp-business-bot',
  '/services/web-developer-muktsar-punjab',
  '/services/offline-ai-app-development',
  '/case-studies/doodhisaab',
  '/case-studies/fasal-doctor',
  '/blog',
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

xmlContent += '</urlset>\n';

fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
console.log(`✅ Sitemap successfully generated at: ${sitemapPath} (Total URLs: ${staticRoutes.length + verticals.length})`);

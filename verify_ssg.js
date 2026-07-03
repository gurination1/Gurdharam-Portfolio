const https = require('https');

const urls = [
  'https://www.gurdharam.com/',
  'https://www.gurdharam.com/services/web-development',
  'https://www.gurdharam.com/services/ai-automation',
  'https://www.gurdharam.com/services/crop-disease-detection-app',
  'https://www.gurdharam.com/services/dairy-management-app-flutter',
  'https://www.gurdharam.com/services/whatsapp-bot-dental-clinic',
  'https://www.gurdharam.com/services/web-developer-muktsar-punjab',
  'https://www.gurdharam.com/services/offline-ai-app-development',
  'https://www.gurdharam.com/case-studies/doodhisaab',
  'https://www.gurdharam.com/case-studies/fasal-doctor',
  'https://www.gurdharam.com/blog',
  'https://www.gurdharam.com/blog/offline-ai-crop-disease-scanner-flutter',
  'https://www.gurdharam.com/blog/whatsapp-ai-agents-healthcare-india'
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({ url, status: res.statusCode, data });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function verifyAll() {
  console.log("=== VERIFYING LIVE PRE-RENDERED PAGES ===");
  for (const url of urls) {
    try {
      const res = await fetchUrl(url);
      const html = res.data;
      
      const hasRoot = html.includes('<div id="root">');
      const rootContent = html.match(/<div id="root">([\s\S]*?)<\/div>/);
      const rootText = rootContent ? rootContent[1].replace(/<[^>]*>/g, ' ').trim() : '';
      const wordCount = rootText.split(/\s+/).filter(Boolean).length;
      
      const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'NONE';
      
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const h1 = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : 'NONE';
      
      const linksCount = (html.match(/<a\s+/g) || []).length;
      const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
      const canonical = canonicalMatch ? canonicalMatch[1] : 'NONE';

      console.log(`\nURL: ${url}`);
      console.log(`Status: ${res.status}`);
      console.log(`Title: "${title}"`);
      console.log(`H1: "${h1}"`);
      console.log(`Word Count inside root: ${wordCount}`);
      console.log(`Anchor Links Count: ${linksCount}`);
      console.log(`Canonical Tag: "${canonical}"`);
      
      if (wordCount < 10) {
        console.error("❌ ERROR: Low word count!");
      }
      if (h1 === 'NONE') {
        console.error("❌ ERROR: Missing H1!");
      }
      if (linksCount === 0 && url === 'https://www.gurdharam.com/') {
        console.error("❌ ERROR: No outgoing links from Home!");
      }
    } catch (e) {
      console.error(`❌ FAILED to fetch ${url}:`, e.message);
    }
  }
}

verifyAll();

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const COMPETITORS = [
  'https://www.thinknext.co.in/',
  'https://www.apensia.in/',
  'https://www.solutions1313.com/',
  'https://appwrk.com/',
  'https://www.brihaspatitech.com/our-services/ai-solutions-provider/',
  'https://neogenmedia.com/'
];

function fetchPage(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      },
      timeout: 8000
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ url, status: res.statusCode, html: data }));
    });
    req.on('error', (err) => resolve({ url, status: 0, error: err.message }));
  });
}

function analyzeHtml(html) {
  // 1. Extract Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'N/A';

  // 2. Extract Description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || 
                    html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i);
  const description = descMatch ? descMatch[1].trim() : 'N/A';

  // 3. Extract Headings (H1, H2)
  const h1s = [];
  const h1Matches = html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  for (const m of h1Matches) {
    h1s.push(m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
  }

  const h2s = [];
  const h2Matches = html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi);
  let count = 0;
  for (const m of h2Matches) {
    if (count++ < 12) {
      h2s.push(m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
    }
  }

  // 4. Extract Links
  const links = [];
  const linkMatches = html.matchAll(/<a\s+[^>]*href="([^"]+)"/gi);
  for (const m of linkMatches) {
    links.push(m[1].trim());
  }

  const externalLinks = links.filter(l => l.startsWith('http') && !l.includes('gurdharam.com'));

  // 5. Keyword Density
  const plainText = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                        .replace(/<[^>]*>/g, ' ');
  const words = plainText.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
  const totalWords = words.length;

  const targetKeywords = ['ai', 'automation', 'developer', 'web', 'app', 'whatsapp', 'bot', 'chandigarh', 'punjab', 'muktsar', 'bathinda'];
  const keywordCounts = {};
  targetKeywords.forEach(k => {
    keywordCounts[k] = words.filter(w => w === k).length;
  });

  return {
    title,
    description,
    h1s,
    h2s,
    internalCount: links.length - externalLinks.length,
    externalCount: externalLinks.length,
    totalWords,
    keywordCounts,
    topOutboundDomains: externalLinks.map(l => {
      try { return new URL(l).hostname; } catch(e) { return null; }
    }).filter(Boolean).slice(0, 6)
  };
}

async function main() {
  const reports = [];
  console.log('=== STARTING COMPETITOR AUTO-AUDIT ===\n');
  
  for (const url of COMPETITORS) {
    console.log(`Auditing: ${url}...`);
    const page = await fetchPage(url);
    if (page.html && page.html.length > 200) {
      const report = analyzeHtml(page.html);
      reports.push({ url, ...report });
      console.log(`✅ Audited successfully.`);
    } else {
      console.log(`❌ Failed: ${page.error || 'Empty response'}`);
    }
  }

  // Generate Markdown report
  let md = `# Competitor Content & Linking Audit Report\n`;
  md += `*Generated automatically by competitor_analyzer.js on ${new Date().toISOString().substring(0, 10)}*\n\n`;
  md += `This report outlines the structural parameters of top regional and niche competitors in the Punjab, Chandigarh, and AI Automation space.\n\n`;

  reports.forEach(r => {
    md += `## 🏢 Competitor: ${r.url}\n`;
    md += `- **Meta Title:** \`${r.title}\`\n`;
    md += `- **Meta Description:** ${r.description}\n`;
    md += `- **Total Page Word Count:** ${r.totalWords} words\n`;
    md += `- **Internal Links:** ${r.internalCount} | **External Outbound Links:** ${r.externalCount}\n`;
    md += `- **H1 Headings:**\n`;
    r.h1s.forEach(h => md += `  - "${h}"\n`);
    md += `- **Top H2 Headings:**\n`;
    r.h2s.forEach(h => md += `  - "${h}"\n`);
    md += `- **Target Keyword Frequency:**\n`;
    md += `  | Keyword | Frequency |\n  |---|---|\n`;
    Object.entries(r.keywordCounts).forEach(([k, count]) => {
      md += `  | ${k} | ${count} |\n`;
    });
    md += `- **Outbound Domain Targets:** ${r.topOutboundDomains.join(', ')}\n\n`;
    md += `---\n\n`;
  });

  const auditPath = path.join(__dirname, '../competitor_seo_audit.md');
  fs.writeFileSync(auditPath, md, 'utf8');
  console.log(`\n🎉 Saved complete markdown audit to ${auditPath}`);
}

main().catch(console.error);

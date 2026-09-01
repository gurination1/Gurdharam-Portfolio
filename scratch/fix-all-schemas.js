const fs = require('fs');

let prerender = fs.readFileSync('prerender.js', 'utf8');

// Replace all TechnicalArticle with TechArticle
prerender = prerender.replace(/"@type":\s*"TechnicalArticle"/g, '"@type": "TechArticle"');

// Fix each blog post jsonld in prerender.js
const blogPosts = [
  {
    path: '/blog/ai-college-admission-bot-punjab',
    headline: 'How Indian Colleges Automate Admissions with WhatsApp AI Agents'
  },
  {
    path: '/blog/sarvam-indic-voice-ai-telephony-agent',
    headline: 'Architecting a Sub-300ms Real-Time Voice AI Agent for Telephony'
  },
  {
    path: '/blog/local-gpu-llm-quantization-mcp-legal-server',
    headline: 'Local GPU LLM Quantization & Model Context Protocol (MCP) Legal Server'
  },
  {
    path: '/blog/automated-1080p60-videogen-pipeline',
    headline: 'yt-auto: Scaling Automated 1080p60 Video Pipelines at $0 Cloud Cost'
  },
  {
    path: '/blog/high-ticket-webgl-3d-spatial-digital-twin',
    headline: 'NEOVRIT: Building 60 FPS WebGL 3D Spatial Digital Twins'
  },
  {
    path: '/blog/offline-ai-crop-disease-scanner-flutter',
    headline: 'Designing an Offline Crop Disease Scanner with Flutter, SQLite and TFLite'
  },
  {
    path: '/blog/whatsapp-ai-agents-healthcare-india',
    headline: 'Why Healthcare Practices in India are Automating Bookings with WhatsApp AI Agents'
  },
  {
    path: '/blog/dpdp-act-compliant-air-gapped-llm-legal-tech',
    headline: 'DPDP Act Compliant Air-Gapped Local LLM Deployment for Law Firms'
  }
];

blogPosts.forEach(b => {
  const fullJsonLd = `jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com${b.path}#article",
          "headline": "${b.headline}",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com${b.path}",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    }`;

  const regex = new RegExp(`path:\\s*['"]${b.path}['"][\\s\\S]*?jsonld:\\s*\\{[\\s\\S]*?\\n\\s*\\},`, 'g');
  if (regex.test(prerender)) {
    prerender = prerender.replace(regex, (match) => {
      return match.replace(/jsonld:\s*\{[\s\S]*?\n\s*\},/, fullJsonLd + ',');
    });
    console.log(`✅ Fixed TechArticle schema for ${b.path}`);
  }
});

fs.writeFileSync('prerender.js', prerender, 'utf8');
console.log('Finished updating prerender.js schemas');

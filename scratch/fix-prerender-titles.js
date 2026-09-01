const fs = require('fs');

let prerender = fs.readFileSync('prerender.js', 'utf8');

const titleMap = {
  '/blog/ai-college-admission-bot-punjab': 'AI College Admission Bot Punjab | Gurdharam',
  '/blog/sarvam-indic-voice-ai-telephony-agent': 'Sub-300ms Indic Voice AI Telephony | Gurdharam',
  '/blog/local-gpu-llm-quantization-mcp-legal-server': 'Local GPU LLM & MCP Legal Server | Gurdharam',
  '/blog/automated-1080p60-videogen-pipeline': 'Automated 1080p60 VideoGen Pipeline | Gurdharam',
  '/blog/high-ticket-webgl-3d-spatial-digital-twin': '60 FPS WebGL 3D Spatial Digital Twins | Gurdharam',
  '/blog/dpdp-act-compliant-air-gapped-llm-legal-tech': 'DPDP Act Air-Gapped Local LLMs | Gurdharam',
  '/case-studies/takemyinterview-ai': 'TakeMyInterview AI Voice Interviewer | Gurdharam',
  '/services/automated-video-generation-engine': 'VideoGen — Automated 1080p60 Pipeline | Gurdharam',
  '/services/multilingual-voice-ai-telephony': 'Sarvam Indic Voice AI Telephony | Gurdharam',
  '/services/ai-college-automation': 'AI College Admission Automation | Gurdharam',
  '/services/ai-voice-agents': 'Sub-300ms Voice AI Telephony Agents | Gurdharam',
  '/services/local-gpu-llm-quantization': 'Air-Gapped Local GPU LLM Legal Server | Gurdharam',
  '/developer-directory': 'AI & Web Developer Directory | Gurdharam',
  '/services/social-media-automation-real-estate': 'Real Estate Video Reels | Gurdharam',
  '/services/website-design-coaching-institutes': 'Coaching Website Design | Gurdharam',
  '/services/website-design-mall-retail': 'Mall & Retail Web Design | Gurdharam',
  '/services/whatsapp-bot-automobile-dealerships': 'WhatsApp Bot for Auto Dealerships | Gurdharam',
  '/services/whatsapp-bot-clinics-hospitals': 'WhatsApp Bot for Clinics & Hospitals | Gurdharam',
  '/services/whatsapp-bot-furniture-showrooms': 'WhatsApp Bot for Furniture Stores | Gurdharam',
  '/services/whatsapp-bot-gyms-fitness': 'WhatsApp Bot for Gyms & Fitness | Gurdharam',
  '/services/whatsapp-bot-jewelry-stores': 'WhatsApp Bot for Jewelry Stores | Gurdharam',
  '/services/whatsapp-bot-malls-retail': 'WhatsApp Bot for Malls & Retail | Gurdharam',
  '/services/whatsapp-bot-real-estate': 'WhatsApp Bot for Real Estate | Gurdharam',
  '/services/whatsapp-bot-restaurants-cafes': 'WhatsApp Bot for Restaurants | Gurdharam',
  '/services/whatsapp-bot-salons-spas': 'WhatsApp Bot for Salons & Spas | Gurdharam',
  '/services/whatsapp-bot-travel-agencies': 'WhatsApp Bot for Travel Agencies | Gurdharam',
  '/services/whatsapp-bot-wedding-planners': 'WhatsApp Bot for Wedding Planners | Gurdharam'
};

for (const [routePath, title] of Object.entries(titleMap)) {
  const regex = new RegExp(`(path:\\s*['"]${routePath}['"][\\s\\S]*?title:\\s*['"])[^'"]+(['"])`, 'g');
  if (regex.test(prerender)) {
    prerender = prerender.replace(regex, `$1${title}$2`);
    console.log(`✅ Updated title for ${routePath} -> "${title}" (${title.length} chars)`);
  }
}

// Ensure no .html links in developer directory
prerender = prerender.replace(/\/developer-directory\.html/g, '/developer-directory');
prerender = prerender.replace(/https:\/\/www\.gurdharam\.com\/developer-directory\.html/g, 'https://www.gurdharam.com/developer-directory');

fs.writeFileSync('prerender.js', prerender, 'utf8');
console.log('Finished updating prerender.js');

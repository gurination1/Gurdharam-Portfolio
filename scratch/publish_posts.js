const https = require('https');

const API_TOKEN = process.argv[2];

if (!API_TOKEN) {
  console.error('❌ Error: Please provide your DEV.to API token.');
  console.error('Usage: node publish_posts.js YOUR_DEV_TO_API_TOKEN');
  process.exit(1);
}

const posts = [
  {
    title: 'How I Built an Offline AI Crop Disease Scanner using Flutter and TensorFlow Lite in Punjab',
    body_markdown: `---
title: How I Built an Offline AI Crop Disease Scanner using Flutter and TensorFlow Lite in Punjab
published: true
tags: flutter, tensorflow, machinelearning, agritech
canonical_url: https://www.gurdharam.com/blog/offline-ai-crop-disease-scanner-flutter
---

In rural farming regions of Punjab, 4G/5G internet connectivity is highly unreliable. If a farmer detects a crop disease, they cannot wait for cloud APIs to return a diagnosis. Latency and bandwidth costs are major barriers.

To solve this, I engineered **Fasal Doctor**, an offline-first agricultural mobile app built in Flutter that scans infected leaves and detects crop diseases in under 2 seconds.

### Technical Architecture
1. **On-Device Inference:** I fine-tuned a **MobileNetV2** model on PlantVillage datasets and local Punjab crop disease patterns using PyTorch, converting it to a compact **TensorFlow Lite (.tflite)** format.
2. **Flutter Integration:** The model runs locally on the smartphone CPU using the \`tflite_flutter\` binding. Camera frames are processed directly on-device with zero external API calls.
3. **Localized Advisory:** Once diagnosed, the app fetches treatment plans and pesticides aligned with Punjab Agricultural University (PAU) guidelines from a local SQLite database.

By running everything on-device, we eliminated API costs entirely, making it 100% free and reliable for rural farming cooperatives.

To see the full case study and code breakdowns, check out my portfolio at [gurdharam.com](https://www.gurdharam.com/).`
  },
  {
    title: 'How Businesses in India are Automating Sales & Bookings with WhatsApp AI Agents',
    body_markdown: `---
title: How Businesses in India are Automating Sales & Bookings with WhatsApp AI Agents
published: true
tags: whatsapp, ai, automation, webhooks
canonical_url: https://www.gurdharam.com/blog/whatsapp-ai-agents-healthcare-india
---

Whether you run a consultancy, car dealership, cleaning service, hospital, or real estate agency in India, WhatsApp is the primary communication channel. Customers expect instantaneous replies.

To automate appointment bookings and inquiry handling on WhatsApp, you must connect the official Meta Cloud API to a custom Node.js webhook server linked to Google Calendar or CRM APIs.

### The Conversion Strategy
1. **24/7 Availability:** Automated agents respond immediately to midnight lead requests, booking appointments directly without manual intervention.
2. **One-Time Build Cost:** By avoiding expensive SaaS subscription models (like WATI or AiSensy) and hosting webhooks on pay-as-you-go serverless setups, you save up to 90% of operational costs.
3. **Local Language Support:** Standard bots fail when users type in mixed Hinglish or regional terms. Custom NLP trees allow you to qualify leads in Hinglish, Hindi, and Punjabi natively.

To see the full case study, check out my portfolio at [gurdharam.com](https://www.gurdharam.com/).`
  },
  {
    title: 'Building an Autonomous 24/7 Faceless YouTube & Social Media Automation Pipeline',
    body_markdown: `---
title: Building an Autonomous 24/7 Faceless YouTube & Social Media Automation Pipeline
published: true
tags: automation, youtube, python, marketing
canonical_url: https://www.gurdharam.com/services/ai-automation
---

Modern businesses and content creators are losing hundreds of hours manually editing and uploading marketing videos across multiple social platforms.

To solve this, I engineered an **autonomous 24/7 video rendering and cross-posting pipeline** that requires zero human intervention.

### How the Automation Works
1. **Programmatic Video Generation:** Using a Python/Node.js backend, the system fetches trending topics or business content, generates voiceovers via TTS APIs, and programmatically renders video frames using FFmpeg and WebGL.
2. **Omnichannel Cross-Posting:** The rendered video is automatically distributed. The script logs into YouTube (Shorts), Instagram (Reels), Facebook, Rumble, and Dailymotion using official APIs or Puppeteer headless browsers.
3. **24/7 Serverless Execution:** Hosted on an autonomous server node, the pipeline runs continuously on cron schedules. It generates and uploads content while you sleep.

This allows businesses to multiply their marketing reach, secure passive ad revenue, and build a massive audience without ever opening video editing software.

To see the complete automation architecture and my other AI agent builds, check out my portfolio at [gurdharam.com](https://www.gurdharam.com/).`
  }
];

function publishPost(post) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ article: post });
    
    const req = https.request({
      hostname: 'dev.to',
      path: '/api/articles',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_TOKEN,
        'User-Agent': 'NodeJS-Publisher'
      }
    }, (res) => {
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        if (res.statusCode === 201) {
          const result = JSON.parse(responseBody);
          resolve(result.url);
        } else {
          reject(new Error(`Failed to publish: ${res.statusCode} - ${responseBody}`));
        }
      });
    });

    req.on('error', err => reject(err));
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('🚀 Publishing guest posts to DEV.to programmatically...');
  for (const post of posts) {
    try {
      console.log(`Publishing: "${post.title}"...`);
      const url = await publishPost(post);
      console.log(`✅ Success! Published at: ${url}`);
    } catch (err) {
      console.error(`❌ Error publishing "${post.title}": ${err.message}`);
    }
  }
}

main();

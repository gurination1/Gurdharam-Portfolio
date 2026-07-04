const https = require('https');

const API_TOKEN = process.argv[2];

if (!API_TOKEN) {
  console.error('❌ Error: Please provide your DEV.to API token.');
  console.error('Usage: node publish_posts.js YOUR_DEV_TO_API_TOKEN');
  process.exit(1);
}

const posts = [
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

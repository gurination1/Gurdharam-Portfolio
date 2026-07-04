const https = require('https');

const data = JSON.stringify({
  host: "www.gurdharam.com",
  key: "b4f8e2a1c7d94e5f8a3b6c9d2e1f4a7b",
  keyLocation: "https://www.gurdharam.com/b4f8e2a1c7d94e5f8a3b6c9d2e1f4a7b.txt",
  urlList: [
    "https://www.gurdharam.com/",
    "https://www.gurdharam.com/services/web-development",
    "https://www.gurdharam.com/services/ai-automation",
    "https://www.gurdharam.com/services/crop-disease-detection-app",
    "https://www.gurdharam.com/services/dairy-management-app-flutter",
    "https://www.gurdharam.com/services/whatsapp-bot-dental-clinic",
    "https://www.gurdharam.com/services/web-developer-muktsar-punjab",
    "https://www.gurdharam.com/services/offline-ai-app-development",
    "https://www.gurdharam.com/case-studies/doodhisaab",
    "https://www.gurdharam.com/case-studies/fasal-doctor",
    "https://www.gurdharam.com/blog",
    "https://www.gurdharam.com/blog/offline-ai-crop-disease-scanner-flutter",
    "https://www.gurdharam.com/blog/whatsapp-ai-agents-healthcare-india"
  ]
});

// We submit to Bing IndexNow API endpoint
const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  let responseData = '';
  
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  
  res.on('end', () => {
    console.log('Submission finished.');
    if (res.statusCode === 200) {
      console.log('✅ IndexNow submission successful!');
    } else {
      console.error(`❌ Failed to submit to IndexNow. Status code: ${res.statusCode}`);
      console.error('Response:', responseData);
    }
  });
});

req.on('error', (error) => {
  console.error('Error submitting to IndexNow:', error);
});

req.write(data);
req.end();

const puppeteer = require('puppeteer-core');

const TEST_URLS = [
  'https://gurdharam.com/',
  'https://gurdharam.com/services/web-development',
  'https://gurdharam.com/services/ai-automation',
  'https://gurdharam.com/services/ai-voice-agents',
  'https://gurdharam.com/services/multilingual-voice-ai-telephony',
  'https://gurdharam.com/services/local-gpu-llm-quantization',
  'https://gurdharam.com/services/whatsapp-business-bot',
  'https://gurdharam.com/case-studies/doodhisaab',
  'https://gurdharam.com/case-studies/fasal-doctor',
  'https://gurdharam.com/case-studies/takemyinterview-ai',
  'https://gurdharam.com/blog',
  'https://gurdharam.com/blog/dpdp-act-compliant-air-gapped-llm-legal-tech',
  'https://gurdharam.com/services/whatsapp-bot-jewelry-stores'
];

async function runAudit() {
  console.log('🚀 Launching Headless Chromium with Puppeteer...');
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  let totalErrors = 0;

  for (const url of TEST_URLS) {
    console.log(`\n🔍 Auditing: ${url}`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const pageErrors = [];
    const consoleErrors = [];

    page.on('pageerror', (err) => {
      console.error(`  ❌ [PAGE ERROR]: ${err.message}`);
      pageErrors.push(err.message);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.error(`  ⚠️ [CONSOLE ERROR]: ${msg.text()}`);
        consoleErrors.push(msg.text());
      }
    });

    try {
      const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      const status = response ? response.status() : 0;
      console.log(`  🌐 HTTP Status: ${status}`);

      const title = await page.title();
      const h1 = await page.$eval('h1', el => el.innerText).catch(() => 'NO H1');
      console.log(`  📄 Title: "${title}"`);
      console.log(`  🏷️  H1: "${h1.substring(0, 60)}..."`);

      if (pageErrors.length > 0) {
        console.log(`  ❌ FAILED with ${pageErrors.length} runtime exceptions!`);
        totalErrors += pageErrors.length;
      } else {
        console.log(`  ✅ ZERO Uncaught Runtime Exceptions!`);
      }
    } catch (e) {
      console.error(`  ❌ Navigation Error: ${e.message}`);
      totalErrors++;
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log('\n========================================');
  if (totalErrors === 0) {
    console.log('🎉 ALL 13 TESTED ROUTES PASSED WITH 0 ERRORS!');
  } else {
    console.log(`🚨 AUDIT FAILED with ${totalErrors} errors.`);
  }
  console.log('========================================\n');
}

runAudit().catch(console.error);

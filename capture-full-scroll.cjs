const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--headless=new'],
  });

  const outDir = path.join(__dirname, 'inspect-screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // 1. Mobile Viewport 390x844
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mobilePage.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  console.log('Capturing mobile stacked cards...');
  for (let i = 0; i < 4; i++) {
    // Scroll down to each stacked card
    await mobilePage.evaluate((cardIdx) => {
      const heroHeight = window.innerHeight;
      window.scrollTo({ top: heroHeight + cardIdx * window.innerHeight * 0.95, behavior: 'instant' });
    }, i);
    await new Promise(r => setTimeout(r, 1200));

    const cardData = await mobilePage.evaluate((cardIdx) => {
      const cards = Array.from(document.querySelectorAll('.card-content'));
      const card = cards[cardIdx];
      if (!card) return null;
      const rect = card.getBoundingClientRect();
      const h2 = card.querySelector('h2');
      const p = card.querySelector('p');
      const flipCards = Array.from(card.querySelectorAll('[class*="FlipCard"], [class*="rounded-2xl"]')).map(fc => {
        const r = fc.getBoundingClientRect();
        return { w: Math.round(r.width), h: Math.round(r.height), top: Math.round(r.top), left: Math.round(r.left) };
      });
      return {
        idx: cardIdx + 1,
        title: h2 ? h2.innerText : '',
        desc: p ? p.innerText : '',
        cardRect: { w: Math.round(rect.width), h: Math.round(rect.height), top: Math.round(rect.top), left: Math.round(rect.left) },
        flipCards: flipCards.slice(0, 4),
      };
    }, i);

    console.log(`Card ${i + 1} Telemetry:`, JSON.stringify(cardData, null, 2));
    const ssPath = path.join(outDir, `mobile-card-${i + 1}.png`);
    await mobilePage.screenshot({ path: ssPath });
    console.log(`Saved screenshot: ${ssPath}`);
  }

  // 2. Desktop Viewport 1440x900
  const desktopPage = await browser.newPage();
  await desktopPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await desktopPage.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  console.log('Capturing desktop stacked cards...');
  for (let i = 0; i < 4; i++) {
    await desktopPage.evaluate((cardIdx) => {
      const heroHeight = window.innerHeight;
      window.scrollTo({ top: heroHeight + cardIdx * window.innerHeight * 0.95, behavior: 'instant' });
    }, i);
    await new Promise(r => setTimeout(r, 1200));

    const ssPath = path.join(outDir, `desktop-card-${i + 1}.png`);
    await desktopPage.screenshot({ path: ssPath });
    console.log(`Saved desktop screenshot: ${ssPath}`);
  }

  await browser.close();
  console.log('Full screenshot sweep complete!');
})();

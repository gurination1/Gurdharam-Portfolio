const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--headless=new'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  // Scroll down to cards section
  console.log('Scrolling to card section...');
  await page.evaluate(() => {
    window.scrollTo(0, window.innerHeight * 1.5);
  });
  await new Promise(r => setTimeout(r, 1500));

  // Inspect all card-content elements
  const cardsInfo = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.card-content'));
    return cards.map((c, i) => {
      const rect = c.getBoundingClientRect();
      const textNodes = Array.from(c.querySelectorAll('h2, h3, p, span, button, a')).map(el => ({
        tag: el.tagName,
        text: el.innerText.trim().slice(0, 50),
        rect: {
          top: Math.round(el.getBoundingClientRect().top),
          left: Math.round(el.getBoundingClientRect().left),
          width: Math.round(el.getBoundingClientRect().width),
          height: Math.round(el.getBoundingClientRect().height),
        },
      }));
      const flipCards = Array.from(c.querySelectorAll('.perspective-1000, [class*="FlipCard"], [class*="rounded-2xl"]')).map(fc => {
        const r = fc.getBoundingClientRect();
        return {
          width: Math.round(r.width),
          height: Math.round(r.height),
          top: Math.round(r.top),
          left: Math.round(r.left),
        };
      });

      return {
        cardIndex: i,
        rect: {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          top: Math.round(rect.top),
          left: Math.round(rect.left),
        },
        flipCards,
        textNodes: textNodes.slice(0, 10),
      };
    });
  });

  console.log('Cards Info on Mobile (390px):\n', JSON.stringify(cardsInfo, null, 2));

  const outDir = path.join(__dirname, 'inspect-screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (let i = 0; i < 4; i++) {
    await page.evaluate((idx) => {
      window.scrollTo(0, window.innerHeight * (1.2 + idx * 1.0));
    }, i);
    await new Promise(r => setTimeout(r, 1000));
    const ssPath = path.join(outDir, `card-mobile-step-${i + 1}.png`);
    await page.screenshot({ path: ssPath, fullPage: false });
    console.log(`Saved screenshot: ${ssPath}`);
  }

  await browser.close();
  console.log('Puppeteer mobile inspection completed successfully!');
})();

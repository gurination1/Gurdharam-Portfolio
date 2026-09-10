const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Google Site Verification | Gurdharam</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #080808; color: #f0ede6; padding: 40px 20px; max-width: 700px; margin: 0 auto; line-height: 1.6; }
    a { color: #d4af37; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .token-box { background: #121212; border: 1px solid #262626; padding: 16px; border-radius: 8px; font-family: monospace; margin: 20px 0; word-break: break-all; }
  </style>
</head>
<body>
  <div class="token-box">google-site-verification: google884ab312af7ff99a.html</div>
  <main>
    <h1>Google Site Verification Token</h1>
    <p>This resource serves as the automated verification token for Google Search Console and associated webmaster domain property indexing tools on the official engineering portfolio of Gurdharam Jeet Singh and Manveer Singh. Our software engineering practice specializes in high-throughput enterprise automation, local GPU LLM quantization, on-premise WhatsApp Cloud API automation, and sub-second WebGL digital twin platforms.</p>
    <p>For search crawlers and site audit systems, please note that this endpoint is designated with noindex and nofollow directives as an administrative authentication file. If you are navigating this website as an engineer, client, or enterprise partner, please visit our primary public interfaces through the links provided below.</p>
    <nav>
      <ul>
        <li><a href="https://www.gurdharam.com/">Return to Portfolio Home</a></li>
        <li><a href="https://www.gurdharam.com/services">Explore Engineering Services</a></li>
        <li><a href="https://www.gurdharam.com/about">Meet Founders Gurdharam &amp; Manveer</a></li>
        <li><a href="https://www.gurdharam.com/websites">Browse Live Client Websites Showcase</a></li>
        <li><a href="https://www.gurdharam.com/blog">Read Technical Engineering Articles</a></li>
      </ul>
    </nav>
  </main>
</body>
</html>`;

  return res.status(200).send(html);
};

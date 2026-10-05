module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  const { code, state, error, error_description } = req.query || {};

  if (error) {
    return res.status(400).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Connection Failed | Multi Channel Publisher</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0a0a0c; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
          .card { background: #16161a; border: 1px solid #ff4444; border-radius: 12px; padding: 40px; max-width: 480px; text-align: center; }
          h1 { color: #ff5555; margin-bottom: 12px; font-size: 24px; }
          p { color: #a1a1aa; font-size: 15px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Connection Incomplete</h1>
          <p>${error_description || error || 'The authorization process was cancelled.'}</p>
        </div>
      </body>
      </html>
    `);
  }

  // Success screen
  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>WhatsApp Connected | Multi Channel Publisher</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #07090e; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .card { background: #11141d; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 48px; max-width: 460px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.6); }
        .badge { display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: rgba(37,211,102,0.15); color: #25d366; font-size: 32px; margin-bottom: 20px; }
        h1 { margin: 0 0 12px; font-size: 24px; font-weight: 700; }
        p { color: #94a3b8; font-size: 15px; line-height: 1.6; margin: 0 0 24px; }
        .btn { display: inline-block; background: #25d366; color: #000; font-weight: 600; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px; transition: transform 0.2s; }
        .btn:hover { transform: translateY(-2px); }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="badge">✓</div>
        <h1>WhatsApp Connected!</h1>
        <p>Your WhatsApp Business Account is now linked with <strong>Multi Channel Publisher</strong>. Our AI engine is synchronizing your account settings.</p>
        <a href="https://www.gurdharam.com" class="btn">Return to Dashboard</a>
      </div>
    </body>
    </html>
  `);
};

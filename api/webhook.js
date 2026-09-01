module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Hub-Signature-256');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const mode = req.query ? (req.query['hub.mode'] || req.query.hub_mode) : undefined;
    const token = req.query ? (req.query['hub.verify_token'] || req.query.hub_verify_token) : undefined;
    const challenge = req.query ? (req.query['hub.challenge'] || req.query.hub_challenge) : undefined;

    if (mode === 'subscribe' && token === 'mywhatsapptoken123') {
      console.log('WEBHOOK_VERIFIED: Successfully verified Meta webhook token');
      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).send(challenge);
    } else {
      console.warn('WEBHOOK_VERIFY_FAILED: Invalid token or mode', { mode, token });
      return res.status(403).send('Forbidden');
    }
  }

  if (req.method === 'POST') {
    console.log('Incoming WhatsApp Webhook Event:', JSON.stringify(req.body, null, 2));
    return res.status(200).json({ status: 'ok' });
  }

  res.setHeader('Allow', ['GET', 'POST', 'OPTIONS']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
};

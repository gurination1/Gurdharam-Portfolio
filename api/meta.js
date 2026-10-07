module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { path } = req.query;
  if (!path) {
    return res.status(400).json({ error: 'Missing path query parameter' });
  }

  const url = new URL(`https://graph.facebook.com/${path}`);
  for (const [key, value] of Object.entries(req.query)) {
    if (key !== 'path') {
      url.searchParams.append(key, value);
    }
  }

  try {
    const headers = {};
    if (req.headers.authorization) {
      headers['Authorization'] = req.headers.authorization;
    }
    if (req.headers['content-type']) {
      headers['Content-Type'] = req.headers['content-type'];
    }

    const fetchOptions = {
      method: req.method,
      headers
    };

    if (req.method === 'POST' && req.body) {
      fetchOptions.body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    }

    const response = await fetch(url.toString(), fetchOptions);
    const data = await response.json().catch(() => ({}));

    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

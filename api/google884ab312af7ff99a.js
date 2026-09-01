module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send('google-site-verification: google884ab312af7ff99a.html');
};

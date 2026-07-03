const { google } = require('googleapis');
const path = require('path');

const keyPath = path.join(__dirname, 'gsc-key.json');
const siteUrl = 'sc-domain:gurdharam.com'; // Domain property syntax in GSC API
const sitemapUrl = 'https://gurdharam.com/sitemap.xml';

async function main() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const webmasters = google.webmasters({ version: 'v3', auth });

    console.log(`Submitting sitemap: ${sitemapUrl} to ${siteUrl}`);
    const res = await webmasters.sitemaps.submit({
      siteUrl: siteUrl,
      feedpath: sitemapUrl,
    });

    console.log('Sitemap submitted successfully!', res.data);
  } catch (err) {
    console.error('Error submitting sitemap:');
    if (err.response && err.response.data) {
        console.error(err.response.data);
    } else {
        console.error(err);
    }
  }
}

main();

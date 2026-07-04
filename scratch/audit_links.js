const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const distPath = path.resolve(__dirname, '../dist');

// Retrieve all pre-rendered HTML files
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'assets' && file !== 'node_modules') {
        getHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Extract links from HTML content
function extractLinks(htmlContent) {
  const links = [];
  const regex = /href="([^"]+)"/g;
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    links.push(match[1]);
  }
  return links;
}

// Verify external URL
function checkExternalUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    try {
      const req = client.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
        resolve({ status: res.statusCode, location: res.headers.location || null });
      });
      req.on('error', (e) => {
        // Retry with GET if HEAD fails
        const getReq = client.request(url, { method: 'GET', timeout: 5000 }, (getRes) => {
          getRes.resume(); // consume response
          resolve({ status: getRes.statusCode, location: getRes.headers.location || null });
        });
        getReq.on('error', (err) => {
          resolve({ status: 'ERROR', error: err.message });
        });
        getReq.end();
      });
      req.end();
    } catch (err) {
      resolve({ status: 'ERROR', error: err.message });
    }
  });
}

async function audit() {
  console.log('=== STARTING LOCAL PORTFOLIO LINK AUDIT ===');
  const htmlFiles = getHtmlFiles(distPath);
  console.log(`Found ${htmlFiles.length} HTML files to inspect.\n`);

  const results = {};
  const externalUrls = new Set();
  const internalUrls = new Set();

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(distPath, file);
    const links = extractLinks(content);
    
    results[relativePath] = {
      internal: [],
      external: []
    };

    links.forEach(link => {
      // Filter out anchors, mailto, tel
      if (link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('javascript:')) {
        return;
      }
      
      if (link.startsWith('http://') || link.startsWith('https://')) {
        // External link
        results[relativePath].external.push(link);
        externalUrls.add(link);
      } else {
        // Internal link
        results[relativePath].internal.push(link);
        internalUrls.add(link);
      }
    });
  }

  // 1. Audit Internal Links locally
  console.log('--- 1. Auditing Internal Links ---');
  const internalStatus = {};
  for (const link of internalUrls) {
    // Resolve URL path to local file path
    let cleanedPath = link.split('#')[0].split('?')[0];
    if (cleanedPath === '') cleanedPath = '/';
    
    let localFile;
    let isRedirect = false;
    let redirectTo = null;

    if (cleanedPath.endsWith('/')) {
      localFile = path.join(distPath, cleanedPath, 'index.html');
    } else if (path.extname(cleanedPath) === '') {
      // e.g. /blog or /services/web-development
      // Since cleanUrls is enabled on Vercel, it could be either folder/index.html or folder.html
      const fileOption = path.join(distPath, cleanedPath + '.html');
      const folderOption = path.join(distPath, cleanedPath, 'index.html');
      if (fs.existsSync(folderOption)) {
        localFile = folderOption;
      } else if (fs.existsSync(fileOption)) {
        localFile = fileOption;
      } else {
        localFile = folderOption; // default to fail check
      }
    } else {
      localFile = path.join(distPath, cleanedPath);
    }

    const exists = fs.existsSync(localFile);
    internalStatus[link] = {
      exists,
      localFile,
      isRedirect,
      redirectTo
    };

    if (!exists) {
      console.log(`❌ BROKEN INTERNAL LINK: "${link}"`);
    }
  }

  // 2. Audit External Links
  console.log('\n--- 2. Auditing External Links (calling APIs) ---');
  const externalStatus = {};
  const externalList = Array.from(externalUrls);
  
  for (let i = 0; i < externalList.length; i++) {
    const url = externalList[i];
    console.log(`Checking (${i + 1}/${externalList.length}): ${url}...`);
    const statusRes = await checkExternalUrl(url);
    externalStatus[url] = statusRes;
    
    if (statusRes.status === 'ERROR' || statusRes.status >= 400) {
      console.log(`❌ BROKEN EXTERNAL LINK: "${url}" -> Status: ${statusRes.status} (Error: ${statusRes.error || ''})`);
    } else if (statusRes.status >= 300 && statusRes.status < 400) {
      console.log(`⚠️  REDIRECTING EXTERNAL LINK: "${url}" -> Status: ${statusRes.status} (Redirects to: ${statusRes.location || ''})`);
    }
  }

  // Summary Report
  console.log('\n=== AUDIT SUMMARY ===');
  let brokenInternal = 0;
  let brokenExternal = 0;
  let redirectingExternal = 0;

  for (const link in internalStatus) {
    if (!internalStatus[link].exists) brokenInternal++;
  }
  for (const url in externalStatus) {
    const status = externalStatus[url].status;
    if (status === 'ERROR' || status >= 400) brokenExternal++;
    if (status >= 300 && status < 400) redirectingExternal++;
  }

  console.log(`Broken Internal Links: ${brokenInternal}`);
  console.log(`Broken External Links: ${brokenExternal}`);
  console.log(`Redirecting External Links: ${redirectingExternal}`);
}

audit();

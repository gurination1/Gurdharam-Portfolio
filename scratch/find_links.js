const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');

// Retrieve all HTML files
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

// Convert absolute or relative link to route path (e.g. /services/web-development)
function getCleanRoute(link) {
  let url = link.split('#')[0].split('?')[0]; // Remove hash and query
  if (url.startsWith('https://www.gurdharam.com')) {
    url = url.replace('https://www.gurdharam.com', '');
  } else if (url.startsWith('https://gurdharam.com')) {
    url = url.replace('https://gurdharam.com', '');
  }
  if (url.startsWith('http://')) return null; // External
  if (url.startsWith('https://')) return null; // External
  if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:')) return null;
  if (!url.startsWith('/')) {
    // Relative link, resolve it
    return null; 
  }
  
  // Normalize
  if (url === '') url = '/';
  if (url.length > 1 && url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  return url;
}

function analyze() {
  console.log('=== RUNNING LINK GRAPH ANALYSIS ===');
  const htmlFiles = getHtmlFiles(distPath);
  const routeToFiles = {};
  
  // Map routes to files and list of outgoing links
  const siteGraph = {};
  
  htmlFiles.forEach(file => {
    const relativePath = path.relative(distPath, file);
    let route = '/' + relativePath.replace(/\\/g, '/').replace('/index.html', '').replace('index.html', '');
    if (route.endsWith('/')) route = route.slice(0, -1);
    if (route === '') route = '/';
    
    const content = fs.readFileSync(file, 'utf8');
    const links = extractLinks(content).map(getCleanRoute).filter(Boolean);
    
    siteGraph[route] = {
      file: relativePath,
      outgoing: links,
      incoming: []
    };
  });
  
  // Populate incoming links
  Object.keys(siteGraph).forEach(srcRoute => {
    const data = siteGraph[srcRoute];
    data.outgoing.forEach(destRoute => {
      // Find matching destination route
      let matchRoute = destRoute;
      if (!siteGraph[matchRoute]) {
        // Try with trailing slash or check if matches
        if (matchRoute === '/') {
          // root
        } else {
          // route mismatch check
        }
      }
      
      if (siteGraph[matchRoute]) {
        siteGraph[matchRoute].incoming.push(srcRoute);
      } else {
        console.log(`⚠️  Link from ${srcRoute} to unresolved route: ${destRoute}`);
      }
    });
  });
  
  // Print results
  console.log('\n--- Link Analysis Summary ---');
  Object.keys(siteGraph).forEach(route => {
    const data = siteGraph[route];
    const incomingCount = data.incoming.length;
    const outgoingCount = data.outgoing.length;
    console.log(`Route: ${route}`);
    console.log(`  File: ${data.file}`);
    console.log(`  Incoming Links (${incomingCount}): [${[...new Set(data.incoming)].join(', ')}]`);
    console.log(`  Outgoing Links (${outgoingCount}): [${[...new Set(data.outgoing)].join(', ')}]`);
    
    if (incomingCount <= 1) {
      console.log(`  🚨 WARNING: Only ${incomingCount} incoming link(s)!`);
    }
    if (outgoingCount === 0) {
      console.log(`  🚨 WARNING: No outgoing links!`);
    }
    console.log('');
  });
}

analyze();

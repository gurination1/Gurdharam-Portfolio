const fs = require('fs');
const path = require('path');

console.log('Starting Master SEO & Audit Hardening...');

// 1. Fix dental-clinic copy-paste bug in prerender.js
let prerender = fs.readFileSync('prerender.js', 'utf8');
prerender = prerender.replace(/https:\/\/www\.gurdharam\.com\/services\/whatsapp-bot-dental-clinic#faq/g, 'https://www.gurdharam.com/services/whatsapp-business-bot#faq');
console.log('✅ Fixed whatsapp-bot-dental-clinic copy-paste bug');

// 2. Fix multi-line meta description replacement in prerender.js
// Use robust regex replacements for all head tags
const robustHeadReplacements = `
  // Robust regex replacements for all head tags
  pageHtml = pageHtml
    .replace(/<title>[\\s\\S]*?<\\/title>/i, \`<title>\${route.title}</title>\`)
    .replace(/<link\\s+rel=["']canonical["'][^>]*\\/?>/i, \`<link rel="canonical" href="\${route.canonical}" />\`)
    .replace(/<meta\\s+name=["']description["'][\\s\\S]*?\\/?>/i, \`<meta name="description" content="\${route.description}" />\`)
    .replace(/<meta\\s+property=["']og:title["'][^>]*\\/?>/i, \`<meta property="og:title" content="\${route.title}" />\`)
    .replace(/<meta\\s+property=["']og:description["'][^>]*\\/?>/i, \`<meta property="og:description" content="\${route.description}" />\`)
    .replace(/<meta\\s+property=["']og:url["'][^>]*\\/?>/i, \`<meta property="og:url" content="\${route.canonical}" />\`)
    .replace(/<meta\\s+name=["']twitter:title["'][^>]*\\/?>/i, \`<meta name="twitter:title" content="\${route.title}" />\`)
    .replace(/<meta\\s+name=["']twitter:description["'][^>]*\\/?>/i, \`<meta name="twitter:description" content="\${route.description}" />\`);
`;

prerender = prerender.replace(/\.replace\(.*<title>Gurdharam Jeet Singh[\s\S]*?route\.description}\" \/\>\);/, robustHeadReplacements.trim());
console.log('✅ Replaced prerender head replacement logic with robust regex');

// 3. Inject BreadcrumbList schema dynamically for every route that doesn't have it
const breadcrumbInjector = `
  // Automatically inject BreadcrumbList schema if not present
  if (route.jsonld && route.path !== '/') {
    const segs = route.path.split('/').filter(Boolean);
    const crumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.gurdharam.com/"
      }
    ];
    let curr = "https://www.gurdharam.com";
    segs.forEach((seg, i) => {
      curr += \`/\${seg}\`;
      const name = seg.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase());
      crumbs.push({
        "@type": "ListItem",
        "position": i + 2,
        "name": name,
        "item": curr
      });
    });

    const bc = {
      "@type": "BreadcrumbList",
      "@id": \`https://www.gurdharam.com\${route.path}#breadcrumb\`,
      "itemListElement": crumbs
    };

    if (route.jsonld['@graph']) {
      if (!route.jsonld['@graph'].some(n => n['@type'] === 'BreadcrumbList')) {
        route.jsonld['@graph'].push(bc);
      }
    } else if (Array.isArray(route.jsonld)) {
      if (!route.jsonld.some(n => n['@type'] === 'BreadcrumbList')) {
        route.jsonld.push(bc);
      }
    } else {
      route.jsonld = {
        "@context": "https://schema.org",
        "@graph": [route.jsonld, bc]
      };
    }
  }
`;

prerender = prerender.replace(/if \(route\.jsonld\) \{/, breadcrumbInjector + '\n  if (route.jsonld) {');
console.log('✅ Added automatic BreadcrumbList schema injection to prerender.js');

fs.writeFileSync('prerender.js', prerender, 'utf8');
console.log('Saved prerender.js successfully');

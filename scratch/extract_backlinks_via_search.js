const fs = require('fs');
const path = require('path');

// Competitor domains and the high-quality backlink opportunities extracted via Google searches
const BACKLINK_OPPORTUNITIES = [
  {
    category: 'High-Authority B2B Directories & Reviews',
    importance: 'Critical for entity validation in Google AI Overviews & local packs',
    targets: [
      {
        platform: 'Clutch.co (DA 72)',
        competitorUrl: 'https://clutch.co/profile/appwrk-solutions',
        description: 'Primary platform where B2B buyers look for web agencies. Ranks high for local and global software contractor lists.',
        action: 'Create a free agency profile, list services as Web Dev and AI automation, and ask client references for reviews.'
      },
      {
        platform: 'TechBehemoths (DA 68)',
        competitorUrl: 'https://techbehemoths.com/company/appwrk-it-solutions-pvt-ltd',
        description: 'Highly authoritative tech company listing directory that ranks for "top software developers in India" and related queries.',
        action: 'Submit your portfolio profile and case studies under Web Development & AI services.'
      },
      {
        platform: 'Trustpilot (DA 92)',
        competitorUrl: 'https://www.trustpilot.com/review/thinknext.co.in',
        description: 'Extremely high trust score backlink. Crawlers index Trustpilot scores to verify business legitimacy.',
        action: 'Register gurdharam.com and request verified ratings from previous agricultural app users.'
      },
      {
        platform: 'PrimeFirms (DA 36)',
        competitorUrl: 'https://primefirms.co/company/appwrk-solutions',
        description: 'Niche software agency directory showing high referring authority for Indian app developers.',
        action: 'List DoodHisaab and Fasal Doctor under Android/iOS software developer segments.'
      },
      {
        platform: 'Wellfound / AngelList (DA 83)',
        competitorUrl: 'https://wellfound.com/company/thinknext-technologies-private-limited',
        description: 'Authoritative startup directory. Ranks for local technology developers.',
        action: 'Create a developer-profile page and link your website URL as the main homepage link.'
      }
    ]
  },
  {
    category: 'Developer Case Study & Guest Post Blogs (Do-Follow Backlinks)',
    importance: 'Passes high link-equity (juice) directly into custom 3D web and ML subpages',
    targets: [
      {
        platform: 'DEV.to (DA 81)',
        type: 'Canonical Blog Syndication',
        description: 'Provides clean do-follow backlinks and indexes instantly in search engines.',
        action: 'Publish the Fasal Doctor agritech case study with canonical pointing to: https://www.gurdharam.com/case-studies/fasal-doctor.'
      },
      {
        platform: 'Hashnode (DA 78)',
        type: 'Developer Community Blogging',
        description: 'Excellent platform to publish detailed architectural case studies for Three.js and on-device ML.',
        action: 'Publish "Building custom WhatsApp booking webhooks with local SQLite databases" pointing back to your services pages.'
      },
      {
        platform: 'XSquare SEO / Local Directories (DA 42)',
        type: 'Chandigarh Digital Directory',
        description: 'Ranks on Page 1 for local digital marketing and web agencies in Chandigarh/Mohali.',
        action: 'Submit local business profiles to Chandigarh-specific directories to establish geo-relevance.'
      }
    ]
  },
  {
    category: 'SaaS Integration & Marketplace Embeds',
    importance: 'Drives high-intent transactional referral traffic looking to hire developers',
    targets: [
      {
        platform: 'Open Dental / PMS Marketplaces',
        competitorUrl: 'https://wazzy.io/integrations',
        description: 'Clinic bot competitors (Wazzy) get authoritative links by listing their custom scheduling integrations on Open Dental directory.',
        action: 'Write a developer case study showing your webhook integration setup and submit it to community forums.'
      },
      {
        platform: 'Zoho & HubSpot Developer Directories',
        competitorUrl: 'https://gurusup.com/zoho-hubspot-integration',
        description: 'B2B CRM agencies link their WhatsApp bots to Zoho and HubSpot directories to capture active corporate leads.',
        action: 'Build a standard API integration connector case study and link your portfolio pages.'
      }
    ]
  }
];

function generateBacklinkReport() {
  let md = `# Competitor Backlinks & Guest Post Targets
*Curated list of high-quality backlinks, guest posts, and directories based on real-time competitor audits.*

---

## 🎯 Executive Strategy: Quality Over Quantity
Rather than building hundreds of spammy profile backlinks, Gurdharam.com should replicate the top high-DA references of regional leaders (**ThinkNEXT**, **Apensia**, **APPWRK**). These links pass real authority to rank your custom web and AI automation services on day one.

`;

  BACKLINK_OPPORTUNITIES.forEach(section => {
    md += `### 🏢 Category: ${section.category}\n`;
    md += `*${section.importance}*\n\n`;
    md += `| Platform | Competitor Anchor | Action to Replicate | Value / Benefit |\n`;
    md += `|---|---|---|---|\n`;
    
    section.targets.forEach(t => {
      md += `| **${t.platform}** | ${t.competitorUrl ? `[View competitor link](${t.competitorUrl})` : `\`${t.type}\``} | ${t.action} | ${t.description} |\n`;
    });
    md += `\n---\n\n`;
  });

  const reportPath = path.join(__dirname, '../competitor_seo_audit.md');
  // Read existing file if any, append the new backlink section
  let existingContent = '';
  if (fs.existsSync(reportPath)) {
    existingContent = fs.readFileSync(reportPath, 'utf8');
  }

  // Combine original crawl metrics with detailed backlink launchpad
  const combinedReport = existingContent + '\n\n' + md;
  fs.writeFileSync(reportPath, combinedReport, 'utf8');
  console.log(`Saved combined backlinks database to ${reportPath}`);
}

generateBacklinkReport();

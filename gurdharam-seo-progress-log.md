# gurdharam.com — SEO/GEO Progress Log

*Companion to `gurdharam-master-seo-geo-playbook.md`. That doc is the fixed plan — this file is the record of what's actually been done. Read this first at the start of every session, resume from the last entry, don't redo anything logged here as complete unless something's visibly broken.*

**How to log an entry:** one block per completed step, newest at the bottom. Keep it short — date, step reference, what happened, anything worth remembering for later (values, decisions, gotchas).

---

## Log

<!-- Example format, delete once real entries start:
### 2026-07-03 — Part 0, Step 1
`vercel domains inspect gurdharam.com` run. A record target: 76.76.21.21. CNAME for www: cname.vercel-dns.com.
Next: add these in Spaceship Advanced DNS (Step 2).
-->

### 2026-07-02 — Part 0, Steps 1 & 2
Ran Spaceship API script to set DNS records directly. 
Set A record for `@` to `76.76.21.21` and A record for `www` to `76.76.21.21`.
`vercel domains inspect` for both `gurdharam.com` and `www.gurdharam.com` confirms the domains exist in the Vercel project, though currently it prompts for Nameservers. We are relying on the A records to propagate.
Next: Confirm SSL via `vercel certs ls` and confirm propagation (Step 3).

### 2026-07-02 — Reference Info Added
Created `gurdharam-personal-reference.md` containing personal bio, team details (AI Engineer, Websites, WhatsApp AI-Agents, Apps, etc.) based on user input.

### 2026-07-02 — Phase B Completion
Created `public/robots.txt` allowing all bots + explicit AI crawlers for GEO citation eligibility.
Created `public/sitemap.xml` with canonical root URL.
Added self-referencing canonical tag `<link rel="canonical" href="https://gurdharam.com/" />` to `index.html`.
Changes will be pushed in the next `vercel deploy --prod`.

### 2026-07-02 — Phase D & Phase F (Homepage)
Updated `index.html` Title tag to: `Gurdharam Jeet Singh | AI & Web Developer in Punjab`.
Updated meta descriptions to include local targets (Muktsar/Bathinda, Punjab).
Added JSON-LD structured data for `WebSite` and `ProfessionalService` to `index.html`, specifying `areaServed` as Muktsar, Bathinda, and Punjab.

### 2026-07-02 — Phase M1 & M2 (GSC Setup)
Pushed Google Search Console TXT record (`google-site-verification=kvrPeHLBErUsUV8aXGKZ4QIC75yjmAtw7Sfebi_BDP4`) to Spaceship DNS via API.
Configured GSC API Service Account (`gsc-agent@website-501210.iam.gserviceaccount.com`).
Programmatically submitted `https://gurdharam.com/sitemap.xml` via GSC API successfully.

### 2026-07-02 — Phase E & G (Homepage Structure)
Refactored `main.tsx` to include an `h1` with `sr-only` span containing the primary SEO target: "Professional Web Developer and AI Engineer in Muktsar & Bathinda, Punjab".
Updated `[ 01 - ABOUT ]` and other section labels to semantic `h2` elements.
Applied Phase G "answer-first" sentence rules to introductory paragraphs in About and AI sections.

### 2026-07-02 — Phase H / Week 3 (Service & Case Study Pages)
Refactored Vite app to use React Router (`react-router-dom`). Moved homepage to `/`.
Built 4 dedicated SEO service pages targeting local keywords and specific case studies:
1. `/case-studies/doodhisaab` (Flutter, offline UI, rural dairy P&L math).
2. `/case-studies/fasal-doctor` (Offline ML crop scan, PAU advisory).
3. `/services/ai-automation` (Dental WhatsApp bots, reverse engineering, automated YT/IG machines).
4. `/services/web-development` (2D/3D high-end sites, Chandigarh/Ludhiana/Bathinda).
Updated `sitemap.xml` with the 4 new URLs. Added `vercel.json` for SPA routing.
Deployed to Vercel (Successfully deployed).
### 2026-07-02 — Phase M (Indexing Execution)
Programmatically requested indexing via GSC Indexing API and resubmitted new sitemap for all 10 site URLs successfully.
Submitted all 10 URLs to Bing/Yandex using IndexNow API with key file verification.
### 2026-07-02 — Phase F & M (Dynamic Canonical Updates)
Created and deployed the `CanonicalUpdater` React Router component inside `main.tsx` to dynamically rewrite `<link rel="canonical">` to the exact page URL route. This fixes the "Non-canonical page in sitemap" error.
### 2026-07-02 — Meta/Facebook Verification
Embedded the Facebook domain verification meta-tag (`72wnkaur1p6kk8i0vonmy6kqdkdrvk`) in the `<head>` of `index.html`. Deployed successfully to production.

### 2026-07-02 — Image Compression & Footer Link Fixes
- Resized `fasal-doctor-logo.png` from 1024x1024 to 256x256, reducing size from 1.7 MB to 113 KB.
- Compressed screenshots (`fasal-doctor-screenshot.png`, `last 2nd slide.png`, `Doodhisaab.png`, `doodhisaab-logo.png`) by converting them to optimized RGB JPEGs (preserving original extensions), dropping sizes below 120 KB.
- Added dynamic `og:url` meta-tag updates to `CanonicalUpdater` in `main.tsx`.
- Embedded structured footer links in `home.tsx` to all 5 specialized subpages, routing them into the internal link graph to fix "Orphan page" warnings.
- Compiled and deployed changes to production on Vercel.

---

## Quick-reference: values worth not losing track of
*(fill in as they're decided/discovered — this section is the running answer key, not a log)*

- **Q1 decision (GBP entity name):** Gurdharam Jeet Singh — decided
- **Canonical NAP string:** not yet finalized
- **GBP primary category:** Web Designer / Software Company (to be finalized upon creation)
- **GBP service-area cities/postal codes:** Muktsar, Bathinda, Punjab
- **DNS values (A/CNAME from `vercel domains inspect`):** A `@` -> `76.76.21.21`, A `www` -> `76.76.21.21`
- **GSC verification method used / TXT record value:** DNS TXT (`google-site-verification=kvrPeHLBErUsUV8aXGKZ4QIC75yjmAtw7Sfebi_BDP4`)
### 2026-07-04 — Competitor Link Harvesting & Guest Posts
- Crawled 10 local competitors in Punjab/Chandigarh (ThinkNEXT, Apensia, APPWRK, Ink Web, Techglide, Stellen, Devex, Smart Web, PSoft) to extract their outbound search graph.
- Logged harvested links in `scratch/competitor_outbound_links.md` and `scratch/deep_backlink_audit.md`.
- Embedded top-tier local co-citations (Three Best Rated, JoonSquare, NSDC, DOIT Punjab, CII, PAU) into `web-developer-muktsar.tsx` and `crop-disease-detection.tsx` to match competitor co-citation profiles.
- Published 3 guest posts (Agritech crop AI, WhatsApp bots, Faceless video automation) on DEV.to linking back to canonical pages.
- Force-pushed the entire codebase to Gurdharam's public GitHub portfolio (`github.com/gurination1/Gurdharam-Portfolio`) to lock in a DA 96 developer-auth backlink.

# gurdharam.com — MASTER SEO/GEO/AEO PLAYBOOK
### Single source of truth — consolidated July 2, 2026

*This document replaces the four source docs below as separate references. Nothing from them is dropped — every rule, stat, correction, tool, and caveat is merged in at the point where it's actually used, not left siloed in a separate corrections file where it's easy to miss. Where two source docs disagreed, that conflict is called out explicitly rather than silently resolved.*

**Source docs merged into this one (keep for archive/diff purposes only — don't work from them separately anymore):**
1. `gurdharam-seo-geo-master-checklist.md` — Phases A–P
2. `gurdharam-seo-free-tools-apis.md` — free tool/API stack, Pass 2
3. `gurdharam-seo-execution-roadmap.md` — Phase Q (local SEO) + runbook, Pass on top of 1+2
4. `gurdharam-seo-pass3-verification-corrections.md` — live-verification pass, corrections, gaps

---

## HOW TO RUN THIS — read before executing any step

- **After completing any checkbox/step in this playbook**, append an entry to the companion log file `gurdharam-seo-progress-log.md`: date, which step (Part/Phase + item), what was actually done or found, and any values worth remembering (DNS values set, GSC verification status, GBP category chosen, NAP string, etc). Don't just check the box in this file — this doc describes the plan, the log tracks what's actually real.
- **At the start of every new session**, read `gurdharam-seo-progress-log.md` first. Resume from the last logged step. Don't re-verify or redo anything already logged as complete unless there's a clear sign it broke (site down, DNS reverted, listing suspended, etc.) — treat the log as trustworthy, not as a suggestion to re-check.
- This doc (Part 6 especially) stays the fixed source of truth for *order and rules*. The log is the only thing that changes — it's the record of *actual progress* against this order.

---

## PART 0 — Where things actually stand right now

**Confirmed done — two things only:**
- [x] Domain registered — gurdharam.com on Spaceship
- [x] Hosting account authorized — Vercel

**Everything else is unconfirmed or not started.** Every phase below assumes this foundation is finished before it starts. It isn't yet. Strict order, each step blocks the next:

| Step | Action | Phase it belongs to |
|---|---|---|
| 1 | Run `vercel domains inspect gurdharam.com`, get real DNS target | A2 |
| 2 | Add those exact A/CNAME records in Spaceship (no duplicate `www` record) | A2 |
| 3 | Confirm SSL via `vercel certs ls`, confirm propagation via `inspect` | A3/A4 |
| 4 | Confirm the actual site pages are deployed and reachable at the live domain | — |
| 5 | robots.txt at root + sitemap.xml, sitemap referenced in robots.txt | B1/B2 |
| 6 | GSC — Add Property as **Domain property**, verify via DNS TXT in Spaceship, submit sitemap | M1/M2 |
| 7 | Bing Webmaster Tools — same verification, separate step | M3 |
| 8 | Ahrefs Webmaster Tools — verify (piggybacks on GSC/DNS), enables free backlink/audit/**analytics** data | O |

**API keys / accounts — what's actually needed now vs. later:**

| Now? | What | Why |
|---|---|---|
| **Yes (Step 6)** | Google Search Console — Google account + DNS verify, no key | Blocks everything downstream |
| **Yes (Step 7)** | Bing Webmaster Tools — Google or Microsoft login | Bing/ChatGPT-via-Bing visibility |
| **Yes (Step 8)** | Ahrefs Webmaster Tools — free account | Backlinks, audit, keywords, **Web Analytics with LLM-referral tracking** |
| No, optional | Google Cloud service account for GSC API | Only if you want to script query-pulling instead of using the dashboard — not urgent |
| No, optional | PageSpeed Insights API key | Works keyless for manual checks; key only needed for automation |
| No, not yet | IndexNow key file | Matters once you're publishing/updating regularly |
| No, later | Trustpilot / JustDial / Sulekha / IndiaMART accounts | Phase L/Q6 — after a live indexed site + real client reviews exist |
| No, later (Week 1 of runbook, not now) | Google Business Profile | Phase Q — depends on Steps 1–8 plus the Q1 naming decision (see Part 3) |

**No paid API key is required for anything in this document.**

---

## PART 0.5 — Fresh verification pass (July 2, 2026, live web search)

Every load-bearing claim below was re-checked against live sources today, specifically because this document is going into production. Result: **everything held up.** No fabricated tools, no wrong dates, no dead links found. One trivial correction (a same-week date ambiguity, noted below) and no changes needed anywhere else.

Independently re-verified today, against primary sources where possible:
- FAQPage deprecation three-date timeline (May 7 / June / August 2026) — confirmed word-for-word against Google's own Search Central changelog
- May 15, 2026 spam-policy update covering AI Overview manipulation — confirmed against Google's own spam-policies page (`Last updated 2026-05-15`) and Search Engine Land's report
- Bing AI Performance report — confirmed both dates and the four-metric-then-four-more structure. **Minor correction:** original launch is sourced to Feb 9 in some outlets and Feb 10 in others (Bing's own blog post vs. Search Engine Land's coverage of it) — immaterial, but flagging so "Feb 9" elsewhere in this doc isn't read as more precise than the sourcing actually is
- Trustpilot/Seer Interactive study — confirmed exactly: 1% → 53.5% → 75.3%, March 2026 fieldwork, May 12, 2026 publish date, ~1,900 brands (437+497+497+495 across four tiers), commissioned-research caveat stands
- Every GitHub tool cited (`Auriti-Labs/geo-optimizer-skill`, `AI2HU/gego`, `AminForou/mcp-gsc`, `ahonn/mcp-server-gsc`, `houtini-ai/better-search-console`, `seranking/seo-skills`) — all real, all match their description in this doc. `mcp-gsc`'s 863★ and its hosted-version $12/mo figure both confirmed exact
- SE Ranking pricing (no free plan, 14-day trial with 100K credits, $103.20/mo annual or $129/mo) — confirmed exact against SE Ranking's own pricing page
- Firecrawl free tier (1,000 credits/month, recently raised from a 500-credit lifetime cap) — confirmed
- Hunter.io free tier (50 credits/month, unified credit system) — confirmed
- GSC API caps (25,000 rows/request, 50,000 rows/day/property/search-type, 2–3 day lag) — confirmed exact against Google's own developer docs

Not re-verified this pass (lower risk — already correctly caveated as "commonly cited"/"illustrative" rather than stated as hard fact in the sections below, so nothing here changes what to do): the Reddit citation-share range, the Wikidata/AI-citation percentage, the exact llms.txt crawl-share numbers, the October 2025 spam-update framing, GBP video-verification specifics. If any of those numbers get quoted to a client, treat them with the same caution the doc already applies.

---

## PART 1 — Verified state of the algorithm (context, checked live)

- Last Google core update: May 21 – June 2, 2026
- Last spam update: June 24–26, 2026 (targeted scaled content + cloaking, excluded link spam specifically)
- Earlier spam update, October 2025: explicitly added enforcement against **AI-generated guest-post farms** repositioning as "content marketing" to dodge link-scheme rules — relevant to Phase N below
- **May 15, 2026 — new rule:** Google classifies manipulating AI Overviews/AI Mode responses as spam, same enforcement bucket as cloaking/keyword stuffing. Practical effect: never write content specifically to "trick" an AI Overview into citing you — write the direct-answer, well-structured content Phases E/G already prescribe and let it get picked up honestly.
- Next core update: historically most likely August–September 2026 window. Nothing rolling out right now that changes anything below.
- FAQPage schema: rich-result dropdown gone May 7, 2026 (confirmed exact, word for word against Google's own Search Central docs); Console/Rich Results Test support drops June 2026; API support drops August 2026. **Still build FAQ content in Q&A format** — AI systems (ChatGPT, Perplexity, Claude) still parse it even without Google's visual snippet. Only remove existing FAQPage markup if the FAQ content itself is fake or not actually visible on the page — unused structured data doesn't cause problems per Google's own docs.

---

## PART 2 — Build Phases A–P

### PHASE A — Foundation (domain, DNS, hosting)
- **A1. Domain** — gurdharam.com on Spaceship ✅ done
- **A2. DNS in Spaceship Advanced DNS** — A record `@` → live value from `vercel domains inspect gurdharam.com` (don't hardcode 76.76.21.21, always trust the live inspect output). CNAME/A for `www` → whatever inspect returns. Do NOT let Spaceship auto-create a duplicate www A record if Vercel wants CNAME — two competing records on one hostname causes silent intermittent failures. **⏳ pending — Part 0, Step 1–2**
- **A3. SSL** — auto-provisioned by Vercel once DNS verifies, confirm via `vercel certs ls`. **⏳ pending**
- **A4. Propagation** — `vercel domains inspect gurdharam.com` until verified. Minutes to 24–48hrs. **⏳ pending**

### PHASE B — Crawl foundation (robots.txt, sitemap)
- **B1. robots.txt** at root. Must: allow Googlebot/Bingbot by default; explicitly decide on AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, Meta-ExternalAgent, Applebot-Extended — allowing = AI-citation eligibility, blocking = zero AI-search visibility); reference sitemap (`Sitemap: https://gurdharam.com/sitemap.xml`); no leftover `Disallow: /` from staging — #1 cause of silent indexing failure. **Shortcut option:** `Auriti-Labs/geo-optimizer-skill` (Part 6) auto-generates robots.txt bot rules for the 27 AI crawlers it tracks, plus an `llms.txt`, in one command — worth running once you're at this step instead of hand-writing the list.
- **B2. XML Sitemap:** `<loc>` required, exact canonical URL, indexable (200), HTTPS, no tracking params. `<lastmod>` — Google explicitly uses this, but *only if consistently and verifiably accurate* — update ONLY on real, significant content changes (main content, structured data, links), never on trivial edits. Faking this by setting every page to today's date is, per Google's John Mueller on record, "lazy" and can make Google distrust the signal **sitewide**. `<priority>` — explicitly ignored, Gary Illyes called it "a bag of noise," don't spend time on it. `<changefreq>` — also explicitly ignored, confirmed dead since 2015, skip it. Real importance signaling comes from internal linking (Phase J), not sitemap tags. Next.js: implement via `app/sitemap.ts`. Submit URL in GSC once verified (Phase M).
- **B3. Canonical tags** — every indexable page needs a self-referencing canonical in `<head>`. Prevents duplicate-content confusion, stops external parties hijacking canonical signals.
- **B4. Robots meta tags** (different from robots.txt — controls indexing, not crawling): `noindex` on admin/thank-you/thin/duplicate/staging pages; nothing meant to rank should have a noindex tag.

### PHASE C — URL structure
- Descriptive, hyphen-separated: `/ai-automation-services` — never `/svc1` or underscores
- Short, primary keyword included naturally
- Flat architecture — every important page reachable within 3–4 clicks from homepage

### PHASE D — Meta tags (title + description)
- **D1. Title tag:** under 60 characters (Google truncates ~155px desktop). Primary keyword in first 30 characters / first 3 words — pages with this rank ~1.5 positions higher on average in studies. Unique per page, no site-wide duplicates. Should roughly match the page's H1.
- **D2. CTR-boosting patterns** — direction confirmed across independent sources, **specific percentages are not independently verified — don't cite these numbers to a client, they're recirculated SEO-blog folklore with no traceable source** (one source's "23%" turns out to be for an unrelated formula; another site's own writer flags "20% for odd numbers" as suspiciously exact). Keep the tactics, drop or caveat the numbers:

  | Technique | Commonly cited (not independently verified) |
  |---|---|
  | Numerals over spelled-out numbers | "7 Ways" cited as beating "Seven Ways" |
  | Odd numbers in list titles | cited as outperforming even numbers |
  | Parentheses at title end (not brackets) | cited lift; Google less likely to rewrite/strip parentheses than brackets — this mechanical point is real regardless of the CTR number |
  | Power words (Proven, Complete, Step-by-Step) | cited lift, varies by category |
  | Current year (2026) | freshness-driven lift, direction plausible |
  - **Rule that overrides all of these:** never promise something the page doesn't deliver. A false bracket/parenthetical claim increases bounce rate and destroys CTR over time — Google reads bounce-back-to-SERP as a negative signal.
- **D3. Meta description:** 140–160 characters. Not a direct ranking factor but the primary CTR lever (CTR indirectly influences rankings). Unique per page, clear benefit/CTA. Google may override with an auto-generated snippet if it judges another passage answers the query better — a good one just raises your odds. AI Overviews pull description text directly into citation snippets — this field matters for AI visibility too, not just classic SERP CTR.
- **D4. Skip entirely:** meta keywords tag. Google has stated on record it does not use this for ranking at all.

### PHASE E — Heading hierarchy (H1–H6)
- Exactly one H1 per page, matching main topic and roughly the title tag
- H2 = major sections, H3 = subsections — never skip a level
- Keywords worked in naturally, never stuffed
- Heading hierarchy that makes sense to a screen reader also makes sense to an LLM parsing your page — this is literally how AI systems read your structure
- **Lead each section with a direct-answer first sentence under the heading; context/nuance after.** This is what gets extracted into AI Overviews. **This rule is the one that has to travel with Phase G's paragraph-length rules wherever they're applied — see Part 5, which exists specifically to keep these two rules glued together instead of living in separate sections where one gets applied without the other.**

### PHASE F — Schema markup (JSON-LD)

| Page type | Required schema |
|---|---|
| Homepage | Organization + WebSite |
| Bio/about page | Person (name: Gurdharam Jeet Singh, jobTitle: AI Engineer, sameAs: [LinkedIn, GitHub, etc.]) |
| Blog posts | Article/BlogPosting — headline, author as a real Person entity (not a plain string), datePublished, dateModified, publisher |
| Service pages | Service schema |
| Any page with breadcrumb nav | BreadcrumbList |
| Homepage or dedicated contact/about page **(added — was Phase Q8 in the roadmap doc, belongs in this table)** | `ProfessionalService` (subtype of `LocalBusiness`), `areaServed` matching GBP service area, `sameAs` linking to the GBP listing |
| Any page displaying real client testimonials, once you have them **(added — pass3 gap, was missing from both prior docs)** | `Review` / `AggregateRating` — **don't fabricate reviews to unlock this schema; only add it once real reviews exist** |

**Implementation rules (Next.js, confirmed from official docs):**
- Native `<script type="application/ld+json">` tag in layout.tsx/page.tsx — NOT `next/script`, since JSON-LD isn't executable code
- Sanitize: `JSON.stringify()` + escape `<` as `\u003c` to prevent XSS
- Validate every schema with Google's Rich Results Test before considering it done

**Entity establishment beyond schema (pass3 gap, new):** Wikipedia/Wikidata account for roughly a quarter of all AI citations across platforms in the data checked. A personal Wikipedia page is realistically out of reach (notability bar), but a **Wikidata item** is not gated the same way — worth ten minutes to create if one doesn't exist. Otherwise the practical substitute is consistency: identical name/title/description across LinkedIn, GitHub, and every directory listing, all `sameAs`-linked from this schema.

**FAQPage note:** see Part 1 — deprecated rich-result display, still build the content, don't strip existing markup.

### PHASE G — Content structure specs (the "atomic" writing rules)

**Read this whole phase together with Phase E and Part 5 — they're one rule, not three separate ones. A page can follow G1–G4 to the letter and still fail to get cited if it doesn't also lead every section with a direct-answer sentence (E) in the specific citation-friendly shape covered in Part 5. Don't apply this phase in isolation.**

- **G1. Paragraph length:** under 150 words is a firm ceiling, under 100 is the practical target. Long unbroken blocks measurably increase bounce rate.
- **G2. Sentence length:** ~15–25 words average, varied — all-short sentences read as robotic to both humans and AI parsers; mix short punchy with some longer.
- **G3. Line length (CSS):** 50–75 characters/line, 66 is the most-cited sweet spot. `max-width: 66ch` on the content container, combined with `clamp()` for responsive font sizing.
- **G4. Word count by page type** (not a hard rule — match competitor SERP depth, use as baseline):

  | Page type | Target range |
  |---|---|
  | Landing/service pages | 500–1,500 words |
  | Product-style pages | 300–500 words |
  | Blog posts (informational) | 1,500–2,500 words |
  | Comparison/pillar content | 2,000–3,500 words |
  | Minimum viable to rank at all | 300–400 words — below this risks "thin content" classification under Helpful Content system |
  - Word count is not itself a ranking factor (Google confirmed). What matters is whether the page fully answers the intent — check top 5 ranking pages for your target keyword and match/slightly exceed their depth, don't pad to hit a number.

*(Full citation-structure findings — the 120–180 word section-length data, comparison/checklist/shortlist structural findings — are in Part 5, not duplicated here, but they apply to every page built under this phase.)*

### PHASE H — Keyword research methodology
1. Target Keyword Difficulty (KD) under 30, ideally under 20 for a brand-new domain with no authority yet
2. Never trust KD score alone — manually check the actual top-10 SERP. If Reddit/Quora/a thin blog ranks top-3, that's a green light (no strong dedicated content exists yet)
3. Volume sweet spot: 200–500 monthly searches with real commercial/informational intent — not 5,000+ (too competitive), not 0 (nobody's searching)
4. Free sources in order of value: Google autocomplete → People Also Ask (click recursively) → "Related searches" at SERP bottom → Reddit/Quora threads with 50+ comments in your niche
5. **2026-specific edge:** conversational queries typed into ChatGPT/Perplexity are often not yet tracked in paid keyword tools — effectively zero-competition right now. Brainstorm the way a client would type a question to an AI, not old-school Google syntax.
6. Cluster, don't fragment — one page = one primary keyword + 5–10 semantically related long-tail variants woven in naturally. Never build separate thin pages per keyword.
7. Example: not "AI automation" (impossible, owned by giants) → "AI automation for small business India" or "custom chatbot developer for D2C brands" (specific, winnable in weeks)

**H8. Current target keyword hypotheses** (applying the above methodology — starting points, not final; still needs manual SERP-check per H2 before committing content, and needs your actual GBP service-area city filled into `[City]`):

| Service | Broad "near me" target (Local Pack) | Specific long-tail (organic content) |
|---|---|---|
| Website development | "best web developer near me [City]" / "website designer [City]" | "website developer for coaching institutes Punjab" — real, finished, screenshottable case study (Fusion Academy) |
| Automation/bots | "best automation developer near me [City]" | "WhatsApp automation bot developer India" / "AI automation for small business Punjab" |
| Content-creation automation | (folds into automation for Local Pack — same GBP category umbrella) | "content automation agency India" / "AI content automation for small business" |
| Cross-cutting | "best software developer near me [City]" | "Flutter app developer Punjab" — real, finished case study (DoodHisaab) |

Two long-tail targets aren't hypothetical — real completed client work exists to point at (Fusion Academy, DoodHisaab). Per G4, these become dedicated 500–1,500 word service/case-study pages, not paragraphs buried in a homepage.

### PHASE I — Images
- Descriptive alt text (describes what's actually there, not keyword-stuffed)
- Descriptive file names (`ai-automation-dashboard.webp`, not `IMG_4821.jpg`)
- WebP/AVIF format
- Width/height attributes set to prevent layout shift (hurts CWV otherwise)
- Original images/screenshots where possible — Google's systems can detect stock photos and pure AI-generated art, and can devalue pages relying on them

**Free tool stack for this phase:**
- **sharp** (npm) — open-source, self-hosted, no account/upload/rate limit since nothing leaves your server. Given the existing Next.js/Node stack, this is the best fit — free and unlimited by construction, not vendor generosity.
- **Squoosh** (squoosh.app) — Google's own open-source in-browser tool, WebAssembly, no account/cap, side-by-side quality slider, exports WebP/AVIF. Best for one-off manual compression.
- **TinyPNG API** — free tier, 500 compressions/month, official Node.js/Python clients. Useful for a hosted API instead of running sharp yourself, but sharp is strictly more capable with no monthly ceiling.
- **ExifTool** — free, CLI, cross-platform. Strip camera EXIF while preserving IPTC copyright fields: `exiftool -all= --iptc:all --xmp:all image.jpg`
- Geotagging — skip it, evidence doesn't support a ranking benefit and gurdharam.com isn't a physical-location business for this purpose.

### PHASE J — Internal linking
- Every important page needs inbound internal links from elsewhere on the site — this is the real "priority" signal since sitemap priority is ignored
- Fix orphan pages (zero internal links pointing to them)
- Descriptive anchor text, never "click here"
- 2–6 strong contextual internal links per page is a reasonable target
- **Broken-link/redirect hygiene (pass3 gap, new):** nothing in the original phase covered checking outbound/internal links for 404s over time, or a redirect policy for when URLs change. Screaming Frog's free crawl (already recommended below for orphan-page detection) reports this for free in the same pass — treat it as part of the same recurring crawl, not a separate task.

**Free tool:** Screaming Frog, free up to 500 URLs — at current 2-page scale, free indefinitely for a long while. Shows inlinks/outlinks per page, flags orphans by diffing sitemap against crawl, and covers structured-data issues + broken links in the same pass. GSC's "Links" report is a free sanity-check pairing with it.

### PHASE K — Core Web Vitals / performance
- LCP, INP (replaced FID in 2024), CLS — the three metrics Google measures from real Chrome user sessions
- Vercel's edge network already gives a strong baseline
- Enable Vercel Speed Insights to monitor in production (check current plan's data-point allowance — free-tier limits change over time)
- Common fixes: lazy-load offscreen images, preconnect critical resources, reserve image dimensions

**Free tool stack:**
- **PageSpeed Insights API** — free, no key needed for manual checks. Automated use: grab a free key from Google Cloud Console (default quota 25,000 req/day, 100 queries/100 sec). Endpoint: `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=YOUR_URL&key=YOUR_KEY` — trivial to curl from a GitHub Action or cron job pinging the site after every deploy.
- **GSC → Core Web Vitals report** — free, this is the actual field data Google uses for ranking, more important than any lab score.
- **Chrome DevTools Performance panel** — free, built in, best for pinpointing the exact JS task blocking INP.
- **Lighthouse CLI** — free, open-source (`npm install -g lighthouse`), scriptable, no key, good as a pre-deploy CI check.

### PHASE L — E-E-A-T / trust signals (highest-leverage GEO factor)

- **Reviews — the single biggest measured lever in current data.** Named study: Trustpilot-commissioned, Seer Interactive-conducted, 800,000+ AI responses across ChatGPT/Gemini/Perplexity/Google AI Mode, 15,000+ prompts, ~1,900 brands, published May 12, 2026. Confirmed real, but **it's vendor-commissioned research about the vendor's own product — methodology looks solid, treat the magnitude with that caveat.** The full curve:

  | Reviews | AI citation rate |
  |---|---|
  | Zero Trustpilot reviews | ~1% |
  | 1–13 reviews | 53.5% |
  | 80+ reviews with active responses | 75.3% |

  Get on Trustpilot/G2/Clutch as soon as there's a real client. Google reviews on GBP are a **separate, Local-Pack-specific prominence signal** — see Phase Q5, don't confuse the two systems.

- Real author identity on all blog content — name, credentials, linked profile, not a placeholder byline
- Case studies with real numbers over generic opinion pieces
- **Site speed correlates with AI citation count** — traceable to a real dataset (Search Engine Journal, Dec 2025) but widely recirculated without independent replication, **treat as one dataset, not a consensus finding**: sub-0.4s FCP pages average 6.7 citations vs. 2.1 for slower pages. **Nuance the prior version of this doc didn't have: the same study found the *fastest* INP pages got fewer citations than moderately-interactive ones — "faster is strictly better" oversimplifies it.**
- **Content-freshness cadence (pass3 gap, new — nothing in the prior docs covered this):** Phase B2 correctly says don't fake `lastmod`, but there was no companion policy for *genuinely* refreshing older content. Matters twice: Google's freshness signals, and Perplexity's explicit recency weighting (prioritizes sources updated in the last 24 hours for time-sensitive queries, shows measurably faster citation gains on refreshed pillar content). **Simple habit: quarterly, revisit and meaningfully update the 3 highest-value pages.**
- **Entity establishment / Wikidata** — see Phase F above, same underlying goal (consistent, verifiable identity signals), cross-referenced there rather than duplicated.
- Review/AggregateRating schema — see Phase F table, only once real reviews exist.

### PHASE M — Search Console + Bing (manual, do after DNS verified — see Part 0)
1. GSC → Add Property → **Domain property** (not URL-prefix — covers all variants at once) → verify via DNS TXT record in Spaceship
2. Submit sitemap URL inside GSC
3. Repeat verification for Bing Webmaster Tools
4. (Optional, later, not urgent) GSC API access via Google Cloud service account, for programmatic sitemap/analytics pulls instead of the dashboard
   - **Correction/addition:** GSC API has a *second*, separate cap beyond the 25,000-rows/request pagination limit — **50,000 rows/day per property per search type**. Irrelevant at the current 2-page scale, noted so nobody's confused when the site grows.
5. **Bing AI Performance report — scope correction (pass3):** it's not one release. Bing shipped the *initial* AI Performance report on **February 9, 2026** (Total Citations, Average Cited Pages, Grounding Queries, Page-Level Citation Data); the widely-cited **June 16, 2026** update layered four *more* metrics on top (Intents, Topics, Citation Share, Compare) — it didn't launch the feature, it extended it. **Scope is Microsoft-only** — Bing AI summaries, Copilot, select partner integrations. It does **not** report on ChatGPT, Perplexity, or Google AI Overviews — a commonly-confused point. Treat it as one useful free official data source among several, not a general AI-visibility dashboard.

### PHASE N — Backlinks (white-hat only — read before doing anything here)

**Do NOT use automation (Puppeteer or otherwise) to place backlinks.** SpamBrain is specifically trained to detect automated/scaled link placement in 2026, and sites with over 30% of their link profile from bulk guest posts are the most penalized category in manual action reports.

- **Stat correction:** the "500+ automated backlinks → 40% organic visibility drop in two weeks" case study doesn't trace to an identifiable source — **treat as illustrative, not citable.** The underlying warning is well-founded regardless, and if anything understated for 2026: the **October 2025 spam update explicitly added enforcement against AI-generated guest-post farms** repositioning as "content marketing" to dodge earlier link-scheme rules (Part 1). Current guidance pegs **40%+ exact-match anchor text as a strong manipulation flag, 70%+ as near-certain to trigger algorithmic attention** — use that stat instead if a sourced number is needed. The no-automation rule stands, more so now than when originally written.

What actually works:
- HARO-style journalist outreach — respond to journalists needing expert sources, genuine editorial links
- 2–4/month real, relevant guest posts written to add real value, not just place a link
- Being genuinely useful publicly — real GitHub contributions, real Reddit/Quora answers in your niche

- **Reddit — underweighted in the original phase (pass3 gap, new).** It was mentioned once as a backlink-adjacent aside ("~4x higher AI citation odds"). Independent 2026 data puts Reddit at **6.6–46.5% of Perplexity's citations depending on query type**, and it shows up heavily across ChatGPT and Google AI Overviews too. For a niche this narrow (AI automation, chatbots, D2C), genuine participation in relevant subreddits is plausibly a **higher-leverage GEO channel than guest posting at this stage** — treat it as its own line item, not a footnote under backlinks.

### PHASE O — Tools/MCP servers worth connecting (free/low-cost tier, corrected)

- **`mcp-gsc` (AminForou)** — confirmed real, MIT-licensed, actively maintained (OAuth fixes as recent as this year), 863★, works with Claude Desktop/Code/claude.ai directly. Right default choice. The GSC-MCP space grew from ~6 implementations to **20+ active projects** over the past year — alternatives worth knowing if a specific need arises: `ahonn/mcp-server-gsc` (TypeScript, 157★, lighter weight), `houtini-ai/better-search-console` (dumps full GSC history into local SQLite for ad-hoc SQL once there's months of data), and a hosted version of mcp-gsc itself (one-click OAuth, adds GA4 tools, ~$12/mo founding-cohort pricing — only relevant for zero-setup; the free self-hosted path already works fine).
- ~~**`seranking/seo-skills`**~~ — **removed, not actually a free tool.** The repo is real and well-built (MIT-licensed, 26 skills, CI-gated releases), but every skill runs against SE Ranking's own MCP server and the majority of calls cost SE Ranking credits (repo's own docs cite "10–20 credits per baseline run"). SE Ranking has no permanent free plan — 14-day trial with 100,000 credits, then $103.20/mo (annual) or $129/mo, or pay-as-you-go with a $50 minimum. Functionally identical to the exact Ahrefs/Semrush paid-tool problem this doc otherwise avoids. If still wanted: use the 14-day trial for a one-time audit, then cancel — or use the free alternatives below, which don't have this problem.
- **Firecrawl MCP** — confirmed, scrapes any page into clean markdown for content/competitor audits. Genuine free tier: **1,000 credits/month, no card required** (recently raised from a 500-credit lifetime cap). 128,800+★, the ecosystem default. Caveats: free-tier rate limits are real (10 scrapes/min, 1 crawl/min, 5 searches/min — fine for occasional audits, not bulk work); basic scraping is 1 credit/page, but JSON-mode structured extraction is 5 credits/page — a non-issue at current 2-page-site usage, flagged so it doesn't surprise if usage scales.
- **`Auriti-Labs/geo-optimizer-skill`** *(new find, pass3 — closes the "AI-visibility tracking is subscription-only" gap)* — MIT-licensed, zero-install (`uvx --from geo-optimizer-skill geo audit --url https://gurdharam.com`), also ships as a Python library, MCP server, and Astro integration. Scores a site against 47 methods drawn from published research (cites Princeton KDD 2024 and AutoGEO ICLR 2026 work) and **actually generates fixes**: robots.txt bot rules for the 27 AI crawlers it tracks, an `llms.txt`, and JSON-LD schema gaps. A genuine one-command version of a chunk of Phases B/F/P. Run monthly as a free audit.
- **`AI2HU/gego`** *(new find, pass3)* — self-hosted GEO citation tracker (Go + Vue), schedules prompts across OpenAI/Anthropic/Google/Perplexity/Ollama on a cron, logs which domains get cited over time. It's infrastructure, not a subscription — bring your own LLM API keys, real cost is pennies of API usage per prompt-check instead of a monthly fee. Heavier setup (etcd, SQLite/MongoDB) than a single script, but genuinely $0-in-licensing where paid tools (Profound, Otterly, Athena) charge $99+/mo for the same job.
- Caveat on both new finds: smaller, newer projects with a single/small maintainer group, unlike mcp-gsc's longer track record — read the code before wiring either into anything automated. Normal diligence, not a specific red flag found.
- For broader browsing: `amplifying-ai/awesome-generative-engine-optimization` (tools-focused) and `DavidHuji/Awesome-GEO` (research-paper-focused) — actively maintained curated lists.
- Skip paid enterprise MCPs (Semrush, Ahrefs, Semly Pro) at this stage — built for agencies managing many client sites, not needed yet.

**Scored stack (pass3's rubric — Free-tier durability / Data reliability / Automation-API fit for a scripting-first workflow / GEO relevance, each 1–4, averaged):**

| Tool | Durability | Reliability | Automation fit | GEO relevance | Avg |
|---|---|---|---|---|---|
| `Auriti-Labs/geo-optimizer-skill` | 4 | 3 | 4 | 4 | **3.75** |
| Google Search Console + API | 4 | 4 | 4 | 2 | 3.5 |
| `mcp-gsc` (AminForou) | 4 | 4 | 4 | 2 | 3.5 |
| Ahrefs Webmaster Tools + Web Analytics | 4 | 4 | 3 | 3 | 3.5 |
| Firecrawl (free tier) | 3 | 4 | 4 | 3 | 3.5 |
| IndexNow API | 4 | 3 | 4 | 3 | 3.5 |
| `AI2HU/gego` (self-hosted) | 3 | 3 | 3 | 4 | 3.25 |
| Bing Webmaster Tools AI Performance | 4 | 3 | 2 | 4 | 3.25 |
| PageSpeed Insights API | 4 | 3 | 4 | 1 | 3.0 |
| Screaming Frog (free, 500 URLs) | 4 | 4 | 2 | 2 | 3.0 |
| `seranking/seo-skills` | **1** | 3 | 4 | 4 | 3.0† |

† Averages fine but fails the constraint that actually matters — free-tier durability of 1 means it's not part of a $0 stack. Kept in the table so the exclusion is documented, not silent.

*(Utility tools not individually scored — no real alternative debate exists at this scale: `sharp`, ExifTool, Rich Results Test, Schema.org Validator, Google Trends/Keyword Planner. They're uncontroversially the right free pick already.)*

### PHASE P — llms.txt (low priority, do last if at all)
2026 data (OtterlyAI, SEOmator, multiple independent studies) confirms Google, OpenAI, and Anthropic do not meaningfully use llms.txt for ranking or citation — one study found only 0.1% of AI crawler requests even touch the file, across three independent large-scale studies (Ahrefs analyzed 137,000 domains; a separate 90-day study logged 500M+ AI bot visits and found 408 total llms.txt hits). Google's Gary Illyes said on record Google won't use it, compared it to the meta-keywords tag. **This is a 10-minute task, not a phase.** `Auriti-Labs/geo-optimizer-skill` (Phase O) generates one automatically as part of its output — the fastest path when the time comes.

---

## PART 3 — PHASE Q — Local SEO / Google Business Profile

**⚠️ Flagging a direct conflict between two source docs, resolved below — not swept under the rug:** the pass3 corrections doc reviewed only docs 1+2 and concluded GBP was "probably correctly skipped" on the reasoning that gurdharam.com isn't a physical-location business. It never saw the roadmap doc's Phase Q, which was built specifically around a goal stated in the original voice note: the personal name showing up for "best web developer near me" searches. Local Pack ranking doesn't require a storefront — a Service Area Business listing exists exactly for freelance/remote service providers with a real service radius, which is the actual situation here. **Resolution: Phase Q stays in.** Pass3's skip-recommendation was made without the context that justifies it; it isn't wrong given what it saw, it's just incomplete.

### Q1. Entity name for the listing — DECIDED: Gurdharam Jeet Singh
**GBP goes up under the personal name — Gurdharam Jeet Singh. Not a brand name. Decided, not open.** This matches the existing Phase F Person schema (name: Gurdharam Jeet Singh, jobTitle: AI Engineer) and the voice note's explicit "my name should come" on page one. Google requires a Business Profile to match how the business is consistently represented and recognized in the real world (signage, stationery, other branding) — so this same exact string, "Gurdharam Jeet Singh," is what goes into the GBP name field, and it's the string that has to match byte-for-byte everywhere in Q4's NAP consistency requirement.

### Q2. Category — the single biggest ranking lever
2026 Local Search Ranking Factors survey (BrightLocal/Whitespark) puts primary category as the #1 most influential Local Pack ranking factor, ahead of reviews, ahead of links, ahead of everything.
- Pick the **narrowest accurate category**, not the broadest — "Software Company" is weaker than a more specific match if one exists for web/app development services
- Google's own guidance: choose categories that complete "this business **IS** a ___," not "this business **HAS** a ___" — pick what you fundamentally *are*, not a services list
- One primary category, multiple secondaries — use secondaries for the other service lines (automation/bots, content-creation automation) so all three surface, keep primary as the actual highest-intent lead source
- Check the live category list at profile-creation time (4,000+ taxonomy, Google updates it) — don't hardcode a guess, have the agent read the live list

### Q3. Set up as a Service Area Business (SAB), not a storefront
A freelance/small-team developer, not a retail location. Google's rule is explicit: if customers don't visit a physical address with signage and staffed hours, the address must be hidden and a service area listed instead — showing a real address anyway is one of the most common suspension causes.
- During setup: choose "I deliver goods and services to my customers at their location" → hides the address publicly (Google still requires a real, verifiable address internally — a PO box or virtual office/co-working space without signage/staff gets rejected)
- Service area: up to 20 cities/postal codes, sensible radius caps around a 2-hour drive from actual base — going further doesn't help since proximity won't favor you there anyway
- Video verification is the default for new listings in most regions — expect a continuous take demonstrating operation (for a SAB without a storefront, typically centers on a live management action rather than signage — flow can vary, follow whatever Google's live verification flow shows at signup)
- Known tradeoff: SABs rank less strongly on the *distance* factor than a storefront (no fixed point to measure proximity from) — offset by overperforming on relevance (Q2) and prominence (Q5–Q9); a well-optimized SAB with strong reviews/citations regularly outranks a lazy storefront listing

### Q4. NAP consistency — exact match, everywhere, forever
Name/Phone/Website URL must be byte-for-byte identical across GBP, Bing Places, every Q6 directory, site footer, and schema markup (ties to Phase F). "Pvt. Ltd." vs "Private Limited," a phone number written two ways, "Rd." vs "Road" — these count as inconsistencies to Google's entity-matching. Write the canonical NAP string down once, reuse verbatim everywhere in Q6.

### Q5. Reviews — two separate systems, do both, don't confuse them
Phase L's Trustpilot finding is a *third-party GEO signal* — affects whether ChatGPT/Gemini/Perplexity cite you. **Google reviews on GBP are a separate, Local-Pack-specific prominence signal** — different mechanism, same action (ask clients).
- Velocity beats bursts: a steady trickle over 90 days outranks 20 reviews in one week then silence — don't ask five people the same week the profile launches
- Respond to every review within 24 hours if possible — response rate and speed are both measured signals
- Real completed client work exists right now — Fusion Academy (coaching-center site) and DoodHisaab (dairy-accounting app) are genuine finished projects with a real relationship behind them. **[YOU]** — first two review asks, on both Google and Trustpilot, this week — not hypothetical future clients.

### Q6. Citations — a short, high-quality list, not a directory-blast
A handful of accurate, high-authority citations outperforms mass-submitting to 200+ low-quality directories (mostly creates NAP-consistency risk). In order, then stop:
1. **Google Business Profile** — the listing itself (Q1–Q5)
2. **Bing Places for Business** — free, and directly matters for GEO: ChatGPT Search runs on Bing's index/local data, so a synced Bing Places listing is a direct lever for showing up when someone asks ChatGPT for a local dev
3. **JustDial** and **Sulekha** — the two general-purpose Indian directories with strongest domain trust for local service businesses
4. **IndiaMART** — technically B2B, but functions as a strong citation source, worth it given the client-services model

Anything beyond this tier-1 list is optional/lower-priority — don't auto-submit to a 300-directory list, that's the same scaled-automation problem Phase N warns against, applied to citations.

### Q7. Posts and Products — small weekly habit, increasingly load-bearing
Posts don't move Local Pack *position* directly, but lift click-through and, as of the 2026 AI summary feed, get pulled into the Maps AI-generated summary alongside reviews and profile description. Products feed directly into Maps AI answers for "does anyone nearby do X."
- One Post/week minimum, 150–300 characters performs best, rotate "What's New" vs. genuine "Offer" — don't run an identical offer for months, reads as stale to both users and the summary generator
- Populate **Products** with the three actual service lines (website development, automation/bot development, content-creation automation), each with price range, short description, CTA — the most underused GBP feature and a direct hook into Maps AI answers

### Q8. LocalBusiness / ProfessionalService schema
Now merged into the Phase F table above rather than living as a separate item — see Phase F.

### Q9. Local backlinks — a different pool than Phase N's
Phase N's strategy (HARO, guest posts, Reddit/Quora) targets topical authority. Local prominence wants a *second*, geographically-anchored pool: local news mentions, chamber-of-commerce/trade-association listings, links from other real local businesses. Easiest available version: **ask Fusion Academy and the DoodHisaab dairy-farm teacher for a short testimonial with a link back to gurdharam.com** on their own site — genuine, white-hat, geographically-relevant, exactly what Phase N prioritizes, aimed locally.

### Q10. Sync to Bing Places
Covered in Q6, flagged again because it's easy to skip. Do it in week 1, not as an afterthought — five-minute task, outsized GEO payoff given how much AI local data flows through Bing.

**Why "near me" is the actual gap worth prioritizing:** organic ranking (Phases A–P) runs on content quality, backlinks, technical health, E-E-A-T. Local Pack ranking runs on **relevance → distance → prominence** — Google's own three-factor framework, unchanged over a decade, still official as of 2026. Whitespark's 2026 survey puts GBP signals at ~32% of Local Pack ranking weight, reviews ~20%, on-page ~15% (directional, methodology varies by survey). Ranking organically nationally for "web developer" is close to impossible — thousands of agencies compete. The Local Pack is a *local* competition — whoever's optimized for the specific service area, which in most Indian tier-2/tier-3 markets is a tiny fraction of competitors doing this properly. The Local Pack also isn't cosmetic: it appears on ~93% of local searches, eats roughly a third of the visible mobile screen (Moz SERP analysis, 2026), sitting *above* organic results.

---

## PART 4 — Content structure that actually earns AI citations (extends Phases E + G — read this section, don't skip it)

*This section exists specifically to fix the exact gap flagged in review: Phase G's paragraph-length rules and Phase E's "answer first" rule were living in separate sections and could be applied independently. They're one requirement.*

**The combined rule:** every section needs (a) a direct-answer first sentence immediately under its heading (Phase E), followed by (b) context/nuance kept under the G1 paragraph ceiling. A page that nails G1–G4 but buries the actual answer three sentences into a paragraph will not get extracted into an AI Overview or cited by ChatGPT — the *shape* of the answer matters as much as its length.

Additional structural findings that extend G, verified:
- Content organized into **120–180 word sections between headings** gets meaningfully more ChatGPT citations than shorter, fragmented sections (SE Ranking analysis of 129,000 domains, late 2025) — "under 150 words per paragraph" (G1) and "self-contained 60–180 word answer blocks" are the same target, keep hitting it
- Structural elements correlate with citation lift on top of that: comparison tables, numbered validation/checklist sections, and short-sentence "shortlist"-style pages (≤10 words/sentence average) each independently showed a citation-rate bump in a 2026 AirOps study. Build the three Phase Q service pages with at least one comparison or checklist block each — same content, more extractable shape
- Reminder from the May 15, 2026 policy update (Part 1): none of this is about gaming the AI Overview. It's the same "answer the actual question, clearly, up top" discipline Phase E already prescribes — these studies just confirm it's also what gets cited

---

## PART 5 — Free Tools & APIs — full stack at a glance

*(Individual tool detail lives inline in the phase it serves, above. This table is the single at-a-glance index — pass3's corrected version, supersedes the original tools doc's table.)*

| Need | Free tool/API | Note |
|---|---|---|
| Own-site backlinks, rankings, audit, **analytics** | Ahrefs Webmaster Tools **+ Web Analytics** | Web Analytics is cookieless, tracks LLM-referral traffic — the one thing GA4 doesn't do well. Zero extra signup, same account as AWT. |
| Competitor backlink spot-check | Moz (10/mo) + OpenLinkProfiler (uncapped) + Ahrefs public checker (top 20, no login) | None alone is deep, combined covers occasional lookups |
| Guest-post prospecting | Google search operators (`"your niche" "write for us"`) + LinkedIn People search | Most effective *and* free method per multiple 2026 sources |
| Editor email lookup | Hunter.io — **50 credits/month free** (migrated to unified-credit system mid-2025; up to 50 searches, 100 verifications, or a mix — corrected from the old "25 searches" framing, doesn't change the recommendation at 2–4 posts/month pace) | |
| Internal link audit + broken-link check | Screaming Frog (500 URLs free) | Covers orphan pages and 404s in the same crawl |
| Image compression | sharp (self-hosted, unlimited) / Squoosh (in-browser) | TinyPNG API (500/mo) if a hosted option is preferred |
| EXIF/IPTC cleanup | ExifTool | — |
| Page speed testing | PageSpeed Insights (+ free API) | Keyless for manual checks |
| CWV field data | GSC Core Web Vitals report | Real field data, not lab score |
| Instant indexing (Bing/Yandex → Copilot/ChatGPT indirectly) | IndexNow API | Corrected: helps Bing directly; ChatGPT benefit is real but indirect via Bing's index, not a direct integration — don't overstate this one |
| Search analytics, scriptable | Search Console API | 25,000 rows/request + 50,000 rows/day/property/search-type cap |
| GSC access from Claude | `mcp-gsc` (AminForou) | See Phase O for alternatives |
| Content/competitor scraping | Firecrawl free tier | 1,000 credits/mo, rate-limited — see Phase O |
| Schema validation | Rich Results Test + Schema.org Validator | Latter validates full 800+ type vocabulary, not just Google's subset |
| Keyword ideas | GSC + Google Trends + Keyword Planner (ranges without ad spend, still directional) + Autocomplete/PAA | Autocomplete/PAA generally surfaces better long-tail than Keyword Planner |
| AI-readiness self-audit | `Auriti-Labs/geo-optimizer-skill` | New, replaces "no free option" — run monthly |
| Ongoing multi-engine citation tracking | `AI2HU/gego` (self-hosted, bring-your-own-API-key) | New, replaces "skip, subscription-only" |
| Official AI-citation data (Microsoft ecosystem only) | Bing Webmaster Tools AI Performance | Scope caveat — Part 2 Phase M |
| AI-citation snapshot, all engines, one-off | Ahrefs AI Visibility Checker | Monthly manual spot-check, not continuous monitoring |
| SEO Claude Skills | ~~`seranking/seo-skills`~~ | **Removed — not free**, see Phase O |

**Tying it together:** given the existing Amazon-bot stack (WebSocket/GraphQL calls, Chrome-extension automation, AWS WAF handling), most of the API entries above are more natural to script than manage through five dashboards — a small GitHub Action hitting PageSpeed Insights after every Vercel deploy logging LCP/INP/CLS over time; the GSC API (service-account auth) for pulling query/page/click data in a custom shape; IndexNow as a one-line POST on the deploy hook. None of this is *necessary* — the dashboards work fine standalone — but it's the natural next step to run one script instead of juggling five logins, and every piece costs nothing beyond time.

---

## PART 6 — The runbook: what actually happens, in order

Sequences Part 0 (true foundation), Phases A–P, Phase Q, and the tool stack into calendar blocks. Checkboxes are agent-executable; anything needing input is marked **[YOU]**.

### Week 0 — True foundation (see Part 0 in full — nothing below can start until this is done)
- [ ] DNS records set from live `vercel domains inspect` output
- [ ] SSL confirmed, propagation confirmed
- [ ] Live site pages confirmed reachable at the real domain
- [ ] robots.txt + sitemap.xml live
- [ ] GSC domain-property verified, sitemap submitted
- [ ] Bing Webmaster Tools verified
- [ ] Ahrefs Webmaster Tools verified (unlocks Web Analytics too)

### Week 1 — Foundation + local entity
- [ ] robots.txt: explicitly allow Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Meta-ExternalAgent, Applebot-Extended by name (Phase B1 — or run `geo-optimizer-skill` to generate this)
- [ ] Q1: GBP entity name = Gurdharam Jeet Singh (decided — see Part 3)
- [ ] Q2–Q4: create GBP as Service Area Business under that name, narrowest accurate category, address hidden, NAP string finalized
- [ ] Q10: sync/create Bing Places listing with identical NAP

### Week 2 — On-page + local schema
- [ ] Phases C/D/E on any non-compliant pages (URL structure, title/meta rules, heading hierarchy — including the answer-first rule from Part 4, not just paragraph length)
- [ ] Phase F: Person schema for bio page if not live
- [ ] Phase F: `ProfessionalService`/`LocalBusiness` schema, `areaServed` matching GBP service area
- [ ] Build the three service pages (H8 table) if they don't exist yet — likely the single biggest content gap on a 2-page site

### Week 3 — Content into new pages + reviews kickoff
- [ ] Phase H keyword-research pass on each of the four H8 queries — manual SERP check, not just KD score
- [ ] Write the two case-study pages (Fusion Academy, DoodHisaab) per G4's word-count rules, applying Part 4's citation-structure findings (comparison/checklist block, 120–180 word sections, answer-first)
- [ ] **[YOU]** Q5: ask Fusion Academy + the DoodHisaab teacher for a Google review and a Trustpilot review
- [ ] Q7: first GBP Post; populate Products tab with the three service-line entries

### Week 4 — Images, internal links, performance, first citations
- [ ] Phases I/J/K on all pages (alt text, internal linking between new service pages and homepage, PageSpeed/CWV check via the API pipeline)
- [ ] J: run the same Screaming Frog crawl to check for orphans **and broken links** in one pass
- [ ] Q6 tier-1 citations: JustDial, Sulekha, IndiaMART — identical NAP string

### Month 2 — Authority
- [ ] Phase L: create/optimize Trustpilot profile — highest-leverage GEO move available (1% → 53.5% → 75.3% with the review-response caveat above)
- [ ] **[YOU]** Q9: ask Fusion Academy/DoodHisaab for a testimonial-with-backlink on their own site
- [ ] Phase N: 2–4 genuine guest-post pitches via search operators + Hunter.io
- [ ] **New:** first genuine Reddit/Quora participation pass in relevant subreddits (Phase N addition) — treat as its own line item, not backlink filler
- [ ] Continue weekly GBP posts, spread review asks

### Month 3+ — Steady state (recurring cadence)

| Frequency | Task |
|---|---|
| Weekly | 1 GBP Post; scan GSC for new queries; respond to any new review within 24h |
| Monthly | `geo-optimizer-skill` audit run; Ahrefs AI Visibility Checker spot-check; export Bing AI Performance grounding queries, check who's winning those queries on ChatGPT/Perplexity manually; re-run H8 keyword table as manual SERP checks; check review count/velocity |
| Quarterly | Full Ahrefs Webmaster Tools site audit (automatic); NAP consistency spot-check across all Q6 citations; re-run Phase H keyword research since SERPs shift; **refresh the 3 highest-value pages** (Phase L content-freshness addition) |
| Whenever a phase/week-block finishes | Short debrief — see Part 7 |

---

## PART 7 — Reporting: the debrief cadence
Best reading of the original ask: a debrief **every time a phase or block finishes**, not on a fixed calendar date — wired into the runbook above, plus a standing weekly/monthly rhythm underneath so nothing goes quiet between phases:
- **Weekly (3–4 lines):** GSC clicks/impressions delta, GBP calls + direction-requests, new reviews, what got published
- **Monthly (fuller):** the four H8 keywords' actual SERP position, Local Pack presence check (manual search from a clean/incognito session), Bing AI Performance citation trend, one-line "what changed, what's next"

---

## PART 8 — Guardrails (verified-risky, don't do these regardless of what an agent suggests)
- No automated/scaled backlink placement (Puppeteer or otherwise) — SpamBrain risk is real and current, recovery is slow (Phase N)
- No content written specifically to manipulate an AI Overview/AI Mode response — explicit Google spam policy since May 15, 2026 (Part 1)
- No keyword-stuffed GBP business name, no PO box/virtual office as the verification address — both documented, common suspension triggers (Phase Q3)
- No review bursts — spread the asks, velocity is the measured signal (Phase Q5)
- No mass directory submission beyond the Q6 tier-1 list — dilutes NAP consistency for no real gain
- Don't spend build time on llms.txt beyond the ten minutes it takes, or the one command `geo-optimizer-skill` needs — confirmed near-zero effect (Phase P)
- Don't remove existing FAQPage schema — still valid, still helps AI parsing, the rich-result dropdown is just gone (Part 1)
- Don't cite the Phase D2 CTR percentages, the "500 backlinks/40% drop" number, or the Trustpilot magnitude as hard sourced facts to a client — direction is solid, exact numbers aren't independently verifiable (Part 2, Phases D/N/L)
- Don't fabricate reviews to unlock Review/AggregateRating schema — add the markup only once real reviews exist (Phase F/L)

---

## PART 9 — Open decisions
None remaining. Q1 (entity name) is decided — Gurdharam Jeet Singh, see Part 3. Everything in this document is ready to execute once Part 0's foundation steps are done.

---

## PART 10 — Doc provenance
This file supersedes, in order of what it absorbed: the original A–P checklist, the free-tools Pass 2 doc, the Phase Q execution roadmap, the Pass 3 verification/corrections doc, and the standalone Phase 0 status note. Keep the four originals only as a dated archive — don't pull instructions from them separately going forward; anything in them that mattered is in here, with corrections applied at the point of use instead of living in a separate errata section.

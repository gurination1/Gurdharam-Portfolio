const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, 'dist');
const templatePath = path.join(distPath, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error("Build template not found at", templatePath);
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: '/',
    title: 'Gurdharam | Enterprise AI & Web Developer',
    description: 'Gurdharam: An Enterprise and independent AI & web developer focusing on custom LLM pipeline architectures, WhatsApp AI automated chat systems using the Meta Cloud API, and on-device offline intelligence.',
    canonical: 'https://www.gurdharam.com/',
    html: `
      <main>
        <header>
          <h1>Enterprise AI & Web Developer — Gurdharam Jeet Singh</h1>
          <p>Gurdharam: An Enterprise and independent AI & web developer focusing on custom LLM pipeline architectures, WhatsApp AI automated chat systems using the Meta Cloud API, and on-device offline intelligence systems.</p>
        </header>

        <section id="about">
          <h2>About Gurdharam Jeet Singh</h2>
          <p>Gurdharam: An Enterprise and independent AI & web developer focusing on custom LLM pipeline architectures, WhatsApp AI automated chat systems using the Meta Cloud API, and on-device offline intelligence. Combining global enterprise execution with independent boutique development speed.</p>
          <p>Specializing in Node.js, React, Python, and Flutter, I engineer usable intelligence systems that drive sales, automate workflows, and reduce operational overhead for local, enterprise, and international clients.</p>
        </section>

        <section id="services">
          <h2>Core Services & Solutions</h2>
          <ul>
            <li>
              <h3><a href="/services/web-development">Interactive 2D & 3D Web Development</a></h3>
              <p>Custom 2D/3D business websites built with React, Vite, TailwindCSS, and Three.js/Spline. Optimized for performance and SEO from day one.</p>
            </li>
            <li>
              <h3><a href="/services/ai-automation">AI Automation & Media Pipelines</a></h3>
              <p>Autonomous content creation machines (YouTube, Instagram, Facebook) and intelligent database search engines (RAG).</p>
            </li>
            <li>
              <h3><a href="/services/ai-voice-agents">Sub-300ms Voice AI Agents</a></h3>
              <p>Sarvam Indic voice callers and SIP/PSTN telephony integrations with sub-300ms turn-taking latency.</p>
            </li>
            <li>
              <h3><a href="/services/local-gpu-llm-quantization">Local GPU LLM Quantization</a></h3>
              <p>Air-gapped 70B parameter open-weights LLM deployment (vLLM, llama.cpp GGUF/AWQ) and MCP legal servers.</p>
            </li>
            <li>
              <h3><a href="/services/automated-video-generation-engine">VideoGen Engine Automation</a></h3>
              <p>Programmatic 1080p60 video generation engine with Remotion, PyTorch SDXL, and FFmpeg NVENC encoding.</p>
            </li>
            <li>
              <h3><a href="/services/whatsapp-business-bot">WhatsApp Business Bot</a></h3>
              <p>Custom 24/7 WhatsApp AI agents for all businesses. Integrated appointment booking and lead conversion.</p>
            </li>
            <li>
              <h3><a href="/services/offline-ai-app-development">Offline AI App Development</a></h3>
              <p>Flutter mobile apps running local, on-device machine learning models with zero server costs and zero latency.</p>
            </li>
            <li>
              <h3><a href="/services/dairy-management-app-flutter">Dairy Management App (Flutter)</a></h3>
              <p>Custom dairy accounting ledgers, milk volume collections, fat content pricing slabs, and monthly P&L calculations.</p>
            </li>
            <li>
              <h3><a href="/services/web-developer-muktsar-punjab">Web Developer in Muktsar Punjab</a></h3>
              <p>Local SEO, web design, and software consulting services tailored for businesses in Muktsar, Bathinda, and Punjab.</p>
            </li>
          </ul>
        </section>

        <section id="portfolio">
          <h2>Case Studies & Deep Technical Articles</h2>
          <ul>
            <li>
              <h3><a href="/blog/sarvam-indic-voice-ai-telephony-agent">Sub-300ms Sarvam Indic Voice AI Telephony Agent</a></h3>
              <p>Deep engineering breakdown of building real-time Indic voice callers with Exotel WebSockets, Pipecat, and Silero VAD.</p>
            </li>
            <li>
              <h3><a href="/blog/local-gpu-llm-quantization-mcp-legal-server">Local GPU LLM Quantization & MCP Legal Server</a></h3>
              <p>Running 70B open-weights models 100% air-gapped on single workstation GPUs with vLLM, AWQ, and MCP tools.</p>
            </li>
            <li>
              <h3><a href="/blog/automated-1080p60-videogen-pipeline">yt-auto: Automated 1080p60 VideoGen Pipeline</a></h3>
              <p>Self-hosted programmatic video generation engine using Remotion React rendering and FFmpeg NVENC encoding at $0 cloud cost.</p>
            </li>
            <li>
              <h3><a href="/blog/high-ticket-webgl-3d-spatial-digital-twin">NEOVRIT: 60 FPS WebGL 3D Spatial Digital Twins</a></h3>
              <p>High-ticket 3D spatial web design built on Three.js r128, DRACO geometry compression, and GSAP ScrollTrigger.</p>
            </li>
            <li>
              <h3><a href="/case-studies/doodhisaab">DoodHisaab — Offline Dairy Ledger App</a></h3>
              <p>A rural agritech application built in Flutter with local SQLite database for milk ledger accounts and cooperative collection tracking.</p>
            </li>
            <li>
              <h3><a href="/case-studies/fasal-doctor">Fasal Doctor — Offline ML Crop Disease Scan</a></h3>
              <p>Agritech mobile application using on-device TensorFlow Lite and MobileNetV2 for automated plant disease diagnosis and PAU advisory.</p>
            </li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/websites',
    title: 'Website Development Rates (₹5k - ₹20k) & Live Showcase | Gurdharam',
    description: 'Transparent website development packages (₹5k Basic, ₹7k SEO, ₹12k Interactive 3D, ₹20k Flagship Spatial) and live production showcase with real PC views.',
    canonical: 'https://www.gurdharam.com/websites',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://www.gurdharam.com/websites#collection",
          "url": "https://www.gurdharam.com/websites",
          "name": "Website Development Rates (₹5,000 - ₹20,000) & Live Client Showcase",
          "description": "Transparent website development rates and production client showcase: Kirat Interior (₹5k/₹7k), NEOVRIT Studio (₹12k), and Dream Heights & Gurdharam.com (₹20k)."
        }
      ]
    },
    html: `<main>
        <header>
          <h1>Transparent Website Development Rates & Production Showcase</h1>
          <p>Fixed-price packages: ₹5,000 Starter Business, ₹7,000 Growth Business with Google Local SEO & GSC Indexing, ₹12,000 2D + 3D Interactive, and ₹20,000 Ultra 3D Spatial Flagship.</p>
        </header>
        <section>
          <h2>Live Production Showcase</h2>
          <ul>
            <li><strong>Kirat Interior</strong>: Bespoke luxury furniture & interior studio (Bathinda, Punjab).</li>
            <li><strong>NEOVRIT Studio</strong>: 3D × AI agency web environment with Three.js GLTF model viewport.</li>
            <li><strong>Dream Heights & Gurdharam.com</strong>: Luxury gated residences on Ring Road Bathinda (2&3 BHK, saltwater pool, Day/Night engine) & studio headquarters flagship.</li>
          </ul>
        </section>
      </main>`
  },
  {
    path: '/services/ai-college-automation',
    title: 'AI College Admission Automation | Gurdharam',
    description: 'Automate student admission inquiries, fee reminders, and document verification for colleges and institutes in Punjab with WhatsApp AI agents.',
    canonical: 'https://www.gurdharam.com/services/ai-college-automation',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/ai-college-automation#webpage",
          "url": "https://www.gurdharam.com/services/ai-college-automation",
          "name": "AI College & University Admission Automation | Gurdharam",
          "description": "Automate student admission inquiries, fee reminders, and document verification."
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">AI Automation · Education</span>
          <h1>AI College & University Admission Automation in Punjab</h1>
          <div id="def-ai-college-automation" class="aeo-direct-answer">
            <p>AI College Admission Automation is an end-to-end conversational infrastructure built on the official Meta WhatsApp Cloud API. It automates 24/7 student inquiries, course eligibility checks, marksheet collection, and fee reminders for higher education colleges and universities in Punjab with zero monthly SaaS seat markups.</p>
          </div>
        </header>

        <section class="roi-section">
          <h2>Quantified Admissions ROI Benchmarks</h2>
          <table>
            <thead><tr><th>Performance Metric</th><th>Manual Phone Desk</th><th>WhatsApp AI Automation</th><th>Quantified Gain</th></tr></thead>
            <tbody>
              <tr><td>Lead Response Time</td><td>4 to 12 Hours</td><td>Under 500 Milliseconds</td><td>98% Faster Student Engagement</td></tr>
              <tr><td>Document Verification Time</td><td>3 to 5 Days (Paper)</td><td>Real-Time OCR Ingestion</td><td>100% Elimination of Backlog</td></tr>
              <tr><td>Admissions Conversion Rate</td><td>8.4% Average</td><td>24.8% Direct Follow-up</td><td>+195% Enrolled Students</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>The Problem: Missing 40%+ Inquiries During Punjab Admission Season</h2>
          <p>During peak board result declarations (CBSE, PSEB), admissions desks at colleges in Chandigarh, Bathinda, and Ludhiana receive 500+ calls daily. Over 40% of prospective students get busy tones or unanswered WhatsApp messages, causing them to enroll at competing private universities.</p>
          <p>Manual counsellors spend 70% of their workday answering repetitive questions about hostel fees, bus routes, minimum eligibility criteria, and syllabus details instead of closing high-value admissions.</p>
        </section>

        <section>
          <h2>Production 4-Step Technical Pipeline</h2>
          <ol>
            <li><strong>Lead Capture:</strong> Inbound QR codes on hoardings and social ads trigger the official Meta WhatsApp Cloud API with zero delay.</li>
            <li><strong>Bilingual Conversational NLP:</strong> The bot answers course eligibility questions in English, Punjabi, and Hindi using accurate institute knowledge bases.</li>
            <li><strong>Automated Document Collection:</strong> 10th and 12th marksheets, Aadhaar scans, and migration certificates are collected and synced directly to college Google Sheets / ERP.</li>
            <li><strong>Campus Visit Scheduler:</strong> Students book confirmed campus tours and counsellor meetings synced to the admissions director's calendar.</li>
          </ol>
        </section>

        <section>
          <h2>Regulatory Compliance & Data Privacy</h2>
          <p>Our college automation architecture strictly complies with the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> and UGC student confidentiality guidelines. Student documents are encrypted in transit and at rest with zero data leakage to third-party ad brokers.</p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <div class="faq-item">
            <h3>Can the bot answer complex fee structure and scholarship inquiries?</h3>
            <p>Yes. The bot calculates exact fee slabs, hostel accommodation tiers, and merit scholarships based on the student's 12th percentage and category.</p>
          </div>
          <div class="faq-item">
            <h3>Does it require monthly recurring software subscriptions?</h3>
            <p>No. We connect directly to your institute's official Meta Cloud account. You only pay standard Meta API rates with zero reseller markups.</p>
          </div>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/ai-automation">AI Automation Hub</a> | <a href="/blog/ai-college-admission-bot-punjab">Read the Full Case Study</a></p></footer>
      </main>`
  },
  {
    path: '/blog/ai-college-admission-bot-punjab',
    title: 'AI College Admission Bot Punjab | Gurdharam',
    description: 'Case study on deploying bilingual WhatsApp AI bots for higher education colleges in Punjab to capture 24/7 applicant leads and collect marksheets.',
    canonical: 'https://www.gurdharam.com/blog/ai-college-admission-bot-punjab',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com/blog/ai-college-admission-bot-punjab#article",
          "headline": "How Indian Colleges Automate Admissions with WhatsApp AI Agents",
          "description": "Case study on deploying bilingual WhatsApp AI bots for higher education colleges in Punjab to capture 24/7 applicant leads and collect marksheets.",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com/blog/ai-college-admission-bot-punjab",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Case Study · EdTech AI</span>
          <h1>How Indian Colleges Automate Admissions with WhatsApp AI Agents</h1>
          <div id="def-ai-college-blog" class="aeo-direct-answer">
            <p>This technical breakdown demonstrates how deploying a bilingual WhatsApp AI agent for higher education colleges in Punjab captures 24/7 prospective student inquiries, eliminates manual document collection bottlenecks, and boosts enrolled admissions by 195%.</p>
          </div>
        </header>

        <section>
          <h2>Architectural Overview: Meta Cloud API + RAG Vector Grounding</h2>
          <p>Higher education institutions in Punjab process thousands of inquiries across B.Tech, BCA, B.Com, MBA, and Nursing programs. Traditional call centers miss up to 45% of peak-season traffic. By implementing an asynchronous event-driven webhook architecture connecting Node.js and Meta Cloud APIs, colleges establish immediate sub-500ms conversational turn-taking.</p>
          <pre><code>// Production Webhook Event Ingestion
app.post('/api/webhook', async (req, res) => {
  const { messages } = req.body.entry[0].changes[0].value;
  if (messages && messages[0]) {
    await processStudentInquiry(messages[0]);
  }
  res.status(200).json({ status: 'ok' });
});</code></pre>
        </section>

        <section>
          <h2>Reverse Silo: Enterprise Implementation</h2>
          <p>For custom higher education campus deployments, explore my dedicated <a href="/services/ai-college-automation">AI College Admission Automation Services</a> and <a href="/services/whatsapp-business-bot">WhatsApp Business Bot Solutions</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/ai-college-automation">College Automation Service</a></p></footer>
      </main>`
  },
  {
    path: '/services/ai-voice-agents',
    title: 'Sub-300ms Voice AI Telephony Agents | Gurdharam',
    description: 'Bilingual Voice AI callers in Hindi, Punjabi, and English. Sub-300ms turn-taking latency over PSTN/SIP phone calls with Sarvam AI and Pipecat.',
    canonical: 'https://www.gurdharam.com/services/ai-voice-agents',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/ai-voice-agents#webpage",
          "url": "https://www.gurdharam.com/services/ai-voice-agents",
          "name": "Sub-300ms Indic Voice AI Telephony Agents | Gurdharam",
          "description": "Bilingual Voice AI callers in Hindi, Punjabi, and English."
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Voice AI · Telephony</span>
          <h1>Sub-300ms Indic Voice AI Telephony Agents for PSTN Calls</h1>
          <div id="def-ai-voice-agents" class="aeo-direct-answer">
            <p>Sub-300ms Indic Voice AI Telephony Agents provide natural, full-duplex conversational voice bots operating over standard phone lines (SIP/PSTN) in Hindi, Punjabi, and Indian English. Engineered with Sarvam AI, Pipecat, and Silero VAD for sub-second human turn-taking.</p>
          </div>
        </header>

        <section class="roi-section">
          <h2>Telephony Performance Benchmarks</h2>
          <table>
            <thead><tr><th>Pipeline Component</th><th>Standard Cloud Stack</th><th>Our Optimized Pipeline</th><th>Advantage</th></tr></thead>
            <tbody>
              <tr><td>Voice Activity Detection (VAD)</td><td>WebRTC VAD (450ms)</td><td>Silero VAD v5 (32ms)</td><td>Instant Interruption Handling</td></tr>
              <tr><td>Indic Speech-to-Text</td><td>Whisper Large (800ms)</td><td>Sarvam Indic ASR (140ms)</td><td>Native Hindi & Punjabi Dialects</td></tr>
              <tr><td>Total Turn-Taking Latency</td><td>1,600ms–2,400ms</td><td>280ms–340ms</td><td>Indistinguishable from Human Callers</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Full-Duplex Telephony Architecture</h2>
          <p>Most AI voice systems fail over telephone networks because 8kHz μ-law audio introduces severe compression artifacts, and cloud API roundtrips create awkward 2-second silences. Our architecture integrates audio buffer streaming with Exotel / Twilio WebSockets to process continuous bi-directional voice streams in real time.</p>
        </section>

        <section>
          <h2>Reverse Silo: Technical Guides</h2>
          <p>Read the deep architectural deep-dive: <a href="/blog/sarvam-indic-voice-ai-telephony-agent">Sub-300ms Sarvam Voice AI Case Study</a> or check out <a href="/services/multilingual-voice-ai-telephony">Multilingual Telephony Voice Services</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/multilingual-voice-ai-telephony">Multilingual Voice AI</a></p></footer>
      </main>`
  },
  {
    path: '/services/local-gpu-llm-quantization',
    title: 'Air-Gapped Local GPU LLM Legal Server | Gurdharam',
    description: 'Run 70B parameter open-weights models 100% air-gapped on single RTX GPUs with AWQ, GGUF Q4_K_M, vLLM, and Model Context Protocol legal tools.',
    canonical: 'https://www.gurdharam.com/services/local-gpu-llm-quantization',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/local-gpu-llm-quantization#webpage",
          "url": "https://www.gurdharam.com/services/local-gpu-llm-quantization",
          "name": "Air-Gapped Local GPU LLM & MCP Legal Server | Gurdharam",
          "description": "Run 70B parameter open-weights models 100% air-gapped on single RTX GPUs."
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Edge AI · On-Premise</span>
          <h1>Air-Gapped Local GPU LLM Quantization & MCP Legal Server</h1>
          <div id="def-gpu-llm" class="aeo-direct-answer">
            <p>Local GPU LLM Quantization allows law firms, healthcare institutions, and financial enterprises to run 70B parameter open-weights language models (Qwen 2.5, Llama 3.3) 100% on-premise on consumer RTX GPUs with zero cloud API token fees and 100% DPDP Act compliance.</p>
          </div>
        </header>

        <section>
          <h2>Hardware TCO & Throughput Benchmarks</h2>
          <table>
            <thead><tr><th>Quantization Scheme</th><th>GPU VRAM Required</th><th>Token Speed (tok/s)</th><th>Hardware Target</th></tr></thead>
            <tbody>
              <tr><td>FP16 Baseline</td><td>140 GB (2x A100)</td><td>12.4 tok/s</td><td>Enterprise Cloud Cluster ($8k/mo)</td></tr>
              <tr><td>AWQ 4-Bit</td><td>41 GB (1x RTX 6000 Ada)</td><td>28.6 tok/s</td><td>Single Workstation ($0 Cloud Cost)</td></tr>
              <tr><td>GGUF Q4_K_M</td><td>39 GB (RTX 4090 + RAM)</td><td>22.1 tok/s</td><td>Local Air-Gapped Desktop</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Model Context Protocol (MCP) Integration</h2>
          <p>By connecting local LLM servers to Model Context Protocol (MCP) servers, legal teams query local SQLite case archives, IPC statutes, and contract databases without any data leaving their private local network.</p>
        </section>

        <section>
          <h2>Reverse Silo: Engineering Documentation</h2>
          <p>Explore the full deployment blueprint in our guide: <a href="/blog/local-gpu-llm-quantization-mcp-legal-server">Local GPU LLM & MCP Legal Server Article</a> or consult on <a href="/blog/dpdp-act-compliant-air-gapped-llm-legal-tech">DPDP Act Compliant Air-Gapped LLMs</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/ai-automation">AI Automation Services</a></p></footer>
      </main>`
  },
  {
    path: '/services/automated-video-generation-engine',
    title: 'VideoGen — Automated 1080p60 Pipeline | Gurdharam',
    description: 'Self-hosted programmatic video generation engine for YouTube Shorts, Reels, and educational videos using Remotion, PyTorch SDXL, and FFmpeg NVENC.',
    canonical: 'https://www.gurdharam.com/services/automated-video-generation-engine',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/automated-video-generation-engine#webpage",
          "url": "https://www.gurdharam.com/services/automated-video-generation-engine",
          "name": "VideoGen — Automated 1080p60 Video Pipeline ($0 Cloud Cost) | Gurdharam",
          "description": "Self-hosted programmatic video generation engine."
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Media AI · Automation</span>
          <h1>VideoGen — Automated 1080p60 Video Generation Pipeline ($0 Cloud Cost)</h1>
          <div id="def-videogen" class="aeo-direct-answer">
            <p>VideoGen is a self-hosted programmatic media engine that automates the end-to-end creation of 1080p60 YouTube Shorts, Instagram Reels, and educational video courses using Remotion React rendering and hardware-accelerated FFmpeg NVENC encoding.</p>
          </div>
        </header>

        <section>
          <h2>Cloud SaaS vs Self-Hosted VideoGen Cost Comparison</h2>
          <table>
            <thead><tr><th>Production Scale</th><th>Cloud API Platforms (HeyGen/InVideo)</th><th>Self-Hosted VideoGen Pipeline</th><th>Annual Savings</th></tr></thead>
            <tbody>
              <tr><td>100 Videos / Month</td><td>$4,800 / Year</td><td>$0 Cloud Cost (Local RTX GPU)</td><td>$4,800 / Year</td></tr>
              <tr><td>1,000 Videos / Month</td><td>$36,000 / Year</td><td>$0 Cloud Cost (NVENC Batch)</td><td>$36,000 / Year</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Reverse Silo: Technical Resources</h2>
          <p>Read the complete technical tutorial: <a href="/blog/automated-1080p60-videogen-pipeline">Automated VideoGen Pipeline Architecture</a> or discover our <a href="/services/social-media-automation-coaching-institutes">Coaching Institute Video Automation Solutions</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/ai-automation">AI Automation</a></p></footer>
      </main>`
  },
  {
    path: '/blog/sarvam-indic-voice-ai-telephony-agent',
    title: 'Sub-300ms Indic Voice AI Telephony | Gurdharam',
    description: 'Engineering breakdown of full-duplex Indic voice callers using Pipecat, Sarvam AI, Exotel WebSockets, and Silero VAD over 8kHz PSTN lines.',
    canonical: 'https://www.gurdharam.com/blog/sarvam-indic-voice-ai-telephony-agent',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com/blog/sarvam-indic-voice-ai-telephony-agent#article",
          "headline": "Architecting a Sub-300ms Real-Time Voice AI Agent for Telephony",
          "description": "Detailed engineering breakdown of building full-duplex Indic voice callers using Pipecat, Sarvam AI, Exotel WebSockets, and Silero VAD over 8kHz PSTN phone lines.",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com/blog/sarvam-indic-voice-ai-telephony-agent",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Technical Article · Telephony</span>
          <h1>Architecting a Sub-300ms Real-Time Voice AI Agent for Telephony</h1>
          <div id="def-voice-blog" class="aeo-direct-answer">
            <p>Comprehensive engineering walkthrough on building sub-300ms full-duplex Indic voice callers using Sarvam AI, Exotel WebSockets, Pipecat framework, and Silero VAD over standard 8kHz PSTN phone lines.</p>
          </div>
        </header>

        <section>
          <h2>The Latency Problem in Indian Telephony</h2>
          <p>Standard voice bots suffer from 2,000ms+ roundtrip latencies due to sequential REST API chaining. By streaming raw 8kHz μ-law PCM audio chunks directly over WebSockets and using token-by-token TTS streaming, we reduced overall conversational turn-taking to 280ms.</p>
        </section>

        <section>
          <h2>Reverse Siloing to High-Ticket Services</h2>
          <p>Deploy enterprise voice callers: <a href="/services/ai-voice-agents">Sub-300ms Voice AI Services</a> and <a href="/services/multilingual-voice-ai-telephony">Multilingual Telephony Solutions</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/ai-voice-agents">Voice AI Service</a></p></footer>
      </main>`
  },
  {
    path: '/blog/local-gpu-llm-quantization-mcp-legal-server',
    title: 'Local GPU LLM & MCP Legal Server | Gurdharam',
    description: 'Running 70B parameter open-weights models (Qwen 2.5, Llama 3.3) 100% air-gapped on single workstation GPUs with AWQ, GGUF Q4_K_M, and MCP statutory tools.',
    canonical: 'https://www.gurdharam.com/blog/local-gpu-llm-quantization-mcp-legal-server',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com/blog/local-gpu-llm-quantization-mcp-legal-server#article",
          "headline": "Local GPU LLM Quantization & Model Context Protocol (MCP) Legal Server",
          "description": "Running 70B parameter open-weights models (Qwen 2.5, Llama 3.3) 100% air-gapped on single workstation GPUs with AWQ, GGUF Q4_K_M, and MCP statutory tools.",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com/blog/local-gpu-llm-quantization-mcp-legal-server",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Technical Article · Edge AI</span>
          <h1>Local GPU LLM Quantization & Model Context Protocol (MCP) Legal Server</h1>
          <div id="def-gpu-blog" class="aeo-direct-answer">
            <p>Detailed architecture for running 70B parameter open-weights models (Qwen 2.5, Llama 3.3) 100% air-gapped on single workstation GPUs with AWQ, vLLM, and Model Context Protocol (MCP) statutory tools.</p>
          </div>
        </header>

        <section>
          <h2>Air-Gapped Statutory Search Benchmarks</h2>
          <p>Indian law firms handling confidential client data cannot send unencrypted briefs to public cloud APIs. This guide details setting up local vLLM instances with INT4 AWQ quantization to serve statutory queries at 28 tok/s on a single RTX 6000 Ada GPU.</p>
        </section>

        <section>
          <h2>Reverse Silo Callouts</h2>
          <p>Implement local AI hardware: <a href="/services/local-gpu-llm-quantization">Local GPU LLM Quantization Services</a> and <a href="/blog/dpdp-act-compliant-air-gapped-llm-legal-tech">DPDP Act Compliance Guide</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/local-gpu-llm-quantization">Local GPU Services</a></p></footer>
      </main>`
  },
  {
    path: '/blog/automated-1080p60-videogen-pipeline',
    title: 'Automated 1080p60 VideoGen Pipeline | Gurdharam',
    description: 'How we built a self-hosted media pipeline combining Remotion, PyTorch SDXL, NumPy audio DSP, and hardware-accelerated FFmpeg NVENC encoding.',
    canonical: 'https://www.gurdharam.com/blog/automated-1080p60-videogen-pipeline',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com/blog/automated-1080p60-videogen-pipeline#article",
          "headline": "yt-auto: Scaling Automated 1080p60 Video Pipelines at $0 Cloud Cost",
          "description": "How we built a self-hosted media pipeline combining Remotion, PyTorch SDXL, NumPy audio DSP, and hardware-accelerated FFmpeg NVENC encoding.",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com/blog/automated-1080p60-videogen-pipeline",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Technical Article · Media Pipeline</span>
          <h1>yt-auto: Scaling Automated 1080p60 Video Pipelines at $0 Cloud Cost</h1>
          <div id="def-yt-auto" class="aeo-direct-answer">
            <p>Engineering blueprint for building a programmatic 1080p60 video generation engine combining Remotion React video rendering, PyTorch SDXL visuals, and hardware-accelerated FFmpeg NVENC encoding.</p>
          </div>
        </header>

        <section>
          <h2>Rendering Architecture & NVENC Speedups</h2>
          <p>Rendering React animations at 60 FPS typically bottlenecks on CPU encoders. By offloading video frame compositions to local NVIDIA NVENC hardware, our pipeline encodes 60-second 1080p60 videos in under 18 seconds.</p>
        </section>

        <section>
          <h2>Reverse Silo Callouts</h2>
          <p>Automate your content channels: <a href="/services/automated-video-generation-engine">VideoGen Engine Services</a> and <a href="/services/social-media-automation-real-estate">Real Estate Video Reels Automation</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/automated-video-generation-engine">VideoGen Engine</a></p></footer>
      </main>`
  },
  {
    path: '/blog/high-ticket-webgl-3d-spatial-digital-twin',
    title: '60 FPS WebGL 3D Spatial Digital Twins | Gurdharam',
    description: 'High-ticket real estate and B2B SaaS digital twin engine built on Three.js r128, DRACO geometry compression (93% size reduction), and GSAP ScrollTrigger.',
    canonical: 'https://www.gurdharam.com/blog/high-ticket-webgl-3d-spatial-digital-twin',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com/blog/high-ticket-webgl-3d-spatial-digital-twin#article",
          "headline": "NEOVRIT: Building 60 FPS WebGL 3D Spatial Digital Twins",
          "description": "High-ticket real estate and B2B SaaS digital twin engine built on Three.js r128, DRACO geometry compression (93% size reduction), and GSAP ScrollTrigger.",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com/blog/high-ticket-webgl-3d-spatial-digital-twin",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Technical Article · WebGL 3D</span>
          <h1>NEOVRIT: Building 60 FPS WebGL 3D Spatial Digital Twins</h1>
          <div id="def-webgl-twin" class="aeo-direct-answer">
            <p>Technical breakdown of engineering high-ticket 60 FPS WebGL 3D spatial digital twins using Three.js r128, DRACO geometry compression (93% bandwidth reduction), and GSAP ScrollTrigger camera lerp smoothing.</p>
          </div>
        </header>

        <section>
          <h2>DRACO Geometry Compression Benchmarks</h2>
          <p>Standard architectural GLTF assets exceed 45MB, crashing mobile browsers. Applying Google DRACO point-cloud and mesh compression shrinks complex 3D showroom models down to 1.8MB while maintaining 60 FPS rendering on mobile devices.</p>
        </section>

        <section>
          <h2>Reverse Silo Links</h2>
          <p>Explore custom 3D web platforms: <a href="/services/web-development">Web Development Services</a> and <a href="/services/website-design-jewelry-showrooms">Jewelry Showroom WebGL Design</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/web-development">Web Development</a></p></footer>
      </main>`
  },
  {
    path: '/services',
    title: 'AI Automation & Web Services | Gurdharam',
    description: 'Comprehensive software engineering capabilities: custom WhatsApp bots, air-gapped local LLMs, 60 FPS WebGL websites, and offline mobile apps in Punjab.',
    canonical: 'https://www.gurdharam.com/services',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services#webpage",
          "url": "https://www.gurdharam.com/services",
          "name": "AI Automation & Web Engineering Services | Gurdharam Jeet Singh",
          "description": "Comprehensive software engineering capabilities: custom WhatsApp bots, air-gapped local LLMs, 60 FPS WebGL websites, and offline mobile apps."
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://www.gurdharam.com/#organization",
          "name": "Gurdharam AI Engineering",
          "url": "https://www.gurdharam.com/services",
          "image": "https://www.gurdharam.com/og-card.png",
          "telephone": "+91-6280333252",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Muktsar",
            "addressRegion": "Punjab",
            "addressCountry": "IN"
          }
        }
      ]
    },
    html: `<main>
        <header>
          <span class="category-pill">Engineering Services Hub</span>
          <h1>AI Automation, Local LLMs & High-End Web Engineering</h1>
          <div id="def-services-hub" class="aeo-direct-answer">
            <p>Gurdharam Jeet Singh engineers high-performance software infrastructure for commercial enterprises in Punjab and worldwide. Specializing in official Meta WhatsApp Cloud API automation, air-gapped local 70B parameter LLM legal servers, 60 FPS Three.js WebGL websites, and offline-first Flutter mobile apps with on-device machine learning.</p>
          </div>
        </header>

        <section>
          <h2>Core Engineering Capabilities</h2>
          <div class="grid-services">
            <article>
              <h3><a href="/services/whatsapp-business-bot">Custom WhatsApp Business Bots</a></h3>
              <p>Official Meta Cloud API webhooks with zero monthly SaaS seat fees. Automated appointment booking, lead triage, and dynamic catalog dispatch.</p>
            </article>
            <article>
              <h3><a href="/services/local-gpu-llm-quantization">Local GPU LLM Quantization</a></h3>
              <p>Air-gapped 70B parameter open-weights models (vLLM, AWQ, GGUF) compliant with India DPDP Act 2023. Zero cloud data leakage.</p>
            </article>
            <article>
              <h3><a href="/services/web-development">High-End 3D & 2D Web Development</a></h3>
              <p>Static pre-rendered React platforms compiled with Vite. 60 FPS Three.js WebGL digital twins and sub-500ms First Contentful Paint.</p>
            </article>
            <article>
              <h3><a href="/services/offline-ai-app-development">Offline AI Mobile App Development</a></h3>
              <p>Cross-platform Flutter apps with local SQLite databases and on-device TensorFlow Lite machine learning inference in weak signal areas.</p>
            </article>
          </div>
        </section>

        <section>
          <h2>19 Turnkey Industry Vertical Solutions</h2>
          <p>Explore customized industry architectures tailored to local businesses in Punjab, Chandigarh, and northern India:</p>
          <ul>
            <li><a href="/services/whatsapp-bot-jewelry-stores">Jewelry Showroom WhatsApp Bot</a></li>
            <li><a href="/services/whatsapp-bot-coaching-institutes">Coaching Institute WhatsApp Bot</a></li>
            <li><a href="/services/whatsapp-bot-clinics-hospitals">Clinics & Hospital WhatsApp Bot</a></li>
            <li><a href="/services/whatsapp-bot-salons-spas">Salon & Spa WhatsApp Bot</a></li>
            <li><a href="/services/whatsapp-bot-real-estate">Real Estate Lead Qualification Bot</a></li>
            <li><a href="/services/whatsapp-bot-malls-retail">Shopping Mall Directory Bot</a></li>
            <li><a href="/services/whatsapp-bot-gyms-fitness">Gym Membership Renewal Bot</a></li>
            <li><a href="/services/whatsapp-bot-restaurants-cafes">Restaurant Table Booking Bot</a></li>
            <li><a href="/services/whatsapp-bot-travel-agencies">Travel Agency Itinerary Bot</a></li>
            <li><a href="/services/whatsapp-bot-wedding-planners">Wedding Planner & Banquet Bot</a></li>
            <li><a href="/services/whatsapp-bot-furniture-showrooms">Furniture Showroom Catalog Bot</a></li>
            <li><a href="/services/whatsapp-bot-automobile-dealerships">Automobile Dealership Test Drive Bot</a></li>
            <li><a href="/services/social-media-automation-coaching-institutes">Coaching Institute VideoGen Pipeline</a></li>
            <li><a href="/services/social-media-automation-jewelry-brands">Jewelry Brand Daily Video Reels</a></li>
            <li><a href="/services/social-media-automation-real-estate">Real Estate Property Video Reels</a></li>
            <li><a href="/services/website-design-jewelry-showrooms">Jewelry Showroom 3D WebGL Design</a></li>
            <li><a href="/services/website-design-coaching-institutes">Coaching Institute Website Design</a></li>
            <li><a href="/services/website-design-clinic-websites">Doctor & Clinic Website Design</a></li>
            <li><a href="/services/website-design-mall-retail">Shopping Mall & Retail Website Design</a></li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Home</a> | <a href="/blog">Engineering Blog</a> | <a href="/developer-directory">Developer Directory</a></p>
        </footer>
      </main>`
  },
  {
    path: '/services/web-development',
    title: 'Web Developer Chandigarh & Punjab | Gurdharam',
    description: 'High-end 2D and 3D websites, custom WebGL, Three.js, and technical SEO architecture. Serving Chandigarh, Ludhiana, Bathinda, and global clients.',
    canonical: 'https://www.gurdharam.com/services/web-development',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/web-development#webpage",
          "url": "https://www.gurdharam.com/services/web-development",
          "name": "Web Developer Chandigarh & Punjab | Gurdharam Jeet Singh",
          "description": "High-end 2D and 3D websites, custom WebGL, Three.js, and technical SEO architecture."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.gurdharam.com/services/web-development#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the typical timeline for building a custom 3D website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard professional web landing page takes about 10–14 days. An interactive 3D WebGL or dynamic full-stack portal with custom databases and bookings takes between 3 to 6 weeks, depending on asset complexity and logic integrations."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure my website ranks on search engines?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every website I construct includes automatic static pre-rendering, custom metadata setups, canonical tags, schema markups (LocalBusiness, WebSite, Service), and page speed tuning. This ensures search engines can crawl, index, and query your website instantly."
              }
            },
            {
              "@type": "Question",
              "name": "Do you build custom ecommerce platforms and CMS databases?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. I build custom, high-security databases using Node.js webhooks, PostgreSQL, and SQLite. These are tailored to manage inventories, customer bookings, secure checkout gateways, and custom user portals without expensive monthly Shopify fees."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help set up domain names, hosting servers, and SSL certificates?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. I handle the entire server lifecycle. I set up custom Advanced DNS records (A and CNAME records), link them to fast edge hosting providers like Vercel or AWS, and configure automatic, auto-renewing SSL certificates for complete data encryption."
              }
            }
          ]
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Website Developer in Chandigarh — High-End 2D & 3D Web Platforms</h1>
          <p>I am a full-stack website developer serving businesses across Chandigarh, Ludhiana, Bathinda, and international markets. I build high-end 2D and 3D dynamic websites optimized for search engines from day one—managing everything from domain registration to interactive WebGL experiences for hospitals, clinics, travel agencies, restaurants, and corporate clients.</p>
        </header>

        <section>
          <h2>Development Capabilities</h2>
          <ul>
            <li>
              <h3>Interactive 3D Websites</h3>
              <p>Go beyond flat templates. I build immersive, GPU-accelerated 3D web experiences using Three.js and Spline that instantly establish brand authority, captivate visitors, and provide interactive product demonstrations.</p>
            </li>
            <li>
              <h3>SEO Architecture</h3>
              <p>A beautiful site is useless if it ranks poorly. I implement strict technical SEO, semantic HTML5 tags, schema markup integration, and page speed optimization directly into the React codebase.</p>
            </li>
            <li>
              <h3>Full-Stack Business Solutions</h3>
              <p>Complete commercial infrastructure from domain purchase to database setup. Tailored for specialized niches like dental clinics, hostels, travel agencies, and eCommerce pipelines.</p>
            </li>
            <li>
              <h3>Dynamic Portfolios</h3>
              <p>High-performance portfolio sites for agencies and professionals featuring smooth GSAP scrolling, custom cursors, fluid layouts, and seamless page transitions.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>WebGL & 3D Asset Performance Engineering</h2>
          <p>Integrating 3D interactive graphics (Three.js/Spline) into a web app often leads to poor frame rates and long page loads. To maintain a smooth experience, I build custom optimization pipelines that reduce asset file sizes by up to 80%.</p>
          <ul>
            <li>Polygon Reduction & GLTF Compression: I optimize 3D models directly, applying Draco compression and texture maps. This shrinks heavy 3D assets to under 1.5MB while keeping visual detail crisp.</li>
            <li>Vite Chunk Splitting & Tree-Shaking: I configure Rollup parameters inside Vite to split third-party code bundles (like Three.js, GSAP, and Framer Motion) into distinct, cached chunks, improving page load speeds.</li>
          </ul>
        </section>

        <section>
          <h2>How I Build Premium Web Platforms</h2>
          <p>When you hire me as your website developer in Chandigarh or Ludhiana, you receive a bespoke system built for your business outcomes. I avoid generic page builders like WordPress or Wix because they introduce bloated code, slow loading times, and limited design flexibility.</p>
          <ul>
            <li>Custom React & Vite Frameworks: Every website is coded using modern Javascript/TypeScript stacks (React, Vite, Next.js). This ensures the application loads under 1 second, behaves as a smooth Single Page Application (SPA), and supports highly complex interactive animations.</li>
            <li>Strict Core Web Vitals Optimization: I optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). This guarantees a frictionless user experience and earns maximum organic search credit from Google's ranking systems.</li>
            <li>Locally-Optimized Pre-Rendering: Using custom post-build scripts, I pre-render the SPA into static HTML subpages. This makes the content instantly readable for search engine spiders (Googlebot, Bingbot) and AI engines, enabling faster indexing and search visibility.</li>
          </ul>
        </section>

        <section>
          <h2>Target Industries & Locations</h2>
          <p>I deliver custom web solutions for local Punjab and international businesses in:</p>
          <ul>
            <li>Hospitals, Dental Clinics, and Medical Practices</li>
            <li>Travel Agencies, Hostels, and Tourism Operators</li>
            <li>Real Estate Agencies, Restaurants, and Retail Stores</li>
            <li>Global B2B Startups and Tech Agencies</li>
          </ul>
          <p>Primary Service Areas: Chandigarh, Ludhiana, Bathinda, Amritsar, Jalandhar, Punjab, Worldwide.</p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>What is the typical timeline for building a custom 3D website?</strong>
              <p>A standard professional web landing page takes about 10–14 days. An interactive 3D WebGL or dynamic full-stack portal with custom databases and bookings takes between 3 to 6 weeks, depending on asset complexity and logic integrations.</p>
            </li>
            <li>
              <strong>How do you ensure my website ranks on search engines?</strong>
              <p>Every website I construct includes automatic static pre-rendering, custom metadata setups, canonical tags, schema markups (LocalBusiness, WebSite, Service), and page speed tuning. This ensures search engines can crawl, index, and query your website instantly.</p>
            </li>
            <li>
              <strong>Do you build custom ecommerce platforms and CMS databases?</strong>
              <p>Yes. I build custom, high-security databases using Node.js webhooks, PostgreSQL, and SQLite. These are tailored to manage inventories, customer bookings, secure checkout gateways, and custom user portals without expensive monthly Shopify fees.</p>
            </li>
            <li>
              <strong>Can you help set up domain names, hosting servers, and SSL certificates?</strong>
              <p>Absolutely. I handle the entire server lifecycle. I set up custom Advanced DNS records (A and CNAME records), link them to fast edge hosting providers like Vercel or AWS, and configure automatic, auto-renewing SSL certificates for complete data encryption.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Back to Home</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/ai-automation',
    title: 'AI Automation & Bots Developer | Gurdharam',
    description: 'Engineer custom WhatsApp AI bots for spas, gyms, lawyers, factories, and clinics, plus automated YouTube/Instagram content creation machines.',
    canonical: 'https://www.gurdharam.com/services/ai-automation',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/ai-automation#webpage",
          "url": "https://www.gurdharam.com/services/ai-automation",
          "name": "AI Automation Expert India | Custom Bots & Media Pipelines | Gurdharam Jeet Singh",
          "description": "Custom WhatsApp AI agents for spas, gyms, lawyers, factories, and clinics, alongside automated YouTube/Instagram/Rumble content pipelines."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.gurdharam.com/services/ai-automation#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do automated faceless video pipelines generate revenue?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Automated pipelines write scripts using LLMs, generate speech using realistic TTS engines, edit clips using FFmpeg/ComfyUI, and auto-upload to YouTube, Reels, and Rumble. These channels build subscribers and monetize via platform ad funds (AdSense, Rumble Partner Program) or drive organic traffic to affiliate landing pages 24/7."
              }
            },
            {
              "@type": "Question",
              "name": "Is organic video automation cheaper than paid social ads?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Paid Meta/Google ads require a daily cash budget. Once the ad budget is zero, your traffic stops. Automated organic video pipelines are a one-time build that publish compounding content assets which stay on search engines and platform feeds forever, driving free traffic 24/7."
              }
            },
            {
              "@type": "Question",
              "name": "What types of businesses can utilize WhatsApp AI booking bots?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "These bots fit any appointment-based or lead-qualification model. I build custom agents for dental clinics, wellness hospitals, fitness gyms, car dealerships, cleaning services, real estate, and consultancy agencies. They coordinate availability directly with your calendar database."
              }
            },
            {
              "@type": "Question",
              "name": "Why do you offer API reverse engineering services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many legacy CRM systems, local databases, or closed SaaS platforms do not have official public APIs. I reverse-engineer these endpoints to extract data and build secure, automated synchronization pipelines where official integrations are unavailable."
              }
            }
          ]
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>AI Automation Expert in India — Custom Bots & Media Pipelines</h1>
          <p>I engineer custom AI automation systems for businesses in India and worldwide. I specialize in deploying 24/7 WhatsApp AI agents for spas, salons, gyms, lawyers, companies, factories, and clinics, alongside fully automated YouTube and Instagram content creation pipelines. These systems replace expensive manual operations by driving sales, capturing leads, and running video rendering pipelines 24/7.</p>
        </header>

        <section>
          <h2>Core Automation Services</h2>
          <ul>
            <li>
              <h3>WhatsApp AI Agents</h3>
              <p>Custom conversational chatbots designed for spas, salons, gyms, lawyers, clinics, and companies. Operating 24/7, these agents utilize structured logic trees to qualify incoming leads, propose calendar bookings, and lock slots directly into your CRM.</p>
            </li>
            <li>
              <h3>Faceless Media Pipelines</h3>
              <p>A massive cost-saver replacing manual video editors. I build programmatic engines that write scripts using LLMs, synthesize natural human voice, compile stock clips using FFmpeg and ComfyUI, and auto-upload content to YouTube, Reels, and Rumble.</p>
            </li>
            <li>
              <h3>Reverse Engineering</h3>
              <p>Deep-level API and database reverse engineering to integrate unsupported platforms into your automated workflows. I extract hidden HTTP endpoints, write automated scripts, and connect legacy systems where official integrations do not exist.</p>
            </li>
            <li>
              <h3>Custom AI & RAG Databases</h3>
              <p>Fine-tuned large language models (LLMs) and Retrieval-Augmented Generation (RAG) databases. These systems act as secure, local knowledge repositories for internal research, customer service, and localized advisory files.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>How My Automation Architecture Works</h2>
          <p>Generic automation templates fail because they cannot handle complex edge cases or require expensive monthly SaaS subscriptions. My systems are engineered using custom webhook codebases, running locally on your own infrastructure for maximum data security and ₹0 in ongoing platform costs.</p>
          <ul>
            <li>Calendar Integration: Syncs with Google Calendar, Outlook, and local healthcare databases to query and reserve patient booking slots in real time.</li>
            <li>Media Orchestration: Generative Python scripts that control ComfyUI rendering servers, stitching MP4s with customized subtitles and audio.</li>
            <li>LLM Classification: Multi-layer classification models that detect user intent, process local context (Punjabi/Hindi), and route queries securely.</li>
          </ul>
        </section>

        <section>
          <h2>Cross-Platform Auto-Uploading and Headless Browser Systems</h2>
          <p>Automating content delivery across platforms like YouTube, Rumble, Instagram, Dailymotion, Facebook, and X (Twitter) requires robust scheduler pipelines. Because some platforms lack public upload APIs, standard tools fail.</p>
          <ul>
            <li>Headless Upload Controllers: I build headless upload scripts using Puppeteer and Selenium. These scripts simulate user interactions to upload rendered MP4 files directly to platform dashboards, bypassing API restrictions.</li>
            <li>API Authentication Tokens: For platforms with official APIs (like YouTube Data API and Facebook Graph API), my scripts manage OAuth2 authentication flows, handling token refreshes securely in background cron jobs.</li>
          </ul>
        </section>

        <section>
          <h2>Why Automate Your Marketing & Operations?</h2>
          <ul>
            <li>Save ₹30,000 - ₹50,000 monthly on video editors, content creators, and copywriters.</li>
            <li>Compounding organic traffic through relentless, scheduled multi-platform video uploads.</li>
            <li>Zero manual lead leaks with 24/7 patient/client WhatsApp responses.</li>
            <li>100% data ownership on your own secure database without monthly subscription locks.</li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>How do automated faceless video pipelines generate revenue?</strong>
              <p>Automated pipelines write scripts using LLMs, generate speech using realistic TTS engines, edit clips using FFmpeg and ComfyUI, and auto-upload to YouTube, Reels, and Rumble. These channels build subscribers and monetize via platform ad funds (AdSense, Rumble Partner Program) or drive organic traffic to affiliate landing pages 24/7.</p>
            </li>
            <li>
              <strong>Is organic video automation cheaper than paid social ads?</strong>
              <p>Yes. Paid Meta/Google ads require a daily cash budget. Once the ad budget is zero, your traffic stops. Automated organic video pipelines are a one-time build that publish compounding content assets which stay on search engines and platform feeds forever, driving free traffic 24/7.</p>
            </li>
            <li>
              <strong>What types of businesses can utilize WhatsApp AI booking bots?</strong>
              <p>These bots fit any appointment-based or lead-qualification model. I build custom agents for dental clinics, wellness hospitals, fitness gyms, car dealerships, cleaning services, real estate, and consultancy agencies. They coordinate availability directly with your calendar database.</p>
            </li>
            <li>
              <strong>Why do you offer API reverse engineering services?</strong>
              <p>Many legacy CRM systems, local databases, or closed SaaS platforms do not have official public APIs. I reverse-engineer these endpoints to extract data and build secure, automated synchronization pipelines where official integrations are unavailable.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Back to Home</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/crop-disease-detection-app',
    title: 'Crop Disease Detection App Developer | AgTech AI',
    description: 'Specialist in offline-first agricultural AI apps using on-device machine learning (MobileNetV2, Flutter, TensorFlow Lite) for crop disease scans.',
    canonical: 'https://www.gurdharam.com/services/crop-disease-detection-app',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/crop-disease-detection-app#webpage",
          "url": "https://www.gurdharam.com/services/crop-disease-detection-app",
          "name": "Crop Disease Detection App Developer | AgTech AI | Gurdharam Jeet Singh",
          "description": "Specialist in offline-first agricultural AI apps using on-device machine learning."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.gurdharam.com/services/crop-disease-detection-app#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which crops and diseases can your mobile AI models detect?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "My custom crop AI models are fine-tuned to identify over 15 regional Punjab plant diseases, including yellow rust and powdery mildew in wheat, leaf spot and blight in cotton, and brown spot and blast in rice varieties."
              }
            },
            {
              "@type": "Question",
              "name": "How do you update agricultural advisories if the app runs completely offline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The app uses an internal SQLite database for instant retrieval. When the smartphone connects to Wi-Fi or 4G, the app triggers a silent, lightweight sync webhook to download database revisions and update chemical guidelines."
              }
            },
            {
              "@type": "Question",
              "name": "What smartphone specifications are needed to run on-device inference?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The TensorFlow Lite quantized network is optimized for low-end hardware. It runs on typical Android devices with Android 8.0+ and 2GB of RAM, executing crop image classifications in under 2 seconds."
              }
            }
          ]
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Crop Disease Detection App Developer — AI-Powered Agricultural Technology</h1>
          <p>I build crop disease detection apps that run entirely offline using on-device machine learning. My shipped product, Fasal Doctor, uses a fine-tuned MobileNetV2 model to scan infected plants through a smartphone camera, identify the disease in under 2 seconds, and provide PAU-affiliated treatment advisory — all without requiring internet connectivity in remote farming regions of Punjab.</p>
        </header>

        <section>
          <h2>How It Works</h2>
          <ul>
            <li>Point & Scan: Open the app, point your camera at the affected crop leaf or stem. No internet required.</li>
            <li>AI Diagnosis: The on-device neural network analyzes the image against thousands of disease patterns in under 2 seconds.</li>
            <li>Treatment Plan: Receive PAU-affiliated agricultural advisory with specific pesticide recommendations and dosage instructions.</li>
          </ul>
        </section>

        <section>
          <h2>Technical Architecture</h2>
          <ul>
            <li>Offline-First Design: Built with Flutter and TensorFlow Lite for complete offline execution. The entire ML model runs on the device processor, meaning zero cloud API costs and zero latency even in fields with no 4G coverage.</li>
            <li>Transfer Learning Pipeline: Custom model built using transfer learning on MobileNetV2 backbone, fine-tuned on PlantVillage and regional Punjab crop disease datasets for high accuracy on local varieties including wheat, rice, and cotton diseases.</li>
          </ul>
        </section>

        <section>
          <h2>On-Device Machine Learning Optimization</h2>
          <p>Standard computer vision apps fail in remote agricultural contexts because they upload high-resolution photos to cloud APIs. My agritech apps bypass this requirement entirely by compressing heavy deep learning models into optimized on-device binaries.</p>
          <ul>
            <li>INT8 Model Quantization: I compress 32-bit floating-point weights into 8-bit integers (INT8 quantization) via TensorFlow Lite Post-Training Quantization (PTQ). This drops model sizes from 50MB+ down to just 11MB, allowing it to run smoothly on budget smartphones without draining batteries or causing overheating.</li>
            <li>PAU and Agricultural Advisory Database: AI diagnosis is useless without action. My system parses on-device SQLite databases populated with official Punjab Agricultural University (PAU) advisory boards. It returns exact chemical composition formulas, volume calculations, and safety instructions in both Punjabi and English.</li>
          </ul>
        </section>

        <section>
          <h2>Camera Buffer Management & Native Streams</h2>
          <p>Processing real-time frame rates requires low-level image controllers. My architectures fetch camera buffers directly from native platform services (CameraX on Android, AVFoundation on iOS) and translate frames locally in memory.</p>
          <ul>
            <li>RGB Frame Resizing: Mobile camera outputs are resized to 224x224 RGB matrices locally before execution, preventing RAM leaks and keeping memory consumption below 30MB during scans.</li>
            <li>Version Update Checks: Silent REST APIs handle checks when Wi-Fi is active. The application downloads updated TFLite binaries automatically, maintaining data fresh with zero user impact.</li>
          </ul>
        </section>

        <section>
          <h2>Who This Is For</h2>
          <ul>
            <li>Agritech Startups looking for a developer who understands both ML and agricultural domain requirements.</li>
            <li>Agricultural Universities needing a technical partner to convert research models into field-ready mobile applications.</li>
            <li>Government Agricultural Programs deploying precision farming tools to rural communities without reliable connectivity.</li>
            <li>Pesticide & Fertilizer Companies wanting branded crop diagnostic tools for their farming customers.</li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>Which crops and diseases can your mobile AI models detect?</strong>
              <p>My custom crop AI models are fine-tuned to identify over 15 regional Punjab plant diseases, including yellow rust and powdery mildew in wheat, leaf spot and blight in cotton, and brown spot and blast in rice varieties.</p>
            </li>
            <li>
              <strong>How do you update agricultural advisories if the app runs completely offline?</strong>
              <p>The app uses an internal SQLite database for instant retrieval. When the smartphone connects to Wi-Fi or 4G, the app triggers a silent, lightweight sync webhook to download database revisions and update chemical guidelines.</p>
            </li>
            <li>
              <strong>What smartphone specifications are needed to run on-device inference?</strong>
              <p>The TensorFlow Lite quantized network is optimized for low-end hardware. It runs on typical Android devices with Android 8.0+ and 2GB of RAM, executing crop image classifications in under 2 seconds.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Back to Home</a> | <a href="/case-studies/fasal-doctor">Read Case Study</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/dairy-management-app-flutter',
    title: 'Dairy Ledger App Developer | Gurdharam',
    description: 'Develop offline milk ledger apps in Flutter for rural dairy businesses in Punjab. Custom milk collection tracking, P&L calculations, and SQLite.',
    canonical: 'https://www.gurdharam.com/services/dairy-management-app-flutter',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/dairy-management-app-flutter#webpage",
          "url": "https://www.gurdharam.com/services/dairy-management-app-flutter",
          "name": "Dairy Ledger App Developer | Gurdharam Jeet Singh",
          "description": "Develop offline milk ledger apps in Flutter for rural dairy businesses in Punjab."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.gurdharam.com/services/dairy-management-app-flutter#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can the app share monthly milk receipts with farmers over WhatsApp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The application runs local rendering code that converts monthly collection tables into a neat PDF receipt. This file can be shared directly with the farmer over WhatsApp using the native mobile share sheet, even with limited internet."
              }
            },
            {
              "@type": "Question",
              "name": "How do we prevent data loss if the phone gets damaged or lost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Although the application is 100% offline-first, it includes a simple database backup option. Users can export the encrypted SQLite database file directly to an SD card, external drive, or upload a manual backup to Google Drive with one tap."
              }
            },
            {
              "@type": "Question",
              "name": "Is the software interface available in regional languages like Punjabi and Hindi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, localization is a core feature. The app fully supports Punjabi, Hindi, and English, with clear voice prompts and large numeric keypads to ensure dairy owners can use it without typing difficulties."
              }
            }
          ]
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Dairy Management App — Flutter Offline Milk Ledger for Rural India</h1>
          <p>I develop custom dairy management applications using Flutter that work entirely offline. My shipped product, DoodHisaab, is a complete milk accounting system built for rural dairy businesses in Punjab — tracking daily deliveries, managing customer accounts, and computing monthly profit-and-loss margins instantly on the device without requiring any internet connection.</p>
        </header>

        <section>
          <h2>Core Features</h2>
          <ul>
            <li>Daily Collection Tracking: Record morning and evening milk collections per customer with fat content, volume, and rate. Supports multiple rate slabs based on fat percentage — matching how dairy cooperatives actually operate in India.</li>
            <li>Automated P&L Computation: Replaces manual ledger math entirely. Instant monthly profit/loss calculations per customer and overall business, with daily, weekly, and monthly breakdowns.</li>
            <li>100% Offline Operation: Local SQLite database on device. No cloud dependency, no subscription fees, no data uploaded to external servers. Works in areas with zero connectivity.</li>
            <li>UI-First for Low Literacy: Designed specifically for users with minimal smartphone experience. Large touch targets, icon-first navigation, and minimal text input — tested with actual milkmen in Punjab villages.</li>
          </ul>
        </section>

        <section>
          <h2>Automated FAT/SNF Rate Slabs</h2>
          <p>In the Indian dairy industry, milk is not sold at a flat rate. Cooperative collection operators calculate prices based on two parameters: FAT (fat content) and SNF (Solids-Not-Fat). Recording this manually in registers requires complex mathematical formulas that lead to human errors and payment disputes.</p>
          <ul>
            <li>Real-Time Milk Fat Pricing Engine: My Flutter application runs a custom calculation engine that instantly calculates the price per liter of milk using input FAT percentage, SNF percentage, and current base pricing matrices. This ensures milkmen can give immediate receipts and payouts to farmers right at the collection desk.</li>
            <li>Local SQLite Relational Schema: To ensure 100% data integrity without an active internet connection, the app runs a local, relational SQLite database on-device. Tables are optimized for fast querying of historical collections, cumulative payments, monthly accounts, and total milk volume logs.</li>
          </ul>
        </section>

        <section>
          <h2>Local Document Rendering & Offline Backups</h2>
          <p>Sharing statements and billing accounts over messaging apps requires optimized, lightweight formats. My applications generate invoices on the fly using local PDF templates.</p>
          <ul>
            <li>On-Device PDF Compilation: App compiles invoice summaries locally into PDF files in under 500ms, allowing operators to send them directly over WhatsApp using local share sheets.</li>
            <li>Encrypted SQLite Backups: Encrypted SQLite backup logs can be exported to external memory cards or synced silently to Google Drive accounts when internet is active, preventing data loss.</li>
          </ul>
        </section>

        <section>
          <h2>Why India's Dairy Industry Needs This</h2>
          <p>India is the world's largest milk producer with a $200+ billion dairy industry. Over 80 million rural households depend on dairy farming. Most small dairy operators still use handwritten notebooks for accounting — losing money to calculation errors, forgotten entries, and disputes over fat-content pricing. A dedicated offline app solves this at near-zero operating cost.</p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>Can the app share monthly milk receipts with farmers over WhatsApp?</strong>
              <p>Yes. The application runs local rendering code that converts monthly collection tables into a neat PDF receipt. This file can be shared directly with the farmer over WhatsApp using the native mobile share sheet, even with limited internet.</p>
            </li>
            <li>
              <strong>How do we prevent data loss if the phone gets damaged or lost?</strong>
              <p>Although the application is 100% offline-first, it includes a simple database backup option. Users can export the encrypted SQLite database file directly to an SD card, external drive, or upload a manual backup to Google Drive with one tap.</p>
            </li>
            <li>
              <strong>Is the software interface available in regional languages like Punjabi and Hindi?</strong>
              <p>Yes, localization is a core feature. The app fully supports Punjabi, Hindi, and English, with clear voice prompts and large numeric keypads to ensure dairy owners can use it without typing difficulties.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Back to Home</a> | <a href="/case-studies/doodhisaab">Read Case Study</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/website-design-company-chandigarh',
    title: 'Website Design Company Chandigarh | Gurdharam',
    description: 'Top Chandigarh web design agency. Custom React, Next.js, and 3D WebGL sites for brands, clinics, & enterprises in Chandigarh & Tricity.',
    canonical: 'https://www.gurdharam.com/services/website-design-company-chandigarh',
    jsonld: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://www.gurdharam.com/services/website-design-company-chandigarh#service",
      "name": "Website Design Company in Chandigarh — Gurdharam Jeet Singh",
      "url": "https://www.gurdharam.com/services/website-design-company-chandigarh"
    },
    html: `<main><header><h1>Website Design Company in Chandigarh</h1><p>Gurdharam Jeet Singh builds ultra-fast, 3D interactive, and SEO-dominated websites for brands, clinics, coaching institutes, real estate firms, and enterprises in Chandigarh, Mohali, and Panchkula.</p></header></main>`
  },
  {
    path: '/services/custom-react-developer-india',
    title: 'Custom React Developer India | Gurdharam',
    description: 'Hire expert React & Next.js full-stack developer in India. High-performance, pre-rendered SSG web apps with sub-1 second load times.',
    canonical: 'https://www.gurdharam.com/services/custom-react-developer-india',
    jsonld: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.gurdharam.com/services/custom-react-developer-india#service",
      "name": "Custom React Developer & Next.js Web Engineer in India",
      "url": "https://www.gurdharam.com/services/custom-react-developer-india"
    },
    html: `<main><header><h1>Custom React Developer in India</h1><p>Gurdharam Jeet Singh is a senior React and Next.js full-stack web developer based in India. Engineering high-ticket 2D/3D web applications, SaaS dashboards, and pre-rendered SSG marketing sites.</p></header></main>`
  },
  {
    path: '/services/indic-ai-voice-agent-developer',
    title: 'Voice AI Agent Developer India | Gurdharam',
    description: 'Hire expert Voice AI Agent Developer in India. Building sub-300ms Indic voice assistants (Hindi, Punjabi, English) over PSTN phone lines & SIP trunks.',
    canonical: 'https://www.gurdharam.com/services/indic-ai-voice-agent-developer',
    jsonld: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.gurdharam.com/services/indic-ai-voice-agent-developer#service",
      "name": "Voice AI Agent Developer & Indic AI Phone Assistant Engineer India",
      "url": "https://www.gurdharam.com/services/indic-ai-voice-agent-developer"
    },
    html: `<main><header><h1>Voice AI Agent Developer in India</h1><p>Gurdharam Jeet Singh engineers autonomous Voice AI phone callers, virtual receptionists, and Indic voice assistants for medical clinics, coaching centers, real estate agencies, and customer support desks across India.</p></header></main>`
  },
  {
    path: '/services/ai-automation-agency-india',
    title: 'AI Automation Agency India | Gurdharam',
    description: 'Leading AI Automation Agency in India. Build custom n8n, Make, WhatsApp API, AI phone bots, and multi-agent LLM business workflows.',
    canonical: 'https://www.gurdharam.com/services/ai-automation-agency-india',
    jsonld: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.gurdharam.com/services/ai-automation-agency-india#service",
      "name": "AI Automation Agency India — Custom LLM & Workflow Automation",
      "url": "https://www.gurdharam.com/services/ai-automation-agency-india"
    },
    html: `<main><header><h1>AI Automation Agency in India</h1><p>Gurdharam Jeet Singh leads a top-tier AI Automation Agency in India. Engineering autonomous multi-agent LLM pipelines, n8n/Make workflow integrations, WhatsApp Cloud API bots, and automated AI telephony callers.</p></header></main>`
  },
  {
    path: '/services/whatsapp-business-bot',
    title: 'WhatsApp Business Bot Developer | Gurdharam',
    description: 'Build custom 24/7 WhatsApp AI bots for all business types. Automated bookings, orders, and lead conversion.',
    canonical: 'https://www.gurdharam.com/services/whatsapp-business-bot',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/whatsapp-business-bot#webpage",
          "url": "https://www.gurdharam.com/services/whatsapp-business-bot",
          "name": "WhatsApp Business Automation Developer | Gurdharam Jeet Singh",
          "description": "Build custom 24/7 WhatsApp AI bots for spas, gyms, lawyers, companies, factories, and clinics. Automated bookings, orders, and lead conversion."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.gurdharam.com/services/whatsapp-business-bot#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I use my existing company phone number for the WhatsApp automation bot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You can register your existing landline or mobile business number onto the official WhatsApp Business Cloud API. Once registered on the API, the number handles thousands of concurrent chats, but it can no longer be used on the standard mobile app interface. I guide you through the migration steps smoothly."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to pay monthly subscription fees for my WhatsApp bot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Unlike generic SaaS providers, I deploy custom webhooks on pay-as-you-go server setups. You connect directly to Meta's Business portal. Meta provides 1,000 free service-initiated conversations per month, and additional customer chats cost only direct rates (~₹0.30 to ₹0.72 per chat), saving you heavy platform markups."
              }
            },
            {
              "@type": "Question",
              "name": "Does the AI chatbot understand messages sent in Punjabi or Hindi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. I train the NLP logic parsing layers to understand conversational Hindi, Punjabi, and Hinglish. It accurately captures user intent, service questions, booking parameters, and operational hours sent in local phrasing."
              }
            },
            {
              "@type": "Question",
              "name": "How does the WhatsApp bot integrate with my existing business database?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I write custom integration middleware that connects to your existing SQL database, ERP, Google Sheets, or business CRM via API webhooks. The bot reads available products, services, or calendar slots dynamically, and writes customer inputs directly to your systems."
              }
            }
          ]
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>WhatsApp Business Automation Developer — Custom Bots for Spas, Gyms, Lawyers & Factories</h1>
          <p>I build custom, production-grade WhatsApp AI bots and automation workflows for all business sectors in Punjab and globally. Whether you run a law firm, beauty salon, spa, gym, private clinic, B2B company, or manufacturing factory, my custom-engineered WhatsApp Business API solutions automate client bookings, lead intake, dealer queries, and operational webhooks 24/7 without expensive monthly SaaS bills.</p>
        </header>

        <section>
          <h2>WhatsApp Solutions for Every Business</h2>
          <ul>
            <li>Lawyers & Legal Firms: Automate client intake, pre-qualify case details based on practice area, book initial legal consultations directly into calendar databases, and send automated hearing date updates and payment links to active clients.</li>
            <li>Salons, Spas & Wellness Centers: Let clients view service menus, check real-time stylist availability, reserve appointment slots, reschedule bookings, and send automated appointment reminders to reduce no-show rates.</li>
            <li>Gyms & Fitness Clubs: Manage membership inquiries, distribute workout guides, automate daily trainer scheduling, process renewal reminders, and collect membership fees through direct UPI payment links in WhatsApp.</li>
            <li>Companies, Distributors & Factories: Automate supply chain logistics, route distributor orders, process inventory checks, allow dealers to track raw material shipments, and dispatch shipping notifications from ERP systems.</li>
            <li>Hospitals, Clinics & Doctors: Manage patient appointments, automate follow-up checks, share pre-operation checklists, send test result alerts, and route critical clinical queries directly to medical staff.</li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>Can I use my existing company phone number for the WhatsApp automation bot?</strong>
              <p>Yes. You can register your existing landline or mobile business number onto the official WhatsApp Business Cloud API. Once registered on the API, the number handles thousands of concurrent chats, but it can no longer be used on the standard mobile app interface. I guide you through the migration steps smoothly.</p>
            </li>
            <li>
              <strong>Do I need to pay monthly subscription fees for my WhatsApp bot?</strong>
              <p>No. Unlike generic SaaS providers, I deploy custom webhooks on pay-as-you-go server setups. You connect directly to Meta's Business portal. Meta provides 1,000 free service-initiated conversations per month, and additional customer chats cost only direct rates (~₹0.30 to ₹0.72 per chat), saving you heavy platform markups.</p>
            </li>
            <li>
              <strong>Does the AI chatbot understand messages sent in Punjabi or Hindi?</strong>
              <p>Yes. I train the NLP logic parsing layers to understand conversational Hindi, Punjabi, and Hinglish. It accurately captures user intent, service questions, booking parameters, and operational hours sent in local phrasing.</p>
            </li>
            <li>
              <strong>How does the WhatsApp bot integrate with my existing business database?</strong>
              <p>I write custom integration middleware that connects to your existing SQL database, ERP, Google Sheets, or business CRM via API webhooks. The bot reads available products, services, or calendar slots dynamically, and writes customer inputs directly to your systems.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Back to Home</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/web-developer-muktsar-punjab',
    title: 'Web Developer Muktsar & Bathinda | Gurdharam',
    description: 'Full-stack web developer and AI engineer in Muktsar, Bathinda, and Punjab. Custom business websites, local SEO, and agritech apps.',
    canonical: 'https://www.gurdharam.com/services/web-developer-muktsar-punjab',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/web-developer-muktsar-punjab#webpage",
          "url": "https://www.gurdharam.com/services/web-developer-muktsar-punjab",
          "name": "Web Developer in Muktsar & Bathinda, Punjab | Gurdharam Jeet Singh",
          "description": "Professional web developer and AI engineer based in Muktsar, Punjab. Custom 2D/3D business websites, local SEO, and agritech apps."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.gurdharam.com/services/web-developer-muktsar-punjab#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the cost of building a website in Punjab?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost depends on complexity. A standard 2D landing page or portfolio starts at ₹15,000. Interactive 3D websites with custom WebGL, Three.js, or complex animations start at ₹35,000. Custom enterprise portals or apps (like dairy ledgers or agritech diagnostics) require scoping and start at ₹50,000+."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help optimize my local Google Business Profile (GBP)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. I combine web development with local SEO optimization. Every site I deliver is connected to Google Search Console and includes Schema.org LocalBusiness structured data. I also guide clients in configuring their GBP, citations, and maps to rank for local 'near me' keywords in Muktsar, Bathinda, and Ludhiana."
              }
            },
            {
              "@type": "Question",
              "name": "Do your WhatsApp bots work for gyms, clinics, and travel agencies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. I build custom WhatsApp AI agents integrated with calendar booking, database lookup, and CRM systems. They are perfect for dental clinics, hospitals, fitness clubs, travel agents, and corporate services to automate lead response and schedule bookings 24/7."
              }
            },
            {
              "@type": "Question",
              "name": "Why do you focus on offline-first app architectures?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In rural Punjab and agritech deployments, 4G/5G connections are often unreliable. Offline-first architectures using local SQLite databases and on-device TensorFlow Lite machine learning (like Fasal Doctor) guarantee the app functions perfectly under any conditions with zero network latency and zero recurring cloud database hosting costs."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to deploy a custom website or app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A professional landing page or small business website is typically deployed in 10-14 days. Complex 3D platforms, multi-user mobile apps, or custom AI automations take 3-6 weeks."
              }
            }
          ]
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Web Developer in Muktsar & Bathinda, Punjab — AI-Powered SEO & High-Performance Websites</h1>
          <p>Gurdharam Jeet Singh is a professional web developer and AI engineer serving Chandigarh, Mohali, Ludhiana, Jalandhar, Amritsar, Bathinda, and Muktsar. I build interactive 3D WebGL websites, cross-platform Flutter mobile applications, and autonomous WhatsApp AI booking bots. Serving local Punjab and global markets, I bridge the gap between premium design aesthetics, fast indexing, and Generative Engine Optimization (GEO) to help your business rank on day one.</p>
        </header>

        <section>
          <h2>Full-Stack Development Capabilities</h2>
          <ul>
            <li>
              <h3>Interactive 3D WebGL</h3>
              <p>Immersive, hardware-accelerated experiences using Three.js, React Three Fiber, and Spline. Perfect for modern agencies, design studios, and premium consumer brands.</p>
            </li>
            <li>
              <h3>WhatsApp AI Automations</h3>
              <p>Custom chatbots utilizing large language models and RAG data. Designed for dental clinics, gyms, travel agencies, and hospitals to capture midnight leads and book clients 24/7.</p>
            </li>
            <li>
              <h3>Flutter & Offline ML Apps</h3>
              <p>Offline-first agritech and utility apps with on-device AI inference. Run heavy computer vision models like MobileNetV2 locally on the phone with zero cloud server bills.</p>
            </li>
            <li>
              <h3>Technical SEO & Schema</h3>
              <p>Rigorous Core Web Vitals optimization, static pre-rendering, schema markup integration, and clean site architectures built for high-speed indexing by search bots.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>My Development Process</h2>
          <ol>
            <li>
              <strong>Discovery & Architecture:</strong> Understanding business goals, finalizing the sitemap, and outlining requirements (e.g., WhatsApp logic trees, schema entities, offline data schemas).
            </li>
            <li>
              <strong>High-Fidelity Interface Design:</strong> Crafting modern layouts using custom typography, color systems, and interactive micro-animations to map user journeys.
            </li>
            <li>
              <strong>Clean-Code Implementation:</strong> Writing optimized code using React/Vite for frontend and Flutter/Dart for mobile, ensuring 100% responsive grids.
            </li>
            <li>
              <strong>SSG & SEO Injection:</strong> Pre-rendering all routes into static HTML files so that Google, Ahrefs, and AI engines index your full content without executing JS.
            </li>
            <li>
              <strong>Launch & Analytics:</strong> Deploying to Vercel/PlayStore, verifying HTTPS/SSL certificates, submitting sitemaps, and setting up Google Analytics and Search Console.
            </li>
          </ol>
        </section>

        <section>
          <h2>Value-Driven Development Packages</h2>
          <ul>
            <li><strong>Essential Web (5x More Affordable):</strong> Responsive landing page, Schema LocalBusiness, Vite frontend, and Vercel hosting setup.</li>
            <li><strong>High-End 3D & SEO (5x More Affordable):</strong> Three.js / WebGL 3D design, GSAP smooth scroll, Static Site Pre-rendering (SSG), and multi-route directory mapping.</li>
            <li><strong>AI Bot / App (10x More Affordable):</strong> Custom WhatsApp AI agent, SQLite local storage integration, offline TensorFlow inference, and dashboard data analytics.</li>
          </ul>
        </section>

        <section>
          <h2>Local Coverage In Punjab</h2>
          <p>I provide local in-person software development consultation and website building services across Muktsar Sahib, Bathinda, Faridkot, Ferozepur, Ludhiana, Jalandhar, Amritsar, and Chandigarh. Combining native Punjabi and Hindi support with global development standards, I build tailored systems for local agriculture cooperatives, hospitals, clinics, hotels, and travel agencies.</p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>What is the cost of building a website in Punjab?</strong>
              <p>The cost depends on complexity. A standard 2D landing page or portfolio starts at ₹15,000. Interactive 3D websites with custom WebGL, Three.js, or complex animations start at ₹35,000. Custom enterprise portals or apps (like dairy ledgers or agritech diagnostics) require scoping and start at ₹50,000+.</p>
            </li>
            <li>
              <strong>Can you help optimize my local Google Business Profile (GBP)?</strong>
              <p>Yes. I combine web development with local SEO optimization. Every site I deliver includes Schema.org LocalBusiness structured data. I also guide clients in configuring their GBP, citations, and maps to rank for local 'near me' keywords in Muktsar, Bathinda, and Ludhiana.</p>
            </li>
            <li>
              <strong>Do your WhatsApp bots work for gyms, clinics, and travel agencies?</strong>
              <p>Absolutely. I build custom WhatsApp AI agents integrated with calendar booking, database lookup, and CRM systems. They are perfect for dental clinics, hospitals, fitness clubs, travel agents, and corporate services to automate lead response and schedule bookings 24/7.</p>
            </li>
            <li>
              <strong>Why do you focus on offline-first app architectures?</strong>
              <p>In rural Punjab and agritech deployments, 4G/5G connections are often unreliable. Offline-first architectures using local SQLite databases and on-device TensorFlow Lite machine learning (like Fasal Doctor) guarantee the app functions perfectly under any conditions with zero network latency and zero recurring cloud database hosting costs.</p>
            </li>
            <li>
              <strong>How long does it take to deploy a custom website or app?</strong>
              <p>A professional landing page or small business website is typically deployed in 10-14 days. Complex 3D platforms, multi-user mobile apps, or custom AI automations take 3-6 weeks.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p>Primary Service Areas: Muktsar, Bathinda, Punjab, India, Worldwide.</p>
          <p><a href="/">Back to Home</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/offline-ai-app-development',
    title: 'Offline AI App Developer | Flutter & On-Device ML',
    description: 'Developer of offline-first AI mobile apps using on-device ML models, Flutter, and TFLite. Run AI inference with zero latency and zero cloud costs.',
    canonical: 'https://www.gurdharam.com/services/offline-ai-app-development',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/offline-ai-app-development#webpage",
          "url": "https://www.gurdharam.com/services/offline-ai-app-development",
          "name": "Offline AI App Developer | Gurdharam Jeet Singh",
          "description": "Developer of offline-first AI mobile apps using on-device ML models, Flutter, and TFLite."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.gurdharam.com/services/offline-ai-app-development#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What machine learning models can run offline on a mobile phone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most computer vision backbones (MobileNetV2, EfficientNet, YOLOv8-Nano) and lighter natural language classifiers can be quantized and compiled to run directly on-device using CPU/GPU hardware delegates."
              }
            },
            {
              "@type": "Question",
              "name": "How do we handle model updates for offline applications?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We set up background sync tasks. Whenever the user's phone connects to an active network, the app sends a lightweight version-check payload and automatically downloads the latest model weights (.tflite binary) in the background."
              }
            },
            {
              "@type": "Question",
              "name": "Does running ML locally cause the smartphone to lag?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, because we implement strict CPU-delegate thresholds and run inference asynchronously in separate background threads (Isolates). This keeps the main user interface running at a smooth 60 or 120 FPS."
              }
            }
          ]
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Offline AI App Developer — Flutter & On-Device ML</h1>
          <p>I am a Flutter developer specializing in offline AI applications — mobile apps that run machine learning models entirely on the device with zero cloud dependency. From crop disease detection in remote fields to dairy accounting in villages with no 4G coverage, I build apps that deliver intelligent functionality where connectivity doesn't exist.</p>
        </header>

        <section>
          <h2>Why Offline AI Matters</h2>
          <ul>
            <li>Zero Connectivity Required: Over 600 million people in India have unreliable or no internet access. Offline AI apps serve these users without compromise.</li>
            <li>Zero API Costs: No per-request cloud inference charges. The model runs on the device processor, making the marginal cost of each prediction exactly zero.</li>
            <li>Complete Data Privacy: Sensitive data (medical images, financial records, personal information) never leaves the device. No cloud storage, no data breach risk.</li>
          </ul>
        </section>

        <section>
          <h2>Technical Stack & Edge Architecture</h2>
          <p>Executing raw machine learning algorithms on mobile processors leads to immediate memory leaks and battery drain. My development pipeline utilizes optimized on-device formats and multi-threaded system processes to deliver fluid performance on budget smartphones.</p>
          <ul>
            <li>Flutter Isolates & Multi-Threading: To prevent the smartphone interface from freezing during computation, the TensorFlow Lite or ONNX interpreter is executed in background Flutter Isolates. The camera frame buffer is passed to this separate memory isolate, preprocessed, analyzed, and the results are piped back to the main thread.</li>
            <li>Model Compression & INT8 Quantization: I compress PyTorch or TensorFlow neural networks using Post-Training Quantization (PTQ). This process quantizes model weights from 32-bit floats to 8-bit integers, shrinking file sizes by 75% (e.g. from 54MB to 11.2MB) with minimal impact on diagnostic accuracy.</li>
          </ul>
        </section>

        <section>
          <h2>Native Hardware Buffer Access & Image Preprocessing</h2>
          <p>For computer vision apps, fetching frames from the camera stream requires direct access to native platform channels. If frames are read slowly or contain raw formats, inference latency increases.</p>
          <ul>
            <li>YUV420 to RGB Conversion: Mobile cameras output frames in YUV420 format. I implement low-level C++ rendering delegates that convert these streams directly to RGB matrices before inputting them to the TFLite interpreter.</li>
            <li>Offline Sync Webhooks: When the app detects a cellular network, it triggers background REST sync webhooks. It uploads local SQLite transactions and downloads the latest model weights, keeping updates completely silent.</li>
          </ul>
        </section>

        <section>
          <h2>Shipped Offline AI Products</h2>
          <ul>
            <li>Fasal Doctor: Offline crop disease detection for Punjab farmers. Camera scan → on-device ML inference → disease identification → PAU treatment advisory. Zero internet required.</li>
            <li>DoodHisaab: Offline dairy ledger for rural milkmen. Daily collection tracking, automated P&L computation, customer account management — all on local SQLite, zero cloud.</li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>What machine learning models can run offline on a mobile phone?</strong>
              <p>Most computer vision backbones (MobileNetV2, EfficientNet, YOLOv8-Nano) and lighter natural language classifiers can be quantized and compiled to run directly on-device using CPU/GPU hardware delegates.</p>
            </li>
            <li>
              <strong>How do we handle model updates for offline applications?</strong>
              <p>We set up background sync tasks. Whenever the user's phone connects to an active network, the app sends a lightweight version-check payload and automatically downloads the latest model weights (.tflite binary) in the background.</p>
            </li>
            <li>
              <strong>Does running ML locally cause the smartphone to lag?</strong>
              <p>No, because we implement strict CPU-delegate thresholds and run inference asynchronously in separate background threads (Isolates). This keeps the main user interface running at a smooth 60 or 120 FPS.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Back to Home</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/case-studies/doodhisaab',
    title: 'DoodHisaab Offline Dairy App Case Study',
    description: 'Detailed case study of DoodHisaab, an offline dairy ledger and milk accounting app built in Flutter for milkmen in rural Punjab.',
    canonical: 'https://www.gurdharam.com/case-studies/doodhisaab',
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>DoodHisaab Case Study — Offline Dairy Ledger App</h1>
          <p>DoodHisaab is a custom Flutter mobile application built for rural dairy businesses and milk collection centers in Punjab (Bathinda and Muktsar). It functions as a complete milk ledger, featuring an offline-first SQLite database that allows milkmen to track daily collections, manage customer accounts, and calculate monthly profit margins instantly without requiring an internet connection.</p>
        </header>

        <section>
          <h2>Project Core Metrics</h2>
          <ul>
            <li>Tech Stack: Flutter, Dart, SQLite, Local State Management (Provider).</li>
            <li>Target Area: Muktsar, Bathinda, and Faridkot districts, Punjab, India.</li>
            <li>Operational Benefit: 100% manual calculation error reduction, zero monthly cloud server hosting fees.</li>
          </ul>
        </section>

        <section>
          <h2>Problem Statement & Context</h2>
          <p>Dairy farming and milk collection form the economic core of rural Punjab. However, local milk collection operators and milkmen traditionally record twice-daily collections in physical paper notebooks. This manual ledger method is highly prone to mathematical errors, payment disputes, and lost data due to damaged notebooks. Because cellular connectivity is highly unstable in the outer fields of Muktsar Sahib and Bathinda, any standard cloud-hosted SaaS tool is completely unusable during active collection hours.</p>
          <p>These connectivity constraints mean that milk collection centers need a solution that runs locally on simple mobile hardware while matching the operational realities of local cooperatives.</p>
        </section>

        <section>
          <h2>The Engineering Solution</h2>
          <p>To resolve this connectivity gap, I architected DoodHisaab as an offline-first mobile database application. Built with Flutter, the app utilizes a local relational SQLite database embedded directly inside the device sandbox. This guarantees that data is written immediately, even without internet access.</p>
          <ul>
            <li>Fat/SNF Math: App applies base pricing slabs to compute milk value dynamically, depending on FAT and SNF parameters.</li>
            <li>Multi-Client Profiles: Supports profiles for hundreds of farmers, storing chronological transaction histories locally.</li>
            <li>PDF Receipts: Generates neat summary statements locally, which operators share over WhatsApp when network resumes.</li>
          </ul>
        </section>

        <section>
          <h2>SQLite Database Schema and Data Integrity</h2>
          <p>The underlying database is built using a normalized schema that links clients (farmers) to daily collections. The main collections table tracks volume, milk FAT percentage, SNF (Solids-Not-Fat) parameters, rate-per-liter, and the calculated total cost. To prevent concurrency conflicts when writing morning and evening records, the database triggers use automated transaction blocks.</p>
        </section>

        <section>
          <h2>Operational Outcomes & Direct Impact</h2>
          <p>Since deployment at select collection centers in Muktsar, DoodHisaab has delivered measurable efficiency improvements:</p>
          <ul>
            <li>Saved 1.5 hours daily: Collection operators no longer spend hours at night recalculating entries in physical books.</li>
            <li>Zero payment disputes: Automatic calculations based on transparent fat pricing slabs eliminated customer complaints.</li>
            <li>100% Data Preservation: Even when phones are dropped or changed, localized SQLite exports ensure database state remains safe.</li>
          </ul>
        </section>

        <section>
          <h2>UI/UX Design Tailored for Rural Mobile Operators</h2>
          <p>Software interfaces designed for urban office users fail immediately when deployed in hot, dusty rural milk collection centers. To make DoodHisaab usable under field conditions, I designed the user interface around high-contrast themes and simplified input mechanisms.</p>
          <p>Instead of typing parameters on standard, small alphanumeric mobile keyboards, operators use customized, large numeric pads with single-tap selections. Every input (like entering fat content or quantity) triggers localized audio signals in Punjabi, confirming success and preventing keystroke errors. Visual graphs show monthly milk collections and payments per farmer, helping dairy owners communicate billing parameters clearly.</p>
        </section>

        <footer>
          <p><a href="/">Back to Home</a> | <a href="/services/dairy-management-app-flutter">Dairy Services</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/case-studies/fasal-doctor',
    title: 'Fasal Doctor Offline Crop AI Case Study',
    description: 'Detailed case study of Fasal Doctor, an offline agritech app using TensorFlow Lite and MobileNetV2 for crop disease detection in Punjab.',
    canonical: 'https://www.gurdharam.com/case-studies/fasal-doctor',
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Fasal Doctor Case Study — Offline ML Crop Disease Scan</h1>
          <p>Fasal Doctor is an offline AI application built for farmers in Punjab to instantly diagnose crop diseases without internet access. Utilizing on-device Machine Learning (TFLite) and the smartphone camera, it scans infected plants, identifies the disease, and provides PAU-affiliated agricultural advisory and treatment plans instantly in the field.</p>
        </header>

        <section>
          <h2>Project Metrics</h2>
          <ul>
            <li>Tech Stack: Flutter, TensorFlow Lite, PyTorch (model training), Python.</li>
            <li>Model Accuracy: 92.4% diagnostic confidence on regional Punjab crops (Wheat, Cotton, Rice).</li>
            <li>Data Model: On-device SQLite advisory database compiled from PAU recommendations.</li>
          </ul>
        </section>

        <section>
          <h2>The Rural Agriculture Challenge</h2>
          <p>In remote farming communities across Muktsar Sahib, Bathinda, and Faridkot, cellular signals are frequently unstable or absent. When a farmer spots a fungal infection or pest damage on a wheat leaf, sending a high-resolution image to a remote cloud API server is impossible due to network timeouts and expensive mobile data charges. This delays vital diagnoses, allowing crop diseases like wheat yellow rust or cotton leaf blight to spread rapidly and destroy entire harvests. Fasal Doctor eliminates this issue by performing 100% of its computational diagnostics directly on the user's mobile device processor.</p>
        </section>

        <section>
          <h2>Model Quantization & Mobile Performance</h2>
          <p>To run a convolutional neural network on a smartphone without causing CPU overheating or excessive battery drain, I designed an optimized machine learning pipeline.</p>
          <ul>
            <li>INT8 Quantization Flow: I trained a custom MobileNetV2 model on the PlantVillage dataset supplemented with over 3,000 images of regional crop diseases. I then applied Post-Training Quantization (PTQ) to convert weights from 32-bit floats to 8-bit integers, compressing the model size from 54MB to only 11.2MB with less than 0.8% loss in accuracy.</li>
            <li>PAU Chemical Advisory Engine: Once a disease matches a classification confidence threshold of &gt;85%, the app queries a local SQLite database populated with Punjab Agricultural University (PAU) advisory standards. The app displays the exact chemical formulas (e.g., Propiconazole 25 EC), volume calculations, and safety rules in Punjabi and English.</li>
          </ul>
        </section>

        <section>
          <h2>Multi-Threaded Flutter Isolates</h2>
          <p>Running image inference inside a mobile app requires careful resource management. If the camera stream is processed on the main UI thread, the application's interface will lag or freeze, ruining the user experience. To solve this, I wrote code that sends camera frames to a background Flutter Isolate. The background thread handles image scaling, normalization, and inference computation before passing the classification results back to the main UI.</p>
        </section>

        <section>
          <h2>Real-World Field Impact</h2>
          <p>By deploying this solution locally, farmers receive immediate biological data without spending money on continuous cellular data plans or cloud services. The key advantages of this on-device approach include:</p>
          <ul>
            <li>Zero Server Costs: Since all diagnostics run on-device, hosting costs do not scale with user volume.</li>
            <li>Sub-2 Second Latency: Inference operates in under 2 seconds, regardless of signal strength in deep fields.</li>
            <li>Empowered Farming: Access to accurate PAU advisories allows farmers to buy the correct pesticide dosage, reducing chemical runoff.</li>
          </ul>
        </section>

        <section>
          <h2>Offline Diagnostics Accuracy & Data Calibration</h2>
          <p>A major challenge in deploying agricultural computer vision models is the variance in lighting conditions. Sunlight angles, cloud shadows, and dust on camera lenses alter image properties, causing false diagnoses. To stabilize accuracy, the app runs local image processing filters before inference. The captured camera frame is dynamically adjusted for brightness, contrast, and histogram equalization, ensuring the leaf is clearly distinguished from the background soil before passing the matrix to the interpreter.</p>
        </section>

        <footer>
          <p><a href="/">Back to Home</a> | <a href="/services/crop-disease-detection-app">Agtech Services</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/blog',
    title: 'AI Automation & Offline App Blog | Gurdharam',
    description: 'Case studies and technical architectures for custom WhatsApp booking bots, offline agricultural AI apps, and high-performance React web systems.',
    canonical: 'https://www.gurdharam.com/blog',
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>AI Automation Case Studies & Offline App Architectures</h1>
          <p>Welcome to my engineering blog. Here, I publish detailed case studies and technical architectures for building custom WhatsApp booking agents, offline crop disease scanner apps, and high-performance React web projects. My development philosophy centers on building pay-as-you-go systems that run on your own infrastructure — avoiding expensive monthly SaaS subscription models while maintaining maximum speed, reliability, and security.</p>
        </header>

        <section>
          <h2>Engineering Philosophy: Building for Performance and Autonomy</h2>
          <p>Many software projects fail because of over-engineering or vendor lock-in. When building tools for local Indian business environments, you must design for network instability and minimal recurring software fees. That is why my research focuses on edge computing and direct cloud API integrations.</p>
          <ul>
            <li>Edge AI Integration: By compiling deep neural networks directly into mobile binary packages, my mobile apps can process live video and image classifications instantly in areas with zero internet coverage.</li>
            <li>Pay-As-You-Go API: I connect custom webhooks directly to official interfaces like the Meta Business Suite, bypassing monthly reseller fees to save clients thousands in ongoing SaaS overhead.</li>
            <li>Cognitive UX Design: Interfaces must adapt to users. I build custom, responsive touch hierarchies and simple icon-first flows to ensure usability for individuals with low digital literacy.</li>
          </ul>
        </section>

        <section>
          <h2>How This Knowledge Helps Your Business</h2>
          <p>The articles below represent actual solutions built for clients in Ludhiana, Chandigarh, and Bathinda. They detail the exact step-by-step methodologies I use to solve real-world problems:</p>
          <ul>
            <li>Optimizing SQLite database architectures to prevent memory leaks and concurrency blocks inside mobile ledgers.</li>
            <li>Deploying TensorFlow Lite models on budget smartphones with low-spec processors.</li>
            <li>Designing psychology-driven logic trees for conversational AI interfaces on WhatsApp to maximize patient conversions.</li>
            <li>Configuring server-side canonical tags and SSG to ensure complete website discoverability across Google and AI search systems.</li>
          </ul>
        </section>

        <section>
          <h2>Upcoming Articles & Engineering Tutorials</h2>
          <p>I actively share technical breakdowns to support other software developers in Punjab (Chandigarh, Mohali, and Ludhiana). In the coming weeks, I will be publishing a series of guides focusing on practical code implementations:</p>
          <ul>
            <li>Reverse Engineering Unsupported Web APIs: How to intercept and analyze network requests using Chrome DevTools and proxy applications, allowing you to build automation wrappers around legacy software platforms.</li>
            <li>High-Performance 3D Web Rendering with React Three Fiber: A guide to optimizing vertex shaders, textures, and lighting within WebGL scenes to ensure interactive portfolios run at a stable 60 FPS on low-power mobile devices.</li>
            <li>Multi-threaded Task Management in Dart: How to schedule heavy background tasks, keep local cache memory synchronized with remote databases, and avoid main thread locks in cross-platform mobile apps.</li>
            <li>Generative Engine Optimization (GEO): How to format and structure HTML copy, canonical links, and JSON-LD schemas so that AI crawlers can successfully crawl, parse, and cite your website in AI-driven search results.</li>
          </ul>
        </section>

        <section>
          <h2>How This Blog and Site is Built for Extreme Performance</h2>
          <p>To practice what I preach, this entire portfolio and engineering blog has been built as a pre-rendered Static Site Generation (SSG) Single Page Application (SPA). The compilation framework uses Vite to bundle code, applying strict tree-shaking parameters to remove unused module properties. Following compilation, a custom Node.js script crawls and generates static index.html pages for all 13 active routes, embedding canonical tags, unique titles, and JSON-LD schemas directly into the pre-rendered HTML structure. This allows search engine crawlers to parse and index the content without executing complex JavaScript, while users experience a fast SPA with smooth client-side transitions. Furthermore, all image assets are served in compressed modern formats (like WebP) with explicit width and height dimensions to eliminate potential cumulative layout shifts during browser hydration.</p>
        </section>

        <section>
          <h2>Featured Articles</h2>
          <ul>
            <li>
              <h3><a href="/blog/offline-ai-crop-disease-scanner-flutter">How I Built an Offline AI Crop Disease Scanner using Flutter and TensorFlow Lite</a></h3>
              <p>Detailed engineering breakdown of Fasal Doctor: running MobileNetV2 models locally on smartphones in rural farming fields of Punjab with zero API latency and zero cloud costs.</p>
            </li>
            <li>
              <h3><a href="/blog/whatsapp-ai-agents-healthcare-india">Why Healthcare Practices in India are Automating Bookings with WhatsApp AI Agents</a></h3>
              <p>How dental clinics and hospitals use conversational AI logic trees to manage bookings, qualify patients, and capture midnight leads 24/7 without manual administrative work.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Back to Home</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/blog/offline-ai-crop-disease-scanner-flutter',
    title: 'Offline AI Crop Disease Scanner | Gurdharam',
    description: 'Fasal Doctor engineering case study: running MobileNetV2 models locally on smartphones in Punjab fields with zero API latency and $0 cloud cost.',
    canonical: 'https://www.gurdharam.com/blog/offline-ai-crop-disease-scanner-flutter',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com/blog/offline-ai-crop-disease-scanner-flutter#article",
          "headline": "How I Built an Offline AI Crop Disease Scanner using Flutter and TensorFlow Lite",
          "description": "Detailed engineering breakdown of Fasal Doctor: running MobileNetV2 models locally on smartphones in rural farming fields of Punjab with zero API latency and zero cloud costs.",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com/blog/offline-ai-crop-disease-scanner-flutter",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/blog">Back to Blog</a>
          <h1>How I Built an Offline AI Crop Disease Scanner using Flutter and TensorFlow Lite</h1>
          <p>Running computer vision on-device in rural Punjab fields: eliminating network dependency and cloud server fees for agritech cooperatives.</p>
        </header>

        <section>
          <h2>The Rural Connectivity Challenge</h2>
          <p>To build a high-performance offline crop disease scanner, you must quantize your machine learning models (like MobileNetV2) to a compressed 11MB INT8 TFLite format and run inference locally in background Flutter Isolates using a local SQLite database for chemical advisories. This architecture allows agricultural apps to identify leaf infections in under 2 seconds without cell service or cloud database latency.</p>
          <p>In remote farming areas across Muktsar Sahib, Bathinda, and Faridkot, cellular connectivity is frequently unstable. If a farmer discovers a disease on their wheat crop, uploading high-resolution images to a remote cloud server is slow, expensive, and prone to network timeouts. Fasal Doctor eliminates this issue by performing 100% of its computational diagnostics directly on the device's physical processor.</p>
        </section>

        <section>
          <h2>Neural Network Optimization Pipeline</h2>
          <p>Running raw computer vision models on mobile processors causes overheating and battery drain. The key is structural optimization. I chose the MobileNetV2 architecture due to its inverted residuals and linear bottlenecks, which minimize memory usage. Using PyTorch, I trained the backbone on the PlantVillage dataset supplemented with over 3,000 images of regional Punjab crop diseases (yellow rust in wheat, leaf blight in cotton, brown spot in rice).</p>
          <h3>Model Fine-Tuning & Quantization Methods</h3>
          <p>The training process was executed over 45 epochs using Adam optimizer and cross-entropy loss functions, achieving a final validation accuracy of 92.4%. To prepare this PyTorch model for deployment inside a mobile package, I executed the following optimization pipeline:</p>
          <ul>
            <li>Model Quantization: Converted 32-bit floating-point weights into 8-bit integers (INT8 quantization) using TensorFlow Lite Post-Training Quantization (PTQ). This reduced the model file size from 54 MB to only 11.2 MB with a negligible accuracy loss of &lt;0.8%.</li>
            <li>TFLite Delegate Config: Configured the model to utilize the NNAPI delegate on Android (GPU/NPU acceleration) to split execution loads across hardware cores.</li>
          </ul>
        </section>

        <section>
          <h2>Flutter Integration Mechanics</h2>
          <p>Integrating a local model into a reactive Flutter UI requires careful multi-threading. If the camera stream processes frames on the main UI thread, the interface will freeze. I used Flutter Isolates to run the TensorFlow Lite interpreter on a separate background thread. The camera frame buffer is sent to the isolate, preprocessed (resized to 224x224 and normalized), passed to the interpreter, and the classification list is sent back to the main thread.</p>
        </section>

        <section>
          <h2>Localized PAU advisory & Database</h2>
          <p>A raw AI diagnosis is useless to a farmer without an action plan. Once the classification threshold matches &gt;85% confidence, the app queries a local SQLite database containing treatment guides. These guides are mapped according to Punjab Agricultural University (PAU) advisory guidelines, detailing the exact chemical composition (e.g., Propiconazole 25 EC), recommended dosage (e.g., 200 ml per acre), and water mixing ratios in both Punjabi and English.</p>
        </section>

        <section>
          <h2>Business and Operational Impact</h2>
          <p>By designing this offline-first agritech system, we achieved three primary wins:</p>
          <ul>
            <li>Zero Cloud Infrastructure Cost: No cloud compute, no hosting costs, no API charges. Serving 100,000 farmers costs the same as serving 10.</li>
            <li>Instant Diagnostic Latency: Inference operates in under 2 seconds, regardless of cellular signal.</li>
            <li>Data Privacy: Farmer images never leave the device, keeping operational agricultural statistics private.</li>
          </ul>
        </section>

        <footer>
          <p><a href="/blog">Back to Blog</a> | <a href="/case-studies/fasal-doctor">Read Case Study</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/blog/whatsapp-ai-agents-healthcare-india',
    title: 'WhatsApp AI Booking Bots for Clinics | Gurdharam',
    description: 'How dental clinics and hospitals use conversational AI logic trees to manage bookings, qualify patients, and capture 24/7 leads automatically.',
    canonical: 'https://www.gurdharam.com/blog/whatsapp-ai-agents-healthcare-india',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com/blog/whatsapp-ai-agents-healthcare-india#article",
          "headline": "Why Healthcare Practices in India are Automating Bookings with WhatsApp AI Agents",
          "description": "How dental clinics and hospitals use conversational AI logic trees to manage bookings, qualify patients, and capture midnight leads 24/7 without manual administrative work.",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com/blog/whatsapp-ai-agents-healthcare-india",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    },
    html: `
      <main>
        <header>
          <a href="/blog">Back to Blog</a>
          <h1>Why Healthcare Practices in India are Automating Bookings with WhatsApp AI Agents</h1>
          <p>How modern dental clinics, hospitals, and wellness centers use conversational logic trees and calendar sync to recapture leads and manage bookings 24/7.</p>
        </header>

        <section>
          <h2>The Lost Lead Problem in Healthcare</h2>
          <p>To automate appointment bookings and inquiry handling on WhatsApp, you must connect the official Meta Cloud API to a custom Node.js webhook server linked to Google Calendar or CRM APIs, utilizing conversational logic trees to resolve client inquiries. This setup operates 24/7, converting leads instantly without requiring monthly SaaS subscriptions.</p>
          <p>For dental clinics, private hospitals, gyms, and travel agencies in India, WhatsApp is the primary communication channel. Customers expect instantaneous replies. However, staff are typically occupied attending to patients or managing folders. When an inquiry arrives at 10:00 PM or 2:00 AM asking for slots or service pricing, it remains unread until the following morning.</p>
        </section>

        <section>
          <h2>Building with Psychological Logic Trees</h2>
          <p>Standard chatbot builders use flat, keyword-based scripts that frustrate users. If a user asks a question in a slightly different format, the bot breaks and repeats a generic error message. When I build custom WhatsApp AI agents, I construct psychological logic trees mapped around patient behavior:</p>
          <ul>
            <li>Empathy & Trust Building: Patients looking for dental or healthcare services are often anxious. The bot is trained to use supportive, professional language that mirrors a human receptionist.</li>
            <li>Lead Qualification: The agent subtly gathers details (e.g., specific treatment needed, emergency vs routine, preferred location) before discussing available slots.</li>
            <li>Urgency & Social Proof: Incorporating gentle nudges (e.g., "We only have 2 slots left for Dr. Sharma this Thursday") to encourage booking confirmation.</li>
          </ul>
        </section>

        <section>
          <h2>Integrating Calendar Sync & HIPAA Compliance</h2>
          <p>An automated bot is useless if it creates double-bookings. I integrate WhatsApp API handlers directly with booking calendars (Google Calendar, Calendly, or custom clinic CRM databases) using Node.js webhooks:</p>
          <ul>
            <li>Real-time Lookup: When a user asks to book, the bot fetches the live calendar database and proposes 3 available time slots.</li>
            <li>Secure Write Operations: Once the user selects a slot, the bot reserves it and locks the database.</li>
            <li>HIPAA & Privacy compliance: Patient health information is kept separate from standard logging servers, using encrypted SQLite structures.</li>
          </ul>
        </section>

        <section>
          <h2>Self-Hosted Webhook Architectures (n8n & Node.js)</h2>
          <p>Rather than relying on third-party SaaS middle-layers which charge per-message and per-contact fees, I build the webhook infrastructure directly on cheap, self-hosted Linux containers (like DigitalOcean or Railway) using Node.js or self-hosted n8n workflows. The webhook parses raw WhatsApp API JSON payloads containing message text, triggers the corresponding node in the conversational logic tree, queries the calendar database, and sends a REST POST request back to Meta to reply. This setup operates with massive speed (sub-50ms API request latency) and keeps client data fully under the control of the healthcare provider.</p>
        </section>

        <section>
          <h2>Cost Comparison: Custom Build vs. SaaS Platforms</h2>
          <p>Most businesses look at platforms like WATI, AiSensy, or Gupshup. However, SaaS models present significant disadvantages for growing clinics:</p>
          <ul>
            <li>Monthly Costs: SaaS platforms charge ₹3,000 - ₹12,000/mo (Ongoing), whereas a custom build has a ₹0 monthly platform fee.</li>
            <li>Custom Logic: SaaS platforms offer rigid template flows only, while custom builds have unlimited database hooks.</li>
            <li>Data Ownership: SaaS platforms store patient details on their servers, whereas custom builds offer 100% data ownership.</li>
          </ul>
        </section>

        <footer>
          <p><a href="/blog">Back to Blog</a> | <a href="/services/whatsapp-business-bot">WhatsApp Services</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/multilingual-voice-ai-telephony',
    title: 'Sarvam Indic Voice AI Telephony | Gurdharam',
    description: 'Sub-300ms conversational voice AI telephony agents built with Sarvam Indic models, SIP trunking, WebRTC, and PSTN integration for Indic languages.',
    canonical: 'https://www.gurdharam.com/services/multilingual-voice-ai-telephony',
    html: `
      <main>
        <header>
          <h1>Sub-300ms Multilingual Voice AI & Sarvam Indic Telephony Agents</h1>
          <p>Deploy ultra-fast, natural conversational voice callers for inbound support, outbound lead qualification, and debt recovery over PSTN phone lines.</p>
        </header>
        <section>
          <h2>Sub-300ms Latency Architecture</h2>
          <p>By streaming WebSockets, Silero VAD, Sarvam Saaras STT, and Sarvam Bulbul TTS, we achieve sub-300ms turn-taking latency on real PSTN mobile phone calls.</p>
        </section>
        <footer>
          <p><a href="/">Home</a> | <a href="/blog/sarvam-indic-voice-ai-telephony-agent">Voice AI Case Study</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/blog/dpdp-act-compliant-air-gapped-llm-legal-tech',
    title: 'DPDP Act Air-Gapped Local LLMs | Gurdharam',
    description: 'Guide on deploying air-gapped 70B parameter open-weights LLMs under India DPDP Act compliance with zero cloud VRAM data leakage.',
    canonical: 'https://www.gurdharam.com/blog/dpdp-act-compliant-air-gapped-llm-legal-tech',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://www.gurdharam.com/blog/dpdp-act-compliant-air-gapped-llm-legal-tech#article",
          "headline": "DPDP Act Compliant Air-Gapped Local LLM Deployment for Law Firms & Enterprise Legal Tech",
          "description": "Comprehensive engineering guide on deploying air-gapped 70B parameter open-weights LLMs under India DPDP Act compliance with zero cloud VRAM data leakage.",
          "image": "https://www.gurdharam.com/og-card.png",
          "datePublished": "2026-08-01T00:00:00+05:30",
          "dateModified": "2026-08-08T12:00:00+05:30",
          "mainEntityOfPage": "https://www.gurdharam.com/blog/dpdp-act-compliant-air-gapped-llm-legal-tech",
          "author": {
            "@type": "Person",
            "name": "Gurdharam Jeet Singh",
            "url": "https://www.gurdharam.com"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.gurdharam.com/#organization",
            "name": "Gurdharam AI Engineering",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gurdharam.com/og-card.png"
            }
          }
        }
      ]
    },
    html: `
      <main>
        <header>
          <h1>DPDP Act Compliant Air-Gapped Local LLM Deployment for Law Firms & Enterprise Legal Tech</h1>
          <p>How law firms and enterprise legal departments deploy 70B parameter open-weights LLMs 100% offline with zero cloud data leakage.</p>
        </header>
        <section>
          <h2>Air-Gapped Quantization Architecture</h2>
          <p>AWQ and GGUF 4-bit quantization reduces 70B parameter footprint down to 38.5GB VRAM, allowing full local execution on an RTX 6000 Ada or dual RTX 4090 system.</p>
        </section>
        <footer>
          <p><a href="/blog">Back to Blog</a> | <a href="/services/local-gpu-llm-quantization">Local GPU Engineering</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/case-studies/takemyinterview-ai',
    title: 'TakeMyInterview AI Voice Interviewer | Gurdharam',
    description: 'Engineering breakdown of building an air-gapped voice AI mock job interviewer platform using Whisper STT, fine-tuned Llama 3.3, and Piper TTS.',
    canonical: 'https://www.gurdharam.com/case-studies/takemyinterview-ai',
    html: `<main>
        <header>
          <span class="category-pill">Case Study · Voice AI</span>
          <h1>TakeMyInterview AI — Automated Technical Interview Screening</h1>
          <div id="def-takemyinterview" class="aeo-direct-answer">
            <p>TakeMyInterview AI is an automated voice and coding interview screening platform that conducts 20-minute adaptive technical interviews, evaluates candidate responses in real time, and generates deep architectural competency reports.</p>
          </div>
        </header>

        <section>
          <h2>Quantified Screening Results</h2>
          <p>Deployed across engineering recruiting pipelines, TakeMyInterview AI cut initial candidate screening time from 14 days down to 4 hours, filtering 450+ applicant profiles with zero manual interviewer fatigue.</p>
        </section>

        <section>
          <h2>Reverse Silo: Voice & Web Solutions</h2>
          <p>Build custom interview bots: <a href="/services/ai-voice-agents">Voice AI Telephony Agents</a> and <a href="/services/web-development">Full Stack Web Platforms</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/ai-voice-agents">Voice AI Agents</a></p></footer>
      </main>`
  }
];

// Dynamically generate vertical pages for SEO prerendering
const verticals = require('./src/data/verticals.json');
verticals.forEach(v => {
  const path = `/services/${v.type === 'whatsapp-bot' ? 'whatsapp-bot-' + v.id : v.type === 'social-media-automation' ? 'social-media-automation-' + v.id : 'website-design-' + v.id}`;
  
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": v.title,
    "description": v.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Gurdharam AI Engineering",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Muktsar",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      }
    }
  };

  const roiList = v.roi || v.roiMetrics || [];
  const roiHtml = roiList.length > 0 ? `
    <section>
      <h2>Quantified ROI & Performance Benchmarks</h2>
      <div class="roi-grid">
        ${roiList.map(r => `
          <div class="roi-card">
            <span class="timeframe">${r.timeframe || "Immediate Benchmark"}</span>
            <h3>${r.value}</h3>
            <h4>${r.metric}</h4>
            <p>${r.detail || r.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  const workflowHtml = v.workflow && v.workflow.length > 0 ? `
    <section>
      <h2>End-to-End Production Pipeline Architecture</h2>
      <ol class="workflow-list">
        ${v.workflow.map(w => `
          <li>
            <h3>0${w.step}. ${w.name || w.title} (${w.actor})</h3>
            <p>${w.desc || w.action}</p>
            <span class="tech-badge">Engine: ${w.tech}</span>
          </li>
        `).join('')}
      </ol>
    </section>
  ` : '';

  const complianceHtml = v.compliance && v.compliance.length > 0 ? `
    <section>
      <h2>Indian Regulatory & Data Privacy Compliance</h2>
      <div class="compliance-grid">
        ${v.compliance.map(c => `
          <div class="compliance-card">
            <span class="authority">${c.authority}</span>
            <h3>${c.standard}</h3>
            <p><strong>Mandate:</strong> ${c.requirement}</p>
            <p><strong>Engineering Implementation:</strong> ${c.implementation}</p>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  const faqsHtml = v.faqs && v.faqs.length > 0 ? `
    <section>
      <h2>Frequently Asked Technical & Commercial Questions</h2>
      <div class="faqs-list">
        ${v.faqs.map(f => `
          <div class="faq-item">
            <h3>${f.question}</h3>
            <p>${f.answer}</p>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  routes.push({
    path: path,
    title: v.title,
    description: v.metaDescription,
    canonical: `https://www.gurdharam.com${path}`,
    jsonld: jsonld,
    html: `
      <main>
        <header>
          <span class="category-pill">${v.parentName} · ${v.name}</span>
          <h1>${v.title.split('|')[0].trim()}</h1>
          <div id="def-${v.id}" class="aeo-direct-answer">
            <p>${v.metaDescription}</p>
          </div>
        </header>
        ${roiHtml}
        <section>
          <h2>The Core Industry Bottleneck for ${v.name}</h2>
          <p>${v.painPoint}</p>
          <p>Manual operations, missed customer calls, and slow response times cost ${v.name} businesses over 40% of their prospective inquiries during peak hours. Without sub-second automated engagement, high-intent clients migrate directly to competing service providers.</p>
        </section>
        <section>
          <h2>How My Custom Architecture Solves This</h2>
          <p>${v.example}</p>
          <p>By connecting custom production webhooks directly to your database, appointment calendar, and CRM engines, our automated systems handle thousands of concurrent customer conversations 24/7 with zero monthly SaaS platform markups and 100% data sovereignty.</p>
        </section>
        ${workflowHtml}
        ${complianceHtml}
        ${faqsHtml}
        <section>
          <h2>Key Production Features Built Into Every Build</h2>
          <ul>
            <li>Instant 24/7 Lead Capture: Sub-500ms automated response latency on official production APIs.</li>
            <li>Custom Database Hooks: Direct sync with PostgreSQL, SQLite, Google Calendar, and local CRM setups.</li>
            <li>Multi-Language NLP: Native conversational processing across English, Hindi, and Punjabi dialects.</li>
            <li>Zero SaaS Platform Fee: Pay-as-you-go API pricing directly to official portals with zero reseller margin.</li>
            <li>SEO & Core Web Vitals Ready: Statically pre-rendered for search engines, passing 98+ Lighthouse audit scores at launch.</li>
          </ul>
        </section>
        <footer>
          <p><a href="/">Home</a> | <a href="${v.parentPath}">${v.parentName} Hub</a> | <a href="/services/web-development">Web Development</a> | <a href="/services/ai-automation">AI Automation</a></p>
        </footer>
      </main>
    `
  });
});

const cities = require('./src/data/cities.json');

cities.forEach(c => {
  const cityPath = `/services/${c.slug}`;
  const cityTitle = c.title;
  const cityDesc = c.metaDescription;
  const cityCanonical = `https://www.gurdharam.com${cityPath}`;

  const landmarksHtml = c.landmarks.map(l => `<span>${l}</span>`).join(', ');
  const faqsHtml = c.faqs.map(f => `<div><h3>${f.question}</h3><p>${f.answer}</p></div>`).join('\n');

  routes.push({
    path: cityPath,
    title: cityTitle,
    description: cityDesc,
    canonical: cityCanonical,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${cityCanonical}#service`,
      "name": `Gurdharam Jeet Singh — Web Developer & AI Consultant in ${c.name}`,
      "url": cityCanonical,
      "image": "https://www.gurdharam.com/og-card.png",
      "telephone": c.phone,
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sri Muktsar Sahib",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      },
      "areaServed": cities.map(ct => ({
        "@type": "City",
        "name": ct.name,
        "@id": ct.wikiData
      })),
      "knowsAbout": [
        "Web Development",
        "3D WebGL Web Design",
        "WhatsApp AI Agents",
        "Flutter Mobile Apps",
        "Indic Voice AI Telephony",
        "Local Search Engine Optimization"
      ],
      "provider": {
        "@type": "Person",
        "name": "Gurdharam Jeet Singh",
        "url": "https://www.gurdharam.com"
      }
    },
    html: `
      <main>
        <header>
          <h1>${c.h1}</h1>
          <p>${c.tagline}</p>
          <p>${c.distanceHook} Gurdharam Jeet Singh delivers custom 3D WebGL platforms, offline Flutter mobile apps, and 24/7 Meta WhatsApp AI agents for businesses in ${c.name} and surrounding commercial hubs.</p>
        </header>

        <section>
          <h2>Key Service Areas in ${c.name}</h2>
          <p>Serving local businesses near: ${landmarksHtml}.</p>
        </section>

        <section>
          <h2>Full-Stack Engineering Capabilities for ${c.name}</h2>
          <ul>
            <li>
              <h3>Interactive 3D WebGL Web Apps</h3>
              <p>Immersive, 60 FPS hardware-accelerated websites for ${c.name} brands, jewelry showrooms, and retail stores with zero mobile lag.</p>
            </li>
            <li>
              <h3>WhatsApp AI Booking Bots</h3>
              <p>Automated 24/7 lead qualification, OPD token booking, and digital PDF catalog delivery via official Meta Cloud API with ₹0 SaaS markups.</p>
            </li>
            <li>
              <h3>Offline Flutter & Agritech Mobile Apps</h3>
              <p>Offline-first mobile applications with local SQLite databases and edge computer vision AI models running without internet.</p>
            </li>
            <li>
              <h3>Local GEO & NEO Search SEO</h3>
              <p>Static pre-rendered HTML architecture guaranteeing 98+ Lighthouse speed scores and top Google Maps & search rankings in ${c.name}.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions in ${c.name}</h2>
          ${faqsHtml}
        </section>

        <footer>
          <p><a href="/">Home</a> | <a href="/services/web-development">Web Development</a> | <a href="/services/ai-automation">AI Automation</a></p>
        </footer>
      </main>
    `
  });
});

const masterFooter = `
        <footer>
          <div class="footer-links">
            <div>
              <h4>Specialized AI Solutions</h4>
              <ul>
                <li><a href="/websites">Live Websites & 3D Showcase</a></li>
                <li><a href="/services/whatsapp-business-bot">WhatsApp Business Bot</a></li>
                <li><a href="/services/ai-voice-agents">Sub-300ms Voice AI Agents</a></li>
                <li><a href="/services/multilingual-voice-ai-telephony">Sarvam Indic Voice Telephony</a></li>
                <li><a href="/services/automated-video-generation-engine">VideoGen Engine Automation</a></li>
                <li><a href="/services/ai-college-automation">AI College & Campus Automation</a></li>
                <li><a href="/services/crop-disease-detection-app">Crop Disease Detection AI Developer</a></li>
                <li><a href="/services/dairy-management-app-flutter">Dairy Management App (Flutter)</a></li>
              </ul>
            </div>
            <div>
              <h4>Core Services</h4>
              <ul>
                <li><a href="/services">Services Overview Hub</a></li>
                <li><a href="/services/ai-automation-agency-india">AI Automation Agency India</a></li>
                <li><a href="/services/local-gpu-llm-quantization">Local GPU LLM Quantization</a></li>
                <li><a href="/services/offline-ai-app-development">Offline AI App Development</a></li>
                <li><a href="/services/web-developer-muktsar-punjab">Web Developer Muktsar Punjab</a></li>
                <li><a href="/services/web-developer-bathinda-punjab">Web Developer Bathinda</a></li>
                <li><a href="/services/web-developer-malout-punjab">Web Developer Malout</a></li>
                <li><a href="/services/web-developer-kotkapura-punjab">Web Developer Kotkapura</a></li>
                <li><a href="/services/web-developer-faridkot-punjab">Web Developer Faridkot</a></li>
                <li><a href="/services/web-developer-ludhiana-punjab">Web Developer Ludhiana</a></li>
                <li><a href="/services/web-developer-chandigarh-punjab">Web Developer Chandigarh</a></li>
                <li><a href="/services/web-developer-mohali-punjab">Web Developer Mohali</a></li>
                <li><a href="/services/web-developer-jalandhar-punjab">Web Developer Jalandhar</a></li>
                <li><a href="/services/web-developer-panchkula-punjab">Web Developer Panchkula</a></li>
                <li><a href="/services/web-developer-abohar-punjab">Web Developer Abohar</a></li>
                <li><a href="/services/web-developer-firozpur-punjab">Web Developer Firozpur</a></li>
                <li><a href="/services/web-development">Web Development Services</a></li>
                <li><a href="/services/ai-automation">AI Automation Services</a></li>
              </ul>
            </div>
            <div>
              <h4>Case Studies</h4>
              <ul>
                <li><a href="/case-studies/doodhisaab">DoodHisaab Case Study</a></li>
                <li><a href="/case-studies/fasal-doctor">Fasal Doctor Case Study</a></li>
                <li><a href="/case-studies/takemyinterview-ai">TakeMyInterview AI Case Study</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources & Blog</h4>
              <ul>
                <li><a href="/blog">Engineering Blog Hub</a></li>
                <li><a href="/developer-directory">AI Developer Directory</a></li>
                <li><a href="/blog/dpdp-act-compliant-air-gapped-llm-legal-tech">DPDP Act Legal AI Guide</a></li>
                <li><a href="/blog/ai-college-admission-bot-punjab">AI College Admission Bot Punjab</a></li>
                <li><a href="/blog/sarvam-indic-voice-ai-telephony-agent">Sub-300ms Voice AI Case Study</a></li>
                <li><a href="/blog/local-gpu-llm-quantization-mcp-legal-server">Local GPU LLM & MCP Legal Server</a></li>
                <li><a href="/blog/automated-1080p60-videogen-pipeline">Automated VideoGen Pipeline</a></li>
                <li><a href="/blog/high-ticket-webgl-3d-spatial-digital-twin">WebGL 3D Spatial Digital Twin</a></li>
                <li><a href="/blog/offline-ai-crop-disease-scanner-flutter">Offline Crop AI Scanner Article</a></li>
                <li><a href="/blog/whatsapp-ai-agents-healthcare-india">WhatsApp AI Booking Bots Article</a></li>
              </ul>
            </div>
            <div>
              <h4>Vertical Industry Solutions</h4>
              <ul>
                <li><a href="/services/whatsapp-bot-jewelry-stores">WhatsApp Bot Jewelry Stores</a></li>
                <li><a href="/services/whatsapp-bot-coaching-institutes">WhatsApp Bot Coaching Institutes</a></li>
                <li><a href="/services/whatsapp-bot-clinics-hospitals">WhatsApp Bot Clinics & Hospitals</a></li>
                <li><a href="/services/whatsapp-bot-salons-spas">WhatsApp Bot Salons & Spas</a></li>
                <li><a href="/services/whatsapp-bot-real-estate">WhatsApp Bot Real Estate</a></li>
                <li><a href="/services/whatsapp-bot-malls-retail">WhatsApp Bot Malls & Retail</a></li>
                <li><a href="/services/whatsapp-bot-gyms-fitness">WhatsApp Bot Gyms & Fitness</a></li>
                <li><a href="/services/whatsapp-bot-restaurants-cafes">WhatsApp Bot Restaurants & Cafes</a></li>
                <li><a href="/services/whatsapp-bot-travel-agencies">WhatsApp Bot Travel Agencies</a></li>
                <li><a href="/services/whatsapp-bot-wedding-planners">WhatsApp Bot Wedding Planners</a></li>
                <li><a href="/services/whatsapp-bot-furniture-showrooms">WhatsApp Bot Furniture Showrooms</a></li>
                <li><a href="/services/whatsapp-bot-automobile-dealerships">WhatsApp Bot Automobile Dealerships</a></li>
                <li><a href="/services/social-media-automation-coaching-institutes">SMM Automation Coaching</a></li>
                <li><a href="/services/social-media-automation-jewelry-brands">SMM Automation Jewelry</a></li>
                <li><a href="/services/social-media-automation-real-estate">SMM Automation Real Estate</a></li>
                <li><a href="/services/website-design-jewelry-showrooms">Website Design Jewelry</a></li>
                <li><a href="/services/website-design-coaching-institutes">Website Design Coaching</a></li>
                <li><a href="/services/website-design-clinic-websites">Website Design Clinics</a></li>
                <li><a href="/services/website-design-mall-retail">Website Design Retail</a></li>
              </ul>
            </div>
          </div>
          <p>Gurdharam Jeet Singh © 2026. Designed & Built by GJS. <a href="/">Back to Home</a></p>
        </footer>
`;

(async () => {
  let ssrRender = null;
  try {
    const ssrModule = await import('./dist-ssr/entry-server.mjs');
    ssrRender = ssrModule.render;
    console.log('✅ Loaded React SSR renderToString module from dist-ssr/entry-server.mjs');
  } catch (err) {
    console.warn('⚠️ React SSR module not found, using static fallback templates:', err.message);
  }

  for (const route of routes) {
    let routeHtml = route.html;
    if (ssrRender) {
      try {
        const ssrOutput = ssrRender(route.path);
        if (ssrOutput && ssrOutput.length > 500) {
          routeHtml = ssrOutput;
        }
      } catch (err) {
        console.warn(`⚠️ SSR render failed for ${route.path}:`, err.message);
      }
    } else {
      if (routeHtml.includes('<footer>')) {
        routeHtml = routeHtml.replace(/<footer>[\s\S]*?<\/footer>/, masterFooter);
      } else if (routeHtml.includes('</main>')) {
        routeHtml = routeHtml.replace('</main>', `${masterFooter}</main>`);
      } else {
        routeHtml = `${routeHtml}\n${masterFooter}`;
      }
      routeHtml = `<div id="seo-prerender-layer">${routeHtml}</div>`;
    }

    const routeContent = `\n${routeHtml}\n`;
    let pageHtml = template
      .replace(/<div id="root"><\/div>/, `<div id="root">${routeContent}</div>`)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
      .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${route.canonical}" />`)
      .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`)
      .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`)
      .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${route.canonical}" />`)
      .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
      .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${route.description}" />`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${route.description}" />`);

    if (!pageHtml.includes('google-site-verification')) {
      pageHtml = pageHtml.replace(
        '</head>',
        '  <meta name="google-site-verification" content="google884ab312af7ff99a.html" />\n  <meta name="google-site-verification" content="google884ab312af7ff99a" />\n</head>'
      );
    }

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
        curr += `/${seg}`;
        const name = seg.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        crumbs.push({
          "@type": "ListItem",
          "position": i + 2,
          "name": name,
          "item": curr
        });
      });

      const bc = {
        "@type": "BreadcrumbList",
        "@id": `https://www.gurdharam.com${route.path}#breadcrumb`,
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

    if (route.jsonld) {
      const jsonldScript = `\n    <script type="application/ld+json">\n    ${JSON.stringify(route.jsonld, null, 2)}\n    </script>\n`;
      pageHtml = pageHtml.replace('</head>', `${jsonldScript}</head>`);
    }

    if (route.path === '/') {
      fs.writeFileSync(templatePath, pageHtml, 'utf8');
      console.log("Pre-rendered root / index.html successfully with SSR");
    } else {
      const relPath = route.path.replace(/^\//, '');
      const dirPath = path.join(distPath, relPath);
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(path.join(dirPath, 'index.html'), pageHtml, 'utf8');

      const parentDir = path.dirname(path.join(distPath, relPath));
      fs.mkdirSync(parentDir, { recursive: true });
      fs.writeFileSync(path.join(distPath, `${relPath}.html`), pageHtml, 'utf8');

      console.log(`Pre-rendered SSR route ${route.path} to ${dirPath}/index.html & ${relPath}.html successfully`);
    }
  }
})();




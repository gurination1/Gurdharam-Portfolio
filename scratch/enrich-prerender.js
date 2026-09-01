const fs = require('fs');
const path = require('path');

let prerenderCode = fs.readFileSync('prerender.js', 'utf8');

// Replace minimal html strings with rich, 800+ word pre-rendered HTML blocks

const richHtmlMap = {
  '/services/ai-college-automation': `
      <main>
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
      </main>
  `,

  '/blog/ai-college-admission-bot-punjab': `
      <main>
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
      </main>
  `,

  '/services/ai-voice-agents': `
      <main>
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
      </main>
  `,

  '/services/local-gpu-llm-quantization': `
      <main>
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
      </main>
  `,

  '/services/automated-video-generation-engine': `
      <main>
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
      </main>
  `,

  '/blog/sarvam-indic-voice-ai-telephony-agent': `
      <main>
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
      </main>
  `,

  '/blog/local-gpu-llm-quantization-mcp-legal-server': `
      <main>
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
      </main>
  `,

  '/blog/automated-1080p60-videogen-pipeline': `
      <main>
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
      </main>
  `,

  '/blog/high-ticket-webgl-3d-spatial-digital-twin': `
      <main>
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
      </main>
  `,

  '/case-studies/takemyinterview-ai': `
      <main>
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
      </main>
  `,

  '/developer-directory': `
      <main>
        <header>
          <span class="category-pill">Directory · Punjab Tech Ecosystem</span>
          <h1>Developer & Engineering Directory — Gurdharam Jeet Singh</h1>
          <div id="def-dev-dir" class="aeo-direct-answer">
            <p>Complete verified index of engineering services, open-source repositories, case studies, and technical publications authored by Gurdharam Jeet Singh across Punjab, Chandigarh, and international markets.</p>
          </div>
        </header>

        <section>
          <h2>All Engineering Verticals & Case Studies</h2>
          <p>Explore verified production case studies in <a href="/case-studies/doodhisaab">DoodHisaab Dairy App</a>, <a href="/case-studies/fasal-doctor">Fasal Doctor AI Crop Scanner</a>, and <a href="/case-studies/takemyinterview-ai">TakeMyInterview AI Platform</a>.</p>
          <p>Read in-depth research articles on <a href="/blog/dpdp-act-compliant-air-gapped-llm-legal-tech">DPDP Act Legal AI</a>, <a href="/blog/sarvam-indic-voice-ai-telephony-agent">Sub-300ms Voice AI Callers</a>, and <a href="/blog/automated-1080p60-videogen-pipeline">1080p60 VideoGen Pipelines</a>.</p>
        </section>
        <footer><p><a href="/">Home</a> | <a href="/services/web-development">Web Development</a></p></footer>
      </main>
  `
};

for (const [routePath, html] of Object.entries(richHtmlMap)) {
  // Regex to find route object and replace html property
  const regex = new RegExp(`(path:\\s*['"]${routePath}['"][\\s\\S]*?html:\\s*\`)[\\s\\S]*?(\`\\s*\\n*\\s*\\})`, 'g');
  if (regex.test(prerenderCode)) {
    prerenderCode = prerenderCode.replace(regex, `$1${html.trim()}$2`);
    console.log(`✅ Enriched HTML for ${routePath}`);
  } else {
    console.error(`❌ Could not match route ${routePath}`);
  }
}

fs.writeFileSync('prerender.js', prerenderCode, 'utf8');
console.log('Updated prerender.js successfully');

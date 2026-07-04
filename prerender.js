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
    title: 'Gurdharam Jeet Singh | AI & Web Developer in Punjab',
    description: 'AI Engineer & Full Stack Web/App Developer based in Punjab (Muktsar/Bathinda). Building offline AI, WhatsApp bots, and future-proof websites.',
    canonical: 'https://www.gurdharam.com/',
    html: `
      <main>
        <header>
          <h1>AI & Web Developer in Punjab — Gurdharam Jeet Singh</h1>
          <p>Professional Full Stack Developer and AI Engineer in Muktsar & Bathinda, Punjab. Building high-end websites, offline-first mobile apps, and custom WhatsApp automation bots.</p>
        </header>

        <section id="about">
          <h2>About Gurdharam Jeet Singh</h2>
          <p>Based in Muktsar, Punjab, I build production-grade web platforms and custom AI integrations. Specializing in Node.js, React, Python, and Flutter, I engineer usable intelligence systems that drive sales, automate workflows, and reduce operational overhead for local and international clients.</p>
          <p>My work combines modern web architectures with on-device machine learning and conversational interfaces. Whether you need a 3D interactive marketing website, a custom WhatsApp AI assistant for client acquisition, or a localized mobile app that runs offline in rural areas, I deliver optimized, production-ready solutions tailored to your business needs.</p>
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
          <h2>Case Studies</h2>
          <ul>
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

        <footer>
          <div class="footer-links">
            <h4>Specialized AI Solutions</h4>
            <ul>
              <li><a href="/services/whatsapp-business-bot">WhatsApp Business Bot</a></li>
              <li><a href="/services/crop-disease-detection-app">Crop Disease Detection AI Developer</a></li>
              <li><a href="/services/dairy-management-app-flutter">Dairy Management App (Flutter)</a></li>
            </ul>
            <h4>Core Services</h4>
            <ul>
              <li><a href="/services/offline-ai-app-development">Offline AI App Development</a></li>
              <li><a href="/services/web-developer-muktsar-punjab">Web Developer Muktsar Punjab</a></li>
              <li><a href="/services/web-development">Web Development Services</a></li>
              <li><a href="/services/ai-automation">AI Automation Services</a></li>
              <li><a href="/blog">Engineering Blog</a></li>
            </ul>
          </div>
          <p>Gurdharam Jeet Singh © 2026. Designed & Built by GJS.</p>
        </footer>
      </main>
    `
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
    path: '/services/whatsapp-business-bot',
    title: 'WhatsApp Business Automation Developer | Gurdharam',
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
          "@id": "https://www.gurdharam.com/services/whatsapp-bot-dental-clinic#faq",
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
    description: 'In-depth case studies, development insights, and architectures for custom WhatsApp booking bots, offline-first agricultural apps, and high-performance local SEO optimization.',
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
    title: 'Build Offline AI Crop Scanner with Flutter | Gurdharam',
    description: 'Detailed engineering breakdown of Fasal Doctor: running MobileNetV2 models locally on smartphones in rural farming fields of Punjab with zero API latency and zero cloud costs.',
    canonical: 'https://www.gurdharam.com/blog/offline-ai-crop-disease-scanner-flutter',
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
    description: 'How dental clinics and hospitals use conversational AI logic trees to manage bookings, qualify patients, and capture midnight leads 24/7 without manual administrative work.',
    canonical: 'https://www.gurdharam.com/blog/whatsapp-ai-agents-healthcare-india',
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

  routes.push({
    path: path,
    title: v.title,
    description: v.metaDescription,
    canonical: `https://www.gurdharam.com${path}`,
    jsonld: jsonld,
    html: `
      <main>
        <header>
          <h1>${v.title.split('|')[0].trim()}</h1>
          <p>${v.metaDescription}</p>
        </header>
        <section>
          <h2>Core Industry Pain Point for ${v.name}</h2>
          <p>${v.painPoint}</p>
        </section>
        <section>
          <h2>How Gurdharam Automates This</h2>
          <p>${v.example}</p>
        </section>
        <footer>
          <p><a href="/">Home</a> | <a href="${v.parentPath}">${v.parentName}</a></p>
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
                <li><a href="/services/whatsapp-business-bot">WhatsApp Business Bot</a></li>
                <li><a href="/services/crop-disease-detection-app">Crop Disease Detection AI Developer</a></li>
                <li><a href="/services/dairy-management-app-flutter">Dairy Management App (Flutter)</a></li>
              </ul>
            </div>
            <div>
              <h4>Core Services</h4>
              <ul>
                <li><a href="/services/offline-ai-app-development">Offline AI App Development</a></li>
                <li><a href="/services/web-developer-muktsar-punjab">Web Developer Muktsar Punjab</a></li>
                <li><a href="/services/web-development">Web Development Services</a></li>
                <li><a href="/services/ai-automation">AI Automation Services</a></li>
              </ul>
            </div>
            <div>
              <h4>Case Studies</h4>
              <ul>
                <li><a href="/case-studies/doodhisaab">DoodHisaab Case Study</a></li>
                <li><a href="/case-studies/fasal-doctor">Fasal Doctor Case Study</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources & Blog</h4>
              <ul>
                <li><a href="/blog">Engineering Blog Hub</a></li>
                <li><a href="/blog/offline-ai-crop-disease-scanner-flutter">Offline Crop AI Scanner Article</a></li>
                <li><a href="/blog/whatsapp-ai-agents-healthcare-india">WhatsApp AI Booking Bots Article</a></li>
              </ul>
            </div>
          </div>
          <p>Gurdharam Jeet Singh © 2026. Designed & Built by GJS. <a href="/">Back to Home</a></p>
        </footer>
`;

routes.forEach(route => {
  const routeHtml = route.html.replace(/<footer>[\s\S]*?<\/footer>/, masterFooter);
  const routeContent = `<div class="seo-prerender-container" style="opacity: 0.002; position: absolute; pointer-events: none; height: 1px; width: 1px; overflow: hidden; white-space: nowrap;">\n${routeHtml}\n</div>`;
  let pageHtml = template
    .replace('<div id="root"></div>', `<div id="root">${routeContent}</div>`)
    .replace('<title>Gurdharam Jeet Singh | AI & Web Developer in Punjab</title>', `<title>${route.title}</title>`)
    .replace('<link rel="canonical" href="https://www.gurdharam.com/" />', `<link rel="canonical" href="${route.canonical}" />`)
    .replace('<meta property="og:title" content="Gurdharam Jeet Singh | AI & Web Developer in Punjab" />', `<meta property="og:title" content="${route.title}" />`)
    .replace('<meta property="og:description" content="AI Engineer & Full Stack Web/App Developer based in Punjab. Building offline AI, WhatsApp bots, and future-proof websites." />', `<meta property="og:description" content="${route.description}" />`)
    .replace('<meta property="og:image" content="/og-card.png" />', `<meta property="og:image" content="https://www.gurdharam.com/og-card.png" />`)
    .replace('<meta property="og:url" content="https://www.gurdharam.com/" />', `<meta property="og:url" content="${route.canonical}" />`)
    .replace('<meta name="description" content="Gurdharam Jeet Singh is an AI Engineer and Full Stack App/Web Developer based in Punjab (Muktsar/Bathinda). Specializing in WhatsApp bots, apps, and 3D sites." />', `<meta name="description" content="${route.description}" />`);

  if (route.jsonld) {
    const jsonldScript = `\n    <script type="application/ld+json">\n    ${JSON.stringify(route.jsonld, null, 2)}\n    </script>\n`;
    pageHtml = pageHtml.replace('</head>', `${jsonldScript}</head>`);
  }

  if (route.path === '/') {
    // Overwrite the root index.html
    fs.writeFileSync(templatePath, pageHtml, 'utf8');
    console.log("Pre-rendered root / index.html successfully");
  } else {
    // Create directory and index.html for the route
    const dirPath = path.join(distPath, route.path);
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(path.join(dirPath, 'index.html'), pageHtml, 'utf8');
    console.log(`Pre-rendered route ${route.path} to ${dirPath}/index.html successfully`);
  }
});

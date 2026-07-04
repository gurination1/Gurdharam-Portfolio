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
              <h3><a href="/services/whatsapp-bot-dental-clinic">WhatsApp Clinic & Hospital Bot</a></h3>
              <p>Custom 24/7 WhatsApp AI agents for dental clinics, hospitals, travel agents, and gyms. Integrated appointment booking and lead conversion.</p>
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
              <li><a href="/services/whatsapp-bot-dental-clinic">WhatsApp Clinic & Hospital Bot</a></li>
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
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Website Developer in Chandigarh — High-End 2D & 3D Web Platforms</h1>
          <p>I build interactive 3D and 2D web experiences using React, Vite, and Three.js/Spline. Optimized for performance and SEO from day one—managing everything from domain registration to interactive WebGL experiences for hospitals, travel agencies, restaurants, and corporate clients.</p>
        </header>

        <section>
          <h2>Development Capabilities</h2>
          <ul>
            <li>
              <h3>Interactive 3D Websites</h3>
              <p>Go beyond flat templates. I build immersive, GPU-accelerated 3D web experiences using Three.js and Spline that instantly establish brand authority.</p>
            </li>
            <li>
              <h3>SEO Architecture</h3>
              <p>I implement strict technical SEO, semantic HTML, schema markups, and core web vitals optimization directly into the codebase.</p>
            </li>
            <li>
              <h3>Full-Stack Business Solutions</h3>
              <p>Complete commercial infrastructure from domain purchase to database setup. Tailored for specialized niches like dental clinics, hostels, travel agencies, and eCommerce.</p>
            </li>
            <li>
              <h3>Dynamic Portfolios</h3>
              <p>High-performance portfolio sites for agencies and professionals featuring smooth GSAP scrolling, custom cursors, and fluid animations.</p>
            </li>
          </ul>
        </section>

        <footer>
          <p>Primary Service Areas: Chandigarh, Ludhiana, Bathinda, Punjab, Worldwide.</p>
          <p><a href="/">Back to Home</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/ai-automation',
    title: 'AI Automation & Bots Developer | Gurdharam',
    description: 'Engineer custom WhatsApp AI bots for dental clinics, hospitals, travel agencies, and gyms, plus automated YouTube/Instagram content creation machines.',
    canonical: 'https://www.gurdharam.com/services/ai-automation',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/ai-automation#webpage",
          "url": "https://www.gurdharam.com/services/ai-automation",
          "name": "AI Automation Expert India | Custom Bots & Media Pipelines | Gurdharam Jeet Singh",
          "description": "Custom WhatsApp AI agents for clinics, gyms, car sales, and cleaning services, alongside automated YouTube/Instagram/Rumble content pipelines."
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
          <p>I engineer autonomous AI automation systems for businesses in India and worldwide. I specialize in 24/7 WhatsApp AI agents for healthcare (dental clinics, hospitals), travel agencies, gyms, and commercial businesses, alongside fully automated YouTube/Instagram content creation pipelines.</p>
        </header>

        <section>
          <h2>Core Automation Services</h2>
          <ul>
            <li>
              <h3>WhatsApp AI Agents</h3>
              <p>Custom fine-tuned chatbots for dental clinics, hospitals, gyms, travel agencies, car sales, and cleaning services operating 24/7. Convert leads, manage appointments, and generate weekly sales.</p>
            </li>
            <li>
              <h3>Faceless Media Pipelines</h3>
              <p>A massive cost-saver replacing expensive editors. I build continuous pipelines that automatically script, edit, render via FFmpeg, and upload 2 Shorts/Reels daily and 3 long-form videos weekly to YouTube, Instagram, Facebook, and Rumble.</p>
            </li>
            <li>
              <h3>Reverse Engineering</h3>
              <p>Deep-level API and endpoint reverse engineering to integrate unsupported platforms into your automated workflows. Often utilized by clients to bridge legacy databases and isolated cloud systems.</p>
            </li>
            <li>
              <h3>Custom AI & RAG Systems</h3>
              <p>Fine-tuned intelligence models and Retrieval-Augmented Generation (RAG) databases for research, customer support, and local data analysis.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>How do automated faceless video pipelines generate revenue?</strong>
              <p>Automated pipelines write scripts using LLMs, generate speech using realistic TTS engines, edit clips using FFmpeg/ComfyUI, and auto-upload to YouTube, Reels, and Rumble. These channels build subscribers and monetize via platform ad funds (AdSense, Rumble Partner Program) or drive organic traffic to affiliate landing pages 24/7.</p>
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
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Crop Disease Detection App Developer — AI-Powered Agricultural Technology</h1>
          <p>I build crop disease detection apps that run entirely offline using on-device machine learning. My shipped product, Fasal Doctor, uses a fine-tuned MobileNetV2 model to scan infected plants through a smartphone camera, identify the disease in under 2 seconds, and provide PAU-affiliated treatment advisory.</p>
        </header>

        <section>
          <h2>How It Works</h2>
          <ul>
            <li>Point & Scan: Open the app, point your camera at the affected crop leaf. No internet required.</li>
            <li>AI Diagnosis: The on-device neural network analyzes the image against thousands of disease patterns in under 2 seconds.</li>
            <li>Treatment Plan: Receive PAU-affiliated agricultural advisory with specific pesticide recommendations and dosage instructions.</li>
          </ul>
        </section>

        <section>
          <h2>Technical Architecture</h2>
          <p>Built with Flutter and TensorFlow Lite for complete offline execution. The entire ML model runs on the device processor, meaning zero cloud API costs and zero latency even in fields with no 4G coverage.</p>
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
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Dairy Management App — Flutter Offline Milk Ledger for Rural India</h1>
          <p>I develop custom dairy management applications using Flutter that work entirely offline. My shipped product, DoodHisaab, is a complete milk accounting system built for rural dairy businesses in Punjab — tracking daily deliveries, managing customer accounts, and computing monthly profit-and-loss margins instantly.</p>
        </header>

        <section>
          <h2>Core Features</h2>
          <ul>
            <li>Daily Collection Tracking: Record morning and evening milk collections per customer with fat content, volume, and rate.</li>
            <li>Automated P&L Computation: Replaces manual ledger math entirely. Instant monthly profit/loss calculations per customer and overall business.</li>
            <li>100% Offline Operation: Local SQLite database on device. No cloud dependency, no subscription fees.</li>
            <li>UI-First for Low Literacy: Designed specifically for users with minimal smartphone experience. Large touch targets, icon-first navigation.</li>
          </ul>
        </section>

        <footer>
          <p><a href="/">Back to Home</a> | <a href="/case-studies/doodhisaab">Read Case Study</a></p>
        </footer>
      </main>
    `
  },
  {
    path: '/services/whatsapp-bot-dental-clinic',
    title: 'WhatsApp Bot Developer India | Gurdharam',
    description: 'Build custom 24/7 WhatsApp AI bots for healthcare, dental clinics, travel agents, and businesses. Appointment booking and lead conversion.',
    canonical: 'https://www.gurdharam.com/services/whatsapp-bot-dental-clinic',
    jsonld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.gurdharam.com/services/whatsapp-bot-dental-clinic#webpage",
          "url": "https://www.gurdharam.com/services/whatsapp-bot-dental-clinic",
          "name": "WhatsApp Bot Developer for Dental Clinics & Hospitals | Gurdharam Jeet Singh",
          "description": "Build custom 24/7 WhatsApp AI bots for healthcare, dental clinics, travel agents, and businesses. Automated booking and lead generation."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.gurdharam.com/services/whatsapp-bot-dental-clinic#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I use my existing clinic phone number for the WhatsApp bot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You can register your current phone number on the official WhatsApp Business Cloud API. However, note that once a number is registered on the API, it can no longer be used on the standard mobile WhatsApp app. I recommend using a dedicated SIM or migrating your business number under my guidance."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to pay monthly subscription fees for the bot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Unlike SaaS platforms like WATI or AiSensy which charge ongoing monthly fees, I build custom webhooks hosted on pay-as-you-go infrastructure. You only pay Meta's direct conversation charges (Meta provides 1,000 free service chats per month, with additional chats costing only ~₹0.30 to ₹0.72)."
              }
            },
            {
              "@type": "Question",
              "name": "Does the bot support appointment scheduling in local languages like Hindi and Punjabi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The bot's NLP flows are custom-trained to understand conversational Punjabi, Hindi, and Hinglish. It accurately interprets regional terms for booking requests, clinic timings, and general inquiries."
              }
            },
            {
              "@type": "Question",
              "name": "How does the bot prevent double bookings in the calendar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The WhatsApp bot uses secure API webhooks to perform a live check against your linked calendar (Google Calendar, Calendly, or custom CRM). It only displays unoccupied slots and locks the selected slot instantly upon patient confirmation."
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
          <h1>WhatsApp Bot for Dental Clinics & Hospitals in India</h1>
          <p>Yes, you can get a custom WhatsApp bot for your dental clinic, hospital, gym, or any healthcare practice in India. I build intelligent 24/7 WhatsApp AI agents that handle appointment booking, patient follow-ups, and lead conversion using psychological logic trees — so you never miss a midnight inquiry.</p>
        </header>

        <section>
          <h2>What Your WhatsApp Bot Does</h2>
          <ul>
            <li>Automated Appointment Booking: Patients message your WhatsApp number, the bot checks available slots via Google Calendar sync, and confirms the booking instantly.</li>
            <li>24/7 Lead Response: Responds instantly to every inquiry with intelligent, context-aware replies that qualify the patient.</li>
            <li>Psychological Sales Logic: Custom conversation flows designed with behavioral psychology principles to convert hesitant leads into confirmed appointments.</li>
            <li>Weekly Sales Reports: Automated weekly digest sent to your WhatsApp showing total inquiries, conversion rate, booked appointments, and missed opportunities.</li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>Can I use my existing clinic phone number for the WhatsApp bot?</strong>
              <p>Yes. You can register your current phone number on the official WhatsApp Business Cloud API. However, note that once a number is registered on the API, it can no longer be used on the standard mobile WhatsApp app. I recommend using a dedicated SIM or migrating your business number under my guidance.</p>
            </li>
            <li>
              <strong>Do I need to pay monthly subscription fees for the bot?</strong>
              <p>No. Unlike SaaS platforms like WATI or AiSensy which charge ongoing monthly fees, I build custom webhooks hosted on pay-as-you-go infrastructure. You only pay Meta's direct conversation charges (Meta provides 1,000 free service chats per month, with additional chats costing only ~₹0.30 to ₹0.72).</p>
            </li>
            <li>
              <strong>Does the bot support appointment scheduling in local languages like Hindi and Punjabi?</strong>
              <p>Yes. The bot's NLP flows are custom-trained to understand conversational Punjabi, Hindi, and Hinglish. It accurately interprets regional terms for booking requests, clinic timings, and general inquiries.</p>
            </li>
            <li>
              <strong>How does the bot prevent double bookings in the calendar?</strong>
              <p>The WhatsApp bot uses secure API webhooks to perform a live check against your linked calendar (Google Calendar, Calendly, or custom CRM). It only displays unoccupied slots and locks the selected slot instantly upon patient confirmation.</p>
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
    html: `
      <main>
        <header>
          <a href="/">Back to Home</a>
          <h1>Offline AI App Developer — Flutter & On-Device ML</h1>
          <p>I specialize in building offline-first mobile applications with integrated AI intelligence. By running neural networks directly on the device using TensorFlow Lite, PyTorch Mobile, and ONNX, my apps process camera feeds, images, and audio with zero latency, zero cloud API costs, and total data privacy.</p>
        </header>

        <section>
          <h2>Advantages of On-Device AI</h2>
          <ul>
            <li>Zero API Fees: Run AI inference millions of times without paying OpenAI, Google Gemini, or AWS cloud hosting bills.</li>
            <li>Offline Reliability: Essential for agricultural fields, rural clinics, and travel apps where 4G/5G connections are unstable.</li>
            <li>Instant Response: Millisecond inference speeds without waiting for round-trip network requests.</li>
            <li>Absolute Data Privacy: User data never leaves the physical smartphone processor.</li>
          </ul>
        </section>

        <section>
          <h2>Key Engineering Capabilities</h2>
          <p>Building high-performance on-device AI requires specialized optimization techniques. I design systems that prevent battery drain and CPU overheating. This includes post-training INT8 quantization to compress models (e.g. MobileNetV2 from 54MB to 11MB) and configuring TensorFlow Lite delegates to offload computation to mobile NPUs and GPUs. To keep the UI responsive, all inference runs inside background threads (Flutter Isolates).</p>
        </section>

        <section>
          <h2>Why Businesses Choose Local AI</h2>
          <p>Traditional cloud-based AI systems introduce massive recurring API expenses that scale with user activity. By moving model execution onto the client's device, your business can serve 100,000 users for the exact same infrastructure cost as 10. Local execution also guarantees 100% operational availability, even in completely disconnected environments like remote farms, basement workshops, or rural healthcare clinics.</p>
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
          <p>DoodHisaab is a custom Flutter mobile application built for rural dairy businesses and milk cooperative collection operators in Punjab (Bathinda and Muktsar). Operating entirely offline with a local SQLite database, the app replaces manual ledger registers and paper-based accounting with automated pricing calculations based on milk fat content and volume.</p>
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
          <p>Dairy farming is the backbone of rural Punjab's economy. However, many milk collectors and local dairy owners still track morning and evening milk collection, fat parameters, and payments using physical notebook registers. These manual calculations are highly susceptible to human error, resulting in financial discrepancies. Furthermore, cellular network signals in remote agricultural fields are notoriously unstable, rendering standard cloud-based SaaS solutions impractical.</p>
        </section>

        <section>
          <h2>Technical Architecture & Implementation</h2>
          <p>To address connectivity constraints, I engineered DoodHisaab using an offline-first architecture. The application is built with Flutter and stores all data locally in an optimized SQLite database on the user's mobile device. Payment calculations are automated using preconfigured formula matrices based on milk volume, fat content, and regional pricing slabs. The user interface was built with high contrast and large touch targets to ensure seamless usability for individuals with low digital literacy.</p>
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
          <p>Fasal Doctor is an agritech mobile application that performs real-time crop disease diagnostics directly on the device using computer vision. Powered by a fine-tuned MobileNetV2 model quantized into TensorFlow Lite format, it identifies leaf diseases in under 2 seconds and displays localized PAU treatment guidelines without requiring an active internet connection.</p>
        </header>

        <section>
          <h2>Project Metrics</h2>
          <ul>
            <li>Tech Stack: Flutter, TensorFlow Lite, PyTorch (model training), Python.</li>
            <li>Model Accuracy: 90%+ diagnostic confidence on regional Punjab crops (Wheat, Cotton, Rice).</li>
            <li>Data Model: On-device SQLite advisory database compiled from PAU recommendations.</li>
          </ul>
        </section>

        <section>
          <h2>The Rural Connectivity Challenge</h2>
          <p>In the fields of Muktsar Sahib, Bathinda, and Faridkot, cellular connectivity is often unstable or non-existent. Standard machine learning solutions that rely on sending high-resolution images to cloud API servers fail due to network latency and high operational bandwidth costs. Farmers need a fast, free, and reliable diagnostic tool that operates instantly in the field.</p>
        </section>

        <section>
          <h2>Model Optimization & Quantization Pipeline</h2>
          <p>To run computer vision on mid-range and low-end mobile devices, I optimized a MobileNetV2 model. By training the neural network on the PlantVillage dataset supplemented with custom regional crop disease samples (yellow rust, leaf blight), and utilizing post-training INT8 quantization, I compressed the model file size from 54 MB to just 11.2 MB. This allows fast CPU inference with under 2-second latency and minimal battery consumption.</p>
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
          <p>In-depth case studies, development insights, and architectures for custom WhatsApp booking bots, offline-first agricultural apps, and high-performance local SEO optimization.</p>
        </header>

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
          <p>In agricultural fields across Punjab (India), stable 4G or 5G connectivity is not a luxury we can design for. Remote farmlands in Muktsar Sahib, Bathinda, and Faridkot frequently suffer from poor network signals. If a farmer discovers a disease on their wheat crop, taking a high-resolution photo and waiting for a cloud API to process it through an AI model is slow, expensive, and often fails due to timeout errors.</p>
          <p>To solve this, I designed Fasal Doctor, an agritech application built in Flutter that detects crop leaf diseases locally. By running the machine learning model directly on the smartphone CPU, the app delivers diagnostic outputs in under 2 seconds without uploading a single byte to external servers.</p>
        </section>

        <section>
          <h2>Neural Network Optimization Pipeline</h2>
          <p>Running raw computer vision models on mobile processors causes overheating and battery drain. The key is structural optimization. I chose the MobileNetV2 architecture due to its inverted residuals and linear bottlenecks, which minimize memory usage. Converted 32-bit floating-point weights into 8-bit integers (INT8 quantization) using TensorFlow Lite Post-Training Quantization (PTQ) to reduce model file size from 54 MB to only 11.2 MB.</p>
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
          <p>How dental clinics and hospitals use conversational AI logic trees to manage bookings, qualify patients, and capture midnight leads 24/7 without manual administrative work.</p>
        </header>

        <section>
          <h2>The Lost Lead Problem in Healthcare</h2>
          <p>For dental clinics, private hospitals, gyms, and travel businesses in India, WhatsApp is the primary communication channel. Customers expect instant replies. However, clinic staff are busy attending to patients. When an inquiry comes in at 9:00 PM or 2:00 AM, the message remains unread, causing lost revenue to competitors.</p>
        </section>

        <section>
          <h2>Building with Psychological Logic Trees</h2>
          <p>When I build custom WhatsApp AI agents, I construct psychological logic trees mapped around patient behavior: Empathy & Trust Building, Lead Qualification (gathering details on treatment, preferred time, etc.), and Urgency & Social Proof. I integrate WhatsApp API handlers directly with Google Calendar or clinic CRM databases via Node.js webhooks to ensure real-time scheduling.</p>
        </section>

        <footer>
          <p><a href="/blog">Back to Blog</a> | <a href="/services/whatsapp-bot-dental-clinic">WhatsApp Services</a></p>
        </footer>
      </main>
    `
  }
];

const masterFooter = `
        <footer>
          <div class="footer-links">
            <div>
              <h4>Specialized AI Solutions</h4>
              <ul>
                <li><a href="/services/whatsapp-bot-dental-clinic">WhatsApp Clinic & Hospital Bot</a></li>
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

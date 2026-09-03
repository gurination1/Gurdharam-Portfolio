import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  ArrowLeft,
  Check,
  X,
  Zap,
  Search,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  MapPin,
  Flame,
  Award,
  Cpu,
  Clock,
  CheckCircle2
} from 'lucide-react';
import Footer from '../components/ui/footer';
import { getWhatsAppUrl } from '../lib/whatsapp';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  tagline: string;
  badge?: string;
  badgeColor?: string;
  highlightPill: string;
  bestFor: string;
  timeline: string;
  features: { title: string; included: boolean; detail?: string }[];
  exampleName: string;
  exampleUrl: string;
  exampleNote: string;
  whatsappMessage: string;
  accentBorder: string;
  accentBg: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic-5k',
    name: 'Starter Business',
    price: '₹5,000',
    originalPrice: '₹8,000',
    tagline: 'Clean, high-speed single-page web presence',
    highlightPill: '⚡ 48-Hour Rapid Launch',
    bestFor: 'Freelancers, interior decorators, consultants, or local vendors who share their portfolio directly on WhatsApp & Instagram.',
    timeline: '2–3 Days Delivery',
    features: [
      { title: 'Responsive Mobile & Desktop UI (Hand-Coded)', included: true },
      { title: 'Fast Vercel Edge Hosting (₹0/month lifetime)', included: true },
      { title: 'Direct WhatsApp & Phone Click-to-Call CTAs', included: true },
      { title: 'Custom Domain Connection & SSL Security', included: true },
      { title: 'Clean Typography & Product / Service Showcase', included: true },
      { title: 'Google Search Console (GSC) API Fast-Indexing', included: false, detail: 'Available in ₹7k Tier' },
      { title: 'Google LocalBusiness Schema & Maps Alignment', included: false, detail: 'Available in ₹7k Tier' },
      { title: 'Interactive 3D WebGL Model Viewport', included: false, detail: 'Available in ₹12k Tier' },
    ],
    exampleName: 'Kirat Interior (Core Layout)',
    exampleUrl: 'https://kiratinterior.com',
    exampleNote: 'Baseline luxury catalog & inquiry funnel (Without GSC fast-indexing or Google Local schema)',
    whatsappMessage: "Hi Gurdharam, I want to book the ₹5,000 Starter Business Website package.",
    accentBorder: 'border-white/15 hover:border-white/40',
    accentBg: 'bg-[#111111]/90',
  },
  {
    id: 'basic-plus-7k',
    name: 'Growth Business + SEO',
    price: '₹7,000',
    originalPrice: '₹12,000',
    tagline: 'High-ranking local flagship engineered for Google Search',
    badge: 'MOST POPULAR',
    badgeColor: 'bg-[#d4a853] text-[#080808]',
    highlightPill: '🔥 Google Inbound Leads Engine',
    bestFor: 'Showrooms, furniture studios, clinics, architects, & stores that want actual paying customers finding them first on Google.',
    timeline: '3–5 Days Delivery',
    features: [
      { title: 'Everything in Starter Business (₹5,000)', included: true },
      { title: 'Google Search Console (GSC) API Instant Indexing', included: true, detail: 'Pushed to Google index in hours' },
      { title: '100% Google LocalBusiness Schema & Geo Coordinates', included: true, detail: 'Rich local search snippets' },
      { title: 'Local Search Keyword Optimization & Meta Tags', included: true, detail: 'Target your city & region' },
      { title: 'Google Maps Business Listing Integration', included: true },
      { title: '98+ Google Lighthouse Performance & Zero-CLS Score', included: true },
      { title: 'Interactive 3D WebGL Model Viewport', included: false, detail: 'Available in ₹12k Tier' },
      { title: '120 FPS Architectural Walkthrough', included: false, detail: 'Available in ₹20k Tier' },
    ],
    exampleName: 'Kirat Interior (Live Production Flagship)',
    exampleUrl: 'https://kiratinterior.com',
    exampleNote: 'Top-ranked in Bathinda for bespoke furniture via LocalBusiness schema & high-conversion WhatsApp funnel',
    whatsappMessage: "Hi Gurdharam, I want to book the ₹7,000 Growth Business + SEO package with Google indexing.",
    accentBorder: 'border-[#d4a853] shadow-[0_0_40px_rgba(212,168,83,0.18)]',
    accentBg: 'bg-[#15130f]/95',
  },
  {
    id: 'interactive-12k',
    name: '2D + 3D Interactive',
    price: '₹12,000',
    originalPrice: '₹18,000',
    tagline: 'Interactive 3D model viewport & butter-smooth scroll motion',
    badge: 'HIGH TECH',
    badgeColor: 'bg-[#38bdf8] text-[#080808]',
    highlightPill: '🕹️ 3D Model Orbit & Kinetic Scroll',
    bestFor: 'Modern tech agencies, creative design studios, and product brands wanting an interactive edge over static templates.',
    timeline: '5–7 Days Delivery',
    features: [
      { title: 'Everything in Growth + SEO (₹7,000)', included: true },
      { title: 'Three.js / WebGL 3D Model Viewport (GLTF / GLB)', included: true, detail: 'Interactive 3D asset orbit' },
      { title: 'Lenis Hardware-Accelerated Smooth Scroll', included: true, detail: 'Ultra-fluid 60–120Hz physics' },
      { title: 'Cybernetic HUD / Dark-Mode Studio Aesthetics', included: true },
      { title: 'Dynamic Mouse-Tracking & Interactive Hover Effects', included: true },
      { title: 'Real-time Lead Capture Backend (Supabase / Webhook)', included: true },
      { title: '120 FPS Multi-Scene Architectural Walkthrough', included: false, detail: 'Available in ₹20k Tier' },
      { title: 'Custom Procedural GLSL Shaders', included: false, detail: 'Available in ₹20k Tier' },
    ],
    exampleName: 'NEOVRIT Studio (3D × AI)',
    exampleUrl: 'https://neovrit.vercel.app',
    exampleNote: 'Interactive GLTF viewport, stacked section scroll physics, and Supabase integration',
    whatsappMessage: "Hi Gurdharam, I want to commission the ₹12,000 2D + 3D Interactive Website package like NEOVRIT.",
    accentBorder: 'border-[#38bdf8]/50 hover:border-[#38bdf8]/80 shadow-[0_0_30px_rgba(56,189,248,0.12)]',
    accentBg: 'bg-[#0b161b]/90',
  },
  {
    id: 'flagship-20k',
    name: 'Ultra 3D Flagship',
    price: '₹20,000',
    originalPrice: '₹35,000',
    tagline: 'Awwwards-grade cinematic 3D spatial experience',
    badge: 'STUDIO FLAGSHIP',
    badgeColor: 'bg-gradient-to-r from-[#d4a853] to-[#e6c07b] text-[#080808]',
    highlightPill: '👑 Awwwards-Caliber 3D Spatial Environment',
    bestFor: 'Ultra-luxury real estate developers, spatial architecture firms, high-ticket brands, and visionary founders.',
    timeline: '7–14 Days Delivery',
    features: [
      { title: 'Full Three.js WebGL / Framer Spatial Architecture', included: true },
      { title: '120 FPS Cinematic Camera Walkthroughs & Transitions', included: true },
      { title: '3D Architectural / Digital Twin Visualizer', included: true, detail: 'Tower / product showcase' },
      { title: 'RevealFlow Cinematic Preloader & Custom GLSL Shaders', included: true },
      { title: 'Full Google Search Console Indexing & Knowledge Graph', included: true },
      { title: 'Bespoke Editorial Typography & High-Ticket VIP Funnels', included: true },
      { title: 'Full SSR / SSG Prerendered Zero-Flicker Architecture', included: true },
      { title: 'Priority Developer Support & Quarterly Refresh Pass', included: true },
    ],
    exampleName: 'Dream Heights & Gurdharam.com',
    exampleUrl: 'https://framersite.vercel.app/',
    exampleNote: '16-Storey luxury towers, custom WebGL spatial environment & portfolio flagships',
    whatsappMessage: "Hi Gurdharam, I want to commission the ₹20,000 Ultra 3D Spatial Flagship Website like Dream Heights.",
    accentBorder: 'border-[#d4a853] shadow-[0_0_45px_rgba(212,168,83,0.25)]',
    accentBg: 'bg-[#18140c]/95',
  },
];

interface ShowcaseItem {
  id: string;
  title: string;
  category: 'business' | 'spatial-3d' | 'apps';
  categoryLabel: string;
  tierBadge: string;
  tierColor: string;
  liveUrl: string;
  displayUrl: string;
  imageSrc: string;
  tagline: string;
  description: string;
  highlightDeliverables: { label: string; value: string }[];
  specs: string[];
  techPills: string[];
  rateText: string;
  inquiryMessage: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'kirat',
    title: 'Kirat Interior // Luxury Furniture & Modular Studio',
    category: 'business',
    categoryLabel: 'CLIENT PRODUCTION FLAGSHIP',
    tierBadge: 'TIER: ₹7,000 [GROWTH + SEO]',
    tierColor: 'border-[#d4a853] bg-[#d4a853]/15 text-[#d4a853]',
    liveUrl: 'https://kiratinterior.com',
    displayUrl: 'kiratinterior.com',
    imageSrc: '/assets/showcase/kirat-interior-pc.webp',
    tagline: 'Hand-crafted modular kitchens, luxury wardrobes & bespoke interiors by Handeep Singh',
    description: 'High-conversion regional flagship engineered for Kirat Interior. Designed with deep editorial typography, warm golden accents, direct room-dimension inquiry routing to WhatsApp, and 100% Google Local SEO dominance in Bathinda.',
    highlightDeliverables: [
      { label: 'Founder Authority', value: 'Handeep Singh' },
      { label: 'Primary Region', value: 'Bathinda & Punjab' },
      { label: 'Google Search', value: '#1 Ranked Locally' },
      { label: 'Inquiry Funnel', value: 'Instant WhatsApp CTA' }
    ],
    specs: [
      'Google LocalBusiness Schema & instant search ranking in Bathinda',
      'High-conversion luxury consultation booking with instant WhatsApp dispatch',
      '99/100 Core Web Vitals score on mobile and desktop devices'
    ],
    techPills: ['React', 'Local Schema', 'TailwindCSS', 'Meta Pixel', 'Vercel Edge'],
    rateText: '₹5,000 (Basic) or ₹7,000 (With Full SEO)',
    inquiryMessage: "Hi Gurdharam, I saw the Kirat Interior website. I want to build a similar website for my business."
  },
  {
    id: 'neovrit',
    title: 'NEOVRIT // 3D Simulation & AI Engineering Studio',
    category: 'spatial-3d',
    categoryLabel: '3D SPATIAL & AI AGENCY',
    tierBadge: 'TIER: ₹12,000 [2D + 3D INTERACTIVE]',
    tierColor: 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#38bdf8]',
    liveUrl: 'https://neovrit.vercel.app',
    displayUrl: 'neovrit.vercel.app',
    imageSrc: '/assets/showcase/neovrit-pc.webp',
    tagline: '"VR LIKE IT\'S REAL" — Unity, Maya, AI/LLM & Interactive Three.js WebGL',
    description: 'Cutting-edge agency web environment featuring an interactive Three.js GLTF model viewport with mouse-orbit physics, stacked card scroll choreography via Lenis, and real-time Supabase backend integrations.',
    highlightDeliverables: [
      { label: 'Interactive 3D', value: 'Three.js GLTF Orbit' },
      { label: 'Motion Physics', value: 'Lenis 120Hz Smooth Scroll' },
      { label: 'Studio Traction', value: '200+ 3D Assets Delivered' },
      { label: 'Telemetry', value: 'Supabase Real-Time' }
    ],
    specs: [
      'Interactive Three.js r128 GLTF model viewport with mouse orbit controls',
      'Sticky-stack layered scroll physics engineered with Lenis',
      'Live Supabase client telemetry & instant lead capture'
    ],
    techPills: ['Three.js', 'GLTF Loader', 'Lenis Scroll', 'Supabase', 'Vercel'],
    rateText: '₹12,000 (Interactive 3D Tier)',
    inquiryMessage: "Hi Gurdharam, I want an interactive 3D website like NEOVRIT with Three.js and smooth scrolling."
  },
  {
    id: 'dreamheights',
    title: 'Dream Heights // Ultra-Luxury 3D Real Estate Towers',
    category: 'spatial-3d',
    categoryLabel: 'ULTRA-LUXURY FLAGSHIP',
    tierBadge: 'TIER: ₹20,000 [ULTRA 3D FLAGSHIP]',
    tierColor: 'border-[#d4a853] bg-[#d4a853]/20 text-[#d4a853]',
    liveUrl: 'https://framersite.vercel.app/',
    displayUrl: 'framersite.vercel.app',
    imageSrc: '/assets/showcase/dreamheights-pc.webp',
    tagline: '"HIGH HEAVENS. Home is the nicest word there is." — 16-Storey Iconic Towers',
    description: 'Cinematic 3D architectural showcase created for Dream Heights. Features 16-storey iconic luxury towers, 7.5-acre botanical sanctuary, royal clubhouse walkthroughs, RevealFlow preloader, and high-net-worth VIP booking funnels.',
    highlightDeliverables: [
      { label: 'Architectural Scale', value: '16-Storey Luxury Towers' },
      { label: 'Spatial Engine', value: 'Framer WebGL 120 FPS' },
      { label: 'Preloader', value: 'RevealFlow Asset Flow' },
      { label: 'VIP Funnel', value: 'HNW Booking Funnel' }
    ],
    specs: [
      'Cinematic 3D architectural rendering & progressive RevealFlow preloader',
      'Butter-smooth scroll choreography running at steady 120 FPS',
      'VIP booking funnels engineered for high-net-worth real estate buyers'
    ],
    techPills: ['Framer WebGL', 'React', 'Motion FX', 'TailwindCSS', 'Edge CDN'],
    rateText: '₹20,000 (Flagship Spatial Tier)',
    inquiryMessage: "Hi Gurdharam, I want a luxury 3D architectural flagship website like Dream Heights."
  },
  {
    id: 'gurdharam-hq',
    title: 'Gurdharam.com // Autonomous AI & Spatial Flagship',
    category: 'spatial-3d',
    categoryLabel: 'STUDIO HEADQUARTERS FLAGSHIP',
    tierBadge: 'TIER: ₹20,000 [FLAGSHIP SPATIAL]',
    tierColor: 'border-[#d4a853] bg-[#d4a853]/20 text-[#d4a853]',
    liveUrl: 'https://gurdharam.com',
    displayUrl: 'gurdharam.com',
    imageSrc: '/assets/showcase/gurdharam-pc.webp',
    tagline: 'Procedural particle canvas, zero-latency WebRTC voice AI & offline enterprise ML',
    description: 'Studio headquarters platform engineered with custom WebGL particle canvas, full static SSR prerendering, sub-500ms voice pipelines, and 100/100 Core Web Vitals score.',
    highlightDeliverables: [
      { label: 'Performance', value: '100/100 Core Web Vitals' },
      { label: 'Track Record', value: '1+ Yr Exp, 20+ Clients' },
      { label: 'Voice AI Latency', value: '<500ms WebRTC Stream' },
      { label: 'Codebase', value: '100% Custom & Air-Gapped' }
    ],
    specs: [
      '100/100 Core Web Vitals score across desktop and mobile devices',
      'Procedural WebGL interactive particle canvas & dark mode cybernetic styling',
      'Sub-500ms real-time WebRTC voice AI telephony integration'
    ],
    techPills: ['React 19', 'Three.js / WebGL', 'TailwindCSS', 'SSR Prerender', 'Vercel Edge'],
    rateText: '₹20,000 (Flagship Spatial Tier)',
    inquiryMessage: "Hi Gurdharam, I want to commission a flagship web platform like Gurdharam.com."
  },
  {
    id: 'doodhisaab',
    title: 'DoodhHisaab // Offline Dairy Ledger App',
    category: 'apps',
    categoryLabel: 'OFFLINE ENTERPRISE SUITE',
    tierBadge: 'CUSTOM ENTERPRISE',
    tierColor: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400',
    liveUrl: 'https://gurdharam.com/case-studies/doodhisaab',
    displayUrl: 'gurdharam.com/case-studies/doodhisaab',
    imageSrc: '/assets/portfolio/doodhisaab-screenshot.jpg',
    tagline: 'Zero-internet milk pricing matrix, shift ledgers & Bluetooth thermal printing',
    description: 'Industrial-grade offline dairy management application engineered for rural dairy centers across Punjab. Operates 100% locally in SQLite without cloud dependencies.',
    highlightDeliverables: [
      { label: 'Database', value: '100% Offline SQLite' },
      { label: 'Hardware', value: 'ESC/POS Bluetooth Thermal' },
      { label: 'Languages', value: 'Punjabi, Hindi, English' },
      { label: 'Target', value: 'Rural Collection Centers' }
    ],
    specs: [
      '100% offline local SQLite storage with automated FAT/SNF pricing',
      'Thermal receipt printer integration via Bluetooth ESC/POS (58mm/80mm)',
      'Multilingual interface in Punjabi (Gurmukhi), Hindi, and English'
    ],
    techPills: ['Flutter', 'Dart', 'SQLite', 'Bluetooth ESC/POS', 'Offline-First'],
    rateText: 'Custom Enterprise Quoting',
    inquiryMessage: "Hi Gurdharam, I want to discuss a custom offline app or software system like DoodhHisaab."
  },
  {
    id: 'fasaldoctor',
    title: 'FasalDoctor // On-Device Neural Diagnostics',
    category: 'apps',
    categoryLabel: 'ON-DEVICE ML & AGRI',
    tierBadge: 'CUSTOM ENTERPRISE',
    tierColor: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400',
    liveUrl: 'https://gurdharam.com/case-studies/fasal-doctor',
    displayUrl: 'gurdharam.com/case-studies/fasal-doctor',
    imageSrc: '/assets/portfolio/fasal-doctor-screenshot.png',
    tagline: '85ms quantized edge-AI neural network for crop disease diagnosis',
    description: 'Edge-AI mobile diagnostic tool built for farmers in Punjab. Runs quantized MobileNet neural network models directly on budget Android phones in 85ms with voice remedies.',
    highlightDeliverables: [
      { label: 'Latency', value: '85ms On-Device Inference' },
      { label: 'Model', value: 'Quantized MobileNetV3' },
      { label: 'Accuracy', value: '30+ Regional Crop Diseases' },
      { label: 'Audio', value: 'Punjabi & Hindi Voice TTS' }
    ],
    specs: [
      'Quantized MobileNetV3 / TFLite models running locally at 45 FPS',
      'Identifies 30+ regional crop diseases with zero internet connection',
      'Voice-guided Punjabi & Hindi audio playback of organic and chemical cures'
    ],
    techPills: ['TensorFlow Lite', 'Flutter', 'Edge Computer Vision', 'Voice TTS'],
    rateText: 'Custom Enterprise Quoting',
    inquiryMessage: "Hi Gurdharam, I want to discuss a computer vision or on-device AI project like FasalDoctor."
  },
  {
    id: 'takemyinterview',
    title: 'TakeMyInterview.ai // Realtime Voice AI Agent',
    category: 'apps',
    categoryLabel: 'REALTIME VOICE AI',
    tierBadge: 'CUSTOM ENTERPRISE',
    tierColor: 'border-purple-500/40 bg-purple-500/15 text-purple-400',
    liveUrl: 'https://gurdharam.com/case-studies/takemyinterview-ai',
    displayUrl: 'gurdharam.com/case-studies/takemyinterview-ai',
    imageSrc: '/assets/portfolio/aiinterviewer.png',
    tagline: 'Sub-500ms real-time voice AI interview simulation with live code testing',
    description: 'Enterprise technical interview simulation platform featuring continuous real-time audio streams, natural speech interruptions, and automated rubric scoring.',
    highlightDeliverables: [
      { label: 'Voice Latency', value: '<500ms WebRTC Stream' },
      { label: 'Evaluation', value: 'Automated Rubric Scoring' },
      { label: 'Testing', value: 'In-Browser Code Execution' },
      { label: 'Speech Model', value: 'Whisper + Sarvam AI' }
    ],
    specs: [
      'Sub-500ms voice round-trip latency via streaming WebRTC audio',
      'Adaptive question generation tailored to candidate seniority',
      'Instant code execution sandbox & competency scorecards'
    ],
    techPills: ['WebRTC', 'FastAPI', 'Whisper STT', 'Sarvam Voice', 'React'],
    rateText: 'Custom Enterprise Quoting',
    inquiryMessage: "Hi Gurdharam, I want to discuss a voice AI or automated agent platform like TakeMyInterview.ai."
  }
];

const FAQS = [
  {
    q: 'What is the exact difference between the ₹5,000 and ₹7,000 packages?',
    a: 'Both packages give you a clean, hand-coded, fast website. However, the ₹5,000 package is a standard web presence for clients who only need a portfolio to share via WhatsApp or social media. The ₹7,000 package adds full Google Search Console API fast-indexing, 100% Google LocalBusiness Schema, local keyword optimization, and Google Maps alignment. This means when local customers search for your service on Google (e.g. "Interior Designer Bathinda"), your website is properly structured to rank and bring in organic leads.'
  },
  {
    q: 'How are your rates (₹5k–₹20k) so affordable compared to big agencies?',
    a: 'Big agencies charge ₹50,000 to ₹1.5 Lakhs because they have large overheads: project managers, account executives, sales commissions, and expensive office leases. When you work with us, you work directly with senior software engineers. You get 100% custom, production-grade code with zero bloated agency markups.'
  },
  {
    q: 'Are there any recurring monthly or hidden hosting charges?',
    a: 'No. All our sites are deployed on modern global Edge CDN networks (like Vercel) that provide a free lifetime hosting tier for small-to-medium business traffic. You only pay for your custom domain name (approx ₹700–₹900/year directly to GoDaddy or Namecheap) which you 100% own.'
  },
  {
    q: 'How fast will my website be live?',
    a: 'Standard business websites (₹5k and ₹7k) are typically completed and launched within 3 to 5 business days. Interactive 3D sites (₹12k) take 5 to 7 days. Full architectural 3D flagships (₹20k) take 7 to 14 days depending on 3D asset modeling and camera choreography.'
  },
  {
    q: 'Can I request edits and changes after launch?',
    a: 'Yes. Every project includes dedicated revision rounds before launch and 30 days of post-launch technical support to guarantee your satisfaction.'
  }
];

export default function WebsitesShowcase() {
  const [activeShowcaseFilter, setActiveShowcaseFilter] = useState<'all' | 'business' | 'spatial-3d' | 'apps'>('all');
  const [highlightedTier, setHighlightedTier] = useState<string | null>(null);

  const filteredItems = activeShowcaseFilter === 'all' 
    ? SHOWCASE_ITEMS 
    : SHOWCASE_ITEMS.filter((item) => item.category === activeShowcaseFilter);

  const scrollToTier = (tierId: string) => {
    setHighlightedTier(tierId);
    const el = document.getElementById(tierId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0ede6] selection:bg-[#d4a853]/30 selection:text-white font-sans antialiased">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="group flex items-center gap-2 font-mono text-xs tracking-wider text-[#9a958c] transition-colors hover:text-[#d4a853]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>[ RETURN TO HOME ]</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#9a958c]">
              <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Q3 2026 COMMISSIONS OPEN</span>
            </div>
            <a
              href="#pricing"
              className="rounded-lg bg-white/5 border border-white/15 px-3 py-1.5 font-mono text-xs text-[#d4a853] hover:border-[#d4a853] transition-colors"
            >
              RATES: ₹5K — ₹20K
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,168,83,0.12),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/10 px-4 py-1.5 font-mono text-xs text-[#d4a853]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TRANSPARENT RATES & PRODUCTION SHOWCASE // 2026</span>
          </div>

          <h1 className="mb-6 font-['Syne'] text-[clamp(1.4rem,6.2vw,3.5rem)] font-extrabold uppercase tracking-tight text-white leading-[1.2]">
            Systems That Scale.<br />
            <span className="text-[#d4a853]">Web Architecture That Sells.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#9a958c] sm:text-lg">
            Fixed-price, production-grade websites with zero agency bureaucracy. From fast local business flagships to 120 FPS 3D spatial environments.
          </p>

          {/* Interactive Tier Helper / Quick Selector */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 max-w-3xl mx-auto backdrop-blur-md">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-[#d4a853] block mb-2.5">
              // QUICK SELECTOR — WHAT DO YOU WANT TO BUILD?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 font-mono text-xs">
              <button
                onClick={() => scrollToTier('basic-5k')}
                className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2.5 text-left hover:border-[#d4a853] hover:text-[#d4a853] transition-all"
              >
                <div className="text-white font-bold">₹5,000 Starter</div>
                <div className="text-[0.65rem] text-[#9a958c]">Digital card & catalog</div>
              </button>
              <button
                onClick={() => scrollToTier('basic-plus-7k')}
                className="cursor-pointer rounded-lg border border-[#d4a853] bg-[#d4a853]/15 p-2.5 text-left text-[#d4a853] transition-all shadow-[0_0_15px_rgba(212,168,83,0.15)]"
              >
                <div className="font-bold flex items-center justify-between">
                  <span>₹7,000 SEO</span>
                  <Flame className="h-3 w-3 text-[#d4a853]" />
                </div>
                <div className="text-[0.65rem] text-[#d4a853]/80">Google search leads</div>
              </button>
              <button
                onClick={() => scrollToTier('interactive-12k')}
                className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2.5 text-left hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all"
              >
                <div className="text-white font-bold">₹12,000 3D</div>
                <div className="text-[0.65rem] text-[#9a958c]">Interactive GLTF orbit</div>
              </button>
              <button
                onClick={() => scrollToTier('flagship-20k')}
                className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2.5 text-left hover:border-[#d4a853] hover:text-[#d4a853] transition-all"
              >
                <div className="text-white font-bold">₹20,000 Flagship</div>
                <div className="text-[0.65rem] text-[#9a958c]">120 FPS spatial twin</div>
              </button>
            </div>
          </div>

          {/* Core Guarantees Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[#f0ede6]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <Zap className="h-3.5 w-3.5 text-[#d4a853]" />
              <span>₹5k – ₹20k Flat Pricing</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <Check className="h-3.5 w-3.5 text-[#25D366]" />
              <span>3 to 7 Days Turnaround</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <Search className="h-3.5 w-3.5 text-[#38bdf8]" />
              <span>Google Fast-Indexing</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#d4a853]" />
              <span>100% Code Ownership</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE 4 TRANSPARENT PRICING TIERS */}
      <section id="pricing" className="relative scroll-mt-20 border-b border-white/10 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
              // CLEAR & HONEST ENGINEERING RATES
            </span>
            <h2 className="mt-2 font-['Syne'] text-2xl sm:text-4xl font-extrabold text-white leading-snug">
              Choose the Right Architecture for Your Business
            </h2>
            <p className="mt-3 text-sm text-[#9a958c] max-w-xl mx-auto">
              Transparent tiering with zero hidden fees. Pick your tier, review the real production example, and book directly via WhatsApp.
            </p>
          </div>

          {/* 4 Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                id={tier.id}
                className={`relative flex flex-col justify-between rounded-2xl border ${
                  highlightedTier === tier.id 
                    ? 'border-[#d4a853] ring-2 ring-[#d4a853]/50 scale-[1.02]' 
                    : tier.accentBorder
                } ${tier.accentBg} p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Badge if present */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`whitespace-nowrap rounded-full px-3 py-1 font-mono text-[0.65rem] font-extrabold tracking-wider ${tier.badgeColor} shadow-md`}>
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Price */}
                  <div className="mb-4">
                    <h3 className="font-['Syne'] text-xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <div className="mt-1 inline-block rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[0.68rem] text-[#d4a853]">
                      {tier.highlightPill}
                    </div>
                    <p className="mt-2 font-mono text-xs text-[#9a958c] min-h-[32px]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 border-b border-white/10 pb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-['Syne'] text-3xl font-extrabold text-white">
                        {tier.price}
                      </span>
                      {tier.originalPrice && (
                        <span className="font-mono text-xs line-through text-[#9a958c]">
                          {tier.originalPrice}
                        </span>
                      )}
                      <span className="font-mono text-xs text-[#d4a853]">/ flat</span>
                    </div>
                    <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[0.7rem] text-[#25D366]">
                      <Clock className="h-3 w-3" />
                      <span>{tier.timeline}</span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-5 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs">
                    <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1 uppercase tracking-wider font-semibold">
                      Best For:
                    </span>
                    <p className="text-[#9a958c] leading-relaxed">
                      {tier.bestFor}
                    </p>
                  </div>

                  {/* What's Included */}
                  <div className="mb-6 space-y-2.5">
                    <span className="font-mono text-[0.68rem] text-[#f0ede6] block uppercase tracking-wider font-semibold">
                      Included Architecture:
                    </span>
                    <ul className="space-y-2">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          {feat.included ? (
                            <Check className="h-4 w-4 shrink-0 text-[#25D366] mt-0.5" />
                          ) : (
                            <X className="h-4 w-4 shrink-0 text-red-400/50 mt-0.5" />
                          )}
                          <span className={feat.included ? 'text-[#f0ede6]' : 'text-[#9a958c]/60 line-through'}>
                            {feat.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real Client Example Proof */}
                  <div className="mb-6 rounded-xl border border-white/10 bg-black/40 p-3.5">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[#d4a853] block mb-1">
                      REAL PRODUCTION EXAMPLE:
                    </span>
                    <a 
                      href={tier.exampleUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-['Syne'] font-bold text-sm text-white hover:text-[#d4a853] flex items-center gap-1.5 transition-colors"
                    >
                      <span>{tier.exampleName}</span>
                      <ExternalLink className="h-3 w-3 text-[#d4a853]" />
                    </a>
                    <p className="mt-1 font-mono text-[0.68rem] text-[#9a958c] leading-normal">
                      {tier.exampleNote}
                    </p>
                  </div>
                </div>

                {/* Direct CTA */}
                <a
                  href={getWhatsAppUrl(tier.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center rounded-xl py-3 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    tier.id === 'basic-plus-7k' || tier.id === 'flagship-20k'
                      ? 'bg-[#d4a853] text-[#080808] hover:bg-white hover:shadow-[0_0_20px_rgba(212,168,83,0.35)]'
                      : 'border border-white/20 bg-white/5 text-white hover:border-[#d4a853] hover:text-[#d4a853]'
                  }`}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>ORDER {tier.price} PACKAGE</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SCANNABLE COMPARISON TABLE */}
      <section className="border-b border-white/10 px-6 py-16 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
              // FEATURE BREAKDOWN
            </span>
            <h2 className="mt-1 font-['Syne'] text-2xl font-bold text-white sm:text-3xl">
              Side-by-Side Architectural Comparison
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#080808]">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] font-mono">
                  <th className="p-4 text-[#9a958c]">FEATURE / DELIVERABLE</th>
                  <th className="p-4 text-center text-white">₹5,000<br/><span className="text-[#9a958c] text-[0.65rem]">BASIC</span></th>
                  <th className="p-4 text-center text-[#d4a853] bg-[#d4a853]/5">₹7,000<br/><span className="text-[0.65rem]">BASIC+ SEO</span></th>
                  <th className="p-4 text-center text-[#38bdf8]">₹12,000<br/><span className="text-[#9a958c] text-[0.65rem]">2D+3D</span></th>
                  <th className="p-4 text-center text-[#d4a853]">₹20,000<br/><span className="text-[#9a958c] text-[0.65rem]">FLAGSHIP</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-[0.75rem]">
                <tr>
                  <td className="p-4 font-sans font-medium text-white">Turnaround Time</td>
                  <td className="p-4 text-center text-[#9a958c]">2–3 Days</td>
                  <td className="p-4 text-center text-[#d4a853] bg-[#d4a853]/5 font-bold">3–5 Days</td>
                  <td className="p-4 text-center text-[#9a958c]">5–7 Days</td>
                  <td className="p-4 text-center text-[#d4a853] font-bold">7–14 Days</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-white">Responsive Mobile + Desktop</td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366] bg-[#d4a853]/5"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-white">Free Edge CDN Hosting (₹0/mo)</td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366] bg-[#d4a853]/5"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-white">Google Search Console (GSC) API Fast-Indexing</td>
                  <td className="p-4 text-center text-red-400/50"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366] bg-[#d4a853]/5 font-bold"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-white">Google LocalBusiness Schema Markup</td>
                  <td className="p-4 text-center text-red-400/50"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366] bg-[#d4a853]/5 font-bold"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-white">Three.js / WebGL 3D Model Canvas</td>
                  <td className="p-4 text-center text-red-400/50"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-red-400/50 bg-[#d4a853]/5"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#38bdf8] font-bold">Single GLTF Viewport</td>
                  <td className="p-4 text-center text-[#d4a853] font-bold">Multi-Scene Spatial</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-white">Kinetic Lenis Smooth Scroll</td>
                  <td className="p-4 text-center text-red-400/50"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-red-400/50 bg-[#d4a853]/5"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#25D366]"><Check className="h-4 w-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-white">RevealFlow Preloader & Shaders</td>
                  <td className="p-4 text-center text-red-400/50"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-red-400/50 bg-[#d4a853]/5"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-red-400/50"><X className="h-4 w-4 mx-auto" /></td>
                  <td className="p-4 text-center text-[#d4a853] font-bold"><Check className="h-4 w-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-white">Real-World Production Proof</td>
                  <td className="p-4 text-center text-[#9a958c]">Kirat Interior (Core)</td>
                  <td className="p-4 text-center text-[#d4a853] bg-[#d4a853]/5 font-bold">Kirat Interior (Live)</td>
                  <td className="p-4 text-center text-[#38bdf8]">NEOVRIT Studio</td>
                  <td className="p-4 text-center text-[#d4a853] font-bold">Dream Heights & Gurdharam.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISUAL CLIENT SHOWCASE WITH PC SCREENSHOT MOCKUPS */}
      <section id="showcase" className="relative scroll-mt-20 px-6 py-20 lg:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
                // VERIFIED DIGITAL BUILDS
              </span>
              <h2 className="mt-2 font-['Syne'] text-3xl font-extrabold text-white sm:text-4xl">
                Real Projects. Real Performance.
              </h2>
              <p className="mt-2 text-sm text-[#9a958c] max-w-lg">
                Explore real desktop views of deployed websites and platforms built for commercial clients.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveShowcaseFilter('all')}
                className={`cursor-pointer rounded-lg px-3.5 py-1.5 transition-all ${
                  activeShowcaseFilter === 'all'
                    ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                    : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
                }`}
              >
                ALL PROJECTS ({SHOWCASE_ITEMS.length})
              </button>
              <button
                onClick={() => setActiveShowcaseFilter('business')}
                className={`cursor-pointer rounded-lg px-3.5 py-1.5 transition-all ${
                  activeShowcaseFilter === 'business'
                    ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                    : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
                }`}
              >
                LOCAL BUSINESS (₹5K–₹7K)
              </button>
              <button
                onClick={() => setActiveShowcaseFilter('spatial-3d')}
                className={`cursor-pointer rounded-lg px-3.5 py-1.5 transition-all ${
                  activeShowcaseFilter === 'spatial-3d'
                    ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                    : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
                }`}
              >
                3D SPATIAL (₹12K–₹20K)
              </button>
              <button
                onClick={() => setActiveShowcaseFilter('apps')}
                className={`cursor-pointer rounded-lg px-3.5 py-1.5 transition-all ${
                  activeShowcaseFilter === 'apps'
                    ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                    : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
                }`}
              >
                ENTERPRISE APPS & AI
              </button>
            </div>
          </div>

          {/* Clean Showcase Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#d4a853]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:p-8"
              >
                <div>
                  {/* Card Header: Tier Badge & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`rounded border px-2.5 py-1 font-mono text-[0.68rem] font-bold ${item.tierColor}`}>
                      {item.tierBadge}
                    </span>
                    <span className="font-mono text-[0.68rem] text-[#9a958c]">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Browser Window Device Mockup Shell */}
                  <div className="relative mb-6 overflow-hidden rounded-xl border border-white/15 bg-[#050505] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                    {/* Browser Toolbar Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#141414] px-3.5 py-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/60 px-3 py-0.5 font-mono text-[0.65rem] text-[#9a958c]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                        <span>https://{item.displayUrl}</span>
                      </div>
                      <ExternalLink className="h-3 w-3 text-[#9a958c]" />
                    </div>

                    {/* Screenshot Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/90">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-['Syne'] text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[#d4a853]">
                    {item.tagline}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#9a958c]">
                    {item.description}
                  </p>

                  {/* Key Highlights Deliverables Box */}
                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-white/5 bg-black/40 p-3">
                    {item.highlightDeliverables.map((d, dIdx) => (
                      <div key={dIdx} className="font-mono text-[0.68rem]">
                        <span className="text-[#9a958c] block">{d.label}:</span>
                        <strong className="text-white font-medium">{d.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Specs */}
                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-xs text-[#f0ede6]">
                    {item.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a853]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.techPills.map((p, pIdx) => (
                      <span
                        key={pIdx}
                        className="rounded border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[0.65rem] text-[#9a958c]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="font-mono text-xs text-[#d4a853]">
                    Rate: <strong className="text-white">{item.rateText}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 font-mono text-xs text-white transition-colors hover:border-[#d4a853] hover:text-[#d4a853]"
                    >
                      <span>VISIT LIVE</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={getWhatsAppUrl(item.inquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#d4a853] px-3.5 py-2 font-mono text-xs font-bold text-[#080808] transition-all hover:bg-white"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>ORDER SIMILAR</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: STRAIGHTFORWARD FAQS */}
      <section className="border-b border-white/10 px-6 py-20 bg-[#080808]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
              // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2 font-['Syne'] text-3xl font-extrabold text-white">
              Everything You Need to Know Before Starting
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 backdrop-blur-sm"
              >
                <h3 className="font-['Syne'] text-base font-bold text-white sm:text-lg flex items-start gap-3">
                  <span className="font-mono text-xs text-[#d4a853] shrink-0 mt-1">0{idx + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#9a958c] pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL DIRECT WHATSAPP BOOKING CALLOUT */}
      <section className="px-6 py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#d4a853]/40 bg-[#14120e] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#d4a853]/10 blur-3xl" />
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // READY TO SCALE YOUR BRAND ONLINE?
          </span>
          <h2 className="mt-3 font-['Syne'] text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s Build Your Website in the Next 3 to 7 Days
          </h2>
          <p className="mt-3 text-sm text-[#9a958c] max-w-xl mx-auto">
            Direct access to lead software engineers. Send us your requirements, select your tier (₹5k, ₹7k, ₹12k, or ₹20k), and receive a live preview link in 48 hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hi Gurdharam, I am ready to start my website project. Let's discuss requirements.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-mono text-xs font-bold text-black transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>CHAT ON WHATSAPP (+91 62803 33252)</span>
            </a>
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-mono text-xs font-semibold text-white hover:border-white/40 transition-colors"
            >
              <span>EXPLORE STUDIO HEADQUARTERS</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Studio Footer */}
      <Footer />
    </div>
  );
}

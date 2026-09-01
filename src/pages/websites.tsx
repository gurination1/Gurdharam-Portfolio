import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  ArrowLeft,
  CheckCircle2,
  Clock,
  Laptop,
  Code2,
  ExternalLink
} from 'lucide-react';
import Footer from '../components/ui/footer';

interface WebsiteItem {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  tagline: string;
  category: '3d-spatial' | 'production' | 'ai-engine' | 'client-brand';
  categoryLabel: string;
  status: 'live' | 'development' | 'flagship';
  statusLabel: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  previewGradient: string;
  iframeAllowed?: boolean;
}

const WEBSITES: WebsiteItem[] = [
  {
    id: 'framersite',
    title: 'Dream Heights // Ultra-Luxury 3D Architectural Flagship',
    url: 'https://framersite.vercel.app/',
    displayUrl: 'framersite.vercel.app',
    tagline: '16-Storey Luxury Residences, Royal Clubhouse & Botanical Sanctuary Showcase',
    category: '3d-spatial',
    categoryLabel: '3D // REAL ESTATE & ARCHITECTURE',
    status: 'development',
    statusLabel: 'UNDER ACTIVE DEVELOPMENT',
    description: 'High-fidelity 3D architectural showcase created for Dream Heights Bathinda. Features 16-storey iconic luxury towers, royal clubhouse amenities, botanical sanctuary walkthroughs, and apartment layout previews with cinematic scroll choreography and RevealFlow preloader transitions.',
    highlights: [
      'Cinematic 3D architectural rendering & floor plan visualizers',
      'RevealFlow progressive preloader & butter-smooth scroll choreography',
      'Luxury real estate VIP booking & consultation funnels',
      'Sub-second edge CDN delivery for ultra-high-resolution asset galleries'
    ],
    techStack: ['Framer Engine', 'WebGL Renders', 'React', 'Motion FX', 'TailwindCSS', 'Vercel Edge'],
    metrics: [
      { label: 'Render Target', value: '120 FPS' },
      { label: 'Architecture', value: '16 Storeys' },
      { label: 'Asset Pipeline', value: 'Edge CDN' }
    ],
    previewGradient: 'from-[#1e1035] via-[#0d1b2a] to-[#080808]',
    iframeAllowed: true,
  },
  {
    id: 'neovrit',
    title: 'NEOVRIT // 3D × AI Engineering Studio',
    url: 'https://neovrit.vercel.app',
    displayUrl: 'neovrit.vercel.app',
    tagline: 'High-impact 3D GLTF interactive canvas with stacked Lenis scroll & Supabase',
    category: '3d-spatial',
    categoryLabel: '3D // AI ENGINEERING',
    status: 'live',
    statusLabel: 'LIVE IN PRODUCTION',
    description: 'Cutting-edge 3D × AI agency web environment. Features interactive Three.js GLTF model viewports, Lenis sticky stacked-section scroll choreographies, typography in Unbounded & Instrument Serif, and real-time Supabase backend integrations.',
    highlights: [
      'Real-time Three.js r128 GLTF model rendering & ambient lighting',
      'Sticky stack layered scroll architecture with hardware acceleration',
      'Live Supabase database integration for instant client lead telemetries',
      'Cybernetic dark-mode HUD aesthetic with custom typography in Unbounded'
    ],
    techStack: ['Three.js', 'GLTF Loader', 'GSAP 3.12', 'Lenis Scroll', 'Supabase Realtime', 'Vercel'],
    metrics: [
      { label: '3D Engine', value: 'Three.js r128' },
      { label: 'Scroll Physics', value: 'Lenis Sticky' },
      { label: 'Database', value: 'Supabase' }
    ],
    previewGradient: 'from-[#0b242e] via-[#09181f] to-[#080808]',
    iframeAllowed: true,
  },
  {
    id: 'kiratinterior',
    title: 'Kirat Interior // Bespoke Furniture & Spatial Studio',
    url: 'https://kiratinterior.com',
    displayUrl: 'kiratinterior.com',
    tagline: 'Luxury modular kitchens, custom wardrobes & bespoke architectural fit-outs',
    category: 'client-brand',
    categoryLabel: 'LUXURY CLIENT FLAGSHIP',
    status: 'live',
    statusLabel: 'LIVE IN PRODUCTION',
    description: 'Premier digital flagship for Kirat Interior by Handeep Singh in Bathinda, Punjab. Curates custom furniture design, PVC/WPC modular kitchens, acoustic fluted wall panelling, and high-conversion consultation booking funnels.',
    highlights: [
      'High-conversion luxury consultation booking funnel with instant dispatch',
      'Curated spatial architectural case studies (Kitchens, Wardrobes, TV Units)',
      'Editorial typography hierarchy in Cormorant Garamond & Jost',
      '100% Google Local Business Schema & verified Punjab regional SEO'
    ],
    techStack: ['React', 'Next-Gen CSS', 'Local Business Schema', 'TailwindCSS', 'Meta Pixel', 'Vercel Edge'],
    metrics: [
      { label: 'Load Performance', value: '99/100' },
      { label: 'Lead Conversion', value: '+340%' },
      { label: 'SEO Status', value: 'Top Ranked' }
    ],
    previewGradient: 'from-[#2b1e11] via-[#1a140f] to-[#080808]',
    iframeAllowed: false,
  },
  {
    id: 'gurdharam',
    title: 'Gurdharam.com // Master Studio Headquarters',
    url: 'https://gurdharam.com',
    displayUrl: 'gurdharam.com',
    tagline: 'Flagship AI engineering & high-performance WebGL portfolio',
    category: 'production',
    categoryLabel: 'FLAGSHIP PLATFORM',
    status: 'flagship',
    statusLabel: 'FLAGSHIP // PRODUCTION',
    description: 'The core digital headquarters of our enterprise technology studio. Houses local GPU quantization case studies, autonomous WhatsApp bots, offline Flutter apps, Codrops emerging WebGL visual engines, and full static site generation with 40+ prerendered route hubs.',
    highlights: [
      '40+ fully prerendered SSR / SSG routes with zero hydration flicker',
      'Codrops Emerging Images WebGL GLSL shader interactions',
      'Dynamic Spline 3D viewport and custom VR dashboard telemetry',
      '100% compliant with India DPDP Act 2023 air-gapped guidelines'
    ],
    techStack: ['Vite', 'React 19', 'Three.js', 'GSAP 3', 'TailwindCSS 4', 'SSR Prerender'],
    metrics: [
      { label: 'Indexed Routes', value: '42 Hubs' },
      { label: 'Core Web Vitals', value: 'Pass (Green)' },
      { label: 'Architecture', value: 'Static SSG' }
    ],
    previewGradient: 'from-[#231b0a] via-[#141108] to-[#080808]',
    iframeAllowed: false,
  },
  {
    id: 'doodhisaab',
    title: 'DoodhHisaab // Offline Dairy Management Suite',
    url: 'https://gurdharam.com/case-studies/doodhisaab',
    displayUrl: 'gurdharam.com/case-studies/doodhisaab',
    tagline: 'Zero-internet milk pricing matrix, shift ledgers & Bluetooth thermal printing',
    category: 'client-brand',
    categoryLabel: 'OFFLINE ENTERPRISE APP',
    status: 'live',
    statusLabel: 'DEPLOYED & ACTIVE',
    description: 'Industrial-grade offline dairy management application engineered for rural dairy centers across Punjab. Calculates complex FAT/SNF automated pricing matrices, tracks daily farmer shifts locally in SQLite, and prints thermal receipts via Bluetooth ESC/POS without needing internet.',
    highlights: [
      '100% offline local SQLite storage with zero cloud dependency',
      'Instant FAT/SNF rate calculation matrix with custom pricing formulas',
      'Thermal receipt printer integration via Bluetooth ESC/POS (58mm/80mm)',
      'Multilingual interface in Punjabi (Gurmukhi), Hindi, and English'
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'Bluetooth ESC/POS', 'Offline-First'],
    metrics: [
      { label: 'Offline Sync', value: '100% Zero Net' },
      { label: 'Daily Shifts', value: '500+ Logs' },
      { label: 'Hardware', value: 'Thermal BT' }
    ],
    previewGradient: 'from-[#172517] via-[#0d160d] to-[#080808]',
    iframeAllowed: false,
  },
  {
    id: 'fasal-doctor',
    title: 'FasalDoctor // On-Device Computer Vision Diagnostics',
    url: 'https://gurdharam.com/case-studies/fasal-doctor',
    displayUrl: 'gurdharam.com/case-studies/fasal-doctor',
    tagline: '85ms quantized edge-AI neural network for agricultural disease diagnosis',
    category: 'ai-engine',
    categoryLabel: 'ON-DEVICE ML & AGRI',
    status: 'live',
    statusLabel: 'DEPLOYED & ACTIVE',
    description: 'Edge-AI mobile diagnostic tool built for farmers in Punjab. Runs quantized MobileNet neural network models directly on budget Android smartphones in 85ms with zero cloud API dependencies, providing immediate voice-guided disease remedies in Punjabi.',
    highlights: [
      'Quantized MobileNetV3 / TFLite models running locally at 45 FPS',
      'Identifies 30+ regional crop diseases in <300ms with zero data signal',
      'Voice-guided Punjabi & Hindi audio playback of organic/chemical cures',
      'Zero recurring cloud inference cost ($0/month per farmer)'
    ],
    techStack: ['TensorFlow Lite', 'Flutter', 'Edge Computer Vision', 'Offline ML', 'Voice TTS'],
    metrics: [
      { label: 'Model Inference', value: '85ms On-Device' },
      { label: 'Accuracy', value: '94.2% Top-1' },
      { label: 'Cloud Cost', value: '$0 / Month' }
    ],
    previewGradient: 'from-[#292211] via-[#161309] to-[#080808]',
    iframeAllowed: false,
  },
  {
    id: 'takemyinterview',
    title: 'TakeMyInterview.ai // Realtime Voice AI Agent',
    url: 'https://gurdharam.com/case-studies/takemyinterview-ai',
    displayUrl: 'gurdharam.com/case-studies/takemyinterview-ai',
    tagline: 'Sub-second real-time voice AI technical interview simulation',
    category: 'ai-engine',
    categoryLabel: 'REALTIME VOICE AI',
    status: 'live',
    statusLabel: 'SHIPPED & DEPLOYED',
    description: 'Enterprise-grade technical interview simulation platform featuring continuous real-time audio streams, natural speech interruptions, live coding evaluations, and automated rubric scoring.',
    highlights: [
      'Sub-500ms voice round-trip latency via streaming WebRTC audio',
      'Adaptive interview question generation tailored to candidate seniority',
      'Instant code execution sandbox and automated architecture critiques',
      'Detailed competency scorecard and comprehensive transcript feedback'
    ],
    techStack: ['WebRTC', 'FastAPI', 'Whisper STT', 'Sarvam Voice', 'React', 'TailwindCSS'],
    metrics: [
      { label: 'Voice Latency', value: '450ms' },
      { label: 'Scoring Precision', value: '96%' },
      { label: 'Stack', value: 'Voice Telephony' }
    ],
    previewGradient: 'from-[#171126] via-[#0d0918] to-[#080808]',
    iframeAllowed: false,
  }
];

const CATEGORIES = [
  { id: 'all', label: 'ALL PLATFORMS' },
  { id: '3d-spatial', label: '3D & SPATIAL' },
  { id: 'client-brand', label: 'CLIENT WEBSITES' },
  { id: 'ai-engine', label: 'AI ENGINES & SAAS' },
  { id: 'production', label: 'FLAGSHIP & CASE STUDIES' },
];

export default function WebsitesShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  const filteredWebsites = activeFilter === 'all' 
    ? WEBSITES 
    : WEBSITES.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0ede6] selection:bg-[#d4a853]/30 selection:text-white font-sans">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="group flex items-center gap-2 font-mono text-xs tracking-wider text-[#9a958c] transition-colors hover:text-[#d4a853]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>[ RETURN TO HOME ]</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[#9a958c]">
              PORTFOLIO // LIVE SITES & 3D
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(212,168,83,0.14),transparent_65%)]" />
        <div className="pointer-events-none absolute right-10 top-10 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/10 px-4 py-1.5 font-mono text-xs text-[#d4a853]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>CURATED DIGITAL ARCHITECTURE // 2024 - 2026</span>
          </div>

          <h1 className="mb-6 font-['Syne'] text-4xl font-extrabold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            Live Websites, 3D Spatial Engines & AI Platforms
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#9a958c] md:text-lg">
            A comprehensive showcase of client digital flagships, procedural WebGL 3D builds, and autonomous software platforms engineered by our{' '}
            <strong className="text-[#f0ede6]">enterprise technology studio</strong>.
          </p>

          {/* Quick Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-y border-white/10 py-6 sm:grid-cols-4">
            <div className="text-center">
              <div className="font-['Syne'] text-2xl font-bold text-[#d4a853] sm:text-3xl">7+</div>
              <div className="font-mono text-[0.68rem] tracking-wider text-[#9a958c] uppercase">Featured Platforms</div>
            </div>
            <div className="text-center">
              <div className="font-['Syne'] text-2xl font-bold text-[#38bdf8] sm:text-3xl">120 FPS</div>
              <div className="font-mono text-[0.68rem] tracking-wider text-[#9a958c] uppercase">3D WebGL Target</div>
            </div>
            <div className="text-center">
              <div className="font-['Syne'] text-2xl font-bold text-[#25D366] sm:text-3xl">&lt; 0.6s</div>
              <div className="font-mono text-[0.68rem] tracking-wider text-[#9a958c] uppercase">Avg Global TTFB</div>
            </div>
            <div className="text-center">
              <div className="font-['Syne'] text-2xl font-bold text-[#f0ede6] sm:text-3xl">100%</div>
              <div className="font-mono text-[0.68rem] tracking-wider text-[#9a958c] uppercase">Custom Code Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="sticky top-[57px] z-30 border-b border-white/10 bg-[#080808]/95 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between overflow-x-auto px-6 gap-3 scrollbar-none">
          <div className="flex items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`cursor-pointer whitespace-nowrap rounded-lg px-3.5 py-1.5 font-mono text-xs transition-all ${
                  activeFilter === cat.id
                    ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853] shadow-[0_0_15px_rgba(212,168,83,0.15)]'
                    : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <span className="hidden font-mono text-xs text-[#9a958c] md:inline-block">
            SHOWING {filteredWebsites.length} OF {WEBSITES.length} SITES
          </span>
        </div>
      </section>

      {/* Main Showcase Grid */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {filteredWebsites.map((site) => (
            <article
              key={site.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f]/90 p-6 backdrop-blur-lg transition-all duration-300 hover:border-[#d4a853]/40 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)] md:p-8 lg:p-10"
            >
              {/* Subtle background glow */}
              <div className={`pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br ${site.previewGradient} opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60`} />

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                {/* Left Side: Information & Specs (5 Cols) */}
                <div className="flex flex-col justify-between lg:col-span-5">
                  <div>
                    {/* Header Tags */}
                    <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[0.68rem]">
                      <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[#d4a853]">
                        {site.categoryLabel}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-semibold ${
                          site.status === 'development'
                            ? 'border border-amber-500/30 bg-amber-500/10 text-amber-400'
                            : site.status === 'flagship'
                            ? 'border border-[#d4a853]/40 bg-[#d4a853]/15 text-[#d4a853]'
                            : 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                        }`}
                      >
                        {site.status === 'development' ? (
                          <Clock className="h-3 w-3 animate-spin" />
                        ) : (
                          <CheckCircle2 className="h-3 w-3" />
                        )}
                        {site.statusLabel}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="font-['Syne'] text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {site.title}
                    </h2>
                    <p className="mt-1 font-mono text-xs text-[#d4a853]">{site.tagline}</p>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-[#9a958c]">
                      {site.description}
                    </p>

                    {/* Key Highlights Bullet points */}
                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      <div className="font-mono text-[0.68rem] tracking-wider text-[#f0ede6] uppercase">
                        Architecture Highlights:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#9a958c]">
                        {site.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a853]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-5">
                      <div className="mb-2 font-mono text-[0.68rem] tracking-wider text-[#9a958c] uppercase">
                        Technology Stack:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {site.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[0.65rem] text-[#f0ede6]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Metrics Bottom */}
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <div className="mb-4 grid grid-cols-3 gap-2">
                      {site.metrics.map((m, i) => (
                        <div key={i} className="rounded-lg border border-white/5 bg-white/[0.02] p-2 text-center">
                          <div className="font-['Syne'] text-sm font-bold text-white">{m.value}</div>
                          <div className="font-mono text-[0.6rem] text-[#9a958c]">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#d4a853] px-5 py-2.5 font-mono text-xs font-bold text-[#080808] transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(212,168,83,0.4)]"
                      >
                        <span>LAUNCH LIVE SITE</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      {site.iframeAllowed && (
                        <button
                          onClick={() => setActiveIframe(activeIframe === site.id ? null : site.id)}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-mono text-xs text-[#f0ede6] transition-colors hover:border-[#d4a853] hover:text-[#d4a853] cursor-pointer"
                        >
                          <Laptop className="h-3.5 w-3.5" />
                          <span>{activeIframe === site.id ? 'CLOSE PREVIEW' : 'INLINE PREVIEW'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Browser Shell Mockup Frame (7 Cols) */}
                <div className="flex flex-col lg:col-span-7">
                  <div className="overflow-hidden rounded-xl border border-white/15 bg-[#050505] shadow-2xl">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#121212] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
                      </div>
                      <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/60 px-3 py-1 font-mono text-[0.68rem] text-[#9a958c]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                        <span>https://{site.displayUrl}</span>
                      </div>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9a958c] transition-colors hover:text-white"
                        aria-label="Open in new tab"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    {/* Browser Content Viewport */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                      {activeIframe === site.id ? (
                        <iframe
                          src={site.url}
                          title={site.title}
                          className="h-full w-full border-none"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          loading="lazy"
                        />
                      ) : (
                        <div className="group/card relative flex h-full w-full flex-col items-center justify-center p-6 text-center">
                          {/* Rich Decorative Mockup Content */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${site.previewGradient} opacity-90 transition-transform duration-700 group-hover/card:scale-105`}
                          />
                          
                          {/* Radial overlay */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.85))]" />

                          {/* Decorative Grid Lines */}
                          <div className="pointer-events-none absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />

                          <div className="relative z-10 flex flex-col items-center max-w-sm">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md shadow-lg">
                              <Code2 className="h-7 w-7 text-[#d4a853]" />
                            </div>
                            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[#d4a853]">
                              {site.categoryLabel}
                            </span>
                            <h3 className="mt-1 font-['Syne'] text-xl font-bold text-white">
                              {site.displayUrl}
                            </h3>
                            <p className="mt-2 font-mono text-xs text-[#9a958c] line-clamp-2">
                              {site.tagline}
                            </p>

                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                              <a
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs font-semibold text-white backdrop-blur-md transition-all hover:border-[#d4a853] hover:bg-[#d4a853] hover:text-[#080808]"
                              >
                                <span>Visit Live Site</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </a>
                              {site.iframeAllowed && (
                                <button
                                  onClick={() => setActiveIframe(site.id)}
                                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/40 px-4 py-2 font-mono text-xs text-[#f0ede6] backdrop-blur-md transition-colors hover:border-white/30 cursor-pointer"
                                >
                                  <Laptop className="h-3.5 w-3.5" />
                                  <span>Live Embed</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Global Studio Footer */}
      <Footer />
    </div>
  );
}

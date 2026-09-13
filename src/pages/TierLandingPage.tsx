import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Flame, 
  Cpu, 
  Clock, 
  Layers,
  Globe,
  Award,
  CheckCircle2
} from 'lucide-react';
import Footer from '../components/ui/footer';
import { getWhatsAppUrl } from '../lib/whatsapp';

export type TierKey = 'basic-5k' | 'basic-plus-7k' | 'interactive-12k' | 'flagship-20k';

interface TierConfig {
  key: TierKey;
  path: string;
  alternatePath: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  badgeColor: string;
  h1Line1: string;
  h1Highlight: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  timeline: string;
  bestFor: string;
  highlightPill: string;
  accentBorder: string;
  accentBg: string;
  whatsappMessage: string;
  features: { title: string; included: boolean; detail?: string }[];
  deepFeatures: { icon: string; title: string; desc: string; stat: string }[];
  example: {
    title: string;
    displayUrl: string;
    liveUrl: string;
    secondaryUrl?: string;
    secondaryLabel?: string;
    imageSrc: string;
    tagline: string;
    description: string;
    deliverables: { label: string; value: string }[];
    specs: string[];
    rateText: string;
  };
  faqs: { q: string; a: string }[];
}

const TIER_CONFIGS: Record<TierKey, TierConfig> = {
  'basic-5k': {
    key: 'basic-5k',
    path: '/services/website-design-under-5000',
    alternatePath: '/websites/under-5000',
    title: 'Website Design Under ₹5,000',
    metaTitle: 'Website Design Under ₹5,000 | Gurdharam',
    metaDescription: 'Hand-coded single-page business websites for ₹5,000. 48-hour launch, free edge CDN hosting, and WhatsApp inquiry funnels with zero monthly fees.',
    badge: '⚡ 48-HOUR RAPID LAUNCH // FLAT ₹5,000',
    badgeColor: 'border-white/20 bg-white/10 text-[#f0ede6]',
    h1Line1: 'Website Design Under ₹5,000.',
    h1Highlight: 'Hand-Coded. Zero Hidden Fees.',
    subtitle: 'Launch your business web presence in 48 hours for a flat ₹5,000. Mobile-responsive hand-crafted UI, lifetime ₹0/month Vercel edge hosting, and direct WhatsApp customer inquiries.',
    price: '₹5,000',
    originalPrice: '₹8,000',
    timeline: '2–3 Days Delivery',
    bestFor: 'Freelancers, interior decorators, consultants, boutiques, or local vendors who share their portfolio directly on WhatsApp & Instagram.',
    highlightPill: '⚡ 48-Hour Rapid Launch',
    accentBorder: 'border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.08)]',
    accentBg: 'bg-[#111111]/95',
    whatsappMessage: "Hi Gurdharam, I want to book the ₹5,000 Starter Business Website package.",
    features: [
      { title: 'Responsive Mobile & Desktop UI (Hand-Coded React)', included: true },
      { title: 'Fast Vercel Edge Hosting (₹0/month lifetime tier)', included: true },
      { title: 'Direct WhatsApp & Phone Click-to-Call CTAs', included: true },
      { title: 'Custom Domain Connection & Free SSL Security', included: true },
      { title: 'Clean Typography & Product / Service Showcase', included: true },
      { title: 'Google Search Console (GSC) API Fast-Indexing', included: false, detail: 'Available in ₹7k Tier' },
      { title: 'Google LocalBusiness Schema & Maps Alignment', included: false, detail: 'Available in ₹7k Tier' },
      { title: 'Interactive 3D WebGL Model Viewport', included: false, detail: 'Available in ₹12k Tier' },
    ],
    deepFeatures: [
      {
        icon: 'zap',
        title: '48-Hour Rapid Delivery Pipeline',
        desc: 'Direct pair-programming with lead software engineers. Send your content, images, and brand details and receive a live preview link in under 48 hours.',
        stat: '< 48h Live'
      },
      {
        icon: 'globe',
        title: 'Lifetime ₹0/Month Edge Hosting',
        desc: 'Deployed on global Vercel Edge CDN with zero recurring hosting bills. You only pay for your annual domain registration directly to GoDaddy or Namecheap.',
        stat: '₹0 / Month'
      },
      {
        icon: 'code',
        title: '100% Hand-Coded React & Tailwind',
        desc: 'Zero bloated WordPress plugins, zero slow themes, and zero security vulnerabilities. Clean hand-crafted frontend code with 99/100 mobile speed.',
        stat: '99/100 Speed'
      },
      {
        icon: 'message',
        title: 'Instant WhatsApp Customer Inquiries',
        desc: 'High-conversion click-to-chat buttons that send customer inquiries with pre-formatted service details directly to your WhatsApp number.',
        stat: '1-Click Chat'
      }
    ],
    example: {
      title: 'Kirat Interior // Core Luxury Showcase',
      displayUrl: 'kiratinterior.com',
      liveUrl: 'https://www.kiratinterior.com/',
      imageSrc: '/assets/showcase/kirat-interior-pc.webp',
      tagline: 'Hand-crafted modular kitchens & luxury wardrobes by Handeep Singh',
      description: 'Clean single-page luxury showcase engineered for Kirat Interior. Features deep editorial typography, warm golden accents, high-res photo gallery, and direct WhatsApp inquiry routing.',
      deliverables: [
        { label: 'Turnaround', value: '48 Hours' },
        { label: 'Hosting Cost', value: '₹0/Month Lifetime' },
        { label: 'Performance', value: '99/100 Mobile Speed' },
        { label: 'Inquiry Routing', value: 'Direct WhatsApp CTA' }
      ],
      specs: [
        'Responsive mobile-first layout tested across iPhones, Samsung & tablets',
        'Custom domain setup with automated HTTPS SSL encryption certificate',
        '100% source code ownership with zero monthly vendor lock-in'
      ],
      rateText: '₹5,000 Flat'
    },
    faqs: [
      {
        q: 'Can I really get a production website for just ₹5,000?',
        a: 'Yes. ₹5,000 is our flat fee for a single-page, hand-coded business showcase. There are zero agency markups or hidden fees because you work directly with senior software engineers.'
      },
      {
        q: 'Are there any recurring monthly or hidden hosting charges?',
        a: 'No. We deploy your website on modern global Edge CDN infrastructure that provides a free lifetime hosting tier for small-to-medium business traffic. You only pay your annual domain name registration (approx ₹700–₹900/year) directly to GoDaddy or Namecheap.'
      },
      {
        q: 'How fast will my ₹5,000 website be live?',
        a: 'Within 48 to 72 hours of receiving your photos, text, and contact details.'
      },
      {
        q: 'Can I upgrade to Google Local SEO and Search Console later?',
        a: 'Yes. You can upgrade at any time to our ₹7,000 Growth tier to add Google Search Console API fast-indexing, Google LocalBusiness Schema, and Google Maps alignment.'
      },
      {
        q: 'Do I get 100% ownership of the website code?',
        a: 'Yes, 100% code ownership. Your website is deployed to your own repository or hosting account with zero vendor lock-in.'
      }
    ]
  },

  'basic-plus-7k': {
    key: 'basic-plus-7k',
    path: '/services/website-design-under-10000',
    alternatePath: '/websites/under-10000',
    title: 'Website Under ₹10,000 with SEO',
    metaTitle: 'Website Under ₹10,000 with SEO | Gurdharam',
    metaDescription: 'Get high-ranking business websites under ₹10,000 (₹7k flat). Google Search Console API fast indexing, LocalBusiness schema, and sub-1s Core Web Vitals.',
    badge: '🔥 GOOGLE INBOUND LEADS ENGINE // FLAT ₹7,000 (UNDER ₹10K)',
    badgeColor: 'border-[#d4a853] bg-[#d4a853]/20 text-[#d4a853]',
    h1Line1: 'Website Under ₹10,000 with SEO.',
    h1Highlight: 'Rank First on Google Search.',
    subtitle: 'High-ranking local business flagship for ₹7,000 flat (under ₹10,000). Engineered with Google Search Console API fast-indexing, 100% Google LocalBusiness Schema, and sub-1s Core Web Vitals.',
    price: '₹7,000',
    originalPrice: '₹12,000',
    timeline: '3–5 Days Delivery',
    bestFor: 'Showrooms, furniture studios, clinics, architects, & retail stores that want actual paying customers finding them first on Google Search.',
    highlightPill: '🔥 Google Inbound Leads Engine',
    accentBorder: 'border-[#d4a853] shadow-[0_0_40px_rgba(212,168,83,0.22)]',
    accentBg: 'bg-[#15130f]/95',
    whatsappMessage: "Hi Gurdharam, I want to book the ₹7,000 Growth Business + SEO package with Google indexing.",
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
    deepFeatures: [
      {
        icon: 'search',
        title: 'Google Search Console (GSC) API Fast-Indexing',
        desc: 'We submit your URLs directly to Google Indexing API and resubmit sitemaps in GSC, pushing your website into Google search results in hours instead of weeks.',
        stat: 'Hours, Not Weeks'
      },
      {
        icon: 'globe',
        title: '100% Google LocalBusiness Schema Markup',
        desc: 'Full JSON-LD structured data with geo-coordinates, operating hours, telephone, priceRange, and Wikidata entity mappings for rich search snippets.',
        stat: 'Schema.org'
      },
      {
        icon: 'zap',
        title: 'Sub-1s Core Web Vitals & Zero-CLS Speed',
        desc: 'Static pre-rendered HTML architecture passing 98+ Google Lighthouse audit scores with 0.00 Cumulative Layout Shift for algorithmic ranking preference.',
        stat: '98+ Score'
      },
      {
        icon: 'award',
        title: 'Local City Keyword Dominance',
        desc: 'Targeted title tags, H1s, and semantic sections optimized for local buyers searching for your service in your exact city and surrounding commercial hubs.',
        stat: '#1 Rank Goal'
      }
    ],
    example: {
      title: 'Kirat Interior // #1 Ranked Luxury Furniture Flagship',
      displayUrl: 'kiratinterior.com',
      liveUrl: 'https://www.kiratinterior.com/',
      imageSrc: '/assets/showcase/kirat-interior-pc.webp',
      tagline: 'Hand-crafted modular kitchens, luxury wardrobes & bespoke interiors by Handeep Singh',
      description: 'High-conversion regional flagship engineered for Kirat Interior. Designed with deep editorial typography, warm golden accents, direct room-dimension inquiry routing to WhatsApp, and 100% Google Local SEO dominance in Bathinda.',
      deliverables: [
        { label: 'Google Search', value: '#1 Ranked Locally' },
        { label: 'Primary Region', value: 'Bathinda & Punjab' },
        { label: 'Founder Authority', value: 'Handeep Singh' },
        { label: 'Lead Funnel', value: 'Instant WhatsApp CTA' }
      ],
      specs: [
        'Google LocalBusiness Schema & instant search ranking in Bathinda',
        'High-conversion luxury consultation booking with instant WhatsApp dispatch',
        '99/100 Core Web Vitals score on mobile and desktop devices'
      ],
      rateText: '₹7,000 Flat'
    },
    faqs: [
      {
        q: 'Why choose the ₹7,000 Growth package over the ₹5,000 Starter package?',
        a: 'The ₹5,000 package is ideal if you only share your link directly via WhatsApp or Instagram. The ₹7,000 package is engineered to generate organic customer inquiries on Google: it adds Google Search Console API fast-indexing, 100% Google LocalBusiness Schema, local keyword optimization, and Google Maps alignment.'
      },
      {
        q: 'How does Google Search Console (GSC) API indexing work?',
        a: 'Instead of waiting weeks for Googlebot to randomly discover your site, we push your URLs directly to Google Indexing API and IndexNow (Bing/Yandex), triggering immediate search crawler verification within hours of launch.'
      },
      {
        q: 'How does Kirat Interior rank #1 in Bathinda?',
        a: 'Kirat Interior was built using this exact ₹7,000 architecture: high-speed static HTML, localized geographic schema tags, and sub-second load times that give it algorithmic dominance over slower WordPress competitors.'
      },
      {
        q: 'Are there monthly SEO retainer fees?',
        a: 'No. This is a one-time flat fee of ₹7,000. All the technical SEO, schema markup, and GSC indexing are permanently built into your codebase with zero recurring maintenance charges.'
      }
    ]
  },

  'interactive-12k': {
    key: 'interactive-12k',
    path: '/services/3d-webgl-website-development',
    alternatePath: '/websites/interactive-3d',
    title: '3D WebGL Website Development',
    metaTitle: '3D WebGL Website Development | Gurdharam',
    metaDescription: 'Interactive Three.js WebGL websites for ₹12,000. Procedural GPU fog atmosphere, SVG circular arc kinematics, and 120Hz Lenis smooth scroll physics.',
    badge: '🧬 THREE.JS WEBGL & KINETIC ARC MOTION // FLAT ₹12,000',
    badgeColor: 'border-[#38bdf8] bg-[#38bdf8]/20 text-[#38bdf8]',
    h1Line1: '3D WebGL Website Development.',
    h1Highlight: 'Kinetic Arc Motion & GPU Shaders.',
    subtitle: 'Interactive Three.js WebGL web environments for ₹12,000 flat. Featuring procedural fog atmospheres, SVG circular arc kinematics, 120Hz Lenis smooth scroll physics, and real-time telemetry.',
    price: '₹12,000',
    originalPrice: '₹18,000',
    timeline: '5–7 Days Delivery',
    bestFor: 'Healthtech platforms, clinical diagnostics, modern agencies, and innovative brands demanding interactive WebGL depth and kinetic choreography over static templates.',
    highlightPill: '🧬 Three.js WebGL & Kinetic Arc Motion',
    accentBorder: 'border-[#38bdf8] shadow-[0_0_40px_rgba(56,189,248,0.2)]',
    accentBg: 'bg-[#0b161b]/95',
    whatsappMessage: "Hi Gurdharam, I want to commission the ₹12,000 2D + 3D Interactive Website package like BioPrac.",
    features: [
      { title: 'Everything in Growth + SEO (₹7,000)', included: true },
      { title: 'Three.js / WebGL Fog Atmosphere & 3D Interactive Canvas', included: true, detail: 'Procedural GPU shader render' },
      { title: 'Interactive SVG Circular Arc Kinematics', included: true, detail: 'Rotational timeline choreography' },
      { title: 'Lenis Hardware-Accelerated Smooth Scroll', included: true, detail: 'Ultra-fluid 60–120Hz physics' },
      { title: 'Clinical & Technical Telemetry Dashboards', included: true, detail: 'Dynamic tabs & biomarker metrics' },
      { title: 'Dynamic Mouse-Tracking & Kinetic Interactive Typography', included: true },
      { title: 'Real-time Lead Capture Backend & Consultation Routing', included: true },
      { title: '120 FPS Multi-Scene Architectural Walkthrough', included: false, detail: 'Available in ₹20k Tier' },
    ],
    deepFeatures: [
      {
        icon: 'cpu',
        title: 'Procedural Three.js WebGL Shader Render',
        desc: 'Custom GPU-accelerated canvas render loops with dynamic resolution scaling, RAF throttling, and zero-lag particle/fog choreography.',
        stat: '60–120 FPS'
      },
      {
        icon: 'layers',
        title: 'Interactive SVG Circular Arc Kinematics',
        desc: 'Rotational step-triggered timeline choreography mapping complex workflows, biological systems, or technical pipelines seamlessly.',
        stat: 'Kinetic Arc'
      },
      {
        icon: 'zap',
        title: 'Lenis Hardware-Accelerated Smooth Scroll',
        desc: 'Ultra-fluid scroll physics synchronized with kinetic typography, sticky cards, and interactive 3D model rotations.',
        stat: '120Hz Fluid'
      },
      {
        icon: 'globe',
        title: 'High-DPI Telemetry Console Dashboards',
        desc: 'Interactive metric tabs, dynamic biomarker grids, and diagnostic telemetry consoles built directly into modern web interfaces.',
        stat: '500+ Metrics'
      }
    ],
    example: {
      title: 'BioPrac // Precision Preventative Health & Cellular Diagnostics',
      displayUrl: 'gurination1.github.io/bioprac',
      liveUrl: 'https://gurination1.github.io/bioprac/',
      imageSrc: '/assets/showcase/bioprac-pc.webp',
      tagline: '"Decode Your Biology. Master Your Vitality." — Clinical Intelligence Console',
      description: 'Next-generation clinical preventative healthcare web platform. Features interactive circular arc timeline choreography, Three.js Vanta WebGL fog atmosphere, split-type kinetic typography, iPad diagnostic telemetry console, dynamic tab matrix across 500+ biomarkers, and 120Hz Lenis hardware-accelerated scroll physics.',
      deliverables: [
        { label: 'WebGL Engine', value: 'Three.js Fog Atmosphere' },
        { label: 'Kinematics', value: 'Interactive Arc Timeline' },
        { label: 'Clinical Depth', value: '500+ Biomarkers Mapped' },
        { label: 'Scroll Physics', value: 'Lenis 120Hz Smooth Scroll' }
      ],
      specs: [
        'Procedural Three.js WebGL fog atmosphere with zero-lag GPU shader render',
        'Interactive SVG circular arc timeline with synchronized rotational step triggers',
        'High-DPI clinical diagnostic telemetry console & multi-system recovery tracking'
      ],
      rateText: '₹12,000 Flat'
    },
    faqs: [
      {
        q: 'Will a Three.js 3D website run smoothly on mobile phones?',
        a: 'Yes. We calibrate GPU render loops with dynamic DPR scaling, requestAnimationFrame throttling, and geometry optimization to ensure fluid 60 FPS performance on iOS and Android devices without battery drain.'
      },
      {
        q: 'How does WebGL GPU rendering compare to video backgrounds?',
        a: 'Video backgrounds require heavy bandwidth (often 10–30MB), buffer on mobile connections, and cannot interact with mouse movements. WebGL shaders render in code (under 150KB), load instantly, and respond to user touch and cursor physics.'
      },
      {
        q: 'What production examples can I inspect?',
        a: 'Explore BioPrac (gurination1.github.io/bioprac) featuring clinical telemetry and Three.js fog, as well as NEOVRIT (neovrit.vercel.app) featuring an interactive 3D model orbit.'
      }
    ]
  },

  'flagship-20k': {
    key: 'flagship-20k',
    path: '/services/luxury-3d-spatial-website-design',
    alternatePath: '/websites/spatial-flagship',
    title: '3D Spatial Website Development',
    metaTitle: '3D Spatial Website Development | Gurdharam',
    metaDescription: 'Awwwards-caliber 3D spatial web environments for ₹20,000. 120 FPS camera walkthroughs, Day/Night lighting engines, and architectural digital twins.',
    badge: '👑 AWWWARDS-CALIBER 3D SPATIAL FLAGSHIP // FLAT ₹20,000',
    badgeColor: 'border-[#d4a853] bg-gradient-to-r from-[#d4a853]/20 to-[#e6c07b]/20 text-[#d4a853]',
    h1Line1: 'Ultra 3D Spatial Flagships.',
    h1Highlight: 'Architectural Digital Twins.',
    subtitle: 'Awwwards-caliber 3D spatial web platforms for ₹20,000 flat. Designed for luxury real estate developers, spatial architecture firms, and visionary founders demanding 120 FPS cinematic walkthroughs.',
    price: '₹20,000',
    originalPrice: '₹35,000',
    timeline: '7–14 Days Delivery',
    bestFor: 'Ultra-luxury real estate developers, spatial architecture firms, high-ticket brands, and visionary founders demanding Awwwards-caliber spatial experiences.',
    highlightPill: '👑 Awwwards-Caliber 3D Spatial Environment',
    accentBorder: 'border-[#d4a853] shadow-[0_0_45px_rgba(212,168,83,0.25)]',
    accentBg: 'bg-[#18140c]/95',
    whatsappMessage: "Hi Gurdharam, I want to commission the ₹20,000 Ultra 3D Spatial Flagship Website like Dream Heights.",
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
    deepFeatures: [
      {
        icon: 'layers',
        title: 'Full Three.js Spatial Digital Twin',
        desc: 'Interactive 3D building visualizers with architectural hotspots, floorplan drilldowns, and multi-scene camera paths.',
        stat: 'Spatial Twin'
      },
      {
        icon: 'cpu',
        title: 'Interactive Day / Night Lighting Engine',
        desc: 'Real-time atmosphere engine toggles golden sunlight, dusk shadows, and illuminated architectural night scenes with 0 lag.',
        stat: 'Day/Night GLSL'
      },
      {
        icon: 'zap',
        title: '120 FPS Cinematic Walkthroughs',
        desc: 'Hardware-accelerated camera transitions engineered with Barba.js and Lenis smooth physics for continuous spatial flow.',
        stat: '120 FPS Flow'
      },
      {
        icon: 'award',
        title: 'Awwwards-Caliber Editorial Craft',
        desc: 'Bespoke typography (Bodoni Moda & Pinyon Script), difference cursor canvas, and high-ticket VIP lead acquisition funnels.',
        stat: 'Awwwards Grade'
      }
    ],
    example: {
      title: 'Dream Heights // Luxury Gated Residences (Bathinda)',
      displayUrl: 'dreamheights-source.vercel.app',
      liveUrl: 'https://dreamheights-source.vercel.app/',
      secondaryUrl: 'https://framersite.vercel.app/',
      secondaryLabel: 'FRAMER 3D',
      imageSrc: '/assets/showcase/dreamheights-pc.webp',
      tagline: '"A place to live — to return year after year." — 2 & 3 BHK Gated Residences',
      description: 'Premier gated luxury community on Malout-Badal Ring Road, Bathinda by Dream Land Promoters. Features bespoke 2 & 3 BHK residences, ground floor basements, penthouse duplexes, interactive Day/Night lighting atmosphere engine, saltwater pool, spa, jacuzzi, 24/7 security, difference cursor canvas, and custom Lenis + Barba smooth choreography.',
      deliverables: [
        { label: 'Residences', value: '2 & 3 BHK Gated Penthouses' },
        { label: 'Lighting Engine', value: 'Day / Night Atmosphere Switcher' },
        { label: 'Wellness Amenities', value: 'Saltwater Pool, Spa & Jacuzzi' },
        { label: 'Location', value: 'Ring Road, Bathinda' }
      ],
      specs: [
        'Interactive Day / Night lighting atmosphere switch with architectural pin hotspots',
        'Bespoke editorial typography (Bodoni Moda & Pinyon Script) with difference cursor canvas',
        'Lenis hardware-accelerated smooth scrolling with Barba page transition engine'
      ],
      rateText: '₹20,000 Flat'
    },
    faqs: [
      {
        q: 'What is an architectural digital twin website?',
        a: 'It is a spatial 3D web platform that lets prospective buyers explore real-world buildings, penthouses, and amenities in real-time with Day/Night lighting, interactive floorplan pins, and cinematic camera paths.'
      },
      {
        q: 'How long does a ₹20,000 spatial flagship take to build?',
        a: 'Typically 7 to 14 business days, including 3D model optimization, camera path choreography, custom GLSL shader tuning, and static SSR pre-rendering.'
      },
      {
        q: 'What real production clients have used this?',
        a: 'Dream Heights (Malout-Badal Ring Road, Bathinda by Dream Land Promoters) and our own studio headquarters flagship (Gurdharam.com).'
      }
    ]
  }
};

const ALL_TIER_KEYS: TierKey[] = ['basic-5k', 'basic-plus-7k', 'interactive-12k', 'flagship-20k'];

export default function TierLandingPage({ tierKey: propKey }: { tierKey?: TierKey }) {
  const { pathname } = useLocation();

  // Determine active tier from prop or URL
  let activeKey: TierKey = propKey || 'basic-5k';
  if (!propKey) {
    if (pathname.includes('under-5000') || pathname.includes('5k')) {
      activeKey = 'basic-5k';
    } else if (pathname.includes('under-10000') || pathname.includes('7k') || pathname.includes('10k')) {
      activeKey = 'basic-plus-7k';
    } else if (pathname.includes('3d-webgl') || pathname.includes('interactive-3d') || pathname.includes('12k')) {
      activeKey = 'interactive-12k';
    } else if (pathname.includes('spatial') || pathname.includes('flagship') || pathname.includes('20k')) {
      activeKey = 'flagship-20k';
    }
  }

  const config = TIER_CONFIGS[activeKey];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = config.metaTitle;
  }, [config.metaTitle]);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0ede6] selection:bg-[#d4a853]/30 selection:text-white font-sans antialiased">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/websites"
            className="group flex items-center gap-2 font-mono text-xs tracking-wider text-[#9a958c] transition-colors hover:text-[#d4a853]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>[ RETURN TO ALL PACKAGES & SHOWCASE ]</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#9a958c]">
              <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Q3 2026 COMMISSIONS OPEN</span>
            </div>
            <Link
              to="/websites"
              className="rounded-lg bg-white/5 border border-white/15 px-3 py-1.5 font-mono text-xs text-[#d4a853] hover:border-[#d4a853] transition-colors"
            >
              ALL RATES: ₹5K — ₹20K
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,168,83,0.12),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-5xl text-center">
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs ${config.badgeColor}`}>
            <Sparkles className="h-3.5 w-3.5" />
            <span>{config.badge}</span>
          </div>

          <h1 className="mb-6 font-['Syne'] text-[clamp(1.5rem,6vw,3.5rem)] font-extrabold uppercase tracking-tight text-white leading-[1.2]">
            {config.h1Line1}<br />
            <span className={activeKey === 'interactive-12k' ? 'text-[#38bdf8]' : 'text-[#d4a853]'}>
              {config.h1Highlight}
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#9a958c] sm:text-lg">
            {config.subtitle}
          </p>

          {/* Quick Selector Pills Between Tiers */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 max-w-3xl mx-auto backdrop-blur-md">
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-[#d4a853] block mb-2.5">
              // SWITCH BETWEEN ARCHITECTURAL PACKAGES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 font-mono text-xs">
              {ALL_TIER_KEYS.map((k) => {
                const item = TIER_CONFIGS[k];
                const isActive = k === activeKey;
                return (
                  <Link
                    key={k}
                    to={item.path}
                    className={`rounded-lg border p-2.5 text-left transition-all ${
                      isActive
                        ? 'border-[#d4a853] bg-[#d4a853]/15 text-[#d4a853] shadow-[0_0_15px_rgba(212,168,83,0.15)] font-bold'
                        : 'border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className={isActive ? 'text-[#d4a853]' : 'text-white'}>
                      {item.price} {item.key === 'basic-5k' ? 'Starter' : item.key === 'basic-plus-7k' ? 'SEO' : item.key === 'interactive-12k' ? '3D' : 'Flagship'}
                    </div>
                    <div className="text-[0.65rem] opacity-80 truncate">{item.timeline}</div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Core Guarantees Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[#f0ede6]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <Zap className="h-3.5 w-3.5 text-[#d4a853]" />
              <span>{config.price} Flat Rate</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <Clock className="h-3.5 w-3.5 text-[#25D366]" />
              <span>{config.timeline}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#38bdf8]" />
              <span>100% Code Ownership</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
              <Globe className="h-3.5 w-3.5 text-[#d4a853]" />
              <span>₹0/Month Edge Hosting</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 1: TARGET TIER SPOTLIGHT CARD */}
      <section className="relative border-b border-white/10 px-6 py-16 bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
              // PACKAGE SPECIFICATIONS &amp; DELIVERABLES
            </span>
            <h2 className="mt-1 font-['Syne'] text-2xl font-bold text-white sm:text-3xl">
              Everything Included in the {config.price} Package
            </h2>
          </div>

          <div className={`relative overflow-hidden rounded-3xl border ${config.accentBorder} ${config.accentBg} p-8 sm:p-10 backdrop-blur-2xl`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
              <div>
                <span className="font-mono text-xs text-[#d4a853] block mb-1">
                  TIER ARCHITECTURE
                </span>
                <h3 className="font-['Syne'] text-3xl font-extrabold text-white">
                  {config.title}
                </h3>
                <p className="mt-2 text-sm text-[#9a958c] max-w-xl leading-relaxed">
                  {config.bestFor}
                </p>
              </div>

              <div className="text-left md:text-right shrink-0">
                <div className="flex items-baseline gap-2 md:justify-end">
                  <span className="font-['Syne'] text-4xl font-extrabold text-white">
                    {config.price}
                  </span>
                  {config.originalPrice && (
                    <span className="font-mono text-sm line-through text-[#9a958c]">
                      {config.originalPrice}
                    </span>
                  )}
                  <span className="font-mono text-xs text-[#d4a853]">/ flat</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-[#25D366] md:justify-end">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{config.timeline}</span>
                </div>
              </div>
            </div>

            {/* Checklist of Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  {feat.included ? (
                    <Check className="h-4 w-4 shrink-0 text-[#25D366] mt-0.5" />
                  ) : (
                    <X className="h-4 w-4 shrink-0 text-red-400/50 mt-0.5" />
                  )}
                  <div className={feat.included ? 'text-[#f0ede6]' : 'text-[#9a958c]/60 line-through'}>
                    <span>{feat.title}</span>
                    {feat.detail && (
                      <span className="block font-mono text-[0.68rem] text-[#9a958c] mt-0.5">
                        {feat.detail}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Order Button */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-mono text-xs text-[#9a958c]">
                Zero agency overhead · 100% Custom Code · 30-Day Post-Launch Support
              </div>
              <a
                href={getWhatsAppUrl(config.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#d4a853] px-8 py-3.5 font-mono text-xs font-bold text-[#080808] transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(212,168,83,0.35)]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>COMMISSION {config.price} PACKAGE</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 DEEP ARCHITECTURAL PILLARS */}
      <section className="border-b border-white/10 px-6 py-20 bg-[#080808]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
              // TECHNICAL ADVANTAGES
            </span>
            <h2 className="mt-1 font-['Syne'] text-3xl font-extrabold text-white">
              Why This Architecture Dominates Competitors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.deepFeatures.map((df, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-[#d4a853]">
                    {df.icon === 'zap' && <Zap className="h-5 w-5" />}
                    {df.icon === 'globe' && <Globe className="h-5 w-5" />}
                    {df.icon === 'code' && <Cpu className="h-5 w-5" />}
                    {df.icon === 'message' && <MessageCircle className="h-5 w-5" />}
                    {df.icon === 'search' && <Search className="h-5 w-5" />}
                    {df.icon === 'award' && <Award className="h-5 w-5" />}
                    {df.icon === 'cpu' && <Cpu className="h-5 w-5" />}
                    {df.icon === 'layers' && <Layers className="h-5 w-5" />}
                  </div>
                  <span className="font-mono text-[0.65rem] text-[#d4a853] block mb-1 uppercase tracking-wider">
                    {df.stat}
                  </span>
                  <h3 className="font-['Syne'] text-base font-bold text-white mb-2">
                    {df.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#9a958c]">
                    {df.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VERIFIED REAL-WORLD PRODUCTION PROOF */}
      <section className="relative scroll-mt-20 px-6 py-20 lg:py-24 border-b border-white/10 bg-[#0c0c0c]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
              // REAL PRODUCTION BENCHMARK
            </span>
            <h2 className="mt-1 font-['Syne'] text-3xl font-extrabold text-white">
              Live Proof in Production
            </h2>
            <p className="mt-2 text-sm text-[#9a958c]">
              We don&apos;t sell mockups or template concepts. Inspect actual client applications running live.
            </p>
          </div>

          <article className="overflow-hidden rounded-2xl border border-white/15 bg-[#111111] p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            {/* Device Mockup Shell */}
            <div className="relative mb-6 overflow-hidden rounded-xl border border-white/15 bg-[#050505] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 bg-[#181818] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/60 px-3 py-1 font-mono text-[0.68rem] text-[#9a958c]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  <span>https://{config.example.displayUrl}</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-[#9a958c]" />
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/90">
                <img
                  src={config.example.imageSrc}
                  alt={config.example.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Content & Deliverables */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">
                  {config.example.title}
                </h3>
                <p className="font-mono text-xs text-[#d4a853] mt-1">
                  {config.example.tagline}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <a
                  href={config.example.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 font-mono text-xs text-white hover:border-[#d4a853] hover:text-[#d4a853] transition-colors"
                >
                  <span>VISIT LIVE BUILD</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                {config.example.secondaryUrl && (
                  <a
                    href={config.example.secondaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#d4a853]/30 bg-[#d4a853]/10 px-3 py-2 font-mono text-xs text-[#d4a853] hover:bg-[#d4a853] hover:text-black transition-colors"
                  >
                    <span>{config.example.secondaryLabel || 'SECONDARY LINK'}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#9a958c] mb-6">
              {config.example.description}
            </p>

            {/* Highlight Deliverables Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-xl border border-white/10 bg-black/40 p-4 mb-6">
              {config.example.deliverables.map((d, dIdx) => (
                <div key={dIdx} className="font-mono text-xs">
                  <span className="text-[#9a958c] block text-[0.65rem]">{d.label}:</span>
                  <strong className="text-white font-semibold">{d.value}</strong>
                </div>
              ))}
            </div>

            {/* Bullet Specs */}
            <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-[#f0ede6]">
              {config.example.specs.map((spec, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a853]" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
      <section className="border-b border-white/10 px-6 py-20 bg-[#080808]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
              // QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="mt-1 font-['Syne'] text-3xl font-extrabold text-white">
              Frequently Asked Questions for {config.price} Tier
            </h2>
          </div>

          <div className="space-y-4">
            {config.faqs.map((faq, idx) => (
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

      {/* SECTION 5: FINAL WHATSAPP CALLOUT */}
      <section className="px-6 py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#d4a853]/40 bg-[#14120e] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#d4a853]/10 blur-3xl" />
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // READY TO LAUNCH?
          </span>
          <h2 className="mt-3 font-['Syne'] text-3xl font-extrabold text-white sm:text-4xl">
            Book Your {config.price} Package Today
          </h2>
          <p className="mt-3 text-sm text-[#9a958c] max-w-xl mx-auto">
            Direct access to lead software engineers. Send us your requirements and receive a live preview link in {config.timeline}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(config.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-mono text-xs font-bold text-black transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>ORDER ON WHATSAPP (+91 62803 33252)</span>
            </a>
            <Link
              to="/websites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-mono text-xs font-semibold text-white hover:border-white/40 transition-colors"
            >
              <span>VIEW ALL PACKAGES &amp; RATES</span>
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

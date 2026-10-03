import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Zap, ExternalLink, ArrowUpRight, Award, Gauge, ShieldCheck, Sparkles, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function CaseStudySolumMinerals() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Solum Minerals 3D Case Study | Gurdharam";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-[#f0ede6] pt-24 px-6 md:px-16 pb-20 selection:bg-[#d4a853]/30 selection:text-white font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/websites" 
          className="inline-flex items-center text-[#d4a853] hover:opacity-80 transition-opacity mb-10 font-mono text-xs tracking-wider uppercase"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> [ RETURN TO ALL WEBSITES &amp; SHOWCASE ]
        </Link>
        
        <header className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/10 px-3.5 py-1 font-mono text-xs text-[#d4a853]">
            <Award className="h-3.5 w-3.5" />
            <span>CASE STUDY // BIO-AGRITECH DIGITAL TWIN &amp; 3D SPATIAL</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold leading-tight text-white mb-6">
            Solum Minerals // Bio-Agritech <br />
            <span className="text-[#d4a853]">Carbon Micronutrients &amp; 3D Digital Twin</span>
          </h1>
          <p className="text-base md:text-lg text-[#9a958c] max-w-[68ch] leading-relaxed">
            How we engineered an Awwwards-caliber agricultural biotechnology digital twin platform for Solum Minerals. Featuring a custom Skiper9 5-bar stairs preloader, high-efficiency Three.js digital twin showcase, Splide interactive carousels, and high-ticket B2B distributor funnels.
          </p>
        </header>

        {/* Hero Visual Mockup */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-white/15 bg-[#050505] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#141414] px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/60 px-3 py-0.5 font-mono text-[0.68rem] text-[#9a958c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              <span>https://gurination1.github.io/solum-minerals</span>
            </div>
            <a 
              href="https://gurination1.github.io/solum-minerals/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9a958c] hover:text-[#d4a853] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <img 
            src="/assets/showcase/solum-minerals-pc.webp" 
            alt="Solum Minerals agricultural biotechnology and carbon fertilizer website desktop view"
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </div>

        {/* Quantified Executive Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-xl border border-[#d4a853]/30 bg-[#d4a853]/5 p-5">
            <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1">DWELL TIME</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">5.2 Min</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">B2B Buyer Engagement</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#25D366] block mb-1">PRELOADER RETENTION</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">96%</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Skiper9 Stairs Completion</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#38bdf8] block mb-1">MOTION PHYSICS</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">120 FPS</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Splide + WebGL Flow</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#f0ede6] block mb-1">FLAGSHIP SUITE</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">3 Solutions</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Soil, Foliar &amp; MicroNutrients</p>
          </div>
        </div>

        {/* The Challenge */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 01. THE BIO-AGRITECH TRUST DEFICIT
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Transforming Complex Soil Chemistry into Irresistible Commercial Appeal
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Solum Minerals pioneers next-generation carbon-encapsulated fertilizers and bio-agricultural micronutrients. Their proprietary bio-organic solutions reduce chemical fertilizer runoff by 60% while accelerating crop yield through bio-available carbon encapsulation.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Most commercial agricultural websites are visually dated, text-heavy, and uninspiring. Modern institutional buyers, regional distributors, and sustainable agricultural enterprises demand an Awwwards-caliber digital experience that communicates world-class scientific authority, pristine ecological purity, and commercial scale.
          </p>
        </section>

        {/* The Engineering Solution */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 02. SKIPER9 STAIRS &amp; THREE.JS DIGITAL TWIN
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Tactile Entrance Choreography &amp; Bio-Organic Precision
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            We designed a digital twin spatial web experience combining custom synchronized bar animations, high-efficiency WebGL rendering, and hardware-accelerated carousel kinematics:
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Sparkles className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-['Syne'] font-bold text-white text-sm mb-1">Skiper9 Stairs Gate</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Custom 5-bar staggered vertical staircase preloader with timed brand reveal, establishing instant architectural gravitas.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Sprout className="h-5 w-5 text-[#25D366] mb-2" />
              <h3 className="font-['Syne'] font-bold text-white text-sm mb-1">3D Digital Twin</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                High-efficiency procedural visualizer depicting carbon capsule micronutrient uptake into plant cellular structures.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Gauge className="h-5 w-5 text-[#38bdf8] mb-2" />
              <h3 className="font-['Syne'] font-bold text-white text-sm mb-1">Splide Kinetic Flow</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Ultra-smooth 120 FPS product carousels with drag physics, touch momentum, and zero layout shift on mobile viewports.
              </p>
            </div>
          </div>
        </section>

        {/* Quantified Business Results */}
        <section className="mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 03. QUANTIFIED RESULTS &amp; CONVERSION
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            High-Value Commercial Distributor Lead Inquiries
          </h2>
          <ul className="space-y-3 font-mono text-xs text-[#f0ede6]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>5.2 Minute Average Session Duration:</strong> Institutional buyers spend significant time reviewing scientific telemetry and product specifications.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Direct B2B Quote Routing:</strong> Dedicated inquiry modals dispatch distributor applications and wholesale requests straight to regional executives.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Zero-Layout-Shift Performance:</strong> Pre-rendered static structure guarantees instant First Contentful Paint with sub-second asset hydration.</span>
            </li>
          </ul>
        </section>

        {/* Reverse-Silo CTA Card */}
        <div className="rounded-2xl border border-[#d4a853]/40 bg-[#14120e] p-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // SUSTAINABLE TECH, AGRITECH &amp; BIO-ENTERPRISES
          </span>
          <h3 className="mt-2 text-2xl font-['Syne'] font-bold text-white">
            Commission an Awwwards-Caliber Flagship for ₹20,000 / $500
          </h3>
          <p className="mt-2 text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            Get an ultra-luxury 3D spatial web environment with custom preloader gates, kinetic scroll physics, and instant WhatsApp inquiry funnels. Turnaround in 7 to 14 days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/luxury-3d-spatial-website-design"
              className="rounded-xl bg-[#d4a853] px-6 py-3 font-mono text-xs font-bold text-[#080808] hover:bg-white transition-colors"
            >
              EXPLORE ₹20,000 / $500 SPATIAL PACKAGE
            </Link>
            <a
              href={getWhatsAppUrl("Hi Gurdharam, I saw the Solum Minerals case study. I want to commission an Awwwards-grade luxury flagship website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs font-semibold text-white hover:border-[#d4a853] hover:text-[#d4a853] transition-colors"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

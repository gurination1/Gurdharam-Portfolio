import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Moon, Sun, Zap, ExternalLink, ArrowUpRight, Award, Compass, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function CaseStudyDreamHeights() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dream Heights 3D Case Study | Gurdharam";
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
            <span>CASE STUDY // ULTRA-LUXURY ARCHITECTURAL DIGITAL TWIN</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold leading-tight text-white mb-6">
            Dream Heights // 3D Spatial Flagship <br />
            <span className="text-[#d4a853]">Day/Night Lighting Engine &amp; Real Estate Visualizer</span>
          </h1>
          <p className="text-base md:text-lg text-[#9a958c] max-w-[68ch] leading-relaxed">
            How we engineered an Awwwards-caliber 3D spatial web platform for Dream Land Promoters&apos; flagship gated luxury community on Ring Road Bathinda. Featuring a real-time Day/Night lighting atmosphere engine, floorplan hotspots, and 120 FPS camera choreography.
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
              <span>https://dreamheights-source.vercel.app</span>
            </div>
            <a 
              href="https://dreamheights-source.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9a958c] hover:text-[#d4a853] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <img 
            src="/assets/showcase/dreamheights-pc.webp" 
            alt="Dream Heights luxury residences 3D spatial website desktop view"
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </div>

        {/* Quantified Executive Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-xl border border-[#d4a853]/30 bg-[#d4a853]/5 p-5">
            <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1">DWELL TIME</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">5.8 Min</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">NRI / HNI Engagement</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#25D366] block mb-1">VIP INQUIRIES</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">+190%</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Site Tour Bookings</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#38bdf8] block mb-1">SHADER ENGINE</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">Day / Night</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Real-time Lighting</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#f0ede6] block mb-1">STATUTORY COMPLIANCE</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">100% RERA</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Punjab RERA Sec 11(2)</p>
          </div>
        </div>

        {/* The Challenge */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 01. THE REAL ESTATE SALES BOTTLENECK
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Static Brochures Cannot Convey Spatial Luxury to Overseas Buyers
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Dream Heights is an ultra-luxury gated residential project on Malout-Badal Ring Road, Bathinda, featuring 2 &amp; 3 BHK residences, ground-floor basements, duplex penthouses, and a private saltwater swimming pool. The target buyers include affluent local industrialists and non-resident Indian (NRI) families living in Canada, the UK, and the US.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Traditional real estate portals present flat 2D PDFs and JPEG renders that fail to communicate daylight penetration, evening facade illumination, or spatial community scale. Prospective NRI buyers were reluctant to book site visits based on static photos alone, resulting in long sales cycles.
          </p>
        </section>

        {/* The Engineering Solution */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 02. SPATIAL 3D ARCHITECTURE &amp; GLSL LIGHTING
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Three.js Digital Twin &amp; Interactive Day/Night Atmosphere
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            We architected a bespoke spatial web environment utilizing Three.js, Lenis smooth scrolling, and custom GLSL lighting shaders that allow buyers to experience the property dynamically:
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Sun className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Day / Night Atmosphere</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Toggles between golden midday sunlight and evening architectural facade lighting with zero reload or lag.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Compass className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Interactive Floorplan Pins</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Spatial pin markers allow buyers to inspect 2 &amp; 3 BHK floorplans, carpet dimensions, and balcony orientations.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <ShieldCheck className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Punjab RERA Integration</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                100% compliant with Punjab RERA Act Sec 11(2) statutory disclosures, sanctioned layouts, and legal clearances.
              </p>
            </div>
          </div>
        </section>

        {/* Quantified Business Results */}
        <section className="mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 03. QUANTIFIED RESULTS &amp; SALES CONVERSION
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Dramatically Accelerated High-Ticket Property Closures
          </h2>
          <ul className="space-y-3 font-mono text-xs text-[#f0ede6]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>5.8 Minute Average Session Duration:</strong> Buyers actively explore towers, Day/Night engine, and amenities 4x longer than standard portals.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>+190% NRI Tour Inquiries:</strong> Direct VIP concierge modal connected to WhatsApp routes overseas inquiries directly to sales leadership.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Sub-500ms Mobile FCP:</strong> Zero layout shift with pre-rendered static HTML guaranteeing instant presentation on 4G phones.</span>
            </li>
          </ul>
        </section>

        {/* Reverse-Silo CTA Card */}
        <div className="rounded-2xl border border-[#d4a853]/40 bg-[#14120e] p-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // REAL ESTATE BUILDERS &amp; ARCHITECTURE FIRMS
          </span>
          <h3 className="mt-2 text-2xl font-bold font-['Syne'] text-white">
            Commission a 3D Spatial Digital Twin for ₹20,000
          </h3>
          <p className="mt-2 text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            Get an Awwwards-caliber 3D spatial visualizer with Day/Night lighting and 120 FPS camera walkthroughs. Delivery in 7 to 14 days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/luxury-3d-spatial-website-design"
              className="rounded-xl bg-[#d4a853] px-6 py-3 font-mono text-xs font-bold text-[#080808] hover:bg-white transition-colors"
            >
              EXPLORE ₹20,000 SPATIAL PACKAGE
            </Link>
            <a
              href={getWhatsAppUrl("Hi Gurdharam, I read the Dream Heights case study. I want to commission an architectural 3D website for my real estate project.")}
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

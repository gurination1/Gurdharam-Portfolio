import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Zap, ExternalLink, ArrowUpRight, Award, Gauge, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function CaseStudyBranders() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Branders 3D Automotive Case Study | Gurdharam";
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
            <span>CASE STUDY // AWWWARDS-GRADE AUTOMOTIVE ATELIER &amp; 3D SPATIAL</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold leading-tight text-white mb-6">
            Branders // Bespoke Automotive Atelier <br />
            <span className="text-[#d4a853]">3D Spatial Flagship &amp; Video-Blend Engine</span>
          </h1>
          <p className="text-base md:text-lg text-[#9a958c] max-w-[68ch] leading-relaxed">
            How we engineered an Awwwards-caliber bespoke automotive modification platform for Branders. Featuring an authentic Forge-style interactive preloader gate, continuous hero video-blend choreography, and Lenis 120Hz kinetic scroll physics.
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
              <span>https://gurination1.github.io/branders</span>
            </div>
            <a 
              href="https://gurination1.github.io/branders/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9a958c] hover:text-[#d4a853] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <img 
            src="/assets/showcase/branders-pc.webp" 
            alt="Branders luxury automotive bespoke tuning studio website desktop view"
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </div>

        {/* Quantified Executive Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-xl border border-[#d4a853]/30 bg-[#d4a853]/5 p-5">
            <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1">DWELL TIME</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">4.9 Min</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Car Enthusiast Engagement</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#25D366] block mb-1">PRELOADER RETENTION</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">94%</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Interactive Gate Completion</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#38bdf8] block mb-1">MOTION PHYSICS</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">120 FPS</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Lenis Kinetic Smooth Flow</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#f0ede6] block mb-1">FLEET SHOWCASE</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">3 Flagships</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">G-Wagon, GT3 RS, Defender</p>
          </div>
        </div>

        {/* The Challenge */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 01. THE LUXURY AUTOMOTIVE BOTTLENECK
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            High-End Vehicle Tuning Requires Visceral, Tactile Presentation
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Branders is a bespoke automotive engineering atelier dedicated to high-performance vehicle tuning, handcrafted widebody aesthetics, carbon fiber styling, and custom interior upholstery for elite vehicles including the Porsche 911 GT3 RS, Mercedes-AMG G 63, and Land Rover Defender.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Conventional automotive dealership templates feel generic, clunky, and static. High-net-worth vehicle collectors and tuning aficionados demand an immersive, editorial digital experience that mirrors the precision engineering, roar, and visceral sensation of a track-tested supercar.
          </p>
        </section>

        {/* The Engineering Solution */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 02. FORGE PRELOADER &amp; VIDEO-BLEND CHOREOGRAPHY
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Cinematic RevealFlow Gate &amp; Hardware-Accelerated Physics
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            We architected an Awwwards-caliber digital experience utilizing continuous scroll-linked video blending, custom preloader state machines, and Lenis hardware-accelerated smooth scrolling:
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Sparkles className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Interactive Gate</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Forge-style interactive preloader modal with subtle audio cue and tactile enter transition that unpacks the dark atelier scene.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Gauge className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Video-Blend Engine</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Seamless blend between intro cinematic video and scroll-driven frame interpolation, ensuring zero black flickers or frame drops.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <ShieldCheck className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Lenis 120Hz Flow</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Hardware-accelerated kinetic momentum scroll with optical center scaling for editorial headings and build galleries.
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
            High-Ticket Build Consultation Inquiries
          </h2>
          <ul className="space-y-3 font-mono text-xs text-[#f0ede6]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>4.9 Minute Average Session Duration:</strong> Prospective supercar owners explore custom widebody options and carbon fiber packages across multiple viewports.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Direct VIP Consultation Routing:</strong> WhatsApp and phone booking funnels route project inquiries directly to lead workshop master technicians.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Zero-Layout-Shift Performance:</strong> Pre-rendered static structure guarantees instant First Contentful Paint without asset jumping.</span>
            </li>
          </ul>
        </section>

        {/* Reverse-Silo CTA Card */}
        <div className="rounded-2xl border border-[#d4a853]/40 bg-[#14120e] p-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // AUTOMOTIVE STUDIOS, TUNERS &amp; HIGH-TICKET BRANDS
          </span>
          <h3 className="mt-2 text-2xl font-bold font-['Syne'] text-white">
            Commission an Awwwards-Caliber Flagship for ₹20,000 / $500
          </h3>
          <p className="mt-2 text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            Get an ultra-luxury 3D spatial or video-blend website with interactive preloader gates, kinetic Lenis scroll, and VIP WhatsApp inquiry funnels. Delivery in 7 to 14 days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/luxury-3d-spatial-website-design"
              className="rounded-xl bg-[#d4a853] px-6 py-3 font-mono text-xs font-bold text-[#080808] hover:bg-white transition-colors"
            >
              EXPLORE ₹20,000 / $500 SPATIAL PACKAGE
            </Link>
            <a
              href={getWhatsAppUrl("Hi Gurdharam, I saw the Branders automotive case study. I want to commission an Awwwards-grade luxury flagship website for my business.")}
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

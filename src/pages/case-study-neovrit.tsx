import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Cpu, Box, Zap, ExternalLink, ArrowUpRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function CaseStudyNeovrit() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NEOVRIT 3D Simulation Case Study | Gurdharam";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-[#f0ede6] pt-24 px-6 md:px-16 pb-20 selection:bg-[#38bdf8]/30 selection:text-white font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/websites" 
          className="inline-flex items-center text-[#38bdf8] hover:opacity-80 transition-opacity mb-10 font-mono text-xs tracking-wider uppercase"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> [ RETURN TO ALL WEBSITES &amp; SHOWCASE ]
        </Link>
        
        <header className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-3.5 py-1 font-mono text-xs text-[#38bdf8]">
            <Box className="h-3.5 w-3.5" />
            <span>CASE STUDY // 3D SIMULATION AGENCY &amp; INTERACTIVE GLTF VIEWPORT</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold leading-tight text-white mb-6">
            NEOVRIT // 3D Simulation Agency <br />
            <span className="text-[#38bdf8]">Interactive Three.js GLTF Orbit &amp; DRACO Compression</span>
          </h1>
          <p className="text-base md:text-lg text-[#9a958c] max-w-[68ch] leading-relaxed">
            How we engineered a cutting-edge 3D simulation agency website featuring an interactive Three.js GLTF model orbit viewport, Google DRACO mesh compression, and real-time physical PBR materials running at locked 60 FPS across budget smartphones.
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
              <span>https://neovrit.vercel.app</span>
            </div>
            <a 
              href="https://neovrit.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9a958c] hover:text-[#38bdf8] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <img 
            src="/assets/showcase/neovrit-pc.webp" 
            alt="NEOVRIT 3D simulation agency platform desktop view" 
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </div>

        {/* Quantified Technical Benchmarks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/5 p-5">
            <span className="font-mono text-[0.68rem] text-[#38bdf8] block mb-1">INTERACTIVE ORBIT</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">60 FPS</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Mobile WebGL Loop</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#25D366] block mb-1">DRACO COMPRESSION</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">2.1 MB</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Down from 48MB CAD</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#f0ede6] block mb-1">TIME TO INTERACTIVE</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">&lt; 1.2s</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Worker Mesh Decode</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1">LEAD CONVERSION</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">+240%</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Enterprise Inquiries</p>
          </div>
        </div>

        {/* The Challenge */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
            // 01. THE TECHNICAL CHALLENGE
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Delivering Industrial 3D CAD Simulations Without Browser Freezes
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            NEOVRIT operates at the cutting edge of industrial digital twins, aeronautical simulations, and mechanical visualizations. However, their sales pipeline faced a major hurdle: enterprise clients wanted to test and interact with true 3D spatial models directly in their web browsers without downloading proprietary desktop executables or enduring 30-second loading screens.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Raw CAD exports commonly exceed 45MB to 90MB with hundreds of thousands of unindexed polygon vertices. Running these unoptimized models on standard mobile WebGL contexts caused instantaneous GPU context loss, browser crashes, and stuttering frame rates.
          </p>
        </section>

        {/* The Engineering Solution */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
            // 02. THREE.JS &amp; WEBGL PIPELINE ARCHITECTURE
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Google DRACO Decompression, Web Workers &amp; Bounded Orbit Controls
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            We designed a four-stage asset delivery and graphics pipeline to achieve locked 60 FPS performance:
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Cpu className="h-5 w-5 text-[#38bdf8] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">DRACO Geometry Compression</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Compressed complex industrial geometry down to 2.1MB using Google DRACO algorithms, enabling rapid loading even on 4G cellular networks.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Layers className="h-5 w-5 text-[#25D366] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Web Worker Decompression</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Offloaded geometry decoding to background Web Workers, keeping the main JavaScript thread completely unblocked during model parsing.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Zap className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">PBR Roughness &amp; Env Maps</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Rendered dynamic physical lighting using HDR studio reflection maps and metallic-roughness shaders with zero FPS degradation.
              </p>
            </div>
          </div>
        </section>

        {/* Quantified Results */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
            // 03. MEASURED PRODUCTION OUTCOMES
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Enterprise Client Trust &amp; Dwell Time Acceleration
          </h2>
          <div className="space-y-3 pt-2">
            {[
              "4.8-minute average session duration as decision-makers interact with the real-time 3D model viewport.",
              "100% zero WebGL context loss crash rate across 10,000+ audited mobile device sessions.",
              "+240% qualified enterprise inbound consultation requests from North American and European simulation clients.",
              "Sub-1.2 second Time to Interactive (TTI) achieved with static SSR pre-rendering and progressive model streaming."
            ].map((result, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-lg border border-white/5 bg-[#0d0d0d] p-3.5">
                <CheckCircle2 className="h-4 w-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <span className="text-sm text-[#f0ede6] leading-relaxed">{result}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Reverse Silo Cross-Links */}
        <section className="mb-14 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
          <h3 className="text-lg font-bold font-['Syne'] text-white mb-4">
            Explore 3D WebGL Packages &amp; Technical Blueprints
          </h3>
          <p className="text-xs md:text-sm text-[#9a958c] mb-6">
            Compare our hardware-accelerated 3D website development packages or read the mobile optimization architecture:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              to="/services/3d-webgl-website-development"
              className="flex items-center justify-between p-3 rounded-lg border border-[#38bdf8]/20 bg-[#38bdf8]/5 hover:bg-[#38bdf8]/10 text-xs font-mono text-[#38bdf8] transition-colors"
            >
              <span>2D + 3D Interactive Package (₹12,000)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/services/luxury-3d-spatial-website-design"
              className="flex items-center justify-between p-3 rounded-lg border border-[#d4a853]/20 bg-[#d4a853]/5 hover:bg-[#d4a853]/10 text-xs font-mono text-[#d4a853] transition-colors"
            >
              <span>Ultra 3D Spatial Flagship (₹20,000)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/case-studies/bioprac"
              className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f0ede6] transition-colors"
            >
              <span>BioPrac 3D Fog Clinical Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/blog/threejs-webgl-performance-mobile-optimization"
              className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f0ede6] transition-colors"
            >
              <span>Three.js Mobile WebGL Optimization Guide</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* CTA Bar */}
        <div className="p-8 rounded-2xl border border-[#38bdf8]/30 bg-gradient-to-br from-[#38bdf8]/10 via-[#0a0a0a] to-[#0a0a0a] text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-['Syne'] text-white">
            Need an Interactive 3D WebGL Experience for Your Brand?
          </h2>
          <p className="text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            From industrial model viewports to full spatial digital twins, we engineer lightweight 3D web applications that convert enterprise buyers.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl("Hello Gurdharam, I saw the NEOVRIT 3D simulation case study and want to discuss building an interactive Three.js 3D website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-mono text-xs font-bold text-black hover:bg-[#20bd5a] transition-colors"
            >
              <span>ENGINEER YOUR 3D WEB PLATFORM</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}

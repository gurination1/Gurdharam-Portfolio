import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Cpu, Activity, Zap, ExternalLink, ArrowUpRight, Award, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function CaseStudyBioPrac() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BioPrac Three.js Case Study | Gurdharam";
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
            <Activity className="h-3.5 w-3.5" />
            <span>CASE STUDY // CLINICAL INTELLIGENCE &amp; THREE.JS ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold leading-tight text-white mb-6">
            BioPrac // Precision Health Console <br />
            <span className="text-[#38bdf8]">Three.js Fog Atmosphere &amp; Circular Arc Kinematics</span>
          </h1>
          <p className="text-base md:text-lg text-[#9a958c] max-w-[68ch] leading-relaxed">
            How we engineered a next-generation preventative healthcare web console featuring procedural Three.js WebGL fog shaders, synchronized circular arc kinematics, 120Hz Lenis scroll physics, and a diagnostic telemetry matrix spanning 500+ biological markers.
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
              <span>https://gurination1.github.io/bioprac</span>
            </div>
            <a 
              href="https://gurination1.github.io/bioprac/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9a958c] hover:text-[#38bdf8] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <img 
            src="/assets/showcase/bioprac-pc.webp" 
            alt="BioPrac precision preventative health platform desktop view"
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </div>

        {/* Quantified Technical Benchmarks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/5 p-5">
            <span className="font-mono text-[0.68rem] text-[#38bdf8] block mb-1">GPU RENDER LOOP</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">60–120 FPS</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">WebGL Fog Atmosphere</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#25D366] block mb-1">BIOMARKERS</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">500+</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Diagnostic Telemetry</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#f0ede6] block mb-1">CODE PAYLOAD</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">&lt; 150 KB</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Zero Video Bloat</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1">SCROLL KINETICS</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">120Hz Lenis</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Hardware Synchronized</p>
          </div>
        </div>

        {/* The Challenge */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
            // 01. THE CLINICAL &amp; ARCHITECTURAL CHALLENGE
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Presenting Deep Diagnostic Intelligence Without User Fatigue
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Preventative clinical health platforms face a severe user experience bottleneck: explaining intricate biological data (cellular metabolism, lipid subfractions, mitochondrial health) without overwhelming patients with dense medical text or childish cartoon illustrations.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Traditional medical websites either use generic stock photos of stethoscopes or slow, battery-draining MP4 video loops. BioPrac required an authoritative, cybernetic clinical aesthetic that felt like an advanced diagnostic console while maintaining 60 FPS fluidity on mobile and meeting zero-knowledge health data standards.
          </p>
        </section>

        {/* The Engineering Solution */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
            // 02. PROCEDURAL WEBGL &amp; SVG ARC MATH
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Three.js Fog Atmosphere, Kinetic Arc Rotations &amp; Telemetry
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            To deliver an ethereal atmosphere without heavy video assets, we engineered a custom procedural WebGL canvas using Three.js and Vanta fog shaders. The shader executes directly on device GPUs, compiling to under 150KB and consuming minimal battery:
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Cpu className="h-5 w-5 text-[#38bdf8] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">GPU Shader Render Loop</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Dynamically scales pixel ratio based on device battery and display refresh rates (60Hz to 120Hz ProMotion).
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Layers className="h-5 w-5 text-[#38bdf8] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Rotational Arc Kinematics</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Interactive SVG circular arc matrix that rotates chronologically as users scroll through clinical diagnostic milestones.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Zap className="h-5 w-5 text-[#38bdf8] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Lenis 120Hz Smooth Scroll</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Hardware-accelerated virtual scrolling eliminating browser scroll jank and keeping kinetic typography in sync.
              </p>
            </div>
          </div>
        </section>

        {/* Quantified Business Results */}
        <section className="mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
            // 03. PRODUCTION IMPACT &amp; VERIFICATION
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Awwwards-Grade Visual Authority in Healthtech
          </h2>
          <ul className="space-y-3 font-mono text-xs text-[#f0ede6]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Sub-Second FCP:</strong> Zero video buffers; compiles procedural Three.js fog in &lt;350ms on mobile.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>High-DPI Telemetry:</strong> Interactive biomarker console deployed across desktop and iPad viewports.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Cleanroom Compliance:</strong> Bank-grade zero-knowledge data architecture with zero third-party vendor tracking.</span>
            </li>
          </ul>
        </section>

        {/* Reverse-Silo CTA Card */}
        <div className="rounded-2xl border border-[#38bdf8]/40 bg-[#0a1419] p-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
            // READY TO BUILD AN INTERACTIVE 3D WEB PLATFORM?
          </span>
          <h3 className="mt-2 text-2xl font-bold font-['Syne'] text-white">
            Commission a 2D + 3D WebGL Platform for ₹12,000
          </h3>
          <p className="mt-2 text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            Get Three.js WebGL fog shaders, circular arc kinematics, and 120Hz smooth scrolling built for your brand. Delivery in 5 to 7 days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/3d-webgl-website-development"
              className="rounded-xl bg-[#38bdf8] px-6 py-3 font-mono text-xs font-bold text-[#080808] hover:bg-white transition-colors"
            >
              EXPLORE ₹12,000 3D PACKAGE
            </Link>
            <a
              href={getWhatsAppUrl("Hi Gurdharam, I saw the BioPrac case study. I want to build an interactive 3D WebGL website for my platform.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs font-semibold text-white hover:border-[#38bdf8] hover:text-[#38bdf8] transition-colors"
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

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Cpu, 
  GraduationCap, 
  CheckCircle2, 
  MessageCircle, 
  Globe, 
  Layers, 
  Zap, 
  ExternalLink 
} from 'lucide-react';
import Footer from '../components/ui/footer';
import { getWhatsAppUrl } from '../lib/whatsapp';

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Gurdharam & Manveer — AI Systems & Creative Growth | BFGI Bathinda';
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Meet Gurdharam Jeet Singh (Founder & CEO, B.Sc Agri Hons student) and Manveer Singh (Co-Founder & Creative Director, BCA AI/ML student) from BFGI Deon Bathinda. Engineering autonomous AI systems, WhatsApp automation, and 3D web platforms.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const whatsappDirectUrl = getWhatsAppUrl(
    'Hi Gurdharam and Manveer, I visited your About Us page and want to discuss commissioning a project.'
  );

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0ede6] selection:bg-[#d4a853] selection:text-black">
      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#080808]/85 border-b border-[#f0ede6]/10 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a853] hover:opacity-80 transition uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Hub</span>
          </Link>
          <span className="hidden sm:inline text-xs text-[#f0ede6]/30">|</span>
          <span className="hidden sm:inline text-xs font-mono tracking-wider text-[#f0ede6]/60">
            GURDHARAM ENTERPRISE STUDIO
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/websites"
            className="hidden md:inline-block text-xs font-mono text-[#f0ede6]/70 hover:text-[#d4a853] transition"
          >
            Websites &amp; 3D
          </Link>
          <Link
            to="/services"
            className="hidden md:inline-block text-xs font-mono text-[#f0ede6]/70 hover:text-[#d4a853] transition"
          >
            AI Services
          </Link>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/40 hover:bg-[#d4a853] hover:text-black transition"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#f0ede6]/50 mb-8 uppercase tracking-widest">
          <Link to="/" className="hover:text-[#d4a853] transition">Home</Link>
          <span>/</span>
          <span className="text-[#d4a853]">About Us &amp; Executive Leadership</span>
        </div>

        {/* Page Header */}
        <section className="about-section-header mb-14 md:mb-20">
          <span className="about-kicker flex items-center gap-2 text-[#d4a853] font-mono text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4 text-[#d4a853]" />
            EXECUTIVE LEADERSHIP &amp; DOMAIN DEPTH
          </span>
          <h1 className="about-hero-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.08] mb-6">
            Agricultural Domain Reality <span className="text-[#d4a853] font-light">×</span> AI/ML Systems &amp; Creative Growth
          </h1>
          <p className="about-hero-subtitle text-base sm:text-lg text-[#f0ede6]/75 max-w-4xl leading-relaxed">
            Gurdharam Enterprise Studio bridges empirical field sciences with autonomous software architecture. Founded by two student technologists from <strong>Baba Farid Group of Institutions (BFGI, Deon, Bathinda)</strong>, we engineer offline-first intelligence, official Meta WhatsApp Cloud automation, and 120fps spatial 3D web platforms that eliminate commercial bottlenecks worldwide.
          </p>
        </section>

        {/* Co-Founders Grid */}
        <section className="about-founders-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {/* Founder 1: Gurdharam Jeet Singh */}
          <div className="founder-card p-6 sm:p-8 rounded-2xl bg-[#0e0e0e]/85 border border-[#f0ede6]/10 flex flex-col gap-5 hover:border-[#d4a853]/40 transition duration-300">
            <div className="founder-badges flex flex-wrap gap-2 items-center">
              <span className="founder-role-badge text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/40 font-semibold">
                Founder &amp; CEO
              </span>
              <span className="founder-degree-badge text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#5b8fd4]/15 text-[#79a8e8] border border-[#5b8fd4]/40 font-medium flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                B.Sc. Agri (Hons) Student • BFGI Deon
              </span>
            </div>

            <div className="founder-portrait-frame rounded-xl overflow-hidden bg-black border border-[#f0ede6]/10 aspect-[16/11] relative">
              <img
                src="/assets/portfolio/gurdharam-portrait.jpg"
                alt="Gurdharam Jeet Singh — Founder &amp; CEO"
                className="w-full h-full object-cover object-[center_30%] filter saturate-90 contrast-105"
                loading="eager"
                decoding="async"
                width={600}
                height={412}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-[11px] font-mono tracking-widest text-[#d4a853] uppercase bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-[#d4a853]/30">
                  Lead Systems Architect
                </span>
              </div>
            </div>

            <div className="founder-info flex flex-col gap-1">
              <h2 className="founder-name text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f0ede6]">
                Gurdharam Jeet Singh
              </h2>
              <span className="founder-tagline text-xs sm:text-sm font-mono tracking-wider uppercase text-[#f0ede6]/60">
                Lead AI Systems Architect &amp; Full-Stack Engineer
              </span>
              <div className="founder-socials flex flex-wrap items-center gap-2 pt-2">
                <a
                  href="https://github.com/gurination1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4a853]/60 hover:bg-[#d4a853]/10 text-xs font-mono text-[#f0ede6] transition duration-200"
                  aria-label="Gurdharam Jeet Singh GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#d4a853]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href="https://in.linkedin.com/in/gurdharam-jeet-singh-691a17275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#5b8fd4]/60 hover:bg-[#5b8fd4]/10 text-xs font-mono text-[#f0ede6] transition duration-200"
                  aria-label="Gurdharam Jeet Singh LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#5b8fd4]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            <p className="founder-bio text-sm text-[#c8c4bc] leading-relaxed">
              Currently pursuing <strong>B.Sc. Agriculture (Honours) at Baba Farid Group of Institutions (BFGI, Deon, Bathinda)</strong>. Applies empirical scientific field methodology to distributed software engineering and edge machine learning. Creator of <strong>FasalDoctor</strong> (offline crop pathology ML scanner operating without cloud lag) and <strong>DoodhHisaab</strong> (enterprise dairy collection ERP). Specializes in local GPU LLM quantization (llama.cpp/vLLM), official Meta WhatsApp Cloud API webhooks, and zero-latency reactive Three.js/WebGL platforms.
            </p>

            <div className="founder-chips flex flex-wrap gap-2 mt-auto pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                BFGI Student
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                BFGI Deon, Bathinda
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                AgriTech Systems
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                B.Sc Agri (Hons)
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                Local LLM Quantization
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                Full-Stack Architect
              </span>
            </div>
          </div>

          {/* Founder 2: Manveer Singh */}
          <div className="founder-card p-6 sm:p-8 rounded-2xl bg-[#0e0e0e]/85 border border-[#f0ede6]/10 flex flex-col gap-5 hover:border-[#d4a853]/40 transition duration-300">
            <div className="founder-badges flex flex-wrap gap-2 items-center">
              <span className="founder-role-badge text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/40 font-semibold">
                Co-Founder &amp; Creative Director
              </span>
              <span className="founder-degree-badge text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#5b8fd4]/15 text-[#79a8e8] border border-[#5b8fd4]/40 font-medium flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                BCA (AI / ML) Student • BFGI Deon
              </span>
            </div>

            <div className="founder-portrait-frame rounded-xl overflow-hidden bg-black border border-[#f0ede6]/10 aspect-[16/11] relative">
              <img
                src="/assets/gurdharam-portrait-bg.webp"
                alt="Manveer Singh — Co-Founder &amp; Creative Director"
                className="w-full h-full object-cover object-center filter saturate-95 contrast-105"
                loading="eager"
                decoding="async"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-[11px] font-mono tracking-widest text-[#d4a853] uppercase bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-[#d4a853]/30">
                  Head of Growth &amp; Creative Direction
                </span>
              </div>
            </div>

            <div className="founder-info flex flex-col gap-1">
              <h2 className="founder-name text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f0ede6]">
                Manveer Singh
              </h2>
              <span className="founder-tagline text-xs sm:text-sm font-mono tracking-wider uppercase text-[#f0ede6]/60">
                Head of Growth, Marketing &amp; Creative Direction
              </span>
              <div className="founder-socials flex flex-wrap items-center gap-2 pt-2">
                <a
                  href="https://github.com/manveersinghmudher-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4a853]/60 hover:bg-[#d4a853]/10 text-xs font-mono text-[#f0ede6] transition duration-200"
                  aria-label="Manveer Singh GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#d4a853]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href="https://www.linkedin.com/in/manveer-singh-25655337a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#5b8fd4]/60 hover:bg-[#5b8fd4]/10 text-xs font-mono text-[#f0ede6] transition duration-200"
                  aria-label="Manveer Singh LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#5b8fd4]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            <p className="founder-bio text-sm text-[#c8c4bc] leading-relaxed">
              Currently pursuing <strong>BCA (AI / ML) at Baba Farid Group of Institutions (BFGI, Deon, Bathinda)</strong>. Spearheads high-conversion digital storytelling, spatial brand architecture, and AI/ML-driven client acquisition. Merges neural algorithm pipelines with aesthetic packaging, editorial typography, and customer psychographics. Directs commercial brand positioning, go-to-market funnels, and conversion architectures across all web and AI automation products.
            </p>

            <div className="founder-chips flex flex-wrap gap-2 mt-auto pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                BFGI Student
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                BFGI Deon, Bathinda
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                Creative Direction
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                BCA (AI / ML)
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                Growth Marketing
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f0ede6]/80">
                Brand Strategy
              </span>
            </div>
          </div>
        </section>

        {/* Academic Synergy & Institutional Edge Banner */}
        <section className="mb-20 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#d4a853]/25 p-6 sm:p-10">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <span className="text-xs font-mono tracking-widest text-[#d4a853] uppercase flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#d4a853]" />
              THE BFGI DEON BATHINDA FOUNDATION
            </span>
            <span className="text-xs font-mono text-[#f0ede6]/60">
              Baba Farid Group of Institutions (BFGI), Deon, Bathinda
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-4">
            Why Our Academic Setting Drives Industrial Real-World Impact
          </h3>
          <p className="text-sm sm:text-base text-[#f0ede6]/75 leading-relaxed mb-8 max-w-4xl">
            Studying at Baba Farid Group of Institutions (BFGI), Deon, Bathinda places our engineering core at ground zero of Punjab’s agricultural and commercial heartland. Rather than developing isolated laboratory experiments or superficial software wrappers, we test directly alongside real farming clusters, retail showrooms, healthcare facilities, and educational institutes throughout Malwa and Northern India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
              <span className="text-xs font-mono text-[#d4a853]">01 / FIELD EMPIRICISM</span>
              <h4 className="text-base font-bold uppercase text-white">Empirical Agricultural Science</h4>
              <p className="text-xs text-[#c8c4bc] leading-relaxed">
                Direct crop trial data, plant pathology verification, and milk testing mechanics informing machine learning algorithms.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
              <span className="text-xs font-mono text-[#d4a853]">02 / NEURAL COMPUTING</span>
              <h4 className="text-base font-bold uppercase text-white">BCA (AI / ML) Rigor</h4>
              <p className="text-xs text-[#c8c4bc] leading-relaxed">
                Advanced data structures, neural network architectures, and full-stack API pipelines built from first computational principles.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
              <span className="text-xs font-mono text-[#d4a853]">03 / COMMERCIAL PACKAGING</span>
              <h4 className="text-base font-bold uppercase text-white">Creative Storytelling</h4>
              <p className="text-xs text-[#c8c4bc] leading-relaxed">
                Transforming complex engineering pipelines into intuitive visual stories, spatial Three.js sites, and high-converting commercial funnels.
              </p>
            </div>
          </div>
        </section>

        {/* Deployed Systems & Enterprise Proof */}
        <section className="mb-20">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#d4a853] uppercase block mb-1">
                [ 02 // PROOF &amp; DEPLOYED SYSTEMS ]
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                Architected &amp; Deployed Platforms
              </h3>
            </div>
            <span className="text-xs font-mono text-[#d4a853] bg-[#d4a853]/10 border border-[#d4a853]/30 px-3 py-1.5 rounded-full">
              MSME UDYAM-PB-03-0079744
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-[#f0ede6]/10 flex flex-col gap-3">
              <span className="text-xs font-mono text-[#d4a853]">01 / AGRITECH &amp; RURAL ERP</span>
              <h4 className="text-lg font-bold uppercase text-white">FasalDoctor &amp; DoodhHisaab</h4>
              <p className="text-xs text-[#c8c4bc] leading-relaxed">
                FasalDoctor detects plant pathology with offline on-device Edge ML. DoodhHisaab digitizes dairy procurement across rural collection centers with zero internet dependency.
              </p>
              <div className="mt-auto pt-3">
                <Link
                  to="/case-studies/fasal-doctor"
                  className="text-xs font-mono text-[#d4a853] hover:underline flex items-center gap-1 uppercase"
                >
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-[#f0ede6]/10 flex flex-col gap-3">
              <span className="text-xs font-mono text-[#d4a853]">02 / AI AUTOMATION &amp; CRM</span>
              <h4 className="text-lg font-bold uppercase text-white">Meta Cloud &amp; Voice Agents</h4>
              <p className="text-xs text-[#c8c4bc] leading-relaxed">
                Direct Meta WhatsApp Cloud API webhooks with zero monthly reseller markup. Automated appointment booking, lead qualification, and multilingual voice telephony.
              </p>
              <div className="mt-auto pt-3">
                <Link
                  to="/services"
                  className="text-xs font-mono text-[#d4a853] hover:underline flex items-center gap-1 uppercase"
                >
                  View 15+ Industry Hubs <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-[#f0ede6]/10 flex flex-col gap-3">
              <span className="text-xs font-mono text-[#d4a853]">03 / SPATIAL WEB PLATFORMS</span>
              <h4 className="text-lg font-bold uppercase text-white">₹5k–₹20k Flat-Rate Websites</h4>
              <p className="text-xs text-[#c8c4bc] leading-relaxed">
                Ultra-fast 120fps Three.js 3D spatial showcases, zero-CLS architecture, and high-conversion editorial typography built without cookie-cutter templates.
              </p>
              <div className="mt-auto pt-3">
                <Link
                  to="/websites"
                  className="text-xs font-mono text-[#d4a853] hover:underline flex items-center gap-1 uppercase"
                >
                  Explore Live Websites <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Commission & Direct Contact CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-[#121212] via-[#1a1712] to-[#121212] border border-[#d4a853]/35 p-8 sm:p-12 text-center flex flex-col items-center">
          <span className="text-xs font-mono tracking-widest text-[#d4a853] uppercase mb-2">
            DIRECT FOUNDER ACCESS
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight mb-4">
            Commission a Project Directly with the Founders
          </h3>
          <p className="text-sm sm:text-base text-[#f0ede6]/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Speak directly with Gurdharam Jeet Singh and Manveer Singh. No account managers, no agency markup, no outsourced code. Direct engineering clarity from intake to production deployment.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase bg-[#d4a853] text-black font-semibold hover:opacity-90 transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Intake with Founders</span>
            </a>
            <a
              href="mailto:gurination1@gmail.com"
              className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase bg-white/5 text-[#f0ede6] border border-white/15 hover:bg-white/10 transition"
            >
              gurination1@gmail.com
            </a>
            <Link
              to="/websites"
              className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase bg-[#5b8fd4]/10 text-[#79a8e8] border border-[#5b8fd4]/30 hover:bg-[#5b8fd4]/20 transition"
            >
              View Pricing Tiers (₹5k–₹20k)
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

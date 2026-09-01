import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, Smartphone, Server, ArrowRight, ShieldCheck, Zap, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import verticalsData from '../data/verticals.json';
import Footer from '../components/ui/footer';

export default function ServicesHubPage() {
  const whatsappVerticals = (verticalsData as any[]).filter(v => v.type === 'whatsapp-bot');
  const socialVerticals = (verticalsData as any[]).filter(v => v.type === 'social-media-automation');
  const webVerticals = (verticalsData as any[]).filter(v => v.type === 'website-design');

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-[var(--accent-gold)] mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Production Engineering Solutions
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
          AI Automation, Local LLMs & High-End Web Engineering
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Custom software infrastructure engineered for businesses in Punjab, India, and global clients. Zero monthly SaaS seat markups, on-premise data privacy, and sub-second execution speeds.
        </p>
      </div>

      {/* Featured Showcase Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#111] via-[#161f2c] to-[#111] border border-[#d4a853]/40 mb-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#d4a853]/15 border border-[#d4a853]/30 text-[#d4a853] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Curated Digital Flagships & 3D WebGL
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-['Syne']">
            Live Websites, 3D Spatial Engines & AI Platforms
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Explore our curated catalog of production client websites, interactive Three.js 3D environments, and autonomous AI automation engines engineered for modern businesses.
          </p>
        </div>
        <Link
          to="/websites"
          className="px-6 py-3.5 rounded-xl bg-[#d4a853] text-[#080808] font-bold text-sm hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg flex-shrink-0 font-mono"
        >
          Explore Live Websites <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Core Engineering Services */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold font-display text-white mb-8 border-b border-white/10 pb-4">
          Core Engineering Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[var(--accent-gold)] transition-colors">
            <div>
              <Bot className="w-8 h-8 text-[var(--accent-gold)] mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp Business Bots</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Official Meta Cloud API integrations. Automated lead triage, appointment booking, and dynamic catalog delivery.
              </p>
            </div>
            <Link to="/services/whatsapp-business-bot" className="inline-flex items-center gap-2 text-sm text-[var(--accent-gold)] font-medium hover:underline">
              Explore WhatsApp Bots <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[var(--accent-gold)] transition-colors">
            <div>
              <Server className="w-8 h-8 text-[var(--accent-gold)] mb-4" />
              <h3 className="text-xl font-bold mb-2">Local GPU LLM Quantization</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                100% air-gapped 70B parameter open-weights models (vLLM, AWQ, GGUF) compliant with India's DPDP Act 2023.
              </p>
            </div>
            <Link to="/services/local-gpu-llm-quantization" className="inline-flex items-center gap-2 text-sm text-[var(--accent-gold)] font-medium hover:underline">
              Explore Local LLMs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[var(--accent-gold)] transition-colors">
            <div>
              <Globe className="w-8 h-8 text-[var(--accent-gold)] mb-4" />
              <h3 className="text-xl font-bold mb-2">High-End 3D & 2D Websites</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Fast static pre-rendered React platforms compiled with Vite. 60 FPS Three.js WebGL and sub-second FCP.
              </p>
            </div>
            <Link to="/services/web-development" className="inline-flex items-center gap-2 text-sm text-[var(--accent-gold)] font-medium hover:underline">
              Explore Web Platforms <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[var(--accent-gold)] transition-colors">
            <div>
              <Smartphone className="w-8 h-8 text-[var(--accent-gold)] mb-4" />
              <h3 className="text-xl font-bold mb-2">Offline AI Mobile Apps</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Cross-platform Flutter apps with local SQLite databases and on-device TensorFlow Lite machine learning inference.
              </p>
            </div>
            <Link to="/services/offline-ai-app-development" className="inline-flex items-center gap-2 text-sm text-[var(--accent-gold)] font-medium hover:underline">
              Explore Mobile Apps <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 19 Industry Vertical Solutions */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold font-display text-white mb-4">
          All 19 Industry Vertical Solutions
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          Turnkey industry automation architectures engineered for regional commercial enterprises in Punjab and northern India.
        </p>

        <div className="space-y-12">
          {/* WhatsApp Industry Bots */}
          <div>
            <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-4 font-mono uppercase tracking-wider">
              WhatsApp Conversational Automation Bots (12 Verticals)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatsappVerticals.map(v => (
                <Link
                  key={v.id}
                  to={`/services/whatsapp-bot-${v.id}`}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[var(--accent-gold)] hover:bg-white/[0.06] transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-semibold text-sm text-white group-hover:text-[var(--accent-gold)] transition-colors">{v.name}</div>
                    <div className="text-xs text-slate-400 line-clamp-1">{v.painPoint}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[var(--accent-gold)] transition-colors flex-shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Video Automation */}
          <div>
            <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-4 font-mono uppercase tracking-wider">
              Programmatic Video Generation Pipelines (3 Verticals)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialVerticals.map(v => (
                <Link
                  key={v.id}
                  to={`/services/social-media-automation-${v.id}`}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[var(--accent-gold)] hover:bg-white/[0.06] transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-semibold text-sm text-white group-hover:text-[var(--accent-gold)] transition-colors">{v.name}</div>
                    <div className="text-xs text-slate-400 line-clamp-1">{v.painPoint}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[var(--accent-gold)] transition-colors flex-shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </div>

          {/* Website Design Verticals */}
          <div>
            <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-4 font-mono uppercase tracking-wider">
              Custom High-Performance Website Design (4 Verticals)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {webVerticals.map(v => (
                <Link
                  key={v.id}
                  to={`/services/website-design-${v.id}`}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[var(--accent-gold)] hover:bg-white/[0.06] transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-semibold text-sm text-white group-hover:text-[var(--accent-gold)] transition-colors">{v.name}</div>
                    <div className="text-xs text-slate-400 line-clamp-1">{v.painPoint}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[var(--accent-gold)] transition-colors flex-shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantees */}
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Ready to Automate Your Business Operations?</h3>
          <p className="text-slate-400 text-sm max-w-xl">
            Book a direct technical architecture call with Gurdharam Jeet Singh. Receive a clear scope of work, fixed implementation quote, and live demonstration.
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=916280333252&text=Hi%20Gurdharam%2C%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-[var(--accent-gold)] text-black font-bold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Message on WhatsApp
        </a>
      </div>
      <Footer />
    </div>
  );
}

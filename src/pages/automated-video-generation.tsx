import React, { useEffect } from 'react';
import { ArrowLeft, Video, Cpu, Server, Zap, CheckCircle2, MessageCircle, ArrowRight, Code2, LineChart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function AutomatedVideoGeneration() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'd like to discuss building an automated 1080p60 VideoGen engine for our business.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gurdharam.com/services/automated-video-generation-engine#service",
        "name": "Automated 1080p60 Video Generation Engine ($0 Cloud Render Cost)",
        "provider": { "@id": "https://www.gurdharam.com/#organization" },
        "description": "Programmatic 1080p60 video automation engine built with Remotion React video pipelines, FFmpeg NVENC GPU acceleration, and automated YouTube/Social publishing.",
        "areaServed": "Global"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does your video automation engine achieve $0 cloud rendering cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Instead of paying third-party video rendering SaaS APIs ($0.15-$0.45 per minute), we compile Remotion React compositions using FFmpeg NVENC (NVIDIA Hardware Encoding) locally on GPU servers."
            }
          },
          {
            "@type": "Question",
            "name": "Which video formats and aspect ratios are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support 16:9 landscape (YouTube 1080p60/4K), 9:16 vertical (Shorts, Reels, TikTok), and 1:1 square video formats with automated caption and audio waveform overlays."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Portfolio
        </Link>

        {/* Hero Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-[var(--accent-gold)] font-mono text-xs uppercase tracking-widest mb-6">
            <Video size={14} /> Programmatic Video Engine
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            Automated 1080p60 VideoGen Engine <br />
            <span className="text-[var(--accent-gold)]">at $0 Cloud Render Cost</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8 font-medium">
            Transform structured JSON data, news feeds, or product catalogs into dynamic 1080p60 videos automatically using Remotion React components, FFmpeg NVENC GPU rendering, and direct YouTube Data API v3 publishing.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--accent-gold)] text-black font-bold py-3.5 px-8 rounded-full hover:bg-white transition-colors duration-300 shadow-lg min-h-[44px] inline-flex items-center gap-2">
              <MessageCircle size={18} /> Build Video Engine
            </a>
            <Link to="/blog/automated-1080p60-videogen-pipeline" className="border border-white/20 text-white font-semibold py-3.5 px-8 rounded-full hover:border-[var(--accent-gold)] transition-colors duration-300 min-h-[44px] inline-flex items-center gap-2">
              Read Technical Case Study →
            </Link>
          </div>
        </header>

        {/* Performance Grid */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-emerald-400">$0 / Mo</div>
            <div className="text-xs text-slate-400 mt-2">Cloud Render Fees</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-[var(--accent-gold)]">1080p60</div>
            <div className="text-xs text-slate-400 mt-2">Smooth Motion</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-blue-400">8.4x Speed</div>
            <div className="text-xs text-slate-400 mt-2">NVENC GPU Acceleration</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-purple-400">100% Auto</div>
            <div className="text-xs text-slate-400 mt-2">Publishing Pipeline</div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="mb-16 space-y-8">
          <h2 className="text-3xl font-bold font-display text-white">Programmatic Video Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Code2 className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">React &amp; CSS Video Templates</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Design video compositions using familiar React components, Tailwind CSS, SVG animations, and HTML canvas — fully dynamic without fixed SaaS template locks.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Zap className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">FFmpeg NVENC Hardware Encoding</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Offloads H.264 video encoding to NVIDIA GPU hardware (NVENC), rendering 60-second 1080p60 videos in just 7.1 seconds.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Play className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">Dynamic Subtitles &amp; Waveforms</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Parses audio timestamps automatically, generating synchronized word-by-word animated captions and real-time audio visualizer bars.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Server className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">Automated Social Publishing</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Integrates directly with YouTube Data API v3, Instagram Graph API, and TikTok API to upload rendered videos with custom tags, titles, and thumbnails automatically.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Can we run this video generation engine on our own local GPU workstation?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Yes. The entire rendering stack runs locally on Linux or Windows workstations equipped with any modern NVIDIA GPU (RTX 3060, 4070, 4090, or workstation Ada GPUs).
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white mb-2">What content inputs can drive the video automation engine?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The engine ingests REST API JSON payloads, RSS news feeds, Google Sheets, database records, or AI LLM output scripts to produce finished videos automatically.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3 font-display">Build Your Automated Video Engine Today</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-[60ch] mx-auto">
            Stop paying per-minute cloud rendering fees. Scale programmatic 1080p60 video production with zero recurring API costs.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px] shadow-lg active:scale-95">
            <MessageCircle size={18} /> Consult Video Automation Engineer <ArrowRight size={16} />
          </a>
        </div>

        <Footer />
      </div>
    </main>
  );
}

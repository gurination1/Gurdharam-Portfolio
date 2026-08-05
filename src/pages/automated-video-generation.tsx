import React, { useEffect } from 'react';
import { ArrowLeft, Video, Film, Cpu, Zap, ShieldCheck, MessageCircle, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function AutomatedVideoGeneration() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "VideoGen — Automated 1080p60 Video Pipeline ($0 Cloud Cost) | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I want to deploy a VideoGen automated 1080p60 video pipeline for my brand.");

  const features = [
    {
      icon: Film,
      title: "Programmatic Remotion & FFmpeg NVENC",
      desc: "Combines React-based Remotion visual rendering with hardware-accelerated FFmpeg NVENC H.264 encoding for 4.2x real-time video export."
    },
    {
      icon: Zap,
      title: "$0 Cloud API Cost Model",
      desc: "Bypasses $4,500/mo SaaS subscription markups (Runway, Sora, HeyGen) by running self-hosted SDXL, PyTorch, and local TTS engines."
    },
    {
      icon: Layers,
      title: "EBU R128 Sidechain Audio Ducking",
      desc: "Native DSP sidechain compressor automatically ducks background music (-14 LUFS standard) whenever speech audio triggers."
    },
    {
      icon: Cpu,
      title: "Word-Timestamped ASS Subtitles",
      desc: "Parses precise speech timestamps from Whisper C++ and Kokoro TTS streams to burn word-level karaoke caption animations dynamically."
    }
  ];

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Portfolio
        </Link>

        {/* Hero Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-[var(--accent-gold)] font-mono text-xs uppercase tracking-widest mb-6">
            <Video size={14} /> Autonomous Media Infrastructure
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            VideoGen Pipeline Engine <br />
            <span className="text-[var(--accent-gold)]">1080p60 Prompt-to-MP4 at $0 API Cost</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8">
            Self-hosted programmatic video generation engine for YouTube Shorts, Reels, and educational content. Combines Remotion, PyTorch SDXL, NumPy audio DSP, and FFmpeg NVENC encoding.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 min-h-[44px]"
            >
              <MessageCircle size={18} /> Deploy Video Engine on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </header>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold font-display text-white mb-8 flex items-center gap-3">
            <Cpu className="text-[var(--accent-gold)]" size={24} /> Engine Technical Specs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--accent-gold)]/40 transition-colors">
                  <Icon className="text-[var(--accent-gold)] mb-4" size={28} />
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{f.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-[var(--accent-gold)]/30 text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Automate Your Media Output Today
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Stop manually rendering video edits. Deploy a self-hosted video pipeline that outputs 1080p60 content automatically 24/7.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 min-h-[44px]"
          >
            <MessageCircle size={18} /> Start Video Engine Setup <ArrowRight size={16} />
          </a>
        </section>

        <Footer />
      </div>
    </main>
  );
}

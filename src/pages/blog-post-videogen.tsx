import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, ShieldCheck, Film, Video, Cpu, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import AuthorBioCard from '@/components/ui/AuthorBioCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostVideoGen() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Automated 1080p60 VideoGen Pipeline ($0 Cloud Cost) | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your VideoGen pipeline case study.");

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <article className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-8 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-slate-400 mb-6">
            <span className="px-3 py-1 border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 rounded-full text-[var(--accent-gold)] uppercase tracking-wider">VideoGen Engine</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> July 28, 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 8 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            yt-auto: Scaling Automated 1080p60 Video Pipelines at $0 Cloud Cost
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            How we built a self-hosted media pipeline combining Remotion, PyTorch SDXL, NumPy audio DSP, word-timestamped ASS subtitles, and hardware-accelerated FFmpeg NVENC encoding.
          </p>
        </header>

        <AuthorBioCard />

        <div className="prose prose-invert max-w-none my-12 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4">1. Eliminating Monthly SaaS API Overhead</h2>
            <p>
              Producing short-form videos typically incurs recurring cloud API fees (OpenAI, ElevenLabs, Runway, Stock video platforms).
            </p>
            <p>
              yt-auto replaces paid APIs with an open-source pipeline: PyTorch SDXL for visuals, Gemini 2.5 Flash grounded KeyPools for scripts, NumPy procedural sine waves for background music, and FFmpeg NVENC superfast encoding for 1.8-minute 1080p60 exports.
            </p>
          </section>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12">
          <h3 className="text-2xl font-bold text-white mb-3">Automate Your Brand Video Engine</h3>
          <p className="text-slate-300 text-sm mb-6">Deploy a self-hosted video pipeline and eliminate monthly SaaS fees.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px]">
            <MessageCircle size={16} /> Deploy Video Engine <ArrowRight size={14} />
          </a>
        </div>

        <Footer />
      </article>
    </main>
  );
}

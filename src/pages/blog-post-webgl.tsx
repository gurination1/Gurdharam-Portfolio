import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, ShieldCheck, Globe, Cpu, Layers, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import AuthorBioCard from '@/components/ui/AuthorBioCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostWebGL() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NEOVRIT: 60 FPS WebGL 3D Spatial Digital Twins | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your WebGL 3D Spatial Digital Twin case study.");

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <article className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-8 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-slate-400 mb-6">
            <span className="px-3 py-1 border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 rounded-full text-[var(--accent-gold)] uppercase tracking-wider">WebGL & 3D Spatial</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> July 18, 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 7 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            NEOVRIT: Building 60 FPS WebGL 3D Spatial Digital Twins with Three.js & GSAP
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            High-ticket real estate and B2B SaaS digital twin engine built on Three.js r128, DRACO geometry compression (93% size reduction), and GSAP ScrollTrigger camera lerp smoothing.
          </p>
        </header>

        <AuthorBioCard />

        <div className="prose prose-invert max-w-none my-12 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4">1. High-Ticket 3D Web Conversion</h2>
            <p>
              High-end real estate, industrial infrastructure, and architectural design firms require web-based 3D digital twins to present physical projects to global buyers without long load times or lag.
            </p>
            <p>
              NEOVRIT compresses 300MB+ CAD/BIM models into 12.4MB DRACO meshes, rendering at a locked 60 FPS across desktop and mobile browsers.
            </p>
          </section>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12">
          <h3 className="text-2xl font-bold text-white mb-3">Build Your 3D Web Experience</h3>
          <p className="text-slate-300 text-sm mb-6">Elevate your product with interactive 60 FPS 3D spatial web design.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px]">
            <MessageCircle size={16} /> Consult 3D Web Architect <ArrowRight size={14} />
          </a>
        </div>

        <Footer />
      </article>
    </main>
  );
}

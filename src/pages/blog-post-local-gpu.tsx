import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, ShieldCheck, Cpu, Server, Lock, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import AuthorBioCard from '@/components/ui/AuthorBioCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostLocalGPU() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Local GPU LLM Quantization & MCP Legal Server Case Study | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your Local GPU LLM & MCP Legal Server case study.");

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <article className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-8 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-slate-400 mb-6">
            <span className="px-3 py-1 border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 rounded-full text-[var(--accent-gold)] uppercase tracking-wider">Local GPU & MCP</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> August 2, 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 9 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            Local GPU LLM Quantization & Model Context Protocol (MCP) Legal Server
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Running 70B parameter open-weights models (Qwen 2.5, Llama 3.3) 100% air-gapped on single workstation GPUs with AWQ, GGUF Q4_K_M, FlashAttention-2, and custom MCP statutory tools.
          </p>
        </header>

        <AuthorBioCard />

        <div className="prose prose-invert max-w-none my-12 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4">1. Enterprise Privacy & VRAM Limits</h2>
            <p>
              Legal enterprises handling confidential records, non-disclosure agreements, and statutory compliance cannot transmit client data to public cloud LLMs under DPDP regulations. However, running raw 70B models in FP16 requires over 140GB VRAM.
            </p>
            <p>
              By applying AWQ (Activation-aware Weight Quantization) and GGUF Q4_K_M schemes, we compressed Qwen 2.5 72B down to 38.2GB VRAM while preserving 98.4% of FP16 legal reasoning perplexity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4">2. Model Context Protocol (MCP) Tools</h2>
            <p>
              The server exposes Anthropic MCP tools (`search_statutes`, `analyze_contract_risk`, `verify_data_deletion`) over `stdio` and `SSE` transports for seamless AI agent orchestration.
            </p>
          </section>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12">
          <h3 className="text-2xl font-bold text-white mb-3">Deploy Private Local GPU LLMs Today</h3>
          <p className="text-slate-300 text-sm mb-6">Keep your data 100% private with air-gapped LLM endpoints on your own hardware.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px]">
            <MessageCircle size={16} /> Consult GPU Architect <ArrowRight size={14} />
          </a>
        </div>

        <Footer />
      </article>
    </main>
  );
}

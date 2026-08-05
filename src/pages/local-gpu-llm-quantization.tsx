import React, { useEffect } from 'react';
import { ArrowLeft, Cpu, Server, ShieldCheck, Database, Zap, Lock, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function LocalGPULLMQuantization() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Air-Gapped Local GPU LLM & MCP Legal Server | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I need to deploy an Air-Gapped Local GPU LLM or MCP Legal Server on our private hardware.");

  const features = [
    {
      icon: Cpu,
      title: "vLLM & llama.cpp High-Throughput Inference",
      desc: "Optimized AWQ, GGUF (Q4_K_M/Q8_0), and GPTQ quantization kernels achieving 85+ tokens/sec on single workstation GPUs."
    },
    {
      icon: Lock,
      title: "100% Air-Gapped Data Privacy",
      desc: "Zero cloud API calls. All prompts, client records, and legal contracts stay inside your local VRAM and private network."
    },
    {
      icon: Database,
      title: "Model Context Protocol (MCP) Server",
      desc: "Fully compliant with Anthropic MCP specifications. Exposes statutory databases, risk audit tools, and vector RAG indices via stdio and SSE."
    },
    {
      icon: Zap,
      title: "FlashAttention-2 & PagedAttention",
      desc: "Eliminates KV-cache memory fragmentation and enables concurrent multi-agent dynamic decoding up to 32,768 context windows."
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
            <Server size={14} /> Air-Gapped Private GPU Infrastructure
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            Local GPU LLM Quantization <br />
            <span className="text-[var(--accent-gold)]">& MCP Legal/Compliance Servers</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8">
            Run 70B parameter open-weights models (Qwen 2.5, Llama 3.3) 100% air-gapped on single RTX 4090/6000 GPUs. Eliminate monthly SaaS API bills while maintaining complete compliance under DPDP and legal privilege laws.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 min-h-[44px]"
            >
              <MessageCircle size={18} /> Consult GPU Architect on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </header>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold font-display text-white mb-8 flex items-center gap-3">
            <Cpu className="text-[var(--accent-gold)]" size={24} /> Technical Quantization Architecture
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
            Need an Air-Gapped Private LLM Setup?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Protect confidential company data and stop paying cloud API tokens. We install, quantize, and tune private LLM endpoints on your own hardware.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 min-h-[44px]"
          >
            <MessageCircle size={18} /> Schedule Private GPU Consult <ArrowRight size={16} />
          </a>
        </section>

        <Footer />
      </div>
    </main>
  );
}

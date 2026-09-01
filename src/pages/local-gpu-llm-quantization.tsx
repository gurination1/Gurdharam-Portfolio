import React, { useEffect } from 'react';
import { ArrowLeft, Server, Lock, Cpu, Database, Zap, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Terminal, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function LocalGPULLMQuantization() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'd like to discuss setting up an Air-Gapped Local GPU LLM & MCP Server for our enterprise.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gurdharam.com/services/local-gpu-llm-quantization#service",
        "name": "Air-Gapped Local GPU LLM Quantization & MCP Legal Server Deployment",
        "provider": { "@id": "https://www.gurdharam.com/#organization" },
        "description": "On-premise air-gapped 70B parameter open-weights LLM deployment (vLLM, AWQ, GGUF 4-bit) with Anthropic Model Context Protocol (MCP) server integration for enterprise legal and DPDP compliance.",
        "areaServed": "Global"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does an air-gapped local GPU LLM ensure DPDP compliance for law firms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All model execution, embeddings, and document parsing run 100% inside your physical GPU hardware with zero outbound internet endpoints, ensuring zero cloud PII data leakage and 100% DPDP Act compliance."
            }
          },
          {
            "@type": "Question",
            "name": "What GPU hardware is needed to run a 70B open-weights model locally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A single NVIDIA RTX 6000 Ada (48GB VRAM) or a dual RTX 4090 system (48GB combined VRAM) runs AWQ / GGUF Q4_K_M 70B models at 25+ tokens per second with 32K context windows."
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
            <Server size={14} /> Air-Gapped Private GPU Infrastructure
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            Local GPU LLM Quantization <br />
            <span className="text-[var(--accent-gold)]">&amp; MCP Legal/Compliance Servers</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8 font-medium">
            Run 70B parameter open-weights models (Qwen 2.5, Llama 3.3) 100% air-gapped on workstation GPUs (RTX 6000 Ada 48GB or dual RTX 4090). Eliminate monthly SaaS API bills while maintaining complete compliance under DPDP Act and advocate-client privilege laws.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--accent-gold)] text-black font-bold py-3.5 px-8 rounded-full hover:bg-white transition-colors duration-300 shadow-lg min-h-[44px] inline-flex items-center gap-2">
              <MessageCircle size={18} /> Schedule AI Architecture Audit
            </a>
            <Link to="/blog/local-gpu-llm-quantization-mcp-legal-server" className="border border-white/20 text-white font-semibold py-3.5 px-8 rounded-full hover:border-[var(--accent-gold)] transition-colors duration-300 min-h-[44px] inline-flex items-center gap-2">
              Read Engineering Case Study →
            </Link>
          </div>
        </header>

        {/* Hardware Benchmarks Grid */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-[var(--accent-gold)]">70B Params</div>
            <div className="text-xs text-slate-400 mt-2">Open Weights Model</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-emerald-400">100% Offline</div>
            <div className="text-xs text-slate-400 mt-2">Air-Gapped Privacy</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-blue-400">25.4 Tok/s</div>
            <div className="text-xs text-slate-400 mt-2">70B Inference Speed</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-purple-400">MCP Protocol</div>
            <div className="text-xs text-slate-400 mt-2">Local Vector RAG</div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="mb-16 space-y-8">
          <h2 className="text-3xl font-bold font-display text-white">Local AI Engineering Stack</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Cpu className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">AWQ &amp; GGUF 4-Bit Quantization</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Compresses 140GB FP16 model weights down to 38.5GB VRAM, allowing full 70B parameter inference to run smoothly on workstation GPUs without memory overflow.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Lock className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">DPDP Act Compliance</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Zero third-party API data processors. Confidential client records, contracts, and internal communications never leave your physical premises.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Database className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">Model Context Protocol (MCP) Server</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Implements Anthropic MCP specification connecting local vector stores (ChromaDB / pgvector) to legal assistant UIs over secure local stdio streams.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Zap className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">FlashAttention-2 &amp; PagedAttention</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                vLLM kernel optimizations eliminate KV-cache memory fragmentation, supporting dynamic 32,768 context windows and concurrent local multi-user sessions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Can local 70B LLMs match cloud SaaS AI models in contract analysis accuracy?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Yes. Qwen 2.5 70B Instruct and Llama 3.3 70B score at par with GPT-4o on legal reasoning and document extraction tasks when paired with localized RAG.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white mb-2">What is the upfront hardware setup cost for an air-gapped GPU server?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A workstation equipped with dual RTX 4090 GPUs (48GB VRAM) costs ~$4,500 - $6,500 as a one-time capital expense, replacing recurring $1,000+/month SaaS API bills forever.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3 font-display">Build Your Air-Gapped Local GPU AI Server</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-[60ch] mx-auto">
            Eliminate cloud data leakage liabilities under DPDP. Deploy 100% private 70B open-weights AI workstations today.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px] shadow-lg active:scale-95">
            <MessageCircle size={18} /> Consult Local AI Architect <ArrowRight size={16} />
          </a>
        </div>

        <Footer />
      </div>
    </main>
  );
}

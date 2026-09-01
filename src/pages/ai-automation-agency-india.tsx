import React, { useEffect } from 'react';
import { ArrowLeft, Cpu, Zap, ShieldCheck, Layers, Search, ArrowRight, CheckCircle2, MessageSquare, Bot, Workflow, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function AIAutomationAgencyIndia() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Automation Agency India | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'd like to hire an AI Automation Agency in India to automate our business workflows.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gurdharam.com/services/ai-automation-agency-india#service",
        "name": "AI Automation Agency India — Custom LLM & Workflow Automation",
        "provider": { "@id": "https://www.gurdharam.com/#organization" },
        "description": "Leading AI Automation Agency in India. Build custom n8n, Make, WhatsApp API, AI phone bots, and multi-agent LLM business workflows.",
        "areaServed": ["India", "Global"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does an AI Automation Agency provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build custom LLM agents, automated WhatsApp lead qualification bots, n8n/Make workflow pipelines, CRM data sync, and sub-300ms AI voice phone callers."
            }
          },
          {
            "@type": "Question",
            "name": "How much operational cost can AI automation save?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our clients typically reduce manual repetitive data entry, lead qualification, and customer support workloads by 70% to 90% while operating 24/7."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 rounded-full text-[var(--accent-gold)] font-mono text-xs uppercase tracking-wider">AI Automation · n8n · Make · WhatsApp API · Agents</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            AI Automation Agency in India <br />
            <span className="text-[var(--accent-gold)]">Custom Autonomous AI Workflows</span>
          </h1>
          <div className="bg-card border border-[var(--accent-gold)]/20 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              Gurdharam Jeet Singh leads a top-tier AI Automation Agency in India. Engineering autonomous multi-agent LLM pipelines, n8n/Make workflow integrations, WhatsApp Cloud API bots, and automated AI telephony callers that scale sales without increasing headcount.
            </p>
          </div>
        </header>

        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: '70-90%', label: 'Manual task reduction', icon: <Zap size={20} /> },
            { stat: '24/7 AI', label: 'Continuous lead processing', icon: <Bot size={20} /> },
            { stat: '0 SaaS', label: 'Direct API costs with zero markup', icon: <Cpu size={20} /> },
            { stat: 'n8n & Make', label: 'Enterprise workflow automation', icon: <Workflow size={20} /> }
          ].map(({ stat, label, icon }) => (
            <div key={stat} className="bg-card border border-white/5 p-5 rounded-2xl text-center">
              <div className="text-[var(--accent-gold)] mb-2 flex justify-center">{icon}</div>
              <div className="text-2xl font-display font-bold text-white mb-1">{stat}</div>
              <div className="text-secondary text-xs leading-tight">{label}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">AI Automation Solutions for Indian & Global Enterprises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Workflow className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">n8n & Make Workflow Automation</h3>
              <p className="text-secondary text-sm leading-relaxed">Connect your CRM, PostgreSQL database, Google Sheets, Gmail, and payment gateways into autonomous self-healing n8n and Make workflows.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Bot className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">WhatsApp & Conversational AI Bots</h3>
              <p className="text-secondary text-sm leading-relaxed">Official Meta Cloud API integration with custom RAG vector search, instant PDF catalog delivery, and automated appointment scheduling.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-card border border-[var(--accent-gold)]/20 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Hire an Expert AI Automation Agency in India</h2>
          <p className="text-secondary mb-6 leading-relaxed">Let's audit your business processes and build a custom AI automation strategy.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
            <MessageSquare size={20} /> Discuss AI Automation on WhatsApp
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}

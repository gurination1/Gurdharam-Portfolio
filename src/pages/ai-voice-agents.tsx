import React, { useEffect } from 'react';
import { ArrowLeft, Mic, Phone, Cpu, Zap, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function AIVoiceAgents() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sub-300ms Indic Voice AI Telephony Agents | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'm interested in building a Sub-300ms Indic Voice AI Telephony Agent for my business.");

  const features = [
    {
      icon: Zap,
      title: "Sub-300ms Turn-Taking Latency",
      desc: "By combining low-latency WebSocket streaming with pre-warmed connections and AsyncIO frame pipelines, our voice callers respond with human-paced naturalness."
    },
    {
      icon: Globe,
      title: "Sarvam AI Indic Language Engine",
      desc: "Fluent in Hindi, Punjabi, Hinglish, and English. Handles natural code-switching and regional accents effortlessly over standard 8kHz PSTN phone lines."
    },
    {
      icon: Phone,
      title: "Direct Telephony Integration",
      desc: "Connects directly to Exotel, Twilio, and SIP trunks. Converts raw 8kHz SLIN PCM audio chunks into instant AI speech without costly third-party reseller markups."
    },
    {
      icon: ShieldCheck,
      title: "Zero Acoustic Echo & Barge-In Support",
      desc: "Integrated Silero VAD state machine and volume gain scaling (-5.2dB) prevent feedback loops while allowing callers to interrupt naturally mid-sentence."
    }
  ];

  const useCases = [
    {
      title: "Healthcare Clinic Appointment Booking",
      desc: "Instantly handles incoming OPD patient calls, qualifies symptoms, checks live doctor calendars in PostgreSQL, and sends WhatsApp booking confirmation receipts."
    },
    {
      title: "Coaching & School Parent Desk Triage",
      desc: "Answers parent calls regarding admission fees, course syllabi, and test schedules in Punjabi and Hinglish 24/7 without manual front-desk staff."
    },
    {
      title: "Real Estate Lead Qualification",
      desc: "Engages inbound property buyers over phone calls, collects budget parameters, schedules site visits, and syncs lead notes directly to CRM webhooks."
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
            <Mic size={14} /> Sub-300ms Telephony Voice AI
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            Sarvam Indic Voice AI <br />
            <span className="text-[var(--accent-gold)]">& Real-Time Telephony Agents</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8">
            Replace slow, expensive call centers with human-paced voice AI callers fluent in Hindi, Punjabi, and English. Engineered on Pipecat, Sarvam AI, and Exotel SIP webhooks to achieve sub-300ms turn-taking latency with zero cloud platform markups.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 min-h-[44px]"
            >
              <MessageCircle size={18} /> Consult Voice Architect on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </header>

        {/* Architectural Highlights */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold font-display text-white mb-8 flex items-center gap-3">
            <Cpu className="text-[var(--accent-gold)]" size={24} /> Telephony Engineering Breakdown
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

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold font-display text-white mb-8 flex items-center gap-3">
            <Server className="text-[var(--accent-gold)]" size={24} /> High-Impact Industry Deployments
          </h2>
          <div className="space-y-6">
            {useCases.map((u, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{u.title}</h3>
                  <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">{u.desc}</p>
                </div>
                <span className="px-4 py-2 rounded-xl bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/20 font-mono text-xs shrink-0 flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> Sub-300ms E2E
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Direct CTA */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-[var(--accent-gold)]/30 text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Ready to Deploy Custom Voice AI Callers?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Eliminate $20/hr reseller markups. Get a direct SIP/PSTN voice AI caller running on your own server infrastructure in 7 days.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 min-h-[44px]"
          >
            <MessageCircle size={18} /> Start WhatsApp Voice Consultation <ArrowRight size={16} />
          </a>
        </section>

        <Footer />
      </div>
    </main>
  );
}

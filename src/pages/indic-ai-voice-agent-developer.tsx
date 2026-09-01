import React, { useEffect } from 'react';
import { ArrowLeft, PhoneCall, Mic, Zap, Server, ShieldCheck, Globe, CheckCircle2, MessageSquare, Radio, Cpu, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function IndicAIVoiceAgentDeveloper() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Voice AI Agent Developer India | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'd like to hire a Voice AI Agent Developer to build AI Phone Callers for our business.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gurdharam.com/services/indic-ai-voice-agent-developer#service",
        "name": "Voice AI Agent Developer & Indic AI Phone Assistant Engineer India",
        "provider": { "@id": "https://www.gurdharam.com/#organization" },
        "description": "Hire expert Voice AI Agent Developer in India. Building sub-300ms Indic voice assistants (Hindi, Punjabi, English) over PSTN phone lines & SIP trunks.",
        "areaServed": ["India", "Global"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What languages do your Voice AI phone agents support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Indic Voice AI agents natively understand and speak Hindi, Punjabi, Indian English, and regional dialects using Sarvam AI and custom neural TTS models."
            }
          },
          {
            "@type": "Question",
            "name": "Can the AI voice bot integrate with existing Indian telephony gateways?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We connect natively to Exotel, Tata Tele, Twilio, Plivo, and private Asterisk/FreeSWITCH PBX SIP trunks for automated inbound/outbound calls."
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
          <ArrowLeft className="mr-2" size={16} /> Back to Portfolio
        </Link>
        
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 rounded-full text-[var(--accent-gold)] font-mono text-xs uppercase tracking-wider">Voice AI · Sarvam Indic · SIP Telephony · Sub-300ms</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Voice AI Agent Developer in India <br />
            <span className="text-[var(--accent-gold)]">Sub-300ms Indic AI Phone Assistants</span>
          </h1>
          <div className="bg-card border border-[var(--accent-gold)]/20 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              Gurdharam Jeet Singh engineers autonomous Voice AI phone callers, virtual receptionists, and Indic voice assistants for medical clinics, coaching centers, real estate agencies, and customer support desks across India.
            </p>
          </div>
        </header>

        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: '<290ms', label: 'Turn-taking latency over PSTN', icon: <Zap size={20} /> },
            { stat: 'Indic NLP', label: 'Hindi, Punjabi & Indian English', icon: <Globe size={20} /> },
            { stat: 'SIP / PSTN', label: 'Exotel, Tata Tele & Twilio integrations', icon: <PhoneCall size={20} /> },
            { stat: '24/7 AI', label: 'Automated appointment & OPD booking', icon: <Radio size={20} /> }
          ].map(({ stat, label, icon }) => (
            <div key={stat} className="bg-card border border-white/5 p-5 rounded-2xl text-center">
              <div className="text-[var(--accent-gold)] mb-2 flex justify-center">{icon}</div>
              <div className="text-2xl font-display font-bold text-white mb-1">{stat}</div>
              <div className="text-secondary text-xs leading-tight">{label}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Voice AI Capabilities & Industry Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <PhoneCall className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">AI Virtual Receptionists for Clinics</h3>
              <p className="text-secondary text-sm leading-relaxed">Automate 24/7 patient call answering, OPD token allocation, and appointment reminders without human reception desk delays.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Mic className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">Outbound AI Lead Qualifier Bots</h3>
              <p className="text-secondary text-sm leading-relaxed">Convert Facebook/Google ad leads instantly. Our AI phone callers dial leads within 5 seconds of form submission in native Hindi or Punjabi.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-card border border-[var(--accent-gold)]/20 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Build a Custom Voice AI Agent in India</h2>
          <p className="text-secondary mb-6 leading-relaxed">Discuss your telephony workflow, language requirements, and SIP integration scope.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
            <MessageSquare size={20} /> Discuss Voice AI on WhatsApp
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}

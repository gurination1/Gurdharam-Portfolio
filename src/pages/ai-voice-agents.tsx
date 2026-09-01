import React, { useEffect } from 'react';
import { ArrowLeft, PhoneCall, Mic, Zap, Server, ShieldCheck, Globe, CheckCircle2, MessageCircle, ArrowRight, Activity, Radio, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function AIVoiceAgents() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Voice Agent Developer India | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'd like to discuss building Sub-300ms Voice AI Telephony Agents for our business.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gurdharam.com/services/ai-voice-agents#service",
        "name": "Sub-300ms Voice AI Telephony Agents & Conversational Voice Bots",
        "provider": { "@id": "https://www.gurdharam.com/#organization" },
        "description": "Full-duplex sub-300ms conversational Voice AI agents built with Sarvam Indic models, SIP trunking, WebRTC, and Silero VAD over PSTN phone networks.",
        "areaServed": "Global"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes your voice AI agents faster than standard cloud voice bots?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We stream 8kHz audio frames over WebSockets, run Silero Voice Activity Detection (VAD) for instant interruption handling, and pipe token-streaming local LLMs directly into Sarvam Bulbul neural TTS, achieving <290ms turn-taking latency."
            }
          },
          {
            "@type": "Question",
            "name": "Can the voice agent connect directly to our existing phone lines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our telephony bridge connects natively to Exotel, Tata Tele, Twilio, Plivo, or your private Asterisk/FreeSWITCH PBX via SIP trunks."
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
            <PhoneCall size={14} /> Low-Latency Conversational Telephony
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            Sub-300ms Conversational Voice AI <br />
            <span className="text-[var(--accent-gold)]">&amp; Indic Telephony Agents</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8 font-medium">
            Deploy ultra-fast, natural conversational voice callers for inbound support, outbound lead qualification, appointment booking, and debt collection over PSTN phone lines in Hinglish, Punjabi, and 10+ regional Indian languages.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-[#080808] font-black py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.45)] min-h-[48px] inline-flex items-center gap-2.5 text-base border-2 border-[#25D366] active:scale-95"
            >
              <MessageCircle size={20} className="text-[#080808]" />
              <span>Schedule Voice Demo</span>
            </a>
            <Link
              to="/blog/sarvam-indic-voice-ai-telephony-agent"
              className="bg-white/10 border border-white/25 text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 min-h-[48px] inline-flex items-center gap-2 text-base backdrop-blur-md"
            >
              <span>Read Architecture Blueprint</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </header>

        {/* Benchmarks Grid */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-[var(--accent-gold)]">&lt; 290 ms</div>
            <div className="text-xs text-slate-400 mt-2">Turn-Taking Latency</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-emerald-400">10+ Languages</div>
            <div className="text-xs text-slate-400 mt-2">Indic &amp; Code-Switching</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-blue-400">100% Duplex</div>
            <div className="text-xs text-slate-400 mt-2">Interruption Handling</div>
          </div>
          <div className="p-6 bg-card border border-white/10 rounded-3xl">
            <div className="text-3xl font-bold text-purple-400">SIP &amp; PSTN</div>
            <div className="text-xs text-slate-400 mt-2">Direct Phone Connectivity</div>
          </div>
        </section>

        {/* Capability Modules */}
        <section className="mb-16 space-y-8">
          <h2 className="text-3xl font-bold font-display text-white">Voice AI Capabilities &amp; Telephony Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Zap className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">Instant Human Interruption (VAD)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Silero Voice Activity Detection pauses AI speech mid-sentence the millisecond the caller starts speaking, eliminating unnatural speech collisions.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Globe className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">Native Indic Code-Switching</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Powered by Sarvam Saaras &amp; Bulbul models, callers can switch seamlessly between English, Hindi, and Punjabi mid-sentence without losing context.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <PhoneCall className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">Live Human Call Transfer</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                When a complex inquiry or high-value deal occurs, the bot executes a SIP REFER payload, transferring the live PSTN call to your agent team in &lt;2 seconds.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <Activity className="text-[var(--accent-gold)] mb-4" size={28} />
              <h3 className="font-bold text-white text-xl mb-2">Real-Time CRM &amp; API Actions</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                During the phone call, the voice bot executes backend function calls to check database inventory, book calendar slots, or query customer account balances.
              </p>
            </div>
          </div>
        </section>

        {/* Supported Telephony Infrastructure */}
        <section className="mb-16 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Supported Telephony &amp; Cloud PBX Networks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono text-sm text-slate-300">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 font-bold text-white">Exotel Telecom</div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 font-bold text-white">Tata Tele SIP</div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 font-bold text-white">Twilio Media Streams</div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 font-bold text-white">Asterisk / FreeSWITCH</div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Are Voice AI callers compliant with TRAI DLT regulations in India?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Yes. Our SIP integrations enforce strict TRAI DLT registered headers, DND registry scrubbing, and explicit opt-out prompts on outbound campaigns.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white mb-2">What is the cost structure for running sub-300ms voice AI calls?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Because we deploy open-weights models and direct SIP trunks without third-party SaaS middleman markups, per-minute voice execution costs are reduced by up to 70%.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3 font-display">Deploy Sub-300ms Voice AI Telephony</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-[60ch] mx-auto">
            Ready to deploy ultra-fast conversational voice callers for your business?
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px] shadow-lg active:scale-95">
            <MessageCircle size={18} /> Consult Voice AI Architect <ArrowRight size={16} />
          </a>
        </div>

        <Footer />
      </div>
    </main>
  );
}

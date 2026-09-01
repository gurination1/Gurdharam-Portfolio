import React, { useEffect } from 'react';
import { ArrowLeft, PhoneCall, Mic, Zap, Server, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

export default function MultilingualVoiceAI() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gurdharam.com/services/multilingual-voice-ai-telephony#service",
        "name": "Sub-300ms Multilingual Sarvam Indic Voice AI Telephony Agents",
        "provider": { "@id": "https://www.gurdharam.com/#organization" },
        "description": "Custom sub-300ms latency voice AI telephony agents built with Sarvam Indic models, WebRTC, SIP trunking, and PSTN integration for Indian languages.",
        "areaServed": "India"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How low is the voice latency for Sarvam Indic voice AI callers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By integrating WebRTC audio streaming, WebSocket speech-to-text (STT), streaming local LLM inference, and instant TTS, we achieve sub-300ms end-to-end turn-taking latency."
            }
          },
          {
            "@type": "Question",
            "name": "Which Indian languages and code-mixed dialects are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support Hindi, Hinglish, Punjabi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, and Malayalam with full code-switching capability."
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

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-[var(--accent-gold)] font-mono text-xs uppercase tracking-widest mb-6">
            <PhoneCall size={14} /> Low-Latency Conversational Voice AI
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            Sub-300ms Multilingual Voice AI <br />
            <span className="text-[var(--accent-gold)]">& Sarvam Indic Telephony Agents</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8">
            Deploy ultra-fast, natural conversational voice agents for inbound support, outbound lead qualification, and debt recovery. Integrated directly with SIP trunks, PSTN phone networks, and Sarvam Indic models for seamless Hinglish and Punjabi dialogues.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/#contact" className="bg-[var(--accent-gold)] text-black font-bold py-3.5 px-8 rounded-full hover:bg-white transition-colors duration-300 shadow-lg">
              Build Your Voice Agent
            </Link>
            <Link to="/blog/sarvam-indic-voice-ai-telephony-agent" className="border border-white/20 text-white font-semibold py-3.5 px-8 rounded-full hover:border-[var(--accent-gold)] transition-colors duration-300">
              Read Architecture Case Study
            </Link>
          </div>
        </header>

        {/* Feature Grid */}
        <section className="mb-16 grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-white/10 p-8 rounded-3xl">
            <Zap className="text-[var(--accent-gold)] mb-4" size={32} />
            <h3 className="font-bold text-white text-xl mb-2">Sub-300ms Turn-Taking</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Streaming WebSockets and VAD (Voice Activity Detection) allow interruption handling and human-like natural conversation loops.
            </p>
          </div>

          <div className="bg-card border border-white/10 p-8 rounded-3xl">
            <Globe className="text-[var(--accent-gold)] mb-4" size={32} />
            <h3 className="font-bold text-white text-xl mb-2">Code-Mixed Indic Dialects</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Flawlessly parses Hinglish, Punjabi, and regional dialect code-switching without losing conversational context.
            </p>
          </div>

          <div className="bg-card border border-white/10 p-8 rounded-3xl">
            <PhoneCall className="text-[var(--accent-gold)] mb-4" size={32} />
            <h3 className="font-bold text-white text-xl mb-2">PSTN & SIP Trunking</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connects to Exotel, Twilio, Tata Tele, or custom Asterisk/FreeSWITCH PBX setups for direct mobile phone call routing.
            </p>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="mb-16 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Technical Voice Stack Architecture</h2>
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[var(--accent-gold)] shrink-0 mt-1" size={18} />
              <span><strong>Audio Transport:</strong> Opus/PCM WebRTC frames piped over bi-directional WebSockets.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[var(--accent-gold)] shrink-0 mt-1" size={18} />
              <span><strong>Speech-to-Text (STT):</strong> Sarvam Saaras / Whisper Live streaming STT.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[var(--accent-gold)] shrink-0 mt-1" size={18} />
              <span><strong>LLM Reasoning:</strong> Fine-tuned Llama 3.3 70B / Qwen 2.5 streaming token responses.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[var(--accent-gold)] shrink-0 mt-1" size={18} />
              <span><strong>Text-to-Speech (TTS):</strong> Sarvam Bulbul neural TTS producing expressive, natural Indian voices.</span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Can the voice AI handle background noise or call interruptions?</h3>
              <p className="text-sm text-slate-300">
                Yes. Built-in Silero VAD (Voice Activity Detection) immediately pauses AI speech output the instant the human user speaks, maintaining true human-like conversation flow.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white mb-2">Is voice call data compliant under TRAI DLT guidelines?</h3>
              <p className="text-sm text-slate-300">
                Yes. Our SIP telephony integration complies with TRAI regulations, DLT registered sender IDs, and opt-out preferences.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

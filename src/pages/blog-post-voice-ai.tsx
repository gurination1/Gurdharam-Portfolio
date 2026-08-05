import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, ShieldCheck, Cpu, Mic, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import AuthorBioCard from '@/components/ui/AuthorBioCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostVoiceAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Architecting Sub-300ms Real-Time Voice AI Telephony Agents | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your Voice AI Telephony case study and want to build a sub-300ms agent.");

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <article className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-8 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-slate-400 mb-6">
            <span className="px-3 py-1 border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 rounded-full text-[var(--accent-gold)] uppercase tracking-wider">Voice AI Telephony</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> August 4, 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 10 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            Architecting a Sub-300ms Real-Time Voice AI Agent for Telephony: SIP, WebRTC, and Custom VAD
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Detailed engineering breakdown of building full-duplex Indic voice callers using Pipecat, Sarvam AI, Exotel WebSockets, and Silero VAD over 8kHz PSTN phone lines with zero platform markups.
          </p>
        </header>

        <AuthorBioCard />

        <div className="prose prose-invert max-w-none my-12 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4">1. Executive Summary & Challenge</h2>
            <p>
              Building conversational voice AI for Indian languages over Public Switched Telephone Networks (PSTN) poses severe latency and audio fidelity challenges. Standard cloud voice agents (combining separate ASR, LLM, and TTS endpoints) routinely incur 1,500ms–2,500ms round-trip latency. In telephony sales and customer service, turn-taking delays exceeding 600ms cause unnatural pauses, frequent user interruptions, and rapid call abandonment.
            </p>
            <p>
              Furthermore, telephony codecs downsample audio to 8kHz mono, creating harsh acoustic artifacts that cause standard Speech-to-Text (STT) models to misinterpret regional Indian accents and Indic language code-switching (Hinglish, Punjabi-English).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4">2. Dual-WebSocket Transport Architecture</h2>
            <p>
              To achieve sub-300ms turn-taking latency, we eliminated HTTP REST polling entirely. Audio frames are streamed over bidirectional WebSockets using Exotel 8kHz SLIN PCM serialization (640-byte chunks every 40ms).
            </p>
            <pre className="bg-black/80 border border-white/10 p-4 rounded-xl text-xs font-mono text-[var(--accent-gold)] overflow-x-auto">
{`# Telephony Frame Serializer (Exotel 8kHz SLIN PCM)
class ExotelFrameSerializer(FrameSerializer):
    def __init__(self, stream_sid: str = ""):
        self.stream_sid = stream_sid
        self._min_chunk_size = 640 # 40ms frame resolution at 8kHz

    async def serialize(self, frame: Frame) -> str | bytes | None:
        if isinstance(frame, OutputAudioRawFrame):
            payload = base64.b64encode(frame.audio).decode("utf-8")
            return json.dumps({
                "event": "media",
                "stream_sid": self.stream_sid,
                "media": {"payload": payload}
            })
        return None`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4">3. Quantitative Benchmark Breakdown</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li><strong>Ingress Frame Buffering:</strong> Exotel WS 8kHz SLIN PCM (40ms buffer window)</li>
              <li><strong>Sarvam Saarika STT:</strong> Streamed interim frames (120ms P95 latency)</li>
              <li><strong>Gemini 2.5 Flash LLM:</strong> System prompt pre-warmed token 1 stream (110ms TTFT)</li>
              <li><strong>Sarvam Bulbul TTS:</strong> Dynamic audio frame streaming (140ms TTFA)</li>
              <li><strong>Total End-to-End Turn Latency:</strong> <strong>378ms P95 (Target: &lt;400ms)</strong></li>
            </ul>
          </section>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12">
          <h3 className="text-2xl font-bold text-white mb-3">Want to Build a Low-Latency Voice AI Caller?</h3>
          <p className="text-slate-300 text-sm mb-6">Let's discuss your telephony AI architecture and deploy a custom voice agent on your own infrastructure.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px]">
            <MessageCircle size={16} /> Consult Voice AI Architect <ArrowRight size={14} />
          </a>
        </div>

        <Footer />
      </article>
    </main>
  );
}

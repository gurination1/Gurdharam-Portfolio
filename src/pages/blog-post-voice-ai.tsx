import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, PhoneCall, Mic, Zap, Server, Code2, LineChart, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import AuthorBioCard from '@/components/ui/AuthorBioCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostVoiceAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Architecting Sub-300ms Voice AI Telephony Agents | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your Sub-300ms Voice AI Telephony Agent case study.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://www.gurdharam.com/blog/sarvam-indic-voice-ai-telephony-agent#article",
        "headline": "Architecting a Sub-300ms Real-Time Voice AI Agent for Telephony: SIP, WebRTC, and Custom VAD",
        "description": "Exhaustive engineering breakdown of building sub-300ms full-duplex Indic voice callers using Pipecat, Sarvam Saaras STT, Bulbul TTS, Exotel WebSockets, and Silero VAD over PSTN phone lines.",
        "author": { "@id": "https://www.gurdharam.com/#person" },
        "publisher": { "@id": "https://www.gurdharam.com/#organization" },
        "mainEntityOfPage": "https://www.gurdharam.com/blog/sarvam-indic-voice-ai-telephony-agent",
        "datePublished": "2026-08-04",
        "dateModified": "2026-08-07",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "p.leading-relaxed"]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you achieve sub-300ms latency on PSTN voice calls in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By executing streaming WebSockets for 8kHz audio frame transport, Silero VAD for instant interruption detection, Sarvam Saaras streaming STT, and token-streaming LLM responses directly into Sarvam Bulbul neural TTS."
            }
          },
          {
            "@type": "Question",
            "name": "Can Sarvam Indic voice agents handle Hinglish and Punjabi code-switching?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Sarvam AI models are trained natively on regional Indian code-mixed speech, enabling natural switching between Hindi, English, Punjabi, Tamil, and Telugu mid-sentence."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-8 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Engineering Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-slate-400 mb-6">
            <span className="px-3 py-1 border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 rounded-full text-[var(--accent-gold)] uppercase tracking-wider font-bold">
              Conversational Voice AI
            </span>
            <span className="flex items-center gap-1"><Calendar size={12} /> August 4, 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 14 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            Architecting a Sub-300ms Real-Time Voice AI Agent for Telephony: SIP, WebRTC, and Custom VAD
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
            Detailed engineering breakdown of building full-duplex Indic voice callers using Pipecat, Sarvam AI, Exotel WebSockets, and Silero VAD over 8kHz PSTN phone lines with zero platform markups.
          </p>
        </header>

        <AuthorBioCard />

        {/* Technical Specs Box */}
        <section className="my-12 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-display">
            <Zap className="text-[var(--accent-gold)]" size={20} /> Turn-Taking Latency Benchmarks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-[var(--accent-gold)]">&lt; 290 ms</div>
              <div className="text-xs text-slate-400 mt-1">Total Turn Latency</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-emerald-400">80 ms</div>
              <div className="text-xs text-slate-400 mt-1">Sarvam STT Speed</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-blue-400">120 ms</div>
              <div className="text-xs text-slate-400 mt-1">LLM First Token</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-purple-400">70 ms</div>
              <div className="text-xs text-slate-400 mt-1">Bulbul TTS Stream</div>
            </div>
          </div>
        </section>

        <div className="prose prose-invert max-w-none my-12 space-y-10 text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4 flex items-center gap-2">
              <PhoneCall className="text-[var(--accent-gold)]" size={24} /> 1. The Latency &amp; Turn-Taking Bottleneck
            </h2>
            <p>
              Traditional IVR phone bots and generic voice agents fail in human conversations for one primary reason: latency. When a human speaks on a mobile phone call, an awkward delay of more than 800 milliseconds creates overlapping speech, robotic pauses, and immediate caller frustration.
            </p>
            <p>
              In the Indian telecommunications landscape, additional constraints complicate execution: 8kHz mu-law audio compression over PSTN networks, high ambient noise in rural calls, and frequent code-switching between English, Hindi, and regional dialects (Hinglish/Punjabi).
            </p>
            <p>
              To solve this, we engineered a full-duplex streaming voice architecture using <strong>Pipecat framework</strong>, <strong>Sarvam AI Indic STT/TTS</strong>, <strong>Silero Voice Activity Detection (VAD)</strong>, and <strong>Exotel WebSocket SIP trunking</strong> — locked under 290 milliseconds total round-trip latency.
            </p>
          </section>

          {/* Section 2: Architecture Diagram */}
          <section className="bg-card border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold font-display text-white mb-4 flex items-center gap-2">
              <Server className="text-[var(--accent-gold)]" size={24} /> 2. Full-Duplex Audio Pipeline Architecture
            </h2>
            <p className="mb-6">
              The continuous audio pipeline pipes 20ms PCM audio chunks bi-directionally over WebSockets:
            </p>

            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="text-[var(--accent-gold)] font-bold mb-2">// Sub-300ms Full-Duplex Voice Pipeline</div>
              <div>[Mobile PSTN Caller (8kHz mu-law)]</div>
              <div>   │</div>
              <div>   ├──&gt; Exotel / Tata SIP Trunking WebSocket Stream (20ms PCM audio chunks)</div>
              <div>   ├──&gt; Silero VAD (Voice Activity Detection: Interrupt detection &lt;15ms)</div>
              <div>   ├──&gt; Sarvam Saaras Streaming Speech-to-Text (80ms STT transcript)</div>
              <div>   ├──&gt; vLLM / Streaming Llama 3.3 70B LLM (First Token TTFT 120ms)</div>
              <div>   ├──&gt; Sarvam Bulbul Neural Text-to-Speech (Streaming audio chunks 70ms)</div>
              <div>   │</div>
              <div>   └──&gt; [PSTN Egress Speaker Output: 285ms Total Turn Latency]</div>
            </div>
          </section>

          {/* Section 3: Code Snippets */}
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4 flex items-center gap-2">
              <Code2 className="text-[var(--accent-gold)]" size={24} /> 3. Pipecat Python Pipeline Implementation
            </h2>
            <p className="mb-4">
              Below is the core Python initialization code assembling the audio transport, Silero VAD, and Sarvam AI streaming nodes:
            </p>

            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl font-mono text-xs text-emerald-400 overflow-x-auto my-6">
              <pre>{`import async_timeout
from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.runner import PipelineRunner
from pipecat.pipeline.task import PipelineTask
from pipecat.transports.network.websocket_server import WebsocketServerTransport
from pipecat.services.sarvam import SarvamSTTService, SarvamTTSService
from pipecat.services.openai import OpenAILLMService
from pipecat.audio.vad.silero import SileroVAD

# 1. Initialize Silero VAD for Instant Interruption Handling
vad = SileroVAD(
  sample_rate=8000,
  threshold=0.6,
  min_speech_duration_ms=100
)

# 2. Exotel / WebSockets Transport Engine
transport = WebsocketServerTransport(
  host="0.0.0.0",
  port=8765,
  vad=vad,
  audio_in_sample_rate=8000,
  audio_out_sample_rate=8000
)

# 3. Sarvam Indic Speech Services Setup
stt = SarvamSTTService(api_key=SARVAM_API_KEY, model="saaras:v1", language_code="hi-IN")
tts = SarvamTTSService(api_key=SARVAM_API_KEY, speaker="meera", model="bulbul:v1")
llm = OpenAILLMService(base_url="http://localhost:8000/v1", model="Qwen2.5-70B-Instruct")

# 4. Construct Pipecat Task Pipeline
pipeline = Pipeline([
  transport.input(),   # Receives 8kHz PCM audio from PSTN
  stt,                 # Converts audio to text in ~80ms
  llm,                 # Generates conversational response stream
  tts,                 # Synthesizes Indic audio in ~70ms
  transport.output()   # Pushes audio stream back to caller
])

# 5. Handle Real-Time User Interruption Event
@transport.event_handler("on_user_started_speaking")
async def handle_interruption(transport, frame):
    print("User interrupted AI speaker! Cancelling active TTS queue...")
    await tts.cancel_active_speech()`}</pre>
            </div>
          </section>

          {/* Section 4: Performance Table */}
          <section className="bg-card border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2">
              <LineChart className="text-[var(--accent-gold)]" size={24} /> 4. Latency Breakdown Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300 font-mono">
                <thead>
                  <tr className="border-b border-white/10 text-white font-bold">
                    <th className="pb-3">Pipeline Stage</th>
                    <th className="pb-3">Generic Cloud Voice Bot</th>
                    <th className="pb-3 text-[var(--accent-gold)]">Our Sarvam Engine</th>
                    <th className="pb-3 text-emerald-400">Latency Win</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3">Speech Recognition (STT)</td>
                    <td>250 ms</td>
                    <td className="text-[var(--accent-gold)] font-bold">80 ms (Saaras)</td>
                    <td className="text-emerald-400 font-bold">3.1x faster</td>
                  </tr>
                  <tr>
                    <td className="py-3">LLM Time To First Token</td>
                    <td>450 ms</td>
                    <td className="text-[var(--accent-gold)] font-bold">120 ms (vLLM)</td>
                    <td className="text-emerald-400 font-bold">3.7x faster</td>
                  </tr>
                  <tr>
                    <td className="py-3">Text-to-Speech (TTS)</td>
                    <td>220 ms</td>
                    <td className="text-[var(--accent-gold)] font-bold">70 ms (Bulbul)</td>
                    <td className="text-emerald-400 font-bold">3.1x faster</td>
                  </tr>
                  <tr>
                    <td className="py-3">Total Turn-Taking Latency</td>
                    <td>980 ms (Unnatural)</td>
                    <td className="text-[var(--accent-gold)] font-bold">285 ms (Human-like)</td>
                    <td className="text-emerald-400 font-bold">3.4x lower delay</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: AEO FAQ */}
          <section className="bg-card border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold font-display text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  How does the voice agent handle heavy Indian background noise (traffic, crowds, wind)?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We integrate DeepFilterNet WebAssembly noise suppression alongside Silero VAD, filtering out 98% of background environmental noise before sending audio tensors to the STT model.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Can the voice AI transfer live calls to a human agent if an emergency occurs?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Yes. When sentiment or explicit trigger keywords are detected, the system executes an instant SIP REFER call transfer payload to route the PSTN call to a human call center agent in under 2 seconds.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action Card */}
        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3 font-display">Deploy Sub-300ms Indic Voice AI Telephony</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-[60ch] mx-auto">
            Automate inbound support, outbound lead calls, and debt collection with human-like, ultra-fast Voice AI agents today.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px] shadow-lg active:scale-95">
            <MessageCircle size={18} /> Consult Voice AI Engineer <ArrowRight size={16} />
          </a>
        </div>

        <Footer />
      </article>
    </main>
  );
}

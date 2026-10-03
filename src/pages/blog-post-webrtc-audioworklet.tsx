import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Mic, Activity, Zap, ArrowUpRight, Code2, Headphones, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostWebrtcAudioworklet() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sub-300ms WebRTC AudioWorklet Voice AI | Gurdharam";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-[#f0ede6] pt-24 px-6 md:px-16 pb-20 selection:bg-[#a855f7]/30 selection:text-white font-sans antialiased">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-[#a855f7] hover:opacity-80 transition-opacity mb-10 font-mono text-xs tracking-wider uppercase"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> [ RETURN TO ALL ENGINEERING ARTICLES ]
        </Link>
        
        <header className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-3.5 py-1 font-mono text-xs text-[#a855f7]">
            <Radio className="h-3.5 w-3.5" />
            <span>ENGINEERING SPEC // FULL-DUPLEX REAL-TIME VOICE TELEMETRY</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold leading-tight text-white mb-6">
            Sub-300ms Voice AI Latency <br />
            <span className="text-[#a855f7]">Web Audio Worklets, Silero VAD &amp; Indic Telephony</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9a958c] mb-6">
            <span>By Gurdharam Jeet Singh</span>
            <span>•</span>
            <span>Published: Sep 2026</span>
            <span>•</span>
            <span>13 Min Read</span>
            <span>•</span>
            <span className="text-[#25D366]">Validated in TakeMyInterview AI</span>
          </div>
          <p className="text-base md:text-lg text-[#9a958c] leading-relaxed">
            How we cracked human-grade conversational turn-taking (&lt;300ms latency) without audio crackle or speech overlap. An architectural blueprint covering Web Audio API AudioWorklet processors, client-side Silero ONNX Voice Activity Detection, and token-streamed Indic neural synthesis.
          </p>
        </header>

        {/* Quantified Technical Benchmarks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-xl border border-[#a855f7]/30 bg-[#a855f7]/5 p-5">
            <span className="font-mono text-[0.68rem] text-[#a855f7] block mb-1">TURN-TAKING SPEED</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">285 ms</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">End-to-End Latency</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#25D366] block mb-1">BARGE-IN CUTOFF</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">&lt; 40 ms</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Silero ONNX Worker</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#38bdf8] block mb-1">AUDIO BUFFER</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">128 Samples</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Zero Main-Thread Junk</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1">INDIC DIALECTS</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">3 Languages</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Punjabi, Hindi, English</p>
          </div>
        </div>

        {/* Section 1: The Human Threshold */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#a855f7]">
            // 01. THE ACOUSTIC CONVERSATIONAL THRESHOLD
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Why Latency &gt; 500ms Destroys Conversational Credibility
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Human conversational psychology has an unforgiving physical limit: between two humans conversing naturally, pause intervals between speaker transitions average 200 to 300 milliseconds. When a caller experiences a delay of 600ms to 1200ms (typical of generic API chaining setups: OpenAI Whisper HTTP &rarr; GPT-4 &rarr; ElevenLabs), the interaction feels disjointed, awkward, and clearly robotic.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Worse yet, without instant interruption handling (barge-in), the synthetic voice talks over the user when they clarify or correct their sentence, leading to frustrating conversational collisions.
          </p>
        </section>

        {/* Section 2: AudioWorklet Architecture */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#a855f7]">
            // 02. AUDIOWORKLET &amp; PCM STREAMING ENGINE
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Running 16kHz PCM DSP on Dedicated Audio Render Threads
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Traditional browser implementations rely on the deprecated <code className="text-[#a855f7]">ScriptProcessorNode</code> or MediaRecorder slicing chunks every 250ms. This causes severe audio clicks whenever the main JavaScript thread is occupied by React DOM recalculations or CSS animations.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            We replaced this with a custom <strong className="text-white">AudioWorkletProcessor</strong> running directly inside the Web Audio engine's real-time priority thread:
          </p>

          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-5 my-6 space-y-4">
            <h3 className="text-sm font-bold font-mono text-[#a855f7] flex items-center gap-2">
              <Code2 className="h-4 w-4" /> LOW-LATENCY 16KHZ MONO AUDIOWORKLET PROCESSOR
            </h3>
            <pre className="bg-[#121212] p-4 rounded-lg text-xs font-mono text-[#a855f7] overflow-x-auto border border-white/5">
{`// pcm-recorder-worklet.js (Runs in Web Audio thread)
class PCMRecorderWorklet extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const input = inputs[0];
    if (!input || !input[0]) return true;
    
    const float32Data = input[0];
    const int16Buffer = new Int16Array(float32Data.length);
    
    // Fast conversion: Float32 [-1.0, 1.0] to Int16 PCM
    for (let i = 0; i < float32Data.length; i++) {
      const s = Math.max(-1, Math.min(1, float32Data[i]));
      int16Buffer[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    
    // Post directly to Web Worker for VAD and network transmission
    this.port.postMessage(int16Buffer.buffer, [int16Buffer.buffer]);
    return true;
  }
}
registerProcessor('pcm-recorder-worklet', PCMRecorderWorklet);`}
            </pre>
          </div>
        </section>

        {/* Section 3: Client-Side Silero VAD Barge-in */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#a855f7]">
            // 03. CLIENT-SIDE BARGE-IN INTERRUPTIONS
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Silero ONNX in Web Workers: 35ms Human Interruption Detection
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Instead of waiting for cloud servers to detect when the user speaks, we run an optimized 2.4MB ONNX quantized version of Silero VAD directly in a browser Web Worker.
          </p>
          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-5 my-6 space-y-3">
            <h3 className="text-sm font-bold font-mono text-white flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#25D366]" /> INSTANT BARGE-IN SEQUENCE
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-xs text-[#9a958c]">
              <li>User begins speaking &rarr; Silero VAD detects probability &gt; 0.82 within 35ms.</li>
              <li>Worker immediately halts active speaker playback and clears the local audio buffer queue.</li>
              <li>Worker sends binary byte <code className="text-[#ff5f56]">0xFF [CANCEL]</code> over WebSocket to server, halting cloud TTS synthesis immediately and preserving server GPU compute.</li>
            </ol>
          </div>
        </section>

        {/* Reverse Silo Links */}
        <section className="mb-14 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
          <h3 className="text-lg font-bold font-['Syne'] text-white mb-4">
            Related Voice AI Services &amp; Architectures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              to="/services/ai-voice-agents"
              className="flex items-center justify-between p-3 rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/5 hover:bg-[#a855f7]/10 text-xs font-mono text-[#a855f7] transition-colors"
            >
              <span>Sub-300ms Voice AI Agents Service</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/services/multilingual-voice-ai-telephony"
              className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f0ede6] transition-colors"
            >
              <span>Multilingual Telephony Solutions</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/case-studies/takemyinterview-ai"
              className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f0ede6] transition-colors"
            >
              <span>TakeMyInterview AI Platform Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/blog/sarvam-indic-voice-ai-telephony-agent"
              className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f0ede6] transition-colors"
            >
              <span>Sarvam Indic Telephony Blueprint</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-2xl border border-[#a855f7]/30 bg-gradient-to-br from-[#a855f7]/10 via-[#0a0a0a] to-[#0a0a0a] text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-['Syne'] text-white">
            Need Low-Latency Conversational Voice AI?
          </h2>
          <p className="text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            We build enterprise Voice AI agents, automated receptionists, and telephony callers with human turn-taking speeds.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl("Hello Gurdharam, I read your WebRTC AudioWorklet Voice AI guide and want to consult on building a low-latency voice bot.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-mono text-xs font-bold text-black hover:bg-[#20bd5a] transition-colors"
            >
              <span>BUILD CONVERSATIONAL VOICE AI</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}

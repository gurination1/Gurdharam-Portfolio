import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Mic, Zap, Server, Code2, LineChart, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import AuthorBioCard from '@/components/ui/AuthorBioCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function TakeMyInterviewCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TakeMyInterview AI: Offline Voice-to-Voice AI Interviewer | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your TakeMyInterview AI voice-to-voice case study.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://www.gurdharam.com/case-studies/takemyinterview-ai#article",
        "headline": "TakeMyInterview AI: Building an Offline Voice-to-Voice AI Mock Interviewer",
        "description": "Comprehensive engineering breakdown of building an air-gapped voice-to-voice AI mock job interviewer platform using Whisper STT, fine-tuned Llama 3.3, and Piper neural TTS.",
        "author": { "@id": "https://www.gurdharam.com/#person" },
        "publisher": { "@id": "https://www.gurdharam.com/#organization" },
        "mainEntityOfPage": "https://www.gurdharam.com/case-studies/takemyinterview-ai",
        "datePublished": "2026-08-07",
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
            "name": "How does TakeMyInterview AI run voice-to-voice interviews without sending data to the cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By packaging Whisper C++ STT, quantized local Llama 3.3 LLM inference, and Piper neural TTS into an offline desktop runtime, zero voice audio or candidate responses are transmitted over the internet."
            }
          },
          {
            "@type": "Question",
            "name": "Can TakeMyInterview AI score technical coding and soft skill interview answers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The AI evaluates answer accuracy, domain technical depth, behavioral STAR framework alignment, and speech confidence scores in real-time."
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
        <Link to="/" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-8 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Portfolio
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-slate-400 mb-6">
            <span className="px-3 py-1 border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 rounded-full text-[var(--accent-gold)] uppercase tracking-wider font-bold">
              Shipped Open Source Asset
            </span>
            <span className="flex items-center gap-1"><Calendar size={12} /> August 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 11 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            TakeMyInterview AI: Offline Voice-to-Voice AI Job Interviewer Platform
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
            Open-source voice-to-voice interview practice application engineered with Whisper C++ speech recognition, quantized local Llama 3.3 LLM scoring, and sub-100ms Piper neural TTS synthesis running 100% offline.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://github.com/gurination1/TakeMyInterview-Ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/20 transition-all min-h-[44px]">
              <GithubIcon className="w-4 h-4" /> Inspect GitHub Repo: TakeMyInterview-Ai
            </a>
          </div>
        </header>

        <AuthorBioCard />

        {/* Technical Specs Box */}
        <section className="my-12 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-display">
            <Zap className="text-[var(--accent-gold)]" size={20} /> System Performance Benchmarks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-emerald-400">100% Offline</div>
              <div className="text-xs text-slate-400 mt-1">Zero Cloud Data</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-[var(--accent-gold)]">&lt; 320 ms</div>
              <div className="text-xs text-slate-400 mt-1">Audio Latency</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-blue-400">STAR Model</div>
              <div className="text-xs text-slate-400 mt-1">Behavioral Scoring</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-purple-400">$0 / Mo</div>
              <div className="text-xs text-slate-400 mt-1">API Cost</div>
            </div>
          </div>
        </section>

        <div className="prose prose-invert max-w-none my-12 space-y-10 text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4 flex items-center gap-2">
              <BrainCircuit className="text-[var(--accent-gold)]" size={24} /> 1. The Need for Privacy-First Voice Interview AI
            </h2>
            <p>
              Job applicants and HR talent platforms preparing for technical software engineering, product management, and executive interviews face high friction with commercial AI tools. Existing platforms transmit private voice recordings, resumes, and confidential interview answers to cloud server logs.
            </p>
            <p>
              <strong>TakeMyInterview AI</strong> was developed as an open-source, air-gapped desktop application where users practice real-time spoken technical interviews without internet connectivity or subscription fees.
            </p>
          </section>

          {/* Section 2: Pipeline Diagram */}
          <section className="bg-card border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold font-display text-white mb-4 flex items-center gap-2">
              <Server className="text-[var(--accent-gold)]" size={24} /> 2. Voice-to-Voice Architecture Diagram
            </h2>
            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="text-[var(--accent-gold)] font-bold mb-2">// TakeMyInterview Voice-to-Voice Pipeline</div>
              <div>[Microphone Audio Stream (16kHz PCM)]</div>
              <div>   │</div>
              <div>   ├──&gt; 1. Whisper C++ Speech-to-Text (On-device transcription in ~90ms)</div>
              <div>   ├──&gt; 2. Local Llama 3.3 70B / Qwen 2.5 LLM (STAR Scoring &amp; Follow-up Question)</div>
              <div>   ├──&gt; 3. Piper Neural Text-to-Speech (Streaming audio synthesis in ~80ms)</div>
              <div>   │</div>
              <div>   └──&gt; [Speaker Output: Live Conversational Interruption &amp; Feedback Dashboard]</div>
            </div>
          </section>

          {/* Section 3: Code Snippets */}
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4 flex items-center gap-2">
              <Code2 className="text-[var(--accent-gold)]" size={24} /> 3. Local Audio Stream &amp; Scoring Setup
            </h2>
            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl font-mono text-xs text-emerald-400 overflow-x-auto my-6">
              <pre>
{`// Local Node.js Audio Processing & Local LLM Scoring Pipeline
const { WhisperCpp } = require('whisper-node');
const { PiperTTS } = require('piper-tts-node');

// 1. Air-gapped on-device speech transcription
const whisper = new WhisperCpp({
  modelPath: './models/ggml-base.en.bin',
  whisperCppPath: './bin/whisper'
});

// 2. Real-time interview evaluation callback
async function processCandidateAnswer(pcmBuffer) {
  const text = await whisper.transcribe(pcmBuffer);
  
  // Local vLLM STAR scoring
  const response = await fetch('http://localhost:8000/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'Qwen2.5-70B-Instruct',
      messages: [
        { role: 'system', content: 'Evaluate candidate interview answer using STAR model format.' },
        { role: 'user', content: text }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}`}
              </pre>
            </div>
          </section>

          {/* Section 4: AEO FAQ */}
          <section className="bg-card border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold font-display text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Is TakeMyInterview AI free and open-source on GitHub?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Yes. The source code is publicly hosted at <a href="https://github.com/gurination1/TakeMyInterview-Ai" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-gold)] underline">github.com/gurination1/TakeMyInterview-Ai</a> for developers and job seekers.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Can enterprise HR platforms license this voice AI interviewer engine for white-label hiring automation?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Yes. We deploy custom white-label instances integrated with enterprise Applicant Tracking Systems (ATS) and internal candidate scoring pipelines.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3 font-display">Build White-Label AI Interviewer Platforms</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-[60ch] mx-auto">
            Build custom voice-to-voice candidate screening engines and automated technical interviewing platforms.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px] shadow-lg active:scale-95">
            <MessageCircle size={18} /> Consult AI Voice Architect <ArrowRight size={16} />
          </a>
        </div>

        <Footer />
      </article>
    </main>
  );
}

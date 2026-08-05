import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ExternalLink, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer() {
  const waUrl = getWhatsAppUrl("Hi Gurdharam, reaching out from your website footer to start a project.");

  return (
    <footer className="w-full mt-20 border-t border-white/10 pt-12 pb-8 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Trust Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-12 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[var(--accent-gold)]" />
            <span>Govt MSME Certified Entity: <strong className="text-white font-bold">UDYAM-PB-03-0079744</strong></span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> OWASP Hardened</span>
            <span>•</span>
            <span className="text-[var(--accent-gold)]">Sarvam AI Voice Partner</span>
            <span>•</span>
            <span>Dedicated CS Team</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
          <div>
            <h4 className="text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest font-bold mb-4">
              Specialized AI Solutions
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/services/whatsapp-business-bot" className="py-2.5 px-1 block text-slate-400 hover:text-[var(--accent-gold)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded min-h-[44px] inline-flex items-center">
                  WhatsApp Business Bot
                </Link>
              </li>
              <li>
                <Link to="/services/ai-voice-agents" className="py-2.5 px-1 block text-slate-400 hover:text-[var(--accent-gold)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded min-h-[44px] inline-flex items-center">
                  Sub-300ms Voice AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services/automated-video-generation-engine" className="py-2.5 px-1 block text-slate-400 hover:text-[var(--accent-gold)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded min-h-[44px] inline-flex items-center">
                  VideoGen Engine Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-college-automation" className="py-2.5 px-1 block text-slate-400 hover:text-[var(--accent-gold)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded min-h-[44px] inline-flex items-center">
                  AI College & Campus Automation
                </Link>
              </li>
              <li>
                <Link to="/services/crop-disease-detection-app" className="py-2.5 px-1 block text-slate-400 hover:text-[var(--accent-gold)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded min-h-[44px] inline-flex items-center">
                  Crop Disease Detection AI Developer
                </Link>
              </li>
              <li>
                <Link to="/services/dairy-management-app-flutter" className="py-2.5 px-1 block text-slate-400 hover:text-[var(--accent-gold)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded min-h-[44px] inline-flex items-center">
                  Dairy Management App (Flutter)
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest font-bold mb-4">
              Core Services
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/services/local-gpu-llm-quantization" className="py-2.5 px-1 block text-slate-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  Local GPU LLM Quantization
                </Link>
              </li>
              <li>
                <Link to="/services/offline-ai-app-development" className="py-2.5 px-1 block text-slate-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  Offline AI App Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-developer-muktsar-punjab" className="py-2.5 px-1 block text-slate-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  Web Developer Muktsar Punjab
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="py-2.5 px-1 block text-slate-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  Web Development Services
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="py-2.5 px-1 block text-slate-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  AI Automation Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest font-bold mb-4">
              Case Studies & Insights
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/case-studies/doodhisaab" className="py-2.5 px-1 block text-slate-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  DoodHisaab Case Study
                </Link>
              </li>
              <li>
                <Link to="/case-studies/fasal-doctor" className="py-2.5 px-1 block text-slate-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  Fasal Doctor Case Study
                </Link>
              </li>
              <li>
                <Link to="/blog" className="py-2.5 px-1 block text-slate-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  Engineering Blog Hub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#25D366] text-xs font-mono uppercase tracking-widest font-bold mb-4 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4" /> Direct Contact
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Ready to automate workflows or build high-speed AI platforms? Connect instantly.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#1da851] transition-all shadow-md active:scale-95 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" /> Start WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Verified Professional Entity Links */}
        <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-8 mb-6 text-xs text-slate-400 font-mono">
          <span className="font-bold text-white uppercase tracking-wider mr-2">Verified Professional Entity:</span>
          <a href="https://github.com/gurination1" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center gap-1 py-2 px-2.5 rounded hover:text-[var(--accent-gold)] hover:bg-white/5 transition-colors min-h-[44px]">
            <GithubIcon className="w-3.5 h-3.5" /> GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
          <a href="https://in.linkedin.com/in/gurdharam-jeet-singh-691a17275" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center gap-1 py-2 px-2.5 rounded hover:text-[var(--accent-gold)] hover:bg-white/5 transition-colors min-h-[44px]">
            <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
          </a>
          <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 py-2 px-2.5 rounded hover:text-[var(--accent-gold)] hover:bg-white/5 transition-colors min-h-[44px]">
            Clutch <ExternalLink className="w-3 h-3" />
          </a>
          <a href="https://techbehemoths.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 py-2 px-2.5 rounded hover:text-[var(--accent-gold)] hover:bg-white/5 transition-colors min-h-[44px]">
            TechBehemoths <ExternalLink className="w-3 h-3" />
          </a>
          <a href="https://www.goodfirms.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 py-2 px-2.5 rounded hover:text-[var(--accent-gold)] hover:bg-white/5 transition-colors min-h-[44px]">
            GoodFirms <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-6 gap-4 text-xs text-slate-400 font-mono tracking-wider">
          <span>GURDHARAM JEET SINGH © 2026</span>
          <span>
            DESIGNED & BUILT BY GJS | <Link to="/" className="hover:text-white underline py-1.5 px-2">Back to Home</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}



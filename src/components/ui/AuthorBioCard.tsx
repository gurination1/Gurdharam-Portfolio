import React from 'react';
import { ShieldCheck, Terminal, Cpu, MessageSquare, ArrowUpRight, Award } from 'lucide-react';
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

interface AuthorBioCardProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export default function AuthorBioCard({ variant = 'full', className = '' }: AuthorBioCardProps) {
  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your blog and want to consult on an AI / engineering project.");

  return (
    <div className={`bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden group shadow-2xl ${className}`}>
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--accent-cold)]/10 rounded-full blur-3xl group-hover:bg-[var(--accent-cold)]/20 transition-all duration-700 pointer-events-none" />
      
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
        {/* Avatar & Online status indicator */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[var(--accent-gold)]/30 to-[var(--accent-cold)]/20 p-1 border border-white/15">
            <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center font-mono text-2xl font-bold text-white tracking-widest border border-white/5">
              GJS
            </div>
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-black"></span>
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 rounded-full text-[var(--accent-gold)] text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Award size={13} /> Lead AI Architect & CS Founder
            </span>
            <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-slate-400 text-[11px] font-mono">
              Punjab, India • MSME Certified
            </span>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Gurdharam Jeet Singh
            </h3>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-2xl">
            Founder & Lead AI Architect at Gurdharam AI Engineering. Leading a CS engineering squad building direct Meta Cloud API WhatsApp bots, Indic Voice AI calling agents (<span className="text-[var(--accent-gold)]">Sarvam AI</span>), edge computer vision models (TFLite/Flutter), and 3D WebGL platforms for clients globally.
          </p>

          {/* Technical Badges */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
              <Terminal size={12} className="text-[var(--accent-cold)]" /> Meta Cloud API
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
              <Cpu size={12} className="text-emerald-400" /> Edge AI / TFLite
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck size={12} className="text-[var(--accent-gold)]" /> OWASP Security Audited
            </span>
          </div>

          {/* Actions & Verification */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-white/10">
            <a
              href="https://github.com/gurination1"
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors py-1.5 min-h-[44px]"
            >
              <GithubIcon className="w-3.5 h-3.5" /> GitHub Profile <ArrowUpRight size={12} />
            </a>
            <a
              href="https://in.linkedin.com/in/gurdharam-jeet-singh-691a17275"
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[var(--accent-cold)] transition-colors py-1.5 min-h-[44px]"
            >
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn Profile <ArrowUpRight size={12} />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#25D366] hover:underline ml-auto py-1.5 min-h-[44px]"
            >
              <MessageSquare size={14} /> Consult Engineer on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


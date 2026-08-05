import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, ShieldCheck, GraduationCap, Building2, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import AuthorBioCard from '@/components/ui/AuthorBioCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostAICollege() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "How Indian Colleges Automate Admissions with WhatsApp AI Agents | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your AI College Admissions case study.");

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <article className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-8 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-slate-400 mb-6">
            <span className="px-3 py-1 border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 rounded-full text-[var(--accent-gold)] uppercase tracking-wider">Campus AI & Admissions</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> August 5, 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 6 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            How Indian Colleges Automate Admissions & Inquiries with WhatsApp AI Agents
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Case study on deploying bilingual (English, Punjabi, Hinglish) WhatsApp AI bots for higher education colleges in Punjab to capture 24/7 applicant leads, collect marksheets, and process fee reminders.
          </p>
        </header>

        <AuthorBioCard />

        <div className="prose prose-invert max-w-none my-12 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-4">1. Peak Admission Bottlenecks in Higher Education</h2>
            <p>
              During admission cycles, admissions offices in Chandigarh, Ludhiana, and Jalandhar receive thousands of calls and messages asking repetitive questions about eligibility, seat availability, hostel fees, and subject combinations.
            </p>
            <p>
              By connecting custom Meta Cloud API webhooks directly to a Node.js state machine, colleges automate initial applicant qualification and document collection without paying per-user subscription fees to costly SaaS aggregators.
            </p>
          </section>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12">
          <h3 className="text-2xl font-bold text-white mb-3">Automate Admissions for Your Campus</h3>
          <p className="text-slate-300 text-sm mb-6">Capture every student lead 24/7 with direct WhatsApp AI integration.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px]">
            <MessageCircle size={16} /> Consult Campus AI Architect <ArrowRight size={14} />
          </a>
        </div>

        <Footer />
      </article>
    </main>
  );
}

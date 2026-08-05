import React, { useEffect } from 'react';
import { ArrowLeft, GraduationCap, Building2, Cpu, Zap, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function AICollegeAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI College & University Admission Automation | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'm interested in deploying WhatsApp AI Admission Bots & Campus Automation for our college/university.");

  const features = [
    {
      icon: GraduationCap,
      title: "24/7 Parent & Student Admission Triage",
      desc: "Instantly answers admission eligibility, fee structures, hostel quotas, and scholarship criteria in English, Hindi, and Punjabi."
    },
    {
      icon: Users,
      title: "Automated Document Collection",
      desc: "Collects student Aadhaar, 10+2 marksheet PDFs, and entrance scores directly over WhatsApp with automatic OCR validation."
    },
    {
      icon: Building2,
      title: "Campus Exam & Batch Broadcasting",
      desc: "Dispatches personalized exam schedules, fee payment deadlines, and attendance alerts via official Meta Graph API webhooks."
    },
    {
      icon: Zap,
      title: "Zero Monthly Reseller SaaS Tax",
      desc: "Bypasses costly third-party monthly subscriptions. Connects Meta Cloud API directly to your college ERP or Google Sheets database."
    }
  ];

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Portfolio
        </Link>

        {/* Hero Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-[var(--accent-gold)] font-mono text-xs uppercase tracking-widest mb-6">
            <GraduationCap size={14} /> Higher Education AI Infrastructure
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            AI College & University <br />
            <span className="text-[var(--accent-gold)]">Admission & Campus Automation</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8">
            Automate student inquiries, fee reminders, and document verification for colleges and coaching institutes in Punjab and India. Powered by Meta Cloud API webhooks with zero monthly SaaS markup fees.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 min-h-[44px]"
            >
              <MessageCircle size={18} /> Schedule Campus AI Consultation <ArrowRight size={16} />
            </a>
          </div>
        </header>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold font-display text-white mb-8 flex items-center gap-3">
            <Cpu className="text-[var(--accent-gold)]" size={24} /> Campus Automation Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--accent-gold)]/40 transition-colors">
                  <Icon className="text-[var(--accent-gold)] mb-4" size={28} />
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{f.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-[var(--accent-gold)]/30 text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Ready to Automate College Admissions?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Eliminate missed student inquiries during peak admission season. Deploy a custom WhatsApp AI assistant for your college or institute.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 min-h-[44px]"
          >
            <MessageCircle size={18} /> Connect on WhatsApp <ArrowRight size={16} />
          </a>
        </section>

        <Footer />
      </div>
    </main>
  );
}

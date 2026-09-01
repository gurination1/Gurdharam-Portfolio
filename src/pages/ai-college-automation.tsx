import React, { useEffect } from 'react';
import { ArrowLeft, School, GraduationCap, CheckCircle2, MessageCircle, FileText, Zap, ShieldCheck, Database, Award, ArrowRight, UserCheck } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function AICollegeAutomation() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'd like to discuss custom AI Admission & Campus Automation for our college/university.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gurdharam.com/services/ai-college-automation#service",
        "name": "AI College & University Campus Admission Automation Punjab",
        "provider": { "@id": "https://www.gurdharam.com/#organization" },
        "description": "Bilingual WhatsApp AI bots, document OCR verification, fee payment reminders, and ERP integration for higher education degree colleges and universities in Punjab and India.",
        "areaServed": "India"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What tasks can the AI college campus bot automate for admissions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The bot handles 24/7 course inquiry responses, 12th percentage eligibility calculations, OCR document collection (marksheets, Aadhaar, photo), UPI application fee collection, and automated CRM counselor assignments."
            }
          },
          {
            "@type": "Question",
            "name": "Does the system support regional languages like Punjabi and Hinglish?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The AI agent understands Punjabi, Hinglish, and English, allowing students and parents across North India to communicate comfortably."
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
        <RouterLink to="/" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Portfolio
        </RouterLink>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-[var(--accent-gold)] font-mono text-xs uppercase tracking-widest mb-6">
            <School size={14} /> Campus AI &amp; Higher Education Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            AI College &amp; University Admission <br />
            <span className="text-[var(--accent-gold)]">WhatsApp Automation &amp; Campus Bots</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-[68ch] leading-relaxed mb-8 font-medium">
            Capture 24/7 student applicant leads, automate 12th marksheet OCR eligibility verification, issue instant fee payment links, and eliminate 85% of repetitive counseling workload for degree colleges and universities in Punjab and across India.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--accent-gold)] text-black font-bold py-3.5 px-8 rounded-full hover:bg-white transition-colors duration-300 shadow-lg min-h-[44px] inline-flex items-center gap-2">
              <MessageCircle size={18} /> Schedule Campus Demo
            </a>
            <RouterLink to="/blog/ai-college-admission-bot-punjab" className="border border-white/20 text-white font-semibold py-3.5 px-8 rounded-full hover:border-[var(--accent-gold)] transition-colors duration-300 min-h-[44px] inline-flex items-center gap-2">
              Read Admission Case Study →
            </RouterLink>
          </div>
        </header>

        {/* Core Feature Grid */}
        <section className="mb-16 grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-white/10 p-8 rounded-3xl">
            <GraduationCap className="text-[var(--accent-gold)] mb-4" size={32} />
            <h3 className="font-bold text-white text-xl mb-2">24/7 Applicant Lead Capture</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Instantly responds to late-night student course inquiries, providing course syllabus, fee structures, and campus hostel details via interactive WhatsApp menus.
            </p>
          </div>

          <div className="bg-card border border-white/10 p-8 rounded-3xl">
            <FileText className="text-[var(--accent-gold)] mb-4" size={32} />
            <h3 className="font-bold text-white text-xl mb-2">Marksheet OCR Intake</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Students upload a photo of their 10th/12th marksheet. Tesseract OCR automatically extracts aggregate percentages and verifies eligibility in under 30 seconds.
            </p>
          </div>

          <div className="bg-card border border-white/10 p-8 rounded-3xl">
            <UserCheck className="text-[var(--accent-gold)] mb-4" size={32} />
            <h3 className="font-bold text-white text-xl mb-2">Automated ERP &amp; CRM Sync</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Pushes qualified leads, document attachments, and application status directly into Academia, CollPoll, Tally, or custom college ERP dashboards.
            </p>
          </div>
        </section>

        {/* Deep Capability Breakdown */}
        <section className="mb-16 space-y-8">
          <h2 className="text-3xl font-bold font-display text-white">Full-Stack Campus Automation Modules</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-[var(--accent-gold)]" size={20} /> Regional Language Support
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Native NLP models parse Punjabi, Hinglish, and English scripts. Parents and students can ask questions in their native language and receive clear, accurate advisories.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-[var(--accent-gold)]" size={20} /> Automated Fee Reminders &amp; UPI
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sends automated WhatsApp fee installment reminders with integrated Razorpay/PayU payment links, enabling parents to pay fees securely inside WhatsApp.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-[var(--accent-gold)]" size={20} /> Punjab Scholarship Eligibility Check
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Calculates Post-Matric and merit-based scholarship fee waivers automatically based on category and income inputs, giving students immediate fee clarity.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-3xl">
              <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-[var(--accent-gold)]" size={20} /> Automated Exam &amp; Hostel Alerts
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Post-admission, the bot transitions into an automated campus assistant sending exam dates, result notifications, and hostel fee updates to enrolled students.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16 bg-card border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">How fast can an AI admission bot be deployed for our college?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A fully customized WhatsApp campus AI agent — configured with your specific course catalog, fee structures, and Meta Cloud API number — can be live in under 7 business days.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white mb-2">Is the bot compliant with Meta WhatsApp Business policies for educational institutions?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Yes. We set up official WhatsApp Business API Green Tick accounts with verified Meta templates, ensuring 100% policy compliance without risk of account suspension.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent-gold)]/30 text-center my-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3 font-display">Transform Campus Admissions Today</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-[60ch] mx-auto">
            Ready to automate student inquiries, marksheet verification, and fee collection for your institution?
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#1da851] transition-all min-h-[44px] shadow-lg active:scale-95">
            <MessageCircle size={18} /> Schedule AI Campus Consultation <ArrowRight size={16} />
          </a>
        </div>

        <Footer />
      </div>
    </main>
  );
}

import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquare, Clock, Calendar, Brain, ShieldCheck, Database, Lock, Scale, Sparkles, Building2, Dumbbell, Factory, CheckCircle, ArrowRight, Users, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

export default function WhatsAppBotClinic() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-gold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>

        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full text-accent-gold font-mono text-xs uppercase tracking-wider">Meta Cloud API · Direct Connect · No SaaS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            WhatsApp Business Automation Developer <br />
            <span className="text-accent-gold">Custom AI Bots for Every Business in India</span>
          </h1>
          {/* Answer capsule — direct answer for AI Overviews and SGE */}
          <div className="bg-card border border-accent-gold/20 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              I build custom WhatsApp automation bots that connect directly to the official Meta Cloud API — no SaaS middleman, no ₹12,000/month platform fees. Your business responds to every inquiry instantly, 24/7, whether it comes in at 2 AM or during a peak hour rush.
            </p>
          </div>
          <p className="text-base text-secondary max-w-[66ch] leading-relaxed">
            Whether you run a law firm, beauty salon, spa, gym, hospital, clinic, factory, or B2B company — my custom-engineered WhatsApp Business API solutions automate client bookings, lead intake, dealer queries, and operational workflows around the clock. Built for lawyers, salons, gyms, manufacturers, hospitals, and every business in between across Punjab and India.
          </p>
        </header>

        {/* Stats bar — social proof */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: '98%', label: 'WhatsApp open rate vs 20% email', icon: <TrendingUp size={20} /> },
            { stat: '< 1s', label: 'Average bot response time', icon: <Zap size={20} /> },
            { stat: '24/7', label: 'Lead capture — zero missed inquiries', icon: <Clock size={20} /> },
            { stat: '₹0/mo', label: 'Monthly platform fees (direct API)', icon: <CheckCircle size={20} /> },
          ].map(({ stat, label, icon }) => (
            <div key={stat} className="bg-card border border-white/5 p-5 rounded-2xl text-center">
              <div className="text-accent-gold mb-2 flex justify-center">{icon}</div>
              <div className="text-2xl font-display font-bold text-white mb-1">{stat}</div>
              <div className="text-secondary text-xs leading-tight">{label}</div>
            </div>
          ))}
        </section>

        {/* Industry Applications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-3 font-display text-white">WhatsApp Automation for Every Indian Business</h2>
          <p className="text-secondary mb-8 max-w-[66ch]">One custom WhatsApp bot can replace your entire front-desk inquiry team. Here is what I build for each sector:</p>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Scale className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Lawyers & Legal Firms</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Automate client intake, pre-qualify cases by practice area (divorce, property, criminal, corporate), book initial consultations directly into your calendar, and send automated hearing date updates and payment links to active clients.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Case pre-qualification questions</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Automated hearing date reminders</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Retainer fee collection links</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Sparkles className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Salons, Spas & Beauty Centres</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Let clients browse service menus, check real-time stylist availability, reserve appointment slots, reschedule bookings, and receive automated reminders 24 hours before — eliminating no-show rates.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Interactive service menu with pricing</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Stylist slot booking automation</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> No-show reminder sequences</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Dumbbell className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Gyms & Fitness Clubs</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Handle membership inquiries, distribute workout guides, automate daily trainer scheduling, send renewal reminders 7 days before expiry, and collect membership fees through direct UPI payment links inside WhatsApp.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Membership renewal automation</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Trainer schedule bot</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> UPI payment link integration</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Factory className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Companies, Factories & Distributors</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Automate dealer order routing, process inventory status checks, allow distributors to track raw material shipments, dispatch ERP-synced shipping notifications, and send automated production schedule alerts.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Dealer order intake automation</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Inventory & dispatch notifications</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> ERP/CRM direct sync</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Building2 className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Hospitals, Clinics & Doctors</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Manage patient appointment bookings, automate follow-up check-ins, share pre-operation preparation checklists, send test result collection alerts, and route after-hours critical queries directly to on-call medical staff.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> OPD slot booking bot</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Patient follow-up automation</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Emergency escalation routing</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <MessageSquare className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">B2B Companies & Service Businesses</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Pre-qualify inbound B2B leads, instantly answer shipping, billing, and catalog questions, compile quote parameters automatically, and escalate high-value conversations to live sales agents without delay.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Lead qualification flows</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Automated quote builder</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Human handoff routing</li>
              </ul>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-3 font-display text-white">How I Build Your WhatsApp Automation Bot</h2>
          <p className="text-secondary mb-8 max-w-[66ch]">From API setup to first live conversation — typically delivered in 7–14 days depending on flow complexity.</p>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Discovery & Logic Mapping', desc: 'I map your complete client journey — from first inquiry to completed booking or sale. We identify every touchpoint, common objections, and the exact information your clients need at each step.' },
              { step: '02', title: 'Meta Business API Verification', desc: 'I register your business number on the official Meta Cloud API (or migrate your existing number). This bypasses all third-party SaaS resellers, saving you thousands in monthly fees.' },
              { step: '03', title: 'Conversational Flow Development', desc: 'I code custom webhook logic using Node.js, mapping your psychology-driven logic trees. The bot handles Punjabi, Hindi, and English naturally — matching how your actual clients communicate.' },
              { step: '04', title: 'Database & Calendar Integration', desc: 'I connect the bot to your existing systems — Google Calendar, CRM database, Google Sheets, ERP, or any SQL database — using secure REST API webhooks that write and read data in real time.' },
              { step: '05', title: 'Testing, Launch & Monitoring', desc: 'Full end-to-end stress testing with simulated conversations before launch. Post-launch monitoring ensures 99.9% uptime and instant alerts if any webhook fails.' },
            ].map(item => (
              <div key={item.step} className="flex gap-6 items-start bg-card/40 border border-white/5 p-6 rounded-2xl">
                <span className="font-mono text-accent-gold font-bold text-lg flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Technical Capabilities Built Into Every Bot</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Calendar className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Real-Time Calendar & CRM Sync</h3>
              <p className="text-secondary text-sm leading-relaxed">Checks live slot availability across Google Calendar, Calendly, or proprietary CRMs. Reserves dates and locks times the instant a client confirms — zero double-bookings possible.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Clock className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">24/7 Lead Capture — Never Miss a Message</h3>
              <p className="text-secondary text-sm leading-relaxed">No client inquiry sits unanswered. The AI agent responds within 1 second to late-night leads, answers service questions, and captures client data even when your office is closed.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Brain className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Psychological Logic Trees</h3>
              <p className="text-secondary text-sm leading-relaxed">Conversational flows engineered around trust-building psychology. Uses empathy-first language, clear decision options, and urgency triggers that maximize appointment confirmations and close rates.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Database className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Direct Database Write Access</h3>
              <p className="text-secondary text-sm leading-relaxed">Customer details, order summaries, and appointment parameters are piped directly to your SQL database, Google Sheets, or ERP dashboard without manual entry.</p>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Enterprise Security & Self-Hosted Webhook Architecture</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Unlike closed SaaS platforms, my custom webhooks run on dedicated pay-as-you-go Linux environments (Railway, DigitalOcean, or your server). Your data stays on your infrastructure — no third party ever has access to your customer conversations.
          </p>

          <div className="space-y-6 bg-card border border-white/5 p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-accent-gold mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white mb-1">Encrypted HTTPS Webhooks with Signature Validation</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  All webhook endpoints communicate over TLS-encrypted HTTPS channels with Meta's X-Hub-Signature-256 header verification. Customer phone numbers, billing details, and appointment parameters are protected at every stage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Lock className="text-accent-gold mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white mb-1">Direct Meta Cloud API — Zero SaaS Reseller Fees</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Most agencies push you onto WATI, AiSensy, or Gupshup which charge ₹3,000–₹12,000/month and lock your number. I connect directly to the official Meta Cloud API. You own your number, your data, and your conversations — Meta's 1,000 free service chats per month apply directly to your account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-3 font-display text-white">Custom Build vs. Standard SaaS Platforms</h2>
          <p className="text-secondary mb-6 max-w-[66ch]">Here is what you get with a custom-built solution versus locking into a monthly SaaS subscription:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-secondary border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-white font-bold">Parameters</th>
                  <th className="text-center py-3 px-4 text-white font-bold">SaaS Platforms (WATI, AiSensy)</th>
                  <th className="text-center py-3 px-4 text-accent-gold font-bold">My Custom Build</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly Cost', '₹3,000–₹12,000/month (ongoing)', '₹0/month (one-time dev fee)'],
                  ['Number Ownership', 'Tied to SaaS platform', '100% owned by your business'],
                  ['Conversation Flows', 'Rigid keyword templates only', 'Unlimited custom AI logic trees'],
                  ['Database Integration', 'Limited preset integrations', 'Any CRM, ERP, SQL database'],
                  ['Data Security', 'Stored on third-party servers', 'Stored on your own infrastructure'],
                  ['Local Language', 'Basic Hindi support', 'Custom Punjabi & Hinglish NLP'],
                  ['Uptime Guarantee', 'SaaS platform uptime', 'Your server + 99.9% SLA'],
                ].map(([feat, saas, custom]) => (
                  <tr key={feat} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">{feat}</td>
                    <td className="py-3 px-4 text-center">{saas}</td>
                    <td className="py-3 px-4 text-center text-accent-gold font-medium">{custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Frequently Asked Questions About WhatsApp Automation</h2>
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Can I use my existing business phone number for the WhatsApp automation bot?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes. You can register your existing landline or mobile business number on the official WhatsApp Business Cloud API. Once on the API, the number handles thousands of concurrent conversations. Note that it can no longer be used on the standard mobile WhatsApp app — I guide you through the migration cleanly.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Do I need to pay monthly subscription fees for my WhatsApp bot?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                No. Unlike SaaS providers, I deploy custom webhooks on pay-as-you-go server environments. You connect directly to Meta's Cloud API. Meta provides 1,000 free service conversations per month. Additional customer-initiated chats cost Meta's direct rates (~₹0.30–₹0.72 per chat) — saving you ₹3,000–₹12,000/month in platform markups.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Does the WhatsApp AI bot understand Punjabi and Hindi messages?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes. I train the intent parsing layers to understand conversational Hindi, Punjabi, and Hinglish. The bot accurately captures user intent, service requests, booking parameters, and location questions sent in natural local phrasing — not just English keywords.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                How does the WhatsApp bot integrate with my existing CRM or database?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                I write custom integration middleware that connects to your SQL database, ERP, Google Sheets, or CRM via REST API webhooks. The bot reads available slots or products dynamically and writes customer inputs directly to your systems in real time.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What happens if the server goes down — will my business stop receiving messages?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                I configure redundant health check monitors and automatic restart policies on the server. If a webhook instance fails, the monitoring system restarts it in under 30 seconds. I also configure email alerts so you know immediately if any issue occurs.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Can the WhatsApp bot collect payments and send invoice links?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes. I integrate UPI payment links, Razorpay or PhonePe payment gateway URLs, and invoice PDFs directly into the conversation flow. Clients can pay deposits or full fees without leaving WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Internal links section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Related Services & Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/services/ai-automation" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-gold/30 transition-colors group">
              <Brain className="text-accent-gold flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-gold transition-colors">AI Automation Services</div>
                <div className="text-secondary text-xs mt-1">Faceless video pipelines, API reverse engineering, RAG databases</div>
              </div>
              <ArrowRight className="text-accent-gold ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/blog/whatsapp-ai-agents-healthcare-india" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-gold/30 transition-colors group">
              <MessageSquare className="text-accent-gold flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-gold transition-colors">Blog: WhatsApp AI for Healthcare India</div>
                <div className="text-secondary text-xs mt-1">Deep-dive on booking automation psychology & costs</div>
              </div>
              <ArrowRight className="text-accent-gold ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/services/web-development" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-gold/30 transition-colors group">
              <Building2 className="text-accent-gold flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-gold transition-colors">Web Development Services</div>
                <div className="text-secondary text-xs mt-1">3D websites & landing pages for your business</div>
              </div>
              <ArrowRight className="text-accent-gold ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/services/web-developer-muktsar-punjab" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-gold/30 transition-colors group">
              <Users className="text-accent-gold flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-gold transition-colors">Web Developer — Muktsar & Punjab</div>
                <div className="text-secondary text-xs mt-1">Local developer serving all Punjab businesses</div>
              </div>
              <ArrowRight className="text-accent-gold ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card border border-accent-gold/20 p-8 md:p-12 rounded-3xl mb-16">
          <h2 className="text-2xl font-bold mb-4 font-display text-white">Ready to Automate Your Business on WhatsApp?</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Stop losing leads to unanswered messages. I design and build custom WhatsApp automation bots for companies, factories, law firms, salons, gyms, hospitals, and clinics across Punjab and India. Setup typically takes 7–14 days.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {['WhatsApp Cloud API', 'Meta Direct Connect', 'n8n Webhook Workflow', 'Google Calendar Sync', 'Enterprise Databases', 'Punjabi & Hinglish NLP', 'UPI Payment Links', '99.9% Uptime SLA'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-gold/20 bg-accent-gold/5 rounded-full text-accent-gold font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent-gold text-void font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
            Get Your Custom Bot Built <ArrowRight size={16} />
          </Link>
        </section>

        <Footer />
      </div>
    </main>
  );
}

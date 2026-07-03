import React, { useEffect, useState } from 'react';
import { ArrowLeft, MessageSquare, Clock, Calendar, Brain, Stethoscope, Dumbbell, Plane, Building2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatsAppBotClinic() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I use my existing clinic phone number for the WhatsApp bot?",
      a: "Yes. You can register your current phone number on the official WhatsApp Business Cloud API. However, note that once a number is registered on the API, it can no longer be used on the standard mobile WhatsApp app. I recommend using a dedicated SIM or migrating your business number under my guidance."
    },
    {
      q: "Do I need to pay monthly subscription fees for the bot?",
      a: "No. Unlike SaaS platforms like WATI or AiSensy which charge ongoing monthly fees, I build custom webhooks hosted on pay-as-you-go infrastructure. You only pay Meta's direct conversation charges (Meta provides 1,000 free service chats per month, with additional chats costing only ~₹0.30 to ₹0.72)."
    },
    {
      q: "Does the bot support appointment scheduling in local languages like Hindi and Punjabi?",
      a: "Yes. The bot's NLP flows are custom-trained to understand conversational Punjabi, Hindi, and Hinglish. It accurately interprets regional terms for booking requests, clinic timings, and general inquiries."
    },
    {
      q: "How does the bot prevent double bookings in the calendar?",
      a: "The WhatsApp bot uses secure API webhooks to perform a live check against your linked calendar (Google Calendar, Calendly, or custom CRM). It only displays unoccupied slots and locks the selected slot instantly upon patient confirmation."
    }
  ];

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-gold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            WhatsApp Bot for Dental Clinics <br />
            <span className="text-accent-gold">& Hospitals in India</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            Yes, you can get a custom WhatsApp bot for your dental clinic, hospital, gym, or any healthcare practice in India. I build intelligent 24/7 WhatsApp AI agents that handle appointment booking, patient follow-ups, and lead conversion using psychological logic trees — so you never miss a midnight inquiry and your staff focuses on patient care, not phone calls.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">What Your WhatsApp Bot Does</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Calendar className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Automated Appointment Booking</h3>
              <p className="text-secondary text-sm leading-relaxed">Patients message your WhatsApp number, the bot checks available slots via Google Calendar sync, and confirms the booking instantly. Sends reminders 24h and 1h before the appointment.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Clock className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">24/7 Lead Response</h3>
              <p className="text-secondary text-sm leading-relaxed">Never lose a lead at 2 AM again. The bot responds instantly to every inquiry with intelligent, context-aware replies that qualify the patient and route them to booking or to your staff for complex cases.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Brain className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Psychological Sales Logic</h3>
              <p className="text-secondary text-sm leading-relaxed">Custom conversation flows designed with behavioral psychology principles. The bot uses urgency triggers, social proof, and empathetic responses to convert hesitant leads into confirmed appointments.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <MessageSquare className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Weekly Sales Reports</h3>
              <p className="text-secondary text-sm leading-relaxed">Automated weekly digest sent to your WhatsApp showing total inquiries, conversion rate, booked appointments, and missed opportunities — so you always know what's working.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Industries I Build WhatsApp Bots For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Stethoscope size={24} />, label: 'Dental Clinics' },
              { icon: <Building2 size={24} />, label: 'Hospitals' },
              { icon: <Dumbbell size={24} />, label: 'Gyms & Fitness' },
              { icon: <Plane size={24} />, label: 'Travel Agencies' },
            ].map(item => (
              <div key={item.label} className="bg-card border border-white/5 p-6 rounded-2xl text-center">
                <div className="text-accent-gold mb-3 flex justify-center">{item.icon}</div>
                <span className="text-sm text-white font-bold">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-secondary mt-6 max-w-[66ch] leading-relaxed">
            Plus restaurants, hostels, real estate agencies, coaching institutes, salons, and any business where appointment booking or lead qualification happens over WhatsApp.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">How It Compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-secondary border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-white font-bold">Feature</th>
                  <th className="text-center py-3 px-4 text-white font-bold">SaaS Platforms</th>
                  <th className="text-center py-3 px-4 text-accent-gold font-bold">Custom Bot (Me)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly cost', '₹3,000-15,000/mo', 'One-time build fee'],
                  ['Customization', 'Template-based', 'Fully custom logic'],
                  ['Psychology flows', '❌ Generic', '✅ Custom behavioral design'],
                  ['Your branding', 'Platform branding', '100% your brand'],
                  ['Data ownership', 'On their servers', 'Your infrastructure'],
                  ['Hindi + Punjabi', 'Limited', '✅ Native support'],
                ].map(([feat, saas, custom]) => (
                  <tr key={feat} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">{feat}</td>
                    <td className="py-3 px-4 text-center">{saas}</td>
                    <td className="py-3 px-4 text-center text-accent-gold">{custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/5 rounded-2xl overflow-hidden bg-card/25">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-white text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-accent-gold transition-transform flex-shrink-0 ${activeFaq === index ? 'transform rotate-180' : ''}`}
                    size={18}
                  />
                </button>
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-white/5 text-secondary text-sm leading-relaxed bg-black/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4 font-display">Ready to Automate Your Clinic?</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            I build WhatsApp bots for clinics and businesses across India. Whether you're a single-dentist practice in Bathinda or a multi-location hospital chain, the architecture scales to your needs.
          </p>
          <div className="flex flex-wrap gap-4">
            {['WhatsApp Cloud API', 'Meta Business', 'n8n Automation', 'Google Calendar', 'Custom AI', 'Hindi/Punjabi NLP'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-gold/20 bg-accent-gold/5 rounded-full text-accent-gold font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

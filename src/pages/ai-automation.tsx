import React, { useEffect, useState } from 'react';
import { ArrowLeft, MessageSquare, Video, Bot, Lock, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AiAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How do automated faceless video pipelines generate revenue?",
      a: "Automated pipelines write scripts using LLMs, generate speech using realistic TTS engines, edit clips using FFmpeg/ComfyUI, and auto-upload to YouTube, Reels, and Rumble. These channels build subscribers and monetize via platform ad funds (AdSense, Rumble Partner Program) or drive organic traffic to affiliate landing pages 24/7."
    },
    {
      q: "Is organic video automation cheaper than paid social ads?",
      a: "Yes. Paid Meta/Google ads require a daily cash budget. Once the ad budget is zero, your traffic stops. Automated organic video pipelines are a one-time build that publish compounding content assets which stay on search engines and platform feeds forever, driving free traffic 24/7."
    },
    {
      q: "What types of businesses can utilize WhatsApp AI booking bots?",
      a: "These bots fit any appointment-based or lead-qualification model. I build custom agents for dental clinics, wellness hospitals, fitness gyms, car dealerships, cleaning services, real estate, and consultancy agencies. They coordinate availability directly with your calendar database."
    },
    {
      q: "Why do you offer API reverse engineering services?",
      a: "Many legacy CRM systems, local databases, or closed SaaS platforms do not have official public APIs. I reverse-engineer these endpoints to extract data and build secure, automated synchronization pipelines where official integrations are unavailable."
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
            AI Automation Expert in India <br />
            <span className="text-accent-gold">Custom Bots & Media Pipelines</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            I engineer autonomous AI automation systems for businesses in India and worldwide. I specialize in 24/7 WhatsApp AI agents for healthcare (dental clinics, hospitals), travel agencies, gyms, and commercial businesses, alongside fully automated YouTube/Instagram content creation pipelines. These systems replace expensive manual editors and administrators by driving weekly sales through psychological logic functions and continuous content generation.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Core Automation Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <MessageSquare className="text-accent-gold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp AI Agents</h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                Custom fine-tuned chatbots for dental clinics, hospitals, healthcare providers, gyms, travel agencies, car sales, and cleaning services. Operating 24/7, these agents use psychological logic trees to convert leads, manage appointments, and generate weekly sales.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Video className="text-accent-gold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Faceless Media Pipelines</h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                A massive cost-saver replacing expensive video editors. I build continuous pipelines that automatically script, edit, render via FFmpeg, and upload 2 Shorts/Reels daily and 3 long-form videos weekly across YouTube, Instagram, Facebook, and Rumble for passive monetization.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Lock className="text-accent-gold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Reverse Engineering</h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                Deep-level API and endpoint reverse engineering to integrate unsupported platforms into your automated workflows. Often utilized by clients to bridge legacy databases and isolated cloud systems.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Bot className="text-accent-gold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Custom AI & RAG Systems</h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                Fine-tuned intelligence models and Retrieval-Augmented Generation (RAG) databases for research, customer support, and local data analysis (e.g., custom farming advisory scripts).
              </p>
            </div>

          </div>
        </section>

        <section className="border border-white/10 p-8 rounded-3xl bg-black/40 mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Why Automate Your Marketing & Operations?</h2>
          <ul className="list-disc list-inside text-secondary space-y-3">
            <li><strong>Save ₹30,000 - ₹50,000 monthly</strong> on video editors and copywriters.</li>
            <li><strong>Compounding organic traffic</strong> through relentless, scheduled multi-platform video uploads.</li>
            <li><strong>Zero manual lead leaks</strong> with 24/7 patient/client WhatsApp responses.</li>
          </ul>
        </section>

        {/* FAQs Accordion */}
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
      </div>
    </main>
  );
}

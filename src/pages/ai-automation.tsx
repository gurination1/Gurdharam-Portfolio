import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquare, Video, Bot, Lock, Calendar, Settings2, Sparkles, CheckCircle, RefreshCw, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

export default function AiAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Automation Services India | Custom Bots & Media Pipelines";
  }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-gold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            AI Automation Services India <br />
            <span className="text-accent-gold">WhatsApp Bots & Media Pipelines</span>
          </h1>
          {/* Answer-first summary block for AI Overviews */}
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed font-semibold">
            I engineer custom AI automation systems for businesses in India and worldwide to eliminate manual work and scale revenue. From 24/7 WhatsApp AI agents for salons, gyms, hospitals, and law firms to fully automated YouTube and Instagram content creation pipelines, my solutions save you 20+ hours a week and ensure you never miss a lead.
          </p>
          <div className="mt-8 flex gap-4">
             <Link to="/#contact" className="bg-accent-gold text-void font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300">
                Automate Your Business
             </Link>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Custom Automation Services for Every Industry</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch] mb-8">
            My AI automation systems are not restricted to one niche. I build highly specialized infrastructure for a massive variety of sectors, ensuring outcome-driven results for lawyers, salons, spas, gyms, hospitals, dental clinics, factories, corporate offices, real estate agencies, and e-commerce brands. Whether you need a lead-gen bot for a law firm or a booking engine for a spa, the underlying technology is tailored for you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <MessageSquare className="text-accent-gold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Omni-Industry WhatsApp AI Agents</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Custom conversational chatbots designed for lawyers, salons, gyms, factories, hospitals, and clinics. Operating 24/7, these AI agents qualify incoming leads, propose calendar bookings, answer FAQs instantly, and lock slots directly into your CRM. Never lose a high-paying client because you replied too late.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Video className="text-accent-gold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Faceless Media Pipelines</h3>
              <p className="text-secondary text-sm leading-relaxed">
                A massive cost-saver replacing manual video editors and social media managers. I build programmatic engines that write scripts using LLMs, synthesize natural human voice, compile stock clips using FFmpeg and ComfyUI, and auto-upload content to YouTube, Reels, and Rumble to generate organic traffic 24/7.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Lock className="text-accent-gold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Legacy System Reverse Engineering</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Deep-level API and database reverse engineering to integrate unsupported platforms into your automated workflows. I extract hidden HTTP endpoints, write automated scripts, and connect legacy software used in factories and hospitals where official modern integrations do not exist.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Bot className="text-accent-gold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Custom AI & RAG Databases</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Fine-tuned large language models (LLMs) and Retrieval-Augmented Generation (RAG) databases for internal corporate use. These systems act as secure, local knowledge repositories for legal research in law firms, inventory management in factories, and local advisory files.
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic section explaining technical parameters */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">How My Automation Architecture Works</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Generic automation templates fail because they cannot handle complex edge cases or require expensive monthly SaaS subscriptions. My systems are engineered using custom webhook codebases, running locally on your own infrastructure for maximum data security and ₹0 in ongoing platform subscription costs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 border border-white/5 p-6 rounded-2xl">
              <Calendar className="text-accent-gold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Smart Calendar Integration</h3>
              <p className="text-secondary text-xs leading-relaxed">
                Syncs with Google Calendar, Outlook, and local databases to query and reserve booking slots in real time for spas, salons, gyms, and clinics.
              </p>
            </div>

            <div className="bg-card/50 border border-white/5 p-6 rounded-2xl">
              <Settings2 className="text-accent-gold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Media Orchestration</h3>
              <p className="text-secondary text-xs leading-relaxed">
                Generative Python scripts that control ComfyUI rendering servers, stitching MP4s with customized subtitles, audio, and visual effects automatically.
              </p>
            </div>

            <div className="bg-card/50 border border-white/5 p-6 rounded-2xl">
              <Sparkles className="text-accent-gold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">LLM Classification</h3>
              <p className="text-secondary text-xs leading-relaxed">
                Multi-layer classification models that detect user intent, process local context (Punjabi/Hindi/English), and route queries securely without hallucinations.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Video Automation mechanics */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Cross-Platform Auto-Uploading and Headless Browser Systems</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Automating content delivery across platforms like YouTube, Rumble, Instagram, Dailymotion, Facebook, and X (Twitter) requires robust scheduler pipelines. Because some platforms lack public upload APIs, standard tools fail. I build resilient automation pipelines that bypass these limitations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <Layers className="text-accent-gold mb-3" size={24} />
              <h4 className="font-bold text-white mb-2 text-base">Headless Upload Controllers</h4>
              <p className="text-secondary text-sm leading-relaxed">
                I build headless upload scripts using Puppeteer and Selenium. These scripts simulate user interactions to upload rendered MP4 files directly to platform dashboards, bypassing API restrictions entirely.
              </p>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <RefreshCw className="text-accent-gold mb-3" size={24} />
              <h4 className="font-bold text-white mb-2 text-base">API Authentication Tokens</h4>
              <p className="text-secondary text-sm leading-relaxed">
                For platforms with official APIs (like YouTube Data API and Facebook Graph API), my scripts manage OAuth2 authentication flows, handling token refreshes securely in background cron jobs to prevent connection drops.
              </p>
            </div>
          </div>
        </section>

        <section className="border border-white/10 p-8 rounded-3xl bg-black/40 mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Why Automate Your Marketing & Operations?</h2>
          <p className="text-secondary mb-6 max-w-[66ch]">Stop wasting human potential on repetitive tasks. Automation is the key to scaling your business predictably without inflating your payroll.</p>
          <ul className="list-disc list-inside text-secondary space-y-3">
            <li><strong>Save ₹30,000 - ₹50,000 monthly</strong> by replacing manual video editors, receptionists, and copywriters.</li>
            <li><strong>Compounding organic traffic</strong> through relentless, scheduled multi-platform video uploads across social channels.</li>
            <li><strong>Zero manual lead leaks</strong> with 24/7 WhatsApp responses tailored for lawyers, salons, gyms, factories, and clinics.</li>
            <li><strong>100% data ownership</strong> on your own secure database without monthly subscription locks or third-party interference.</li>
          </ul>
        </section>

        {/* FAQs structured for organic crawlability */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What types of businesses can utilize your WhatsApp AI booking bots?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                My AI automation systems are universally adaptable. I build custom agents for law firms, wellness hospitals, beauty salons, fitness gyms, car dealerships, cleaning services, manufacturing factories, real estate, and consultancy agencies. The bot coordinates availability directly with your calendar and pre-qualifies leads before they reach human staff.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                How do automated faceless video pipelines generate revenue?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Automated pipelines write scripts using LLMs, generate speech using realistic TTS engines, edit clips using FFmpeg and ComfyUI, and auto-upload to YouTube, Reels, and Rumble. These channels build subscribers and monetize via platform ad funds (AdSense, Rumble Partner Program) or drive organic traffic to affiliate landing pages, generating passive income 24/7.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Is organic video automation cheaper than paid social ads?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Absolutely. Paid Meta/Google ads require a daily cash budget; once the budget hits zero, your traffic stops completely. Automated organic video pipelines are a one-time build that publish compounding content assets which stay on search engines and platform feeds forever, driving free, highly targeted traffic 24/7.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Why do you offer API reverse engineering services?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Many legacy CRM systems, local factory databases, or closed SaaS platforms do not have official public APIs. I reverse-engineer these endpoints to extract data and build secure, automated synchronization pipelines where official integrations are unavailable, giving you total control over your tech stack.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

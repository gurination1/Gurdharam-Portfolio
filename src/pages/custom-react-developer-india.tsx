import React, { useEffect } from 'react';
import { ArrowLeft, Code, Zap, ShieldCheck, Layers, Search, ArrowRight, CheckCircle2, MessageSquare, Cpu, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function CustomReactDeveloperIndia() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Custom React Developer India | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'd like to hire a Custom React/Next.js Developer for our web platform.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gurdharam.com/services/custom-react-developer-india#service",
        "name": "Custom React Developer & Next.js Web Engineer in India",
        "provider": { "@id": "https://www.gurdharam.com/#organization" },
        "description": "Hire expert React, Next.js, and Three.js full-stack developer in India. High-performance, pre-rendered SSG web apps with sub-1 second load times.",
        "areaServed": ["India", "Global"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What tech stack do you use for custom React web development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build with React 19, Next.js / Vite SSG, TypeScript, TailwindCSS, Three.js / WebGL for 3D interactions, and Node.js / Python for API backends."
            }
          },
          {
            "@type": "Question",
            "name": "Why hire a custom React developer instead of using WordPress or Shopify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom React sites deliver 100/100 Lighthouse performance, sub-second page loads, zero plugin security vulnerabilities, and 3x higher conversion rates."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 rounded-full text-[var(--accent-gold)] font-mono text-xs uppercase tracking-wider">React · Next.js · TypeScript · Three.js</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Custom React Developer in India <br />
            <span className="text-[var(--accent-gold)]">Sub-Second Modern Web Platforms</span>
          </h1>
          <div className="bg-card border border-[var(--accent-gold)]/20 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              Gurdharam Jeet Singh is a senior React and Next.js full-stack web developer based in India. Engineering high-ticket 2D/3D web applications, SaaS dashboards, and pre-rendered SSG marketing sites that dominate search rankings and drive real revenue.
            </p>
          </div>
        </header>

        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: '<800ms', label: 'Initial DOM load speed', icon: <Zap size={20} /> },
            { stat: '100%', label: 'Type-safe TypeScript codebase', icon: <Code size={20} /> },
            { stat: '3D WebGL', label: 'Spline & Three.js 3D visuals', icon: <Layers size={20} /> },
            { stat: 'SSG / SSR', label: 'Instant search engine indexing', icon: <Search size={20} /> }
          ].map(({ stat, label, icon }) => (
            <div key={stat} className="bg-card border border-white/5 p-5 rounded-2xl text-center">
              <div className="text-[var(--accent-gold)] mb-2 flex justify-center">{icon}</div>
              <div className="text-2xl font-display font-bold text-white mb-1">{stat}</div>
              <div className="text-secondary text-xs leading-tight">{label}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Full-Stack React Engineering Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Code className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">React & Next.js SaaS Web Apps</h3>
              <p className="text-secondary text-sm leading-relaxed">Production-grade web apps built with Next.js App Router, Server Components, and state management (Zustand/Redux). Scalable architecture designed for enterprise growth.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Zap className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">WordPress to Next.js Migration</h3>
              <p className="text-secondary text-sm leading-relaxed">Migrate slow, bloated WordPress or Wix websites to static pre-rendered Next.js/React setups. Reduce page load time by 75% and eliminate security vulnerabilities.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-card border border-[var(--accent-gold)]/20 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Hire a Senior React Developer in India</h2>
          <p className="text-secondary mb-6 leading-relaxed">Let's discuss your web project scope, technology stack, and timeline.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
            <MessageSquare size={20} /> Hire React Developer on WhatsApp
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}

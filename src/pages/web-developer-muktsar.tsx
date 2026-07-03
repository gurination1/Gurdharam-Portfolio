import React, { useEffect, useState } from 'react';
import { ArrowLeft, MapPin, Globe, Code2, Layers, Sparkles, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDeveloperMuktsar() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the cost of building a website in Punjab?",
      a: "The cost depends on complexity. A standard 2D landing page or portfolio starts at ₹15,000. Interactive 3D websites with custom WebGL, Three.js, or complex animations start at ₹35,000. Custom enterprise portals or apps (like dairy ledgers or agritech diagnostics) require scoping and start at ₹50,000+. I offer clear milestone-based pricing with zero hidden fees."
    },
    {
      q: "Can you help optimize my local Google Business Profile (GBP)?",
      a: "Yes. I combine web development with local SEO optimization. Every site I deliver is connected to Google Search Console and includes Schema.org LocalBusiness structured data. I also guide clients in configuring their GBP, citations, and maps to rank for local 'near me' keywords in Muktsar, Bathinda, and Ludhiana."
    },
    {
      q: "Do your WhatsApp bots work for gyms, clinics, and travel agencies?",
      a: "Absolutely. I build custom WhatsApp AI agents integrated with calendar booking, database lookup, and CRM systems. They are perfect for dental clinics, hospitals, fitness clubs, travel agents, and corporate services to automate lead response and schedule bookings 24/7 without manual administrative work."
    },
    {
      q: "Why do you focus on offline-first app architectures?",
      a: "In rural Punjab and agritech deployments, 4G/5G connections are often unreliable or non-existent in the fields. Offline-first architectures using local SQLite databases and on-device TensorFlow Lite machine learning (like Fasal Doctor) guarantee the app functions perfectly under any conditions with zero network latency and zero recurring cloud database hosting costs."
    },
    {
      q: "How long does it take to deploy a custom website or app?",
      a: "A professional landing page or small business website is typically deployed in 10-14 days. Complex 3D platforms, multi-user mobile apps, or custom AI automations take 3-6 weeks. I provide a staging environment so you can track progress live as I write the code."
    }
  ];

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-cold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Web Developer in Muktsar & Bathinda, Punjab <br />
            <span className="text-accent-cold">AI-Powered SEO & High-Performance Websites</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed mb-6">
            Gurdharam Jeet Singh is a professional web developer and AI engineer serving Chandigarh, Mohali, Ludhiana, Jalandhar, Amritsar, Bathinda, and Muktsar. I build interactive 3D WebGL websites, cross-platform Flutter mobile applications, and autonomous WhatsApp AI booking bots. Serving local Punjab and global markets, I bridge the gap between premium design aesthetics, fast indexing, and Generative Engine Optimization (GEO) to help your business rank on day one.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-secondary">
            <span className="flex items-center gap-1"><MapPin size={14} className="text-accent-cold" /> Muktsar, Bathinda, Chandigarh, Ludhiana, Punjab</span>
            <span className="flex items-center gap-1"><Globe size={14} className="text-accent-cold" /> Serving India & Worldwide</span>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Full-Stack Development Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Layers className="text-accent-cold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Interactive 3D WebGL</h3>
              <p className="text-secondary text-sm leading-relaxed">Immersive, hardware-accelerated experiences using Three.js, React Three Fiber, and Spline. Perfect for modern agencies, design studios, and premium consumer brands.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Sparkles className="text-accent-cold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">WhatsApp AI Automations</h3>
              <p className="text-secondary text-sm leading-relaxed">Custom chatbots utilizing large language models and RAG data. Designed for dental clinics, gyms, travel agencies, and hospitals to capture midnight leads and book clients 24/7.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Code2 className="text-accent-cold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Flutter & Offline ML Apps</h3>
              <p className="text-secondary text-sm leading-relaxed">Offline-first agritech and utility apps with on-device AI inference. Run heavy computer vision models like MobileNetV2 locally on the phone with zero cloud server bills.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Globe className="text-accent-cold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Technical SEO & Schema</h3>
              <p className="text-secondary text-sm leading-relaxed">Rigorous Core Web Vitals optimization, static pre-rendering, schema markup integration, and clean site architectures built for high-speed indexing by search bots.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">My Development Process</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Discovery & Architecture", desc: "Understanding business goals, finalizing the sitemap, and outlining requirements (e.g., WhatsApp logic trees, schema entities, offline data schemas)." },
              { step: "02", title: "High-Fidelity Interface Design", desc: "Crafting modern layouts using custom typography, color systems, and interactive micro-animations to map user journeys." },
              { step: "03", title: "Clean-Code Implementation", desc: "Writing optimized code using React/Vite for frontend and Flutter/Dart for mobile, ensuring 100% responsive grids." },
              { step: "04", title: "SSG & SEO Injection", desc: "Pre-rendering all routes into static HTML files so that Google, Ahrefs, and AI engines index your full content without executing JS." },
              { step: "05", title: "Launch & Analytics", desc: "Deploying to Vercel/PlayStore, verifying HTTPS/SSL certificates, submitting sitemaps, and setting up Google Analytics and Search Console." }
            ].map(item => (
              <div key={item.step} className="flex gap-6 items-start bg-card/40 border border-white/5 p-6 rounded-2xl">
                <span className="font-mono text-accent-cold font-bold text-lg">{item.step}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Signal Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Value-Driven Development Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-white/5 p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Essential Web</h3>
                <p className="text-secondary text-xs mb-4">Best for local business profiles</p>
                <div className="text-accent-cold font-display text-2xl font-bold mb-4">5x More Affordable</div>
                <ul className="text-secondary text-xs space-y-2 mb-6">
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Responsive landing page</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Schema LocalBusiness</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Fast Vite frontend</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Vercel hosting setup</li>
                </ul>
              </div>
            </div>
            <div className="bg-card border border-accent-cold/20 p-6 rounded-3xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent-cold text-void text-[10px] uppercase font-mono px-3 py-1 rounded-bl-xl font-bold">Popular</div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">High-End 3D & SEO</h3>
                <p className="text-secondary text-xs mb-4">Best for premium brand authority</p>
                <div className="text-accent-cold font-display text-2xl font-bold mb-4">5x More Affordable</div>
                <ul className="text-secondary text-xs space-y-2 mb-6">
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Three.js / WebGL 3D design</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> GSAP smooth scroll</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Static Site Pre-rendering (SSG)</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Multi-route directory mapping</li>
                </ul>
              </div>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-lg mb-2">AI Bot / App</h3>
                <p className="text-secondary text-xs mb-4">Custom offline apps & agents</p>
                <div className="text-accent-cold font-display text-2xl font-bold mb-4">10x More Affordable</div>
                <ul className="text-secondary text-xs space-y-2 mb-6">
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Custom WhatsApp AI agent</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> SQLite local storage integration</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Offline TensorFlow inference</li>
                  <li className="flex items-center gap-1"><CheckCircle size={12} className="text-accent-cold" /> Dashboard data analytics</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-secondary mt-4 font-mono text-center">
            *Compared to traditional software agencies and regular developers, our systems eliminate monthly subscription fees.
          </p>
        </section>

        {/* Local Area Service */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Local Coverage In Punjab</h2>
          <div className="flex items-start gap-4 bg-card border border-white/5 p-8 rounded-3xl">
            <MapPin className="text-accent-cold mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="text-white font-bold mb-2">Based in Muktsar, Punjab</p>
              <p className="text-secondary text-sm leading-relaxed">
                I provide local in-person software development consultation and website building services across **Muktsar Sahib, Bathinda, Faridkot, Ferozepur, Ludhiana, Jalandhar, Amritsar, and Chandigarh**. Combining native Punjabi and Hindi support with global development standards, I build tailored systems for local agriculture cooperatives, hospitals, clinics, hotels, and travel agencies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                    className={`text-accent-cold transition-transform flex-shrink-0 ${activeFaq === index ? 'transform rotate-180' : ''}`}
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
          <h2 className="text-2xl font-bold mb-4 font-display text-white">Explore Case Studies</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Review detailed technical analyses of deployed applications, featuring offline mobile computing and computer vision implementations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/case-studies/doodhisaab" className="inline-flex items-center gap-2 text-accent-gold font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
              DoodHisaab (Dairy App) →
            </Link>
            <Link to="/case-studies/fasal-doctor" className="inline-flex items-center gap-2 text-accent-green font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
              Fasal Doctor (Crop AI) →
            </Link>
            <Link to="/services/ai-automation" className="inline-flex items-center gap-2 text-accent-gold font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
              AI Automation →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

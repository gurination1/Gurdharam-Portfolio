import React, { useEffect } from 'react';
import { ArrowLeft, Globe, Search, Layers, Zap, Code, ShieldCheck, Milestone, Sparkles, RefreshCw, ArrowRight, CheckCircle, TrendingUp, Users, Star, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

export default function WebDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Web Developer Chandigarh & Punjab | High-End 3D & 2D Websites | Gurdharam";
  }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-cold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-accent-cold/10 border border-accent-cold/20 rounded-full text-accent-cold font-mono text-xs uppercase tracking-wider">React · Three.js · SSG · Core Web Vitals</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Website Developer in Chandigarh <br />
            <span className="text-accent-cold">High-Performance 2D & 3D Web Platforms</span>
          </h1>
          {/* Answer capsule — front-loaded direct answer */}
          <div className="bg-card border border-accent-cold/20 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              I build premium custom websites and web applications for businesses in Chandigarh, Ludhiana, Bathinda, Amritsar, and globally — using React, Vite, Three.js, and GSAP. Every site I deliver is SEO-optimized from the first line of code, pre-rendered for instant crawler discovery, and designed to convert visitors into clients.
            </p>
          </div>
          <p className="text-base text-secondary max-w-[66ch] leading-relaxed">
            No WordPress, no generic templates, no Wix limitations. I write clean, custom code that loads under 1 second, ranks on Google, and looks stunning on every device — from a 3D interactive corporate site to a high-converting local business landing page.
          </p>
        </header>

        {/* Stats bar */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: '<1s', label: 'Average page load time (React + Vite)', icon: <Zap size={20} /> },
            { stat: '100', label: 'Lighthouse performance score target', icon: <TrendingUp size={20} /> },
            { stat: '3D', label: 'WebGL sites with Three.js & Spline', icon: <Layers size={20} /> },
            { stat: 'Day 1', label: 'SEO indexability from launch', icon: <Search size={20} /> },
          ].map(({ stat, label, icon }) => (
            <div key={stat} className="bg-card border border-white/5 p-5 rounded-2xl text-center">
              <div className="text-accent-cold mb-2 flex justify-center">{icon}</div>
              <div className="text-2xl font-display font-bold text-white mb-1">{stat}</div>
              <div className="text-secondary text-xs leading-tight">{label}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-3 font-display text-white">Web Development Capabilities</h2>
          <p className="text-secondary mb-8 max-w-[66ch]">From interactive 3D brand experiences to high-conversion landing pages — here is what I build and why each matters for your business:</p>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Layers className="text-accent-cold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Interactive 3D WebGL Websites</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Go beyond flat, forgettable templates. I build immersive, GPU-accelerated 3D web experiences using Three.js and Spline that instantly establish premium brand authority and convert first-time visitors into paying clients. Ideal for agencies, product companies, and luxury brands.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> Three.js & React Three Fiber rendering</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> GLTF model optimization (under 1.5MB)</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> 60 FPS smooth performance on mobile</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Search className="text-accent-cold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">SEO Architecture — Rank from Day One</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                A stunning website that doesn't rank is a liability. I bake technical SEO directly into the codebase: semantic HTML5, static pre-rendering for all routes, schema markup (LocalBusiness, Service, FAQ), canonical tags, and Core Web Vitals optimization that puts you ahead of template-built competitors.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> Static pre-rendering for all pages</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> JSON-LD schema on every route</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> IndexNow instant submission</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Globe className="text-accent-cold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Full-Stack Business Web Applications</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Complete commercial infrastructure from domain registration to custom database setup. Booking systems, customer portals, ecommerce pipelines, and CMS-backed content sites — all built with Node.js backends, PostgreSQL or SQLite databases, and secure user authentication.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> Custom booking & reservation systems</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> PostgreSQL & SQLite database setup</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> Secure user login & payment integration</li>
              </ul>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Zap className="text-accent-cold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">GSAP Animated Portfolio & Agency Sites</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                High-performance portfolio and agency sites featuring smooth GSAP scroll animations, magnetic cursor effects, fluid page transitions, and micro-interactions. These sites get shared — they are engineered to be memorable.
              </p>
              <ul className="text-secondary text-xs space-y-1">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> GSAP ScrollTrigger animations</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> Custom cursor & magnetic effects</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-cold" /> Framer Motion page transitions</li>
              </ul>
            </div>

          </div>
        </section>

        {/* WebGL Performance */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">How I Keep 3D Websites Fast — WebGL Optimization</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Integrating 3D graphics into a website is technically demanding. Unoptimized Three.js scenes cause mobile browsers to crash, frames to drop below 30 FPS, and page load times to exceed 8 seconds. I build custom optimization pipelines that reduce asset sizes by up to 80% while preserving visual quality.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <Sparkles className="text-accent-cold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Draco Compression & Polygon Reduction</h3>
              <p className="text-secondary text-sm leading-relaxed">
                I apply Draco geometry compression and reduce polygon density on complex models. Combined with optimized texture atlases and mipmap generation, a 3D hero scene that previously loaded at 45MB is delivered under 1.5MB without visible quality loss.
              </p>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <RefreshCw className="text-accent-cold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Vite Chunk Splitting & Module Tree-Shaking</h3>
              <p className="text-secondary text-sm leading-relaxed">
                I configure Rollup within Vite to split vendor bundles (Three.js, GSAP, Framer Motion) into separate cached chunks. First page load only downloads the critical path. Subsequent routes load in milliseconds from the browser cache.
              </p>
            </div>
          </div>
        </section>

        {/* How I Build */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">My Web Development Process — From Discovery to Launch</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            When you hire me as your website developer in Chandigarh or Ludhiana, you receive a custom system built for your specific business outcomes. Here is exactly how I work:
          </p>
          
          <div className="space-y-4">
            {[
              { step: '01', title: 'Discovery & Site Architecture', desc: 'Understanding your business goals, target audience, and service areas. Finalizing the sitemap, page hierarchy, and internal linking structure before writing a single line of code.' },
              { step: '02', title: 'Custom React & Vite Development', desc: 'Writing optimized TypeScript with React and Vite. Zero WordPress bloat, zero generic plugins. Pages load in under 1 second because the code is lean and purposeful.' },
              { step: '03', title: 'SEO Architecture Injection', desc: 'Adding canonical tags, schema markup (LocalBusiness, Service, FAQ, BreadcrumbList), Open Graph metadata, and static pre-rendering for every route so Google indexes your full content from day one.' },
              { step: '04', title: 'Core Web Vitals Optimization', desc: 'Tuning LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift) scores until your site achieves 90+ on PageSpeed Insights — a direct Google ranking signal.' },
              { step: '05', title: 'Launch, Monitoring & Handover', desc: 'Deploying to Vercel or your chosen host with automatic SSL, submitting sitemaps to Google Search Console, and setting up Google Analytics. Full handover with documentation.' },
            ].map(item => (
              <div key={item.step} className="flex gap-6 items-start bg-card/40 border border-white/5 p-6 rounded-2xl">
                <span className="font-mono text-accent-cold font-bold text-lg flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries & Locations */}
        <section className="border border-white/10 p-8 rounded-3xl bg-black/40 mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Industries & Service Locations</h2>
          <p className="text-secondary leading-relaxed mb-4">
            I deliver custom website development for businesses across Punjab and internationally:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-white font-bold text-sm mb-2">Industries Served</h3>
              <ul className="text-secondary text-sm space-y-1">
                <li>• Hospitals, Dental Clinics & Medical Practices</li>
                <li>• Travel Agencies, Hotels & Tourism Operators</li>
                <li>• Real Estate, Restaurants & Retail Brands</li>
                <li>• Law Firms, Consultancies & B2B Companies</li>
                <li>• Tech Startups, SaaS Companies & Agencies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mb-2">Primary Service Locations</h3>
              <ul className="text-secondary text-sm space-y-1">
                <li>• Chandigarh & Mohali (major hub)</li>
                <li>• Ludhiana, Amritsar & Jalandhar</li>
                <li>• Bathinda, Muktsar & Faridkot</li>
                <li>• Delhi NCR (remote delivery)</li>
                <li>• International clients (USA, UK, Canada)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What is the difference between WordPress and a custom React website?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                WordPress loads dozens of PHP scripts, database queries, and third-party plugins for every page request — often resulting in 3–8 second load times and security vulnerabilities. A custom React site compiled by Vite delivers pre-built, static HTML in under 500ms. Faster load time means better user experience and higher Google rankings.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What is the typical timeline to build a custom website?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                A standard professional landing page takes 10–14 days. An interactive 3D WebGL site or a full-stack web application with booking systems and custom databases takes 3–6 weeks depending on feature complexity and asset requirements.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                How do you ensure my website ranks on Google from day one?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Every site I build uses static pre-rendering to generate plain HTML for each route, canonical link tags, JSON-LD schema markup (LocalBusiness, Service, FAQ, BreadcrumbList), and IndexNow submission at launch. Google's crawler can read your full content without executing JavaScript — this dramatically speeds up indexing.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Can you set up domain registration, hosting, and SSL certificates?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes. I handle the complete server lifecycle — domain purchase, DNS A/CNAME record configuration, deployment to fast edge hosting (Vercel, AWS, or Cloudflare Pages), and automatic SSL certificate provisioning. Everything is set up, tested, and handed over with documentation.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Do you build custom ecommerce platforms and database systems?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes. I build custom secure databases using Node.js, PostgreSQL, and SQLite. These support inventory management, appointment booking, customer portals, and payment gateways (Razorpay, Stripe) without paying monthly Shopify fees. Full ownership of your data and code.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Related Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/services/web-developer-muktsar-punjab" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-cold/30 transition-colors group">
              <Globe className="text-accent-cold flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-cold transition-colors">Web Developer in Muktsar & Bathinda</div>
                <div className="text-secondary text-xs mt-1">Local SEO-optimized websites for Punjab businesses</div>
              </div>
              <ArrowRight className="text-accent-cold ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/services/ai-automation" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-cold/30 transition-colors group">
              <Zap className="text-accent-cold flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-cold transition-colors">AI Automation Services</div>
                <div className="text-secondary text-xs mt-1">WhatsApp bots, video pipelines, AI integrations</div>
              </div>
              <ArrowRight className="text-accent-cold ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/services/whatsapp-bot-dental-clinic" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-cold/30 transition-colors group">
              <MessageSquare className="text-accent-cold flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-cold transition-colors">WhatsApp Automation Bots</div>
                <div className="text-secondary text-xs mt-1">24/7 booking automation for all businesses</div>
              </div>
              <ArrowRight className="text-accent-cold ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/blog" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-cold/30 transition-colors group">
              <Star className="text-accent-cold flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-cold transition-colors">Engineering Blog</div>
                <div className="text-secondary text-xs mt-1">Deep-dives on web performance & offline AI</div>
              </div>
              <ArrowRight className="text-accent-cold ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card border border-accent-cold/20 p-8 md:p-12 rounded-3xl mb-16">
          <h2 className="text-2xl font-bold mb-4 font-display text-white">Start Your Website Project</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Let's build a website that ranks, converts, and represents your business at its best. Whether you need a simple local business page or a complex interactive 3D platform — I deliver on time, with full code ownership.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {['React & Vite', 'Three.js 3D', 'GSAP Animations', 'SSG Pre-rendering', 'JSON-LD Schema', 'Core Web Vitals', 'IndexNow Submission', 'Custom Databases'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-cold/20 bg-accent-cold/5 rounded-full text-accent-cold font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent-cold text-void font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
            Discuss Your Website Project <ArrowRight size={16} />
          </Link>
        </section>

        <Footer />
      </div>
    </main>
  );
}

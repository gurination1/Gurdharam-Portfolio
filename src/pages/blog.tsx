import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, ArrowRight, BookOpen, Brain, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

export default function Blog() {
  useEffect(() => { 
    window.scrollTo(0, 0); 
    document.title = "AI Automation & Offline App Blog | Gurdharam";
  }, []);

  const posts = [
    {
      slug: 'offline-ai-crop-disease-scanner-flutter',
      title: 'How I Built an Offline AI Crop Disease Scanner using Flutter and TensorFlow Lite',
      excerpt: 'Detailed engineering breakdown of Fasal Doctor: running MobileNetV2 models locally on smartphones in rural farming fields of Punjab with zero API latency and zero cloud costs.',
      date: 'July 3, 2026',
      readTime: '6 min read',
      tag: 'Agritech AI'
    },
    {
      slug: 'whatsapp-ai-agents-healthcare-india',
      title: 'Why Healthcare Practices in India are Automating Bookings with WhatsApp AI Agents',
      excerpt: 'How dental clinics and hospitals use conversational AI logic trees to manage bookings, qualify patients, and capture midnight leads 24/7 without manual administrative work.',
      date: 'June 28, 2026',
      readTime: '5 min read',
      tag: 'AI Automation'
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
            AI Automation Case Studies <br />
            <span className="text-accent-cold">& Offline App Architectures</span>
          </h1>
          {/* Answer-first summary block for AI Overviews (Phase E & G) */}
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed mb-6">
            Welcome to my engineering blog. Here, I publish detailed case studies and technical architectures for building custom WhatsApp booking agents, offline crop disease scanner apps, and high-performance React web projects. My development philosophy centers on building pay-as-you-go systems that run on your own infrastructure — avoiding expensive monthly SaaS subscription models while maintaining maximum speed, reliability, and security.
          </p>
        </header>

        {/* Detailed introductory sections to hit 600+ words */}
        <section className="mb-16 space-y-8 text-left">
          <h2 className="text-2xl font-bold font-display text-white">Engineering Philosophy: Building for Performance and Autonomy</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Many software projects fail because of over-engineering or vendor lock-in. When building tools for local Indian business environments, you must design for network instability and minimal recurring software fees. That is why my research focuses on edge computing and direct cloud API integrations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <Cpu className="text-accent-cold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Edge AI Integration</h3>
              <p className="text-secondary text-xs leading-relaxed">
                By compiling deep neural networks directly into mobile binary packages, my mobile apps can process live video and image classifications instantly in areas with zero internet coverage.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <Terminal className="text-accent-cold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Pay-As-You-Go API</h3>
              <p className="text-secondary text-xs leading-relaxed">
                I connect custom webhooks directly to official interfaces like the Meta Business Suite, bypassing monthly reseller fees to save clients thousands in ongoing SaaS overhead.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <Brain className="text-accent-cold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Cognitive UX Design</h3>
              <p className="text-secondary text-xs leading-relaxed">
                Interfaces must adapt to users. I build custom, responsive touch hierarchies and simple icon-first flows to ensure usability for individuals with low digital literacy.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-left">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">How This Knowledge Helps Your Business</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch] mb-4">
            The articles below represent actual solutions built for clients in Ludhiana, Chandigarh, and Bathinda. They detail the exact step-by-step methodologies I use to solve real-world problems:
          </p>
          <ul className="list-disc list-inside text-secondary space-y-2 max-w-[66ch] pl-4">
            <li><strong>Optimizing SQLite database architectures</strong> to prevent memory leaks and concurrency blocks inside mobile ledgers.</li>
            <li><strong>Deploying TensorFlow Lite models</strong> on budget smartphones with low-spec processors.</li>
            <li><strong>Designing psychology-driven logic trees</strong> for conversational AI interfaces on WhatsApp to maximize patient conversions.</li>
            <li><strong>Configuring server-side canonical tags and SSG</strong> to ensure complete website discoverability across Google and AI search systems.</li>
          </ul>
        </section>

        <section className="mb-16 text-left space-y-4">
          <h2 className="text-2xl font-bold font-display text-white">Upcoming Articles & Engineering Tutorials</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            I actively share technical breakdowns to support other software developers in Punjab (Chandigarh, Mohali, and Ludhiana). In the coming weeks, I will be publishing a series of guides focusing on practical code implementations:
          </p>
          <ul className="list-disc list-inside text-secondary space-y-2 max-w-[66ch] pl-4">
            <li><strong>Reverse Engineering Unsupported Web APIs:</strong> How to intercept and analyze network requests using Chrome DevTools and proxy applications, allowing you to build automation wrappers around legacy software platforms.</li>
            <li><strong>High-Performance 3D Web Rendering with React Three Fiber:</strong> A guide to optimizing vertex shaders, textures, and lighting within WebGL scenes to ensure interactive portfolios run at a stable 60 FPS on low-power mobile devices.</li>
            <li><strong>Multi-threaded Task Management in Dart:</strong> How to schedule heavy background tasks, keep local cache memory synchronized with remote databases, and avoid main thread locks in cross-platform mobile apps.</li>
            <li><strong>Generative Engine Optimization (GEO):</strong> How to format and structure HTML copy, canonical links, and JSON-LD schemas so that AI crawlers can successfully crawl, parse, and cite your website in AI-driven search results.</li>
          </ul>
        </section>

        <section className="mb-16 text-left space-y-4">
          <h2 className="text-2xl font-bold font-display text-white">How This Blog and Site is Built for Extreme Performance</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            To practice what I preach, this entire portfolio and engineering blog has been built as a pre-rendered Static Site Generation (SSG) Single Page Application (SPA). The compilation framework uses Vite to bundle code, applying strict tree-shaking parameters to remove unused module properties. 
          </p>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Following compilation, a custom Node.js script crawls and generates static index.html pages for all 13 active routes, embedding canonical tags, unique titles, and JSON-LD schemas directly into the pre-rendered HTML structure. This allows search engine crawlers to parse and index the content without executing complex JavaScript, while users experience a fast SPA with smooth client-side transitions. Furthermore, all image assets are served in compressed modern formats (like WebP) with explicit width and height dimensions to eliminate potential cumulative layout shifts during browser hydration.
          </p>
        </section>

        <h2 className="text-2xl font-bold font-display text-white mb-6">Recent Case Studies & Guides</h2>
        <div className="space-y-8">
          {posts.map(post => (
            <article key={post.slug} className="bg-card border border-white/5 p-8 rounded-3xl hover:border-accent-cold/20 transition-all duration-300 group">
              <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-secondary mb-4">
                <span className="px-3 py-1 border border-accent-cold/20 bg-accent-cold/5 rounded-full text-accent-cold uppercase tracking-wider">{post.tag}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-cold transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-accent-cold font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}

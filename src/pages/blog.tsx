import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  useEffect(() => { 
    window.scrollTo(0, 0); 
    document.title = "AI Automation Case Studies & Offline App Architectures | Gurdharam Jeet Singh";
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
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            In-depth case studies, development insights, and architectures for custom WhatsApp booking bots, offline-first agricultural apps, and high-performance local SEO optimization.
          </p>
        </header>

        <div className="space-y-8">
          {posts.map(post => (
            <article key={post.slug} className="bg-card border border-white/5 p-8 rounded-3xl hover:border-accent-cold/20 transition-all duration-300 group">
              <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-secondary mb-4">
                <span className="px-3 py-1 border border-accent-cold/20 bg-accent-cold/5 rounded-full text-accent-cold uppercase tracking-wider">{post.tag}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-cold transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-accent-cold font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

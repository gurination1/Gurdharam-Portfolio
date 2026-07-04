import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, MessageSquare, Sparkles, Code2, AlertTriangle, Lightbulb } from 'lucide-react';
import Footer from '@/components/ui/footer';
import verticalsData from '../data/verticals.json';

interface VerticalData {
  id: string;
  type: string;
  name: string;
  title: string;
  metaDescription: string;
  painPoint: string;
  example: string;
  parentPath: string;
  parentName: string;
  crossLinks: string[];
}

export default function VerticalServicePage({ type }: { type: string }) {
  const { verticalId } = useParams<{ verticalId: string }>();
  const navigate = useNavigate();

  // Find current vertical data
  const vertical = (verticalsData as VerticalData[]).find(
    v => v.id === verticalId && v.type === type
  );

  useEffect(() => {
    if (vertical) {
      window.scrollTo(0, 0);
      document.title = vertical.title;
    }
  }, [vertical]);

  if (!vertical) {
    return (
      <main className="min-h-screen bg-void text-primary flex flex-col items-center justify-center p-6">
        <AlertTriangle className="text-red-500 mb-4" size={48} />
        <h1 className="text-2xl font-bold font-display text-white mb-2">Service Vertical Not Found</h1>
        <p className="text-secondary text-sm mb-6 text-center max-w-md">
          The requested industry service path does not exist or has been moved.
        </p>
        <Link to="/" className="px-6 py-2.5 bg-accent-gold text-void font-bold rounded-xl text-sm">
          Return to Portfolio
        </Link>
      </main>
    );
  }

  // Get other verticals of the same type for cross-linking
  const siblingVerticals = (verticalsData as VerticalData[]).filter(
    v => v.type === type && v.id !== vertical.id
  ).slice(0, 3);

  // Styling properties depending on the service type
  const theme = {
    color: type === 'whatsapp-bot' ? 'text-accent-gold' : type === 'social-media-automation' ? 'text-accent-gold' : 'text-accent-cold',
    border: type === 'whatsapp-bot' ? 'border-accent-gold/20' : type === 'social-media-automation' ? 'border-accent-gold/20' : 'border-accent-cold/20',
    bg: type === 'whatsapp-bot' ? 'bg-accent-gold/5' : type === 'social-media-automation' ? 'bg-accent-gold/5' : 'bg-accent-cold/5',
    icon: type === 'whatsapp-bot' ? <MessageSquare size={28} className="text-accent-gold" /> : type === 'social-media-automation' ? <Sparkles size={28} className="text-accent-gold" /> : <Code2 size={28} className="text-accent-cold" />
  };

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to={vertical.parentPath} className="inline-flex items-center text-secondary hover:text-white transition-colors mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to {vertical.parentName} Hub
        </Link>

        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className={`px-3 py-1 ${theme.bg} border ${theme.border} rounded-full ${theme.color} font-mono text-xs uppercase tracking-wider`}>
              {vertical.parentName} · {vertical.name}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 text-white">
            {vertical.title.split('|')[0].trim()}
          </h1>
          
          {/* Answer Capsule */}
          <div className={`bg-card border ${theme.border} rounded-2xl p-6 mb-8`}>
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              {vertical.metaDescription}
            </p>
          </div>
        </header>

        {/* Pain Point Section */}
        <section className="mb-12 bg-card border border-white/5 p-8 rounded-3xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={24} />
            <div>
              <h2 className="text-xl font-bold text-white mb-2 font-display">The Core Industry Pain Point</h2>
              <p className="text-secondary text-base leading-relaxed">
                {vertical.painPoint}
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Solution Section */}
        <section className="mb-16 bg-card border border-white/5 p-8 rounded-3xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <Lightbulb className="text-green-500 mt-1 flex-shrink-0" size={24} />
            <div>
              <h2 className="text-xl font-bold text-white mb-2 font-display">How My Custom System Solves This</h2>
              <p className="text-secondary text-base leading-relaxed mb-4">
                {vertical.example}
              </p>
              <div className="p-4 bg-void/50 rounded-xl border border-white/5 text-xs font-mono text-secondary">
                <strong>Deployment Spec:</strong> Direct connection to production APIs, no recurring platform reseller margins, 100% data ownership on dedicated server space.
              </div>
            </div>
          </div>
        </section>

        {/* General Pitch Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Key Features Built Into Every Build</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <CheckCircle className="text-green-500 mb-2" size={20} />
              <h3 className="font-bold text-white mb-1 text-sm">Empathetic Conversational UX</h3>
              <p className="text-secondary text-xs leading-relaxed">System messaging configured to mirror actual client communication styles in English, Hindi, and Punjabi.</p>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <CheckCircle className="text-green-500 mb-2" size={20} />
              <h3 className="font-bold text-white mb-1 text-sm">Full Database & API Integration</h3>
              <p className="text-secondary text-xs leading-relaxed">Pipes parameters directly to Google Sheets, SQLite databases, calendar software, or your business ERP.</p>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <CheckCircle className="text-green-500 mb-2" size={20} />
              <h3 className="font-bold text-white mb-1 text-sm">No Forced Reseller Billing</h3>
              <p className="text-secondary text-xs leading-relaxed">Configured directly via production keys (Meta/Tensorflow/AWS) to ensure you pay zero markup subscription costs.</p>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <CheckCircle className="text-green-500 mb-2" size={20} />
              <h3 className="font-bold text-white mb-1 text-sm">SEO & Core Web Vitals Ready</h3>
              <p className="text-secondary text-xs leading-relaxed">Built statically pre-rendered for search engines, passing 95+ lighthouse audit goals at launch.</p>
            </div>
          </div>
        </section>

        {/* Cross-linking Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Related Industry Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {siblingVerticals.map(sib => {
              const url = `/services/${sib.type === 'whatsapp-bot' ? 'whatsapp-bot-' + sib.id : sib.type === 'social-media-automation' ? 'social-media-automation-' + sib.id : 'website-design-' + sib.id}`;
              return (
                <Link key={sib.id} to={url} className="flex flex-col justify-between bg-card border border-white/5 p-5 rounded-2xl hover:border-white/20 transition-all group">
                  <div>
                    <div className="text-xs text-secondary font-mono mb-2 uppercase">{sib.name}</div>
                    <div className="text-white font-bold text-sm leading-tight group-hover:text-accent-gold transition-colors">{sib.title.split('|')[0]}</div>
                  </div>
                  <ArrowRight className="text-secondary group-hover:text-white transition-colors mt-4 self-end" size={16} />
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className={`bg-card border ${theme.border} p-8 md:p-12 rounded-3xl mb-16`}>
          <h2 className="text-2xl font-bold mb-4 font-display text-white">Scale Your {vertical.name} Operations Today</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Get a tailored, one-time-fee {vertical.parentName.toLowerCase()} system built to address your exact business requirements. We connect directly to official API architectures to protect data ownership.
          </p>
          <Link to="/#contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-accent-gold text-void hover:opacity-90 transition-opacity`}>
            Request System Blueprint <ArrowRight size={16} />
          </Link>
        </section>

        <Footer />
      </div>
    </main>
  );
}

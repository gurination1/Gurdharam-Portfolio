import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageSquare, Sparkles, Code2, AlertTriangle, Lightbulb } from 'lucide-react';
import Footer from '@/components/ui/footer';
import verticalsData from '../data/verticals.json';

interface RoiMetric {
  metric: string;
  value: string;
  detail?: string;
  timeframe?: string;
  description?: string;
}

interface ComplianceStandard {
  standard: string;
  authority: string;
  requirement: string;
  implementation: string;
}

interface WorkflowStep {
  step: number;
  name?: string;
  desc?: string;
  title?: string;
  actor: string;
  action?: string;
  tech: string;
}

interface VerticalFaq {
  question: string;
  answer: string;
}

export interface VerticalData {
  id: string;
  type: string;
  name: string;
  title: string;
  metaDescription: string;
  painPoint: string;
  example: string;
  parentPath: string;
  parentName: string;
  roi?: RoiMetric[];
  roiMetrics?: RoiMetric[];
  compliance?: ComplianceStandard[];
  workflow?: WorkflowStep[];
  faqs?: VerticalFaq[];
  techStack?: string[];
}

export default function VerticalServicePage({ type, vertical: propVertical }: { type?: string; vertical?: VerticalData }) {
  const { verticalId } = useParams<{ verticalId?: string }>();

  // Find current vertical data
  const vertical = propVertical || (verticalsData as VerticalData[]).find(
    v => (v.id === verticalId || `whatsapp-bot-${v.id}` === verticalId || `social-media-automation-${v.id}` === verticalId || `website-design-${v.id}` === verticalId) && (!type || v.type === type)
  ) || (verticalsData as VerticalData[]).find(
    v => v.id === verticalId
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
  const currentType = vertical.type || type || 'whatsapp-bot';
  const siblingVerticals = (verticalsData as VerticalData[]).filter(
    v => v.type === currentType && v.id !== vertical.id
  ).slice(0, 3);

  // Styling properties depending on the service type
  const theme = {
    color: currentType === 'whatsapp-bot' ? 'text-accent-gold' : currentType === 'social-media-automation' ? 'text-accent-gold' : 'text-accent-cold',
    border: currentType === 'whatsapp-bot' ? 'border-accent-gold/20' : currentType === 'social-media-automation' ? 'border-accent-gold/20' : 'border-accent-cold/20',
    bg: currentType === 'whatsapp-bot' ? 'bg-accent-gold/5' : currentType === 'social-media-automation' ? 'bg-accent-gold/5' : 'bg-accent-cold/5',
    icon: currentType === 'whatsapp-bot' ? <MessageSquare size={28} className="text-accent-gold" /> : currentType === 'social-media-automation' ? <Sparkles size={28} className="text-accent-gold" /> : <Code2 size={28} className="text-accent-cold" />
  };

  const roiList = vertical.roi || vertical.roiMetrics || [];
  const workflowList = vertical.workflow || [];

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
          
          {/* Direct-Answer Summary Card */}
          <div id={`def-${vertical.id}`} className={`bg-card border ${theme.border} rounded-2xl p-6 md:p-8 mb-8`}>
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              {vertical.metaDescription}
            </p>
          </div>
        </header>

        {/* Quantified ROI Benchmark Section */}
        {roiList.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 font-display text-white flex items-center gap-2">
              <span className="text-accent-gold font-mono">[ 01 ]</span> Quantified ROI & Performance Benchmarks
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {roiList.map((roi, idx) => (
                <div key={idx} className="bg-card border border-white/10 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-secondary uppercase tracking-wider mb-1">{roi.timeframe || 'Immediate Gain'}</div>
                    <div className="text-3xl font-bold font-mono text-accent-gold mb-2">{roi.value}</div>
                    <div className="text-sm font-bold text-white mb-2">{roi.metric}</div>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed mt-2">{roi.detail || roi.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pain Point Section */}
        <section className="mb-12 bg-card border border-white/5 p-8 rounded-3xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={24} />
            <div>
              <h2 className="text-xl font-bold text-white mb-2 font-display">The Core Industry Bottleneck</h2>
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
              <h2 className="text-xl font-bold text-white mb-2 font-display">How My Custom Architecture Solves This</h2>
              <p className="text-secondary text-base leading-relaxed mb-4">
                {vertical.example}
              </p>
              <div className="p-4 bg-void/50 rounded-xl border border-white/5 text-xs font-mono text-secondary">
                <strong>Deployment Spec:</strong> Direct connection to production APIs, no recurring platform reseller margins, 100% data ownership on dedicated server space.
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Production Workflow */}
        {workflowList.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 font-display text-white flex items-center gap-2">
              <span className="text-accent-gold font-mono">[ 02 ]</span> End-to-End Production Pipeline
            </h2>
            <div className="space-y-4">
              {workflowList.map((step) => (
                <div key={step.step} className="bg-card border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-mono font-bold text-accent-gold flex-shrink-0 text-sm">
                      0{step.step}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white text-base">{step.name || step.title}</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10">{step.actor}</span>
                      </div>
                      <p className="text-secondary text-xs leading-relaxed">{step.desc || step.action}</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-accent-gold bg-accent-gold/10 border border-accent-gold/20 px-3 py-1.5 rounded-lg whitespace-nowrap self-start md:self-auto">
                    {step.tech}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Regional & National Regulatory Compliance */}
        {vertical.compliance && vertical.compliance.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 font-display text-white flex items-center gap-2">
              <span className="text-accent-gold font-mono">[ 03 ]</span> Indian Regulatory & Data Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vertical.compliance.map((comp, idx) => (
                <div key={idx} className="bg-card border border-white/5 p-6 rounded-2xl">
                  <div className="text-xs font-mono text-accent-gold uppercase tracking-wider mb-1">{comp.authority}</div>
                  <h3 className="font-bold text-white mb-2 text-base">{comp.standard}</h3>
                  <p className="text-secondary text-xs leading-relaxed mb-3">{comp.requirement}</p>
                  <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400">
                    <strong>Implementation:</strong> {comp.implementation}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Vertical Specific FAQ Accordion */}
        {vertical.faqs && vertical.faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 font-display text-white flex items-center gap-2">
              <span className="text-accent-gold font-mono">[ 04 ]</span> Frequently Asked Technical & Commercial Questions
            </h2>
            <div className="space-y-4">
              {vertical.faqs.map((faq, idx) => (
                <div key={idx} className="bg-card border border-white/5 p-6 rounded-2xl">
                  <h3 className="font-bold text-white text-base mb-2">{faq.question}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

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

        {/* Direct CTA */}
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

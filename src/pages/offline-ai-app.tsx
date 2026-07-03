import React, { useEffect } from 'react';
import { ArrowLeft, WifiOff, BrainCircuit, Cpu, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OfflineAiAppDevelopment() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-green hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Offline AI App Development <br />
            <span className="text-accent-green">Flutter Apps That Work Without Internet</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            I am a Flutter developer specializing in offline AI applications — mobile apps that run machine learning models entirely on the device with zero cloud dependency. From crop disease detection in remote fields to dairy accounting in villages with no 4G coverage, I build apps that deliver intelligent functionality where connectivity doesn't exist.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Why Offline AI Matters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <WifiOff className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Zero Connectivity Required</h3>
              <p className="text-secondary text-sm leading-relaxed">Over 600 million people in India have unreliable or no internet access. Offline AI apps serve these users without compromise.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Cpu className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Zero API Costs</h3>
              <p className="text-secondary text-sm leading-relaxed">No per-request cloud inference charges. The model runs on the device processor, making the marginal cost of each prediction exactly zero.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Database className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Complete Data Privacy</h3>
              <p className="text-secondary text-sm leading-relaxed">Sensitive data (medical images, financial records, personal information) never leaves the device. No cloud storage, no data breach risk.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Technical Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <BrainCircuit className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">On-Device ML Pipeline</h3>
              <p className="text-secondary text-sm leading-relaxed">TensorFlow Lite and ONNX Runtime for on-device inference. Transfer learning on MobileNetV2/EfficientNet backbones optimized for low-end Android devices common in rural India.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Smartphone className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Flutter Cross-Platform</h3>
              <p className="text-secondary text-sm leading-relaxed">Single codebase for Android and iOS. Drift/SQLite for local persistence, WorkManager for background sync when connectivity becomes available, platform channels for native ML integration.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Shipped Offline AI Products</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <h3 className="font-bold text-white mb-3">Fasal Doctor</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">Offline crop disease detection for Punjab farmers. Camera scan → on-device ML inference → disease identification → PAU treatment advisory. Zero internet required.</p>
              <Link to="/case-studies/fasal-doctor" className="text-accent-green font-mono text-xs uppercase tracking-wider hover:opacity-80 transition-opacity">
                Read Case Study →
              </Link>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <h3 className="font-bold text-white mb-3">DoodHisaab</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">Offline dairy ledger for rural milkmen. Daily collection tracking, automated P&L computation, customer account management — all on local SQLite, zero cloud.</p>
              <Link to="/case-studies/doodhisaab" className="text-accent-gold font-mono text-xs uppercase tracking-wider hover:opacity-80 transition-opacity">
                Read Case Study →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4 font-display">Need an Offline AI App?</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Whether you're building for agriculture, healthcare, logistics, or any domain where connectivity is unreliable, I deliver production-ready Flutter apps with embedded machine learning that work anywhere.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Flutter', 'TFLite', 'ONNX', 'SQLite', 'On-Device ML', 'Transfer Learning', 'Computer Vision', 'Edge AI'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-green/20 bg-accent-green/5 rounded-full text-accent-green font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

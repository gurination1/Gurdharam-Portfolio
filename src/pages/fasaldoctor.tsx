import React, { useEffect } from 'react';
import { ArrowLeft, BrainCircuit, Leaf, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FasalDoctor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-green hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Machine Learning Engineer in Punjab <br />
            <span className="text-accent-green">Fasal Doctor Case Study</span>
          </h1>
          {/* Answer-first summary block for AI Overviews (Phase E & G) */}
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            Fasal Doctor is an offline AI application built for farmers in Punjab to instantly diagnose crop diseases without internet access. Utilizing on-device Machine Learning (TFLite) and the smartphone camera, it scans infected plants, identifies the disease, and provides PAU-affiliated agricultural advisory and treatment plans instantly in the field.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-black/40 p-12">
            <img 
              src="/assets/portfolio/fasal-doctor-logo.png" 
              alt="Fasal Doctor AI app logo"
              className="w-48 h-48 object-contain drop-shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 font-display">Technical Implementation</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <BrainCircuit className="text-accent-green mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">Fine-Tuned Computer Vision</h3>
                  <p className="text-secondary text-sm">Custom AI model trained on local agricultural datasets capable of identifying specific regional crop diseases with high accuracy.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Cpu className="text-accent-green mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">On-Device Inference (TFLite)</h3>
                  <p className="text-secondary text-sm">The neural network runs entirely on the device processor, requiring zero latency and zero cloud API costs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Leaf className="text-accent-green mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">PAU-Affiliated Advisory</h3>
                  <p className="text-secondary text-sm">Integrates official treatment data and actionable agricultural advice immediately following a diagnosis.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-6 font-display">The Impact</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            By shifting the intelligence from the cloud to the edge, Fasal Doctor solves the primary hurdle of agri-tech in India: connectivity. Farmers receive immediate biological analysis directly in remote fields.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Flutter', 'TFLite', 'Computer Vision', 'Offline AI', 'On-Device ML'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-green/20 bg-accent-green/5 rounded-full text-accent-green font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-card border border-white/5 p-8 rounded-3xl mb-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <h3 className="text-white font-bold mb-1">Looking for a custom crop scanner or Agtech solution?</h3>
            <p className="text-secondary text-sm">Explore my design and consulting services for offline AI mobile tools.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/services/crop-disease-detection-app" className="px-4 py-2 bg-accent-green/10 hover:bg-accent-green/20 text-accent-green border border-accent-green/20 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors">
              Crop AI Services
            </Link>
            <Link to="/services/offline-ai-app-development" className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors">
              Offline AI Dev
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

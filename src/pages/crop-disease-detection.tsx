import React, { useEffect } from 'react';
import { ArrowLeft, Leaf, BrainCircuit, Cpu, Wifi, WifiOff, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CropDiseaseDetection() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-green hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Crop Disease Detection App Developer <br />
            <span className="text-accent-green">AI-Powered Agricultural Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            I build crop disease detection apps that run entirely offline using on-device machine learning. My shipped product, Fasal Doctor, uses a fine-tuned MobileNetV2 model to scan infected plants through a smartphone camera, identify the disease in under 2 seconds, and provide <a href="https://www.pau.edu/" target="_blank" rel="noopener noreferrer" className="text-accent-green underline">PAU-affiliated</a> treatment advisory — all without requiring internet connectivity in remote farming regions of Punjab.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl text-center">
              <Camera className="text-accent-green mx-auto mb-4" size={32} />
              <h3 className="font-bold text-white mb-2">1. Point & Scan</h3>
              <p className="text-secondary text-sm">Open the app, point your camera at the affected crop leaf or stem. No internet required.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl text-center">
              <BrainCircuit className="text-accent-green mx-auto mb-4" size={32} />
              <h3 className="font-bold text-white mb-2">2. AI Diagnosis</h3>
              <p className="text-secondary text-sm">The on-device neural network analyzes the image against thousands of disease patterns in under 2 seconds.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl text-center">
              <Leaf className="text-accent-green mx-auto mb-4" size={32} />
              <h3 className="font-bold text-white mb-2">3. Treatment Plan</h3>
              <p className="text-secondary text-sm">Receive PAU-affiliated agricultural advisory with specific pesticide recommendations and dosage instructions.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Technical Architecture</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <WifiOff className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Offline-First Design</h3>
              <p className="text-secondary text-sm leading-relaxed">Built with <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="text-accent-green underline">Flutter</a> and <a href="https://www.tensorflow.org/lite" target="_blank" rel="noopener noreferrer" className="text-accent-green underline">TensorFlow Lite</a> for complete offline execution. The entire ML model runs on the device processor, meaning zero cloud API costs and zero latency even in fields with no 4G coverage.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Cpu className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Transfer Learning Pipeline</h3>
              <p className="text-secondary text-sm leading-relaxed">Custom model built using transfer learning on <a href="https://arxiv.org/abs/1801.04381" target="_blank" rel="noopener noreferrer" className="text-accent-green underline">MobileNetV2</a> backbone, fine-tuned on PlantVillage and regional Punjab crop disease datasets for high accuracy on local varieties including wheat, rice, and cotton diseases.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Who This Is For</h2>
          <ul className="space-y-4 text-secondary">
            <li className="flex items-start gap-3"><span className="text-accent-green mt-1">→</span> <span><strong className="text-white">Agritech Startups</strong> looking for a developer who understands both ML and agricultural domain requirements.</span></li>
            <li className="flex items-start gap-3"><span className="text-accent-green mt-1">→</span> <span><strong className="text-white">Agricultural Universities</strong> needing a technical partner to convert research models into field-ready mobile applications.</span></li>
            <li className="flex items-start gap-3"><span className="text-accent-green mt-1">→</span> <span><strong className="text-white">Government Agricultural Programs</strong> deploying precision farming tools to rural communities without reliable connectivity.</span></li>
            <li className="flex items-start gap-3"><span className="text-accent-green mt-1">→</span> <span><strong className="text-white">Pesticide & Fertilizer Companies</strong> wanting branded crop diagnostic tools for their farming customers.</span></li>
          </ul>
        </section>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4 font-display">Shipped Product: Fasal Doctor</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Fasal Doctor is a working crop disease detection application built for farmers in Punjab. It demonstrates the complete pipeline from camera capture to on-device inference to treatment output — a real product, not a prototype.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {['Flutter', 'TFLite', 'MobileNetV2', 'Transfer Learning', 'Computer Vision', 'Offline AI', 'PlantVillage', 'PAU Advisory'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-green/20 bg-accent-green/5 rounded-full text-accent-green font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/case-studies/fasal-doctor" className="inline-flex items-center gap-2 text-accent-green font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
            Read Full Case Study →
          </Link>
        </section>
      </div>
    </main>
  );
}

import React, { useEffect } from 'react';
import { ArrowLeft, Leaf, BrainCircuit, Cpu, Wifi, WifiOff, Camera, ShieldAlert, Award, FileImage, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

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
            <span className="text-accent-green">AI Agricultural Technology</span>
          </h1>
          {/* Answer-first summary block for AI Overviews */}
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed font-semibold">
            I engineer offline AI crop disease detection apps that run on-device without requiring internet connectivity. Using transfer learning and optimized TensorFlow Lite models, my applications scan plant leaves instantly, diagnose the issue in under 2 seconds, and provide precise chemical treatment advisories to help agritech startups and farmers increase their yield and prevent total crop failure.
          </p>
          <div className="mt-8 flex gap-4">
             <Link to="/#contact" className="bg-accent-green text-void font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300">
                Build Your Agritech App
             </Link>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">How Offline Crop Disease Detection Works</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch] mb-8">
            Traditional AI apps fail in rural fields due to poor 4G connectivity and high latency. My solution bypasses cloud dependencies completely. By packaging highly compressed neural networks directly into the mobile application, farmers can diagnose crop health instantly, anywhere in the world.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl text-center">
              <Camera className="text-accent-green mx-auto mb-4" size={32} />
              <h3 className="font-bold text-white mb-2 text-lg">1. Point & Scan</h3>
              <p className="text-secondary text-sm">Open the app and point your smartphone camera at the affected crop leaf or stem. No internet connection is required to initiate the scan.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl text-center">
              <BrainCircuit className="text-accent-green mx-auto mb-4" size={32} />
              <h3 className="font-bold text-white mb-2 text-lg">2. Instant AI Diagnosis</h3>
              <p className="text-secondary text-sm">The on-device neural network analyzes the image against thousands of disease patterns locally, identifying the pathogen in under 2 seconds.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl text-center">
              <Leaf className="text-accent-green mx-auto mb-4" size={32} />
              <h3 className="font-bold text-white mb-2 text-lg">3. Direct Treatment Plan</h3>
              <p className="text-secondary text-sm">Receive immediate, actionable agricultural advisory with specific pesticide recommendations, dosage instructions, and safety protocols.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Technical Architecture of the Agritech App</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch] mb-8">
            Building robust agritech software requires deep expertise in both mobile framework optimization and machine learning deployment. Here is the technical foundation of my crop disease detection systems.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <WifiOff className="text-accent-green mb-4" size={28} />
              <h4 className="font-bold text-white mb-2 text-lg">Offline-First Flutter Design</h4>
              <p className="text-secondary text-sm leading-relaxed">
                Built with <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="text-accent-green underline hover:text-white transition-colors">Flutter</a> and <a href="https://www.tensorflow.org/lite" target="_blank" rel="noopener noreferrer" className="text-accent-green underline hover:text-white transition-colors">TensorFlow Lite</a> for complete offline execution. The entire machine learning model runs directly on the device processor, resulting in zero cloud API latency and seamless operation in deep agricultural fields.
              </p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Cpu className="text-accent-green mb-4" size={28} />
              <h4 className="font-bold text-white mb-2 text-lg">Transfer Learning Pipeline</h4>
              <p className="text-secondary text-sm leading-relaxed">
                Custom model construction uses transfer learning on a MobileNetV2 backbone, aggressively fine-tuned on PlantVillage and regional crop disease datasets for extreme accuracy on local crop varieties.
              </p>
            </div>
          </div>
        </section>

        {/* Deep details about ML optimization and Local Agritech */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">On-Device Machine Learning Optimization</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Standard computer vision apps fail in remote agricultural contexts because they upload high-resolution photos to cloud APIs. My agritech apps bypass this requirement entirely by compressing heavy deep learning models into optimized on-device binaries.
          </p>

          <div className="space-y-6 bg-card border border-white/5 p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <ShieldAlert className="text-accent-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">INT8 Model Quantization</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  I compress 32-bit floating-point weights into 8-bit integers (INT8 quantization) via TensorFlow Lite Post-Training Quantization (PTQ). This drops model sizes from 50MB+ down to just 11MB, allowing it to run smoothly on budget smartphones without draining batteries or causing overheating.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="text-accent-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">Local Agricultural Advisory Database</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  AI diagnosis is useless without immediate action. My system parses on-device SQLite databases populated with official university advisory boards. It returns exact chemical composition formulas, volume calculations, and safety instructions in multiple languages instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Camera stream processing details */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Camera Buffer Management & Native Streams</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Processing real-time frame rates requires low-level image controllers. My architectures fetch camera buffers directly from native platform services (CameraX on Android, AVFoundation on iOS) and translate frames locally in memory.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <FileImage className="text-accent-green mb-3" size={24} />
              <h4 className="font-bold text-white mb-2 text-base">RGB Frame Resizing</h4>
              <p className="text-secondary text-sm leading-relaxed">
                Mobile camera outputs are resized to 224x224 RGB matrices locally before execution, preventing RAM leaks and keeping memory consumption below 30MB during extended field scanning sessions.
              </p>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <RefreshCw className="text-accent-green mb-3" size={24} />
              <h4 className="font-bold text-white mb-2 text-base">Silent Background Updates</h4>
              <p className="text-secondary text-sm leading-relaxed">
                Silent REST APIs handle update checks when Wi-Fi becomes active. The application downloads updated TFLite binaries automatically in the background, maintaining data freshness with zero user impact.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-left">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Who Needs Custom Agritech Apps?</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch] mb-6">
            Implementing an offline AI application provides a massive competitive advantage across multiple agricultural sectors:
          </p>
          <ul className="space-y-4 text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Agritech Startups:</strong> Looking for a developer who understands both complex Machine Learning pipelines and strict agricultural domain requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Agricultural Universities:</strong> Needing a reliable technical partner to convert static research models into field-ready, scalable mobile applications.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Government Programs:</strong> Deploying precision farming tools to rural farming communities where internet reliability is non-existent.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Pesticide & Fertilizer Companies:</strong> Wanting to provide branded, value-add crop diagnostic tools for their farming customer base.</span>
            </li>
          </ul>
        </section>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-16">
          <h2 className="text-2xl font-bold mb-4 font-display text-white">Shipped Case Study: Fasal Doctor</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Fasal Doctor is a working crop disease detection application built specifically for farmers in Punjab. It demonstrates the complete end-to-end pipeline from native camera capture to on-device inference to localized treatment output — a fully functional product, not just a theoretical prototype.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {['Flutter', 'TFLite', 'MobileNetV2', 'Transfer Learning', 'Computer Vision', 'Offline AI', 'PlantVillage', 'Agritech'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-green/20 bg-accent-green/5 rounded-full text-accent-green font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/case-studies/fasal-doctor" className="inline-flex items-center gap-2 text-accent-green font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
            Read Full Case Study →
          </Link>
        </section>

        {/* FAQs Section */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Which crops and diseases can your mobile AI models detect?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                My custom crop AI models are fine-tuned on vast datasets (like PlantVillage) to identify dozens of plant diseases. This includes detecting yellow rust and powdery mildew in wheat, leaf spot and blight in cotton, and brown spot and blast in rice varieties with extremely high precision.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                How do you update agricultural advisories if the app runs completely offline?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                The application relies on an internal SQLite database for instant offline retrieval. When the user's smartphone connects to Wi-Fi or 4G at home, the app triggers a silent, lightweight sync webhook in the background to securely download database revisions and update chemical guidelines.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What smartphone specifications are needed to run on-device inference?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Thanks to aggressive INT8 quantization, the TensorFlow Lite network is heavily optimized for low-end hardware. It runs flawlessly on typical budget Android devices (Android 8.0+) with just 2GB of RAM, executing complex crop image classifications in under 2 seconds without lagging.
              </p>
            </div>
            
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Can the AI model distinguish between a healthy leaf and a diseased one?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes. The machine learning pipeline is specifically trained to recognize healthy baseline traits across various crop species. If a healthy leaf is scanned, the application confirms the plant's health status rather than forcing a false positive disease diagnosis.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

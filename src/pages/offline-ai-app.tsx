import React, { useEffect } from 'react';
import { ArrowLeft, WifiOff, BrainCircuit, Cpu, Smartphone, Database, ShieldAlert, Award, RefreshCw, FileImage, CheckCircle, ArrowRight, Zap, Globe, Leaf, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

export default function OfflineAiAppDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Offline AI App Developer India | Flutter + TFLite On-Device ML | Gurdharam";
  }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-green hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>

        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-accent-green/10 border border-accent-green/20 rounded-full text-accent-green font-mono text-xs uppercase tracking-wider">Flutter · TensorFlow Lite · ONNX · SQLite · Edge AI</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Offline AI App Developer in India <br />
            <span className="text-accent-green">Flutter + TFLite Apps That Work Without Internet</span>
          </h1>
          {/* Answer capsule — front-loaded direct answer for AI Overviews */}
          <div className="bg-card border border-accent-green/20 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              I build Flutter mobile apps that run AI models entirely on the device — no cloud server, no internet required. My apps diagnose crop diseases in under 2 seconds, run on budget Android phones with 2GB RAM, and function perfectly in remote areas of Punjab where 4G connectivity doesn't exist.
            </p>
          </div>
          <p className="text-base text-secondary max-w-[66ch] leading-relaxed">
            Unlike most AI apps that upload photos to cloud servers, my on-device TFLite approach delivers instant results with zero per-inference API cost and complete data privacy. I am the only Flutter+TFLite developer based in Punjab, India with shipped agritech and rural utility apps serving real users.
          </p>
        </header>

        {/* Stats bar */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: '<2s', label: 'On-device AI inference per image', icon: <Zap size={20} /> },
            { stat: '11MB', label: 'Quantized model size (from 54MB)', icon: <Cpu size={20} /> },
            { stat: '₹0', label: 'Per-query API cost after deployment', icon: <TrendingUp size={20} /> },
            { stat: '2GB', label: 'Minimum RAM — runs on budget phones', icon: <Smartphone size={20} /> },
          ].map(({ stat, label, icon }) => (
            <div key={stat} className="bg-card border border-white/5 p-5 rounded-2xl text-center">
              <div className="text-accent-green mb-2 flex justify-center">{icon}</div>
              <div className="text-2xl font-display font-bold text-white mb-1">{stat}</div>
              <div className="text-secondary text-xs leading-tight">{label}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-3 font-display text-white">Why Offline AI? The Case for On-Device Machine Learning</h2>
          <p className="text-secondary mb-8 max-w-[66ch]">Over 600 million people in India have unreliable or no internet access. Building for this reality isn't optional — it's the product. Here's why on-device AI wins:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <WifiOff className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Zero Connectivity Required</h3>
              <p className="text-secondary text-sm leading-relaxed">The AI model runs inside the phone's processor. No cell signal needed. A farmer in a remote Punjab village gets a diagnosis the same instant as a user in Chandigarh.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Cpu className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Zero API Cost per Inference</h3>
              <p className="text-secondary text-sm leading-relaxed">Cloud AI APIs (Google Vision, AWS Rekognition) charge per query. On-device TFLite runs unlimited inferences at exactly ₹0/query after the one-time build cost.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Database className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Complete Data Privacy</h3>
              <p className="text-secondary text-sm leading-relaxed">Medical images, financial records, crop photos — nothing leaves the device. No cloud storage, no data breach risk, no GDPR or DPDP compliance overhead.</p>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Technical Stack — How I Build Offline AI Apps</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Running ML models on mobile processors without optimization causes battery drain, memory leaks, and frozen UIs. My pipeline uses industry-best practices to deliver sub-2 second inference on budget smartphones.
          </p>

          <div className="space-y-6 bg-card border border-white/5 p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <ShieldAlert className="text-accent-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white mb-1">INT8 Quantization — 54MB Model Shrunk to 11MB</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  I apply TensorFlow Lite Post-Training Quantization (PTQ) to compress 32-bit float model weights into 8-bit integers. A MobileNetV2 crop disease model that started at 54MB is delivered as an 11.2MB .tflite binary — without meaningful accuracy loss. This is what makes AI feasible on ₹8,000 Android phones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="text-accent-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white mb-1">Flutter Isolates — AI Runs in Background Without Freezing UI</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  To prevent the app from stuttering during AI inference, I execute the TFLite interpreter in a separate Dart Isolate (background thread). The camera feed, UI animations, and button interactions all run at 60 FPS on the main thread while AI computation happens in parallel on a background process.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Cpu className="text-accent-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white mb-1">GPU & NNAPI Delegate Acceleration</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Modern Android phones include dedicated Neural Processing Units (NPUs) and GPU hardware that are 5–10× faster than CPU-only inference. I configure TFLite's GPU delegate and NNAPI delegate to route matrix operations to these hardware accelerators when available — falling back gracefully to CPU on older devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image preprocessing details */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Native Hardware Buffer Access & Camera Processing</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Real-time camera analysis requires direct access to native platform frame buffers. If frames are processed slowly or in incorrect formats, inference latency explodes to 10+ seconds. My pipeline handles this efficiently:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <FileImage className="text-accent-green mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">YUV420 → RGB Conversion in Native Code</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Mobile cameras output frames in YUV420 format. Standard Dart-layer conversion is too slow. I implement low-level C++ rendering delegates via FFI that convert camera frames directly in native memory before passing them to the TFLite interpreter — achieving sub-100ms preprocessing time.
              </p>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <RefreshCw className="text-accent-green mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Silent OTA Model Updates When Online</h3>
              <p className="text-secondary text-sm leading-relaxed">
                When the user connects to Wi-Fi or 4G, background sync webhooks check for new model versions. Updated .tflite binaries download silently in the background — no app store update required. This keeps the AI accurate without bothering users.
              </p>
            </div>
          </div>
        </section>

        {/* Shipped products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-3 font-display text-white">Shipped Offline AI Applications — Real Products, Not Prototypes</h2>
          <p className="text-secondary mb-8 max-w-[66ch]">Unlike most agencies that only show concepts, these are production apps deployed to real users in Punjab:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl border-l-4 border-accent-green">
              <Leaf className="text-accent-green mb-4" size={28} />
              <h3 className="font-bold text-white mb-3 text-lg">Fasal Doctor — Crop Disease Detection</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Offline crop disease detection app for Punjab farmers. Point camera at infected plant → on-device MobileNetV2 model analyses in under 2 seconds → identifies disease from 15+ Punjab-specific conditions → delivers PAU-affiliated pesticide treatment advisory — all with zero internet.
              </p>
              <ul className="text-secondary text-xs space-y-1 mb-4">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-green" /> 15+ Punjab crop diseases detected</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-green" /> Under 2 second inference on 2GB RAM devices</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-green" /> PAU treatment advisory in Punjabi + English</li>
              </ul>
              <Link to="/case-studies/fasal-doctor" className="text-accent-green font-mono text-xs uppercase tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1">
                Read Full Case Study <ArrowRight size={12} />
              </Link>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl border-l-4 border-accent-gold">
              <Database className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-3 text-lg">DoodHisaab — Rural Dairy Ledger</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Offline dairy management Flutter app deployed to milkmen in Muktsar and Bathinda. Handles daily milk collection tracking, FAT/SNF-based pricing calculations, customer account management, and PDF invoice generation — entirely on local SQLite, zero cloud dependency.
              </p>
              <ul className="text-secondary text-xs space-y-1 mb-4">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> Replaces manual ledger books</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> FAT-based milk pricing engine</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-accent-gold" /> PDF invoice via WhatsApp share</li>
              </ul>
              <Link to="/case-studies/doodhisaab" className="text-accent-gold font-mono text-xs uppercase tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1">
                Read Full Case Study <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* Who is this for */}
        <section className="mb-16 text-left">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Who Needs Offline AI App Development?</h2>
          <ul className="space-y-4 text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Agritech Startups</strong> looking for a developer who understands both TensorFlow Lite optimization and real agricultural domain requirements — not just generic ML demos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Agricultural Universities & Research Institutions</strong> needing a technical partner to convert research ML models into field-ready mobile apps with proper camera pipelines and offline data sync.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Government Agricultural Programs</strong> deploying precision farming tools to rural communities without reliable internet connectivity — apps that work from day one regardless of network.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Healthcare & Diagnostics Startups</strong> building AI-powered diagnostic apps where patient data must stay on-device for privacy compliance under India's DPDP Act.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Pesticide & Fertilizer Companies</strong> wanting branded crop diagnostic tools — their own AI-powered app for farmers that surfaces their specific product recommendations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-green mt-1">→</span>
              <span><strong className="text-white">Rural Fintech & Logistics</strong> companies needing field apps that capture data without internet and sync when connectivity returns — no data loss ever.</span>
            </li>
          </ul>
        </section>

        {/* CTA info box */}
        <section className="bg-card border border-accent-green/20 p-8 md:p-12 rounded-3xl mb-16">
          <h2 className="text-2xl font-bold mb-4 font-display text-white">Need an Offline AI App Built?</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Whether you're building for agriculture, healthcare, logistics, or any domain where connectivity is unreliable — I deliver production-ready Flutter apps with embedded machine learning that work anywhere in India. Full model training, optimization, integration, and deployment included.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {['Flutter', 'TFLite', 'ONNX', 'MobileNetV2', 'SQLite', 'On-Device ML', 'Transfer Learning', 'Computer Vision', 'Edge AI', 'INT8 Quantization'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-green/20 bg-accent-green/5 rounded-full text-accent-green font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent-green text-void font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
            Discuss Your Offline AI App <ArrowRight size={16} />
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Frequently Asked Questions About Offline AI App Development</h2>
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Can Flutter apps run AI models without internet?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes. Flutter apps can run TensorFlow Lite (.tflite), ONNX, and CoreML models entirely on the device processor. There is no network request during inference. The model file is bundled inside the app at install time. Internet is only required for optional background model updates.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What is TensorFlow Lite and why is it ideal for farm apps in India?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                TensorFlow Lite (TFLite) is Google's mobile-optimized version of TensorFlow designed to run on devices with limited RAM and processing power. It is ideal for Indian farm apps because farmers often use ₹6,000–₹10,000 Android phones with weak processors and unreliable 4G — TFLite delivers AI inference in under 2 seconds even on these low-spec devices.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What machine learning models can run offline on a mobile phone?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Most computer vision backbones can be quantized and run on-device: MobileNetV2, EfficientNet-Lite, YOLOv8-Nano, and ResNet-50 (quantized). For text/language tasks, lightweight classifiers and embedding models work offline. I select and optimize the architecture based on your accuracy requirements and minimum device specification.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                How do offline AI apps handle model updates without the App Store?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                I implement background sync webhooks. When the device connects to Wi-Fi or 4G, the app sends a lightweight version-check ping to my server. If a newer .tflite binary is available, it downloads silently in the background and replaces the old model file — no app store update required. The user never notices.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Does running ML locally cause the smartphone to heat up or lag?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Not with proper engineering. I run all inference in separate background Flutter Isolates so the main UI thread never blocks. INT8 quantization cuts CPU load dramatically compared to float32 models. I also implement inference throttling to prevent back-to-back computations from overheating low-spec devices.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                What is the difference between cloud AI and on-device AI for farming apps?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Cloud AI (like Plantix's standard mode) uploads your crop photo to a remote server, processes it, and returns the result. This requires internet and introduces latency of 2–10 seconds depending on network speed. On-device AI processes the photo directly in the phone's processor — the result appears in under 2 seconds even in a field with zero signal.
              </p>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Related Services & Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/case-studies/fasal-doctor" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-green/30 transition-colors group">
              <Leaf className="text-accent-green flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-green transition-colors">Fasal Doctor — Crop Disease Detection</div>
                <div className="text-secondary text-xs mt-1">Full case study: MobileNetV2 + TFLite + PAU advisory</div>
              </div>
              <ArrowRight className="text-accent-green ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/services/crop-disease-detection-app" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-green/30 transition-colors group">
              <BrainCircuit className="text-accent-green flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-green transition-colors">Crop Disease Detection App Developer</div>
                <div className="text-secondary text-xs mt-1">AI-powered agritech for Punjab's farming community</div>
              </div>
              <ArrowRight className="text-accent-green ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/services/dairy-management-app-flutter" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-green/30 transition-colors group">
              <Database className="text-accent-green flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-green transition-colors">Dairy Management App — DoodHisaab</div>
                <div className="text-secondary text-xs mt-1">Offline Flutter ledger for rural dairy businesses</div>
              </div>
              <ArrowRight className="text-accent-green ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
            <Link to="/services/ai-automation" className="flex items-center gap-4 bg-card border border-white/5 p-6 rounded-2xl hover:border-accent-green/30 transition-colors group">
              <MessageSquare className="text-accent-green flex-shrink-0" size={24} />
              <div>
                <div className="text-white font-bold text-sm group-hover:text-accent-green transition-colors">AI Automation Services</div>
                <div className="text-secondary text-xs mt-1">WhatsApp bots, video pipelines, RAG systems</div>
              </div>
              <ArrowRight className="text-accent-green ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

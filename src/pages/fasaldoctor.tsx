import React, { useEffect } from 'react';
import { ArrowLeft, BrainCircuit, Leaf, Cpu, ShieldAlert, Award, FileText, CheckCircle2, Sliders, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

export default function FasalDoctor() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fasal Doctor Case Study | Offline Crop AI Punjab | Gurdharam";
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
            <h2 className="text-2xl font-bold mb-6 font-display text-white">Technical Implementation</h2>
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

        {/* Detailed technical case study writeup */}
        <section className="mb-16 space-y-6 text-left">
          <h2 className="text-2xl font-bold font-display text-white">The Rural Agriculture Challenge</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            In remote farming communities across Muktsar Sahib, Bathinda, and Faridkot, cellular signals are frequently unstable or absent. When a farmer spots a fungal infection or pest damage on a wheat leaf, sending a high-resolution image to a remote cloud API server is impossible due to network timeouts and expensive mobile data charges.
          </p>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            This network limitation delays vital diagnoses, allowing crop diseases like wheat yellow rust or cotton leaf blight to spread rapidly and destroy entire harvests. Fasal Doctor eliminates this issue by performing 100% of its computational diagnostics directly on the user's mobile device processor.
          </p>

          <h2 className="text-2xl font-bold font-display text-white">Model Quantization & Mobile Performance</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            To run a convolutional neural network on a smartphone without causing CPU overheating or excessive battery drain, I designed an optimized machine learning pipeline. 
          </p>
          
          <div className="space-y-4 bg-card border border-white/5 p-8 rounded-3xl my-8">
            <div className="flex items-start gap-4">
              <ShieldAlert className="text-accent-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white mb-1">INT8 Quantization Flow</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  I trained a custom **MobileNetV2** model on the PlantVillage dataset supplemented with over 3,000 images of regional crop diseases. I then applied Post-Training Quantization (PTQ) to convert weights from 32-bit floats to 8-bit integers, compressing the model size from **54MB to only 11.2MB** with less than 0.8% loss in accuracy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="text-accent-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white mb-1">PAU Chemical Advisory Engine</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Once a disease matches a classification confidence threshold of &gt;85%, the app queries a local SQLite database populated with Punjab Agricultural University (PAU) advisory standards. The app displays the exact chemical formulas (e.g., Propiconazole 25 EC), volume calculations, and safety rules in Punjabi and English.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Multi-Threaded Flutter Isolates</h3>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Running image inference inside a mobile app requires careful resource management. If the camera stream is processed on the main UI thread, the application's interface will lag or freeze, ruining the user experience. To solve this, I wrote code that sends camera frames to a background **Flutter Isolate**. The background thread handles image scaling, normalization, and inference computation before passing the classification results back to the main UI.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Real-World Field Impact</h3>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            By deploying this solution locally, farmers receive immediate biological data without spending money on continuous cellular data plans or cloud services. The key advantages of this on-device approach include:
          </p>
          <ul className="list-disc list-inside text-secondary space-y-2 max-w-[66ch] pl-4">
            <li><strong>Zero Server Costs:</strong> Since all diagnostics run on-device, hosting costs do not scale with user volume.</li>
            <li><strong>Sub-2 Second Latency:</strong> Diagnosis is returned almost instantly, regardless of signal strength in deep fields.</li>
            <li><strong>Empowered Farming:</strong> Access to accurate PAU advisories allows farmers to buy the correct pesticide dosage, reducing chemical runoff.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Offline Diagnostics Accuracy & Data Calibration</h3>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            A major challenge in deploying agricultural computer vision models is the variance in lighting conditions. Sunlight angles, cloud shadows, and dust on camera lenses alter image properties, causing false diagnoses. 
          </p>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            To stabilize accuracy, the app runs local image processing filters before inference. The captured camera frame is dynamically adjusted for brightness, contrast, and histogram equalization, ensuring the leaf is clearly distinguished from the background soil before passing the matrix to the interpreter.
          </p>
        </section>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">The Impact</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            By shifting the intelligence from the cloud to the edge, Fasal Doctor solves the primary hurdle of agri-tech in India: connectivity. Farmers receive immediate biological analysis directly in remote fields.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Flutter', 'TFLite', 'Computer Vision', 'Offline AI', 'On-Device ML', 'Agritech Punjab'].map(tag => (
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

        <Footer />
      </div>
    </main>
  );
}

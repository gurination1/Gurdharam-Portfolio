import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPostFasalDoctor() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-accent-green hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Blog
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-12">
            <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-secondary mb-4">
              <span className="px-3 py-1 border border-accent-green/20 bg-accent-green/5 rounded-full text-accent-green uppercase tracking-wider">Agritech AI</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> July 3, 2026</span>
              <span className="flex items-center gap-1"><Clock size={12} /> 6 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              How I Built an Offline AI Crop Disease Scanner using Flutter and TensorFlow Lite
            </h1>
            <p className="text-lg text-secondary leading-relaxed font-light">
              Running computer vision on-device in rural Punjab fields: eliminating network dependency and cloud server fees for agritech cooperatives.
            </p>
          </header>

          <div className="text-secondary space-y-6 text-base md:text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-display">The Rural Connectivity Challenge</h2>
            <p>
              <strong>To build a high-performance offline crop disease scanner, you must quantize your machine learning models (like MobileNetV2) to a compressed 11MB INT8 TFLite format and run inference locally in background Flutter Isolates using a local SQLite database for chemical advisories.</strong> This architecture allows agricultural apps to identify leaf infections in under 2 seconds without cell service or cloud database latency.
            </p>
            <p>
              In remote farming areas across Muktsar Sahib, Bathinda, and Faridkot, cellular connectivity is frequently unstable. If a farmer discovers a disease on their wheat crop, uploading high-resolution images to a remote cloud server is slow, expensive, and prone to network timeouts. Fasal Doctor eliminates this issue by performing 100% of its computational diagnostics directly on the device's physical processor.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-display">Neural Network Optimization Pipeline</h2>
            <p>
              Running raw computer vision models on mobile processors causes overheating and battery drain. The key is structural optimization.
            </p>
            <p>
              I chose the **MobileNetV2** architecture due to its inverted residuals and linear bottlenecks, which minimize memory usage. Using PyTorch, I trained the backbone on the PlantVillage dataset supplemented with over 3,000 images of regional Punjab crop diseases (yellow rust in wheat, leaf blight in cotton, brown spot in rice).
            </p>
            <p>
              To run this model locally in Flutter, I executed the following pipeline:
            </p>
            <ol className="list-decimal list-inside space-y-3 pl-4">
              <li><strong>Model Quantization:</strong> Converted 32-bit floating-point weights into 8-bit integers (INT8 quantization) using TensorFlow Lite Post-Training Quantization (PTQ). This reduced the model file size from **54 MB to only 11.2 MB** with a negligible accuracy loss of &lt;0.8%.</li>
              <li><strong>TFLite Delegate Config:</strong> Configured the model to utilize the NNAPI delegate on Android (GPU/NPU acceleration) to split execution loads across hardware cores.</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-display">Flutter Integration Mechanics</h2>
            <p>
              Integrating a local model into a reactive Flutter UI requires careful multi-threading. If the camera stream processes frames on the main UI thread, the interface will freeze.
            </p>
            <p>
              I used **Flutter Isolates** to run the TensorFlow Lite interpreter on a separate background thread. The camera frame buffer is sent to the isolate, preprocessed (resized to 224x224 and normalized), passed to the interpreter, and the classification list is sent back to the main thread:
            </p>

            <div className="bg-card border border-white/5 p-6 rounded-2xl font-mono text-xs text-accent-green overflow-x-auto space-y-2">
              <p className="text-white">// Isolate entry point for image inference</p>
              <p>void runInference(IsolateData data) &#123;</p>
              <p>&nbsp;&nbsp;var input = preprocessImage(data.imageBytes);</p>
              <p>&nbsp;&nbsp;var output = List.filled(1 * 38, 0.0).reshape([1, 38]);</p>
              <p>&nbsp;&nbsp;var interpreter = Interpreter.fromAddress(data.address);</p>
              <p>&nbsp;&nbsp;interpreter.run(input, output);</p>
              <p>&nbsp;&nbsp;data.sendPort.send(output);</p>
              <p>&#125;</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-display">Localized PAU advisory & Database</h2>
            <p>
              A raw AI diagnosis ("Wheat Leaf Rust") is useless to a farmer without an action plan. Once the classification threshold matches &gt;85% confidence, the app queries a local **SQLite database** containing treatment guides.
            </p>
            <p>
              These guides are mapped according to Punjab Agricultural University (PAU) advisory guidelines, detailing the exact chemical composition (e.g., Propiconazole 25 EC), recommended dosage (e.g., 200 ml per acre), and water mixing ratios in both Punjabi and English.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-display">Business and Operational Impact</h2>
            <p>
              By designing this offline-first agritech system, we achieved three primary wins:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Zero Cloud Infrastructure Cost:</strong> No cloud compute, no hosting costs, no API charges. Serving 100,000 farmers costs the same as serving 10.</li>
              <li><strong>Instant Diagnostic Latency:</strong> Inference operates in under 2 seconds, regardless of cellular signal.</li>
              <li><strong>Data Privacy:</strong> Farmer images never leave the device, keeping operational agricultural statistics private.</li>
            </ul>
            <p>
              To read the full Fasal Doctor deployment details, visit the <Link to="/case-studies/fasal-doctor" className="text-accent-green underline">Fasal Doctor Case Study</Link> or explore my <Link to="/services/offline-ai-app-development" className="text-accent-green underline">Offline AI App Services</Link>.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

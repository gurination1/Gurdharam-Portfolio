import React, { useState } from 'react';
import { MessageCircle, X, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const phoneNumber = "919876543210";
  
  // Contextual pre-filled message based on the route
  let baseMessage = "Hi Gurdharam, I'd like to discuss a project.";
  if (currentPath.includes('whatsapp-bot')) baseMessage = "Hi Gurdharam, I'd like to discuss a custom WhatsApp bot for my business.";
  if (currentPath.includes('crop-disease')) baseMessage = "Hi Gurdharam, I'm interested in an offline AI crop detection app.";
  if (currentPath.includes('ai-automation')) baseMessage = "Hi Gurdharam, I need help automating some workflows with AI.";
  if (currentPath.includes('web-development')) baseMessage = "Hi Gurdharam, I need a high-end 3D website built.";
  
  const encodedMessage = encodeURIComponent(baseMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="bg-card border border-white/10 rounded-2xl p-0 w-72 mb-4 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-[#128C7E] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/assets/portfolio/person.webp" alt="Gurdharam" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Gurdharam&background=128C7E&color=fff'; }} />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#128C7E] rounded-full"></span>
              </div>
              <div>
                <div className="font-bold text-sm">Gurdharam</div>
                <div className="text-xs text-white/80">Replies in typically 15m</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="p-4 bg-[#0B141A]">
            <div className="bg-[#202C33] text-[#E9EDEF] text-sm p-3 rounded-lg rounded-tl-none inline-block max-w-[90%] shadow-sm mb-3">
              Sat Sri Akal! Need an AI pipeline or a high-end web app? I build systems that cut manual work by 90%. How can I help you scale today?
            </div>
            <div className="text-xs text-[#8696A0] text-center mb-3 flex items-center justify-center gap-1">
              <CheckCircle2 size={12} /> By replying, you opt-in to WhatsApp updates.
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1DA851] text-[#111B21] font-bold text-center text-sm rounded-full transition-colors shadow-lg"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all duration-300 relative group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={28} />
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" style={{ zIndex: -1 }}></span>
          
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Chat on WhatsApp
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-white"></div>
          </div>
        </button>
      )}
    </div>
  );
}

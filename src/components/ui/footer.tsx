import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-white/5 pt-12 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
        <div>
          <h4 className="text-accent-gold text-xs font-mono uppercase tracking-widest font-bold mb-4">
            Specialized AI Solutions
          </h4>
          <ul className="space-y-2 text-sm text-secondary">
            <li>
              <Link to="/services/whatsapp-bot-dental-clinic" className="hover:text-accent-gold transition-colors">
                WhatsApp Business Bot
              </Link>
            </li>
            <li>
              <Link to="/services/crop-disease-detection-app" className="hover:text-accent-gold transition-colors">
                Crop Disease Detection AI Developer
              </Link>
            </li>
            <li>
              <Link to="/services/dairy-management-app-flutter" className="hover:text-accent-gold transition-colors">
                Dairy Management App (Flutter)
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-accent-cold text-xs font-mono uppercase tracking-widest font-bold mb-4">
            Core Services
          </h4>
          <ul className="space-y-2 text-sm text-secondary">
            <li>
              <Link to="/services/offline-ai-app-development" className="hover:text-accent-cold transition-colors">
                Offline AI App Development
              </Link>
            </li>
            <li>
              <Link to="/services/web-developer-muktsar-punjab" className="hover:text-accent-cold transition-colors">
                Web Developer Muktsar Punjab
              </Link>
            </li>
            <li>
              <Link to="/services/web-development" className="hover:text-accent-cold transition-colors">
                Web Development Services
              </Link>
            </li>
            <li>
              <Link to="/services/ai-automation" className="hover:text-accent-cold transition-colors">
                AI Automation Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white/80 text-xs font-mono uppercase tracking-widest font-bold mb-4">
            Case Studies
          </h4>
          <ul className="space-y-2 text-sm text-secondary">
            <li>
              <Link to="/case-studies/doodhisaab" className="hover:text-white transition-colors">
                DoodHisaab Case Study
              </Link>
            </li>
            <li>
              <Link to="/case-studies/fasal-doctor" className="hover:text-white transition-colors">
                Fasal Doctor Case Study
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white/80 text-xs font-mono uppercase tracking-widest font-bold mb-4">
            Resources & Blog
          </h4>
          <ul className="space-y-2 text-sm text-secondary">
            <li>
              <Link to="/blog" className="hover:text-white transition-colors">
                Engineering Blog Hub
              </Link>
            </li>
            <li>
              <Link to="/blog/offline-ai-crop-disease-scanner-flutter" className="hover:text-white transition-colors">
                Offline Crop AI Scanner Article
              </Link>
            </li>
            <li>
              <Link to="/blog/whatsapp-ai-agents-healthcare-india" className="hover:text-white transition-colors">
                WhatsApp AI Booking Bots Article
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-start items-center gap-6 border-t border-white/5 pt-8 mb-6 text-xs text-secondary font-mono">
        <span className="font-bold text-white uppercase tracking-wider">Verified Professional Entity:</span>
        <a href="https://github.com/gdharam94" target="_blank" rel="me noopener noreferrer" className="hover:text-accent-gold underline">GitHub Profile</a>
        <a href="https://www.linkedin.com/in/gurdharam-singh-a4a350201/" target="_blank" rel="me noopener noreferrer" className="hover:text-accent-gold underline">LinkedIn Professional</a>
        <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold underline">Clutch Directory</a>
        <a href="https://techbehemoths.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold underline">TechBehemoths</a>
        <a href="https://www.goodfirms.co" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold underline">GoodFirms</a>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-6 gap-4 text-xs text-secondary font-mono tracking-wider">
        <span>GURDHARAM JEET SINGH © 2026</span>
        <span>
          DESIGNED & BUILT BY GJS | <Link to="/" className="hover:text-white underline">Back to Home</Link>
        </span>
      </div>
    </footer>
  );
}

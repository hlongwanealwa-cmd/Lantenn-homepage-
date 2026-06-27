import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigateToPage: (page: string) => void;
}

export default function Footer({ onNavigateToPage }: FooterProps) {
  const handleLinkClick = (page: string) => {
    onNavigateToPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030408] text-white pt-20 pb-12 text-left border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-16 border-b border-slate-900">
          
          {/* Logo Brand Info Box */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center cursor-pointer group mb-5 h-10" onClick={() => handleLinkClick('home')}>
              <Logo variant="dark" className="h-9 transition-transform group-hover:scale-[1.01]" />
            </div>
            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-xs mb-6">
              A simple, mobile-first rental management platform built for everyday residential landlords. Collect rent automatically and handle maintenance with real Mzansi flavor.
            </p>
          </div>

          {/* Nav Links Column 1: Core Platform */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff5c12] mb-5">
              Core Platform
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400 font-sans">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Automated Rent Collections
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Tenant & Lease Vault
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Arrears & Metrics Ledger
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Photo Maintenance Logger
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2: Resources & Info */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff5c12] mb-5">
              Resources
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400 font-sans">
              <li>
                <button onClick={() => handleLinkClick('faqs')} className="hover:text-white transition-colors cursor-pointer text-left">
                  FAQs Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Support & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 3: Legal & Trust */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff5c12] mb-5">
              Trust & Legal
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400 font-sans">
              <li>
                <p className="flex items-center gap-2 text-[#ff5c12] font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>3% Pay-Only-When-Rent-Settles</span>
                </p>
              </li>
              <li>
                <button onClick={() => handleLinkClick('security')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Platform Security & Encryption
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('popia')} 
                  className="hover:text-white transition-colors text-left block cursor-pointer"
                  id="footer-popia-link"
                >
                  POPIA Data Compliance & Privacy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright legal bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lantenn. All rights reserved. Built with pride in South Africa.</p>
          <div className="flex gap-6 font-mono font-bold">
            <button 
              onClick={() => handleLinkClick('popia')} 
              className="hover:text-slate-300 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button onClick={() => handleLinkClick('security')} className="hover:text-slate-300 cursor-pointer">Security Terms</button>
            <span className="text-[#ff5c12]">Proudly Mzansi 🇿🇦</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

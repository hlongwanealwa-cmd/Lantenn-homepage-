import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activePage: string;
  onNavigateToPage: (page: string) => void;
  onCtaclick: () => void;
}

export default function Navbar({ activePage, onNavigateToPage, onCtaclick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateToPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-zinc-900/40 shadow-lg'
          : 'bg-black border-b border-zinc-950/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group h-12"
            onClick={() => handleLinkClick('home')}
            id="nav-logo"
          >
            <Logo variant="dark" className="h-9 sm:h-10 transition-transform group-hover:scale-[1.01]" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-bold transition-colors cursor-pointer ${
                  activePage === link.id 
                    ? 'text-[#ff5c12] font-black' 
                    : 'text-slate-300 hover:text-[#ff5c12]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs (Log In and Contact Us) */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-sm font-bold text-slate-300 hover:text-[#ff5c12] transition-colors cursor-pointer"
            >
              Log in
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 bg-[#ff5c12] hover:bg-[#ff5c12]/90 text-white text-xs sm:text-sm font-black py-3 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-[#ff5c12]/20 cursor-pointer"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#060812] border-b border-slate-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left py-3 px-4 rounded-xl text-base font-bold transition-colors ${
                    activePage === link.id 
                      ? 'bg-slate-900/60 text-[#ff5c12] font-black' 
                      : 'text-slate-300 hover:bg-slate-900/30'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLinkClick('contact');
                  }}
                  className="w-full text-center py-3 text-slate-300 font-bold rounded-full border border-slate-800 hover:bg-slate-900/40 transition-all cursor-pointer"
                >
                  Log in
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLinkClick('contact');
                  }}
                  className="w-full text-center py-3 bg-[#ff5c12] text-white font-black rounded-full hover:bg-[#ff5c12]/90 transition-colors shadow-md cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SecurityPage from './components/SecurityPage';
import FaqsPage from './components/FaqsPage';
import PopiaPage from './components/PopiaPage';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');

  // Ensure any page transition (from mobile sidebar, footer, or CTA buttons) smoothly scrolls to the top of the selected screen
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleCtaclick = () => {
    setActivePage('contact');
  };

  return (
    <div className="min-h-screen bg-[#060812] text-white font-sans selection:bg-[#f59a1e]/30 selection:text-[#060812] antialiased">
      {/* Universal Sticky Minimalist Navbar */}
      <Navbar 
        activePage={activePage} 
        onNavigateToPage={setActivePage} 
        onCtaclick={handleCtaclick} 
      />

      {/* Main Single Page Router Mount */}
      <main className="min-h-[70vh] relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Homepage 
                onNavigateToPage={setActivePage} 
                onCtaclick={handleCtaclick} 
              />
            </motion.div>
          )}

          {activePage === 'pricing' && (
            <motion.div
              key="pricing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <PricingPage 
                onBackToHome={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActivePage('home');
                }} 
                onCtaclick={handleCtaclick}
              />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <AboutPage 
                onBackToHome={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActivePage('home');
                }} 
                onCtaclick={handleCtaclick}
              />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <ContactPage 
                onBackToHome={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActivePage('home');
                }} 
              />
            </motion.div>
          )}

          {activePage === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <SecurityPage 
                onBackToHome={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActivePage('home');
                }} 
              />
            </motion.div>
          )}

          {activePage === 'faqs' && (
            <motion.div
              key="faqs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <FaqsPage 
                onBackToHome={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActivePage('home');
                }} 
              />
            </motion.div>
          )}

          {activePage === 'popia' && (
            <motion.div
              key="popia"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <PopiaPage 
                onBackToHome={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActivePage('home');
                }} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Universal Redesigned Minimal Footer */}
      <Footer onNavigateToPage={setActivePage} />
    </div>
  );
}

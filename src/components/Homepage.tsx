import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Landmark, ShieldCheck, Heart, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';
import { 
  LiveLedgerScreen, TenantDirectoryScreen, 
  LeasesVaultScreen, InvoicesScreen, MaintenanceTicketsScreen, MonthlyStatementScreen,
  DeviceFrame, LaptopDashboardScreen
} from './AppMockups';

import slideWhatsapp from '../assets/images/slide_whatsapp_1782549332467.jpg';
import slideCoffee from '../assets/images/slide_coffee_1782549345037.jpg';
import slideSpreadsheet from '../assets/images/slide_spreadsheet_1782549362398.jpg';
import slideTap from '../assets/images/slide_tap_1782549375859.jpg';
import ScrollGlowText from './ScrollGlowText';

// Slide list with generated images containing beautiful illustration and typography
const SLIDES = [
  {
    image: slideWhatsapp,
    alt: "Stop managing your rentals on WhatsApp."
  },
  {
    image: slideSpreadsheet,
    alt: "Your spreadsheet has worked hard. Let it retire."
  },
  {
    image: slideCoffee,
    alt: "Know who's paid before your morning coffee."
  },
  {
    image: slideTap,
    alt: "No more searching through WhatsApp for photos of a leaking tap."
  }
];

export default function Homepage({ 
  onNavigateToPage, 
  onCtaclick 
}: { 
  onNavigateToPage: (page: string) => void;
  onCtaclick: () => void;
}) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [activeWalkthroughTab, setActiveWalkthroughTab] = useState<'tenant' | 'landlord' | 'lease' | 'maintenance' | 'collection' | 'inspection'>('landlord');
  const mockupRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (key: 'tenant' | 'landlord' | 'lease' | 'maintenance' | 'collection' | 'inspection') => {
    setActiveWalkthroughTab(key);
    
    // Only scroll the mockup into view on mobile (where it is stacked below the tabs).
    // On desktop, they are side-by-side, so scrolling causes unnecessary jumping/glitching.
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        mockupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  // Auto rotation interval (8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#060812] text-white select-none">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Ambient subtle light-colored brand glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#ff5c12]/5 blur-3xl" />
          <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#253c96]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Built for South African independent landlords pill */}
            <button
              onClick={() => {
                const target = document.getElementById('platform-walkthrough');
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="mb-8 inline-flex items-center gap-2.5 bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg group hover:scale-[1.02]"
              id="za-landlord-pill"
            >
              <span className="text-base flex items-center justify-center shrink-0">🇿🇦</span>
              <span className="text-xs sm:text-sm font-bold tracking-wide text-[#ff5c12] uppercase font-sans">
                Built for South African independent landlords
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Interactive Image Slider (Floats seamlessly and pops dynamically) */}
            <div className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden bg-transparent mb-8 group">
              <AnimatePresence initial={true}>
                <motion.img
                  key={headlineIndex}
                  src={SLIDES[headlineIndex].image}
                  alt={SLIDES[headlineIndex].alt}
                  initial={{ opacity: 0, scale: 0.82, y: 35, filter: "blur(15px)" }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.06, y: -25, filter: "blur(12px)" }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.28, 1] }}
                  className="absolute inset-0 w-full h-full object-contain bg-transparent"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Prev/Next arrows on hover */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHeadlineIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#ff5c12]/80 border border-slate-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10"
                id="hero-slider-prev"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHeadlineIndex((prev) => (prev + 1) % SLIDES.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#ff5c12]/80 border border-slate-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10"
                id="hero-slider-next"
              >
                →
              </button>

              {/* Indicator dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full border border-slate-900/60 backdrop-blur-sm z-20">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHeadlineIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      headlineIndex === idx ? 'bg-[#ff5c12] scale-125' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    id={`hero-slider-dot-${idx}`}
                  />
                ))}
              </div>
            </div>

            {/* Supporting Text */}
            <ScrollGlowText className="text-base sm:text-lg leading-relaxed font-sans max-w-xl">
              Finally, a simpler way to manage your rental properties—from rent collection to maintenance—all in one place.
            </ScrollGlowText>
          </div>
        </div>
      </section>

      {/* --- PLATFORM INTERACTIVE WALKTHROUGH --- */}
      <section id="platform-walkthrough" className="py-16 bg-[#030408] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold tracking-widest text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-4 py-1.5 rounded-full">
              Interactive Walkthrough
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-6 mb-4">
              A workspace built for clarity.
            </h2>
            <ScrollGlowText className="text-sm sm:text-base leading-relaxed font-sans">
              Click through our live modules to experience our responsive landlord ecosystem.
            </ScrollGlowText>
          </div>

          {/* Interactive walkthrough box with Dark Brand theme */}
          <div className="bg-[#0b0e1a] border border-slate-800 rounded-[32px] p-4 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
            
            {/* Tabs List Column */}
            <div className="lg:col-span-5 flex flex-col gap-3 text-left">
              {[
                { key: 'landlord', label: 'Landlord Dashboard', desc: 'Real-time financial status, arrears alerts and collection percentages.' },
                { key: 'tenant', label: 'Tenant Dashboard', desc: 'Sleek, direct invoices, PayShap links, and payment history files.' },
                { key: 'lease', label: 'Digital Lease Vault', desc: 'Secure repository for active contracts, signed signatures, and deposits.' },
                { key: 'maintenance', label: 'Maintenance Portal', desc: 'Direct issue logging with photographic upload and status boards.' },
                { key: 'collection', label: 'Rent Collection', desc: 'Instant bank-to-bank settlements with post-invoice requests.' },
                { key: 'inspection', label: 'Inspection Report', desc: 'Monthly transaction summaries and exportable receipts.' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key as any)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-1.5 ${
                    activeWalkthroughTab === tab.key
                      ? 'bg-[#f59a1e] border-[#f59a1e] text-[#060812] shadow-xl scale-[1.02]'
                      : 'bg-slate-900/30 hover:bg-slate-900/60 border-slate-800/60 text-slate-300 hover:scale-[1.01]'
                  }`}
                  id={`walkthrough-tab-${tab.key}`}
                >
                  <span className="text-xs sm:text-sm font-extrabold tracking-tight transition-colors duration-300">{tab.label}</span>
                  <span className={`text-[11px] font-sans transition-colors duration-300 ${activeWalkthroughTab === tab.key ? 'text-[#060812]/85 font-medium' : 'text-slate-400'}`}>
                    {tab.desc}
                  </span>
                </button>
              ))}
            </div>

            {/* Display Mockup Column - Large, fully uncramped phone template */}
            <div ref={mockupRef} className="lg:col-span-7 flex items-center justify-center relative min-h-[500px] sm:min-h-[580px] lg:px-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f59a1e]/5 to-transparent rounded-3xl blur-2xl -z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWalkthroughTab}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full flex justify-center"
                >
                  <DeviceFrame 
                    type="phone" 
                    className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[440px] shadow-2xl scale-100 border-slate-800"
                  >
                    {activeWalkthroughTab === 'landlord' && <LiveLedgerScreen />}
                    {activeWalkthroughTab === 'tenant' && <TenantDirectoryScreen />}
                    {activeWalkthroughTab === 'lease' && <LeasesVaultScreen />}
                    {activeWalkthroughTab === 'maintenance' && <MaintenanceTicketsScreen />}
                    {activeWalkthroughTab === 'collection' && <InvoicesScreen />}
                    {activeWalkthroughTab === 'inspection' && <MonthlyStatementScreen />}
                  </DeviceFrame>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY INDEPENDENT LANDLORDS CHOOSE LANTENN --- */}
      <section className="py-20 bg-[#060812] border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-4 py-1.5 rounded-full">
              A Platform Built For You
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-6">
              Why independent landlords choose Lantenn.
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              { emoji: "⏳", title: "Spend less time chasing rent.", desc: "Automated friendly reminders take care of late payment follow-ups so you do not have to initiate uncomfortable conversations over WhatsApp." },
              { emoji: "✓", title: "Organised by Design.", desc: "Active leases, signed agreements, deposit proof sheets, and tenant history files are kept synchronized and retrievable in seconds." },
              { emoji: "🤝", title: "Deliver a better tenant experience.", desc: "Give your occupants a beautiful private portal to pay rent, view statement histories, and report tap leaks with photo uploads." },
              { emoji: "📈", title: "Grow your portfolio.", desc: "With administrative chaos fully automated, you reclaim hours of free time every single month to locate and fund your next rental investments." },
              { emoji: "📊", title: "Ditch the spreadsheet.", desc: "Your monthly bank reconciliation sheets have worked extremely hard. It is time to let them retire in peace." },
              { emoji: "🏠", title: "Built for self-managers.", desc: "You enjoy being directly involved in your rental investments, but need a reliable operational system to prevent manual errors." }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      type: "spring",
                      stiffness: 70,
                      damping: 15,
                      duration: 0.7 
                    } 
                  }
                }}
                className="bg-[#0b0e1a] border border-slate-800 p-6 sm:p-8 rounded-3xl text-left flex flex-col justify-between hover:border-[#f59a1e]/40 hover:bg-[#0f1426] transition-all duration-300 hover:shadow-lg hover:shadow-black/50 group"
              >
                <div>
                  <span className="text-2xl mb-4 block group-hover:scale-110 transition-transform duration-200">{card.emoji}</span>
                  <h3 className="font-display font-extrabold text-lg text-white mb-2">{card.title}</h3>
                  <ScrollGlowText className="text-xs sm:text-sm leading-relaxed font-sans">
                    {card.desc}
                  </ScrollGlowText>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA BOTTOM ROW --- */}
      <section className="py-20 bg-[#030408] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#0b0e1a] border border-slate-800 rounded-[32px] p-6 sm:p-12 shadow-2xl relative overflow-hidden text-left text-white"
          >
            <div className="max-w-2xl relative z-10">
              <span className="font-mono text-xs font-bold tracking-widest text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-3.5 py-1.5 rounded-full">
                mzansi power
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-6 mb-4">
                Ready to take the leap?
              </h2>
              
              <ScrollGlowText className="text-sm sm:text-base leading-relaxed font-sans mb-8">
                Onboard your rental portfolio in less than 5 minutes. Tell us about your properties and let us make management effortless.
              </ScrollGlowText>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onCtaclick}
                  className="bg-[#f59a1e] hover:bg-[#f59a1e]/90 text-[#060812] font-black py-4 px-10 rounded-full text-sm sm:text-base shadow hover:shadow-[#f59a1e]/10 transition-all cursor-pointer text-center"
                  id="bottom-cta-button"
                >
                  Get Started Free
                </button>
              </div>
            </div>
            {/* Subtle background glow elements */}
            <div className="absolute top-[-20%] right-[-20%] w-[50%] h-[50%] rounded-full bg-[#f59a1e]/5 blur-3xl pointer-events-none" />
          </motion.div>

        </div>
      </section>

    </div>
  );
}

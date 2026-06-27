import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage({ 
  onBackToHome, 
  onCtaclick 
}: { 
  onBackToHome: () => void; 
  onCtaclick: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#060812] text-white font-sans selection:bg-[#f59a1e]/30 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <div className="max-w-3xl mx-auto mb-10">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#f59a1e] transition-colors cursor-pointer"
          id="back-home-about-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        {/* Header Block */}
        <span className="font-mono text-xs font-bold tracking-widest text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-3.5 py-1.5 rounded-full">
          About Lantenn
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-6 mb-8 leading-tight">
          Built from a real problem.
        </h1>
        
        <div className="prose max-w-none text-slate-300 leading-relaxed font-sans space-y-6 text-base sm:text-lg">
          <p>
            Lantenn was founded by two university students after seeing first-hand how much time independent landlords spend managing rental properties.
          </p>
          <p>
            Inspired by our family's experience in the rental industry, we witnessed the daily frustrations of chasing rent payments, managing lease agreements, coordinating maintenance requests and juggling endless WhatsApp conversations. It became clear that managing rental properties shouldn't be this complicated.
          </p>
          <p>
            Existing property management software was either built for large agencies or too expensive for independent landlords, while the alternatives were spreadsheets, paperwork and manual administration.
          </p>
          <p>
            So we decided to build something better.
          </p>
          <p>
            Lantenn is a modern rental management platform designed specifically for independent residential landlords. It brings rent collection, tenant management, digital leases, inspections and maintenance together in one simple, mobile-first platform.
          </p>
          <p className="border-l-4 border-[#f59a1e] pl-4 italic text-[#f59a1e] my-8 text-lg sm:text-xl font-semibold bg-[#f59a1e]/5 py-4 pr-4 rounded-r-2xl">
            Our mission is simple: <strong>make professional rental management accessible to every independent landlord in South Africa.</strong>
          </p>
          <p>
            We're not building software for everyone.
          </p>
          <p className="font-bold text-white text-lg">
            We're building the platform we wished independent landlords had all along.
          </p>
        </div>

        {/* CTA Block / Get in Touch Details */}
        <div className="mt-16 border border-slate-800 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900/40 p-8 rounded-3xl">
          <div>
            <h4 className="font-display font-bold text-lg text-white">Have questions about Lantenn?</h4>
            <p className="text-xs text-slate-400 mt-1">Get in touch directly with our founding team.</p>
          </div>
          <button
            onClick={onCtaclick}
            className="bg-[#f59a1e] hover:bg-[#f59a1e]/90 text-black font-black py-3.5 px-8 rounded-full text-sm shadow transition-colors cursor-pointer"
            id="about-cta-get-started"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

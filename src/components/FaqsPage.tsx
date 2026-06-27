import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FaqsPage({ onBackToHome }: { onBackToHome: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#060812] text-white font-sans selection:bg-[#f59a1e]/30 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto mb-10">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#f59a1e] transition-colors cursor-pointer"
          id="back-home-faqs-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        {/* Header Block */}
        <span className="font-mono text-xs font-bold tracking-wider text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-3.5 py-1.5 rounded-full">
          FAQ Document
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-6 mb-6 leading-tight">
          Frequently asked questions.
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-12">
          Clear, honest, and direct answers about how Lantenn works, processing fees, POPIA compliance, and setup.
        </p>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden transition-shadow hover:shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  id={`faq-btn-${index}`}
                >
                  <span className="font-display font-extrabold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-slate-400">
                    {isOpen ? <Minus className="w-4 h-4 text-[#f59a1e]" /> : <Plus className="w-4 h-4 text-[#f59a1e]" />}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 border-t border-slate-800 pt-4 bg-slate-950/40">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Humorous disclaimer */}
        <div className="mt-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 text-center">
          <HelpCircle className="w-8 h-8 text-[#f59a1e] mx-auto mb-3" />
          <h4 className="font-display font-bold text-white text-lg mb-1">Still searching for answers?</h4>
          <p className="text-xs text-slate-400 font-sans max-w-md mx-auto leading-normal">
            Email our team directly at <strong>info@lantenn.co.za</strong>. We promise to answer your questions within a business day, with zero corporate jargon.
          </p>
        </div>

      </div>
    </div>
  );
}

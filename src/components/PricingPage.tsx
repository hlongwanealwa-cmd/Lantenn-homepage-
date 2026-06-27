import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';

export default function PricingPage({ onBackToHome, onCtaclick }: { onBackToHome: () => void; onCtaclick: () => void }) {
  const [unitCount, setUnitCount] = useState(5);
  const [avgRent, setAvgRent] = useState(6000);

  const totalMonthlyRent = unitCount * avgRent;
  const lantennFee = totalMonthlyRent * 0.03;
  const netEarnings = totalMonthlyRent - lantennFee;

  return (
    <div className="min-h-screen bg-[#060812] text-white font-sans selection:bg-[#f59a1e]/30 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto mb-10">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#f59a1e] transition-colors cursor-pointer"
          id="back-home-pricing-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="font-mono text-xs font-bold tracking-widest text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-3.5 py-1.5 rounded-full">
            Transparent Pricing
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-6 mb-6 leading-tight">
            Simple pricing. No subscriptions. No contracts.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
            You only pay when you actually receive rent. If a unit is vacant or the tenant pays late, you pay absolutely nothing. Zero financial risk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Left Side: The Premium Pricing Card (Dark Accent Card for maximum impact) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#0b0e1a] border border-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 bg-[#f59a1e] text-[#060812] font-mono text-[9px] font-bold px-4 py-1.5 rounded-bl-2xl tracking-widest uppercase">
              PREFERRED MODEL
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 bg-white/10 text-[#f59a1e] rounded-xl flex items-center justify-center font-black text-lg">
                  %
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white">Pay-When-Rent-Settles</h3>
                  <p className="text-xs text-slate-400">Zero subscriptions. Zero setup fees.</p>
                </div>
              </div>

              <div className="mb-8 border-b border-slate-800 pb-8">
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-5xl sm:text-6xl font-black text-[#f59a1e] font-mono">3%</span>
                  <span className="text-slate-300 font-sans text-sm font-semibold">per successful rent transaction</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  We process the payment via PayShap directly to your landlord bank account, and request our flat 3% transaction fee from you afterward. If no rent is collected, you pay absolutely R0.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-emerald-500/30">✓</div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">No monthly commitments</span>
                    <p className="text-slate-200 text-sm font-medium">Cancel anytime instantly. Zero lock-ins.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-emerald-500/30">✓</div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Direct PayShap Instant Settlements</span>
                    <p className="text-slate-200 text-sm font-medium">Money goes directly into your bank account, not our pockets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-emerald-500/30">✓</div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Unlimited tenants & leases</span>
                    <p className="text-slate-200 text-sm font-medium">Onboard your entire portfolio without paying extra seat fees.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onCtaclick}
                className="w-full bg-[#f59a1e] hover:bg-[#f59a1e]/90 text-[#060812] font-black py-4 px-8 rounded-full shadow transition-all flex items-center justify-center gap-2 cursor-pointer group"
                id="pricing-cta-button"
              >
                Onboard Your Portfolio Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-[10px] text-slate-400 font-mono text-center block mt-3 font-semibold uppercase">
                🔒 Security Assured & POPIA Compliant
              </span>
            </div>
          </div>

          {/* Right Side: R0 Risk Comparison and Calculator Widget (Light Modern Card) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#0b0e1a]/80 border border-slate-800 rounded-3xl p-6 sm:p-10 text-left">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <TrendingUp className="w-5 h-5 text-[#f59a1e]" />
                <h4 className="font-display font-extrabold text-lg text-white">Calculate Your Monthly Yield</h4>
              </div>

              {/* Sliders */}
              <div className="space-y-6 mb-8 border-b border-slate-850 pb-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-slate-400 font-bold uppercase">Number of Active Units</label>
                    <span className="text-sm font-black text-white font-mono bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">{unitCount} units</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={unitCount} 
                    onChange={(e) => setUnitCount(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#f59a1e]"
                    id="pricing-unit-count-slider"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-slate-400 font-bold uppercase">Average Monthly Rent</label>
                    <span className="text-sm font-black text-white font-mono bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">R {avgRent.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="30000" 
                    step="500"
                    value={avgRent} 
                    onChange={(e) => setAvgRent(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#f59a1e]"
                    id="pricing-avg-rent-slider"
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="space-y-3.5 mb-8">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-xs font-sans font-semibold">Total Collections Expected</span>
                  <span className="font-mono text-sm font-black text-white">R {totalMonthlyRent.toLocaleString()}.00</span>
                </div>
                
                <div className="flex justify-between items-center text-[#f59a1e] font-bold">
                  <span className="text-xs font-sans font-semibold">Platform Processing Fee (3%)</span>
                  <span className="font-mono text-sm font-black">- R {lantennFee.toLocaleString()}.00</span>
                </div>

                <div className="flex justify-between items-center text-white font-black border-t border-slate-800 pt-3.5 text-base">
                  <span className="text-sm font-display font-extrabold uppercase">Your Net Receivable</span>
                  <span className="text-[#f59a1e] font-mono text-lg font-black">R {netEarnings.toLocaleString()}.00</span>
                </div>
              </div>
            </div>

            {/* Human copy block explaining direct-payment model */}
            <div className="bg-[#060812] border border-slate-800 p-4 rounded-2xl">
              <div className="flex gap-3">
                <span className="text-[#f59a1e] shrink-0 font-bold">💡</span>
                <p className="text-xs text-slate-300 leading-normal font-sans">
                  Unlike traditional platforms that force you to link a merchant bank account or delay payouts, Lantenn uses <strong>PayShap</strong> to route tenant rent directly to your bank. We only request our 3% fee via an invoice afterward. You stay in 100% control of your portfolio's cash flow.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center text-left gap-4">
          <div>
            <h5 className="font-display font-bold text-white">Ready to simplify your rentals?</h5>
            <p className="text-xs text-slate-400 mt-0.5">Let's talk and get you set up in minutes without any upfront costs.</p>
          </div>
          <button 
            onClick={onCtaclick}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f59a1e] hover:text-white transition-colors cursor-pointer"
            id="pricing-contact-link"
          >
            Get In Touch &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}

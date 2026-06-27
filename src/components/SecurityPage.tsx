import React from 'react';
import { ArrowLeft, Lock, Landmark, EyeOff } from 'lucide-react';

export default function SecurityPage({ onBackToHome }: { onBackToHome: () => void }) {
  return (
    <div className="min-h-screen bg-[#060812] text-white font-sans selection:bg-[#f59a1e]/30 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto mb-10">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#f59a1e] transition-colors cursor-pointer"
          id="back-home-security-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        {/* Header Block */}
        <span className="font-mono text-xs font-bold tracking-widest text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-3.5 py-1.5 rounded-full">
          Platform Security
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-6 mb-6 leading-tight">
          Confident, secure, and fully encrypted.
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-10">
          We treat security not as an after-thought, but as our absolute core foundation. Here is exactly how we keep your portfolio, tenant records, and cash flow protected.
        </p>

        <div className="space-y-10 font-sans text-slate-300 leading-relaxed text-base">
          
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-1">
              <Lock className="w-5 h-5 text-[#f59a1e]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2">End-to-End Encryption</h3>
              <p className="text-sm sm:text-base text-slate-300">
                All traffic between your browser or phone and our servers is encrypted using standard Transport Layer Security (TLS) with robust AES-256 standards. Your tenant lease contracts, move-in checklists, and private data are fully secure.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-1">
              <Landmark className="w-5 h-5 text-[#f59a1e]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Direct Bank-to-Bank Routing</h3>
              <p className="text-sm sm:text-base text-slate-300">
                Lantenn is NOT a bank and we never store your capital in a middleman account. All rent transactions are processed via <strong>PayShap</strong>, which routes money directly from the tenant's bank account straight into your registered landlord bank account. You do not have to wait days or weeks for payouts.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-1">
              <EyeOff className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Privacy & Access Controls</h3>
              <p className="text-sm sm:text-base text-slate-300">
                Each landlord receives unique credentials. We employ strict role-based access controls to guarantee that tenants only see invoices or log maintenance pertaining to their active leases, with zero cross-leakage of records.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 mt-12">
            <h4 className="font-display font-bold text-white mb-2">Adherence to South African Standard Codes</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-normal">
              We align with PASA (Payments Association of South Africa) clearing rules, and strictly adhere to POPIA policies to safeguard user confidentiality. For specialized security questionnaires, contact our team at <strong>info@lantenn.co.za</strong>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ArrowLeft, Shield, Check, FileText, Lock } from 'lucide-react';

interface PopiaPageProps {
  onBackToHome: () => void;
}

export default function PopiaPage({ onBackToHome }: PopiaPageProps) {
  return (
    <div className="min-h-screen bg-[#060812] text-white font-sans selection:bg-[#f59a1e]/30 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <div className="max-w-3xl mx-auto mb-10">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#c4e7e5] hover:text-[#f59a1e] transition-colors cursor-pointer"
          id="back-home-popia-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        {/* Header Block */}
        <span className="font-mono text-xs font-bold tracking-widest text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-3.5 py-1.5 rounded-full">
          POPIA Compliance
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-6 mb-8 leading-tight">
          Protection of Personal Information Act.
        </h1>
        
        <div className="prose max-w-none text-slate-300 leading-relaxed font-sans space-y-6 text-base sm:text-lg">
          <p>
            Lantenn is committed to protecting your personal information and complying with the <strong>Protection of Personal Information Act (POPIA)</strong> of South Africa.
          </p>
          <p>
            When you use our portal to list properties, manage leases, and collect rent from tenants, you can rest assured that we handle all customer and resident data with absolute confidentiality.
          </p>

          <h3 className="font-display font-bold text-xl text-white mt-8 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#f59a1e]" /> 1. How we protect your data
          </h3>
          <p className="text-sm sm:text-base">
            All stored files, digital leases, signed agreements, and tenant information are encrypted. We employ bank-grade security protocols, robust firewalls, and restricted administrative database access to prevent unauthorized access.
          </p>

          <h3 className="font-display font-bold text-xl text-white mt-8 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#f59a1e]" /> 2. Tenant & Landlord Rights
          </h3>
          <p className="text-sm sm:text-base">
            Under POPIA regulations, both landlords and tenants retain the right to access their information, request correction of incomplete data, or request the absolute deletion of accounts and active portfolios.
          </p>

          <h3 className="font-display font-bold text-xl text-white mt-8 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#f59a1e]" /> 3. Responsible Processing
          </h3>
          <p className="text-sm sm:text-base">
            We collect and process your contact details, financial numbers, and property directories solely to facilitate rent collection, tenant billing, and maintenance operations. We never lease, trade, or sell your private information to third-party advertisers.
          </p>

          <div className="bg-[#253c96]/15 border border-[#253c96]/30 rounded-2xl p-6 mt-10">
            <h4 className="font-display font-bold text-white text-base mb-2">Our Information Officer</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If you have any questions about how your personal information is stored, processed, or verified, or if you would like to initiate a formal data deletion request, email our compliance officer directly at <strong>info@lantenn.co.za</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

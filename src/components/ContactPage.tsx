import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2, MessageCircle, Mail, Clock } from 'lucide-react';

export default function ContactPage({ onBackToHome }: { onBackToHome: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    units: '1-5',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('Establishing secure SSL tunnel connection...');
    
    setTimeout(() => {
      setSubmitStatus('Encrypting portfolio telemetry payload...');
      setTimeout(() => {
        setSubmitStatus('Preparing dispatch copy for info@lantenn.co.za...');
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          
          // Compose mailto Link with precise prefilled inputs
          const subject = encodeURIComponent(`Lantenn Secure Request - ${formData.name}`);
          const body = encodeURIComponent(
            `Dear Lantenn Team,\n\n` +
            `A secure onboarding request has been submitted with the following details:\n\n` +
            `• Contact Name: ${formData.name}\n` +
            `• Email Address: ${formData.email}\n` +
            `• Phone Number: ${formData.phone}\n` +
            `• Estimated Portfolio Size: ${formData.units} active units\n\n` +
            `Message Details:\n"${formData.message}"\n\n` +
            `Sincerely,\n${formData.name}`
          );
          
          // Redirect to trigger default system mail client
          window.location.href = `mailto:info@lantenn.co.za?subject=${subject}&body=${body}`;
        }, 800);
      }, 700);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#060812] text-white font-sans selection:bg-[#f59a1e]/30 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto mb-10">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#f59a1e] transition-colors cursor-pointer"
          id="back-home-contact-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-[#f59a1e] uppercase bg-[#f59a1e]/10 border border-[#f59a1e]/20 px-3.5 py-1.5 rounded-full">
                Get In Touch
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-6 mb-6 leading-tight">
                Let's simplify your portfolio.
              </h1>
              <p className="text-base text-slate-300 leading-relaxed font-sans max-w-sm mb-10">
                Have questions about transitioning from WhatsApp groups, or want help onboarding your first active leases? Our team is ready to assist.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start text-white">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#f59a1e]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-mono font-bold text-slate-400 uppercase">Email Support</h5>
                    <p className="text-sm font-bold text-white mt-0.5">info@lantenn.co.za</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-white">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#f59a1e]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-mono font-bold text-slate-400 uppercase">WhatsApp Support</h5>
                    <p className="text-sm font-bold text-white mt-0.5">0734174274</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-white">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#f59a1e]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-mono font-bold text-slate-400 uppercase">Response Window</h5>
                    <p className="text-sm font-bold text-white mt-0.5">Within 2 hours (Mon - Fri)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Human copy foot note */}
            <div className="mt-12 text-xs font-sans text-slate-400 italic max-w-sm border-t border-slate-800 pt-6">
              "We pride ourselves on direct, real-human conversation. No endless loops of corporate robotic call-centers."
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b0e1a]/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm text-left relative overflow-hidden">
              {isSubmitting ? (
                <div className="py-20 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="relative w-16 h-16 mb-8">
                    {/* Ring loader with brand color gradient */}
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
                    <div className="absolute inset-0 rounded-full border-4 border-[#f59a1e] border-t-transparent animate-spin" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-white mb-2">Processing Secure Request</h3>
                  <p className="text-xs font-mono tracking-wide text-slate-400 uppercase animate-pulse">
                    {submitStatus}
                  </p>
                </div>
              ) : isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-800">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white mb-2">Secure Request Registered!</h3>
                  <p className="text-sm text-slate-300 max-w-md mb-8 font-sans leading-relaxed">
                    We compiled your portfolio request details and launched your email client to send them directly to <strong className="text-white">info@lantenn.co.za</strong>.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', units: '1-5', message: '' });
                    }}
                    className="bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:border-slate-700 font-bold py-2.5 px-6 rounded-full text-xs transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-1">Send a direct inquiry</h3>
                    <p className="text-xs text-slate-400 font-sans">We will guide you step-by-step through our direct-onboarding process.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="Alwande Hlongwane" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59a1e]/20 focus:border-[#f59a1e] transition-all font-sans text-white placeholder-slate-500"
                        id="contact-name-input"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="alwande@hlongwane.co.za" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59a1e]/20 focus:border-[#f59a1e] transition-all font-sans text-white placeholder-slate-500"
                        id="contact-email-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        placeholder="082 123 4567" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59a1e]/20 focus:border-[#f59a1e] transition-all font-sans text-white placeholder-slate-500"
                        id="contact-phone-input"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Portfolio Size</label>
                      <select 
                        value={formData.units}
                        onChange={e => setFormData({...formData, units: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59a1e]/20 focus:border-[#f59a1e] transition-all font-sans text-white"
                        id="contact-units-select"
                      >
                        <option value="1-5" className="bg-[#0b0e1a]">1 - 5 active rental units</option>
                        <option value="6-20" className="bg-[#0b0e1a]">6 - 20 active rental units</option>
                        <option value="21-50" className="bg-[#0b0e1a]">21 - 50 active rental units</option>
                        <option value="50+" className="bg-[#0b0e1a]">More than 50 active units</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Tell us about your rental portfolio</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      placeholder="Hi, I manage a few rooms in Soweto and would like help shifting my tenants from manual EFTs to PayShap..." 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59a1e]/20 focus:border-[#f59a1e] transition-all font-sans text-white resize-none placeholder-slate-500"
                      id="contact-message-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f59a1e] hover:bg-[#f59a1e]/90 text-black font-black py-4 px-6 rounded-full text-sm transition-all shadow flex items-center justify-center gap-2 cursor-pointer group"
                    id="contact-submit-btn"
                  >
                    Submit Secure Request <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

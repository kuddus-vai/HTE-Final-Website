import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Building,
  HelpCircle,
  Globe
} from 'lucide-react';

interface ContactPageProps {
  onOpenDemoModal: () => void;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenDemoModal, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    serviceInterest: 'whatsapp-automation',
    monthlyVolume: '100-500',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-8 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>INSTANT EXECUTIVE RESPONSE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
          Ready to Automate Your Operations?
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Reach out directly to our Savar, Dhaka engineering headquarters. We respond in under 3 minutes on WhatsApp and provide a live interactive prototype before you make any commitment.
        </p>
      </div>

      {/* Main Grid: Form + Direct Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Interactive Request Form */}
        <div className="lg:col-span-7 bg-[#0C101C] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>

          {submitted ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
                Request Received Successfully!
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="text-white font-bold">{formData.name}</span>. Our senior technical consultant is reviewing your specifications and will ping you on WhatsApp at <span className="text-[#FFA149] font-mono">{formData.phone}</span> within minutes.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open Fast-Track WhatsApp Chat</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                  Request an Instant Architectural Blueprint
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Tell us about your business. We will create a free working prototype demo for your team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">WhatsApp / Phone Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 01996-921149"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Company / Brand Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Urban Threads Bangladesh"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. founder@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Primary Solution Needed</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#111726] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="whatsapp-automation">WhatsApp 24/7 AI Auto-Reply Bot</option>
                    <option value="high-performance-web">High-Performance Web / Storefront</option>
                    <option value="courier-ecommerce">eCommerce & Courier (Steadfast/Pathao) Sync</option>
                    <option value="smart-pos">Smart POS Cloud Billing System</option>
                    <option value="crm-workflows">Autonomous CRM & Workflow Sync</option>
                    <option value="full-stack">Complete Full-Stack Enterprise Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Current Daily Orders / Chats</label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={e => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#111726] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="under-50">Under 50 inquiries / day</option>
                    <option value="50-200">50 – 200 inquiries / day</option>
                    <option value="200-500">200 – 500 inquiries / day (High Volume)</option>
                    <option value="500+">500+ inquiries / day (Enterprise Scale)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Specific Needs or Current Pain Points</label>
                <textarea
                  rows={3}
                  placeholder="e.g. We lose sales when our team is asleep, and abandoned checkouts are not followed up..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#FF6B00]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] hover:opacity-95 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Blueprint Request...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Submit Request & Claim Free Prototype Demo</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam guarantee. Your details are strictly confidential.</span>
              </div>
            </form>
          )}
        </div>

        {/* Right Side: Fast-Track WhatsApp & Savar HQ Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Fast-Track WhatsApp Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0C1E19] to-[#081210] border border-emerald-500/30 shadow-2xl space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>DIRECT SAVAR HOTLINE</span>
            </div>
            
            <h2 className="text-2xl font-black text-white font-['Outfit',sans-serif]">
              Prefer to talk right now?
            </h2>
            
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              Skip forms. Chat directly with our technical director on WhatsApp. We typically reply in under 3 minutes.
            </p>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Headquarters Location Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0C101C] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFA149]">
              <MapPin className="w-4 h-4" />
              <span>HEADQUARTERS</span>
            </div>

            <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
              Savar, Dhaka 1217
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>High-Tech Enterprise BD Ltd., Savar, Dhaka 1217, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-mono text-white font-semibold">{COMPANY_INFO.phoneIntl}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#FFA149] shrink-0" />
                <a 
                  href={`https://${COMPANY_INFO.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-mono hover:underline transition-colors"
                >
                  {COMPANY_INFO.website}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">24/7 Always Open • Technical Support</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Timezone: GMT+6 (BST)</span>
              <span className="text-emerald-400 font-mono">● Operational</span>
            </div>
          </div>

          {/* Social Proof Link */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 text-xs">
            <span className="text-slate-300">Followed by 3,400+ leaders on Facebook</span>
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFA149] font-bold hover:underline flex items-center gap-1"
            >
              <span>View Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};

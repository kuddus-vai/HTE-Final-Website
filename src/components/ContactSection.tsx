import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  ShieldCheck,
  Instagram,
  Facebook,
  ExternalLink,
  Globe
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState('WhatsApp Automation');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;
    setSent(true);
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `Hi High-Tech Enterprise! My name is ${name || 'Prospective Client'}. I am interested in ${serviceOfInterest}. Note: ${message || 'Please share your portfolio and pricing.'}`
    );
    return `https://wa.me/8801996921149?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0D15] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono font-semibold text-[#FF8A33] mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect with High-Tech Enterprise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            Upgrade Your Business <span className="text-[#FF7A00]">One Tap at a Time</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Reach our engineering headquarters in Savar, Dhaka or connect directly on WhatsApp for an immediate consultation.
          </p>
        </div>

        {/* Dual Grid: Contact Cards on Left + Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left 5 cols: Official Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct WhatsApp VIP Card */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-[#0E1524] to-[#0A0E17] border border-emerald-500/30 hover:border-emerald-500/60 shadow-lg hover:shadow-emerald-900/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-emerald-400 font-bold">Fastest Response</div>
                    <div className="text-base font-bold text-white">Direct WhatsApp</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="text-lg font-mono font-bold text-emerald-300 mt-2">
                {COMPANY_INFO.phoneIntl}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Typical reply time: &lt; 5 minutes (24/7 active bot + human support)
              </div>
            </a>

            {/* Email & Domain */}
            <div className="p-6 rounded-3xl bg-[#0E131F] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-[#FF7A00] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Official Email</div>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#FF8A33] transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-cyan-400 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Official Domain</div>
                  <a 
                    href={`https://${COMPANY_INFO.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold font-mono text-white hover:text-cyan-400 transition-colors"
                  >
                    {COMPANY_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="p-6 rounded-3xl bg-[#0E131F] border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Headquarters</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Dhaka, Savar, Bangladesh, 1217
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Hubs: New York • Luxembourg • San Francisco • London • Dubai
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Always Open (24/7 Operations)</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-4 rounded-2xl bg-[#0E131F] border border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Social Portals:</span>
              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-pink-400 transition-colors"
                  title="Instagram (@hightechenterprisebd)"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right 7 cols: Direct Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0E131F] border border-white/10 shadow-2xl">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                    Send Direct Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Tell us about your operational bottleneck or web project.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mahfuzul Alam"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="e.g. +880 18XX-XXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Primary Service of Interest
                  </label>
                  <select
                    value={serviceOfInterest}
                    onChange={(e) => setServiceOfInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option>WhatsApp Auto-Reply & Conversational AI</option>
                    <option>High-Performance Next.js Web Platform</option>
                    <option>CRM Flows & Autonomous Workflows</option>
                    <option>eCommerce & Pathao/Steadfast Sync</option>
                    <option>Smart POS Cloud System</option>
                    <option>Free Website Demo Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Details or Questions
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current store, daily volume, or what you want automated..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl font-semibold text-xs sm:text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
                  Message Dispatched!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-bold">{name}</span>. Our Savar/Dhaka automation architects have received your note and will reach out via WhatsApp at <span className="text-emerald-400 font-mono">{contact}</span> shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-[#FF8A33] hover:underline font-bold pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

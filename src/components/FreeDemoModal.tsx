import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Building2, 
  Globe,
  Zap,
  Lock
} from 'lucide-react';

interface FreeDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeDemoModal: React.FC<FreeDemoModalProps> = ({ isOpen, onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('eCommerce & Retail');
  const [currentUrl, setCurrentUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'WhatsApp AI Auto-Reply',
    'High-Converting Website'
  ]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const featuresList = [
    'WhatsApp AI Auto-Reply',
    'High-Converting Website',
    'CRM & Order Flows',
    'Shopify / WooCommerce Sync',
    'Smart POS Cloud',
    'bKash / Nagad Gateway'
  ];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !phone) return;
    setSubmitted(true);
  };

  const getWhatsAppShareLink = () => {
    const text = encodeURIComponent(
      `Hello High-Tech Enterprise! I would like to request a FREE Website & Automation Demo for my business:\n\n• Business: ${businessName}\n• Type: ${businessType}\n• Contact: ${fullName || 'Client'} (${phone})\n• Link: ${currentUrl || 'N/A'}\n• Features Needed: ${selectedFeatures.join(', ')}\n\nLooking forward to your preview prototype!`
    );
    return `https://wa.me/8801996921149?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#0E1321] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header matching the campaign image */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FFA149] border border-[#FF6B00]/30 text-xs font-mono font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Campaign Offer</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                Get A <span className="text-[#FF7A00]">Free Website Demo</span>
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Want a modern website & automation system that helps grow your business? 
                <span className="text-white font-semibold"> Build. Grow. Succeed.</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Dhaka Lifestyle Co."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Business Category
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option>eCommerce & Retail</option>
                    <option>Fashion & Apparel</option>
                    <option>Logistics & Supply Chain</option>
                    <option>Real Estate & Property</option>
                    <option>Restaurant & Cloud Kitchen</option>
                    <option>Professional Agency</option>
                    <option>Health & Cosmetics</option>
                    <option>Other Services</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Asif Ahmed"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 01996-XXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Current Facebook Page or Website URL (if any)
                </label>
                <input
                  type="text"
                  value={currentUrl}
                  onChange={(e) => setCurrentUrl(e.target.value)}
                  placeholder="facebook.com/yourpage or yourbrand.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              {/* Multi-select features */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Select Desired Capabilities:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {featuresList.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat);
                    return (
                      <button
                        type="button"
                        key={feat}
                        onClick={() => toggleFeature(feat)}
                        className={`px-3 py-2 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#FF6B00]/20 border-[#FF6B00] text-white'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>{feat}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] via-[#FF8A33] to-[#FF6B00] shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_35px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Free Demo Prototype</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>100% Free • No Credit Card • Zero Obligation</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
              Demo Request Received!
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{fullName || businessName}</span>. 
              Our architecture team at Savar/Dhaka is crafting a custom live website and WhatsApp preview for your business.
            </p>

            <div className="p-4 rounded-2xl bg-[#141B2D] border border-white/10 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
              <div className="text-slate-400">Business: <span className="text-white">{businessName}</span></div>
              <div className="text-slate-400">Category: <span className="text-white">{businessType}</span></div>
              <div className="text-slate-400">Turnaround: <span className="text-emerald-400 font-bold">Within 24 Hours</span></div>
            </div>

            <div className="pt-4 flex flex-col gap-2.5 max-w-md mx-auto">
              <a
                href={getWhatsAppShareLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fast-Track on WhatsApp ({COMPANY_INFO.phone})</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl text-xs text-slate-400 hover:text-white bg-white/5 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

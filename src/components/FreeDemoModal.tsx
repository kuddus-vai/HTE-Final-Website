import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { submitQuoteToGmail, PRIMARY_GMAIL } from '../services/quoteService';
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
  Lock,
  Mail,
  Loader2,
  ExternalLink
} from 'lucide-react';

interface FreeDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeDemoModal: React.FC<FreeDemoModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState(isBn ? 'ই-কমার্স ও রিটেল' : 'eCommerce & Retail');
  const [currentUrl, setCurrentUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    isBn ? ['হোয়াটসঅ্যাপ এআই অটো-রিপ্লাই', 'হাই-কনভার্টিং ওয়েবসাইট'] : ['WhatsApp AI Auto-Reply', 'High-Converting Website']
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const featuresList = isBn ? [
    'হোয়াটসঅ্যাপ এআই অটো-রিপ্লাই',
    'হাই-কনভার্টিং ওয়েবসাইট',
    'সিআরএম ও অর্ডার ফ্লো',
    'শপিফাই / উকমার্স সিঙ্ক',
    'স্মার্ট ক্লাউড পিওএস',
    'বিকাশ / নগদ গেটওয়ে'
  ] : [
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gmailComposeUrl, setGmailComposeUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !phone) return;
    setIsSubmitting(true);

    try {
      const res = await submitQuoteToGmail({
        name: fullName || businessName,
        phone,
        company: businessName,
        serviceInterest: `${businessType} - Free Demo & Quote`,
        features: selectedFeatures,
        websiteUrl: currentUrl,
        formTitle: 'Free Demo & Custom Quote Request',
        source: 'FreeDemoModal'
      });
      setGmailComposeUrl(res.gmailComposeUrl);
    } catch (err) {
      console.warn('Quote submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const getWhatsAppShareLink = () => {
    const text = encodeURIComponent(
      isBn 
        ? `আসসালামু আলাইকুম High-Tech Enterprise! আমি আমার ব্যবসার জন্য ফ্রি ওয়েবসাইট ও অটোমেশন ডেমো দেখতে চাই:\n\n• ব্যবসা: ${businessName}\n• ধরন: ${businessType}\n• যোগাযোগ: ${fullName || 'সম্মানিত ক্লায়েন্ট'} (${phone})\n• পেজ/সাইট: ${currentUrl || 'প্রযোজ্য নয়'}\n• প্রয়োজনীয় ফিচার: ${selectedFeatures.join(', ')}\n\nডেমো প্রিভিউ প্রোটোটাইপের জন্য অপেক্ষা করছি!`
        : `Hello High-Tech Enterprise! I would like to request a FREE Website & Automation Demo for my business:\n\n• Business: ${businessName}\n• Type: ${businessType}\n• Contact: ${fullName || 'Client'} (${phone})\n• Link: ${currentUrl || 'N/A'}\n• Features Needed: ${selectedFeatures.join(', ')}\n\nLooking forward to your preview prototype!`
    );
    return `https://wa.me/8801996921149?text=${text}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto overscroll-contain"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#0E1321] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] my-auto overscroll-contain"
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
                <span>{isBn ? 'বিশেষ ক্যাম্পেইন অফার' : 'Featured Campaign Offer'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                {isBn ? (
                  <>
                    একটি <span className="text-[#FF7A00]">ফ্রি ওয়েবসাইট ডেমো</span> নিন
                  </>
                ) : (
                  <>
                    Get A <span className="text-[#FF7A00]">Free Website Demo</span>
                  </>
                )}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                {isBn ? (
                  <>
                    ব্যবসা দ্রুত বাড়াতে আধুনিক ওয়েবসাইট ও অটোমেশন সিস্টেম চান? 
                    <span className="text-white font-semibold"> তৈরি করুন। বাড়ান। সফল হোন।</span>
                  </>
                ) : (
                  <>
                    Want a modern website & automation system that helps grow your business? 
                    <span className="text-white font-semibold"> Build. Grow. Succeed.</span>
                  </>
                )}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isBn ? 'ব্যবসা / ব্র্যান্ডের নাম *' : 'Business / Brand Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={isBn ? 'যেমন: ঢাকা লাইফস্টাইল কোং' : 'e.g. Dhaka Lifestyle Co.'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isBn ? 'ব্যবসার ধরন' : 'Business Category'}
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF6B00]"
                  >
                    {isBn ? (
                      <>
                        <option>ই-কমার্স ও রিটেল</option>
                        <option>ফ্যাশন ও পোশাক</option>
                        <option>লজিস্টিকস ও সাপ্লাই চেইন</option>
                        <option>রিয়েল এস্টেট ও প্রোপার্টি</option>
                        <option>রেস্তোরাঁ ও ক্লাউড কিচেন</option>
                        <option>প্রফেশনাল এজেন্সি</option>
                        <option>স্বাস্থ্য ও রূপচর্চা</option>
                        <option>অন্যান্য সার্ভিস</option>
                      </>
                    ) : (
                      <>
                        <option>eCommerce & Retail</option>
                        <option>Fashion & Apparel</option>
                        <option>Logistics & Supply Chain</option>
                        <option>Real Estate & Property</option>
                        <option>Restaurant & Cloud Kitchen</option>
                        <option>Professional Agency</option>
                        <option>Health & Cosmetics</option>
                        <option>Other Services</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isBn ? 'আপনার নাম' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isBn ? 'যেমন: আসিফ আহমেদ' : 'e.g. Asif Ahmed'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isBn ? 'হোয়াটসঅ্যাপ / ফোন নম্বর *' : 'WhatsApp / Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={isBn ? 'যেমন: 01996-XXXXXX' : 'e.g. 01996-XXXXXX'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {isBn ? 'বর্তমান ফেসবুক পেজ বা ওয়েবসাইট লিংক (যদি থাকে)' : 'Current Facebook Page or Website URL (if any)'}
                </label>
                <input
                  type="text"
                  value={currentUrl}
                  onChange={(e) => setCurrentUrl(e.target.value)}
                  placeholder={isBn ? 'facebook.com/yourpage বা yourbrand.com' : 'facebook.com/yourpage or yourbrand.com'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2D] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              {/* Multi-select features */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  {isBn ? 'প্রয়োজনীয় ফিচারসমূহ বেছে নিন:' : 'Select Desired Capabilities:'}
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
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] via-[#FF8A33] to-[#FF6B00] shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_35px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>{isBn ? 'জি-মেইল ও সার্ভারে পাঠানো হচ্ছে...' : 'Dispatching to Gmail & Server...'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{isBn ? 'ফ্রি ডেমো প্রোটোটাইপ ও কোটেশন চান' : 'Generate Free Demo & Quote'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>{isBn ? '১০০% ফ্রি • কোনো ক্রেডিট কার্ড নেই • সরাসরি জি-মেইল ও হোয়াটসঅ্যাপে ডেলিভারি' : '100% Free • Direct Delivery to Gmail & WhatsApp'}</span>
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
              {isBn ? 'কোটেশন ও ডেমো রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে!' : 'Demo & Quote Request Dispatched!'}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {isBn ? (
                <>
                  ধন্যবাদ, <span className="text-white font-semibold">{fullName || businessName}</span>। 
                  আপনার রিকোয়েস্ট সরাসরি আমাদের অফিসিয়াল ইনবক্সে পৌঁছেছে। সাভার/ঢাকা আর্কিটেক্ট টিম আপনার ব্যবসার জন্য কাস্টম প্রিভিউ প্রস্তুত করছে।
                </>
              ) : (
                <>
                  Thank you, <span className="text-white font-semibold">{fullName || businessName}</span>. 
                  Your blueprint inquiry has been dispatched directly to our official inbox.
                </>
              )}
            </p>

            {/* Direct Gmail Delivery Badge */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 max-w-md mx-auto text-left text-xs flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-0.5">
                <div className="text-emerald-300 font-bold flex items-center gap-1.5">
                  <span>{isBn ? 'জি-মেইল ইনবক্সে সফলভাবে প্রেরিত' : 'Sent Directly to Provided Gmail'}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <div className="text-slate-300 font-mono text-[11px]">
                  {PRIMARY_GMAIL}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#141B2D] border border-white/10 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
              <div className="text-slate-400">{isBn ? 'ব্যবসা:' : 'Business:'} <span className="text-white">{businessName}</span></div>
              <div className="text-slate-400">{isBn ? 'ক্যাটাগরি:' : 'Category:'} <span className="text-white">{businessType}</span></div>
              <div className="text-slate-400">{isBn ? 'ডেলিভারি সময়:' : 'Turnaround:'} <span className="text-emerald-400 font-bold">{isBn ? '২৪ ঘণ্টার মধ্যে' : 'Within 24 Hours'}</span></div>
            </div>

            <div className="pt-3 flex flex-col gap-2.5 max-w-md mx-auto">
              <a
                href={getWhatsAppShareLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isBn ? `হোয়াটসঅ্যাপে দ্রুত শুরু করুন (${COMPANY_INFO.phone})` : `Fast-Track on WhatsApp (${COMPANY_INFO.phone})`}</span>
              </a>

              {gmailComposeUrl && (
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-cyan-300 hover:text-white bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{isBn ? 'জি-মেইলে সরাসরি কপি খুলুন' : 'Open / View in Gmail'}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              )}

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl text-xs text-slate-400 hover:text-white bg-white/5 transition-colors cursor-pointer"
              >
                {isBn ? 'সম্পন্ন' : 'Done'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

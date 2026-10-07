import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Gift, 
  ShieldCheck, 
  Copy, 
  Check, 
  Zap, 
  Download,
  Building2,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { submitQuoteToGmail, PRIMARY_GMAIL } from '../services/quoteService';

interface EmailCollectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted?: (email: string) => void;
  onOpenConsultation?: () => void;
}

export const EmailCollectorModal: React.FC<EmailCollectorModalProps> = ({
  isOpen,
  onClose,
  onSubmitted,
  onOpenConsultation
}) => {
  const [email, setEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].emailCollector;

  // Lock body scroll and handle ESC key
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

  const handleCopyVoucher = () => {
    navigator.clipboard.writeText('HIGHTECH5K');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid business or personal email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitQuoteToGmail({
        name: brandName || email.split('@')[0],
        phone: 'Modal Subscriber',
        email,
        company: brandName || 'Special Voucher Lead',
        serviceInterest: '5,000 BDT Special Campaign Voucher & Blueprint',
        formTitle: 'Modal Voucher Lead & Consultation',
        source: 'EmailCollectorModal'
      });
    } catch (err) {
      console.warn('Modal submit note:', err);
    }

    try {
      localStorage.setItem('ht_email_subscriber', email);
      localStorage.setItem('ht_email_subscriber_timestamp', new Date().toISOString());
    } catch {
      // ignore storage errors
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSubmitted) {
      onSubmitted(email);
    }
  };

  return (
    <div 
      id="email-collector-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-collector-title"
    >
      <div 
        id="email-collector-modal"
        className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 to-[#0A0D14] border border-cyan-500/30 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow Orbs */}
        <div className="absolute -top-24 -left-24 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-52 h-52 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          id="close-email-collector-btn"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSuccess ? (
          <div className="p-6 sm:p-8 flex flex-col relative z-10">
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.badge}</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                100% Free
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 id="email-collector-title" className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              {t.title}
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {t.subtitle}
            </p>

            {/* Perks & Value Stack */}
            <div className="my-5 p-4 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded-md bg-cyan-500/10 text-cyan-400">
                  <Download className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-slate-200">
                  <strong className="text-white font-semibold">2026 Tech & eCommerce Playbook (PDF)</strong>
                  <span className="text-slate-400 block text-[11px]">{language === 'bn' ? 'সরাসরি ইনবক্সে ডাউনলোড লিংক।' : 'Instant download sent straight to your inbox.'}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded-md bg-emerald-500/10 text-emerald-400">
                  <Gift className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-slate-200">
                  <strong className="text-white font-semibold">{t.voucherBenefit}</strong>
                  <span className="text-slate-400 block text-[11px]">{language === 'bn' ? 'যেকোনো ওয়েবসাইট বা হোয়াটসঅ্যাপ বট তৈরিতে প্রযোজ্য।' : 'Applicable for your custom website or WhatsApp bot launch.'}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded-md bg-orange-500/10 text-orange-400">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-slate-200">
                  <strong className="text-white font-semibold">{language === 'bn' ? 'ফ্রি ৪৮ ঘণ্টার লাইভ প্রোটোটাইপ' : 'Free 48-Hour Live Prototype Eligibility'}</strong>
                  <span className="text-slate-400 block text-[11px]">{language === 'bn' ? 'অগ্রিম টাকা ছাড়া কার্যক্ষম লাইভ ডেমো দেখে সিদ্ধান্ত নিন।' : 'Get a working preview before committing any budget.'}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="collector-email" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>{t.emailLabel} <span className="text-cyan-400">*</span></span>
                  <span className="text-[10px] text-slate-400">{t.privacyNotice}</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="collector-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="name@company.com or gmail.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="collector-brand" className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>{t.brandLabel}</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    id="collector-brand"
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Trendy BD, Apex Retail, My Store"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-400 font-medium">{errorMessage}</p>
              )}

              <button
                id="submit-email-collector-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF6B00] via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{t.submitting}</span>
                  </>
                ) : (
                  <>
                    <span>{t.submitBtn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>{t.privacyNotice}</span>
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-[11px] text-slate-400 hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors cursor-pointer"
                >
                  {t.maybeLater}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center relative z-10 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4">
              <CheckCircle2 className="w-9 h-9 text-slate-950 stroke-[2.5]" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
              {t.successBadge}
            </span>

            <h3 className="text-xl font-extrabold text-white tracking-tight">
              {t.successTitle} ({email})
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
              {t.successSubtitle}
            </p>

            {/* Voucher Code Card */}
            <div className="my-6 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">{t.voucherTitle}</span>
                <span className="text-lg font-mono font-extrabold text-cyan-300 tracking-wider">HIGHTECH5K</span>
                <span className="text-[11px] text-emerald-400 block font-medium">{t.voucherBenefit}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyVoucher}
                className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold text-cyan-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copyCode}</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi High-Tech Enterprise, I claimed coupon HIGHTECH5K for email: ${email}. I would like to discuss my project prototype!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>{t.talkWhatsApp}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 px-4 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                {language === 'bn' ? 'ওয়েবসাইট ব্রাউজ করুন' : 'Continue Exploring Website'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

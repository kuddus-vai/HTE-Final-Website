import React, { useState } from 'react';
import { PRICING_DATA, COMPANY_INFO } from '../data/mockData';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface PricingSectionProps {
  onOpenDemoModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemoModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].pricing;
  const [currency, setCurrency] = useState<'BDT' | 'USD'>(() => language === 'bn' ? 'BDT' : 'USD');

  return (
    <section id="pricing" className="py-24 bg-[#0A0D15] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono font-semibold text-[#FF8A33] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            {language === 'bn' ? (
              <>স্বচ্ছ ও সাশ্রয়ী <span className="text-[#FF7A00]">প্যাকেজসমূহ</span></>
            ) : (
              <>Transparent <span className="text-[#FF7A00]">Packages</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {t.subtitle}
          </p>

          {/* Currency Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-xs text-slate-400 font-mono">{language === 'bn' ? 'মুদ্রা:' : 'Currency:'}</span>
            <div className="p-1 rounded-xl bg-[#0E131F] border border-white/10 inline-flex">
              <button
                onClick={() => setCurrency('BDT')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'BDT'
                    ? 'bg-[#FF6B00] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ৳ BDT (বাংলাদেশ)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#FF6B00] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD (International)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_DATA.map((plan) => {
            const price = currency === 'BDT' ? plan.priceBDT : plan.priceUSD;

            const bnPlanData: Record<string, {
              name: string;
              tagline: string;
              period: string;
              features: string[];
              notIncluded?: string[];
              ctaLabel: string;
            }> = {
              'starter': {
                name: 'স্টার্টার অটোমেশন',
                tagline: 'লোকাল শপ ও নতুন ই-কমার্সের জন্য আদর্শ প্যাকেজ',
                period: 'এককালীন সেটআপ',
                features: [
                  'মেটা অফিসিয়াল হোয়াটসঅ্যাপ ক্লাউড এপিআই সেটআপ',
                  'সেরা ৩০টি সাধারণ প্রশ্নের স্বয়ংক্রিয় নির্ভুল উত্তর',
                  'অর্ডার গ্রহণ ও গুগল শিটসে রিয়েল-টাইম এন্ট্রি',
                  'ওয়েলকাম মেসেজ ও অফ-আওয়ার্স ফ্লো',
                  '১টি বিজনেস হোয়াটসঅ্যাপ নম্বর কানেকশন',
                  '১৪ দিন লঞ্চ-পরবর্তী সরাসরি টেকনিক্যাল সাপোর্ট',
                  'মাসিক বেসিক অ্যানালিটিক্স রিপোর্ট'
                ],
                notIncluded: [
                  'মাল্টি-এজেন্ট টিম ইনবক্স',
                  'কাস্টম সিআরএম টু-ওয়ে সিঙ্ক',
                  'কাস্টম নেক্সট.জেএস ওয়েব প্ল্যাটফর্ম'
                ],
                ctaLabel: 'শুরু করুন'
              },
              'growth-pro': {
                name: 'বিজনেস গ্রোথ স্যুট',
                tagline: 'সর্বাধিক জনপ্রিয়: ফুল হোয়াটসঅ্যাপ এআই + সিআরএম + ই-কমার্স',
                period: 'এককালীন সেটআপ',
                features: [
                  'কন্টেক্সট মেমোরি সমৃদ্ধ আধুনিক এআই কনভার্সেশনাল বট',
                  '৭০% কাস্টমার কোয়েরি মানুষের স্পর্শ ছাড়া স্বয়ংক্রিয় সমাধান',
                  'শপিফাই / উকমার্স বা কাস্টম শপের সম্পূর্ণ ক্যাটালগ সিঙ্ক',
                  'হোয়াটসঅ্যাপে স্বয়ংক্রিয় অ্যাবান্ডন্ড কার্ট রিকভারি',
                  'পাঠাও, স্টেডফাস্ট ও রেডএক্স কুরিয়ার এপিআই ইন্টিগ্রেশন',
                  'হাবস্পট / জোহো / কাস্টম সিআরএম টু-ওয়ে সিঙ্ক',
                  'টিমের জন্য মাল্টি-এজেন্ট ড্যাশবোর্ড ও লাইভ চ্যাট হ্যান্ডওভার',
                  'বিকাশ, নগদ ও কার্ড পেমেন্টের স্বয়ংক্রিয় রিমাইন্ডার',
                  '৩০ দিনের প্রায়োরিটি ভিআইপি সাপোর্ট ও স্টাফ ট্রেনিং'
                ],
                ctaLabel: 'গ্রোথ প্যাকেজটি নিন'
              },
              'enterprise-custom': {
                name: 'এন্টারপ্রাইজ ফুল-স্ট্যাক',
                tagline: 'কাস্টম আল্ট্রা-ফাস্ট ওয়েব প্ল্যাটফর্ম ও বিশেষায়িত এআই আর্কিটেকচার',
                period: 'প্রজেক্ট অনুযায়ী নির্ধারিত',
                features: [
                  'নেক্সট.জেএস আল্ট্রা-ফাস্ট হাই-কনভার্টিং কাস্টম ওয়েব প্ল্যাটফর্ম',
                  'বৈজ্ঞানিক কনভার্সন রেট অপ্টিমাইজেশন (সিআরও) ফানেল',
                  'আনলিমিটেড কাস্টম এআই ওয়ার্কফ্লো অটোমেশন ও আরএজি এজেন্ট',
                  'ইআরপি, ক্লাউড পিওএস ও ইনভেন্টরি ডেটাবেস সংযোগ',
                  'জিরো-ট্রাস্ট নেটওয়ার্ক ও এন্ড-টু-এন্ড ডেটা এনক্রিপশন',
                  '৯৯.৯৮% এসএলএ সহ ডেডিকেটেড ক্লাউড সার্ভার ক্লাস্টার',
                  'ত্রৈমাসিক পারফরম্যান্স ও কনভার্সন অডিট',
                  'ডেডিকেটেড টেকনিক্যাল অ্যাকাউন্ট ম্যানেজার'
                ],
                ctaLabel: 'এক্সিকিউটিভ কল বুক করুন'
              }
            };

            const localizedPlan = language === 'bn' && bnPlanData[plan.id] ? bnPlanData[plan.id] : null;
            const planName = localizedPlan ? localizedPlan.name : plan.name;
            const planTagline = localizedPlan ? localizedPlan.tagline : plan.tagline;
            const planPeriod = localizedPlan ? localizedPlan.period : plan.period;
            const planFeatures = localizedPlan ? localizedPlan.features : plan.features;
            const planNotIncluded = localizedPlan ? localizedPlan.notIncluded : plan.notIncluded;
            const planCta = localizedPlan ? localizedPlan.ctaLabel : plan.ctaLabel;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#141C2E] to-[#0E1422] border-2 border-[#FF6B00] shadow-[0_15px_40px_rgba(255,107,0,0.25)] lg:-translate-y-2'
                    : 'bg-[#0E131F] border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg whitespace-nowrap">
                    {language === 'bn' ? '★ সর্বাধিক জনপ্রিয় প্যাকেজ' : '★ Most Popular Choice'}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                      {planName}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {planTagline}
                    </p>
                  </div>

                  <div className="py-4 my-2 border-y border-white/10">
                    <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                      {price}
                    </div>
                    <div className="text-[11px] text-[#FF8A33] font-mono mt-1">
                      {planPeriod}
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 my-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      {language === 'bn' ? 'প্যাকেজে যা যা অন্তর্ভুক্ত:' : "What's Included:"}
                    </div>
                    {planFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}

                    {planNotIncluded && planNotIncluded.length > 0 && (
                      <div className="pt-3 border-t border-white/5 space-y-2">
                        {planNotIncluded.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400 line-through opacity-70">
                            <X className="w-4 h-4 text-rose-400/80 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={onOpenDemoModal}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#FF6B00] hover:bg-[#FF8A33] text-white shadow-[0_0_20px_rgba(255,107,0,0.4)]'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <span>{planCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {language === 'bn' ? 'অথবা হোয়াটসঅ্যাপে কথা বলুন' : 'Or discuss customization on WhatsApp'}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Security & Guarantee note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0E131F]/60 border border-white/10 max-w-3xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-300">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-white font-bold">{language === 'bn' ? '১০০% লঞ্চ গ্যারান্টি:' : '100% Launch Guarantee:'}</span> {language === 'bn'
              ? 'প্রতিটি সিস্টেম হ্যান্ডওভারের আগে নিখুঁতভাবে টেস্ট করা হয়, সাথে আপনার কর্মীদের ট্রেনিং এবং সাভার/ঢাকা ইঞ্জিনিয়ারদের সরাসরি হটলাইন সাপোর্ট প্রদান করা হয়।'
              : 'Every deployment is rigorously tested before handover, including training for your staff and direct engineer hotline access in Savar/Dhaka.'}
          </div>
        </div>

      </div>
    </section>
  );
};

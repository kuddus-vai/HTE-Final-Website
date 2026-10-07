import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TechEcosystem: React.FC = () => {
  const { language } = useLanguage();
  const partners = [
    { name: 'WhatsApp Business Cloud API', tag: language === 'bn' ? 'অফিসিয়াল এপিআই' : 'Official API' },
    { name: 'Shopify', tag: language === 'bn' ? 'ই-কমার্স' : 'eCommerce' },
    { name: 'bKash Merchant API', tag: language === 'bn' ? 'পেমেন্ট গেটওয়ে' : 'Payments' },
    { name: 'Pathao Courier API', tag: language === 'bn' ? 'কুরিয়ার ডেলিভারি' : 'Logistics' },
    { name: 'Steadfast Courier', tag: language === 'bn' ? 'কুরিয়ার ডেলিভারি' : 'Logistics' },
    { name: 'Nagad Gateway', tag: language === 'bn' ? 'পেমেন্ট গেটওয়ে' : 'Payments' },
    { name: 'Next.js 15', tag: language === 'bn' ? 'ওয়েব প্ল্যাটফর্ম' : 'Web Engine' },
    { name: 'WooCommerce', tag: language === 'bn' ? 'ই-কমার্স' : 'eCommerce' },
    { name: 'Meta Graph API', tag: language === 'bn' ? 'সোশ্যাল অ্যাডস' : 'Social Ads' },
    { name: 'SSLCommerz', tag: language === 'bn' ? 'পেমেন্ট গেটওয়ে' : 'Payment Gateway' },
    { name: 'Stripe', tag: language === 'bn' ? 'গ্লোবাল পেমেন্ট' : 'Global Billing' },
    { name: 'Google Sheets & Cloud', tag: language === 'bn' ? 'অর্ডার ডেটা সিঙ্ক' : 'Data Sync' },
    { name: 'OpenAI & Gemini LLMs', tag: language === 'bn' ? 'স্মার্ট এআই' : 'Cognitive AI' },
    { name: 'Supabase & PostgreSQL', tag: language === 'bn' ? 'ক্লাউড ডেটাবেস' : 'Edge DB' }
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-[#0A0D15]/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
          {language === 'bn' 
            ? 'মেটা ক্লাউড এপিআই, বিকাশ, পাঠাও, স্টেডফাস্ট ও নেক্সট.জেএস — ১০০% দেশি ও আন্তর্জাতিক ইন্টিগ্রেশন' 
            : 'Native Nervous System Integrations • Zero Silos'}
        </p>
      </div>

      {/* Smooth Marquee Track */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-4 animate-marquee whitespace-nowrap py-1">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FF6B00]/40 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF6B00]"></div>
              <span className="text-sm font-semibold text-slate-200">{partner.name}</span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

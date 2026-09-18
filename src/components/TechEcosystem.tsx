import React from 'react';

export const TechEcosystem: React.FC = () => {
  const partners = [
    { name: 'WhatsApp Business Cloud API', tag: 'Official API' },
    { name: 'Shopify', tag: 'eCommerce' },
    { name: 'HubSpot', tag: 'CRM' },
    { name: 'Salesforce', tag: 'Enterprise CRM' },
    { name: 'WooCommerce', tag: 'eCommerce' },
    { name: 'Next.js', tag: 'Web Engine' },
    { name: 'Meta Graph API', tag: 'Social Ads' },
    { name: 'bKash Merchant API', tag: 'Payments' },
    { name: 'Nagad Gateway', tag: 'Payments' },
    { name: 'SSLCommerz', tag: 'Payment Gateway' },
    { name: 'Stripe', tag: 'Global Billing' },
    { name: 'Pathao Courier API', tag: 'Logistics' },
    { name: 'Steadfast Courier', tag: 'Logistics' },
    { name: 'Google Sheets & Cloud', tag: 'Data Sync' },
    { name: 'OpenAI & Gemini LLMs', tag: 'Cognitive AI' },
    { name: 'Supabase & PostgreSQL', tag: 'Edge DB' }
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-[#0A0D15]/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
          Native Nervous System Integrations • Zero Silos
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

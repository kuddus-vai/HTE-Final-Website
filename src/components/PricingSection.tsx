import React, { useState } from 'react';
import { PRICING_DATA, COMPANY_INFO } from '../data/mockData';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemoModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemoModal }) => {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');

  return (
    <section id="pricing" className="py-24 bg-[#0A0D15] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono font-semibold text-[#FF8A33] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear, Predictable Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            Transparent <span className="text-[#FF7A00]">Packages</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Zero hidden recurring fees for standard setups. Deploy your autonomous system once and enjoy 24/7 lead conversion.
          </p>

          {/* Currency Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-xs text-slate-400 font-mono">Currency:</span>
            <div className="p-1 rounded-xl bg-[#0E131F] border border-white/10 inline-flex">
              <button
                onClick={() => setCurrency('BDT')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === 'BDT'
                    ? 'bg-[#FF6B00] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ৳ BDT (Bangladesh)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
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
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                    ★ Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="py-4 my-2 border-y border-white/10">
                    <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                      {price}
                    </div>
                    <div className="text-[11px] text-[#FF8A33] font-mono mt-1">
                      {plan.period}
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 my-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      What's Included:
                    </div>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-3 border-t border-white/5 space-y-2">
                        {plan.notIncluded.map((item, i) => (
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
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-[#FF6B00] hover:bg-[#FF8A33] text-white shadow-[0_0_20px_rgba(255,107,0,0.4)]'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    Or discuss customization on WhatsApp
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
            <span className="text-white font-bold">100% Launch Guarantee:</span> Every deployment is rigorously tested before handover, including training for your staff and direct engineer hotline access in Savar/Dhaka.
          </div>
        </div>

      </div>
    </section>
  );
};

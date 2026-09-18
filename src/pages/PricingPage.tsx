import React, { useState } from 'react';
import { PageId } from '../types';
import { PRICING_DATA, COMPANY_INFO } from '../data/mockData';
import { RoiCalculator } from '../components/RoiCalculator';
import { CostBreakdownCalculator } from '../components/CostBreakdownCalculator';
import { 
  Check, 
  X, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Calculator, 
  Clock, 
  DollarSign
} from 'lucide-react';

interface PricingPageProps {
  onOpenDemoModal: () => void;
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenDemoModal, onNavigate }) => {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');

  // Custom Scope Estimator state
  const [selectedModules, setSelectedModules] = useState<{ [key: string]: boolean }>({
    whatsapp: true,
    ecommerce: true,
    courier: true,
    cartRecovery: true,
    crm: false,
    pos: false,
    security: false
  });

  const moduleCatalog = [
    { id: 'whatsapp', label: 'Meta Cloud WhatsApp Conversational Bot', priceBDT: 12000, priceUSD: 105, days: 3 },
    { id: 'ecommerce', label: 'Headless Next.js Storefront (Sub-second)', priceBDT: 20000, priceUSD: 175, days: 5 },
    { id: 'courier', label: 'Courier APIs Integration (Steadfast / Pathao / RedX)', priceBDT: 6000, priceUSD: 55, days: 2 },
    { id: 'cartRecovery', label: 'Automated WhatsApp Abandoned Cart Flow', priceBDT: 5000, priceUSD: 45, days: 1 },
    { id: 'crm', label: 'HubSpot / Zoho / Google Sheets 2-Way CRM Sync', priceBDT: 8000, priceUSD: 70, days: 3 },
    { id: 'pos', label: 'Multi-Branch Offline-First Cloud POS System', priceBDT: 16000, priceUSD: 140, days: 6 },
    { id: 'security', label: 'Enterprise Security Hardening & Zero-Trust Boundary', priceBDT: 10000, priceUSD: 90, days: 3 }
  ];

  const toggleModule = (id: string) => {
    setSelectedModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculatedTotalBDT = moduleCatalog.reduce((sum, mod) => selectedModules[mod.id] ? sum + mod.priceBDT : sum, 0);
  const calculatedTotalUSD = moduleCatalog.reduce((sum, mod) => selectedModules[mod.id] ? sum + mod.priceUSD : sum, 0);
  const calculatedDays = moduleCatalog.reduce((max, mod) => selectedModules[mod.id] ? Math.max(max, mod.days) + 1 : max, 4);

  return (
    <div className="pt-8 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header & Currency Switcher */}
      <div className="text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>TRANSPARENT VALUE-BASED PACKAGES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
          Invest in Systems That Pay for Themselves
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          No hidden fees or unexpected maintenance lock-ins. You receive complete ownership of your infrastructure, source code, and deployment accounts.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0F1626] border border-white/10 shadow-lg mt-2">
          <button
            onClick={() => setCurrency('BDT')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              currency === 'BDT' ? 'bg-[#FF6B00] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Bangladeshi Taka (৳ BDT)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              currency === 'USD' ? 'bg-[#FF6B00] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            US Dollar ($ USD)
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_DATA.map((plan) => {
          const isPopular = plan.popular;
          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                isPopular
                  ? 'bg-gradient-to-b from-[#131B2E] via-[#0E1526] to-[#0A0E1A] border-2 border-[#FF6B00] shadow-[0_15px_50px_rgba(255,107,0,0.25)] scale-100 lg:-translate-y-2'
                  : 'bg-[#0B0F19] border border-white/10 hover:border-white/20'
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF6B00] text-white text-[11px] font-bold font-mono tracking-wider shadow-lg">
                  MOST POPULAR PACKAGE
                </div>
              )}

              <div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white font-['Outfit',sans-serif]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 min-h-[32px]">
                    {plan.tagline}
                  </p>
                </div>

                <div className="my-6 pt-4 border-t border-white/10">
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                    {currency === 'BDT' ? plan.priceBDT : plan.priceUSD}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {plan.period} • No recurring platform cut
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <div className="text-[11px] font-mono text-[#FFA149] uppercase tracking-wider font-semibold">
                    Included Features:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-3 border-t border-white/5 space-y-2">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Not in this tier:
                      </div>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((notFeat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                            <X className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                            <span>{notFeat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={onOpenDemoModal}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-[#FF6B00] hover:bg-[#E55A00] text-white shadow-lg'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{plan.ctaLabel}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comprehensive Total Cost of Ownership (TCO) & Cost Breakdown Segment */}
      <CostBreakdownCalculator 
        initialCurrency={currency} 
        onOpenDemoModal={onOpenDemoModal} 
      />

      {/* Interactive Custom Project Scope & Cost Estimator */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0C101C] border border-white/15 shadow-2xl space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00]">
            <Calculator className="w-4 h-4" />
            <span>CUSTOM SCOPE ESTIMATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
            Configure Your Custom System Specification
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Select the exact building blocks required for your workflow to calculate an immediate ballpark investment and estimated launch timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Checkboxes List */}
          <div className="lg:col-span-7 space-y-3">
            {moduleCatalog.map((mod) => {
              const isChecked = selectedModules[mod.id];
              return (
                <div
                  key={mod.id}
                  onClick={() => toggleModule(mod.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 select-none ${
                    isChecked
                      ? 'bg-[#12192B] border-[#FF6B00]/60 text-white'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${
                      isChecked ? 'bg-[#FF6B00] text-white' : 'border border-white/20'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{mod.label}</span>
                  </div>

                  <div className="text-xs font-mono font-bold text-slate-200 shrink-0">
                    {currency === 'BDT' ? `+৳ ${mod.priceBDT.toLocaleString()}` : `+$ ${mod.priceUSD}`}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-time Summary Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#101626] border border-white/10 space-y-6">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Estimated Project Summary:
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-slate-400">Total Estimated Investment</div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-white mt-1">
                  {currency === 'BDT' ? `৳ ${calculatedTotalBDT.toLocaleString()}` : `$ ${calculatedTotalUSD.toLocaleString()}`}
                </div>
                <div className="text-[11px] text-emerald-400 mt-1">
                  One-time turnkey setup • Includes 30 days priority technical support
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF7A00]" />
                  <span>Estimated Deployment Time:</span>
                </span>
                <span className="font-mono font-bold text-white">~{calculatedDays} Business Days</span>
              </div>
            </div>

            <button
              onClick={onOpenDemoModal}
              className="w-full py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55A00] text-white font-bold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lock In This Configuration</span>
            </button>
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
      <RoiCalculator />

      {/* SLA & Guarantee Commitments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base font-['Outfit',sans-serif]">100% Launch Guarantee</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            If your automated WhatsApp bot or web system does not resolve customer queries on day 1, our engineers work without pause until it does.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base font-['Outfit',sans-serif]">99.98% SLA Availability</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Serverless and edge-replicated architecture ensures your store and automated bots remain operational during major holiday campaigns.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base font-['Outfit',sans-serif]">Zero Hidden Revenue Cuts</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Unlike third-party SaaS tools that take 2%–5% of your checkout GMV, all sales go 100% directly to your merchant account.
          </p>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/mockData';
import { 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Smartphone, 
  ShoppingCart, 
  Layers, 
  Cpu,
  Zap,
  ExternalLink
} from 'lucide-react';

import { PageId } from '../types';

interface ProductsShowcaseProps {
  onOpenDemoModal: () => void;
  onScrollToSimulator?: () => void;
  onNavigate?: (page: PageId) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ 
  onOpenDemoModal, 
  onScrollToSimulator,
  onNavigate 
}) => {
  const [activeProductId, setActiveProductId] = useState<string>(PRODUCTS_DATA[0].id);

  const activeProduct = PRODUCTS_DATA.find(p => p.id === activeProductId) || PRODUCTS_DATA[0];

  const productIcons: Record<string, React.ReactNode> = {
    flowpulse: <Smartphone className="w-5 h-5" />,
    shopflow: <ShoppingCart className="w-5 h-5" />,
    smartpos: <Layers className="w-5 h-5" />,
    workflowai: <Cpu className="w-5 h-5" />
  };

  return (
    <section id="products" className="py-24 bg-[#0A0E17] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono font-semibold text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Software Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            Engineered Software & <span className="text-[#FF7A00]">SaaS Platforms</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Turnkey enterprise suites ready to deploy within days, fully tailored for your Bangladeshi or global operations.
          </p>
        </div>

        {/* Product Selection Tab Bar */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 no-scrollbar">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0E1422] border border-white/10 shadow-lg">
            {PRODUCTS_DATA.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setActiveProductId(prod.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeProductId === prod.id
                    ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white shadow-[0_4px_20px_rgba(255,107,0,0.35)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {productIcons[prod.id]}
                <span>{prod.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Product Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-[#0D1220] border border-white/10 shadow-2xl">
          
          {/* Left 6 cols: Description and highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF6B00]/15 text-[#FFA149] border border-[#FF6B00]/30">
              {activeProduct.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit',sans-serif] leading-tight">
              {activeProduct.headline}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Highlights list */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
                Key Architectural Capabilities
              </div>
              {activeProduct.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00]/20 text-[#FF7A00] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Integrations bar */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400 mb-2">Native Integrations:</div>
              <div className="flex flex-wrap gap-2">
                {activeProduct.integrations.map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={activeProduct.previewType === 'whatsapp' ? onScrollToSimulator : onOpenDemoModal}
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#FF6B00] hover:bg-[#FF8A33] shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all flex items-center gap-2"
              >
                <span>{activeProduct.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Request Deployment Quote
              </button>
            </div>
          </div>

          {/* Right 6 cols: High-Fidelity Interactive Preview Mockup */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-[#080B12] border border-white/10 shadow-inner">
              
              {/* Mockup Title bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="font-bold text-white">{activeProduct.name} Control Surface</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Status: Operational
                </span>
              </div>

              {/* Dynamic UI Content based on selected product */}
              {activeProduct.previewType === 'whatsapp' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400 font-mono">Today's Queries</div>
                      <div className="text-xl font-black text-white font-mono mt-1">1,842</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">↑ 74% Automated</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400 font-mono">Avg Speed</div>
                      <div className="text-xl font-black text-[#FF8A33] font-mono mt-1">1.8s</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Zero customer queue</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F1728] border border-white/10 space-y-2">
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Live Multi-Agent Routing</span>
                      <span className="text-[10px] text-emerald-400">4 Agents Online</span>
                    </div>
                    <div className="text-xs text-slate-300">
                      AI handles 1st tier questions. Triggers live agent notifications only when complex negotiation or custom wholesale inquiry is detected.
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Meta Cloud API: 99.99% Guaranteed Delivery SLA</span>
                  </div>
                </div>
              )}

              {activeProduct.previewType === 'ecommerce' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400 font-mono">Mobile Speed Score</div>
                      <div className="text-xl font-black text-emerald-400 font-mono mt-1">98 / 100</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Google Core Web Vitals</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400 font-mono">Cart Recovery</div>
                      <div className="text-xl font-black text-[#FF8A33] font-mono mt-1">+28.4%</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Automated WhatsApp ping</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F1728] border border-white/10 space-y-2 text-xs">
                    <div className="font-bold text-white">Full Local Courier Ecosystem</div>
                    <div className="text-slate-300">
                      Direct integration with Pathao Courier & Steadfast API. Customers receive tracking URL directly on WhatsApp with delivery updates.
                    </div>
                  </div>
                </div>
              )}

              {activeProduct.previewType === 'pos' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400">Offline Mode</div>
                      <div className="text-sm font-bold text-emerald-400 mt-1">100% Ready</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400">Barcode Scan</div>
                      <div className="text-sm font-bold text-white mt-1">&lt; 0.1s</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400">Branches</div>
                      <div className="text-sm font-bold text-[#FF8A33] mt-1">Unlimited</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F1728] border border-white/10 text-xs text-slate-300 space-y-1.5">
                    <div className="font-bold text-white">Dual Receipt Delivery:</div>
                    <div>1. Instant thermal slip printing for in-store customers</div>
                    <div>2. Paperless digital receipt auto-sent to buyer's WhatsApp with promo code</div>
                  </div>
                </div>
              )}

              {activeProduct.previewType === 'workflow' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#0F1728] border border-white/10 space-y-2 text-xs">
                    <div className="font-bold text-white flex items-center justify-between">
                      <span>Daily Morning Briefing</span>
                      <span className="text-[10px] font-mono text-[#FF8A33]">08:30 AM Auto-Send</span>
                    </div>
                    <div className="text-slate-300">
                      Aggregates yesterday's sales, pending courier deliveries, high-value inquiries, and sends an executive summary to company management on WhatsApp.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Average Staff Hours Saved:</span>
                    <span className="font-bold font-mono text-emerald-400">18.5 hrs / week</span>
                  </div>
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Architecture: Hardened 2026 Stack</span>
                <span className="text-[#FF8A33] font-semibold">High-Tech Enterprise BD</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PageId, LiveDemoItem } from '../types';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/mockData';
import { LIVE_DEMOS_DATA } from '../data/liveDemos';
import { 
  Sparkles, 
  Play, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquareCode, 
  ShoppingCart, 
  Layers, 
  Workflow, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Terminal,
  Cpu
} from 'lucide-react';

interface ProductsPageProps {
  onOpenDemoModal: () => void;
  onNavigate: (page: PageId) => void;
  onLaunchLiveDemo: (demo: LiveDemoItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onOpenDemoModal, 
  onNavigate, 
  onLaunchLiveDemo 
}) => {
  const [activeTab, setActiveTab] = useState<string>('flowpulse');

  // Find demo corresponding to product if available
  const getProductDemo = (productId: string): LiveDemoItem => {
    switch (productId) {
      case 'flowpulse':
        return LIVE_DEMOS_DATA.find(d => d.id === 'demo-flowpulse-whatsapp') || LIVE_DEMOS_DATA[0];
      case 'shopflow':
        return LIVE_DEMOS_DATA.find(d => d.id === 'demo-shopflow-ecommerce') || LIVE_DEMOS_DATA[1];
      case 'smartpos':
        return LIVE_DEMOS_DATA.find(d => d.id === 'demo-smartpos-cloud') || LIVE_DEMOS_DATA[2];
      default:
        return LIVE_DEMOS_DATA.find(d => d.id === 'demo-workflowai-optimizer') || LIVE_DEMOS_DATA[3];
    }
  };

  return (
    <div className="pt-8 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>PROPRIETARY SAAS & AUTOMATION ENGINES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
          Turnkey Platforms Built for Dominance
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Tested across millions of customer interactions and hundreds of thousands in monthly GMV. Every platform is deployed with 24/7 reliability and custom tailored for your business model.
        </p>
      </div>

      {/* Product Showcase Cards */}
      <div className="space-y-16">
        {PRODUCTS_DATA.map((prod, idx) => {
          const matchedDemo = getProductDemo(prod.id);
          const isReversed = idx % 2 === 1;

          return (
            <div 
              key={prod.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#0C101C] border border-white/15 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Information Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FFA149] border border-[#FF6B00]/30">
                      {prod.badge}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Demo Ready
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif]">
                      {prod.name}
                    </h2>
                    <p className="text-lg font-semibold text-[#FFA149] mt-1">
                      {prod.headline}
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Key Architectural Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {prod.highlights.map((high, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Native Integrations Tags */}
                  <div className="pt-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Connected APIs & Stacks:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prod.integrations.map((tag) => (
                        <span key={tag} className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onLaunchLiveDemo(matchedDemo)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 hover:opacity-95 transition-opacity"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Test {prod.name} Live Demo</span>
                    </button>

                    <button
                      onClick={onOpenDemoModal}
                      className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>Deploy for My Brand</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Visual / Mockup Preview Column */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-[#080B13] border border-white/10 space-y-4 shadow-inner">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/10">
                      <span className="flex items-center gap-1.5 text-white font-semibold">
                        <Terminal className="w-3.5 h-3.5 text-[#FF7A00]" />
                        <span>Interactive Sandbox Preview</span>
                      </span>
                      <span className="text-[10px] text-emerald-400">99.98% SLA</span>
                    </div>

                    {/* Interactive Mock Card */}
                    <div className="p-4 rounded-xl bg-[#111726] border border-white/10 space-y-3">
                      <div className="text-xs font-semibold text-white flex items-center justify-between">
                        <span>Production Metric Benchmark:</span>
                        <span className="text-emerald-400 font-mono text-[11px]">{matchedDemo.metrics.split('•')[0]}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-black/40 text-xs font-mono text-slate-300 space-y-1 border border-white/5">
                        <div className="text-slate-400">// Destination URL configuration</div>
                        <div className="text-[#FFA149] truncate">const url = "{matchedDemo.liveDemoUrl}";</div>
                        <div className="text-emerald-400">// Status: Ready for instant client integration</div>
                      </div>
                      
                      <button
                        onClick={() => onLaunchLiveDemo(matchedDemo)}
                        className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-[#FF6B00] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Click to Open Interactive Simulator</span>
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400 text-center">
                      Need custom modifications? We engineer bespoke integrations for enterprise teams.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F1626] to-[#080B13] border border-white/15 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
          Want to test all these platforms on your phone or laptop?
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Visit our Live Demos Hub to browse all real-world client prototypes, or schedule a 1-on-1 walkthrough with our senior engineers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('demos')}
            className="px-6 py-3 rounded-xl bg-[#FF6B00] text-white text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 hover:bg-[#E55A00] transition-colors"
          >
            <span>Open All Live Demos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
          >
            Get Free Demo For My Brand
          </button>
        </div>
      </div>

    </div>
  );
};

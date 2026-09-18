import React from 'react';
import { Hero } from '../components/Hero';
import { TechEcosystem } from '../components/TechEcosystem';
import { WhatsAppSimulator } from '../components/WhatsAppSimulator';
import { ServicesSection } from '../components/ServicesSection';
import { ProductsShowcase } from '../components/ProductsShowcase';
import { RoiCalculator } from '../components/RoiCalculator';
import { PricingSection } from '../components/PricingSection';
import { Testimonials } from '../components/Testimonials';
import { OfficesMap } from '../components/OfficesMap';
import { FaqSection } from '../components/FaqSection';
import { PageId, LiveDemoItem } from '../types';
import { LIVE_DEMOS_DATA } from '../data/liveDemos';
import { COMPANY_INFO } from '../data/mockData';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Play, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  MessageSquareCode,
  Layers,
  Award
} from 'lucide-react';

interface HomePageProps {
  onOpenDemoModal: () => void;
  onNavigate: (page: PageId) => void;
  onLaunchLiveDemo: (demo: LiveDemoItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onOpenDemoModal, 
  onNavigate, 
  onLaunchLiveDemo 
}) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Hero Flagship Section */}
      <Hero 
        onOpenDemoModal={onOpenDemoModal} 
        onNavigate={onNavigate} 
      />

      {/* 2. Interactive WhatsApp Bot Simulator */}
      <section id="simulator" className="relative scroll-mt-24">
        <WhatsAppSimulator />
      </section>

      {/* 3. Tech Ecosystem & High-Tech Core Pillars */}
      <TechEcosystem />

      {/* 4. Core Engineering Services Showcase */}
      <ServicesSection onOpenDemoModal={onOpenDemoModal} />

      {/* 5. Featured Live Demos Strip */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F1626] to-[#090D17] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono mb-3">
                <Play className="w-3 h-3 fill-current" />
                <span>INTERACTIVE LIVE DEMOS AVAILABLE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit',sans-serif]">
                Experience Our Systems Live in Action
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                Don't take our word for it. Test our WhatsApp conversational bots, sub-second eCommerce stores, and cloud point-of-sale systems right now.
              </p>
            </div>

            <button
              onClick={() => onNavigate('demos')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all group shrink-0"
            >
              <span>Explore All 8+ Live Demos</span>
              <ArrowRight className="w-4 h-4 text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick 3 Featured Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {LIVE_DEMOS_DATA.slice(0, 3).map((demo) => (
              <div 
                key={demo.id}
                className="rounded-2xl bg-[#0B0F19] border border-white/10 p-5 flex flex-col justify-between hover:border-[#FF6B00]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF6B00]/15 text-[#FFA149] border border-[#FF6B00]/30">
                      {demo.badge}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Demo Ready
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFA149] transition-colors font-['Outfit',sans-serif]">
                    {demo.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs mt-2 line-clamp-2">
                    {demo.summary}
                  </p>
                  
                  <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-300 font-medium">
                    ⚡ {demo.metrics}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onLaunchLiveDemo(demo)}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#FF6B00] hover:bg-[#E55A00] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Launch Live Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Flagship SaaS & Automation Products */}
      <ProductsShowcase onOpenDemoModal={onOpenDemoModal} />

      {/* 7. Interactive ROI Savings Calculator */}
      <RoiCalculator />

      {/* 8. Verified Testimonials & 100% Facebook Recommendation */}
      <Testimonials />

      {/* 9. Transparent Packages & Pricing */}
      <PricingSection onOpenDemoModal={onOpenDemoModal} />

      {/* 10. Global Offices & Savar/Dhaka HQ */}
      <OfficesMap />

      {/* 11. FAQ Knowledge Base */}
      <FaqSection onOpenDemoModal={onOpenDemoModal} />

      {/* 12. Bottom High-Converting Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-[#FF6B00] via-[#FF8A33] to-[#FF4500] shadow-[0_20px_60px_rgba(255,107,0,0.35)] text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-white text-xs font-mono mb-4 backdrop-blur-md">
              <Award className="w-3.5 h-3.5" />
              <span>SAVAR, DHAKA HEADQUARTERS • 100% FACEBOOK RECOMMENDATION</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit',sans-serif] tracking-tight">
              Ready to automate 70% of your business queries?
            </h2>
            
            <p className="text-white/90 text-sm sm:text-lg mt-4 max-w-2xl leading-relaxed font-normal">
              Get a live interactive demo prototype of your brand's automated WhatsApp bot and high-performance website within 48 hours—completely free before you make any decision.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDemoModal}
                className="px-8 py-4 rounded-xl bg-black text-white font-bold text-sm sm:text-base hover:bg-neutral-900 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-[#FF7A00]" />
                <span>Claim Free Demo Website</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/30 transition-all flex items-center gap-2"
              >
                <span>Direct WhatsApp: {COMPANY_INFO.phone}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { PageId, LiveDemoItem } from '../types';
import { LIVE_DEMOS_DATA } from '../data/liveDemos';
import { COMPANY_INFO } from '../data/mockData';
import { 
  Play, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  MessageSquareCode, 
  ShoppingCart, 
  Monitor, 
  Smartphone, 
  Check, 
  Copy,
  Zap,
  Filter
} from 'lucide-react';

interface PortfolioPageProps {
  onOpenDemoModal: () => void;
  onNavigate: (page: PageId) => void;
  onLaunchLiveDemo: (demo: LiveDemoItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenDemoModal,
  onNavigate,
  onLaunchLiveDemo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Live Demos', count: LIVE_DEMOS_DATA.length },
    { id: 'whatsapp', label: 'WhatsApp Bots & AI', count: LIVE_DEMOS_DATA.filter(d => d.category === 'whatsapp').length },
    { id: 'ecommerce', label: 'eCommerce Stores', count: LIVE_DEMOS_DATA.filter(d => d.category === 'ecommerce').length },
    { id: 'saas', label: 'SaaS & Workflows', count: LIVE_DEMOS_DATA.filter(d => d.category === 'saas').length },
    { id: 'pos', label: 'Point of Sale (POS)', count: LIVE_DEMOS_DATA.filter(d => d.category === 'pos').length },
    { id: 'corporate', label: 'Corporate & Real Estate', count: LIVE_DEMOS_DATA.filter(d => d.category === 'corporate').length },
  ];

  const filteredDemos = selectedCategory === 'all'
    ? LIVE_DEMOS_DATA
    : LIVE_DEMOS_DATA.filter(d => d.category === selectedCategory);

  const handleCopyLink = (demo: LiveDemoItem, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(demo.liveDemoUrl);
    setCopiedId(demo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-8 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>INTERACTIVE LIVE DEMO & PORTFOLIO HUB</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
          Test Our Autonomous Systems in Action
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Explore our real-world client deployments and live interactive demo sandboxes. Launch live prototypes in our simulated device viewer or open external demo links.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/25'
                  : 'bg-[#0E1424] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-black/20 text-white' : 'bg-white/10 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Live Demos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDemos.map((demo) => (
          <div
            key={demo.id}
            className="rounded-3xl bg-[#0C101C] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#FF6B00]/50 transition-all group shadow-xl hover:-translate-y-1 duration-300"
          >
            {/* Visual Thumbnail & Badges */}
            <div className="relative aspect-video overflow-hidden bg-slate-900">
              {demo.previewImageUrl ? (
                <img
                  src={demo.previewImageUrl}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#101726] to-[#080B13] text-slate-500">
                  <Play className="w-12 h-12 opacity-30" />
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C101C] via-transparent to-black/40"></div>

              {/* Badges on preview */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFA149] border border-white/20">
                  {demo.badge}
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Demo
                </span>
              </div>

              {/* Quick Launch Overlay Button */}
              <button
                onClick={() => onLaunchLiveDemo(demo)}
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#FF6B00] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-2xl"
                aria-label={`Play demo for ${demo.title}`}
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs text-slate-400 mb-1">
                  Industry: <span className="text-slate-200 font-medium">{demo.industry}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFA149] transition-colors font-['Outfit',sans-serif] leading-snug">
                  {demo.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {demo.summary}
                </p>

                {/* Key Metrics Highlight */}
                <div className="mt-3 p-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] text-[#FFA149] font-medium flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span className="truncate">{demo.metrics}</span>
                </div>

                {/* Case Study Bullets */}
                <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400">
                  {demo.caseStudyHighlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {demo.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onLaunchLiveDemo(demo)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#FF6B00] hover:bg-[#E55A00] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Live Demo</span>
                  </button>

                  <button
                    onClick={(e) => handleCopyLink(demo, e)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Copy Live Demo URL"
                  >
                    {copiedId === demo.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={demo.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-[10px] font-mono text-slate-400 truncate text-center">
                  Destination: <span className="text-slate-300">{demo.liveDemoUrl}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Free Custom Demo Offer Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0F1626] via-[#141E34] to-[#0A0E17] border border-white/15 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVE RISK-FREE OFFER</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
            Want a Custom Working Demo for Your Exact Brand?
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We will engineer a functional interactive prototype of your business's WhatsApp AI bot or high-performance website within 48 hours—completely free before you pay a single Taka or Dollar.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDemoModal}
              className="px-6 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55A00] text-white text-xs sm:text-sm font-bold transition-all shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Claim Free Website & Bot Prototype</span>
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
            >
              Ask on WhatsApp: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

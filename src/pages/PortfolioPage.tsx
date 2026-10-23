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
  Globe,
  Shield,
  Zap,
  Check, 
  Copy,
  Smartphone,
  Bot,
  Layers,
  ArrowUpRight,
  Star,
  Building2
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
  const [spotlightTab, setSpotlightTab] = useState<'urban-beast' | 'optimum'>('urban-beast');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Systems', count: LIVE_DEMOS_DATA.length },
    { id: 'websites', label: 'Live Client Websites', count: LIVE_DEMOS_DATA.filter(d => d.category === 'websites').length },
    { id: 'intelligence', label: 'Cyber-Threat & Intelligence', count: LIVE_DEMOS_DATA.filter(d => d.category === 'intelligence').length },
    { id: 'whatsapp', label: 'WhatsApp AI Bots', count: LIVE_DEMOS_DATA.filter(d => d.category === 'whatsapp').length },
    { id: 'software', label: 'Enterprise & POS Software', count: LIVE_DEMOS_DATA.filter(d => d.category === 'software').length },
  ];

  const featuredUrbanBeast = LIVE_DEMOS_DATA.find(d => d.id === 'demo-urban-beast-bd') || LIVE_DEMOS_DATA[4] || LIVE_DEMOS_DATA[0];
  const featuredOptimum = LIVE_DEMOS_DATA.find(d => d.id === 'demo-optimum-power') || LIVE_DEMOS_DATA[1];
  const websiteDemos = LIVE_DEMOS_DATA.filter(d => d.category === 'websites');
  const intelligenceDemo = LIVE_DEMOS_DATA.find(d => d.category === 'intelligence') || LIVE_DEMOS_DATA[0];
  const automationDemos = LIVE_DEMOS_DATA.filter(d => d.category === 'whatsapp' || d.category === 'software');

  const filteredDemos = selectedCategory === 'all'
    ? LIVE_DEMOS_DATA
    : LIVE_DEMOS_DATA.filter(d => d.category === selectedCategory);

  const handleCopyLink = (demo: LiveDemoItem, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(demo.liveDemoUrl);
    setCopiedId(demo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderCard = (demo: LiveDemoItem, isProductionWebsite = false) => {
    const isUrbanBeast = demo.id === 'demo-urban-beast-bd';
    const isFeatured = demo.id === 'demo-optimum-power' || isUrbanBeast;
    const isAumecho = demo.id === 'demo-aumecho-sanctuary';

    return (
      <div
        key={demo.id}
        className={`rounded-2xl bg-[#0C101C] overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-lg hover:-translate-y-1 ${
          isUrbanBeast
            ? 'border-2 border-amber-500/70 ring-1 ring-amber-500/25 shadow-amber-500/10'
            : isFeatured 
            ? 'border-2 border-[#FF7A00]/70 ring-1 ring-[#FF7A00]/25 shadow-[#FF7A00]/10' 
            : isAumecho
            ? 'border-2 border-rose-500/60 ring-1 ring-rose-500/20 hover:border-rose-400 shadow-rose-500/10'
            : 'border border-white/10 hover:border-[#FF6B00]/40'
        }`}
      >
        {/* Visual Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          {demo.previewImageUrl ? (
            <img
              src={demo.previewImageUrl}
              alt={demo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#101726] text-slate-500">
              <Play className="w-10 h-10 opacity-30" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0C101C] via-transparent to-black/50"></div>

          {/* Top Status Pill */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            {isUrbanBeast ? (
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-950/90 text-amber-300 border border-amber-500/50 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <Star className="w-3 h-3 text-amber-400 fill-current" />
                <span>Featured Live eCommerce</span>
              </span>
            ) : isFeatured ? (
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FF7A00]/25 text-[#FFB370] border border-[#FF7A00]/60 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <Star className="w-3 h-3 text-[#FF7A00] fill-current" />
                <span>Featured Client Project</span>
              </span>
            ) : isAumecho ? (
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-rose-950/90 text-rose-300 border border-rose-500/60 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                <span>★ YouTube Channel Website</span>
              </span>
            ) : isProductionWebsite ? (
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Production Site</span>
              </span>
            ) : demo.category === 'intelligence' ? (
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Threat Telemetry</span>
              </span>
            ) : (
              <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#FF6B00]/20 text-[#FFA149] border border-[#FF6B00]/40 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
                <span>Interactive Sandbox</span>
              </span>
            )}

            <span className="text-[10px] font-mono text-slate-300 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
              {demo.industry}
            </span>
          </div>

          {/* Center Play Button Overlay */}
          <button
            onClick={() => onLaunchLiveDemo(demo)}
            className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#FF6B00] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-2xl z-10"
            aria-label={`Launch simulator for ${demo.title}`}
          >
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            <div className="flex items-baseline justify-between gap-2">
              <span className={`text-xs font-mono font-semibold flex items-center gap-1 ${isAumecho ? 'text-rose-400' : 'text-[#FFA149]'}`}>
                {isFeatured && <Star className="w-3 h-3 fill-current text-[#FF7A00]" />}
                {isAumecho && <span className="text-rose-500">▶</span>}
                <span>{demo.clientName}</span>
              </span>
            </div>

            <h3 className="text-base font-bold text-white group-hover:text-[#FFA149] transition-colors leading-snug font-['Outfit',sans-serif]">
              {demo.title}
            </h3>

            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
              {demo.summary}
            </p>

            {/* Performance metric badge */}
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#FFA149] font-medium flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
              <span className="truncate">{demo.metrics}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {demo.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={() => onLaunchLiveDemo(demo)}
              className="flex-1 py-2 px-3 rounded-xl bg-[#FF6B00] hover:bg-[#E55A00] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Simulator</span>
            </button>

            {isProductionWebsite && (
              <a
                href={demo.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-colors flex items-center gap-1"
                title="Open live website in new tab"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={(e) => handleCopyLink(demo, e)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
              title="Copy URL"
            >
              {copiedId === demo.id ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="pt-8 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>PRODUCTION PORTFOLIO & INTERACTIVE LABS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
          Test Our Autonomous Systems & Live Deployments
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Explore our {websiteDemos.length} live client websites running in production, 24/7 Enterprise Cyber-Threat & Intelligence dashboard, and interactive automation sandboxes.
        </p>

        {/* Live Metrics Ticker Bar */}
        <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
          <div className="p-3 rounded-xl bg-[#0E1424] border border-white/10">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Featured Flagships</div>
            <div className="text-base sm:text-lg font-mono font-bold text-[#FFA149]">Urban Beast & Optimum</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0E1424] border border-white/10">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Live Client Deployments</div>
            <div className="text-lg font-mono font-bold text-emerald-400">{websiteDemos.length} Active Sites</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0E1424] border border-white/10">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Interactive Sandboxes</div>
            <div className="text-lg font-mono font-bold text-cyan-400">4 Simulators</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0E1424] border border-white/10">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Infrastructure Telemetry</div>
            <div className="text-lg font-mono font-bold text-white">99.98% Monitored</div>
          </div>
        </div>
      </div>

      {/* Featured Flagship Spotlight Section with Dual Tabs */}
      <div className="space-y-3">
        {/* Spotlight Selector Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-2 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Spotlight Flagship:</span>
            <div className="inline-flex p-1 rounded-xl bg-[#0B101D] border border-white/10">
              <button
                onClick={() => setSpotlightTab('urban-beast')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  spotlightTab === 'urban-beast'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🔥 Urban Beast BD</span>
                <span className="text-[10px] font-mono opacity-80">eCommerce Flagship</span>
              </button>
              <button
                onClick={() => setSpotlightTab('optimum')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  spotlightTab === 'optimum'
                    ? 'bg-[#FF6B00] text-white font-bold shadow-md shadow-[#FF6B00]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇧🇩 Optimum Power (BD)</span>
                <span className="text-[10px] font-mono opacity-80">Substations</span>
              </button>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 hidden sm:block">
            {spotlightTab === 'urban-beast' ? 'ShopFlow™ Streetwear Apparel & Drop Commerce' : 'Dhaka 1217 • Heavy Power Grid'}
          </div>
        </div>

        {/* Urban Beast BD Spotlight Banner */}
        {spotlightTab === 'urban-beast' ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#140D04] via-[#1F1407] to-[#0A0703] border-2 border-amber-500/60 relative overflow-hidden shadow-2xl shadow-amber-500/10 transition-all duration-300">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3.5 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-950/90 text-amber-300 border border-amber-500/60 flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    <span>★ FEATURED LIVE ECOMMERCE CLIENT PROJECT</span>
                  </span>
                  <span className="text-xs font-mono text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>Live in Production • Streetwear Apparel</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-0.5 rounded border border-white/10 hidden sm:inline-block">
                    ShopFlow™ High-Conversion
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
                    Urban Beast BD — Streetwear Flagship
                  </h2>
                  <p className="text-xs font-mono text-amber-400 mt-0.5">
                    Modern Direct-To-Consumer Apparel Commerce, Dynamic Lookbooks & Automated Logistics
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Modern direct-to-consumer apparel commerce platform with high-converting lookbooks, instant bKash checkout, and automated Steadfast/Pathao courier delivery. Engineered with 0.68s First Contentful Paint, mobile-first 60fps interaction speed, and unified multi-branch inventory tracking.
                </p>

                {/* Highlight Metric Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                  <span className="px-3 py-1 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>0.68s First Contentful Paint</span>
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400 flex items-center gap-1.5">
                    <span>⚡</span>
                    <span>+34% Conversion Gain</span>
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-amber-400" />
                    <span>Steadfast & Pathao 2-Way Sync</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 pt-1">
                  <span>Production Domain:</span>
                  <a 
                    href="https://kuddus-vai.github.io/Urban-Beast-BD-/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline text-white hover:text-amber-300 flex items-center gap-1 font-semibold"
                  >
                    <span>https://kuddus-vai.github.io/Urban-Beast-BD-/</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 min-w-[240px]">
                <a
                  href="https://kuddus-vai.github.io/Urban-Beast-BD-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/30 transition-all"
                >
                  <span>Visit Urban Beast BD</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => onLaunchLiveDemo(featuredUrbanBeast)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/15 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>Launch in Device Simulator</span>
                </button>
                <button
                  onClick={(e) => handleCopyLink(featuredUrbanBeast, e)}
                  className="px-5 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 border border-white/10 transition-colors"
                >
                  {copiedId === featuredUrbanBeast.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400">Live URL Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Project URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Optimum Power Engineering Spotlight Banner */
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0C1424] via-[#101C34] to-[#0A0E18] border-2 border-[#FF7A00]/50 relative overflow-hidden shadow-2xl shadow-[#FF7A00]/10 transition-all duration-300">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3.5 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FF7A00]/25 text-[#FFB370] border border-[#FF7A00]/60 flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-[#FF7A00] fill-current" />
                    <span>★ FEATURED ENTERPRISE CLIENT PROJECT</span>
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live in Production • Dhaka, Bangladesh</span>
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
                    Optimum Power Engineering Ltd.
                  </h2>
                  <p className="text-xs font-mono text-[#FFA149] mt-0.5">
                    Heavy Electrical Engineering, Substation Solutions & Power Infrastructure
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Corporate web engineering platform for heavy electrical and substation solutions in Bangladesh. Built with sub-second Next.js architecture, comprehensive industrial transformer specifications, technical catalog downloads, and instant WhatsApp B2B RFQ routing for factories, developers, and contractors nationwide.
                </p>

                {/* Highlight Metric Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>99.4% Mobile Performance</span>
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#FFA149] flex items-center gap-1.5">
                    <span className="text-[#FF7A00]">📈</span>
                    <span>3.8x B2B RFQ Inquiries</span>
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Next.js Architecture</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 pt-1">
                  <span>Production Domain:</span>
                  <a 
                    href="https://optimumpowerengineering.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline text-white hover:text-[#FFA149] flex items-center gap-1 font-semibold"
                  >
                    <span>https://optimumpowerengineering.com/</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FF7A00]" />
                  </a>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 min-w-[240px]">
                <a
                  href="https://optimumpowerengineering.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E55A00] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#FF6B00]/30 transition-all"
                >
                  <span>Visit optimumpowerengineering.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => onLaunchLiveDemo(featuredOptimum)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/15 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#FF7A00]" />
                  <span>Launch in Device Simulator</span>
                </button>
                <button
                  onClick={(e) => handleCopyLink(featuredOptimum, e)}
                  className="px-5 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 border border-white/10 transition-colors"
                >
                  {copiedId === featuredOptimum.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Live URL Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Project URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
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

      {/* Structured Content Sections when "all" is active */}
      {selectedCategory === 'all' ? (
        <div className="space-y-16">
          
          {/* Section 1: Live Production Client Websites */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>PRODUCTION CLIENT DEPLOYMENTS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
                  Live Production Client Websites ({websiteDemos.length})
                </h2>
              </div>
              <p className="text-xs text-slate-400 max-w-md text-left sm:text-right">
                High-conversion Next.js web applications, dark luxury boutiques, and engineering portals running live in Bangladesh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteDemos.map((demo) => renderCard(demo, true))}
            </div>
          </div>

          {/* Section 2: Cyber-Threat & Security Intelligence */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>IN-HOUSE THREAT INTELLIGENCE & TELEMETRY</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
                  Cyber-Threat & Resilience Telemetry (1)
                </h2>
              </div>
              <p className="text-xs text-slate-400 max-w-md text-left sm:text-right">
                Active 24/7 global telemetry dashboard monitoring API heartbeats, infrastructure latency, and cyber-threat vectors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {renderCard(intelligenceDemo, false)}
              
              {/* Telemetry quick stats card */}
              <div className="p-6 rounded-2xl bg-[#090E1A] border border-emerald-500/30 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>TELEMETRY METRICS</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      Global Edge Nodes
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                    Enterprise Resilience Architecture
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Designed for high-tech enterprise clients requiring verifiable sub-second uptime, DDoS mitigation visibility, and live infrastructure status feeds across North America, Europe, and Asia-Pacific.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] font-mono text-slate-400">System Availability</div>
                    <div className="text-base font-mono font-bold text-emerald-400">99.98% Monitored</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] font-mono text-slate-400">Threat Ingestion Rate</div>
                    <div className="text-base font-mono font-bold text-cyan-400">Real-time Stream</div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://monitor.hightechenterprise.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <span>Open Telemetry Hub: monitor.hightechenterprise.xyz</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Interactive Autonomous Bots & Business Software */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFA149] font-semibold mb-1">
                  <Zap className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>AUTONOMOUS SYSTEMS & BUSINESS ENGINES</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
                  Interactive Autonomous Sandboxes (4)
                </h2>
              </div>
              <p className="text-xs text-slate-400 max-w-md text-left sm:text-right">
                Test simulated multi-turn WhatsApp sales, real-time courier tracking, offline retail POS, and autonomous workflow engines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {automationDemos.map((demo) => renderCard(demo, false))}
            </div>
          </div>

        </div>
      ) : (
        /* Filtered Grid View */
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
              {categories.find(c => c.id === selectedCategory)?.label} ({filteredDemos.length})
            </h2>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-mono text-[#FFA149] hover:underline"
            >
              View All Systems
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDemos.map((demo) => renderCard(demo, demo.category === 'websites'))}
          </div>
        </div>
      )}

      {/* Free Custom Demo Offer Banner */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0F1626] via-[#141E34] to-[#0A0E17] border border-white/15 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVE RISK-FREE OFFER</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
            Want a Custom Working Demo for Your Exact Brand?
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            We will engineer a functional interactive prototype of your business's WhatsApp AI bot or high-performance website within 48 hours—completely free before you pay a single Taka or Dollar.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="px-5 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E55A00] text-white text-xs sm:text-sm font-bold transition-all shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Claim Free Website & Bot Prototype</span>
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
            >
              Ask on WhatsApp: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

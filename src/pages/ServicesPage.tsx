import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, COMPANY_INFO } from '../data/mockData';
import { 
  MessageSquareCode, 
  Globe, 
  Workflow, 
  ShoppingBag, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Server, 
  Lock, 
  Layers, 
  Check, 
  XCircle,
  Clock,
  Code2,
  Database
} from 'lucide-react';

interface ServicesPageProps {
  onOpenDemoModal: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenDemoModal, onNavigate }) => {
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareCode': return <MessageSquareCode className="w-6 h-6 text-[#FF6B00]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#FF6B00]" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-[#FF6B00]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-[#FF6B00]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />;
      default: return <Cpu className="w-6 h-6 text-[#FF6B00]" />;
    }
  };

  const activeServiceData = SERVICES_DATA.find(s => s.id === selectedService) || SERVICES_DATA[0];

  return (
    <div className="pt-8 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>FULL-SPECTRUM DIGITAL INFRASTRUCTURE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
          Engineered to Automate, Scale, and Outperform
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          From 24/7 conversational WhatsApp AI agents to sub-second headless eCommerce engines and enterprise workflows, we eliminate operational drag so you can focus on explosive growth.
        </p>
      </div>

      {/* Interactive Service Deep-Dive Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-2 mb-1">
            Select Core Capability:
          </div>
          {SERVICES_DATA.map((srv) => {
            const isSelected = srv.id === selectedService;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedService(srv.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                  isSelected 
                    ? 'bg-gradient-to-r from-[#131A2D] to-[#0E1424] border-[#FF6B00] shadow-[0_4px_25px_rgba(255,107,0,0.2)]' 
                    : 'bg-[#0B0F19]/80 border-white/10 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#FF6B00]/20 border border-[#FF6B00]/40' : 'bg-white/5 border border-white/10'} shrink-0`}>
                  {getServiceIcon(srv.iconName)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className={`font-bold text-sm sm:text-base font-['Outfit',sans-serif] ${isSelected ? 'text-[#FFA149]' : 'text-white'}`}>
                      {srv.title}
                    </h2>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0"></span>}
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-1">
                    {srv.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Detail Pane */}
        <div className="lg:col-span-7 bg-[#0E1424] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FFA149] border border-[#FF6B00]/30 font-semibold uppercase">
                {activeServiceData.category}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>{activeServiceData.metrics}</span>
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
                {activeServiceData.title}
              </h2>
              <p className="text-[#FFA149] text-sm font-medium mt-1">
                "{activeServiceData.tagline}"
              </p>
              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                {activeServiceData.description}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Production-Ready Deliverables:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeServiceData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white font-bold text-xs sm:text-sm shadow-lg hover:opacity-95 transition-opacity flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Free Prototype for This Service</span>
              </button>

              <button
                onClick={() => onNavigate('demos')}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>View Live Demos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Comparison: Old Manual Chaos vs High-Tech Autonomous Pipeline */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#090D17] border border-white/15 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-wider">ARCHITECTURAL EVOLUTION</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
            Why Modern Businesses Switch to High-Tech Enterprise
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            See how replacing fragmented tools with an interconnected autonomous nervous system transforms your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Manual Approach */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/15 border border-rose-500/20 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-base font-['Outfit',sans-serif]">
              <XCircle className="w-5 h-5" />
              <span>The Fragmented Manual Method</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-mono">✕</span>
                <span>Agents manually typing repeated answers to 400+ WhatsApp messages every day.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-mono">✕</span>
                <span>Order addresses manually copy-pasted into courier portals (Steadfast/Pathao), causing shipping errors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-mono">✕</span>
                <span>Abandoned website checkouts are completely lost with zero automated follow-up.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-mono">✕</span>
                <span>Slow WordPress websites taking 6+ seconds to load on mobile 4G networks.</span>
              </li>
            </ul>
          </div>

          {/* High-Tech Enterprise Autonomous Pipeline */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base font-['Outfit',sans-serif]">
              <Check className="w-5 h-5" />
              <span>The High-Tech Enterprise Autonomous System</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono">✓</span>
                <span>70% of inquiries solved autonomously in &lt;2 seconds with Bangla & English natural language AI.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono">✓</span>
                <span>Instant automated parcel booking via direct Courier APIs with OTP address verification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono">✓</span>
                <span>WhatsApp cart recovery triggers automatically within 15 minutes, recovering 28%+ lost revenue.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono">✓</span>
                <span>Sub-second headless Next.js platforms optimized for 99+ Core Web Vitals and Page 1 Google SEO.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 6-Phase Engineering Delivery Sprint Roadmap */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-wider">METHODOLOGY</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
            The 6-Phase High-Tech Engineering Sprint
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From initial business audit to production hardening and 24/7 SLA monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Audit & Requirements Discovery', desc: 'We examine your existing chat volume, sales funnels, courier workflows, and bottlenecks.' },
            { step: '02', title: 'Architecture & Schema Blueprint', desc: 'Design of database models, Meta Cloud webhook topologies, and security boundaries.' },
            { step: '03', title: 'Interactive Prototype Sandbox', desc: 'Deploy a live test sandbox so your leadership can test the bot and web UX in 48 hours.' },
            { step: '04', title: 'Production Build & Hardening', desc: 'Connecting live bKash/Nagad APIs, courier webhooks, and sub-second Next.js edge assets.' },
            { step: '05', title: 'Team Training & Controlled Pilot', desc: 'Hands-on staff onboarding for the multi-agent inbox and live takeover dashboard.' },
            { step: '06', title: '24/7 Monitoring & SLA Uptime', desc: '99.98% guaranteed uptime SLA, error alerts, and ongoing conversion rate optimization.' }
          ].map((item) => (
            <div key={item.step} className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2 hover:border-[#FF6B00]/40 transition-colors">
              <div className="text-2xl font-black font-mono text-[#FF6B00]">{item.step}</div>
              <h3 className="font-bold text-white text-base font-['Outfit',sans-serif]">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Radar */}
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 text-center space-y-6">
        <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
          Enterprise Stacks & Native APIs We Command
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            'Meta Cloud WhatsApp API', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Pathao Courier API',
            'Steadfast API', 'bKash Merchant API', 'Nagad API', 'SSLCommerz', 'Shopify Storefront API',
            'WooCommerce REST', 'HubSpot CRM', 'Zoho CRM', 'PostgreSQL', 'Cloudflare Edge', 'Docker'
          ].map((tech) => (
            <span key={tech} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

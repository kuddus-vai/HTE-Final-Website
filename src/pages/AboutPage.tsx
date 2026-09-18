import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, LOCATIONS_DATA } from '../data/mockData';
import { OfficesMap } from '../components/OfficesMap';
import { 
  Award, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

interface AboutPageProps {
  onOpenDemoModal: () => void;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenDemoModal, onNavigate }) => {
  return (
    <div className="pt-8 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono">
          <Award className="w-3.5 h-3.5" />
          <span>OUR MISSION & ENGINEERING HERITAGE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
          Smart Solutions. Digital Growth. Your Success.
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          High-Tech Enterprise was founded in Savar, Dhaka to bridge the gap between complex enterprise automation and day-to-day business operations. We build digital nervous systems that run 24/7.
        </p>
      </div>

      {/* Verified Stats Highlight Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'Facebook Recommendation', val: COMPANY_INFO.stats.recommendationRate, sub: '100% Positive Client Score' },
          { label: 'Queries Handled Autonomously', val: COMPANY_INFO.stats.queriesAutomated, sub: 'Zero Human Intervention' },
          { label: 'Avg AI Response Latency', val: COMPANY_INFO.stats.avgResponseTime, sub: 'Natural Bangla & English' },
          { label: 'Infrastructure Uptime SLA', val: COMPANY_INFO.stats.uptime, sub: 'High Availability Cloud' }
        ].map((stat, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-[#0C101C] border border-white/10 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#FF6B00]">{stat.val}</div>
            <div className="text-xs font-bold text-white font-['Outfit',sans-serif]">{stat.label}</div>
            <div className="text-[11px] text-slate-400">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* The Story & Genesis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-mono text-[#FF7A00] uppercase tracking-wider">
            ROOTED IN SAVAR, DELIVERING GLOBALLY
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
            Why We Built High-Tech Enterprise
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Most businesses in Bangladesh and emerging markets struggle with fragmented software. During marketing campaigns or festival sales, customer service agents are overwhelmed with repetitive WhatsApp and Facebook inquiries, courier bookings fail due to manual typing errors, and abandoned checkouts slip through the cracks.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We asked a simple question: <strong className="text-white">What if your business could operate on an autonomous autopilot?</strong> Where an AI agent handles 70%+ of customer inquiries with sub-2-second accuracy, orders are dispatched straight to Steadfast or Pathao with verified OTP addresses, and your website loads in under 1 second on mobile.
          </p>
          
          <div className="pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0 font-bold">
                HT
              </div>
              <div>
                <div className="text-sm font-bold text-white">High-Tech Enterprise BD Ltd.</div>
                <div className="text-xs text-slate-400">Headquartered in Savar, Dhaka 1217 • Global presence across 5 continents</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Card */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0E1424] border border-white/15 space-y-6 shadow-2xl">
          <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
            Our Four Non-Negotiable Engineering Pillars:
          </h3>
          
          <div className="space-y-4">
            {[
              { title: 'Zero Latency & Sub-Second Speeds', desc: 'Every millisecond lost is revenue lost. We engineer edge-cached architectures and instant AI responses.' },
              { title: 'Defense-in-Depth Security', desc: 'Zero-trust API boundaries, encrypted customer data, and strict data sovereignty. No leaks.' },
              { title: 'Measurable Bottom-Line ROI', desc: 'We only build systems that either directly increase sales conversions or slash operational payroll hours.' },
              { title: 'Bespoke Craftsmanship', desc: 'No bloated cookie-cutter themes. Clean, production-ready code with full client ownership.' }
            ].map((pillar, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">{pillar.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{pillar.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence Map & HQ */}
      <OfficesMap />

      {/* Facebook Community Proof Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0F19] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>COMMUNITY RECOGNIZED</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit',sans-serif]">
            Backed by a 100% Recommendation Score
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Join over 3,400+ followers and business leaders who rely on High-Tech Enterprise for mission-critical automation and digital growth.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href={COMPANY_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-bold transition-all shadow-lg flex items-center gap-2"
          >
            <span>Visit Facebook Page</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenDemoModal}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
          >
            Claim Free Demo
          </button>
        </div>
      </div>

    </div>
  );
};

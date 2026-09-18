import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Bot, 
  Smartphone,
  Star
} from 'lucide-react';

import { PageId } from '../types';

interface HeroProps {
  onOpenDemoModal: () => void;
  onNavigate?: (page: PageId) => void;
  onScrollToSimulator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, onNavigate, onScrollToSimulator }) => {
  const [activeStep, setActiveStep] = useState(0);

  const simulationEvents = [
    {
      customerQuery: "Hi! Is the wireless mechanical keyboard in stock? Do you deliver to Chittagong?",
      time: "02:14 AM",
      aiReply: "Hello! Yes, the Pro Wireless Mechanical Keyboard is currently IN STOCK! 🚚 We deliver anywhere in Chittagong within 48 hours via Pathao Express. Cash on Delivery is available.",
      systemPill: "⚡ Lead qualified • Pathao API checked • 0.8s response",
      crmStatus: "HubSpot: New Qualified Lead (৳4,500)"
    },
    {
      customerQuery: "Great! Can I order 1 unit with red switches?",
      time: "02:15 AM",
      aiReply: "Certainly! Red switches reserved for you. Please confirm your delivery address and contact number, or tap below to auto-complete with bKash/Nagad.",
      systemPill: "🛒 Order draft created #HT-8924 • Inventory -1",
      crmStatus: "Order Stage: Pending Confirmation"
    },
    {
      customerQuery: "Address: Nasirabad Housing, Chattogram. Phone: 01996-XXXXXX",
      time: "02:16 AM",
      aiReply: "Order #HT-8924 CONFIRMED! 🎉 Invoice dispatched to WhatsApp. Tracking link will be sent as soon as Pathao picks up your parcel. Thank you!",
      systemPill: "✅ CRM updated • Invoice generated • SMS sent",
      crmStatus: "Warehouse Dispatched • Human Intervention: 0%"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % simulationEvents.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [simulationEvents.length]);

  const currentEvent = simulationEvents[activeStep];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust & Recognition Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E131F]/90 border border-[#FF6B00]/30 shadow-[0_0_20px_rgba(255,107,0,0.15)] text-xs font-semibold">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
            </span>
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              100% Recommend (12+ Reviews)
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">3.4K+ Community</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-medium">Meta WhatsApp Cloud Tech</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] leading-[1.12]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              70% of Business Queries
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA149] to-[#FF6B00]">
              Never Need a Human.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            While you sleep, your custom AI assistant is already handling inquiries, confirming orders, and updating your CRM. 
            <span className="text-white font-semibold"> High-Tech Enterprise</span> engineers 
            <span className="text-[#FFA149] font-medium"> WhatsApp Auto-Reply</span>, 
            <span className="text-white font-medium"> CRM Flows</span>, and 
            <span className="text-[#FFA149] font-medium"> High-Performance Web Platforms</span> that scale your revenue automatically.
          </p>
        </div>

        {/* Dual Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            id="hero-free-demo-cta"
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#FF6B00] via-[#FF8A33] to-[#FF6B00] shadow-[0_0_30px_rgba(255,107,0,0.45)] hover:shadow-[0_0_40px_rgba(255,107,0,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span>Get Free Website & System Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-test-bot-cta"
            onClick={onScrollToSimulator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-[#0E131F] border border-white/15 hover:border-[#FF6B00]/60 hover:text-white hover:bg-[#141B2D] transition-all"
          >
            <Bot className="w-5 h-5 text-[#FF7A00]" />
            <span>Test Live WhatsApp Bot</span>
          </button>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-medium text-xs sm:text-sm text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Live Interactive Hero Preview Display (The Autonomous System In Action) */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-[#0B0F19] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            
            {/* Top Bar of the System Mockup */}
            <div className="px-4 py-3 bg-[#111726] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pl-2 border-l border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-white font-semibold">HIGH-TECH AUTOMATION ENGINE v4.8</span>
                  <span className="hidden sm:inline text-slate-500">|</span>
                  <span className="hidden sm:inline text-[#FF8A33]">Savar / Dhaka Cloud Edge</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Latency: 180ms
                </span>
                <span className="hidden sm:inline-flex text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                  SOC-2 Encrypted
                </span>
              </div>
            </div>

            {/* Simulated WhatsApp + CRM Split Live View */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
              
              {/* Left 7 cols: Live WhatsApp Conversation Feed */}
              <div className="md:col-span-7 p-4 sm:p-6 bg-[#080C14] flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        WhatsApp Business Cloud
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="text-[10px] text-slate-400">High-Tech Enterprise Live Agent</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">
                    Active Customer: +880 18XX-XXXXXX
                  </span>
                </div>

                {/* Messages Body */}
                <div className="space-y-4 my-auto">
                  {/* Customer message */}
                  <div className="flex flex-col items-start max-w-[88%]">
                    <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1">
                      <span>Buyer</span>
                      <span>•</span>
                      <span>{currentEvent.time}</span>
                    </div>
                    <div className="bg-[#1A2333] text-slate-200 text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm border border-white/10 shadow-sm leading-relaxed">
                      {currentEvent.customerQuery}
                    </div>
                  </div>

                  {/* AI Assistant reply */}
                  <div className="flex flex-col items-end max-w-[90%] ml-auto">
                    <div className="text-[10px] text-[#FF8A33] mb-1 flex items-center gap-1">
                      <Bot className="w-3 h-3" />
                      <span>High-Tech AI Assistant</span>
                      <span>•</span>
                      <span>Instant</span>
                    </div>
                    <div className="bg-gradient-to-br from-[#0F1E36] to-[#122B48] text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm border border-cyan-500/30 shadow-md leading-relaxed">
                      {currentEvent.aiReply}
                    </div>
                  </div>
                </div>

                {/* Event timeline indicators */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400">Cycle:</span>
                    <div className="flex gap-1.5">
                      {simulationEvents.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveStep(idx)}
                          className={`h-1.5 rounded-full transition-all ${
                            activeStep === idx ? 'w-6 bg-[#FF6B00]' : 'w-2 bg-slate-700'
                          }`}
                          aria-label={`Step ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Zero Human Wait Time
                  </span>
                </div>
              </div>

              {/* Right 5 cols: Real-Time Nervous System / CRM Feed */}
              <div className="md:col-span-5 p-4 sm:p-6 bg-[#0B0F1A] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      Automated Pipeline
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Real-Time Sync</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400 mb-1">CRM Status</div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        {currentEvent.crmStatus}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30">
                      <div className="text-[11px] text-[#FF8A33] font-medium mb-1">Automation Triggered</div>
                      <div className="text-xs font-mono text-amber-200">
                        {currentEvent.systemPill}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400 mb-1">Staff Notification</div>
                      <div className="text-xs font-mono text-slate-300">
                        Pushed to Savar Operations Slack & Manager WhatsApp
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Human Labor Saved:</span>
                  <span className="font-bold text-emerald-400 font-mono">100% On Query</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3 Core Impact Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0E131F]/70 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/15 flex items-center justify-center text-[#FF7A00] flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">70%+ Ticket Drop</div>
              <div className="text-xs text-slate-400">Instant answers without human delay</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0E131F]/70 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">3.4x Conversion Lift</div>
              <div className="text-xs text-slate-400">Immediate response converts before interest fades</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0E131F]/70 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Enterprise Security</div>
              <div className="text-xs text-slate-400">SOC-2 compliant logic & encrypted flows</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

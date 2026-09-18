import React, { useState } from 'react';
import { LiveDemoItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { 
  X, 
  ExternalLink, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  RefreshCw,
  Zap,
  ArrowRight,
  MessageCircle,
  ShoppingCart,
  Layers,
  Terminal
} from 'lucide-react';

interface LiveDemoModalProps {
  demo: LiveDemoItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ demo, onClose, onOpenConsultation }) => {
  const [deviceView, setDeviceView] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [copied, setCopied] = useState(false);
  const [interactiveStep, setInteractiveStep] = useState(0);

  if (!demo) return null;

  const handleCopyUrl = () => {
    if (demo.liveDemoUrl) {
      navigator.clipboard.writeText(demo.liveDemoUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#0B0F19] border border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col my-auto max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Header */}
        <div className="px-6 py-4 bg-[#0E1424] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit',sans-serif]">
                  {demo.title}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FFA149] border border-[#FF6B00]/30">
                  {demo.badge}
                </span>
              </div>
              <div className="text-xs text-slate-400">
                Industry: <span className="text-slate-200">{demo.industry}</span> • Client: <span className="text-slate-200">{demo.clientName}</span>
              </div>
            </div>
          </div>

          {/* Viewport Switcher & Actions */}
          <div className="flex items-center gap-2">
            {/* Viewport toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  deviceView === 'mobile' ? 'bg-[#FF6B00] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  deviceView === 'tablet' ? 'bg-[#FF6B00] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet</span>
              </button>
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  deviceView === 'desktop' ? 'bg-[#FF6B00] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View (Full)"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
            </div>

            {/* Launch in new tab */}
            <a
              href={demo.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-[#FF6B00] text-white text-xs font-semibold transition-all flex items-center gap-1.5"
            >
              <span>Open Full Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo Stage Area */}
        <div className="flex-1 bg-[#06080E] p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-center min-h-[420px]">
          
          {/* Simulated device container */}
          <div 
            className={`transition-all duration-300 w-full rounded-2xl border border-white/15 bg-[#0C101C] overflow-hidden shadow-2xl flex flex-col ${
              deviceView === 'mobile' ? 'max-w-md' : deviceView === 'tablet' ? 'max-w-2xl' : 'max-w-4xl'
            }`}
          >
            {/* Device Mock Browser Bar */}
            <div className="px-4 py-2 bg-[#121829] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="px-3 py-0.5 rounded-md bg-black/40 border border-white/10 text-[11px] text-slate-300 truncate max-w-[240px] sm:max-w-md">
                🔒 {demo.liveDemoUrl}
              </div>
              <button 
                onClick={handleCopyUrl}
                className="hover:text-white transition-colors flex items-center gap-1 text-[10px]"
                title="Copy demo URL"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Device Screen Body: Interactive Sandboxes based on type */}
            <div className="p-4 sm:p-6 space-y-4">
              
              {demo.previewType === 'interactive-whatsapp' && (
                <div className="space-y-3 font-sans">
                  {/* WhatsApp mock header */}
                  <div className="p-3 rounded-xl bg-[#005c4b] text-white flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                        HT
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight flex items-center gap-1">
                          <span>High-Tech {demo.title.split(' ')[0]}</span>
                          <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                        </div>
                        <div className="text-[10px] text-emerald-200">Verified Business Bot • Instant Reply</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded">Active</span>
                  </div>

                  {/* WhatsApp Messages Simulator */}
                  <div className="space-y-2.5 text-xs bg-[#0b141a] p-4 rounded-xl border border-white/5 min-h-[220px]">
                    <div className="bg-[#202c33] text-white p-3 rounded-xl rounded-tl-none max-w-[85%]">
                      <p className="font-semibold text-emerald-400 text-[11px] mb-1">High-Tech AI Engine:</p>
                      Hello! Welcome to <span className="font-bold">{demo.clientName}</span>. How can I assist your business today?
                      <div className="text-[9px] text-slate-400 text-right mt-1">10:42 AM ✓✓</div>
                    </div>

                    {interactiveStep >= 1 && (
                      <div className="bg-[#005c4b] text-white p-3 rounded-xl rounded-tr-none max-w-[80%] ml-auto animate-fade-in">
                        <span>Show me how you automate product order tracking and bKash payments!</span>
                        <div className="text-[9px] text-emerald-200 text-right mt-1">10:42 AM ✓✓</div>
                      </div>
                    )}

                    {interactiveStep >= 2 && (
                      <div className="bg-[#202c33] text-white p-3 rounded-xl rounded-tl-none max-w-[85%] animate-fade-in space-y-2">
                        <p>✅ <span className="font-semibold text-emerald-400">Instant Order Lookup:</span> Consignment #HT-8924 is in transit via Steadfast Courier.</p>
                        <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-[11px] space-y-1">
                          <div className="text-slate-300">Rider: <span className="text-white font-medium">Kabir (01711-XXXXXX)</span></div>
                          <div className="text-slate-300">ETA: <span className="text-emerald-400 font-bold">Today, by 4:30 PM</span></div>
                          <div className="text-slate-300">Cash on Delivery: <span className="text-amber-400 font-bold">৳ 1,450 BDT</span></div>
                        </div>
                        <div className="text-[9px] text-slate-400 text-right">10:42 AM ✓✓</div>
                      </div>
                    )}
                  </div>

                  {/* Interactive Action Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <button
                      onClick={() => setInteractiveStep(1)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-emerald-600 text-white text-xs transition-colors flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      <span>1. Test Order Lookup Prompt</span>
                    </button>
                    <button
                      onClick={() => setInteractiveStep(2)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-emerald-600 text-white text-xs transition-colors flex items-center gap-1"
                    >
                      <Zap className="w-3 h-3 text-[#FF7A00]" />
                      <span>2. Simulate AI Courier Sync</span>
                    </button>
                    <button
                      onClick={() => setInteractiveStep(0)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 text-xs transition-colors"
                      title="Reset test"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}

              {demo.previewType === 'interactive-store' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400">Mobile Speed</div>
                      <div className="text-lg font-mono font-bold text-emerald-400">0.72s</div>
                      <div className="text-[10px] text-slate-400">Core Web Vitals Pass</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400">Checkout Rate</div>
                      <div className="text-lg font-mono font-bold text-[#FF8A33]">+31.4%</div>
                      <div className="text-[10px] text-emerald-400">WhatsApp 1-Tap</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                      <div className="text-[10px] text-slate-400">Courier Sync</div>
                      <div className="text-lg font-mono font-bold text-cyan-400">Instant</div>
                      <div className="text-[10px] text-slate-400">Steadfast & Pathao</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F1626] border border-white/10 text-xs text-slate-300 space-y-2">
                    <div className="font-bold text-white flex items-center justify-between">
                      <span>Live Storefront Feature Set</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                        Ready to Connect
                      </span>
                    </div>
                    <p>
                      Optimized for low-bandwidth 4G networks in Bangladesh. Includes instant address autofill, bKash & Nagad direct checkout, and automated parcel booking without manual admin re-entry.
                    </p>
                  </div>
                </div>
              )}

              {demo.previewType === 'interactive-pos' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400">Offline Ready</div>
                      <div className="font-bold text-emerald-400 mt-1">100% Active</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400">Barcode Engine</div>
                      <div className="font-bold text-white mt-1">&lt;0.1s scan</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400">Thermal Print</div>
                      <div className="font-bold text-cyan-400 mt-1">ESC/POS</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400">WhatsApp Slip</div>
                      <div className="font-bold text-[#FF8A33] mt-1">Automated</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F1626] border border-white/10 text-xs text-slate-300">
                    <span className="text-white font-semibold">Dual Receipts:</span> When cashier rings up a customer, thermal slip prints at counter while a digital copy with referral discount sends immediately to the buyer's phone.
                  </div>
                </div>
              )}

              {(demo.previewType === 'interactive-crm' || demo.previewType === 'iframe') && (
                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-[#0F1626] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-white font-bold">
                      <span>Automated Pipeline & Document Sync</span>
                      <span className="text-[10px] text-emerald-400 font-mono">Real-time Stream</span>
                    </div>
                    <p className="text-slate-300">
                      Extracts invoices, leads, and customer notes across platforms. Consolidates everything into executive dashboards and morning briefings.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1">
                    <div className="text-emerald-400">[08:30:00 AM] Briefing generated: 34 orders dispatched, 12 new wholesale leads.</div>
                    <div className="text-slate-300">[08:30:02 AM] WhatsApp summary sent to CEO & Sales Director.</div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Configuration Hint for the User */}
          <div className="mt-4 text-center">
            <span className="text-xs text-slate-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
              <span>Live Demo Destination:</span>
              <code className="text-[#FF8A33] font-mono font-bold">{demo.liveDemoUrl}</code>
            </span>
          </div>

        </div>

        {/* Footer Details & CTAs */}
        <div className="px-6 py-4 bg-[#0E1424] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 text-center sm:text-left">
            <span className="text-white font-semibold">Impact:</span> {demo.metrics}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] shadow-lg flex items-center justify-center gap-1.5 hover:opacity-95 transition-opacity"
            >
              <Sparkles className="w-4 h-4" />
              <span>Deploy Similar System for My Brand</span>
            </button>
            
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

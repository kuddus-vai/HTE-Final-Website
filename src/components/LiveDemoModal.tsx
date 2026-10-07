import React, { useState, useEffect } from 'react';
import { LiveDemoItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { SHOPFLOW_WEBSITES_DEMO, LIVE_DEMOS_DATA } from '../data/liveDemos';
import { SmartPosCloudDemo } from './SmartPosCloudDemo';
import { LiveWhatsAppSandbox } from './LiveWhatsAppSandbox';
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
  RefreshCw,
  Zap,
  ArrowRight,
  MessageCircle,
  Truck,
  Globe
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
  const [activeUrl, setActiveUrl] = useState<string>('');

  useEffect(() => {
    if (!demo) return;

    // Lock background page scroll while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [demo, onClose]);

  useEffect(() => {
    if (demo) {
      setActiveUrl(demo.liveDemoUrl);
      setInteractiveStep(0);
      if (demo.previewType === 'interactive-pos') {
        setDeviceView('desktop');
      }
    }
  }, [demo]);

  if (!demo) return null;

  const currentUrl = activeUrl || demo.liveDemoUrl;
  const isClientWebsite = demo.category === 'websites';

  // Find dynamic metadata if activeUrl points to another client site
  const matchedWebsite = LIVE_DEMOS_DATA.find(d => d.liveDemoUrl === currentUrl);
  const matchedShopflow = SHOPFLOW_WEBSITES_DEMO.find(s => s.url === currentUrl);

  const activeTitle = matchedWebsite?.title || (matchedShopflow ? `${matchedShopflow.name} — ${matchedShopflow.badge}` : demo.title);
  const activeBadge = matchedWebsite?.badge || matchedShopflow?.badge || demo.badge;
  const activeIndustry = matchedWebsite?.industry || matchedShopflow?.category || demo.industry;
  const activeClient = matchedWebsite?.clientName || matchedShopflow?.name || demo.clientName;
  const activeMetrics = matchedWebsite?.metrics || matchedShopflow?.metrics || demo.metrics;

  const handleCopyUrl = () => {
    if (currentUrl) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md overflow-hidden"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${demo.previewType === 'interactive-pos' ? 'max-w-6xl' : 'max-w-5xl'} h-[92vh] max-h-[850px] bg-[#0B0F19] border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col my-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Header */}
        <div className="px-4 sm:px-6 py-3 bg-[#0E1424] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit',sans-serif] truncate max-w-[200px] sm:max-w-md">
                  {activeTitle}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FFA149] border border-[#FF6B00]/30 shrink-0">
                  {activeBadge}
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Industry: <span className="text-slate-200">{activeIndustry}</span> • Client: <span className="text-slate-200">{activeClient}</span>
              </div>
            </div>
          </div>

          {/* Viewport Switcher & Actions */}
          <div className="flex items-center gap-2">
            {/* Viewport toggle for websites/iframe */}
            {demo.previewType === 'iframe' && (
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
            )}

            {/* Launch in new tab */}
            {currentUrl && (
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#FF6B00] text-white text-xs font-semibold transition-all flex items-center gap-1.5"
              >
                <span className="hidden sm:inline">Open in New Window</span>
                <span className="sm:hidden">Open</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

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

        {/* Demo Stage Area (Non-Scrollable Container) */}
        <div className="flex-1 min-h-0 bg-[#06080E] p-2 sm:p-3 overflow-hidden flex flex-col items-center justify-center">
          
          {/* Quick switcher for client websites */}
          {isClientWebsite && (
            <div className="w-full max-w-4xl mb-2 px-3 py-1.5 rounded-xl bg-[#0D1322] border border-white/10 shadow flex flex-wrap items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 shrink-0">
                <Globe className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span className="font-bold text-white text-[11px]">Live Client Sites:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                {SHOPFLOW_WEBSITES_DEMO.map((site) => {
                  const isActive = currentUrl === site.url;
                  return (
                    <button
                      key={site.id}
                      onClick={() => setActiveUrl(site.url)}
                      className={`px-2 py-0.5 rounded-md text-[11px] transition-all flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#FF6B00] text-white font-bold shadow-sm'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white animate-pulse' : 'bg-slate-500'}`}></span>
                      <span>{site.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Simulated device container (Fills available height, non-scrollable) */}
          <div 
            className={`transition-all duration-300 w-full h-full rounded-2xl border border-white/15 bg-[#0C101C] overflow-hidden shadow-2xl flex flex-col min-h-0 ${
              demo.previewType === 'interactive-pos' ? 'max-w-full' :
              deviceView === 'mobile' ? 'max-w-md' : deviceView === 'tablet' ? 'max-w-2xl' : 'max-w-4xl'
            }`}
          >
            {/* Device Mock Browser Bar */}
            <div className="shrink-0 px-3 py-1.5 bg-[#121829] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="px-3 py-0.5 rounded-md bg-black/40 border border-white/10 text-[10px] sm:text-[11px] text-slate-300 truncate max-w-[200px] sm:max-w-md">
                🔒 {demo.previewType === 'interactive-whatsapp' ? 'wa.me/meta-cloud-api/live-dispatch' : currentUrl}
              </div>
              <button 
                onClick={handleCopyUrl}
                className="hover:text-white transition-colors flex items-center gap-1 text-[10px]"
                title="Copy demo link"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Device Screen Body (Fits 100% remaining height, non-scrollable outer) */}
            <div className="flex-1 min-h-0 overflow-hidden flex flex-col p-1 sm:p-2">
              
              {/* WhatsApp AI Bot Sandbox: Nexora Logistics or FlowPulse */}
              {demo.previewType === 'interactive-whatsapp' && (
                <div className="w-full h-full min-h-0 flex items-center justify-center overflow-hidden">
                  <LiveWhatsAppSandbox demoId={demo.id} clientName={demo.clientName} />
                </div>
              )}

              {/* Point of Sale Simulator */}
              {demo.previewType === 'interactive-pos' && (
                <div className="w-full h-full min-h-0 overflow-hidden flex flex-col">
                  <SmartPosCloudDemo onOpenConsultation={onOpenConsultation} />
                </div>
              )}

              {/* Workflow Engine Simulator */}
              {demo.previewType === 'interactive-crm' && (
                <div className="w-full h-full min-h-0 flex flex-col justify-center max-w-2xl mx-auto space-y-3 p-4 text-xs font-sans">
                  <div className="p-4 rounded-xl bg-[#0F1626] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-white font-bold">
                      <span className="text-sm">Automated Pipeline & Document Sync</span>
                      <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">Live Stream</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      Extracts invoices, leads, and customer notes across platforms. Consolidates everything into executive dashboards and morning briefings.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1.5">
                    <div className="text-emerald-400">[08:30:00 AM] Briefing generated: 34 orders dispatched, 12 new wholesale leads.</div>
                    <div className="text-slate-300">[08:30:02 AM] WhatsApp executive summary dispatched to CEO & Sales Director.</div>
                    <div className="text-cyan-400">[08:30:05 AM] Inventory delta synced with Mirpur & Savar warehouses.</div>
                  </div>
                </div>
              )}

              {/* Live Web Sandbox (Iframe) for Websites & Enterprise Pulse Monitor */}
              {demo.previewType === 'iframe' && (
                <div className="flex-1 min-h-0 w-full h-full rounded-xl overflow-hidden bg-slate-950 border border-white/10 relative">
                  <iframe
                    src={currentUrl}
                    title={demo.title}
                    className="w-full h-full border-0 bg-white"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-2">
                    <a
                      href={currentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-black/85 hover:bg-[#FF6B00] text-white text-[10px] font-mono border border-white/20 backdrop-blur-md flex items-center gap-1 transition-colors shadow-lg"
                    >
                      <span>Open in New Tab</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Footer Details & CTAs */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0E1424] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-300 text-center sm:text-left">
            <span className="text-white font-semibold">Impact:</span> {activeMetrics}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] shadow-lg flex items-center justify-center gap-1.5 hover:opacity-95 transition-opacity"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Deploy Similar System for My Brand</span>
            </button>
            
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shrink-0"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

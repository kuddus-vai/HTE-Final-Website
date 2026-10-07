import React, { useState } from 'react';
import { PageId, LiveDemoItem } from '../types';
import { PRODUCTS_DATA, COMPANY_INFO, SIDE_PROJECTS_DATA } from '../data/mockData';
import { LIVE_DEMOS_DATA, SHOPFLOW_WEBSITES_DEMO } from '../data/liveDemos';
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
  Cpu,
  Activity,
  Globe
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

                  {/* ShopFlow Active Client Deployments Showcase */}
                  {prod.id === 'shopflow' && (
                    <div className="pt-4 border-t border-white/10 space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-white font-semibold flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-[#FF7A00]" />
                          <span>ShopFlow™ Client Websites & Live Demos:</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-mono">
                          {SHOPFLOW_WEBSITES_DEMO.length} Live Deployments
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {SHOPFLOW_WEBSITES_DEMO.map((site) => {
                          const siteDemo = LIVE_DEMOS_DATA.find(d => d.liveDemoUrl === site.url) || matchedDemo;
                          return (
                            <div 
                              key={site.id}
                              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2 hover:border-[#FF6B00]/40 transition-colors"
                            >
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-white truncate">{site.name}</div>
                                <div className="text-[10px] text-slate-400 truncate">{site.badge}</div>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  onClick={() => onLaunchLiveDemo(siteDemo)}
                                  className="px-2 py-1 rounded-md bg-[#FF6B00]/20 hover:bg-[#FF6B00] text-[#FFA149] hover:text-white text-[10px] font-mono font-bold transition-all"
                                  title="Test in Simulator"
                                >
                                  Demo
                                </button>
                                <a
                                  href={site.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                                  title="Open live site"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

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

      {/* Official In-House Side Projects Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>INTERNAL LABS & SIDE PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif]">
            Public Tools & Telemetry Infrastructure
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            In addition to our client enterprise deployments, our engineering team builds and maintains public tools and side projects designed for extreme transparency, reliability, and observability.
          </p>
        </div>

        {SIDE_PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0C1222] to-[#080C16] border border-emerald-500/30 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    {project.uptime}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                    Status: {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif]">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm mt-1">
                    <span>Live Domain:</span>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:text-emerald-300 flex items-center gap-1 font-bold"
                    >
                      <span>{project.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
                    Infrastructure & Capabilities
                  </div>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Built With:</span>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                  >
                    <span>Launch {project.domain}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onLaunchLiveDemo(LIVE_DEMOS_DATA[0])}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-white/10 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#FF7A00]" />
                    <span>Open Device Simulator</span>
                  </button>
                </div>
              </div>

              {/* Right Telemetry Mock Box */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#070A12] border border-emerald-500/20 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Heartbeat Daemon Live</span>
                    </span>
                    <span className="text-[11px] text-slate-300 font-mono">Interval: 60s</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-[#0F1626] border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-white font-semibold">Meta WhatsApp Webhook</span>
                      </div>
                      <span className="font-mono text-emerald-400">42ms • 100%</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0F1626] border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-white font-semibold">Next.js Edge Clusters</span>
                      </div>
                      <span className="font-mono text-emerald-400">18ms • 100%</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0F1626] border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-white font-semibold">Courier Dispatch Gateway</span>
                      </div>
                      <span className="font-mono text-emerald-400">95ms • 99.98%</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/50 border border-emerald-500/20 text-xs font-mono text-slate-300 space-y-1">
                    <div className="text-slate-400">// Real-time check via {project.domain}</div>
                    <div className="text-emerald-400">$ curl -I {project.url}</div>
                    <div className="text-slate-300">HTTP/2 200 OK • Uptime: 99.98%</div>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center">
                    All client projects deployed by High-Tech Enterprise are continuously monitored 24/7.
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
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

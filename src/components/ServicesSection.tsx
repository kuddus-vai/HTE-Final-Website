import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/mockData';
import { 
  MessageSquareCode, 
  Globe, 
  Workflow, 
  ShoppingBag, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenDemoModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenDemoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    MessageSquareCode: <MessageSquareCode className="w-6 h-6 text-[#FF7A00]" />,
    Globe: <Globe className="w-6 h-6 text-cyan-400" />,
    Workflow: <Workflow className="w-6 h-6 text-amber-400" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    Cpu: <Cpu className="w-6 h-6 text-purple-400" />
  };

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-[#080B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono font-semibold text-[#FF8A33] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Engineered for Maximum Scale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            Specialized <span className="text-[#FF7A00]">Automation & Engineering</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We don’t build static brochures or isolated tools. We engineer resilient digital nervous systems that connect marketing, sales, and fulfillment into one autonomous flow.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Specialities' },
              { id: 'automation', label: 'WhatsApp & AI Automation' },
              { id: 'web', label: 'High-Performance Web' },
              { id: 'crm', label: 'CRM & Workflows' },
              { id: 'security', label: 'Enterprise Security' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#FF6B00] text-white shadow-[0_0_15px_rgba(255,107,0,0.4)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-3xl bg-[#0E131F] border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(255,107,0,0.15)] hover:-translate-y-1 relative"
            >
              <div>
                {/* Top icon and badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.iconName] || <Zap className="w-6 h-6 text-[#FF7A00]" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    {service.metrics}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] group-hover:text-[#FFA149] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs font-medium text-[#FF8A33] mt-1 mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-[#FF7A00] transition-colors"
                >
                  <span>Request Custom Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-emerald-400 hover:underline"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner from image: "Get A Free Website Demo" */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#141B2D] via-[#0E131F] to-[#141B2D] border border-[#FF6B00]/40 shadow-[0_20px_60px_rgba(255,107,0,0.15)] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF6B00]/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-[#FF8A33] bg-[#FF6B00]/15 border border-[#FF6B00]/30 mb-3">
                Featured Growth Campaign
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit',sans-serif]">
                Does Your Business Have A Website That Matches Its Potential?
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
                Get a completely free interactive demo tailored for your brand with built-in WhatsApp auto-responder, product catalog, and lead capture. Build. Grow. Succeed.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Free Website Demo</span>
              </button>
              
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl font-semibold text-xs text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center"
              >
                Direct WhatsApp: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

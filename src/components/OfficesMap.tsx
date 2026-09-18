import React from 'react';
import { LOCATIONS_DATA, COMPANY_INFO } from '../data/mockData';
import { MapPin, Globe, Clock, Building2, CheckCircle2 } from 'lucide-react';

export const OfficesMap: React.FC = () => {
  return (
    <section id="offices" className="py-24 bg-[#0A0E17] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-400 mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Engineering Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            Dhaka Headquarters & <span className="text-[#FF7A00]">Global Hubs</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Rooted in Bangladesh with operations spanning North America, Europe, and the Middle East for 24/7 continuous deployment.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {LOCATIONS_DATA.map((loc, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl transition-all duration-300 ${
                loc.isHQ
                  ? 'bg-gradient-to-b from-[#162035] to-[#0E1524] border-2 border-[#FF6B00] shadow-[0_10px_35px_rgba(255,107,0,0.2)]'
                  : 'bg-[#0E131F] border border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    loc.isHQ ? 'bg-[#FF6B00] text-white' : 'bg-white/5 text-slate-300'
                  }`}>
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
                      {loc.city}
                    </h3>
                    <div className="text-xs text-slate-400">{loc.country}</div>
                  </div>
                </div>

                {loc.isHQ ? (
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FF6B00]/20 text-[#FFA149] border border-[#FF6B00]/40">
                    Main Headquarters
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {loc.status}
                  </span>
                )}
              </div>

              <div className="space-y-2.5 pt-3 border-t border-white/10 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Timezone: {loc.timezone}</span>
                </div>
              </div>

              {loc.isHQ && (
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Always Open (24/7)
                  </span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF8A33] hover:underline font-bold"
                  >
                    Direct Savar Line →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

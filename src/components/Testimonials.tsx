import React from 'react';
import { TESTIMONIALS_DATA, COMPANY_INFO } from '../data/mockData';
import { Star, CheckCircle, Quote, ThumbsUp, Sparkles, MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#080B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with 100% recommend badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-xs font-semibold text-amber-400 mb-4">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Official Facebook Verified Rating</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            <span className="text-[#FF7A00]">100% Recommend</span> by Business Leaders
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-4 text-sm text-slate-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 / 5.0</span>
            <span className="text-slate-500">•</span>
            <span>12+ Verified Client Reviews</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">3.4K+ Community</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#0E131F] border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#FF8A33] bg-[#FF6B00]/10 px-2.5 py-0.5 rounded-full">
                    {t.businessType}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.reviewText}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-white/15"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{t.clientName}</span>
                      {t.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Verified Client
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Facebook Page Social Proof Bar */}
        <div className="mt-12 text-center">
          <a
            href={COMPANY_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-full transition-colors"
          >
            <span>View all reviews on Facebook (@HighTechEnterprise48)</span>
            <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
          </a>
        </div>

      </div>
    </section>
  );
};

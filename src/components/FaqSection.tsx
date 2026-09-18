import React, { useState, useMemo } from 'react';
import { FAQ_DATA, COMPANY_INFO, FaqItem } from '../data/mockData';
import { ChevronDown, HelpCircle, Search, Sparkles, Check, Copy } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const categories = ['All', 'Overview', 'WhatsApp & AI', 'Courier & Integrations', 'Pricing & ROI', 'Local & Support'];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (text: string, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section 
      id="faq" 
      className="py-24 bg-[#080B12] relative"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-slate-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Answer Engine & Knowledge Hub (AEO / GEO)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit',sans-serif]">
            Clear Answers on <span className="text-[#FF7A00]">Automation</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm">
            Factual answers regarding WhatsApp bots, pricing in BDT, courier integrations, and headquarters support in Savar, Dhaka.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. pricing, Pathao, Bengali, Savar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#0E131F] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7A00] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/20 font-semibold'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List with Microdata */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-2xl bg-[#0E131F] border border-white/10 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}". You can chat with our engineering team directly on WhatsApp!
            </div>
          ) : (
            filteredFaqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                  className="rounded-2xl bg-[#0E131F] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400">
                        {item.category}
                      </span>
                      <span 
                        itemProp="name" 
                        className="font-bold text-sm sm:text-base text-white group-hover:text-[#FF8A33] transition-colors font-['Outfit',sans-serif]"
                      >
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#FF6B00]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div 
                      itemScope 
                      itemProp="acceptedAnswer" 
                      itemType="https://schema.org/Answer"
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 space-y-3"
                    >
                      <p itemProp="text">
                        {item.answer}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[11px] font-mono text-slate-500">
                          Source: High-Tech Enterprise Knowledge Base (hightechenterprise.xyz)
                        </span>
                        <button
                          onClick={(e) => handleCopy(item.answer, idx, e)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-slate-400 hover:text-white transition-colors"
                          title="Copy answer citation"
                        >
                          {copiedIndex === idx ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Cite</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Callout with GEO Information */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-white/5 via-[#FF6B00]/5 to-white/5 border border-white/10 text-center space-y-2">
          <div className="text-xs text-slate-300">
            Have a technical question or need a customized architecture consultation?
          </div>
          <div className="text-xs text-slate-400">
            Headquarters: <strong className="text-white">Savar, Dhaka 1217, Bangladesh</strong> • WhatsApp Hotline:{' '}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8A33] hover:underline font-semibold"
            >
              {COMPANY_INFO.phoneIntl}
            </a>
            {' '}• Email:{' '}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-cyan-400 hover:underline font-semibold"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

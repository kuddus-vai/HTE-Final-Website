import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck,
  Maximize2,
  Minimize2,
  FileCode2,
  CornerDownRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export interface SchemaFaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tag: string;
}

const BN_SCHEMA_FAQS: SchemaFaqItem[] = [
  {
    id: 'faq-1',
    question: 'হাই-টেক এন্টারপ্রাইজ কী এবং আপনারা কী কী সার্ভিস প্রদান করেন?',
    answer: 'হাই-টেক এন্টারপ্রাইজ (High-Tech Enterprise BD Ltd., hightechenterprise.xyz) হলো সাভার, ঢাকা ভিত্তিক একটি আধুনিক সফটওয়্যার ও বিজনেস অটোমেশন ইঞ্জিনিয়ারিং প্রতিষ্ঠান। আমরা মেটা ক্লাউড এপিআই প্রযুক্তিতে ২৪/৭ স্বয়ংক্রিয় হোয়াটসঅ্যাপ সেলস বট, পাঠাও ও স্টেডফাস্ট কুরিয়ার ইন্টিগ্রেশন, রিয়েল-টাইম সিআরএম ডেটাবেস সিঙ্ক এবং আল্ট্রা-ফাস্ট নেক্সট.জেএস ওয়েবসাইট তৈরি করি।',
    category: 'পরিচিতি ও কোম্পানি',
    tag: 'পরিচিতি'
  },
  {
    id: 'faq-2',
    question: 'বাংলাদেশে হোয়াটসঅ্যাপ এআই অটোমেশন ও বট সেটআপের খরচ কত?',
    answer: 'আমাদের এককালীন সেটআপ প্যাকেজ স্টার্টার বটের জন্য ১৪,৯৯৯৳ (~$১২৯ USD), গ্রোথ অমনিচ্যানেল সিস্টেমের (কুরিয়ার ও সিআরএম সিঙ্ক সহ) জন্য ৩৪,৯৯৯৳ (~$২৯৯ USD) এবং এন্টারপ্রাইজ ফুল-স্ট্যাকের জন্য কাস্টম কোটেশন। কোনো মাসিক হিডেন ফি নেই এবং মেটার অফিশিয়াল পলিসি অনুযায়ী প্রতি মাসে প্রথম ১,০০০ কাস্টমার কনভার্সেশন ১০০% ফ্রি।',
    category: 'প্যাকেজের মূল্য ও মেটা পলিসি',
    tag: 'মূল্য'
  },
  {
    id: 'faq-3',
    question: 'পাঠাও ও স্টেডফাস্ট কুরিয়ারের সাথে স্বয়ংক্রিয় পার্সেল এন্ট্রি কীভাবে কাজ করে?',
    answer: 'হাই-টেক এন্টারপ্রাইজ বিশেষ টু-ওয়ে ওয়েবহুক কানেক্টিভিটি যুক্ত করে। ওয়েবসাইট বা হোয়াটসঅ্যাপে ক্রেতা অর্ডার কনফার্ম করার সাথে সাথেই পাঠাও বা স্টেডফাস্টে স্বয়ংক্রিয়ভাবে পার্সেল ট্র্যাকিং আইডি জেনারেট হয়ে যায় এবং কাস্টমার হোয়াটসঅ্যাপে তাৎক্ষণিক ট্র্যাকিং লিংক পেয়ে যান।',
    category: 'কুরিয়ার ও ডেলিভারি',
    tag: 'কুরিয়ার'
  },
  {
    id: 'faq-4',
    question: 'হাই-টেক এন্টারপ্রাইজের হোয়াটসঅ্যাপ বট কি বাংলা ও ইংরেজি উভয় ভাষা বোঝে?',
    answer: 'হ্যাঁ। আমাদের বটগুলো দ্বিভাষিক এনএলপি প্রযুক্তিতে পরিচালিত। কাস্টমার শুদ্ধ বাংলা, বাংলিশ কিংবা ইংরেজি — যেভাবেই প্রশ্ন করুন না কেন, বট নির্ভুলভাবে তার উদ্দেশ্য বুঝে তাৎক্ষণিক সঠিক রিপ্লাই দেয়।',
    category: 'দ্বিভাষিক এআই',
    tag: 'দ্বিভাষিক এআই'
  },
  {
    id: 'faq-5',
    question: 'অফিসিয়াল প্রপোজাল বা ফ্রি ডেমোর জন্য কীভাবে যোগাযোগ করব?',
    answer: 'আমাদের সাথে ২৪/৭ হোয়াটসঅ্যাপে কথা বলতে পারেন +880 1996-921149 নম্বরে, ইমেইল করতে পারেন hightechenterprisebd@gmail.com ঠিকানায় অথবা সাভার, ঢাকা ১২১৭ অফিসে সরাসরি ভিজিট করতে পারেন।',
    category: 'যোগাযোগ ও সাভার অফিস',
    tag: 'যোগাযোগ'
  }
];

// Exact 1:1 fallback matching the Schema.org FAQPage data defined in index.html
const DEFAULT_SCHEMA_FAQS: SchemaFaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is High-Tech Enterprise and what automation services do they provide?',
    answer: 'High-Tech Enterprise (High-Tech Enterprise BD Ltd., hightechenterprise.xyz) is a premier automation and digital systems engineering agency based in Savar, Dhaka, Bangladesh. They specialize in 24/7 WhatsApp AI Auto-Reply bots using the official Meta Cloud API, courier integrations (Pathao and Steadfast), CRM data synchronization, and high-performance web development.',
    category: 'Overview & Agency',
    tag: 'Overview'
  },
  {
    id: 'faq-2',
    question: 'How much does WhatsApp AI Automation and bot setup cost in Bangladesh?',
    answer: 'One-time system setup tiers start from ৳12,000 (~$105 USD) for the Starter Bot, ৳24,000 (~$210 USD) for the Growth Omnichannel system (with courier sync), and ৳45,000 (~$390 USD) for the Enterprise Cluster. In addition, Meta provides the first 1,000 customer service conversations per month 100% free under their official Cloud API policy.',
    category: 'Pricing & Meta Policy',
    tag: 'Pricing'
  },
  {
    id: 'faq-3',
    question: 'How does courier webhook integration work with Pathao and Steadfast?',
    answer: 'High-Tech Enterprise deploys two-way webhook listeners that automatically generate parcel consignment tracking IDs in Pathao or Steadfast as soon as a customer confirms their order on WhatsApp or the website, and pings the customer back on WhatsApp whenever their order status updates.',
    category: 'Courier & Logistics',
    tag: 'Couriers'
  },
  {
    id: 'faq-4',
    question: 'Do High-Tech Enterprise WhatsApp bots support Bengali and English?',
    answer: 'Yes. High-Tech Enterprise bots are powered by bilingual conversational AI supporting natural language queries in both Bengali (Bangla and Banglish) and English, ensuring seamless communication with local and international customers.',
    category: 'Bilingual NLP AI',
    tag: 'Bilingual AI'
  },
  {
    id: 'faq-5',
    question: 'How can I contact High-Tech Enterprise for an official proposal?',
    answer: 'You can reach High-Tech Enterprise 24/7 via WhatsApp at +880 1996-921149, via email at hightechenterprisebd@gmail.com, or through their official website at https://hightechenterprise.xyz.',
    category: 'Contact & Savar HQ',
    tag: 'Direct Contact'
  }
];

function categorizeQuestion(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes('cost') || lower.includes('price') || lower.includes('bdt') || lower.includes('fee')) {
    return 'Pricing & Meta Policy';
  }
  if (lower.includes('courier') || lower.includes('pathao') || lower.includes('steadfast')) {
    return 'Courier & Logistics';
  }
  if (lower.includes('bengali') || lower.includes('bangla') || lower.includes('english') || lower.includes('language')) {
    return 'Bilingual NLP AI';
  }
  if (lower.includes('contact') || lower.includes('proposal') || lower.includes('reach')) {
    return 'Contact & Savar HQ';
  }
  return 'Overview & Agency';
}

function getTagForQuestion(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes('cost') || lower.includes('price')) return 'Pricing';
  if (lower.includes('courier') || lower.includes('pathao')) return 'Couriers';
  if (lower.includes('bengali') || lower.includes('bangla')) return 'Bilingual AI';
  if (lower.includes('contact') || lower.includes('reach')) return 'Contact';
  return 'Overview';
}

export const FaqAccordion: React.FC = () => {
  const { language } = useLanguage();
  const isBn = language === 'bn';
  const initialFaqs = isBn ? BN_SCHEMA_FAQS : DEFAULT_SCHEMA_FAQS;
  const [faqs, setFaqs] = useState<SchemaFaqItem[]>(initialFaqs);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-1']));
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string>('All');
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Sync when language changes
  useEffect(() => {
    setFaqs(isBn ? BN_SCHEMA_FAQS : DEFAULT_SCHEMA_FAQS);
    setActiveTag(isBn ? 'সব' : 'All');
  }, [isBn]);

  // Dynamically extract and sync with the Schema.org FAQ data in index.html for EN
  useEffect(() => {
    if (isBn) return; // Keep Bengali curated FAQs for bn
    try {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of Array.from(scripts)) {
        const text = script.textContent || '';
        if (!text.includes('FAQPage')) continue;

        const parsed = JSON.parse(text);
        const graph = Array.isArray(parsed)
          ? parsed
          : parsed['@graph']
          ? parsed['@graph']
          : [parsed];

        const faqNode = graph.find(
          (node: any) =>
            node &&
            (node['@type'] === 'FAQPage' ||
              (Array.isArray(node['@type']) && node['@type'].includes('FAQPage')))
        );

        if (faqNode && Array.isArray(faqNode.mainEntity) && faqNode.mainEntity.length > 0) {
          const extracted: SchemaFaqItem[] = faqNode.mainEntity.map((item: any, idx: number) => {
            const q = item.name || '';
            const a = item.acceptedAnswer?.text || '';
            return {
              id: `faq-${idx + 1}`,
              question: q,
              answer: a,
              category: categorizeQuestion(q),
              tag: getTagForQuestion(q)
            };
          });
          setFaqs(extracted);
          break;
        }
      }
    } catch (err) {
      console.debug('Using verified Schema.org FAQ data array', err);
    }
  }, [isBn]);

  const allTagLabel = isBn ? 'সব' : 'All';

  const tags = useMemo(() => {
    const set = new Set<string>();
    faqs.forEach(f => set.add(f.tag));
    return [allTagLabel, ...Array.from(set)];
  }, [faqs, allTagLabel]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(item => {
      const matchesTag = activeTag === allTagLabel || item.tag === activeTag;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        q === '' || 
        item.question.toLowerCase().includes(q) || 
        item.answer.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q);
      return matchesTag && matchesSearch;
    });
  }, [faqs, activeTag, searchQuery, allTagLabel]);

  const toggleItem = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map(f => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const handleCopy = (text: string, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  // Keyboard navigation for WAI-ARIA Accordion
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const list = filteredFaqs;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % list.length;
      triggerRefs.current[list[nextIndex].id]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + list.length) % list.length;
      triggerRefs.current[list[prevIndex].id]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      triggerRefs.current[list[0].id]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      triggerRefs.current[list[list.length - 1].id]?.focus();
    }
  };

  return (
    <section 
      id="faq" 
      className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24"
      aria-labelledby="faq-heading"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#080C14] border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Background Radial Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>{isBn ? 'স্কিমা.অর্গ নলেজবেস • সাধারণ জিজ্ঞাসা ও উত্তর' : 'SCHEMA.ORG ACCORDION • AEO & ACCESSIBILITY HUB'}</span>
            </div>
            
            <h2 
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight"
            >
              {isBn ? (
                <>
                  প্রায়শই জিজ্ঞাসিত <br className="hidden sm:inline" />
                  <span className="text-[#FF7A00]">প্রশ্ন ও নির্ভরযোগ্য উত্তর।</span>
                </>
              ) : (
                <>
                  Frequently Answered <br className="hidden sm:inline" />
                  <span className="text-[#FF7A00]">Questions & Schema Data.</span>
                </>
              )}
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {isBn 
                ? 'হাই-টেক এন্টারপ্রাইজের অটোমেশন, মেটা ক্লাউড এপিআই বট, কুরিয়ার ওয়েবহুক ও খরচ সম্পর্কিত সরাসরি যাচাইকৃত উত্তর।'
                : <>Official answers synchronized 1:1 with the verified Schema.org <code className="text-zinc-200 bg-white/5 px-1.5 py-0.5 rounded font-mono text-[11px]">FAQPage</code> graph defined in <code className="text-zinc-200 bg-white/5 px-1.5 py-0.5 rounded font-mono text-[11px]">index.html</code>. Structured for users, screen readers, and Answer Engines.</>
              }
            </p>
          </div>

          {/* Quick Expand / Collapse Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={expandAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white text-xs font-mono border border-white/10 transition-colors"
              title={isBn ? 'সব প্রশ্ন খুলুন' : 'Expand all questions'}
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>{isBn ? 'সব খুলুন' : 'Expand All'}</span>
            </button>
            <button
              onClick={collapseAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white text-xs font-mono border border-white/10 transition-colors"
              title={isBn ? 'সব প্রশ্ন বন্ধ করুন' : 'Collapse all questions'}
            >
              <Minimize2 className="w-3.5 h-3.5 text-zinc-400" />
              <span>{isBn ? 'সব বন্ধ করুন' : 'Collapse'}</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Tag Filters */}
        <div className="relative z-10 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isBn ? 'প্রশ্ন খুঁজুন (যেমন: মেটা এপিআই, পাঠাও, খরচ, বাংলা বট)...' : 'Search Schema.org questions (e.g. Meta API, Pathao, pricing, Bengali)...'}
                aria-label={isBn ? 'প্রশ্ন অনুসন্ধান' : 'Search frequently asked questions'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF7A00] transition-colors font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white font-mono"
                >
                  {isBn ? 'মুছুন' : 'Clear'}
                </button>
              )}
            </div>

            {/* Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isBn ? 'যাচাইকৃত অফিসিয়াল স্কিমা ডেটা' : 'Schema.org JSON-LD Verified'}</span>
            </div>
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1" role="toolbar" aria-label="Filter FAQ categories">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeTag === tag
                    ? 'bg-[#FF7A00] text-zinc-950 font-bold shadow-md shadow-[#FF7A00]/20'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* WAI-ARIA Compliant Accordion Items */}
        <div className="relative z-10 space-y-3" role="presentation">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 px-6 rounded-2xl bg-black/40 border border-white/5 text-zinc-400 text-xs sm:text-sm">
              <p>{isBn ? `"${searchQuery}" এর সাথে মিলে এমন কোনো প্রশ্নোত্তর পাওয়া যায়নি।` : `No questions matched your search query "${searchQuery}".`}</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTag(allTagLabel); }}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-[#FF7A00] hover:underline"
              >
                <span>{isBn ? 'সার্চ ফিল্টার রিসেট করুন' : 'Reset search filters'}</span>
              </button>
            </div>
          ) : (
            filteredFaqs.map((item, index) => {
              const isOpen = openIds.has(item.id);
              const triggerId = `faq-trigger-${item.id}`;
              const panelId = `faq-panel-${item.id}`;
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen 
                      ? 'bg-black/70 border-[#FF7A00]/30 shadow-lg shadow-black/50' 
                      : 'bg-black/40 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <h3>
                    <button
                      ref={(el) => { triggerRefs.current[item.id] = el; }}
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded-2xl group transition-colors"
                    >
                      <div className="flex items-start sm:items-center gap-3 min-w-0">
                        <span className="font-mono text-xs font-bold text-[#FF7A00] bg-white/[0.04] px-2 py-1 rounded border border-white/5 shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="space-y-1 min-w-0">
                          <span 
                            itemProp="name" 
                            className="font-bold text-sm sm:text-base text-white group-hover:text-[#FF7A00] transition-colors font-['Outfit',sans-serif] block leading-snug"
                          >
                            {item.question}
                          </span>
                          <span className="inline-block text-[10px] font-mono text-zinc-300">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-300 hidden sm:inline-block">
                          {isOpen ? (isBn ? 'সংক্ষিপ্ত করুন' : 'Collapse') : (isBn ? 'বিস্তারিত দেখুন' : 'Expand')}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 group-hover:text-white transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#FF7A00]' : ''
                          }`}
                        />
                      </div>
                    </button>
                  </h3>

                  {/* Accordion Expandable Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        itemScope 
                        itemProp="acceptedAnswer" 
                        itemType="https://schema.org/Answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 space-y-4">
                          <p itemProp="text" className="pt-2 text-zinc-300 leading-relaxed font-sans">
                            {item.answer}
                          </p>

                          {/* Metadata, Citation, & Copy Link Toolbar */}
                          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5 text-[11px] font-mono">
                            <div className="flex items-center gap-2 text-zinc-300">
                              <FileCode2 className="w-3 h-3 text-[#FF7A00]" />
                              <span>{isBn ? 'উৎস: ভেরিফায়েড স্কিমা নলেজবেস' : 'Source: index.html • ld+json FAQPage Graph'}</span>
                            </div>

                            <button
                              onClick={(e) => handleCopy(item.answer, item.id, e)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-all border border-white/5"
                              title={isBn ? 'উত্তর কপি করুন' : 'Copy factual answer to clipboard'}
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400 font-semibold">{isBn ? 'কপি হয়েছে' : 'Answer Copied'}</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>{isBn ? 'উত্তর কপি করুন' : 'Cite / Copy Answer'}</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help & Direct Technical Contact Callout */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-zinc-400 flex items-center gap-2 text-center sm:text-left">
            <CornerDownRight className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 hidden sm:inline" />
            <span>{isBn ? 'আপনার কি আরও কোনো প্রশ্ন রয়েছে? আমাদের সাভার টেকনিক্যাল ইঞ্জিনিয়ারিং টিমের সাথে কথা বলুন:' : 'Still have a question? Chat with our Savar technical engineering team:'}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-semibold transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{isBn ? 'হোয়াটসঅ্যাপ হটলাইন' : 'WhatsApp Hotline'}</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}?subject=Question%20about%20High-Tech%20Enterprise`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 transition-all"
            >
              <span>{isBn ? 'ইমেইল সাপোর্ট' : 'Email Support'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

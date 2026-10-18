import React, { useRef, useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TechEcosystem } from '../components/TechEcosystem';
import { ServicesSection } from '../components/ServicesSection';
import { WhatsAppSimulator } from '../components/WhatsAppSimulator';
import { Testimonials } from '../components/Testimonials';
import { PricingSection } from '../components/PricingSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { ContactSection } from '../components/ContactSection';
import { PageId, LiveDemoItem } from '../types';
import { LIVE_DEMOS_DATA } from '../data/liveDemos';
import { COMPANY_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { 
  ArrowRight, 
  ExternalLink, 
  Play, 
  Zap, 
  Globe, 
  Layers, 
  Star, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Smartphone,
  Sparkles,
  Barcode,
  RefreshCw,
  MessageSquareCode,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Tv
} from 'lucide-react';

interface HomePageProps {
  onOpenDemoModal: () => void;
  onNavigate: (page: PageId) => void;
  onLaunchLiveDemo: (demo: LiveDemoItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onOpenDemoModal, 
  onNavigate, 
  onLaunchLiveDemo 
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // Reference the flagship client productions (eCommerce, Corporate & Creator Channels)
  const urbanBeastDemo = LIVE_DEMOS_DATA.find(d => d.id === 'demo-urban-beast-bd') || LIVE_DEMOS_DATA[4] || LIVE_DEMOS_DATA[0];
  const optimumDemo = LIVE_DEMOS_DATA.find(d => d.id === 'demo-optimum-power') || LIVE_DEMOS_DATA[1];
  const aumechoDemo = LIVE_DEMOS_DATA.find(d => d.id === 'demo-aumecho-sanctuary') || LIVE_DEMOS_DATA[3] || LIVE_DEMOS_DATA[0];
  const drutoBazarDemo = LIVE_DEMOS_DATA.find(d => d.id === 'demo-druto-bazar-bd') || LIVE_DEMOS_DATA[2] || LIVE_DEMOS_DATA[0];
  const oneOutfitDemo = LIVE_DEMOS_DATA.find(d => d.id === 'demo-one-outfit') || LIVE_DEMOS_DATA[5] || LIVE_DEMOS_DATA[0];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const featuredProjects = [
    {
      item: urbanBeastDemo,
      badgeText: language === 'bn' ? '★ লাইভ ই-কমার্স ফ্ল্যাগশিপ' : '★ Featured Live eCommerce',
      badgeIcon: ShoppingBag,
      badgeStyle: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
      accentBorder: 'hover:border-amber-500/40',
      title: 'Urban Beast BD',
      industry: language === 'bn' ? 'স্ট্রিটওয়্যার ফ্যাশন ও আধুনিক ড্রপ কমার্স' : 'ShopFlow™ Streetwear Apparel & Drop Commerce',
      description: language === 'bn'
        ? 'তরুণ প্রজন্মের জন্য আধুনিক স্ট্রিটওয়্যার ফ্যাশন প্ল্যাটফর্ম — ০.৬৮ সেকেন্ডের লোড স্পিড, মোবাইল-ফার্স্ট ক্যাটালগ এবং বিকাশ-পাঠাও সরাসরি সিঙ্ক সুবিধা।'
        : 'Modern direct-to-consumer apparel commerce platform with high-converting lookbooks, instant bKash checkout, and automated Steadfast/Pathao courier delivery.',
      metric1Label: t.carousel.speedBenchmark,
      metric1Value: language === 'bn' ? '০.৬৮ সেকেন্ড' : '0.68s FCP',
      metric2Label: t.carousel.conversionGain,
      metric2Value: language === 'bn' ? '+৩৪% কনভার্সন বৃদ্ধি' : '+34% Conversions',
    },
    {
      item: optimumDemo,
      badgeText: language === 'bn' ? 'শিল্প কারখানা ফ্ল্যাগশিপ' : 'Featured Industrial Flagship',
      badgeIcon: Star,
      badgeStyle: 'text-[#FF7A00] bg-[#FF7A00]/10 border-[#FF7A00]/30',
      accentBorder: 'hover:border-[#FF7A00]/40',
      title: 'Optimum Power Engineering',
      industry: language === 'bn' ? 'হেভি ইলেকট্রিক্যাল সাবস্টেশন ও পাওয়ার গ্রিড' : 'Heavy Electrical Substations & Power Grid',
      description: language === 'bn'
        ? 'বাংলাদেশের শীর্ষস্থানীয় হেভি ইলেকট্রিক্যাল ও সাবস্টেশন ইঞ্জিনিয়ারিং প্ল্যাটফর্ম, টেকনিক্যাল ক্যাটালগ ও সরাসরি হোয়াটসঅ্যাপ আরএফকিউ সুবিধা।'
        : 'Corporate web engineering platform for heavy electrical and substation solutions in Bangladesh with technical catalog downloads and instant WhatsApp B2B RFQ routing.',
      metric1Label: language === 'bn' ? 'মোবাইল পারফরম্যান্স' : 'Mobile Performance',
      metric1Value: language === 'bn' ? '৯৯.৪% স্কোর' : '99.4% Score',
      metric2Label: language === 'bn' ? 'বি২বি কনভার্সন' : 'B2B Conversion',
      metric2Value: language === 'bn' ? '৩.৮ গুণ আরএফকিউ' : '3.8x RFQ Volume',
    },
    {
      item: aumechoDemo,
      badgeText: language === 'bn' ? '★ ইউটিউব চ্যানেল ওয়েবসাইট' : '★ YouTube Channel Website',
      badgeIcon: Tv,
      badgeStyle: 'text-rose-300 bg-rose-950/40 border-rose-500/30',
      accentBorder: 'hover:border-rose-500/40',
      title: 'AumEcho Sanctuary',
      industry: language === 'bn' ? 'ইউটিউব মিডিয়া ও বৈদিক অডিও হাব' : 'YouTube Media & Vedic Audio Hub',
      description: language === 'bn'
        ? 'AumEcho ইউটিউব চ্যানেলের জন্য বিশেষায়িত ডিজিটাল স্যাঙ্কচুয়ারি — সংস্কৃত মন্ত্র, হিন্দি ভজন, ১০৮ বার জপ কাউন্টার ও অডিও-ভিজ্যুয়াল মিডিয়া।'
        : 'Atmospheric digital sanctuary for the AumEcho YouTube creator channel with Sanskrit mantras, Hindi bhajans, 108x Vedic japa counters, and tranquil audio-visual streams.',
      metric1Label: language === 'bn' ? 'জপ কাউন্টার' : 'Spiritual Tech',
      metric1Value: language === 'bn' ? '১০৮ বার জপ কাউন্টার' : '108x Japa Chants',
      metric2Label: language === 'bn' ? 'মিডিয়া স্ট্রিম' : 'Media Stream',
      metric2Value: language === 'bn' ? '০.৪ সেকেন্ডের কম অডিও সিঙ্ক' : 'Sub-0.4s Audio Sync',
    },
    {
      item: drutoBazarDemo,
      badgeText: language === 'bn' ? '★ ই-কমার্স গ্রোসারি প্ল্যাটফর্ম' : '★ eCommerce Grocery Platform',
      badgeIcon: ShoppingBag,
      badgeStyle: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
      accentBorder: 'hover:border-emerald-500/40',
      title: 'Druto Bazar BD',
      industry: language === 'bn' ? 'অনলাইন গ্রোসারি ও প্যান্ট্রি সুপারস্টোর' : 'ShopFlow™ Online Grocery & Pantry Superstore',
      description: language === 'bn'
        ? '৩০ মিনিটের এক্সপ্রেস ডেলিভারি, মেটা হোয়াটসঅ্যাপ ১-ট্যাপ কার্ট ও অটোমেটেড অর্ডার কনফার্মেশন সহ পূর্ণাঙ্গ ই-কমার্স।'
        : 'Full-stack headless grocery platform with 30-minute instant dispatch dispatch, WhatsApp 1-tap cart checkout, and dynamic courier webhook sync.',
      metric1Label: language === 'bn' ? 'অর্ডার প্রসেসিং' : 'Order Processing',
      metric1Value: language === 'bn' ? '৩০ মিনিট দ্রুত ডেলিভারি' : '30-Min Fast Dispatch',
      metric2Label: language === 'bn' ? 'কার্ট অটোমーション' : 'Cart Automation',
      metric2Value: language === 'bn' ? '১-ট্যাপ হোয়াটসঅ্যাপ কার্ট' : '1-Tap WhatsApp Cart',
    },
    {
      item: oneOutfitDemo,
      badgeText: language === 'bn' ? '★ ফ্যাশন বুটিক প্ল্যাটফর্ম' : '★ Fashion Boutique',
      badgeIcon: ShoppingBag,
      badgeStyle: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
      accentBorder: 'hover:border-purple-500/40',
      title: 'One Outfit BD',
      industry: language === 'bn' ? 'ফ্যাশন ও লাইফস্টাইল রিটেল বুটিক' : 'Fashion & Lifestyle Retail Boutique',
      description: language === 'bn'
        ? 'প্রিমিয়াম ফ্যাশন কালেকশন, মেটা হোয়াটসঅ্যাপ ক্যাটালগ ও ডিজিটাল অর্ডার ট্র্যাকিং।'
        : 'Curated apparel lookbook platform engineered for rapid collection browsing and seamless Instagram/WhatsApp social conversions.',
      metric1Label: t.carousel.speedBenchmark,
      metric1Value: language === 'bn' ? '০.৫৯ সেকেন্ড' : '0.59s FCP',
      metric2Label: t.carousel.conversionGain,
      metric2Value: language === 'bn' ? '+৪১% মোবাইল অর্ডার' : '+41% Mobile Orders',
    }
  ];

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);

    const firstCard = carouselRef.current.firstElementChild as HTMLElement | null;
    if (firstCard) {
      const cardWidthWithGap = firstCard.offsetWidth + 24; // 24px is gap-6
      const currentIndex = Math.round(scrollLeft / cardWidthWithGap);
      setActiveCardIndex(Math.min(featuredProjects.length - 1, Math.max(0, currentIndex)));
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleScrollPrev = () => {
    if (!carouselRef.current) return;
    const firstCard = carouselRef.current.firstElementChild as HTMLElement | null;
    const cardWidthWithGap = (firstCard?.offsetWidth || 360) + 24;
    carouselRef.current.scrollBy({ left: -cardWidthWithGap, behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    if (!carouselRef.current) return;
    const firstCard = carouselRef.current.firstElementChild as HTMLElement | null;
    const cardWidthWithGap = (firstCard?.offsetWidth || 360) + 24;
    carouselRef.current.scrollBy({ left: cardWidthWithGap, behavior: 'smooth' });
  };

  const handleScrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const targetCard = carouselRef.current.children[index] as HTMLElement | undefined;
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. Procedural WebGL2 Cosmic Hero (Minimal, Web Dev 1st, Autonomous Scale) */}
      <Hero 
        trustBadge={{
          text: t.hero.trustBadge,
          icons: ["⚡", "★", "✦"]
        }}
        headline={{
          line1: t.hero.headlineLine1,
          line2: t.hero.headlineLine2
        }}
        subtitle={t.hero.subtitle}
        buttons={{
          primary: {
            text: t.hero.primaryCta,
            onClick: () => {
              const el = document.getElementById('featured-work');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          },
          secondary: {
            text: t.hero.secondaryCta,
            onClick: onOpenDemoModal
          }
        }}
        onOpenDemoModal={onOpenDemoModal} 
        onNavigate={onNavigate} 
      />

      {/* 2. Seamless Tech Ecosystem & API Integrations Marquee */}
      <TechEcosystem />

      {/* 3. Core Information 1: Web Development & Client Flagships (Priority 1) */}
      <section id="featured-work" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono">
              <Globe className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>{t.homeSections.featuredWork.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
              {t.homeSections.featuredWork.titleLine1} <br className="hidden sm:inline" />
              <span className="text-[#FF7A00]">{t.homeSections.featuredWork.titleLine2}</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.homeSections.featuredWork.description}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={handleScrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous Project"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] disabled:opacity-30 disabled:hover:bg-transparent text-white flex items-center justify-center transition-all border border-white/5 hover:border-[#FF7A00]/40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-[#FF7A00]" />
              </button>
              <button
                onClick={handleScrollNext}
                disabled={!canScrollRight}
                aria-label="Next Project"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] disabled:opacity-30 disabled:hover:bg-transparent text-white flex items-center justify-center transition-all border border-white/5 hover:border-[#FF7A00]/40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-[#FF7A00]" />
              </button>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs sm:text-sm font-semibold border border-white/10 hover:border-[#FF7A00]/40 transition-all group shrink-0"
            >
              <span>{t.carousel.viewAll}</span>
              <ArrowRight className="w-4 h-4 text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Container (min 3 will show in a row on desktop) */}
        <div className="relative">
          {/* Scrollable Carousel Track */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 -mx-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProjects.map((project) => {
              const BadgeIcon = project.badgeIcon;
              return (
                <div
                  key={project.item.id}
                  className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start rounded-3xl bg-[#080C14] border border-white/10 ${project.accentBorder} transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl group`}
                >
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3.5">
                      {/* Badge and Status */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${project.badgeStyle}`}>
                          <BadgeIcon className="w-3 h-3 text-[#FF7A00] fill-current" />
                          <span>{project.badgeText}</span>
                        </span>
                        <span className="text-[11px] font-mono text-zinc-300 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>{language === 'bn' ? 'লাইভ' : 'Live'}</span>
                        </span>
                      </div>

                      {/* Title & Industry */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit',sans-serif] group-hover:text-[#FF7A00] transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-zinc-400 mt-1 line-clamp-1">
                          {project.industry}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Metric Highlights */}
                    <div className="grid grid-cols-2 gap-2.5 pt-3 font-mono text-xs border-t border-white/5">
                      <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                        <div className="text-zinc-500 text-[9px] uppercase tracking-wider">{project.metric1Label}</div>
                        <div className="text-white font-bold text-xs sm:text-sm mt-0.5 flex items-center gap-1">
                          <Zap className="w-3 h-3 text-[#FF7A00]" />
                          <span>{project.metric1Value}</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                        <div className="text-zinc-500 text-[9px] uppercase tracking-wider">{project.metric2Label}</div>
                        <div className="text-white font-bold text-xs sm:text-sm mt-0.5 truncate">
                          {project.metric2Value}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Image Preview with Action Overlay */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-t border-white/10">
                    <img
                      src={project.item.previewImageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent"></div>
                    
                    {/* Action Buttons Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                      <a
                        href={project.item.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg transition-all"
                      >
                        <span>{t.carousel.visitLive}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => onLaunchLiveDemo(project.item)}
                        className="py-2.5 px-3 rounded-xl bg-black/80 hover:bg-black text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                      >
                        <Play className="w-3 h-3 text-[#FF7A00] fill-current" />
                        <span>{t.carousel.simulator}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination & Indicator Controls */}
          <div className="mt-6 flex items-center justify-center gap-4 px-2">
            <div className="flex items-center gap-2">
              {featuredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCardIndex === idx 
                      ? 'w-7 bg-[#FF7A00] shadow-[0_0_8px_rgba(255,122,0,0.6)]' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 pl-2 border-l border-white/10">
              <span className="text-white font-bold">{activeCardIndex + 1}</span>
              <span>/</span>
              <span>{featuredProjects.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Information 2: Specialized Engineering & Services Matrix */}
      <ServicesSection onOpenDemoModal={onOpenDemoModal} />

      {/* 5. Core Information 3: Autonomous WhatsApp Conversational Engine (Priority 2) with Embedded Simulator */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#080C14] border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl space-y-4 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono">
              <MessageSquareCode className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>{t.homeSections.automationPillars.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
              {t.homeSections.automationPillars.titleLine1} <br />
              <span className="text-[#FF7A00]">{t.homeSections.automationPillars.titleLine2}</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.homeSections.automationPillars.description}
            </p>
          </div>

          {/* 3 Focused Automation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-14">
            {/* Automation Card 1 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                {t.homeSections.automationPillars.card1Title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {t.homeSections.automationPillars.card1Desc}
              </p>
              <div className="pt-2 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>{t.homeSections.automationPillars.card1Badge}</span>
              </div>
            </div>

            {/* Automation Card 2 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                {t.homeSections.automationPillars.card2Title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {t.homeSections.automationPillars.card2Desc}
              </p>
              <div className="pt-2 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>{t.homeSections.automationPillars.card2Badge}</span>
              </div>
            </div>

            {/* Automation Card 3 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                {t.homeSections.automationPillars.card3Title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {t.homeSections.automationPillars.card3Desc}
              </p>
              <div className="pt-2 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>{t.homeSections.automationPillars.card3Badge}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Live WhatsApp Simulator (Interactive test right on page) */}
      <WhatsAppSimulator onOpenDemoModal={onOpenDemoModal} />

      {/* 6. Core Information 4: Smart Cloud POS & Omnichannel Inventory Sync */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#080C14] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono">
              <Barcode className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>{t.homeSections.posEcosystem.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
              {t.homeSections.posEcosystem.titleLine1} <br />
              <span className="text-[#FF7A00]">{t.homeSections.posEcosystem.titleLine2}</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.homeSections.posEcosystem.description}
            </p>
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="text-zinc-500 text-[10px] uppercase">{t.homeSections.posEcosystem.latencyLabel}</div>
                <div className="text-white font-bold text-sm mt-0.5 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>&lt; 150ms</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="text-zinc-500 text-[10px] uppercase">{t.homeSections.posEcosystem.barcodeLabel}</div>
                <div className="text-white font-bold text-sm mt-0.5">
                  {t.homeSections.posEcosystem.barcodeValue}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-zinc-500 text-[10px] uppercase">{t.homeSections.posEcosystem.offlineLabel}</div>
                <div className="text-white font-bold text-sm mt-0.5">
                  {t.homeSections.posEcosystem.offlineValue}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={() => onNavigate('demos')}
              className="py-3.5 px-6 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t.homeSections.posEcosystem.launchEmulatorBtn}</span>
            </button>
            <button
              onClick={onOpenDemoModal}
              className="py-3.5 px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs sm:text-sm border border-white/10 hover:border-white/20 transition-all text-center"
            >
              {t.homeSections.posEcosystem.requestPosBtn}
            </button>
          </div>
        </div>
      </section>

      {/* 7. Core Information 5: Proven 3-Step Execution Methodology */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono">
            <span>{t.homeSections.methodology.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
            {t.homeSections.methodology.title}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            {t.homeSections.methodology.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#080C14] border border-white/10 relative space-y-3">
            <span className="text-2xl font-mono font-black text-zinc-600">01</span>
            <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
              {t.homeSections.methodology.step1Title}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {t.homeSections.methodology.step1Desc}
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#080C14] border border-[#FF7A00]/30 relative space-y-3">
            <span className="text-2xl font-mono font-black text-[#FF7A00]">02</span>
            <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
              {t.homeSections.methodology.step2Title}
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {t.homeSections.methodology.step2Desc}
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#080C14] border border-white/10 relative space-y-3">
            <span className="text-2xl font-mono font-black text-zinc-600">03</span>
            <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
              {t.homeSections.methodology.step3Title}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {t.homeSections.methodology.step3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 8. Core Information 6: Minimal High-Signal Proof & Key Benchmarks */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-[#080C14] border border-white/10 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-mono font-black text-white">{t.homeSections.benchmarks.speedValue}</div>
            <div className="text-xs font-mono text-[#FFA149]">{t.homeSections.benchmarks.speedLabel}</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#080C14] border border-white/10 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-mono font-black text-white">{t.homeSections.benchmarks.autoValue}</div>
            <div className="text-xs font-mono text-zinc-400">{t.homeSections.benchmarks.autoLabel}</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#080C14] border border-white/10 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-mono font-black text-white">{t.homeSections.benchmarks.satisfactionValue}</div>
            <div className="text-xs font-mono text-zinc-400">{t.homeSections.benchmarks.satisfactionLabel}</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#080C14] border border-white/10 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-mono font-black text-[#FFA149]">{t.homeSections.benchmarks.prototypeValue}</div>
            <div className="text-xs font-mono text-zinc-400">{t.homeSections.benchmarks.prototypeLabel}</div>
          </div>
        </div>
      </section>

      {/* 9. Core Information 7: Verified Social Proof & Leadership Testimonials */}
      <Testimonials />

      {/* 10. Core Information 8: Transparent Investment Packages & TCO Model */}
      <PricingSection onOpenDemoModal={onOpenDemoModal} />

      {/* 11. Dedicated Schema.org FAQ Accordion Component (Populated from index.html JSON-LD Graph) */}
      <FaqAccordion />

      {/* 12. Core Information 10: Executive Contact, Savar Headquarters & Free Prototype Form */}
      <ContactSection />

    </div>
  );
};

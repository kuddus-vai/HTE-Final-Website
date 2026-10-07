import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
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
  const { language } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    MessageSquareCode: <MessageSquareCode className="w-6 h-6 text-[#FF7A00]" />,
    Globe: <Globe className="w-6 h-6 text-zinc-300 group-hover:text-[#FF7A00] transition-colors" />,
    Workflow: <Workflow className="w-6 h-6 text-zinc-300 group-hover:text-[#FF7A00] transition-colors" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-zinc-300 group-hover:text-[#FF7A00] transition-colors" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-zinc-300 group-hover:text-[#FF7A00] transition-colors" />,
    Cpu: <Cpu className="w-6 h-6 text-zinc-300 group-hover:text-[#FF7A00] transition-colors" />
  };

  const bnServicesData: Record<string, {
    title: string;
    tagline: string;
    description: string;
    features: string[];
    metrics: string;
  }> = {
    'whatsapp-automation': {
      title: 'হোয়াটসঅ্যাপ অটো-রিপ্লাই ও কনভার্সেশনাল এআই',
      tagline: '৭০% কাস্টমার প্রশ্নের জন্য কোনো মানুষের প্রয়োজন নেই',
      description: 'আপনার হোয়াটসঅ্যাপকে ২৪/৭ স্বয়ংক্রিয় সেলস ও কাস্টমার কেয়ার মেশিনে পরিণত করুন। অর্ডার গ্রহণ, এফএকিউ রিপ্লাই, ডেলিভারি ট্র্যাকিং এবং লিড কোয়ালিফিকেশন সম্পূর্ণ স্বয়ংক্রিয়।',
      features: [
        'অফিসিয়াল মেটা ক্লাউড হোয়াটসঅ্যাপ এপিআই ইন্টিগ্রেশন',
        'বাংলা, বাংলিশ ও ইংরেজি ভাষায় সাবলীল এনএলপি বোঝাপড়া',
        'স্বয়ংক্রিয় প্রোডাক্ট ক্যাটালগ ও ১-ক্লিক কার্ট চেকআউট',
        'প্রয়োজনীয় মুহূর্তে সরাসরি হিউম্যান এজেন্টের কাছে হ্যান্ডওভার'
      ],
      metrics: '৭০% কাস্টমার সাপোর্ট চাপ দূর করে'
    },
    'high-performance-web': {
      title: 'বিদ্যুৎগতির আধুনিক ওয়েব প্ল্যাটফর্ম',
      tagline: 'আপনার ওয়েবসাইট কোনো সাধারণ ব্রোশিউর নয়, একটি লাভজনক এসেট',
      description: 'আমরা নেক্সট.জেএস ১৫ ও আধুনিক ফ্রেমওয়ার্কে আল্ট্রা-ফাস্ট ওয়েবসাইট তৈরি করি, যা গুগল কোর ওয়েব ভাইটালস এবং সর্বোচ্চ বিক্রয় কনভার্সনের জন্য অপ্টিমাইজড।',
      features: [
        'মোবাইল ৪জি/৫জি নেটওয়ার্কে ০.৫ সেকেন্ডে লোড স্পিড',
        'গুগল সার্চ ও সোশ্যাল মিডিয়ার জন্য নিখুঁত এসইও অপ্টিমাইজেশন',
        'সর্বোচ্চ বিক্রয় নিশ্চিত করতে কনভার্সন-ফার্স্ট ডিজাইন',
        'PWA সাপোর্ট, অফলাইন ক্যাশিং ও রেসপন্সিভ লেআউট'
      ],
      metrics: '৩.৪ গুণ বেশি কনভার্সন রেট'
    },
    'crm-autonomous-workflows': {
      title: 'স্বয়ংক্রিয় সিআরএম ও বিজনেস ওয়ার্কফ্লো',
      tagline: 'আমরা আলাদা আলাদা টুল নয়, সম্পূর্ণ নার্ভাস সিস্টেম তৈরি করি',
      description: 'হাবস্পট, জোহো, সেলসফোর্স, গুগল শিটস এবং আপনার ইন্টারনাল ডেটাবেসের মধ্যে সম্পূর্ণ মানুষের স্পর্শ ছাড়া স্বয়ংক্রিয় ডেটা সিঙ্ক।',
      features: [
        'স্বয়ংক্রিয় লিড স্কোরের সাথে তাৎক্ষণিক সেলস নোটিফিকেশন',
        'মেটা, ওয়েব ও ইমেইলের মধ্যে রিয়েল-টাইম ডেটা সিঙ্ক্রোনাইজেশন',
        'অটোমেটেড ইনভয়েস জেনারেশন ও পেমেন্ট রিমাইন্ডার',
        'এরর-মুক্ত ওয়েবহুক পাইপলাইন ও অটো-রিট্রাই আর্কিটেকচার'
      ],
      metrics: 'সাপ্তাহিক ২৫+ ঘণ্টা সময় বাঁচায়'
    },
    'ecommerce-sync': {
      title: 'ই-কমার্স ও কুরিয়ার ইন্টিগ্রেশন',
      tagline: 'শপিফাই, উকমার্স ও কাস্টম চেকআউট সিস্টেম',
      description: 'ইনভেন্টরি, অর্ডার এবং পেমেন্ট গেটওয়ের (বিকাশ, নগদ, এসএসএলকমার্জ) সাথে পাঠাও, স্টেডফাস্ট ও রেডএক্স কুরিয়ার এপিআইয়ের সরাসরি সংযোগ।',
      features: [
        'রিয়েল-টাইম মাল্টি-ব্রাঞ্চ স্টক ও ইনভেন্টরি সিঙ্ক',
        'হোয়াটসঅ্যাপে অ্যাবান্ডন্ড কার্ট রিকভারি (২৮% রিকভারি রেট)',
        'ওটিপি ভেরিফিকেশন সহ সরাসরি অর্ডার কনফার্মেশন',
        'অটোমেটেড রিটার্ন ও কুরিয়ার পার্সেল ট্র্যাকিং'
      ],
      metrics: '২৮% পর্যন্ত হারানো কার্ট রিকভারি'
    },
    'enterprise-resilience': {
      title: 'এন্টারপ্রাইজ সিকিউরিটি ও রেজিলিয়েন্স',
      tagline: 'অটোমেশনের জন্য প্রয়োজন সর্বোচ্চ বিশ্বাস ও নিরাপত্তা',
      description: 'আপনার প্রতিটি ইন্টারনাল ডেটাবেস এবং কাস্টমার পোর্টালের জন্য জিরো-ট্রাস্ট অ্যাক্সেস কন্ট্রোল ও এন্ড-টু-এন্ড এনক্রিপশন।',
      features: [
        'রেস্ট এবং ট্রানজিটে সম্পূর্ণ এন্ড-টু-এন্ড ডেটা এনক্রিপশন',
        'রেট-লিমিটিং ও ডিডস সুরক্ষা সহ জিরো-ট্রাস্ট এপিআই সিকিউরিটি',
        'নিখুঁত অডিট লগিং এবং টেম্পার-প্রুফ ইভেন্ট স্ট্রিম',
        'কঠোর ডেটা প্রাইভেসি স্ট্যান্ডার্ড ও সুরক্ষা নিশ্চিতকরণ'
      ],
      metrics: 'জিরো-ট্রাস্ট সুরক্ষিত আর্কিটেকচার'
    },
    'full-stack-intelligence': {
      title: 'ফুল-স্ট্যাক ক্লাউড ও এআই ইন্টেলিজেন্স',
      tagline: '২০২৬ সালের আধুনিক টেকনোলজি স্ট্যাকের ওপর নির্মিত',
      description: 'লো-লেটেন্সি এজ ডেটাবেস, সার্ভারলেস ক্লাউড আর্কিটেকচার এবং কাস্টম এলএলএম মাইক্রোসার্ভিসের মাধ্যমে বিশ্বমানের পারফরম্যান্স।',
      features: [
        'লো-লেটেন্সি এজ ডেটাবেস রাউটিং ও ক্যাশিং সিস্টেম',
        'কাস্টম এআই এজেন্ট ও আরএজি ডকুমেন্ট সার্চ',
        'টিমের জন্য অটোমেটেড ডেইলি ওয়ার্কফ্লো অপ্টিমাইজার',
        'রিয়েল-টাইম অ্যানালিটিক্স ড্যাশবোর্ড ও কেপিআই অ্যালার্ট'
      ],
      metrics: '৯৯.৯৮% মিশন-ক্রিটিক্যাল আপটাইম এসএলএ'
    }
  };

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const categories = language === 'bn' ? [
    { id: 'all', label: 'সকল সার্ভিস' },
    { id: 'automation', label: 'হোয়াটসঅ্যাপ ও এআই অটোমেশন' },
    { id: 'web', label: 'হাই-স্পিড ওয়েবসাইট' },
    { id: 'crm', label: 'সিআরএম ও অটোমেশন' },
    { id: 'security', label: 'এন্টারপ্রাইজ সিকিউরিটি' }
  ] : [
    { id: 'all', label: 'All Specialities' },
    { id: 'automation', label: 'WhatsApp & AI Automation' },
    { id: 'web', label: 'High-Performance Web' },
    { id: 'crm', label: 'CRM & Workflows' },
    { id: 'security', label: 'Enterprise Security' }
  ];

  return (
    <section id="services" className="py-24 bg-[#080B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono font-semibold text-[#FF8A33] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'সর্বোচ্চ স্কেল ও বিক্রয় বৃদ্ধির জন্য নির্মিত' : 'Engineered for Maximum Scale'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            {language === 'bn' ? (
              <>বিশেষায়িত <span className="text-[#FF7A00]">অটোমেশন ও সফটওয়্যার ইঞ্জিনিয়ারিং</span></>
            ) : (
              <>Specialized <span className="text-[#FF7A00]">Automation & Engineering</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'আমরা সাধারণ কোনো স্ট্যাটিক পেজ বা অকার্যকর টুল তৈরি করি না। আমরা এমন ডিজিটাল আর্কিটেকচার তৈরি করি যা আপনার মার্কেটিং, সেলস এবং কুরিয়ার ডেলিভারিকে একটি সম্পূর্ণ স্বয়ংক্রিয় সিস্টেমে পরিণত করে।'
              : 'We don’t build static brochures or isolated tools. We engineer resilient digital nervous systems that connect marketing, sales, and fulfillment into one autonomous flow.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
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
          {filteredServices.map((service) => {
            const bnData = bnServicesData[service.id];
            const title = language === 'bn' && bnData ? bnData.title : service.title;
            const tagline = language === 'bn' && bnData ? bnData.tagline : service.tagline;
            const description = language === 'bn' && bnData ? bnData.description : service.description;
            const features = language === 'bn' && bnData ? bnData.features : service.features;
            const metrics = language === 'bn' && bnData ? bnData.metrics : service.metrics;

            return (
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
                    <span className="text-[11px] font-mono font-medium text-zinc-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-full">
                      {metrics}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] group-hover:text-[#FFA149] transition-colors">
                    {title}
                  </h3>
                  
                  <p className="text-xs font-medium text-[#FF8A33] mt-1 mb-3">
                    {tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {features.map((feature, idx) => (
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-[#FF7A00] transition-colors cursor-pointer"
                  >
                    <span>{language === 'bn' ? 'কাস্টম সেটআপের আবেদন' : 'Request Custom Setup'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-emerald-400 hover:underline"
                  >
                    {language === 'bn' ? 'হোয়াটসঅ্যাপে কথা বলুন' : 'Ask on WhatsApp'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#141B2D] via-[#0E131F] to-[#141B2D] border border-[#FF6B00]/40 shadow-[0_20px_60px_rgba(255,107,0,0.15)] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF6B00]/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-[#FF8A33] bg-[#FF6B00]/15 border border-[#FF6B00]/30 mb-3">
                {language === 'bn' ? 'বিশেষ গ্রোথ ক্যাম্পেইন' : 'Featured Growth Campaign'}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit',sans-serif]">
                {language === 'bn' 
                  ? 'আপনার ব্যবসার কি এমন একটি ওয়েবসাইট আছে যা এর আসল সম্ভাবনাকে তুলে ধরে?'
                  : 'Does Your Business Have A Website That Matches Its Potential?'}
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
                {language === 'bn'
                  ? 'আপনার ব্র্যান্ডের জন্য সম্পূর্ণ ফ্রি ইন্টারঅ্যাকটিভ ডেমো তৈরি করে নিন — যার ভেতর থাকবে হোয়াটসঅ্যাপ অটো-রেসপন্ডার, প্রোডাক্ট ক্যাটালগ এবং সরাসরি কাস্টমার লিড নেওয়ার সুবিধা। তৈরি করুন। বৃদ্ধি করুন। সফল হোন।'
                  : 'Get a completely free interactive demo tailored for your brand with built-in WhatsApp auto-responder, product catalog, and lead capture. Build. Grow. Succeed.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{language === 'bn' ? 'ফ্রি ওয়েবসাইট ডেমো ক্লেইম করুন' : 'Claim Free Website Demo'}</span>
              </button>
              
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl font-semibold text-xs text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center"
              >
                {language === 'bn' ? `সরাসরি হোয়াটসঅ্যাপ: ${COMPANY_INFO.phone}` : `Direct WhatsApp: ${COMPANY_INFO.phone}`}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

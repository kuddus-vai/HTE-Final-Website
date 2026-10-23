import { Language } from '../context/LanguageContext';

export interface TranslationDictionary {
  navbar: {
    home: string;
    services: string;
    products: string;
    demos: string;
    pricing: string;
    about: string;
    contact: string;
    offers: string;
    freeDemoBtn: string;
    pulseMonitor: string;
    alwaysOpen: string;
    headquarters: string;
    langSwitch: string;
    liveBadge: string;
    activeLanguage: string;
  };
  hero: {
    trustBadge: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  carousel: {
    badge: string;
    title: string;
    subtitle: string;
    visitLive: string;
    simulator: string;
    viewAll: string;
    speedBenchmark: string;
    conversionGain: string;
    liveInProduction: string;
  };
  techEcosystem: {
    title: string;
    subtitle: string;
    metaBadge: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
  };
  whatsappSim: {
    badge: string;
    title: string;
    subtitle: string;
    openInWhatsApp: string;
    interactiveNotice: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    oneTimeNotice: string;
    starterTitle: string;
    growthTitle: string;
    enterpriseTitle: string;
    choosePlan: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    savarOffice: string;
    whatsappDirect: string;
    callNow: string;
    openHours: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    solutions: string;
    contactInfo: string;
    allRightsReserved: string;
    foundedInSavar: string;
  };
  emailCollector: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    brandLabel: string;
    submitBtn: string;
    submitting: string;
    successBadge: string;
    successTitle: string;
    successSubtitle: string;
    voucherTitle: string;
    voucherBenefit: string;
    talkWhatsApp: string;
    copyCode: string;
    copied: string;
    maybeLater: string;
    privacyNotice: string;
  };
  homeSections: {
    featuredWork: {
      badge: string;
      titleLine1: string;
      titleLine2: string;
      description: string;
      helperText: string;
      activeSitesLabel: string;
      activeSitesList: string;
      launchSimulatorText: string;
    };
    automationPillars: {
      badge: string;
      titleLine1: string;
      titleLine2: string;
      description: string;
      card1Title: string;
      card1Desc: string;
      card1Badge: string;
      card2Title: string;
      card2Desc: string;
      card2Badge: string;
      card3Title: string;
      card3Desc: string;
      card3Badge: string;
    };
    posEcosystem: {
      badge: string;
      titleLine1: string;
      titleLine2: string;
      description: string;
      latencyLabel: string;
      barcodeLabel: string;
      barcodeValue: string;
      offlineLabel: string;
      offlineValue: string;
      launchEmulatorBtn: string;
      requestPosBtn: string;
    };
    methodology: {
      badge: string;
      title: string;
      subtitle: string;
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
    };
    benchmarks: {
      speedValue: string;
      speedLabel: string;
      autoValue: string;
      autoLabel: string;
      satisfactionValue: string;
      satisfactionLabel: string;
      prototypeValue: string;
      prototypeLabel: string;
    };
  };
  offers: {
    badge: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    quoteCta: string;
    ugcCta: string;
    popularLabel: string;
    webHeading: string;
    webSub: string;
    landing: OfferPlanText;
    website: OfferPlanText;
    webMoreCta: string;
    ugcHeading: string;
    ugcSub: string;
    ugcSingle: OfferPlanText;
    ugcPack: OfferPlanText;
    ugcSignature: OfferPlanText;
    ugcMoreCta: string;
    fiverrHeading: string;
    fiverrSub: string;
    fiverrWebName: string;
    fiverrWebLines: string;
    fiverrWebCta: string;
    fiverrUgcName: string;
    fiverrUgcLines: string;
    fiverrUgcCta: string;
    automationHeading: string;
    automationSub: string;
    auditCta: string;
    automationItems: { name: string; blurb: string; features: string[] }[];
    protocolHeading: string;
    protocolSub: string;
    protocolSteps: { title: string; text: string }[];
    faqHeading: string;
    faqs: { q: string; a: string }[];
    finalHeading: string;
    finalSub: string;
    finalCta: string;
  };
}

export interface OfferPlanText {
  name: string;
  price: string;
  unit: string;
  blurb: string;
  features: string[];
  cta: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  bn: {
    navbar: {
      home: 'হোম',
      services: 'সার্ভিসসমূহ',
      products: 'প্রোডাক্টস',
      demos: 'লাইভ ডেমো ও পোর্টফোলিও',
      pricing: 'প্যাকেজের দাম ও খরচ',
      about: 'আমাদের সম্পর্কে',
      contact: 'যোগাযোগ',
      offers: 'অফারসমূহ',
      freeDemoBtn: 'ফ্রি ডেমো নিন',
      pulseMonitor: 'পালস মনিটর',
      alwaysOpen: '২৪/৭ সবসময় খোলা',
      headquarters: 'হেডকোয়ার্টার: সাভার, ঢাকা ১২১৭',
      langSwitch: 'বাংলা (BD)',
      liveBadge: '১০+ লাইভ সাইট',
      activeLanguage: 'বাংলা'
    },
    offers: {
      badge: 'সব সার্ভিস · প্রকাশ্য দাম · এক পেজে',
      titleA: 'সব অফার।',
      titleB: 'প্রকাশ্য দাম।',
      subtitle: 'ওয়েবসাইট, ল্যান্ডিং পেজ, AI UGC ভিডিও বিজ্ঞাপন ও অটোমেশন সিস্টেম — হাই-টেক এন্টারপ্রাইজের সবকিছু, দামসহ এই পেজেই। দাম জানতে আলাদা কল করার ঝামেলা নেই।',
      quoteCta: 'ফ্রি কোট নিন',
      ugcCta: 'AI UGC বিজ্ঞাপন দেখুন',
      popularLabel: 'সবচেয়ে জনপ্রিয়',
      webHeading: 'ওয়েবসাইট ও ল্যান্ডিং পেজ',
      webSub: 'DTC, ই-কমার্স ও সার্ভিস ব্র্যান্ডের জন্য কনভার্সন-কেন্দ্রিক বিল্ড। শুরুতে ৫০% ডিপোজিট, লঞ্চে বাকি ৫০%।',
      landing: {
        name: 'ল্যান্ডিং পেজ',
        price: '$300',
        unit: 'থেকে',
        blurb: 'ভিজিটরকে ক্রেতায় রূপান্তর করতে তৈরি একটি কনভার্সন-কেন্দ্রিক পেজ।',
        features: ['কনভার্সন-প্রথম কপি স্ট্রাকচার', 'মোবাইল-ফার্স্ট রেসপন্সিভ ডিজাইন', 'সাব-সেকেন্ড লোড টাইম', 'কন্টাক্ট / চেকআউট CTA ওয়্যারিং', 'বেসিক SEO + অ্যানালিটিক্স সেটআপ'],
        cta: 'আমার পেজ শুরু করুন',
      },
      website: {
        name: 'বিজনেস ওয়েবসাইট',
        price: '$700',
        unit: 'থেকে',
        blurb: 'সারাক্ষণ বিক্রির জন্য ইঞ্জিনিয়ার করা পূর্ণাঙ্গ মাল্টি-পেজ ওয়েবসাইট।',
        features: ['ল্যান্ডিং পেজের সবকিছু', 'সর্বোচ্চ ৮টি পেজ', 'ব্লগ / CMS রেডি', 'অ্যাডভান্সড SEO সেটআপ', 'স্পিড + Core Web Vitals টিউনড'],
        cta: 'আমার ওয়েবসাইট বানান',
      },
      webMoreCta: 'ওয়েবসাইটের পূর্ণ বিবরণ',
      ugcHeading: 'AI UGC ভিডিও বিজ্ঞাপন',
      ugcSub: 'AI দিয়ে তৈরি ক্রিয়েটর-স্টাইল প্রোডাক্ট ভিডিও — শুটিং নেই, ক্রিয়েটর ফি নেই, শিডিউলের অপেক্ষা নেই।',
      ugcSingle: {
        name: 'সিঙ্গেল স্পট',
        price: '$20',
        unit: 'প্রতি ২০-সেকেন্ড ভিডিও',
        blurb: 'ঝুঁকিহীন প্রথম অভিজ্ঞতা। একটি প্রোডাক্ট, একটি হুক অ্যাঙ্গেল।',
        features: ['২০-সেকেন্ড ক্রিয়েটর-স্টাইল ভিডিও', 'ভার্টিক্যাল ৯:১৬ ফরম্যাট', '১ রাউন্ড রিভিশন', '৪৮ ঘণ্টায় ডেলিভারি'],
        cta: 'সিঙ্গেল স্পট ট্রায়াল করুন',
      },
      ugcPack: {
        name: 'ক্রিয়েটিভ প্যাক',
        price: '$450',
        unit: '৩০টি ভিডিও · প্রতিটি $15',
        blurb: 'এক মাসের বিজ্ঞাপন ক্রিয়েটিভ — তৈরি মাত্র কয়েক দিনে।',
        features: ['৩০ × ২০-সেকেন্ড ভিডিও', 'টেস্টের জন্য একাধিক হুক অ্যাঙ্গেল', 'ভার্টিক্যাল ৯:১৬ ফরম্যাট', '২ রাউন্ড রিভিশন', 'অগ্রাধিকার ডেলিভারি'],
        cta: 'ক্রিয়েটিভ স্কেল করুন',
      },
      ugcSignature: {
        name: 'সিগনেচার স্পট',
        price: '$55',
        unit: 'প্রতি ৬০-সেকেন্ড ভিডিও',
        blurb: 'হিরো প্লেসমেন্ট ও ল্যান্ডিং পেজের জন্য দীর্ঘতর গল্প বলা।',
        features: ['৬০-সেকেন্ড ভিডিও', 'স্ক্রিপ্ট + হুক ডেভেলপমেন্ট', 'ভার্টিক্যাল + স্কয়ার ফরম্যাট', '২ রাউন্ড রিভিশন'],
        cta: 'সিগনেচার স্পট অর্ডার করুন',
      },
      ugcMoreCta: 'AI UGC কীভাবে কাজ করে',
      fiverrHeading: 'Fiverr দিয়ে অর্ডার করতে চান?',
      fiverrSub: 'একই টিম, একই কাজ — সরাসরি না করে Fiverr দিয়ে অর্ডার করুন।',
      fiverrWebName: 'Fiverr-এ ওয়েবসাইট প্যাকেজ',
      fiverrWebLines: 'স্টার্টার ওয়েবসাইট — $150 · বিজনেস ওয়েবসাইট — $350 · ই-কমার্স / ফুল-স্ট্যাক ওয়েবসাইট — $700।',
      fiverrWebCta: 'Fiverr-এ ওয়েবসাইট অর্ডার করুন',
      fiverrUgcName: 'Fiverr-এ AI UGC ভিডিও বিজ্ঞাপন',
      fiverrUgcLines: 'আমাদের Fiverr গিগ দিয়ে AI UGC ভিডিও বিজ্ঞাপন অর্ডার করুন — প্যাকেজ বেছে ওখানেই চেকআউট করুন।',
      fiverrUgcCta: 'Fiverr-এ AI UGC অর্ডার করুন',
      automationHeading: 'অটোমেশন সিস্টেম',
      automationSub: 'ফ্রি অডিটের পর আপনার ব্যবসা অনুযায়ী স্কোপ নির্ধারণ — কিছু বানানোর আগেই পাবেন ফিক্সড কোট।',
      auditCta: 'ফ্রি অটোমেশন অডিট নিন',
      automationItems: [
        {
          name: 'n8n ওয়ার্কফ্লো অটোমেশন',
          blurb: 'আপনার টুলগুলোকে সংযুক্ত করে পুনরাবৃত্ত কাজ শেষ করে এমন কাস্টম n8n ওয়ার্কফ্লো।',
          features: ['ওয়ার্কফ্লো অডিট ও ম্যাপিং', 'কাস্টম n8n বিল্ড', 'API + ওয়েবহুক ইন্টিগ্রেশন', 'এরর হ্যান্ডলিং ও মনিটরিং'],
        },
        {
          name: 'WhatsApp ও Messenger চ্যাটবট',
          blurb: 'অটো-রিপ্লাই বট যা সারাক্ষণ কাস্টমারের জবাব দেয় এবং প্রয়োজনে আপনার হাতে হস্তান্তর করে।',
          features: ['WhatsApp + Messenger অটো-রিপ্লাই', 'ক্যাটালগ ও অর্ডার ইনটেক', 'হিউম্যান হ্যান্ডঅফ নিয়ম', 'প্রতিটি চ্যাট CRM-এ লগ'],
        },
        {
          name: 'CRM সেটআপ ও সিঙ্ক (GoHighLevel)',
          blurb: 'আপনার CRM, অর্ডার ফ্লো ও অপারেশন অবশেষে একে অপরের সাথে কথা বলবে।',
          features: ['GoHighLevel + CRM সেটআপ', 'কুরিয়ার ওয়েবহুক সিঙ্ক', 'লিড পাইপলাইন অটোমেশন', 'রিপোর্টিং ড্যাশবোর্ড'],
        },
        {
          name: 'AI এজেন্ট ডেপ্লয়মেন্ট',
          blurb: 'AI এজেন্ট যা জবাব দেয়, যাচাই করে ও কাজ করে — আপনার বিদ্যমান স্ট্যাকের ভিতরেই।',
          features: ['সাপোর্ট ও সেলস এজেন্ট', 'WhatsApp + ওয়েব ডেপ্লয়মেন্ট', 'হিউম্যান হ্যান্ডঅফ নিয়ম', 'প্রতিটি আউটপুটে আপনার অনুমোদন'],
        },
        {
          name: 'লোকাল SEO',
          blurb: 'কাছের ক্রেতারা যা খুঁজছে, তাতে আপনার ব্যবসা খুঁজে পাওয়া যাক।',
          features: ['Google Business Profile সেটআপ', 'লোকাল কিওয়ার্ড টার্গেটিং', 'লিস্টিং সবসময় নির্ভুল রাখা', 'ম্যাপস ভিজিবিলিটির মূল বিষয়'],
        },
      ],
      protocolHeading: 'প্রতিটি প্রজেক্ট যেভাবে চলে',
      protocolSub: 'দ্য অ্যান্টিগ্রাভিটি প্রোটোকল — আমাদের স্বাক্ষর ডেলিভারি পদ্ধতি।',
      protocolSteps: [
        { title: 'অডিট', text: 'আমরা আপনার অপারেশন বিশ্লেষণ করে রাজস্ব ক্ষয় করা ম্যানুয়াল বাধাগুলো খুঁজে বের করি।' },
        { title: 'আর্কিটেক্ট', text: 'কাস্টম সিস্টেম ডিজাইন — কোনো টেমপ্লেট নয়। আপনার টুল, আপনার ওয়ার্কফ্লো, আপনার নিয়ম।' },
        { title: 'অটোমেট', text: 'আমরা বানাই ও ডেপ্লয় করি। লাইভ হওয়ার আগে প্রতিটি আউটপুট আপনি পর্যালোচনা করেন।' },
      ],
      faqHeading: 'প্রশ্নের উত্তর',
      faqs: [
        { q: 'ওয়েবসাইট শুরু করতে আমার কাছ থেকে কী লাগবে?', a: 'আপনার অফারের বিবরণ, আপনার কাছে থাকা ব্র্যান্ড অ্যাসেট (লোগো, ছবি) এবং ৫০% ডিপোজিট। কপি স্ট্রাকচার, ডিজাইন ও বিল্ড আমরাই সামলাই।' },
        { q: 'অটোমেশন প্রজেক্ট কীভাবে শুরু হয়?', a: 'একটি ফ্রি অটোমেশন অডিট দিয়ে: ৩০ মিনিটের কলে আমরা আপনার সবচেয়ে বড় সময়-ক্ষয়গুলো ম্যাপ করি। আমরা একসাথে কাজ না করলেও প্ল্যানটি আপনার কাছেই থাকবে।' },
        { q: 'প্রথম UGC ভিডিওটি পছন্দ না হলে?', a: 'প্রতিটি অর্ডারে রিভিশন রাউন্ড থাকে, আর $20-এর সিঙ্গেলটি ঠিক এই কারণেই কম ঝুঁকির ট্রায়াল — একবার স্টাইল অনুমোদন করুন, তারপর আত্মবিশ্বাসে স্কেল করুন।' },
      ],
      finalHeading: 'কোন অফারটি আপনার জন্য ঠিক বুঝতে পারছেন না?',
      finalSub: 'আপনার প্রজেক্ট সম্পর্কে বলুন — সেলস কল নয়, ফিক্সড কোট দিয়ে রিপ্লাই দেব।',
      finalCta: 'আমার ফ্রি কোট নিন',
    },
    hero: {
      trustBadge: '⚡ ব্র্যান্ডের জন্য হাই-কনভার্টিং ওয়েবসাইট ও AI UGC ভিডিও বিজ্ঞাপন',
      headlineLine1: 'বিক্রি বাড়ানো ওয়েবসাইট।',
      headlineLine2: 'কনভার্ট করা ভিডিও।',
      subtitle: 'হাই-টেক এন্টারপ্রাইজ DTC ব্র্যান্ডের জন্য তৈরি করে হাই-কনভার্টিং ওয়েবসাইট, ল্যান্ডিং পেজ ও AI UGC ভিডিও বিজ্ঞাপন — মাত্র $20/ভিডিও থেকে।',
      primaryCta: 'আমাদের কাজ দেখুন',
      secondaryCta: 'ফ্রি কোট নিন'
    },
    carousel: {
      badge: 'বাস্তব ক্লায়েন্ট প্রোডাকশন',
      title: 'আমাদের তৈরি লাইভ ওয়েবসাইট ও সিস্টেম শোকেস',
      subtitle: 'সাভার থেকে গ্লোবাল পর্যায় — প্রতিটি প্রজেক্টে সাব-সেকেন্ড স্পিড, মেটা ক্লাউড এপিআই এবং নিখুঁত ইউএক্স।',
      visitLive: 'লাইভ ওয়েবসাইট ভিজিট',
      simulator: 'ডিভাইস সিমুলেটর',
      viewAll: 'সকল ৬+ লাইভ প্রজেক্ট দেখুন',
      speedBenchmark: 'স্পিড বেঞ্চমার্ক',
      conversionGain: 'কনভার্সন গ্রোথ',
      liveInProduction: 'সরাসরি লাইভ প্রোডাকশন'
    },
    techEcosystem: {
      title: 'আমাদের প্রযুক্তি ও ইন্টিগ্রেশন ইকোসিস্টেম',
      subtitle: 'মেটা ক্লাউড এপিআই, নেক্সট.জেএস, বিকাশ ও পাঠাও/স্টেডফাস্ট কুরিয়ার সহ আধুনিক সব টেকনোলজি স্ট্যাক।',
      metaBadge: 'অফিসিয়াল মেটা ক্লাউড পার্টনার আর্কিটেকচার'
    },
    services: {
      badge: 'কোর সল্যুশনসমূহ',
      title: 'যে সার্ভিসগুলো আমরা সরাসরি তৈরি ও ডেলিভারি করি',
      subtitle: 'কোনো জটিলতা ছাড়া — আপনার ব্যবসার জন্য প্রয়োজনীয় স্বয়ংক্রিয় ও হাই-স্পিড সমাধান।',
      exploreBtn: 'বিস্তারিত দেখুন'
    },
    whatsappSim: {
      badge: 'লাইভ টেস্ট ড্রাইভ',
      title: 'ব্রাউজারেই টেস্ট করুন হোয়াটসঅ্যাপ অটো-রিপ্লাই বট',
      subtitle: 'মেটা ক্লাউড এপিআই প্রযুক্তিতে ২৪/৭ স্বয়ংক্রিয় ক্যাটালগ ও অর্ডার রিসিভ করার সরাসরি অভিজ্ঞতা নিন।',
      openInWhatsApp: 'সরাসরি হোয়াটসঅ্যাপে টেস্ট করুন',
      interactiveNotice: '১০০% রিয়েল-টাইম ইন্টারঅ্যাকটিভ ডেমো'
    },
    pricing: {
      badge: 'স্বচ্ছ মূল্য তালিকা',
      title: 'স্বচ্ছ এককালীন প্যাকেজ • কোনো মাসিক হিডেন ফি নেই',
      subtitle: '১০০% কোড ও সিস্টেমের মালিকানা আপনার। সাথে থাকছে মেটার প্রতি মাসে ১,০০০ ফ্রি কনভার্সেশন সুবিধা।',
      oneTimeNotice: 'এককালীন ইনভেস্টমেন্ট — কোনো প্ল্যাটফর্ম ট্যাক্স নেই',
      starterTitle: 'স্টার্টার অটোমেশন',
      growthTitle: 'গ্রোথ অমনিচ্যানেল',
      enterpriseTitle: 'এন্টারপ্রাইজ ফুল-স্ট্যাক',
      choosePlan: 'প্যাকেজটি বেছে নিন'
    },
    contact: {
      badge: 'সরাসরি যোগাযোগ',
      title: 'প্রতিষ্ঠাতা ও ইঞ্জিনিয়ারিং টিমের সাথে কথা বলুন',
      subtitle: 'সাভার, ঢাকা ১২১৭ অফিসে সরাসরি আসুন অথবা হোয়াটসঅ্যাপে কথা বলুন।',
      savarOffice: 'সাভার হেডকোয়ার্টার্স (ঢাকা ১২১৭)',
      whatsappDirect: 'হোয়াটসঅ্যাপে মেসেজ পাঠান',
      callNow: 'সরাসরি কল করুন',
      openHours: 'সকাল ৯:০০ - রাত ১০:০০ (প্রতিদিন)'
    },
    footer: {
      tagline: 'স্মার্ট সল্যুশনস • ডিজিটাল গ্রোথ • আপনার সফলতা। সাভার, ঢাকা থেকে পরিচালিত ইঞ্জিনিয়ারিং ফার্ম।',
      quickLinks: 'প্রয়োজনীয় লিংক',
      solutions: 'সমাধানসমূহ',
      contactInfo: 'যোগাযোগ ও অফিস',
      allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
      foundedInSavar: 'গর্বের সাথে সাভার, ঢাকায় নির্মিত।'
    },
    emailCollector: {
      badge: 'বিশেষ ২০২৬ গ্রোথ ব্লুপ্রিন্ট ও ভাউচার',
      title: '২০২৬ হাই-কনভার্টিং টেক আর্কিটেকচার প্লেবুক ও ৫,০০০৳ ভাউচার',
      subtitle: '২৪/৭ মেটা হোয়াটসঅ্যাপ বট, ০ মিলি-সেকেন্ড কুরিয়ার সিঙ্ক (পাঠাও/স্টেডফাস্ট) ও সুপার ফাস্ট ওয়েবসাইট দিয়ে ব্যবসা স্কেল করার সম্পূর্ণ গাইড।',
      emailLabel: 'আপনার ইমেইল অ্যাড্রেস',
      brandLabel: 'ব্যবসা বা ব্র্যান্ডের নাম (ঐচ্ছিক)',
      submitBtn: 'ফ্রি ব্লুপ্রিন্ট ও ৫,০০০৳ ভাউচার নিন',
      submitting: 'ব্লুপ্রিন্ট প্রস্তুত হচ্ছে...',
      successBadge: 'ব্লুপ্রিন্ট পাঠানো হয়েছে!',
      successTitle: 'আপনার ইনবক্স চেক করুন',
      successSubtitle: 'আমরা আপনার ইমেইলে ২০২৬ টেক আর্কিটেকচার গাইড (PDF) এবং ৫,০০০৳ প্রজেক্ট ভাউচার পাঠিয়ে দিয়েছি।',
      voucherTitle: 'আপনার এক্সক্লুসিভ লঞ্চ ভাউচার কোড',
      voucherBenefit: 'যেকোনো ওয়েবসাইট বা বট প্রজেক্টে ৫,০০০৳ সরাসরি ছাড়',
      talkWhatsApp: 'হোয়াটসঅ্যাপে ইঞ্জিনিয়ারিং টিমের সাথে কথা বলুন',
      copyCode: 'কোড কপি করুন',
      copied: 'কপি হয়েছে!',
      maybeLater: 'পরে দেখব',
      privacyNotice: '১০০% গোপনীয়তা সুরক্ষিত • কোনো স্প্যাম নেই'
    },
    homeSections: {
      featuredWork: {
        badge: '০১ / ওয়েব প্ল্যাটফর্ম ও ডিজিটাল আর্কিটেকচার',
        titleLine1: 'বিদ্যুৎগতিতে লোড হওয়া আধুনিক ওয়েবসাইট।',
        titleLine2: 'সর্বোচ্চ বিক্রয় ও কাস্টমার বৃদ্ধির লক্ষ্যে তৈরি।',
        description: 'ভারী ওয়ার্ডপ্রেস থিম বা ভাঙা প্লাগইন নয় — আমরা প্রতিটি ওয়েবসাইট নেক্সট.জেএস এবং মেটা ক্লাউড এপিআই দিয়ে গোড়া থেকে কাস্টম তৈরি করি, যাতে ০.৫ সেকেন্ডে লোড হয় এবং বিজ্ঞাপনে সর্বোচ্চ বিক্রয় কনভার্সন দেয়।',
        helperText: 'ডেস্কটপে একসাথে ৩টি প্রজেক্ট প্রদর্শিত • ড্র্যাগ করুন বা তীর চিহ্নে ক্লিক করে স্লাইড করুন',
        activeSitesLabel: 'সক্রিয় লাইভ প্রোডাকশন সাইট:',
        activeSitesList: 'দ্রুত বাজার • অমইকো (ইউটিউব) • আরবান বিস্ট • ওয়ান আউটফিট • সিক্রেট স্টাইল • অসাম পয়েন্ট',
        launchSimulatorText: 'যেকোনো প্রজেক্টের ইন্টারঅ্যাকটিভ সিমুলেটর চালু করুন'
      },
      automationPillars: {
        badge: '০২ / স্বয়ংক্রিয় বিজনেস অটোমেশন ও এআই',
        titleLine1: 'কাস্টমারের প্রশ্নকে বিক্রয়ে রূপান্তর করুন।',
        titleLine2: '২৪/৭ স্বয়ংক্রিয় হোয়াটসঅ্যাপ সেলস ইঞ্জিন।',
        description: 'আপনার ওয়েবসাইট থেকে আসা কাস্টমারদের সাথে স্বয়ংক্রিয়ভাবে কথা বলবে, পণ্যের দাম ও ছবি পাঠাবে, বিকাশ বা ক্যাশ-অন-ডেলিভারি অর্ডার কনফার্ম করে সরাসরি পাঠাও বা স্টেডফাস্টে পার্সেল এন্ট্রি করে দেবে।',
        card1Title: 'তাৎক্ষণিক কনভার্সেশনাল সেলস',
        card1Desc: 'হোয়াটসঅ্যাপ ও মেসেঞ্জারে ৩ সেকেন্ডের মধ্যে স্বয়ংক্রিয় রিপ্লাই দেয়। সাইজ জানানো, দামের তথ্য এবং সরাসরি সিস্টেমে অর্ডার বুকিং করে।',
        card1Badge: '০ লেটেন্সি • ২৪/৭ সক্রিয়',
        card2Title: 'স্বয়ংক্রিয় কুরিয়ার পার্সেল এন্ট্রি',
        card2Desc: 'স্টেডফাস্ট, পাঠাও এবং রেডএক্স এপিআইয়ের সাথে সরাসরি সংযুক্ত। কাস্টমারকে হোয়াটসঅ্যাপে ট্র্যাকিং লিংক পাঠায় এবং সিওডি স্ট্যাটাস রিয়েল-টাইমে আপডেট করে।',
        card2Badge: '১-ক্লিকে বাল্ক পার্সেল বুকিং',
        card3Title: 'লাইভ ক্লাউড পিওএস ও ইনভেন্টরি সিঙ্ক',
        card3Desc: 'ওভারসেলিং প্রতিরোধ করে। দোকানে সরাসরি কোনো পণ্য বিক্রি হলে তা নিমেষেই ওয়েবসাইটে স্টক কমিয়ে দেয় এবং হোয়াটসঅ্যাপ বট সেই পণ্য আর অফার করে না।',
        card3Badge: 'একীভূত মাল্টি-ব্রাঞ্চ ডেটাবেস'
      },
      posEcosystem: {
        badge: '০৩ / অমনিচ্যানেল ইনভেন্টরি ও ক্লাউড পিওএস',
        titleLine1: 'একটি একীভূত ইনভেন্টরি পুল।',
        titleLine2: 'দোকান, ওয়েবসাইট ও হোয়াটসঅ্যাপে ওভারসেলিংয়ের ঝুঁকি শূন্য।',
        description: 'যখন কোনো ক্রেতা আপনার ফিজিক্যাল শপে কেনাকাটা করেন, তখন মাত্র ১৫০ মিলি-সেকেন্ডের মধ্যে আপনার নেক্সট.জেএস ই-কমার্স ওয়েবসাইট এবং হোয়াটসঅ্যাপ বটের স্টক স্বয়ংক্রিয়ভাবে আপডেট হয়ে যায়। কোনো ম্যানুয়াল এক্সেল শিটের ঝামেলা নেই, ডুপ্লিকেট অর্ডারের ভয় নেই এবং ১-ট্যাপে কুরিয়ার বুকিং সুবিধা।',
        latencyLabel: 'সিঙ্ক গতি (লেটেন্সি)',
        barcodeLabel: 'বারকোড ও থার্মাল প্রিন্ট',
        barcodeValue: 'সরাসরি ESC/POS সাপোর্ট',
        offlineLabel: 'অফলাইন মোড',
        offlineValue: 'PWA লোকাল ক্যাশ',
        launchEmulatorBtn: 'পিওএস ক্লাউড এমুলেটর চালান',
        requestPosBtn: 'কাস্টম পিওএস সিস্টেমের প্রস্তাবনা চান'
      },
      methodology: {
        badge: 'একীভূত সিস্টেম আর্কিটেকচার ব্লুপ্রিন্ট',
        title: 'যেভাবে এই সিস্টেম আপনার বিক্রি বাড়ায়',
        subtitle: 'প্রথম ভিজিট থেকে কুরিয়ার ডেলিভারি পর্যন্ত ৩টি সহজ ও স্বয়ংক্রিয় ধাপ।',
        step1Title: 'সাব-সেকেন্ড সুপার-ফাস্ট ওয়েবসাইট',
        step1Desc: 'ভিজিটর আপনার ওয়েবসাইটে প্রবেশ করেন। পেজগুলো ৬০০ মিলি-সেকেন্ডের কম সময়ে লোড হয় এবং ১-ট্যাপে অর্ডার করার মসৃণ অভিজ্ঞতা দেয়।',
        step2Title: 'তাৎক্ষণিক হোয়াটসঅ্যাপ অর্ডার কনফার্মেশন',
        step2Desc: 'অর্ডার হওয়া মাত্রই হোয়াটসঅ্যাপে স্বয়ংক্রিয় নোটিফিকেশন যায়। বট ডেলিভারি অ্যাড্রেস কনফার্ম করে এবং ব্র্যান্ডেড পিডিএফ ইনভয়েস তৈরি করে।',
        step3Title: 'হিউম্যান টাচ ছাড়া কুরিয়ার ডেলিভারি',
        step3Desc: 'সিস্টেম স্বয়ংক্রিয়ভাবে এপিআই দিয়ে কুরিয়ার পার্সেল বুক করে। একই সাথে ওয়েবসাইটে ও দোকানে ইনভেন্টরি আপডেট হয়ে যায়।'
      },
      benchmarks: {
        speedValue: '০.৫২ সে.',
        speedLabel: 'গড় পেজ স্পিড',
        autoValue: '৭০%',
        autoLabel: 'স্বয়ংক্রিয় কাস্টমার রিপ্লাই',
        satisfactionValue: '৫.০★',
        satisfactionLabel: 'ক্লায়েন্ট সন্তুষ্টি',
        prototypeValue: '৪৮ ঘণ্টা',
        prototypeLabel: 'ফ্রি ডেমো প্রোটোটাইপ'
      }
    }
  },
  en: {
    navbar: {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      demos: 'Live Demos & Portfolio',
      pricing: 'Pricing & ROI',
      about: 'About Us',
      contact: 'Contact',
      offers: 'Offers',
      freeDemoBtn: 'Get Free Demo',
      pulseMonitor: 'Pulse Monitor',
      alwaysOpen: '24/7 Always Open',
      headquarters: 'HQ: Savar, Dhaka 1217',
      langSwitch: 'English (US)',
      liveBadge: '10+ Live Sites',
      activeLanguage: 'English'
    },
    offers: {
      badge: 'Every service · Public prices · One page',
      titleA: 'Every offer.',
      titleB: 'Public prices.',
      subtitle: 'Websites, landing pages, AI UGC video ads, and automation systems — everything High-Tech Enterprise sells, with the prices on the page. No discovery-call pricing games.',
      quoteCta: 'Get a free quote',
      ugcCta: 'See AI UGC Ads',
      popularLabel: 'MOST POPULAR',
      webHeading: 'Websites & landing pages',
      webSub: 'Conversion-focused builds for DTC, e-commerce, and service brands. 50% deposit to start, 50% on launch.',
      landing: {
        name: 'Landing Page',
        price: '$300',
        unit: 'from',
        blurb: 'A single conversion-focused page built to turn visitors into buyers.',
        features: ['Conversion-first copy structure', 'Mobile-first responsive design', 'Sub-second load times', 'Contact / checkout CTA wiring', 'Basic SEO + analytics setup'],
        cta: 'Start my page',
      },
      website: {
        name: 'Business Website',
        price: '$700',
        unit: 'from',
        blurb: 'A full multi-page website engineered to sell around the clock.',
        features: ['Everything in Landing Page', 'Up to 8 pages', 'Blog / CMS ready', 'Advanced SEO setup', 'Speed + Core Web Vitals tuned'],
        cta: 'Build my website',
      },
      webMoreCta: 'Full website details',
      ugcHeading: 'AI UGC video ads',
      ugcSub: 'Creator-style product videos made with AI — no shoot, no creator fees, no waiting on schedules.',
      ugcSingle: {
        name: 'Single Spot',
        price: '$20',
        unit: 'per 20-second video',
        blurb: 'A risk-free first taste. One product, one hook angle.',
        features: ['20-second creator-style video', 'Vertical 9:16 format', '1 revision round', 'Delivery in 48 hours'],
        cta: 'Try a single spot',
      },
      ugcPack: {
        name: 'Creative Pack',
        price: '$450',
        unit: '30 videos · $15 each',
        blurb: 'A full month of ad creatives, produced in days.',
        features: ['30 × 20-second videos', 'Multiple hook angles to test', 'Vertical 9:16 format', '2 revision rounds', 'Priority delivery'],
        cta: 'Scale my creatives',
      },
      ugcSignature: {
        name: 'Signature Spot',
        price: '$55',
        unit: 'per 60-second video',
        blurb: 'Longer storytelling for hero placements and landing pages.',
        features: ['60-second video', 'Script + hook development', 'Vertical + square formats', '2 revision rounds'],
        cta: 'Order the signature spot',
      },
      ugcMoreCta: 'How AI UGC works',
      fiverrHeading: 'Prefer ordering on Fiverr?',
      fiverrSub: 'Same team, same work — ordered through Fiverr instead of direct.',
      fiverrWebName: 'Website packages on Fiverr',
      fiverrWebLines: 'Starter Website — $150 · Business Website — $350 · E-commerce / Full-stack Website — $700.',
      fiverrWebCta: 'Order a website on Fiverr',
      fiverrUgcName: 'AI UGC video ads on Fiverr',
      fiverrUgcLines: 'Order AI UGC video ads through our Fiverr gig — pick a package and check out there.',
      fiverrUgcCta: 'Order AI UGC on Fiverr',
      automationHeading: 'Automation systems',
      automationSub: 'Scoped per business after a free audit — you get a fixed quote before anything is built.',
      auditCta: 'Get a free automation audit',
      automationItems: [
        {
          name: 'n8n Workflow Automation',
          blurb: 'Custom n8n workflows that connect your tools and kill repetitive work.',
          features: ['Workflow audit & mapping', 'Custom n8n builds', 'API + webhook integrations', 'Error handling & monitoring'],
        },
        {
          name: 'WhatsApp & Messenger Chatbots',
          blurb: 'Auto-reply bots that answer customers around the clock and hand off to you when it matters.',
          features: ['WhatsApp + Messenger auto-replies', 'Catalog & order intake', 'Human handoff rules', 'Every chat logged to your CRM'],
        },
        {
          name: 'CRM Setup & Sync (GoHighLevel)',
          blurb: 'Your CRM, order flow, and ops finally talking to each other.',
          features: ['GoHighLevel + CRM setup', 'Courier webhook sync', 'Lead pipeline automation', 'Reporting dashboards'],
        },
        {
          name: 'AI Agent Deployment',
          blurb: 'AI agents that answer, qualify, and act — inside your existing stack.',
          features: ['Support & sales agents', 'WhatsApp + web deployment', 'Human handoff rules', 'You approve every output'],
        },
        {
          name: 'Local SEO',
          blurb: 'Get found by nearby buyers searching for what you sell.',
          features: ['Google Business Profile setup', 'Local keyword targeting', 'Listings kept accurate', 'Maps visibility basics'],
        },
      ],
      protocolHeading: 'How every engagement runs',
      protocolSub: 'The Antigravity Protocol — our signature delivery method.',
      protocolSteps: [
        { title: 'Audit', text: 'We deconstruct your operations and find the manual bottlenecks bleeding revenue.' },
        { title: 'Architect', text: 'A custom system design — no templates. Your tools, your workflow, your rules.' },
        { title: 'Automate', text: 'We build and deploy. You review every output before anything goes live.' },
      ],
      faqHeading: 'Questions, answered',
      faqs: [
        { q: 'What do you need from me to start a website?', a: 'Your offer details, any brand assets you have (logo, photos), and 50% deposit. We handle copy structure, design, and build.' },
        { q: 'How do automation engagements start?', a: 'With a free automation audit: a 30-minute call where we map your biggest time leaks. You keep the plan even if we don\'t work together.' },
        { q: 'What if the first UGC video misses the mark?', a: 'Every order includes revision rounds, and the $20 single exists precisely as a low-risk trial — approve the style once, then scale with confidence.' },
      ],
      finalHeading: 'Not sure which offer fits?',
      finalSub: 'Tell us about your project — we reply with a fixed quote, not a sales call.',
      finalCta: 'Get my free quote',
    },
    hero: {
      trustBadge: '⚡ High-Converting Websites & AI UGC Video Ads for Brands',
      headlineLine1: 'Websites That Sell.',
      headlineLine2: 'Videos That Convert.',
      subtitle: 'High-Tech Enterprise builds high-converting websites, landing pages, and AI UGC video ad engines for DTC brands — from $20/video.',
      primaryCta: 'See Our Work',
      secondaryCta: 'Get a Free Quote'
    },
    carousel: {
      badge: 'Featured Client Productions',
      title: 'Selected Works & Live Engineering Sandbox',
      subtitle: 'From local enterprise to international flagships — every build features sub-second performance, Meta Cloud API, and refined UX.',
      visitLive: 'Visit Live Website',
      simulator: 'Device Simulator',
      viewAll: 'View All 6+ Live Demos',
      speedBenchmark: 'Speed Benchmark',
      conversionGain: 'Conversion Gain',
      liveInProduction: 'Live In Production'
    },
    techEcosystem: {
      title: 'Our Core Technology & Integration Ecosystem',
      subtitle: 'Meta Cloud API, Next.js, bKash & Steadfast/Pathao courier webhooks under one resilient architecture.',
      metaBadge: 'Official Meta Cloud Architecture'
    },
    services: {
      badge: 'Core Solutions',
      title: 'High-Impact Engineering Services',
      subtitle: 'We eliminate repetitive manual bottlenecks with autonomous intelligence, sub-second web speed, and seamless APIs.',
      exploreBtn: 'Explore Service'
    },
    whatsappSim: {
      badge: 'Live Test Drive',
      title: 'Interactive WhatsApp Bot Simulator',
      subtitle: 'Experience real-time autonomous sales, product catalog browsing, and instant FAQ replies powered by Meta Cloud API.',
      openInWhatsApp: 'Test Directly on WhatsApp',
      interactiveNotice: '100% Real-Time Interactive Demo'
    },
    pricing: {
      badge: 'Transparent Pricing',
      title: 'Transparent Packages & Zero Recurring Tax',
      subtitle: 'One-time setup investment with full code ownership. Meta gives you the first 1,000 service conversations every month 100% free.',
      oneTimeNotice: 'One-Time Setup Investment — Zero Platform Tax',
      starterTitle: 'Starter Automation',
      growthTitle: 'Growth Omnichannel',
      enterpriseTitle: 'Enterprise Full-Stack',
      choosePlan: 'Select Package'
    },
    contact: {
      badge: 'Direct Contact',
      title: 'Connect Directly With Our Engineering Team',
      subtitle: 'Visit our Savar, Dhaka 1217 headquarters or get an instant system blueprint on WhatsApp.',
      savarOffice: 'Savar Headquarters (Dhaka 1217)',
      whatsappDirect: 'Message on WhatsApp',
      callNow: 'Call Directly',
      openHours: '9:00 AM - 10:00 PM (Daily)'
    },
    footer: {
      tagline: 'SMART SOLUTIONS | DIGITAL GROWTH | YOUR SUCCESS. Enterprise web & automation systems from Savar, Dhaka.',
      quickLinks: 'Quick Links',
      solutions: 'Solutions',
      contactInfo: 'Contact & Office',
      allRightsReserved: 'All rights reserved.',
      foundedInSavar: 'Proudly engineered in Savar, Dhaka.'
    },
    emailCollector: {
      badge: 'Special 2026 Growth Blueprint',
      title: 'Get the 2026 High-Converting Tech Architecture Playbook',
      subtitle: 'Step-by-step breakdown on scaling to 1,000+ daily orders with 24/7 Meta WhatsApp bots, 0ms courier sync, and ultra-fast web platforms.',
      emailLabel: 'Work or Personal Email',
      brandLabel: 'Company / Brand Name (Optional)',
      submitBtn: 'Claim Free Blueprint & ৳5,000 Voucher',
      submitting: 'Preparing Your Blueprint...',
      successBadge: 'Blueprint Dispatched!',
      successTitle: 'Check Your Inbox',
      successSubtitle: 'We have sent you the 2026 High-Converting Tech Architecture Playbook (PDF) and your ৳5,000 launch coupon.',
      voucherTitle: 'Your Exclusive Launch Voucher',
      voucherBenefit: '৳5,000 credit on any project',
      talkWhatsApp: 'Talk to Engineering on WhatsApp',
      copyCode: 'Copy Code',
      copied: 'Copied!',
      maybeLater: 'Maybe later',
      privacyNotice: '100% Privacy Protected • Zero Spam'
    },
    homeSections: {
      featuredWork: {
        badge: '01 / WEB PLATFORMS & DIGITAL ARCHITECTURE',
        titleLine1: 'Sub-Second Web Platforms.',
        titleLine2: 'Engineered for High Conversion.',
        description: 'We engineer custom digital flagships from scratch. No bloated WordPress themes or fragile third-party plugins — only sub-second Next.js architectures, fluid micro-interactions, and conversion-engineered UX.',
        helperText: 'Showing min. 3 in a row on Desktop • Drag or use arrows to slide',
        activeSitesLabel: 'Active Production Sites:',
        activeSitesList: 'Druto Bazar • AumEcho (YouTube) • Urban Beast • One Outfit • Secret Style • Awesome Point',
        launchSimulatorText: 'Launch Interactive Simulator for any project'
      },
      automationPillars: {
        badge: '02 / AUTONOMOUS BUSINESS AUTOMATION',
        titleLine1: 'Turn Inquiries Into Revenue.',
        titleLine2: '24/7 Autonomous WhatsApp Engines.',
        description: 'Your website captures customer interest. Our intelligent automation agents close the sale, confirm delivery addresses, generate PDF invoices, and dispatch parcels without human typing.',
        card1Title: 'Instant Conversational Sales',
        card1Desc: 'Responds under 3 seconds on WhatsApp & Messenger. Suggests matching sizes, answers pricing queries, and books orders directly into your system.',
        card1Badge: 'Zero Latency • 24/7 Operational',
        card2Title: 'Automated Courier Dispatch',
        card2Desc: 'Connects directly to Steadfast, Pathao, and RedX APIs. Issues tracking links to buyers via WhatsApp and syncs cash-on-delivery statuses in real-time.',
        card2Badge: '1-Click Bulk Consignment',
        card3Title: 'Live Cloud POS Sync',
        card3Desc: 'Prevents overselling. An item sold in your physical retail store immediately decrements inventory on your website and stops WhatsApp bot offers.',
        card3Badge: 'Unified Multi-Branch Database'
      },
      posEcosystem: {
        badge: '03 / OMNICHANNEL INVENTORY & POS ECOSYSTEM',
        titleLine1: 'One Unified Inventory Pool.',
        titleLine2: 'Zero Overselling Across Store, Web & WhatsApp.',
        description: 'When a customer buys an item at your physical shop checkout, your Next.js eCommerce catalog and WhatsApp bot automatically update within 150ms. No manual stock spreadsheets, no accidental duplicate orders, and 1-tap courier consignment.',
        latencyLabel: 'Sync Latency',
        barcodeLabel: 'Barcode & Thermal',
        barcodeValue: 'Direct ESC/POS',
        offlineLabel: 'Offline Mode',
        offlineValue: 'PWA Local Cache',
        launchEmulatorBtn: 'Launch POS Cloud Emulator',
        requestPosBtn: 'Request Custom POS Architecture'
      },
      methodology: {
        badge: 'THE UNIFIED ARCHITECTURE BLUEPRINT',
        title: 'How The System Drives Revenue',
        subtitle: 'Three frictionless stages from first impression to automated courier delivery.',
        step1Title: 'Sub-Second Storefront',
        step1Desc: 'Visitor arrives on your bespoke web platform. Pages load in under 600ms, showcasing high-resolution imagery and frictionless 1-tap cart checkout.',
        step2Title: 'Instant WhatsApp Confirmation',
        step2Desc: 'Order triggers automated WhatsApp notification. The bot confirms the delivery address, offers upsell accessories, and generates a branded PDF invoice.',
        step3Title: 'Zero-Touch Dispatch',
        step3Desc: 'System books courier consignment via API. Inventory is updated simultaneously on your web store and in-store POS with full audit logging.'
      },
      benchmarks: {
        speedValue: '0.52s',
        speedLabel: 'Avg Page Speed',
        autoValue: '70%',
        autoLabel: 'Queries Automated',
        satisfactionValue: '5.0★',
        satisfactionLabel: 'Client Satisfaction',
        prototypeValue: '48h',
        prototypeLabel: 'Free Prototype'
      }
    }
  }
};

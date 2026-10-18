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
      freeDemoBtn: 'ফ্রি ডেমো নিন',
      pulseMonitor: 'পালস মনিটর',
      alwaysOpen: '২৪/৭ সবসময় খোলা',
      headquarters: 'হেডকোয়ার্টার: সাভার, ঢাকা ১২১৭',
      langSwitch: 'বাংলা (BD)',
      liveBadge: '১০+ লাইভ সাইট',
      activeLanguage: 'বাংলা'
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
      freeDemoBtn: 'Get Free Demo',
      pulseMonitor: 'Pulse Monitor',
      alwaysOpen: '24/7 Always Open',
      headquarters: 'HQ: Savar, Dhaka 1217',
      langSwitch: 'English (US)',
      liveBadge: '10+ Live Sites',
      activeLanguage: 'English'
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

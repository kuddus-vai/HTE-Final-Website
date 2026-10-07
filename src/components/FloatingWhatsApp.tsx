import React, { useState, useRef, useEffect } from 'react';
import { COMPANY_INFO, PRICING_DATA, SERVICES_DATA } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { submitQuoteToGmail, PRIMARY_GMAIL } from '../services/quoteService';
import { 
  MessageCircle, 
  X, 
  Send, 
  RotateCcw, 
  ExternalLink, 
  DollarSign, 
  Cpu, 
  Gift, 
  Phone, 
  CheckCheck, 
  ChevronRight, 
  Sparkles, 
  HelpCircle, 
  MapPin, 
  Building2, 
  User, 
  Clock,
  ShieldCheck,
  CheckCircle2,
  Volume2,
  VolumeX,
  Languages,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
  Search,
  Briefcase,
  Layers,
  Zap,
  Award,
  ArrowRight,
  Activity,
  Globe
} from 'lucide-react';

export interface FloatingWhatsAppProps {
  onOpenDemoModal?: () => void;
}

type BotLanguage = 'en' | 'bn';
type ActiveTab = 'chat' | 'topics' | 'prototype' | 'contact';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  cardType?: 'menu' | 'pricing' | 'services' | 'prototype' | 'comparison' | 'timeline' | 'contact' | 'tech' | 'custom';
  reaction?: 'up' | 'down' | null;
}

interface KnowledgeTopic {
  id: string;
  icon: React.ElementType;
  title: string;
  titleBn: string;
  tag: string;
  description: string;
  descriptionBn: string;
  query: string;
}

const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    id: 'services',
    icon: Briefcase,
    title: 'Our Services & What We Build',
    titleBn: 'আমাদের সার্ভিস ও সল্যুশনসমূহ',
    tag: 'Core Solutions',
    description: 'Custom Next.js websites, 24/7 autonomous WhatsApp bots, CRM workflows & courier sync.',
    descriptionBn: 'হাই-স্পিড ওয়েবসাইট, মেটা ক্লাউড এপিআই হোয়াটসঅ্যাপ বট এবং কুরিয়ার ইন্টিগ্রেশন।',
    query: 'What services do you provide?'
  },
  {
    id: 'pricing',
    icon: DollarSign,
    title: 'Pricing & Transparent Packages',
    titleBn: 'প্যাকেজের দাম ও খরচ (BDT)',
    tag: 'One-Time Setup',
    description: 'Starter (৳12k), Growth (৳24k-৳35k), Enterprise (৳45k+). Zero recurring platform tax.',
    descriptionBn: 'স্টার্টার ১২,০০০৳, গ্রোথ ২৪,০০০৳, এন্টারপ্রাইজ ৪৫,০০০৳। কোনো মাসিক হিডেন ফি নেই।',
    query: 'How much does it cost?'
  },
  {
    id: 'prototype',
    icon: Gift,
    title: 'Free 48-Hour Interactive Prototype',
    titleBn: 'ফ্রি ৪৮ ঘণ্টার ওয়েবসাইট ও বট ডেমো',
    tag: 'Zero Risk Offer',
    description: 'We build a functioning live preview prototype for your brand before you pay any deposit.',
    descriptionBn: 'কোনো প্রকার অগ্রিম পেমেন্ট ছাড়াই আপনার ব্যবসার জন্য লাইভ ডেমো প্রোটোটাইপ তৈরি করে দেখাব।',
    query: 'How to claim free prototype demo?'
  },
  {
    id: 'timeline',
    icon: Clock,
    title: 'Turnaround Time & Delivery',
    titleBn: 'কাজের সময়সীমা ও ডেলিভারি',
    tag: 'Fast Delivery',
    description: '48 hours for interactive prototype; 3 to 7 business days for full launch & handover.',
    descriptionBn: 'ডেমো তৈরি ৪৮ ঘণ্টায়; সম্পূর্ণ ওয়েবসাইট বা অটোমেশন সিস্টেম ৩ থেকে ৭ কর্মদিবসে ডেলিভারি।',
    query: 'How long does delivery take?'
  },
  {
    id: 'comparison',
    icon: Award,
    title: 'Why Us vs ManyChat / Wati?',
    titleBn: 'মেনিচ্যাট বা ওয়াতির চেয়ে আমরা কেন সেরা?',
    tag: 'Cost & Control',
    description: 'One-time investment, 100% code ownership, official Meta API, and native Bangla understanding.',
    descriptionBn: 'মাসিক ডলার সাবস্ক্রিপশন নেই, ১০০% কোড আপনার মালিকানায় এবং সরাসরি বাংলা ও বাংলিশ সাপোর্ট।',
    query: 'Why choose High-Tech Enterprise over ManyChat?'
  },
  {
    id: 'tech',
    icon: Cpu,
    title: 'Technology Stack & Security',
    titleBn: 'টেকনোলজি স্ট্যাক ও ডেটা সিকিউরিটি',
    tag: 'Modern Engineering',
    description: 'Next.js 15, React, Tailwind CSS, TypeScript, Meta Cloud API, bKash & Steadfast/Pathao APIs.',
    descriptionBn: 'নেক্সট.জেএস, রিয়্যাক্ট, মেটা ক্লাউড এপিআই, বিকাশ-নগদ পেমেন্ট ও পাঠাও/স্টেডফাস্ট কুরিয়ার এপিআই।',
    query: 'What is your technology stack?'
  },
  {
    id: 'payment',
    icon: ShieldCheck,
    title: 'Payment Terms & Milestone Security',
    titleBn: 'পেমেন্ট শর্ত ও মাইলস্টোন নিরাপত্তা',
    tag: 'Safe Contract',
    description: '50% deposit only after prototype approval, 50% upon final testing. bKash, Nagad & Bank.',
    descriptionBn: 'ডেমো পছন্দ হলে ৫০% ইনিশিয়াল, কাজ সম্পন্ন ও টেস্টিং শেষে বাকি ৫০%। বিকাশ, নগদ ও ব্যাংক।',
    query: 'What are your payment terms and guarantee?'
  },
  {
    id: 'hq',
    icon: Building2,
    title: 'Savar, Dhaka HQ & Founder Info',
    titleBn: 'সাভার হেডকোয়ার্টার ও প্রতিষ্ঠাতা',
    tag: 'Local & Verified',
    description: 'Engineering HQ in Savar, Dhaka 1217. Led by Md. Asaduzzaman. Direct WhatsApp available.',
    descriptionBn: 'আমাদের অফিস সাভার, ঢাকা ১২১৭। সরাসরি কল বা হোয়াটসঅ্যাপে কথা বলুন +880 1996-921149।',
    query: 'Where is your office and who is the founder?'
  },
  {
    id: 'portfolio',
    icon: Globe,
    title: 'Client Websites & Live Portfolio',
    titleBn: 'ক্লায়েন্ট ওয়েবসাইট ও পোর্টফোলিও',
    tag: '6+ Live Sites',
    description: 'Explore live client websites: Optimum Power, Druto Bazar BD (Grocery), Urban Beast BD, One Outfit & more.',
    descriptionBn: 'আমাদের তৈরি করা বাস্তব ক্লায়েন্ট ওয়েবসাইট, গ্রোসারি শপ ও লাইভ ডেমো দেখুন।',
    query: 'Show me your previous client websites and portfolio'
  },
  {
    id: 'monitor',
    icon: Activity,
    title: 'Enterprise Pulse Monitor',
    titleBn: 'এন্টারপ্রাইজ পালস মনিটর',
    tag: 'Cyber Intelligence',
    description: 'Real-time global cyber-threat & tech-intelligence dashboard for high-tech enterprise clients at monitor.hightechenterprise.xyz.',
    descriptionBn: 'রিয়েল-টাইম গ্লোবাল সাইবার থ্রেট ও টেক ইন্টেলিজেন্স ড্যাশবোর্ড।',
    query: 'Tell me about your Enterprise Pulse Monitor dashboard'
  }
];

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenDemoModal }) => {
  const { language: siteLanguage, setLanguage: setSiteLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [language, setLanguage] = useState<BotLanguage>((siteLanguage as BotLanguage) || 'bn');
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ht_whatsapp_sound_muted');
      return saved !== null ? saved === 'true' : false;
    } catch {
      return false;
    }
  });
  const [soundFeedbackText, setSoundFeedbackText] = useState<string | null>(null);
  const soundFeedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('chat');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTopic, setSearchTopic] = useState('');

  // Interactive Prototype Form state
  const [protoIndustry, setProtoIndustry] = useState('eCommerce / Retail');
  const [protoService, setProtoService] = useState('WhatsApp Sales Bot & Auto-Reply');
  const [protoBizName, setProtoBizName] = useState('');
  const [protoPhone, setProtoPhone] = useState('');
  const [protoSubmitted, setProtoSubmitted] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Synthesized Web Audio chime (Zero external audio assets)
  const playSound = (type: 'send' | 'receive' | 'preview') => {
    if (isMuted && type !== 'preview') return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      if (type === 'send') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(820, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.005, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'preview') {
        // Quick pleasant chime when visitor unmutes audio
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.005, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, ctx.currentTime);
        osc.frequency.setValueAtTime(720, ctx.currentTime + 0.07);
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.005, ctx.currentTime + 0.14);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.14);
      }
    } catch {
      // Audio context silently ignored if restricted by browser
    }
  };

  // Toggle chime sound with feedback and persistence (without restarting chat session)
  const handleToggleSound = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    try {
      localStorage.setItem('ht_whatsapp_sound_muted', String(nextMuted));
    } catch {
      // ignore
    }

    if (!nextMuted) {
      playSound('preview');
      setSoundFeedbackText(language === 'en' ? 'Chime sound enabled 🔔' : 'সাউন্ড চালু হয়েছে 🔔');
    } else {
      setSoundFeedbackText(language === 'en' ? 'Chime sound muted 🔕' : 'সাউন্ড মিউট করা হয়েছে 🔕');
    }

    if (soundFeedbackTimeoutRef.current) {
      clearTimeout(soundFeedbackTimeoutRef.current);
    }
    soundFeedbackTimeoutRef.current = setTimeout(() => {
      setSoundFeedbackText(null);
    }, 2200);
  };

  useEffect(() => {
    return () => {
      if (soundFeedbackTimeoutRef.current) {
        clearTimeout(soundFeedbackTimeoutRef.current);
      }
    };
  }, []);

  // Initial welcome greeting
  const getInitialMessage = (lang: BotLanguage): ChatMessage => ({
    id: 'msg-init',
    sender: 'bot',
    text: lang === 'en' 
      ? `👋 Assalamu Alaikum! Welcome to **High-Tech Enterprise**.\n\nI am your automated visitor concierge. How can we help transform or automate your business today?\n\n⚡ Instant 100% Rule-Based Answers (No AI hallucinations, 0ms latency). Tap an option or type your question:`
      : `👋 আসসালামু আলাইকুম! **হাই-টেক এন্টারপ্রাইজ**-এ স্বাগতম।\n\nআমি আপনার ভিজিটর কনসিয়্যার্জ। আপনার ব্যবসার ওয়েবসাইট বা হোয়াটসঅ্যাপ অটোমেশনের বিষয়ে যেকোনো প্রশ্ন করতে পারেন।\n\n⚡ ১০০% নিয়ম-ভিত্তিক তাৎক্ষণিক উত্তর। নিচের অপশনগুলো থেকে বেছে নিন:`,
    timestamp: 'Just now',
    cardType: 'menu',
    quickReplies: lang === 'en' ? [
      '🛠️ What We Build',
      '💰 Pricing & Packages',
      '🎁 Claim Free Prototype',
      '⏱️ Delivery Timeline',
      '🥊 Why Us vs ManyChat?',
      '🏢 Savar Office & Contact'
    ] : [
      '🛠️ আমাদের সার্ভিসসমূহ',
      '💰 প্যাকেজের দাম ও খরচ',
      '🎁 ফ্রি প্রোটোটাইপ অফার',
      '⏱️ কাজের সময়সীমা',
      '🥊 মেনিচ্যাটের চেয়ে কেন সেরা?',
      '🏢 সাভার অফিস ও যোগাযোগ'
    ]
  });

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    getInitialMessage((siteLanguage as BotLanguage) || 'bn')
  ]);

  // Keep bot language synchronized with website language
  useEffect(() => {
    const currentBotLang = (siteLanguage as BotLanguage) || 'bn';
    setLanguage(currentBotLang);
    if (messages.length <= 1) {
      setMessages([getInitialMessage(currentBotLang)]);
    }
  }, [siteLanguage]);

  // Keep chat pinned to bottom
  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      const container = document.getElementById('concierge-messages-list');
      if (container) {
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
      }
    }
  }, [messages, isTyping, isOpen, activeTab]);

  // When language toggles, refresh welcome text and sync site-wide language
  const handleToggleLanguage = () => {
    const nextLang: BotLanguage = language === 'en' ? 'bn' : 'en';
    setLanguage(nextLang);
    setSiteLanguage(nextLang);
    if (messages.length <= 2) {
      setMessages([getInitialMessage(nextLang)]);
    }
  };

  // 100% Deterministic Rule Engine for website visitors
  const matchResponse = (query: string, lang: BotLanguage): Omit<ChatMessage, 'id' | 'timestamp'> => {
    const q = query.toLowerCase().trim();

    // 1. GREETING
    if (q.match(/^(hi|hello|hey|salam|assalam|start|help|haloo|হেই|হ্যালো|সালাম|শুরু)/)) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `👋 Assalamu Alaikum! Welcome to High-Tech Enterprise (hightechenterprise.xyz).\n\nWe build high-converting modern websites, 24/7 autonomous WhatsApp bots, CRM automations, and Pathao/Steadfast courier integrations.\n\nWhat would you like to explore?`
          : `👋 আসসালামু আলাইকুম! হাই-টেক এন্টারপ্রাইজে স্বাগতম।\n\nআমরা তৈরি করি আধুনিক আল্ট্রা-ফাস্ট ওয়েবসাইট, ২৪/৭ স্বয়ংক্রিয় হোয়াটসঅ্যাপ বট, সিআরএম অটোমেশন ও কুরিয়ার ইন্টিগ্রেশন।\n\nআপনি কী বিষয়ে জানতে চান?`,
        cardType: 'menu',
        quickReplies: [
          lang === 'en' ? '🛠️ Our Services' : '🛠️ আমাদের সার্ভিস',
          lang === 'en' ? '💰 Pricing & Packages' : '💰 প্যাকেজের দাম',
          lang === 'en' ? '🎁 Free Prototype' : '🎁 ফ্রি ডেমো',
          lang === 'en' ? '⏱️ Turnaround Time' : '⏱️ কাজের সময়সীমা'
        ]
      };
    }

    // 2. SERVICES & WHAT WE BUILD
    if (q.includes('service') || q.includes('build') || q.includes('offer') || q.includes('what do you do') || q.includes('কাজ') || q.includes('সার্ভিস') || q.includes('সল্যুশন') || q.includes('what we build')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `🚀 **High-Tech Enterprise Core Capabilities**:\n\n1️⃣ **WhatsApp AI & Auto-Reply Bot**: 24/7 autonomous customer support via official Meta Cloud API. Automatically takes orders, answers FAQs, sends catalog, and recovers abandoned carts.\n2️⃣ **High-Performance Web Platforms**: Ultra-fast Next.js / React web platforms with sub-second page loads, SEO dominance, and high conversion funnels.\n3️⃣ **Courier & eCommerce Sync**: Two-way automation with Pathao, Steadfast, RedX, Shopify, WooCommerce & custom databases.\n4️⃣ **bKash & Nagad Payment Gateway**: Automated payment reminders and instant transaction verification.`
          : `🚀 **হাই-টেক এন্টারপ্রাইজ প্রধান সল্যুশনসমূহ**:\n\n১️⃣ **অফিসিয়াল হোয়াটসঅ্যাপ অটোমেশন বট**: মেটা ক্লাউড এপিআইয়ের মাধ্যমে ২৪/৭ স্বয়ংক্রিয় কাস্টমার কেয়ার। পণ্যের তথ্য, অর্ডার গ্রহণ ও অটো কনফার্মেশন।\n২️⃣ **আল্ট্রা-ফাস্ট ওয়েবসাইট প্ল্যাটফর্ম**: নেক্সট.জেএস ও রিয়্যাক্ট প্রযুক্তিতে নির্মিত বিদ্যুৎগতির আধুনিক ওয়েবসাইট।\n৩️⃣ **কুরিয়ার ও ই-কমার্স ইন্টিগ্রেশন**: পাঠাও, স্টেডফাস্ট ও রেডএক্স এপিআই সিঙ্ক এবং শপিফাই/উকমার্সের সাথে অটো অর্ডার পাঠানো।\n৪️⃣ **বিকাশ ও নগদ পেমেন্ট গেটওয়ে**: পেমেন্ট ভেরিফিকেশন ও ডিজিটাল ইনভয়েস জেনারেশন।`,
        cardType: 'services',
        quickReplies: [
          lang === 'en' ? '💰 How much does it cost?' : '💰 প্যাকেজের খরচ কত?',
          lang === 'en' ? '🎁 Request Free Prototype' : '🎁 ফ্রি ডেমো দেখতে চাই',
          lang === 'en' ? '🥊 Why choose you vs ManyChat?' : '🥊 মেনিচ্যাটের চেয়ে কেন সেরা?',
          lang === 'en' ? '👤 Talk to Human Founder' : '👤 সরাসরি প্রতিষ্ঠাতার সাথে কথা'
        ]
      };
    }

    // 3. PRICING & PACKAGES
    if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('package') || q.includes('rate') || q.includes('charge') || q.includes('how much') || q.includes('taka') || q.includes('bdt') || q.includes('খরচ') || q.includes('দাম') || q.includes('টাকা') || q.includes('প্যাকেজ')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `💰 **Transparent, One-Time Pricing Tiers** (No recurring platform taxes!):\n\n• **Starter Automation**: ৳12,000 (~$105)\n  - Official Meta Cloud API setup, smart auto-reply for top 30 FAQs, Google Sheets live order sync, 14 days support.\n\n• **Growth Omnichannel**: ৳24,000 - ৳34,999 (~$210-$299)\n  - Full AI Bot, 70% query automation, Shopify/WooCommerce catalog sync, abandoned cart recovery, Pathao/Steadfast courier sync, multi-agent team inbox.\n\n• **Enterprise Full-Stack**: ৳45,000+ (~$390+)\n  - Custom Next.js web application, bespoke ERP/POS integration, dedicated cloud hosting, 99.98% uptime SLA.\n\n💡 *Note: Meta gives you the first 1,000 customer service conversations every month 100% free!*`
          : `💰 **আমাদের স্বচ্ছ এককালীন প্যাকেজসমূহ** (কোনো মাসিক প্ল্যাটফর্ম ফি নেই!):\n\n• **স্টার্টার অটোমেশন**: ১২,০০০৳ (~$১০৫)\n  - অফিসিয়াল মেটা ক্লাউড এপিআই, টপ ৩০টি প্রশ্নের অটো-রিপ্লাই, গুগল শিট লাইভ সিঙ্ক, ১৪ দিনের সাপোর্ট।\n\n• **গ্রোথ ওমনিচ্যানেল (সবচেয়ে জনপ্রিয়)**: ২৪,০০০৳ - ৩৪,৯৯৯৳ (~$২১০-$২৯৯)\n  - ৭০% কুয়েরি অটো হ্যান্ডলিং, শপিফাই/উকমার্স ক্যাটালগ সিঙ্ক, পরিত্যক্ত কার্ট রিকভারি, পাঠাও/স্টেডফাস্ট কুরিয়ার সিঙ্ক, মাল্টি-এজেন্ট টিম ইনবক্স।\n\n• **এন্টারপ্রাইজ ফুল-স্ট্যাক**: ৪৫,০০০৳+ (~$৩৯০+)\n  - কাস্টম নেক্সট.জেএস হাই-স্পিড ওয়েবসাইট, ইআরপি ও পিওএস ডাটাবেস ইন্টিগ্রেশন, ডেডিকেটেড ক্লাউড হোস্ট।\n\n💡 *মেটার অফিশিয়াল নিয়মে প্রতি মাসে প্রথম ১,০০০ কাস্টমার সার্ভিস মেসেজ সম্পূর্ণ ফ্রি!*`,
        cardType: 'pricing',
        quickReplies: [
          lang === 'en' ? '🎁 Claim Free 48h Prototype' : '🎁 ফ্রি ডেমো দেখতে চাই',
          lang === 'en' ? '⏱️ How fast is delivery?' : '⏱️ ডেলিভারি হতে কতদিন লাগে?',
          lang === 'en' ? '🛡️ What are payment terms?' : '🛡️ পেমেন্ট কিভাবে করতে হয়?',
          lang === 'en' ? '👤 Chat on WhatsApp' : '👤 হোয়াটসঅ্যাপে কথা বলুন'
        ]
      };
    }

    // 4. FREE PROTOTYPE / DEMO
    if (q.includes('demo') || q.includes('prototype') || q.includes('free') || q.includes('sample') || q.includes('trial') || q.includes('টেস্ট') || q.includes('ফ্রি') || q.includes('ডেমো') || q.includes('প্রোটোটাইপ')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `🎁 **Our 100% Free 48-Hour Prototype Guarantee**:\n\nYou do NOT have to take our word for it or pay upfront deposits blindly.\n\n1. Tell us your business name & website/Facebook page.\n2. In **48 hours**, our team engineers a working interactive prototype of your website or WhatsApp automated bot.\n3. You test it live with your team on your own phone.\n4. If you love it, we proceed with full deployment. If not, you walk away with zero obligations!`
          : `🎁 **আমাদের ১০০% ফ্রি ৪৮ ঘণ্টার প্রোটোটাইপ গ্যারান্টি**:\n\nআপনাকে কোনো প্রকার অগ্রিম পেমেন্ট বা ঝুঁকি নিয়ে শুরু করতে হবে না।\n\n১. আপনার ব্যবসার নাম ও ফেসবুক পেইজ বা বর্তমান ওয়েবসাইটের তথ্য আমাদের দিন।\n২. আমরা মাত্র **৪৮ ঘণ্টার মধ্যে** আপনার ব্যবসার জন্য একটি লাইভ ওয়ার্কিং প্রোটোটাইপ বা ডেমো রেডি করে দেখাব।\n৩. আপনার নিজের ফোনে টেস্ট করে দেখুন কিভাবে গ্রাহকদের স্বয়ংক্রিয় উত্তর ও অর্ডার নেয়।\n৪. ডেমো পছন্দ হলেই কেবল ফাইনাল প্রজেক্টে এগ্রি করবেন!`,
        cardType: 'prototype',
        quickReplies: [
          lang === 'en' ? '📝 Start Prototype Request' : '📝 এখনই ডেমো রিকোয়েস্ট করুন',
          lang === 'en' ? '⏱️ How long for full build?' : '⏱️ পুরো কাজ হতে কতদিন লাগে?',
          lang === 'en' ? '💰 What is the price later?' : '💰 প্যাকেজের খরচ কেমন?',
          lang === 'en' ? '👤 WhatsApp Founder' : '👤 হোয়াটসঅ্যাপে যোগাযোগ'
        ]
      };
    }

    // 5. TURNAROUND TIME / TIMELINE
    if (q.includes('time') || q.includes('timeline') || q.includes('how long') || q.includes('duration') || q.includes('days') || q.includes('delivery') || q.includes('fast') || q.includes('সময়') || q.includes('কবে') || q.includes('দিন') || q.includes('কতক্ষণ')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `⏱️ **Project Turnaround & Delivery Timeline**:\n\n• **Step 1 (48 Hours)**: Interactive Live Prototype Delivery. We showcase your website wireframe or functional WhatsApp bot flow.\n• **Step 2 (3 to 5 Days)**: Full development, Meta API credential verification, product catalog sync, courier webhooks (Pathao/Steadfast).\n• **Step 3 (Day 6 - 7)**: Live simulation testing, team staff training, handover guide & production launch.\n\n⚡ *Total standard delivery: 3 to 7 business days from prototype approval!*`
          : `⏱️ **কাজের সময়সীমা ও ডেলিভারি ধাপসমূহ**:\n\n• **১ম ধাপ (৪৮ ঘণ্টা)**: লাইভ ইন্টারেক্টিভ প্রোটোটাইপ ডেলিভারি।\n• **২য় ধাপ (৩ থেকে ৫ দিন)**: ফুল ডেভেলপমেন্ট, মেটা ক্লাউড এপিআই ভেরিফিকেশন, ক্যাটালগ ও কুরিয়ার (পাঠাও/স্টেডফাস্ট) ইন্টিগ্রেশন।\n• **৩য় ধাপ (৬ষ্ঠ - ৭ম দিন)**: লাইভ টেস্টিং, টিম মেম্বারদের ট্রেনিং, হ্যান্ডওভার গাইড ও ফাইনাল রিলিজ।\n\n⚡ *সাধারণত প্রোটোটাইপ অ্যাপ্রুভালের পর ৩ থেকে ৭ কর্মদিবসের মধ্যেই সম্পন্ন হয়ে যায়!*`,
        cardType: 'timeline',
        quickReplies: [
          lang === 'en' ? '🎁 Request Prototype' : '🎁 ডেমো রিকোয়েস্ট করুন',
          lang === 'en' ? '💰 Pricing Plans' : '💰 প্যাকেজের দাম',
          lang === 'en' ? '🥊 Why not ManyChat?' : '🥊 মেনিচ্যাট কেন নয়?',
          lang === 'en' ? '🏢 Savar Office Info' : '🏢 সাভার অফিস সম্পর্কে'
        ]
      };
    }

    // 6. WHY US VS MANYCHAT / WATI
    if (q.includes('manychat') || q.includes('wati') || q.includes('why') || q.includes('difference') || q.includes('better') || q.includes('compare') || q.includes('কেন') || q.includes('পার্থক্য') || q.includes('মেনিচ্যাট') || q.includes('ওয়াতি')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `🥊 **Why High-Tech Enterprise vs ManyChat / Wati?**\n\n❌ **ManyChat / Wati Drawbacks**:\n• Expensive recurring monthly subscriptions ($40 - $200+ USD every single month).\n• Additional markup on every WhatsApp conversation.\n• Weak comprehension of colloquial Bengali & Romanized Banglish.\n• No direct integration with Bangladesh couriers (Pathao/Steadfast) or bKash/Nagad.\n\n✅ **High-Tech Enterprise Advantage**:\n• **One-Time Setup Fee**: You own your bot and infrastructure forever.\n• **Direct Meta Cloud API**: Pay Meta directly with zero third-party markups (first 1,000 chats free each month!).\n• **Native Bangla & Banglish NLP**: Understands how customers in Bangladesh actually chat.\n• **Integrated Local Ecosystem**: Pre-built webhooks for Pathao, Steadfast, RedX, and bKash.`
          : `🥊 **মেনিচ্যাট বা ওয়াতির চেয়ে আমরা কেন সেরা?**\n\n❌ **মেনিচ্যাট ও ওয়াতির সমস্যা**:\n• প্রতি মাসে ৪০ থেকে ২০০+ ডলার বাধ্যতামূলক সাবস্ক্রিপশন ফি।\n• প্রতি মেসেজের ওপর বাড়তি হিডেন চার্জ।\n• বাংলা ও বাংলিশ কথায় ভুল বোঝাবুঝি ও ড্রপআউট।\n• বাংলাদেশের কুরিয়ার (পাঠাও/স্টেডফাস্ট) বা বিকাশ/নগদের সাথে অটো কানেকশন নেই।\n\n✅ **হাই-টেক এন্টারপ্রাইজের সুবিধা**:\n• **এককালীন খরচ**: সিস্টেম আপনার নিজস্ব, কোনো মাসিক প্ল্যাটফর্ম ফি নেই।\n• **সরাসরি মেটা ক্লাউড এপিআই**: প্রতি মাসে প্রথম ১,০০০ কাস্টমার চ্যাট ১০০% ফ্রি।\n• **খাঁটি বাংলা ও বাংলিশ সাপোর্ট**: স্থানীয় ক্রেতাদের স্বাভাবিক কথ্য ভাষা বুঝে অর্ডার নেয়।\n• **দেশি কুরিয়ার ও পেমেন্ট ইন্টিগ্রেশন**: পাঠাও, স্টেডফাস্ট ও বিকাশ স্বয়ংক্রিয়ভাবে সংযুক্ত।`,
        cardType: 'comparison',
        quickReplies: [
          lang === 'en' ? '💰 View Pricing' : '💰 প্যাকেজের দাম দেখুন',
          lang === 'en' ? '🎁 Test Free Demo' : '🎁 ফ্রি ডেমো টেস্ট করুন',
          lang === 'en' ? '⚡ What is the Tech Stack?' : '⚡ টেকনোলজি স্ট্যাক কী?',
          lang === 'en' ? '👤 WhatsApp Call' : '👤 সরাসরি কল দিন'
        ]
      };
    }

    // 7. TECH STACK & SECURITY
    if (q.includes('tech') || q.includes('stack') || q.includes('technology') || q.includes('security') || q.includes('code') || q.includes('nextjs') || q.includes('react') || q.includes('টেক') || q.includes('প্রযুক্তি') || q.includes('সিকিউরিটি')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `💻 **High-Tech Enterprise Modern Tech Stack**:\n\n• **Web & Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion.\n• **Automation Engine**: Node.js microservices, Meta Cloud API v21.0, secure webhook endpoints.\n• **Cloud & Reliability**: Google Cloud Run, Cloud Firestore, Cloudflare Enterprise DDoS shielding (99.98% uptime SLA).\n• **Logistics & Commerce**: Pathao Courier API, Steadfast API, Shopify GraphQL, WooCommerce REST, bKash & Nagad PGWs.\n\n🛡️ *Security*: Zero-trust API architecture, end-to-end payload encryption, and strict rate-limiting to prevent spam.`
          : `💻 **আমাদের আধুনিক টেকনোলজি স্ট্যাক**:\n\n• **ওয়েব প্ল্যাটফর্ম**: নেক্সট.জেএস ১৫, রিয়্যাক্ট ১৯, টাইপস্ক্রিপ্ট ও টেলউইন্ড সিএসএস।\n• **অটোমেশন ইঞ্জিন**: নোড.জেএস মাইক্রোসার্ভিস, মেটা ক্লাউড এপিআই v21.0, সিকিউর ওয়েবহুক।\n• **ক্লাউড ইনফ্রা**: গুগল ক্লাউড রান, ক্লাউড ফায়ারস্টোর ও ক্লাউডফ্লেয়ার ডিডিওএস শিল্ড।\n• **লজিস্টিকস ও পেমেন্ট**: পাঠাও এপিআই, স্টেডফাস্ট এপিআই, শপিফাই/উকমার্স সিঙ্ক, বিকাশ ও নগদ গেটওয়ে।\n\n🛡️ *নিরাপত্তা*: জিরো-ট্রাস্ট সিকিউরিটি ও এন্ড-টু-এন্ড এনক্রিপশন।`,
        cardType: 'tech',
        quickReplies: [
          lang === 'en' ? '🛠️ Our Services' : '🛠️ আমাদের সার্ভিস',
          lang === 'en' ? '🎁 Free Prototype' : '🎁 ফ্রি ডেমো',
          lang === 'en' ? '💰 Pricing Plans' : '💰 প্যাকেজের দাম',
          lang === 'en' ? '🏢 Savar Office' : '🏢 সাভার অফিস'
        ]
      };
    }

    // 8. OFFICE LOCATION & SAVAR HQ & CONTACT & FOUNDER
    if (q.includes('location') || q.includes('office') || q.includes('address') || q.includes('savar') || q.includes('dhaka') || q.includes('founder') || q.includes('ceo') || q.includes('asaduzzaman') || q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('email') || q.includes('অফিস') || q.includes('কোথায়') || q.includes('সাভার') || q.includes('ঢাকা') || q.includes('প্রতিষ্ঠাতা') || q.includes('ফোন') || q.includes('যোগাযোগ')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `🏢 **Headquarters & Direct Contact Information**:\n\n• **Company**: High-Tech Enterprise (High-Tech Enterprise BD Ltd.)\n• **Website**: https://hightechenterprise.xyz\n• **Engineering HQ**: Savar, Dhaka 1217, Bangladesh\n• **Founder & Lead Architect**: Md. Asaduzzaman\n• **Direct Phone / WhatsApp**: +880 1996-921149 / 01996-921149\n• **Official Email**: hightechenterprisebd@gmail.com\n• **Working Hours**: 9:00 AM – 10:00 PM BST (7 Days a week)\n\n☕ *We welcome in-person meetings at Savar, Dhaka or scheduled Google Meet / Zoom discovery calls!*`
          : `🏢 **হেডকোয়ার্টার ও সরাসরি যোগাযোগ তথ্য**:\n\n• **কোম্পানি**: হাই-টেক এন্টারপ্রাইজ (High-Tech Enterprise BD Ltd.)\n• **ওয়েবসাইট**: https://hightechenterprise.xyz\n• **প্রধান অফিস**: সাভার, ঢাকা ১২১৭, বাংলাদেশ\n• **প্রতিষ্ঠাতা ও প্রধান স্থপতি**: মোঃ আসাদুজ্জামান\n• **সরাসরি ফোন ও হোয়াটসঅ্যাপ**: ০১৯৯৬-৯২১১৪৯ (+880 1996-921149)\n• **ইমেইল**: hightechenterprisebd@gmail.com\n• **অফিস সময়**: সকাল ৯টা – রাত ১০টা (সপ্তাহে ৭ দিন)\n\n☕ *সাভার অফিসে সরাসরি চায়ের দাওয়াত রইল অথবা যেকোনো সময় গুগল মিট/জুমে মিটিং করতে পারেন!*`,
        cardType: 'contact',
        quickReplies: [
          lang === 'en' ? '📞 Call +880 1996-921149' : '📞 কল করুন ০১৯৯৬-৯২১১৪৯',
          lang === 'en' ? '💬 WhatsApp Founder' : '💬 হোয়াটসঅ্যাপে চ্যাট করুন',
          lang === 'en' ? '🎁 Request Free Demo' : '🎁 ফ্রি ডেমো রিকোয়েস্ট',
          lang === 'en' ? '💰 View Packages' : '💰 প্যাকেজসমূহ দেখুন'
        ]
      };
    }

    // 9. PAYMENT TERMS & GUARANTEE
    if (q.includes('payment') || q.includes('guarantee') || q.includes('bkash') || q.includes('nagad') || q.includes('bank') || q.includes('advance') || q.includes('deposit') || q.includes('নিরাপত্তা') || q.includes('পেমেন্ট') || q.includes('বিকাশ') || q.includes('নগদ') || q.includes('অগ্রিম')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `🛡️ **Payment Terms & Client Protection**:\n\n• **Milestone 1**: 100% Free Interactive Prototype (৳0). You test and approve the concept first.\n• **Milestone 2**: 50% Initial Project Commencement deposit after signing scope.\n• **Milestone 3**: 50% Final balance only after complete deployment, testing, and staff training handover.\n\n💳 **Accepted Payment Gateways**: bKash Merchant, Nagad, Bank Transfer (EFT / NPSB), and International Wire.\n\n🤝 Includes **30 to 90 days complimentary post-launch bug warranty** and 24/7 technical hotline.`
          : `🛡️ **পেমেন্ট শর্ত ও ক্লায়েন্ট নিরাপত্তা**:\n\n• **মাইলস্টোন ১**: ১০০% ফ্রি প্রোটোটাইপ ডেমো (০৳)। আপনি আগে লাইভ টেস্ট করে সন্তুষ্ট হবেন।\n• **মাইলস্টোন ২**: ডেমো পছন্দ হলে কাজ শুরুর সময় ৫০% ইনিশিয়াল ডিপোজিট।\n• **মাইলস্টোন ৩**: কাজ সম্পূর্ণ হওয়া, টেস্টিং ও টিম ট্রেনিং সম্পন্ন হওয়ার পর বাকি ৫০%।\n\n💳 **পেমেন্ট মেথড**: বিকাশ মার্চেন্ট, নগদ, ব্যাংক ট্রান্সফার ও আন্তর্জাতিক পেমেন্ট।\n\n🤝 প্রতি প্রজেক্টে রয়েছে **৩০ থেকে ৯০ দিনের ফ্রি ওয়ারেন্টি** ও সার্বক্ষণিক টেক সাপোর্ট।`,
        cardType: 'pricing',
        quickReplies: [
          lang === 'en' ? '🎁 Claim Free Prototype' : '🎁 ফ্রি প্রোটোটাইপ নিন',
          lang === 'en' ? '🛠️ Our Services' : '🛠️ আমাদের সার্ভিসসমূহ',
          lang === 'en' ? '⏱️ How fast is delivery?' : '⏱️ ডেলিভারি সময় কত?',
          lang === 'en' ? '👤 Chat on WhatsApp' : '👤 হোয়াটসঅ্যাপে কথা বলুন'
        ]
      };
    }

    // 10. BANGLA / LANGUAGE SUPPORT
    if (q.includes('bangla') || q.includes('bengali') || q.includes('language') || q.includes('বাংলা') || q.includes('বাংলিশ') || q.includes('ভাষা')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `🇧🇩 **100% Native Bangla & Banglish Understanding**:\n\nYes! Our bots are built specifically for the Bangladesh retail and service market.\n• Handles pure Bangla: *"আপনাদের ডেলিভারি চার্জ কত?"*\n• Handles colloquial Banglish: *"vai eta stock e ache? Price koto?"*\n• Handles English: *"Is this available in size L?"*\n\nYour customers will never face language friction or rigid error messages!`
          : `🇧🇩 **শতভাগ খাঁটি বাংলা ও বাংলিশ সাপোর্ট**:\n\nহ্যাঁ! আমাদের অটোমেশন বট সম্পূর্ণ বাংলাদেশের বাজার ও ক্রেতাদের কথা মাথায় রেখে তৈরি।\n• সাধু ও চলিত বাংলা: *"আপনাদের ক্যাশ অন ডেলিভারি আছে?"*\n• বাংলিশ রোমানাইজড: *"vai order confirm korbo kivabe?"*\n• ইংরেজি: *"What is the warranty policy?"*\n\nযেকোনোভাবে মেসেজ দিলেই সঠিক উত্তর ও অর্ডার সম্পন্ন করতে পারে।`,
        cardType: 'custom',
        quickReplies: [
          lang === 'en' ? '🛠️ Explore Services' : '🛠️ সার্ভিসসমূহ দেখুন',
          lang === 'en' ? '💰 See Pricing' : '💰 প্যাকেজের দাম দেখুন',
          lang === 'en' ? '🎁 Free Prototype' : '🎁 ফ্রি ডেমো টেস্ট'
        ]
      };
    }

    // 11. SIDE PROJECTS & PULSE MONITOR (monitor.hightechenterprise.xyz)
    if (q.includes('side project') || q.includes('sideproject') || q.includes('monitor') || q.includes('uptime') || q.includes('threat') || q.includes('cyber') || q.includes('status') || q.includes('telemetry') || q.includes('মনিটর') || q.includes('সাইড প্রজেক্ট') || q.includes('স্ট্যাটাস') || q.includes('আপটাইম')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `📡 **Enterprise Pulse Monitor**:\n\n**Enterprise Pulse Monitor** is our proprietary **Real-time global cyber-threat & tech-intelligence dashboard for high-tech enterprise clients**!\n\n• **Global Threat Telemetry**: Ingests active cyber-threat vectors and zero-day vulnerabilities in real time.\n• **Infrastructure Pulse**: Continuous 60s multi-region health checks and API heartbeat validation (99.98% SLA).\n• **WhatsApp & Webhook Latency**: Live latency tracking for client Meta WhatsApp nodes & Next.js clusters.\n• **Public Transparency**: Access live telemetry, incident logs, and security posture anytime.\n\n🔗 **Live Dashboard**: https://monitor.hightechenterprise.xyz/`
          : `📡 **এন্টারপ্রাইজ পালস মনিটর**:\n\n**এন্টারপ্রাইজ পালস মনিটর** হলো হাই-টেক এন্টারপ্রাইজ ক্লায়েন্টদের জন্য আমাদের রিয়েল-টাইম গ্লোবাল সাইবার-থ্রেট ও টেক-ইন্টেলিজেন্স ড্যাশবোর্ড!\n\n• **গ্লোবাল থ্রেট টেলিমেট্রি**: রিয়েল-টাইম সাইবার থ্রেট ও ভালনারেবিলিটি ট্র্যাকিং।\n• **লাইভ আপটাইম**: প্রতি ৬০ সেকেন্ডে মাল্টি-রিজিয়ন হার্টবিট চেক (৯৯.৯৮% এসএলএ)।\n• **মেটা ওয়েবহুক টেলিমেট্রি**: হোয়াটসঅ্যাপ এপিআই ও ক্লাস্টার পারফরম্যান্স মনিটরিং।\n• **স্বচ্ছ পাবলিক ড্যাশবোর্ড**: সরাসরি লাইভ স্ট্যাটাস ও হিস্ট্রি দেখার সুযোগ।\n\n🔗 **লাইভ লিঙ্ক**: https://monitor.hightechenterprise.xyz/`,
        cardType: 'tech',
        quickReplies: [
          lang === 'en' ? '🌐 Open monitor.hightechenterprise.xyz' : '🌐 মনিটর ড্যাশবোর্ড দেখুন',
          lang === 'en' ? '🛠️ Our Services' : '🛠️ আমাদের সার্ভিসসমূহ',
          lang === 'en' ? '🎁 Claim Free Demo' : '🎁 ফ্রি ডেমো রিকোয়েস্ট',
          lang === 'en' ? '👤 Chat on WhatsApp' : '👤 হোয়াটসঅ্যাপে কথা বলুন'
        ]
      };
    }

    // 12. PORTFOLIO & CLIENT WEBSITES DEMO
    if (q.includes('portfolio') || q.includes('client site') || q.includes('work') || q.includes('previous') || q.includes('project') || q.includes('grocery') || q.includes('druto bazar') || q.includes('druto') || q.includes('youtube') || q.includes('aumecho') || q.includes('sanctuary') || q.includes('channel') || q.includes('ইউটিউব') || q.includes('বাজার') || q.includes('মুদি') || q.includes('গ্রোসারি') || q.includes('পর্টফোলিও') || q.includes('আগের কাজ') || q.includes('ক্লায়েন্ট') || q.includes('ওয়েবসাইট') || q.includes('urban beast') || q.includes('optimum') || q.includes('secret style') || q.includes('one outfit') || q.includes('awesome point') || q.includes('pureflow') || q.includes('wpl')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `🌐 **Real Client Websites & Live Portfolio**:\n\nExplore our recently engineered client web portals, YouTube channel platforms, and eCommerce storefronts:\n\n1. **WPL PureFlow USA**: https://usa-pureflow.pages.dev/ (Liquid Futurism & Water Tech)\n2. **AumEcho Sanctuary**: https://aumecho-sanctuary.pages.dev/ (YouTube Channel Website & Vedic Audio Hub)\n3. **Optimum Power Engineering**: https://optimumpowerengineering.com/ (Heavy Industrial Engineering)\n4. **Druto Bazar BD**: https://kuddus-vai.github.io/Druto-Bazar-BD/ (Online Grocery & Daily Essentials)\n5. **Urban Beast BD**: https://kuddus-vai.github.io/Urban-Beast-BD-/ (Streetwear & Apparel)\n6. **One Outfit**: https://kuddus-vai.github.io/One-Outfit/ (Modern Fashion Store)\n7. **Secret Style BD**: https://kuddus-vai.github.io/Secret-Style-BD/ (Exclusive Boutique)\n8. **Awesome Point**: https://kuddus-vai.github.io/Awesome-Point/ (Multi-Product Retail)\n9. **Pulse Monitor**: https://monitor.hightechenterprise.xyz/ (Official Telemetry Lab)\n\nAll platforms feature sub-second loading, responsive mobile designs, and seamless WhatsApp ordering!`
          : `🌐 **আমাদের বাস্তব ক্লায়েন্ট ওয়েবসাইট ও লাইভ পোর্টফোলিও**:\n\nআমাদের তৈরি করা সাম্প্রতিক কিছু সফল ক্লায়েন্ট ওয়েবসাইট, ইউটিউব চ্যানেল প্ল্যাটফর্ম ও লাইভ ডেমো দেখুন:\n\n১. **WPL পিওরফ্লো ইউএসএ**: https://usa-pureflow.pages.dev/ (লিকুইড ফিউচারিজম ও ওয়াটার টেক)\n২. **আউমইকো স্যাঙ্কচুয়ারি**: https://aumecho-sanctuary.pages.dev/ (ইউটিউব চ্যানেল ওয়েবসাইট ও মেডিটেশন অডিও হাব)\n৩. **অপটিমাম পাওয়ার ইঞ্জিনিয়ারিং**: https://optimumpowerengineering.com/ (ইন্ডাস্ট্রিয়াল সাবস্টেশন ইঞ্জিনিয়ারিং)\n৪. **দ্রুত বাজার বিডি**: https://kuddus-vai.github.io/Druto-Bazar-BD/ (অনলাইন গ্রোসারি ও সুপারস্টোর)\n৫. **আরবান বিস্ট বিডি**: https://kuddus-vai.github.io/Urban-Beast-BD-/ (স্ট্রিটওয়্যার ও ফ্যাশন ই-কমার্স)\n৬. **ওয়ান আউটফিট**: https://kuddus-vai.github.io/One-Outfit/ (মডার্ন ফ্যাশন বুটিক)\n৭. **সিক্রেট স্টাইল বিডি**: https://kuddus-vai.github.io/Secret-Style-BD/ (এক্সক্লুসিভ লাক্সারি স্টোর)\n৮. **অসাম পয়েন্ট**: https://kuddus-vai.github.io/Awesome-Point/ (মাল্টি-ক্যাটাগরি রিটেইল)\n৯. **পালস মনিটর**: https://monitor.hightechenterprise.xyz/ (২৪/৭ আপটাইম মনিটর)\n\nপ্রত্যেকটি সাইট বিদ্যুৎগতিতে লোড হয় এবং সরাসরি ইন্টার‍্যাক্টিভ সিমুলেটরে টেস্ট করা যায়!`,
        cardType: 'tech',
        quickReplies: [
          lang === 'en' ? '🎁 Request Free Prototype' : '🎁 ফ্রি ডেমো রিকোয়েস্ট',
          lang === 'en' ? '💰 View Pricing Plans' : '💰 প্যাকেজের খরচ দেখুন',
          lang === 'en' ? '👤 Chat on WhatsApp' : '👤 হোয়াটসঅ্যাপে কথা বলুন'
        ]
      };
    }

    // 13. HUMAN ESCALATION / TALK TO PERSON
    if (q.includes('human') || q.includes('talk') || q.includes('call') || q.includes('person') || q.includes('agent') || q.includes('মানুষ') || q.includes('কথা') || q.includes('কল')) {
      return {
        sender: 'bot',
        text: lang === 'en'
          ? `👤 **Connect Directly with our Founder & Lead Architect**:\n\nYou can chat live or call **Md. Asaduzzaman** right now:\n\n📞 **Direct Phone**: 01996-921149 (+880 1996-921149)\n💬 **WhatsApp**: https://wa.me/8801996921149\n⏱️ **Typical response time**: Under 5 minutes!\n\nClick below to open WhatsApp instantly:`
          : `👤 **সরাসরি আমাদের প্রতিষ্ঠাতা ও প্রধান স্থপতির সাথে কথা বলুন**:\n\nআপনি এখনই সরাসরি **মোঃ আসাদুজ্জামান**-এর সাথে কল বা চ্যাট করতে পারেন:\n\n📞 **সরাসরি ফোন**: ০১৯৯৬-৯২১১৪৯ (+880 1996-921149)\n💬 **হোয়াটসঅ্যাপ**: https://wa.me/8801996921149\n⏱️ **গড় রেসপন্স টাইম**: ৫ মিনিটেরও কম সময়ে!\n\nসরাসরি হোয়াটসঅ্যাপে যেতে নিচের বাটনে ক্লিক করুন:`,
        cardType: 'contact',
        quickReplies: [
          lang === 'en' ? '💬 Open WhatsApp' : '💬 হোয়াটসঅ্যাপ চালু করুন',
          lang === 'en' ? '🎁 Claim Free Demo' : '🎁 ফ্রি ডেমো রিকোয়েস্ট',
          lang === 'en' ? '💰 View Packages' : '💰 প্যাকেজসমূহ দেখুন'
        ]
      };
    }

    // DEFAULT FALLBACK - Guides back to key topics
    return {
      sender: 'bot',
      text: lang === 'en'
        ? `Thanks for your question! As your automated concierge for **High-Tech Enterprise**, I can give you instant answers on our solutions, pricing in Bangladesh, free 48-hour prototype demo, delivery speed, and Savar HQ contact details.\n\nPlease select any topic below or tap **"Chat with Founder on WhatsApp"** for custom project requirements:`
        : `ধন্যবাদ আপনার প্রশ্নের জন্য! **হাই-টেক এন্টারপ্রাইজ**-এর ভিজিটর কনসিয়্যার্জ হিসেবে আমি আমাদের সার্ভিস, প্যাকেজের খরচ, ফ্রি ৪৮ ঘণ্টার ডেমো প্রোটোটাইপ ও সাভার অফিসের বিষয়ে তাত্ক্ষণিক তথ্য দিতে পারি।\n\nনিচের অপশনগুলো বেছে নিন অথবা সরাসরি প্রতিষ্ঠাতার সাথে হোয়াটসঅ্যাপে কথা বলুন:`,
      cardType: 'menu',
      quickReplies: [
        lang === 'en' ? '🛠️ What We Build' : '🛠️ আমাদের সার্ভিসসমূহ',
        lang === 'en' ? '💰 Pricing & Packages' : '💰 প্যাকেজের দাম ও খরচ',
        lang === 'en' ? '🎁 Free 48h Prototype' : '🎁 ফ্রি প্রোটোটাইপ ডেমো',
        lang === 'en' ? '⏱️ Turnaround Time' : '⏱️ কাজের সময়সীমা',
        lang === 'en' ? '🏢 Savar Office & Founder' : '🏢 সাভার অফিস ও যোগাযোগ',
        lang === 'en' ? '👤 Chat with Founder on WhatsApp' : '👤 হোয়াটসঅ্যাপে প্রতিষ্ঠাতার সাথে কথা'
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    // If query was human WhatsApp trigger
    if (query.includes('Open WhatsApp') || query.includes('হোয়াটসঅ্যাপ চালু') || query.includes('WhatsApp Founder') || query.includes('Chat with Founder') || query.includes('প্রতিষ্ঠাতার সাথে কথা')) {
      window.open(COMPANY_INFO.whatsappUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // If user clicked call
    if (query.includes('Call +880') || query.includes('কল করুন')) {
      window.location.href = `tel:${COMPANY_INFO.phone}`;
      return;
    }

    // If user clicked monitor dashboard link
    if (query.includes('monitor.hightechenterprise.xyz') || query.includes('মনিটর ড্যাশবোর্ড')) {
      window.open('https://monitor.hightechenterprise.xyz/', '_blank', 'noopener,noreferrer');
      return;
    }

    // If user requested Prototype directly
    if (query.includes('Start Prototype') || query.includes('এখনই ডেমো') || query.includes('Claim Free') || query.includes('ফ্রি প্রোটোটাইপ')) {
      setActiveTab('prototype');
      return;
    }

    playSound('send');
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Instant realistic ~300ms cadence without slow AI delay
    setTimeout(() => {
      const responseData = matchResponse(query, language);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        ...responseData,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
      playSound('receive');
    }, 320);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleReaction = (msgId: string, type: 'up' | 'down') => {
    setMessages(prev => prev.map(m => {
      if (m.id === msgId) {
        return { ...m, reaction: m.reaction === type ? null : type };
      }
      return m;
    }));

    if (type === 'down') {
      // Prompt human handover if bot answer was not helpful
      setTimeout(() => {
        const escalationMsg: ChatMessage = {
          id: `bot-esc-${Date.now()}`,
          sender: 'bot',
          text: language === 'en'
            ? `I noticed this answer didn't fully answer your question. Would you like to chat directly with our Lead Architect on WhatsApp (+880 1996-921149)?`
            : `দুঃখিত উত্তরটি যথাযথ না হওয়ায়! আপনি কি আমাদের প্রধান স্থপতির সাথে সরাসরি হোয়াটসঅ্যাপে কথা বলতে চান?`,
          timestamp: 'Just now',
          quickReplies: [
            language === 'en' ? '💬 Chat with Founder on WhatsApp' : '💬 হোয়াটসঅ্যাপে প্রতিষ্ঠাতার সাথে কথা',
            language === 'en' ? '🛠️ Browse All Services' : '🛠️ সব সার্ভিস দেখুন'
          ]
        };
        setMessages(prev => [...prev, escalationMsg]);
      }, 400);
    }
  };

  const handlePrototypeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!protoBizName.trim() || !protoPhone.trim()) return;

    setProtoSubmitted(true);
    const summaryText = `Hello High-Tech Enterprise! I am requesting a Free 48-Hour Prototype Demo for my business:\n\n• Business Name: ${protoBizName}\n• Industry: ${protoIndustry}\n• Desired Solution: ${protoService}\n• Contact Number: ${protoPhone}\n\nPlease confirm my prototype preview schedule.`;
    const targetUrl = `https://wa.me/8801996921149?text=${encodeURIComponent(summaryText)}`;

    try {
      await submitQuoteToGmail({
        name: protoBizName,
        phone: protoPhone,
        company: protoBizName,
        serviceInterest: `${protoIndustry} - ${protoService}`,
        formTitle: 'Concierge Bot - Free 48h Prototype & Quote Request',
        source: 'FloatingWhatsApp Bot'
      });
    } catch (err) {
      console.warn('Bot prototype dispatch note:', err);
    }

    // Add confirmation to chat flow
    setTimeout(() => {
      setActiveTab('chat');
      setProtoSubmitted(false);
      setProtoBizName('');
      setProtoPhone('');
      const confirmMsg: ChatMessage = {
        id: `bot-proto-${Date.now()}`,
        sender: 'bot',
        text: language === 'en'
          ? `🎉 **Prototype & Quote Request Registered!**\n\n• Business: **${protoBizName}**\n• Industry: **${protoIndustry}**\n• Solution: **${protoService}**\n• Phone: **${protoPhone}**\n\n✅ *Dispatched directly to official Gmail (${PRIMARY_GMAIL}) and Savar engineering team.*\n\nOur team will assemble your functioning interactive preview within 48 hours. Tap below to send this directly to WhatsApp:`
          : `🎉 **ফ্রি প্রোটোটাইপ ও কোটেশন রিকোয়েস্ট গৃহীত হয়েছে!**\n\n• প্রতিষ্ঠান: **${protoBizName}**\n• ইন্ডাস্ট্রি: **${protoIndustry}**\n• সল্যুশন: **${protoService}**\n• ফোন নম্বর: **${protoPhone}**\n\n✅ *সরাসরি আমাদের অফিসিয়াল জি-মেইল (${PRIMARY_GMAIL}) এবং সাভার ইঞ্জিনিয়ারিং টিমের নিকট পৌঁছেছে।*\n\n৪৮ ঘণ্টার মধ্যে আপনার ডেমো প্রস্তুত করা হবে। সরাসরি হোয়াটসঅ্যাপে পাঠাতে নিচের বাটনে ট্যাপ করুন:`,
        timestamp: 'Just now',
        cardType: 'prototype',
        quickReplies: [
          language === 'en' ? '💬 Open WhatsApp with Details' : '💬 বিস্তারিত হোয়াটসঅ্যাপে পাঠান',
          language === 'en' ? '💰 View Pricing & Packages' : '💰 প্যাকেজের দাম দেখুন',
          language === 'en' ? '🏢 Savar Office Info' : '🏢 সাভার অফিস সম্পর্কে'
        ]
      };
      setMessages(prev => [...prev, confirmMsg]);
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const filteredTopics = KNOWLEDGE_TOPICS.filter(t => 
    t.title.toLowerCase().includes(searchTopic.toLowerCase()) || 
    t.description.toLowerCase().includes(searchTopic.toLowerCase()) ||
    t.titleBn.includes(searchTopic) ||
    t.descriptionBn.includes(searchTopic)
  );

  return (
    <div id="automated-chatbot-root" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating CTA Tooltip for Visitors */}
      {showTooltip && !isOpen && (
        <div 
          id="chatbot-visitor-tooltip"
          className="mb-3 mr-1 bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-cyan-500/30 flex items-center gap-3 animate-bounce duration-1000 max-w-xs cursor-pointer group"
          onClick={() => {
            setIsOpen(true);
            setShowTooltip(false);
            setUnreadCount(0);
          }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-slate-950" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-cyan-300 flex items-center gap-1.5">
              <span>{language === 'bn' ? 'হাই-টেক কনসিয়্যার্জ' : 'High-Tech Concierge'}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </p>
            <p className="text-slate-300 text-[11px] leading-tight mt-0.5">
              {language === 'bn'
                ? 'ওয়েবসাইট তৈরি, মেটা হোয়াটসঅ্যাপ বট বা প্যাকেজের দাম জানতে যেকোনো প্রশ্ন করুন!'
                : 'Have questions about pricing, websites, or WhatsApp bots? Ask our instant bot!'}
            </p>
          </div>
          <button 
            id="close-visitor-tooltip-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }} 
            className="text-slate-400 hover:text-white p-1 ml-auto"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Bot Window */}
      {isOpen && (
        <div 
          id="automated-concierge-panel"
          className="w-[92vw] sm:w-[420px] h-[580px] sm:h-[640px] max-h-[85vh] bg-slate-950/98 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden mb-4 transition-all duration-300 ring-1 ring-white/10"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/70 border-b border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Zap className="w-5 h-5 text-slate-950 stroke-[2.5]" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-white tracking-wide">High-Tech Enterprise</h3>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {language === 'bn' ? 'স্মার্ট রুল ইঞ্জিন' : 'Zero-AI Engine'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{language === 'bn' ? 'সাভার, ঢাকা' : 'Savar, Dhaka'}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-emerald-400 font-medium">{language === 'bn' ? '⚡ তাৎক্ষণিক গাইড' : '⚡ Instant Guide'}</span>
                  </p>
                </div>
              </div>

              {/* Utility action buttons */}
              <div className="flex items-center gap-1">
                {/* Language Switcher */}
                <button
                  id="bot-language-switch-btn"
                  onClick={handleToggleLanguage}
                  className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-bold text-slate-300 flex items-center gap-1 transition-colors"
                  title="Switch Language (English / বাংলা)"
                >
                  <Languages className="w-3 h-3 text-cyan-400" />
                  <span>{language === 'en' ? 'বাং' : 'EN'}</span>
                </button>

                {/* User-friendly sound toggle (persisted, live-preview chime on unmute, zero session restart) */}
                <button
                  id="bot-sound-toggle-btn"
                  onClick={handleToggleSound}
                  aria-label={isMuted ? (language === 'en' ? 'Unmute chime audio' : 'সাউন্ড অন করুন') : (language === 'en' ? 'Mute chime audio' : 'সাউন্ড মিউট করুন')}
                  aria-pressed={!isMuted}
                  className={`relative p-1.5 rounded-lg border transition-all duration-200 flex items-center justify-center ${
                    isMuted
                      ? 'bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/30 text-rose-300 hover:text-rose-200'
                      : 'bg-cyan-500/15 hover:bg-cyan-500/25 border-cyan-500/40 text-cyan-300 hover:text-white shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                  }`}
                  title={isMuted 
                    ? (language === 'en' ? 'Sound is Muted (Click to Unmute)' : 'সাউন্ড মিউট করা আছে (চালু করতে ক্লিক করুন)') 
                    : (language === 'en' ? 'Sound is Active (Click to Mute)' : 'সাউন্ড চালু আছে (মিউট করতে ক্লিক করুন)')
                  }
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <Volume2 className="w-3.5 h-3.5 text-cyan-300" />
                      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-75 pointer-events-none"></span>
                    </div>
                  )}
                </button>

                {/* Reset Chat */}
                <button
                  id="bot-reset-chat-btn"
                  onClick={() => {
                    setMessages([getInitialMessage(language)]);
                    setActiveTab('chat');
                  }}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Restart Conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-300" />
                </button>

                {/* Close */}
                <button
                  id="bot-close-window-btn"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors ml-0.5"
                  title="Close Assistant"
                >
                  <X className="w-4 h-4 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Transient Sound Toggle Feedback Banner */}
            {soundFeedbackText && (
              <div 
                id="bot-sound-feedback-badge"
                className="flex items-center justify-between px-3 py-1.5 bg-slate-900/95 border border-cyan-500/30 rounded-xl text-[11px] text-cyan-200 shadow-sm transition-all"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  {soundFeedbackText}
                </span>
                <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                  {language === 'en' ? 'Session uninterrupted' : 'সেশন বহাল আছে'}
                </span>
              </div>
            )}

            {/* Navigation Tabs for Website Visitors */}
            <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-slate-950/80 border border-white/10 text-[11px] font-medium">
              <button
                id="tab-btn-chat"
                onClick={() => setActiveTab('chat')}
                className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'chat' 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Chat' : 'চ্যাট'}</span>
              </button>

              <button
                id="tab-btn-topics"
                onClick={() => setActiveTab('topics')}
                className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'topics' 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Topics' : 'টপিক'}</span>
              </button>

              <button
                id="tab-btn-prototype"
                onClick={() => setActiveTab('prototype')}
                className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'prototype' 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Gift className="w-3.5 h-3.5 text-amber-300" />
                <span>{language === 'en' ? 'Free Demo' : 'ফ্রি ডেমো'}</span>
              </button>

              <button
                id="tab-btn-contact"
                onClick={() => setActiveTab('contact')}
                className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'contact' 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Savar HQ' : 'সাভার'}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: INTERACTIVE CHAT CONVERSATION */}
          {activeTab === 'chat' && (
            <>
              {/* Message scroll container */}
              <div id="concierge-messages-list" className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-cyan-500/20">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed transition-all shadow-md ${
                        m.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-medium rounded-br-none'
                          : 'bg-slate-900/90 text-slate-200 border border-white/10 rounded-bl-none'
                      }`}
                    >
                      {/* Formatted body */}
                      <div className="whitespace-pre-line">
                        {m.text.split('\n').map((line, idx) => {
                          // bold styling parser
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={idx} className={idx > 0 ? 'mt-1' : ''}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={pIdx} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        })}
                      </div>

                      {/* Bot Card Enhancements */}
                      {m.cardType === 'pricing' && (
                        <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                          <span className="text-cyan-300 font-semibold">{language === 'bn' ? 'প্যাকেজ: ১২,০০০৳ / ২৪,০০০৳ / ৪৫,০০০৳' : 'Tiers: ৳12k / ৳24k / ৳45k'}</span>
                          <button
                            onClick={() => setActiveTab('prototype')}
                            className="px-2 py-1 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold transition-colors cursor-pointer"
                          >
                            {language === 'bn' ? 'ফ্রি ডেমো দেখুন →' : 'Test Demo →'}
                          </button>
                        </div>
                      )}

                      {m.cardType === 'prototype' && (
                        <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                          <span className="text-emerald-300 font-semibold">{language === 'bn' ? '৪৮ ঘণ্টায় ডেলিভারি • অগ্রিম ফি শূন্য' : '48h Delivery • 0 Upfront Deposit'}</span>
                          <button
                            onClick={() => setActiveTab('prototype')}
                            className="px-2 py-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold transition-colors cursor-pointer"
                          >
                            {language === 'bn' ? 'এখনই ক্লেইম করুন →' : 'Claim Now →'}
                          </button>
                        </div>
                      )}

                      {m.cardType === 'contact' && (
                        <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center gap-2 text-[11px]">
                          <a
                            href={COMPANY_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-1 px-2 rounded-md bg-emerald-500 text-slate-950 font-bold text-center hover:bg-emerald-400 transition-colors flex items-center justify-center gap-1"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                          <a
                            href={`tel:${COMPANY_INFO.phone}`}
                            className="flex-1 py-1 px-2 rounded-md bg-white/10 text-white font-bold text-center hover:bg-white/20 transition-colors flex items-center justify-center gap-1"
                          >
                            <Phone className="w-3 h-3" />
                            <span>01996-921149</span>
                          </a>
                        </div>
                      )}

                      {/* Message reactions & copy utility */}
                      {m.sender === 'bot' && (
                        <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                          <span className="text-[9px] text-slate-400">{m.timestamp}</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleCopyText(m.id, m.text)}
                              className="hover:text-cyan-300 transition-colors p-0.5"
                              title="Copy Answer"
                            >
                              {copiedId === m.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            </button>
                            <button
                              onClick={() => handleReaction(m.id, 'up')}
                              className={`hover:text-emerald-400 transition-colors p-0.5 ${m.reaction === 'up' ? 'text-emerald-400' : ''}`}
                              title="Helpful"
                            >
                              <ThumbsUp className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => handleReaction(m.id, 'down')}
                              className={`hover:text-rose-400 transition-colors p-0.5 ${m.reaction === 'down' ? 'text-rose-400' : ''}`}
                              title="Needs Human Assistance"
                            >
                              <ThumbsDown className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quick reply chips under this message */}
                    {m.quickReplies && m.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                        {m.quickReplies.map((r, rIdx) => (
                          <button
                            key={rIdx}
                            onClick={() => handleQuickReply(r)}
                            className="px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-cyan-950/80 border border-cyan-500/25 text-cyan-300 text-[11px] font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center gap-1"
                          >
                            <span>{r}</span>
                            <ChevronRight className="w-3 h-3 opacity-60" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-slate-900/90 border border-white/10 w-24">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    <span className="text-[10px] text-slate-400 ml-1 font-mono">0ms AI</span>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-slate-900/90 border-t border-white/10 flex items-center gap-2">
                <input
                  id="concierge-chat-input"
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendMessage();
                  }}
                  placeholder={language === 'en' ? 'Ask about pricing, website demo, or services...' : 'দাম, ডেমো বা সার্ভিস সম্পর্কে লিখুন...'}
                  className="flex-1 bg-slate-950/80 border border-white/10 focus:border-cyan-400/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 transition-all"
                />
                <button
                  id="concierge-chat-send-btn"
                  onClick={() => handleSendMessage()}
                  disabled={!inputVal.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-slate-950 transition-all flex-shrink-0 shadow-lg shadow-cyan-500/20 active:scale-95"
                  title="Send Question"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* TAB 2: VISUAL TOPIC DIRECTORY */}
          {activeTab === 'topics' && (
            <div id="topics-directory-panel" className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-cyan-500/20">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  id="topics-search-input"
                  type="text"
                  value={searchTopic}
                  onChange={(e) => setSearchTopic(e.target.value)}
                  placeholder={language === 'en' ? 'Search topics (e.g. pricing, prototype, tech)...' : 'টপিক খুঁজুন (যেমন: দাম, ডেমো, টেক)...'}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {filteredTopics.map((topic) => {
                  const IconComp = topic.icon;
                  return (
                    <div
                      key={topic.id}
                      onClick={() => {
                        setActiveTab('chat');
                        handleSendMessage(topic.query);
                      }}
                      className="p-3.5 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer group flex items-start gap-3"
                    >
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                        <IconComp className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {language === 'en' ? topic.title : topic.titleBn}
                          </h4>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                            {topic.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                          {language === 'en' ? topic.description : topic.descriptionBn}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-2" />
                    </div>
                  );
                })}
              </div>

              {/* Direct Founder Handoff in Topics */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-cyan-950/40 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-emerald-300">
                    {language === 'en' ? 'Have a custom inquiry?' : 'বিশেষ কোনো রিকোয়ারমেন্ট আছে?'}
                  </h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">
                    {language === 'en' ? 'Chat directly with Md. Asaduzzaman' : 'সরাসরি মোঃ আসাদুজ্জামানের সাথে কথা বলুন'}
                  </p>
                </div>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE FREE PROTOTYPE BUILDER */}
          {activeTab === 'prototype' && (
            <div id="prototype-request-panel" className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/20">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                  <Gift className="w-4 h-4 text-amber-300" />
                  <span>{language === 'en' ? 'Free 48-Hour Prototype Offer' : 'ফ্রি ৪৮ ঘণ্টার প্রোটোটাইপ অফার'}</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                  {language === 'en'
                    ? 'Test before you invest. We review your business requirements and construct a live interactive prototype preview completely free.'
                    : 'অগ্রিম পেমেন্ট ছাড়াই আপনার ব্যবসার জন্য একটি লাইভ ওয়ার্কিং প্রোটোটাইপ বানিয়ে দেখাব। পছন্দ হলে প্রজেক্টে এগ্রি করবেন।'}
                </p>
              </div>

              <form onSubmit={handlePrototypeSubmit} className="space-y-3.5">
                {/* Step 1: Industry */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                    <span>{language === 'en' ? '1. Your Industry / Business Type:' : '১. আপনার ইন্ডাস্ট্রি বা ব্যবসার ধরন:'}</span>
                  </label>
                  <select
                    id="proto-industry-select"
                    value={protoIndustry}
                    onChange={(e) => setProtoIndustry(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="eCommerce / Retail">{language === 'en' ? 'Fashion, Clothing & Retail' : 'ফ্যাশন, ক্লোদিং ও রিটেল (ই-কমার্স)'}</option>
                    <option value="Electronics & Gadgets">{language === 'en' ? 'Electronics & Gadgets' : 'ইলেকট্রনিক্স ও গ্যাজেট'}</option>
                    <option value="Cosmetics & Skincare">{language === 'en' ? 'Cosmetics & Skincare' : 'কসমেটিকস ও স্কিনকেয়ার'}</option>
                    <option value="Wholesale & Distribution">{language === 'en' ? 'Wholesale & B2B Distribution' : 'পাইকারি ও বি২বি ডিস্ট্রিবিউশন'}</option>
                    <option value="Real Estate & Properties">{language === 'en' ? 'Real Estate & Construction' : 'রিয়েল এস্টেট ও কনস্ট্রাকশন'}</option>
                    <option value="Agency & Professional Services">{language === 'en' ? 'Agency & Consulting' : 'এজেন্সি ও কনসাল্টিং'}</option>
                    <option value="Education & Coaching">{language === 'en' ? 'Education & Institute' : 'শিক্ষা ও কোচিং প্রতিষ্ঠান'}</option>
                  </select>
                </div>

                {/* Step 2: Desired Service */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                    <span>{language === 'en' ? '2. Desired Solution:' : '২. প্রয়োজনীয় সল্যুশন:'}</span>
                  </label>
                  <select
                    id="proto-service-select"
                    value={protoService}
                    onChange={(e) => setProtoService(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="WhatsApp Sales Bot & Auto-Reply">{language === 'en' ? 'WhatsApp 24/7 Sales Bot (Official Cloud API)' : 'হোয়াটসঅ্যাপ ২৪/৭ সেলস বট (অফিসিয়াল ক্লাউড এপিআই)'}</option>
                    <option value="High-Speed Modern Website">{language === 'en' ? 'High-Speed Next.js Modern Website' : 'হাই-স্পিড নেক্সট.জেএস আধুনিক ওয়েবসাইট'}</option>
                    <option value="Full Omnichannel + Courier Sync">{language === 'en' ? 'Full Omnichannel (Website + WhatsApp + Courier Sync)' : 'ফুল অমনিচ্যানেল (ওয়েবসাইট + হোয়াটসঅ্যাপ + কুরিয়ার সিঙ্ক)'}</option>
                    <option value="Custom CRM & bKash Automation">{language === 'en' ? 'Custom CRM & bKash Automation' : 'কাস্টম সিআরএম ও বিকাশ অটোমেশন'}</option>
                  </select>
                </div>

                {/* Step 3: Contact Details */}
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-slate-300">
                    {language === 'en' ? '3. Your Business & Contact Info:' : '৩. আপনার ব্যবসা ও যোগাযোগের তথ্য:'}
                  </label>
                  <input
                    id="proto-bizname-input"
                    type="text"
                    required
                    value={protoBizName}
                    onChange={(e) => setProtoBizName(e.target.value)}
                    placeholder={language === 'en' ? 'Business Name or Facebook Page (e.g. Urban Attire)' : 'ব্যবসার নাম বা ফেসবুক পেইজ (যেমন: আরবান অ্যাটায়ার)'}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    id="proto-phone-input"
                    type="tel"
                    required
                    value={protoPhone}
                    onChange={(e) => setProtoPhone(e.target.value)}
                    placeholder={language === 'en' ? 'WhatsApp Phone Number (e.g. 01712-345678)' : 'হোয়াটসঅ্যাপ ফোন নম্বর (যেমন: 01712-345678)'}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  id="proto-submit-btn"
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-90 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'en' ? 'Submit for Free 48h Prototype' : 'ফ্রি ৪৮ ঘণ্টার ডেমো রিকোয়েস্ট করুন'}</span>
                </button>
              </form>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-[10px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{language === 'en' ? 'Zero deposit required. We present your interactive prototype in 48 hours for review.' : 'কোনো অগ্রিম ফি লাগবে না। আমরা ৪৮ ঘণ্টার মধ্যে লাইভ প্রোটোটাইপ প্রস্তুত করে দেখাব।'}</span>
              </div>
            </div>
          )}

          {/* TAB 4: SAVAR HEADQUARTERS & CONTACT */}
          {activeTab === 'contact' && (
            <div id="contact-headquarters-panel" className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-cyan-500/20">
              {/* Office Location Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{language === 'en' ? 'Savar Engineering HQ' : 'সাভার ইঞ্জিনিয়ারিং হেডকোয়ার্টার'}</h4>
                      <p className="text-[10px] text-emerald-400 font-mono">● {language === 'en' ? 'Operational & Open' : 'খোলা ও সার্বক্ষণিক সক্রিয়'}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    Dhaka 1217
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-1 border-t border-white/5">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{language === 'en' ? 'Savar, Dhaka 1217, Bangladesh' : 'সাভার, ঢাকা ১২১৭, বাংলাদেশ'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{language === 'en' ? '9:00 AM – 10:00 PM BST (Every Day)' : 'সকাল ৯:০০ – রাত ১০:০০ (প্রতিদিন)'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{language === 'en' ? <>Founder & Architect: <strong>Md. Asaduzzaman</strong></> : <>প্রতিষ্ঠাতা ও লিড আর্কিটেক্ট: <strong>মোঃ আসাদুজ্জামান</strong></>}</span>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="space-y-2">
                {/* WhatsApp button */}
                <a
                  id="contact-whatsapp-direct-link"
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-md">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">{language === 'en' ? 'Chat on WhatsApp' : 'হোয়াটসঅ্যাপে চ্যাট করুন'}</p>
                      <p className="text-[10px] text-slate-400">+880 1996-921149 • {language === 'en' ? 'Response in < 5 mins' : 'গড় রেসপন্স < ৩ মিনিট'}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Call button */}
                <a
                  id="contact-phone-direct-link"
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">{language === 'en' ? 'Call Technical Hotline' : 'সরাসরি হটলাইনে কল দিন'}</p>
                      <p className="text-[10px] text-slate-400">01996-921149 ({language === 'en' ? 'Direct Line' : 'সরাসরি লাইন'})</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email button */}
                <a
                  id="contact-email-direct-link"
                  href={`mailto:${COMPANY_INFO.email}?subject=Inquiry%20from%20Website%20Visitor`}
                  className="w-full p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">{language === 'en' ? 'Official Email' : 'অফিসিয়াল ইমেইল'}</p>
                      <p className="text-[10px] text-slate-400">{COMPANY_INFO.email}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Consultation Invite Note */}
              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-slate-300 leading-relaxed">
                {language === 'en' ? (
                  <>☕ <strong>Visiting Savar?</strong> You are welcome to visit our engineering office for tea and an in-person discovery session. For remote teams, we conduct structured 30-minute Google Meet consultations.</>
                ) : (
                  <>☕ <strong>সাভার অফিসে চায়ের আমন্ত্রণ!</strong> আমাদের অফিসে সরাসরি এসে আপনার ব্যবসার প্রজেক্ট ও অটোমেশন নিয়ে আলোচনা করতে পারেন। দূরবর্তী টিমের জন্য আমরা গুগল মিটে ৩০ মিনিটের ফ্রি সেশন পরিচালনা করি।</>
                )}
              </div>
            </div>
          )}

          {/* Footer Bar */}
          <div className="px-4 py-2 bg-slate-950 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>{language === 'en' ? 'Online • Savar, Dhaka HQ' : 'অনলাইন • সাভার, ঢাকা হেডকোয়ার্টার'}</span>
            </span>
            <span className="font-mono text-cyan-400/80">hightechenterprise.xyz</span>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        id="automated-concierge-toggle-btn"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
          setUnreadCount(0);
        }}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-95 group relative ${
          isOpen
            ? 'bg-slate-900 border border-cyan-500/40 text-cyan-400'
            : 'bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105'
        }`}
        title="Open High-Tech Enterprise Concierge"
      >
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7 fill-slate-950 stroke-[2.5]" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center border-2 border-slate-950 animate-pulse">
                {unreadCount}
              </span>
            )}
          </>
        )}
      </button>

    </div>
  );
};

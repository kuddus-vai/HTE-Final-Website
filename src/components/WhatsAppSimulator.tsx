import React, { useState, useRef, useEffect } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  MessageSquareCode, 
  CheckCheck, 
  Check, 
  Phone, 
  Video, 
  MoreVertical, 
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

interface SimulatorMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  card?: {
    title: string;
    description: string;
    badge?: string;
    actionText?: string;
    actionUrl?: string;
  };
}

export const WhatsAppSimulator: React.FC<{ onOpenDemoModal: () => void }> = ({ onOpenDemoModal }) => {
  const { language } = useLanguage();

  const getInitialBotMessage = (lang: string): SimulatorMessage => ({
    id: 'm-1',
    sender: 'bot',
    text: lang === 'bn'
      ? "👋 আসসালামু আলাইকুম! হাই-টেক এন্টারপ্রাইজে স্বাগতম। আমি আপনার ২৪/৭ স্বয়ংক্রিয় বিজনেস অ্যাসিস্ট্যান্ট।\n\nআমি কাস্টমারের প্রশ্নের উত্তর দিই, অর্ডার কনফার্ম করি এবং সরাসরি কুরিয়ার ও সিআরএমে ডেটা পাঠাই। নিচের কোনো অপশনে ট্যাপ করুন অথবা যেকোনো প্রশ্ন লিখুন!"
      : "👋 Assalamu Alaikum & Welcome to High-Tech Enterprise! I am your 24/7 automated business assistant.\n\nI handle customer queries, confirm orders, sync your CRM, and qualify leads with zero wait time. Tap an option below or type any question!",
    timestamp: lang === 'bn' ? 'এইমাত্র' : 'Just now',
    card: {
      title: lang === 'bn' ? '৭০% স্বয়ংক্রিয় কাস্টমার কোয়েরি সমাধান' : '70% Automated Query Resolution',
      description: lang === 'bn' 
        ? 'আপনি ঘুমিয়ে থাকলেও বাংলা ও ইংরেজিতে তাৎক্ষণিকভাবে কাস্টমার অর্ডার প্রসেস হয়।'
        : 'While you sleep, orders and inquiries are handled instantly in English or Bangla.',
      badge: lang === 'bn' ? 'হাই-টেক এন্টারপ্রাইজ ইঞ্জিন' : 'High-Tech Enterprise Engine'
    }
  });

  const [messages, setMessages] = useState<SimulatorMessage[]>([getInitialBotMessage(language)]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeLog, setActiveLog] = useState<{
    intent: string;
    confidence: string;
    crmAction: string;
    latency: string;
  }>({
    intent: language === 'bn' ? 'সেশন শুরু হয়েছে' : 'Session_Initialized',
    confidence: '100%',
    crmAction: language === 'bn' ? 'সাভার/ঢাকা ক্লাস্টারে ভিজিটর সেশন কানেক্ট হয়েছে' : 'Visitor session tracked & primed in Savar/Dhaka cluster',
    latency: '85ms'
  });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  // Sync welcome message on language change if no user chat yet
  useEffect(() => {
    if (messages.length <= 1) {
      setMessages([getInitialBotMessage(language)]);
      setActiveLog({
        intent: language === 'bn' ? 'সেশন শুরু হয়েছে' : 'Session_Initialized',
        confidence: '100%',
        crmAction: language === 'bn' ? 'সাভার/ঢাকা ক্লাস্টারে ভিজিটর সেশন কানেক্ট হয়েছে' : 'Visitor session tracked & primed in Savar/Dhaka cluster',
        latency: '85ms'
      });
    }
  }, [language]);

  const quickPrompts = language === 'bn' ? [
    "হোয়াটসঅ্যাপ অটো-রিপ্লাই কীভাবে কাজ করে?",
    "আমার শপ / শপিফাইতে কি ইন্টিগ্রেট হবে?",
    "অটোমেশন প্যাকেজের দাম কত?",
    "আমার ব্যবসার জন্য ফ্রি ওয়েবসাইট ডেমো চাই"
  ] : [
    "How does WhatsApp Auto-Reply work?",
    "Can you integrate with my Shopify store?",
    "How much does the automation package cost?",
    "I want a Free Website Demo for my business"
  ];

  useEffect(() => {
    // Prevent scrolling the browser window down to the simulator on initial homepage load
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Only scroll the internal chat container element, NEVER the window
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: SimulatorMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let botReplyText = "";
      let cardData: SimulatorMessage['card'] | undefined;
      let logData = {
        intent: language === 'bn' ? 'সাধারণ প্রশ্ন' : 'General_Inquiry',
        confidence: '98.5%',
        crmAction: language === 'bn' ? 'সিআরএমে কাস্টমার ইন্টারঅ্যাকশন রেকর্ড হয়েছে' : 'Lead interaction recorded in CRM',
        latency: '142ms'
      };

      const lower = text.toLowerCase();

      if (lower.includes('work') || lower.includes('70%') || lower.includes('auto-reply') || lower.includes('কীভাবে') || lower.includes('কাজ')) {
        botReplyText = language === 'bn'
          ? "আমাদের হোয়াটসঅ্যাপ অটো-রিপ্লাই ইঞ্জিন সরাসরি অফিসিয়াল মেটা ক্লাউড এপিআইয়ের সাথে যুক্ত। এটি বাংলা, বাংলিশ ও ইংরেজিতে কাস্টমারের কথা বুঝতে পারে, ইনভেন্টরি বা দামের ডেটাবেস চেক করে এবং ৩ সেকেন্ডের মধ্যে সঠিক উত্তর প্রদান করে।\n\nব্যবসার ৭০% সাধারণ প্রশ্ন (প্রোডাক্টের স্টক, সাইজ চার্ট, ডেলিভারি চার্জ, পেমেন্ট অপশন) সম্পূর্ণ মানুষের সাহায্য ছাড়াই অটোমেট হয়ে যায়!"
          : "Our WhatsApp Auto-Reply engine connects directly to the official Meta Cloud API. It reads customer questions in natural language (English & Bangla), queries your inventory or pricing database, and provides immediate answers in under 3 seconds.\n\nOver 70% of frequent queries (availability, size guide, delivery charges, payment method) are resolved completely autonomously!";
        logData = {
          intent: language === 'bn' ? 'হোয়াটসঅ্যাপ অটোমেশন ব্যাখ্যা' : 'Explain_WhatsApp_Automation',
          confidence: '99.2%',
          crmAction: language === 'bn' ? 'প্রোডাক্ট নলেজবেস ট্রিগার হয়েছে' : 'Triggered product knowledge RAG model',
          latency: '160ms'
        };
      } else if (lower.includes('shopify') || lower.includes('woocommerce') || lower.includes('integrate') || lower.includes('শপ') || lower.includes('সিঙ্ক')) {
        botReplyText = language === 'bn'
          ? "হ্যাঁ, অবশ্যই! আমরা শপিফাই, উকমার্স, কাস্টম নেক্সট.জেএস ওয়েবসাইট এবং বাংলাদেশের প্রধান কুরিয়ার সার্ভিসগুলোর (পাঠাও, স্টেডফাস্ট, রেডএক্স) সাথে সরাসরি টু-ওয়ে সংযোগ স্থাপন করি।\n\nওয়েবসাইটে বা হোয়াটসঅ্যাপে অর্ডার কনফার্ম হওয়া মাত্রই স্বয়ংক্রিয় পার্সেল বুক হয়ে যায় এবং কাস্টমার এসএমএস/হোয়াটসঅ্যাপে ট্র্যাকিং পেয়ে যান। সাথে রয়েছে অ্যাবান্ডন্ড কার্ট রিকভারি সুবিধা!"
          : "Yes! We build deep 2-way integrations with Shopify, WooCommerce, custom Next.js stores, and local Bangladeshi couriers (Pathao, Steadfast, RedX).\n\nWhen an order arrives on your site, an automated WhatsApp confirmation is dispatched. Abandoned carts trigger automatic recovery messages which recover up to 28% of lost sales!";
        cardData = {
          title: language === 'bn' ? 'ই-কমার্স ও কুরিয়ার নার্ভাস সিস্টেম' : 'eCommerce & Courier Nervous System',
          description: language === 'bn' ? 'স্বয়ংক্রিয় পাঠাও / স্টেডফাস্ট পার্সেল বুকিং + বিকাশ/নগদ ভেরিফিকেশন।' : 'Automatic Pathao / Steadfast parcel booking + bKash/Nagad verification.',
          badge: language === 'bn' ? '২৮% কার্ট রিকভারি' : '28% Cart Recovery'
        };
        logData = {
          intent: language === 'bn' ? 'ই-কমার্স ইন্টিগ্রেশন ম্যাচ' : 'eCommerce_Integration_Match',
          confidence: '99.8%',
          crmAction: language === 'bn' ? 'শপিফাই/কুরিয়ার ওয়েবহুকে কানেক্ট হয়েছে' : 'Connected to Shopify Webhook Simulator',
          latency: '185ms'
        };
      } else if (lower.includes('cost') || lower.includes('price') || lower.includes('package') || lower.includes('দাম') || lower.includes('খরচ') || lower.includes('প্যাকেজ')) {
        botReplyText = language === 'bn'
          ? "আমাদের সাশ্রয়ী ও এককালীন প্যাকেজসমূহ:\n\n• স্টার্টার অটোমেশন: ১৪,৯৯৯৳ ($১২৯) এককালীন\n• বিজনেস গ্রোথ স্যুট: ৩৪,৯৯৯৳ ($২৯৯) এককালীন (সর্বাধিক জনপ্রিয় — এআই বট, সিআরএম সিঙ্ক ও কুরিয়ার অটোমেশন)\n• এন্টারপ্রাইজ ফুল-স্ট্যাক: কাস্টম কোটেশন (আল্ট্রা-ফাস্ট নেক্সট.জেএস ওয়েবসাইট ও কাস্টম সফটওয়্যার)।\n\nকোনো মাসিক হিডেন ফি নেই। সাথে পাবেন আমাদের সাভার/ঢাকা ইঞ্জিনিয়ারিং টিমের সরাসরি ট্রেনিং ও সাপোর্ট।"
          : "Our setup packages are tailored for maximum ROI:\n\n• Starter Automation: ৳14,999 ($129) one-time\n• Business Growth Suite: ৳34,999 ($299) one-time (Most Popular - includes AI bot, CRM sync & cart recovery)\n• Enterprise Full-Stack: Custom quote for bespoke Next.js web platforms.\n\nAll packages include hands-on training and technical support from our Dhaka/Savar team.";
        cardData = {
          title: language === 'bn' ? 'স্বচ্ছ এককালীন প্যাকেজ' : 'Special First-Quarter Packages',
          description: language === 'bn' ? 'একবার পেমেন্ট করে ২৪/৭ অটোমেশন চালান, কোনো মাসিক প্ল্যাটফর্ম ট্যাক্স ছাড়া।' : 'Pay once, automate 24/7 without recurring per-message software bloat.',
          badge: language === 'bn' ? '৩০ দিনের মধ্যে আরওআই' : 'ROI in < 30 Days'
        };
        logData = {
          intent: language === 'bn' ? 'প্যাকেজের মূল্য জিজ্ঞাসা' : 'Pricing_Quote_Request',
          confidence: '99.9%',
          crmAction: language === 'bn' ? 'সিআরএমে হাই-ভ্যালু প্রোস্পেক্ট হিসেবে ট্যাগ হয়েছে' : 'Tagged lead as High-Value Prospect in CRM',
          latency: '120ms'
        };
      } else if (lower.includes('demo') || lower.includes('website') || lower.includes('free') || lower.includes('ফ্রি') || lower.includes('ওয়েবসাইট') || lower.includes('ডেমো')) {
        botReplyText = language === 'bn'
          ? "দারুণ! আমাদের বিশেষ ক্যাম্পেইনে আমরা কোনো প্রকার অগ্রিম পেমেন্ট ছাড়াই আপনার ব্যবসার জন্য একটি সম্পূর্ণ ফ্রি লাইভ ওয়েবসাইট ও অটোমেশন প্রোটোটাইপ তৈরি করে দিই!\n\nআপনি নিচে ক্লিক করে ফ্রি ডেমো ফর্ম পূরণ করতে পারেন অথবা সরাসরি আমাদের সাথে হোয়াটসঅ্যাপে কথা বলতে পারেন।"
          : "Awesome! As part of our featured campaign, we engineer a FREE live website & automation prototype tailored specifically to your business niche before you pay a single taka!\n\nYou can click below to open the demo request form or message our founder directly on WhatsApp.";
        cardData = {
          title: language === 'bn' ? 'আপনার ফ্রি ওয়েবসাইট ও সিস্টেম ডেমো নিন' : 'Claim Your Free Website & System Demo',
          description: language === 'bn' ? '২৪ ঘণ্টার মধ্যে আপনার ব্র্যান্ডের জন্য কাস্টম প্রিভিউ প্রোটোটাইপ প্রস্তুত।' : 'Get a custom preview prototype delivered within 24 hours.',
          badge: language === 'bn' ? 'বিশেষ ক্যাম্পেইন অফার' : 'Campaign Offer',
          actionText: language === 'bn' ? 'ফ্রি ডেমো ফর্ম খুলুন' : 'Open Free Demo Form'
        };
        logData = {
          intent: language === 'bn' ? 'ফ্রি ডেমো রিকোয়েস্ট' : 'Free_Demo_Initiated',
          confidence: '100%',
          crmAction: language === 'bn' ? 'হাই-প্রায়োরিটি ডেমো ফানেল অ্যাক্টিভেট হয়েছে' : 'Opened high-priority demo qualification funnel',
          latency: '95ms'
        };
      } else {
        botReplyText = language === 'bn'
          ? `"${text}" সম্পর্কে জানতে চাওয়ার জন্য ধন্যবাদ! হাই-টেক এন্টারপ্রাইজের অটোমেশন ইঞ্জিন আপনার নিজস্ব প্রোডাক্ট, কাজের নিয়ম ও পেমেন্ট পদ্ধতির ওপর কাস্টম ট্রেইন করা সম্ভব।\n\nআপনি কি আমাদের সাভার/ঢাকা অফিসের ইঞ্জিনিয়ারিং টিমের সাথে সরাসরি হোয়াটসঅ্যাপে কথা বলতে চান? নম্বর: ${COMPANY_INFO.phone}`
          : `Thank you for asking about "${text}"! Our High-Tech Enterprise automation engine can be trained specifically on your company's custom products, service workflows, and payment options.\n\nWould you like to speak directly with an automation architect on WhatsApp at ${COMPANY_INFO.phone}?`;
        logData = {
          intent: language === 'bn' ? 'কাস্টম প্রশ্ন হ্যান্ডেল্ড' : 'Custom_Prompt_Handled',
          confidence: '96.2%',
          crmAction: language === 'bn' ? 'সাভার/ঢাকা সাপোর্ট কিউতে যুক্ত হয়েছে' : 'Dispatched to Dhaka Savar Support Queue',
          latency: '155ms'
        };
      }

      const botMsg: SimulatorMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        card: cardData
      };

      setMessages((prev) => [...prev, botMsg]);
      setActiveLog(logData);
      setIsTyping(false);
    }, 700);
  };

  const resetChat = () => {
    setMessages([getInitialBotMessage(language)]);
    setActiveLog({
      intent: language === 'bn' ? 'সেশন রিসেট' : 'Session_Reset',
      confidence: '100%',
      crmAction: language === 'bn' ? 'সেশন ক্লিয়ার করে নতুনভাবে চালু হয়েছে' : 'Session cleared and re-initialized',
      latency: '40ms'
    });
  };

  return (
    <section id="live-simulator" className="py-20 bg-[#070A11] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono font-semibold text-[#FF8A33] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'ইন্টারঅ্যাকটিভ লাইভ টেস্ট ড্রাইভ' : 'Interactive Production Simulator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            {language === 'bn' ? (
              <>সরাসরি টেস্ট করুন <span className="text-[#FF7A00]">এআই অটো-রিপ্লাই বট</span></>
            ) : (
              <>Experience the <span className="text-[#FF7A00]">AI Auto-Reply Bot</span> Live</>
            )}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {language === 'bn'
              ? 'আমাদের বুদ্ধিমান হোয়াটসঅ্যাপ সিস্টেম কীভাবে চোখের পলকে উত্তর দেয় তা সরাসরি পরীক্ষা করুন। নিচের অপশনে ট্যাপ করুন অথবা যেকোনো প্রশ্ন লিখে পাঠান।'
              : 'Test how our intelligent WhatsApp system responds in real time. Choose a sample prompt or ask anything to see the instant reply and live CRM synchronization.'}
          </p>
        </div>

        {/* Dual Layout: WhatsApp Device Mockup on Left + Behind-the-scenes Nervous System on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* WhatsApp Interactive Mockup (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E1422] rounded-3xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col h-[640px]">
            
            {/* Phone Top Header (Official WhatsApp Brand Look) */}
            <div className="bg-[#121B22] px-4 py-3.5 border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center font-black text-white text-xs border border-white/20">
                    HTE
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#121B22]"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <span>High-Tech Enterprise</span>
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-500 text-black text-[9px] font-bold">
                      ✓
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    {language === 'bn' ? 'ভেরিফায়েড এআই বিজনেস বট • অনলাইনে আছেন' : 'Verified AI Business Assistant • Online'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <button 
                  onClick={resetChat} 
                  title={language === 'bn' ? 'রিসেট করুন' : 'Reset conversation'}
                  className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors text-xs flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 hover:text-emerald-400 hover:bg-white/10 rounded-full transition-colors"
                  title={language === 'bn' ? 'আসল হোয়াটসঅ্যাপে খুলুন' : 'Open in Real WhatsApp'}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Chat Body */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0B101B] bg-cyber-dots">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-[#005C4B] text-white rounded-tr-none'
                        : 'bg-[#1F2C34] text-slate-100 rounded-tl-none border border-white/5'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    
                    {/* Optional embedded card */}
                    {msg.card && (
                      <div className="mt-3 p-2.5 rounded-xl bg-black/30 border border-white/10 text-xs">
                        {msg.card.badge && (
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#FF6B00]/30 text-[#FFA149] mb-1">
                            {msg.card.badge}
                          </span>
                        )}
                        <div className="font-bold text-white text-xs">{msg.card.title}</div>
                        <div className="text-[11px] text-slate-300 mt-0.5">{msg.card.description}</div>
                        
                        {msg.card.actionText && (
                          <button
                            onClick={onOpenDemoModal}
                            className="mt-2.5 w-full py-1.5 px-3 rounded-lg bg-[#FF6B00] hover:bg-[#FF8A33] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            {msg.card.actionText}
                          </button>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                      <span>{msg.timestamp}</span>
                      {msg.sender === 'user' ? (
                        <CheckCheck className="w-3 h-3 text-cyan-400" />
                      ) : (
                        <Check className="w-3 h-3 text-slate-400" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#1F2C34] text-slate-300 max-w-[140px] rounded-tl-none text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A33] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA149] animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[10px] text-slate-400 ml-1">{language === 'bn' ? 'বট লিখছে...' : 'AI replying'}</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick interactive prompts */}
            <div className="px-3 py-2 bg-[#121B22]/90 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] text-slate-400 font-mono whitespace-nowrap">
                {language === 'bn' ? 'পরামর্শ:' : 'Suggestions:'}
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap text-[11px] bg-white/5 hover:bg-[#FF6B00]/20 hover:text-[#FFA149] text-slate-300 border border-white/10 rounded-full px-3 py-1 transition-all cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#121B22] border-t border-white/10 flex items-center gap-2"
            >
              <input
                id="simulator-chat-input"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={language === 'bn' ? 'হোয়াটসঅ্যাপ বট, ওয়েবসাইট বা খরচ নিয়ে প্রশ্ন লিখুন...' : 'Ask about WhatsApp bots, web platforms, or pricing...'}
                className="flex-1 bg-[#2A3942] text-white text-xs sm:text-sm px-4 py-2.5 rounded-full outline-none placeholder-slate-400 focus:ring-1 focus:ring-[#FF6B00]"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#FF6B00] hover:bg-[#FF8A33] text-white flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

          {/* Behind-The-Scenes Automation Nervous System (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Real-time telemetry card */}
            <div className="p-6 rounded-3xl bg-[#0E131F] border border-white/15 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    {language === 'bn' ? 'অটোমেশন ইঞ্জিন টেলিমেট্রি' : 'Autonomous Engine Telemetry'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#FF8A33] bg-[#FF6B00]/10 px-2 py-0.5 rounded">
                  {language === 'bn' ? 'সক্রিয় লিংক' : 'Active Link'}
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#080B12] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">{language === 'bn' ? 'চিহ্নিত উদ্দেশ্য:' : 'Classified Intent:'}</span>
                  <span className="text-white font-semibold text-right">{activeLog.intent}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#080B12] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">{language === 'bn' ? 'মডেল কনফিডেন্স:' : 'Model Confidence:'}</span>
                  <span className="text-emerald-400 font-semibold">{activeLog.confidence}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#080B12] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">{language === 'bn' ? 'টার্নঅ্যারাউন্ড গতি:' : 'Turnaround Latency:'}</span>
                  <span className="text-amber-400 font-semibold">{activeLog.latency}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30">
                  <div className="text-[10px] uppercase tracking-wider text-[#FF8A33] font-bold mb-1">
                    {language === 'bn' ? 'ট্রিগার হওয়া সিআরএম / অটোমেশন ইভেন্ট' : 'Triggered CRM / Automation Event'}
                  </div>
                  <div className="text-slate-200 text-xs">
                    {activeLog.crmAction}
                  </div>
                </div>
              </div>
            </div>

            {/* Why This Matters Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#121A2C] to-[#0A0E17] border border-white/10 shadow-lg">
              <h3 className="text-base font-bold text-white flex items-center gap-2 font-['Outfit',sans-serif]">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>{language === 'bn' ? 'কেন ২০২৬ সালে ৭০% অটোমেশন অপরিহার্য' : 'Why 70% Automation Wins in 2026'}</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'bn'
                  ? 'বাংলাদেশে এবং বিশ্বব্যাপী এখন কাস্টমাররা হোয়াটসঅ্যাপে কেনাকাটা করেন। রিপ্লাই দিতে ৫ মিনিটের বেশি দেরি হলে ৬০% ক্রেতা অন্য পেজে চলে যান। হাই-টেক এন্টারপ্রাইজ কাস্টমারকে সাথে সাথেই রিপ্লাই দিয়ে নিশ্চিত অর্ডারে পরিণত করে।'
                  : 'In Bangladesh and globally, customers buy on WhatsApp. If your response takes more than 5 minutes, 60% of leads message your competitor. High-Tech Enterprise locks in the customer at the exact second they are ready to purchase.'}
              </p>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>{language === 'bn' ? `আপনার ফোনে টেস্ট করুন: ${COMPANY_INFO.phone}` : `Test on Your Real Phone: ${COMPANY_INFO.phone}`}</span>
                </a>

                <button
                  onClick={onOpenDemoModal}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#FF7A00]" />
                  <span>{language === 'bn' ? 'আমার ব্যবসার জন্য এটি তৈরি করতে চাই' : 'Build This For My Business'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

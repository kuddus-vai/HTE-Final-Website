import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Mic, 
  Paperclip, 
  Smile, 
  Phone, 
  Video, 
  MoreVertical, 
  CheckCheck, 
  Truck, 
  ShoppingBag, 
  Sparkles, 
  RotateCcw, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Package, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  isCard?: boolean;
  cardData?: {
    type: 'logistics' | 'ecommerce' | 'payment-success' | 'reschedule';
    title: string;
    details: Array<{ label: string; value: string; highlight?: boolean }>;
    actionButtons?: Array<{ label: string; prompt: string }>;
  };
}

interface LiveWhatsAppSandboxProps {
  demoId: 'demo-flowpulse-whatsapp' | 'demo-nexora-logistics' | string;
  clientName: string;
}

export const LiveWhatsAppSandbox: React.FC<LiveWhatsAppSandboxProps> = ({ demoId, clientName }) => {
  const isLogistics = demoId === 'demo-nexora-logistics';

  // Realistic Initial Conversation History
  const initialLogisticsMessages: Message[] = [
    {
      id: 'log-1',
      sender: 'bot',
      time: '10:14 AM',
      text: '👋 Welcome to *Nexora Express Logistics*!\n\nApnar parcel live location, delivery hero contact, ba delivery time reschedule korte tracking consignment number ti pathan (e.g. *NEX-8924*).'
    },
    {
      id: 'log-2',
      sender: 'user',
      time: '10:15 AM',
      text: 'Amar parcel kothay? Consignment NEX-8924'
    },
    {
      id: 'log-3',
      sender: 'bot',
      time: '10:15 AM',
      text: '📦 *Consignment #NEX-8924 Located!*',
      isCard: true,
      cardData: {
        type: 'logistics',
        title: 'Real-Time Dispatch Telemetry',
        details: [
          { label: 'Merchant', value: 'Urban Beast Lifestyle (Mirpur)' },
          { label: 'Recipient', value: 'Mahmudur Rahman (Uttara, Dhaka)' },
          { label: 'Current Hub', value: 'Savar Hub ➔ Uttara Branch' },
          { label: 'Status', value: 'Out for Delivery (Rider En-Route)', highlight: true },
          { label: 'Assigned Hero', value: 'Tanvir Hossain (📱 01822-491149)' },
          { label: 'Cash on Delivery', value: '৳ 1,850 BDT (Cash / bKash)' },
          { label: 'Estimated ETA', value: 'Today, 2:30 PM - 4:00 PM', highlight: true }
        ],
        actionButtons: [
          { label: '🛵 Rider Contact & Status', prompt: 'Rider er location & number dao' },
          { label: '⏰ Reschedule to Tomorrow', prompt: 'Kalka shokal 11 tay delivery kora jabe?' }
        ]
      }
    },
    {
      id: 'log-4',
      sender: 'user',
      time: '10:16 AM',
      text: 'Ami ekhon bashay nai. Kalka shokal 11 tay delivery kora jabe?'
    },
    {
      id: 'log-5',
      sender: 'bot',
      time: '10:16 AM',
      text: '📅 *Delivery Rescheduled Successfully!*',
      isCard: true,
      cardData: {
        type: 'reschedule',
        title: 'Dispatch Slot Updated',
        details: [
          { label: 'Consignment', value: '#NEX-8924' },
          { label: 'New Window', value: 'Tomorrow (10:00 AM - 1:00 PM)', highlight: true },
          { label: 'Rider Alert', value: 'Tanvir Hossain (Notified via SMS)' },
          { label: 'Delivery OTP', value: '4 8 2 1 (Give to rider on delivery)', highlight: true }
        ]
      }
    }
  ];

  const initialEcommerceMessages: Message[] = [
    {
      id: 'eco-1',
      sender: 'bot',
      time: '11:20 AM',
      text: '👋 Assalamu Alaikum! Welcome to *Urban Beast Storefront* (Powered by FlowPulse™ AI).\n\nAmi apnake product details, size chart, live stock, and delivery fee check korte instant help korte pari. Kivabe help korte pari?'
    },
    {
      id: 'eco-2',
      sender: 'user',
      time: '11:21 AM',
      text: 'Cyberpunk Acid-Wash oversized tee ta ki stock e ache? Size chart ta bolben?'
    },
    {
      id: 'eco-3',
      sender: 'bot',
      time: '11:21 AM',
      text: 'Walaikum Assalam brother! Ji, *Cyberpunk Acid-Wash Drop* currently in stock ache 🔥\n\n📏 *Drop-Shoulder Size Chart:*\n• *M:* Chest 40", Length 28" (Height: 5\'4" - 5\'7")\n• *L:* Chest 42", Length 29" (Height: 5\'8" - 5\'11")\n• *XL:* Chest 44", Length 30" (Height: 6\'0"+)\n💵 *Price:* ৳ 850 BDT | 240 GSM Pure Combed Cotton.\n\nChittagong or Dhaka — delivery kothay niben?'
    },
    {
      id: 'eco-4',
      sender: 'user',
      time: '11:22 AM',
      text: 'L size 1 piece nibo. Chittagong e delivery charge koto?'
    },
    {
      id: 'eco-5',
      sender: 'bot',
      time: '11:22 AM',
      text: 'Chittagong city te delivery charge only *৳ 120 BDT* (48h Steadfast Express).\n\nSubtotal: ৳ 850 + Delivery ৳ 120 = *৳ 970 BDT*.\n⚡ *Advance bKash Payment Special:* ৳ 50 instant cashback discount!\n👉 *Discounted Total:* ৳ 920 BDT.\n\nApni ki bKash e nite chan naki Cash on Delivery?',
      isCard: true,
      cardData: {
        type: 'ecommerce',
        title: 'Order Preview #ORD-8942',
        details: [
          { label: 'Selected Item', value: 'Cyberpunk Acid-Wash Tee (L)' },
          { label: 'Regular Total', value: '৳ 970 BDT' },
          { label: 'Advance bKash Offer', value: '৳ 920 BDT (Save ৳50)', highlight: true },
          { label: 'Delivery Partner', value: 'Steadfast 48h Express' }
        ],
        actionButtons: [
          { label: '⚡ Advance bKash Link', prompt: 'bKash e advance korbo. Payment link den.' },
          { label: '💵 Cash On Delivery', prompt: 'Cash on Delivery te confirm koro.' }
        ]
      }
    },
    {
      id: 'eco-6',
      sender: 'user',
      time: '11:23 AM',
      text: 'bKash e advance korbo. Payment link den.'
    },
    {
      id: 'eco-7',
      sender: 'bot',
      time: '11:23 AM',
      text: '⚡ *Instant bKash Checkout Generated!*',
      isCard: true,
      cardData: {
        type: 'payment-success',
        title: '1-Tap bKash Payment Gateway',
        details: [
          { label: 'Order Code', value: '#ORD-8942' },
          { label: 'Merchant Wallet', value: '01996-921149 (Counter 1)' },
          { label: 'Payable Amount', value: '৳ 920 BDT', highlight: true },
          { label: 'Instant Link', value: 'bkash.me/pay/urbanbeast-8942' }
        ],
        actionButtons: [
          { label: '✅ Confirm TrxID Payment', prompt: 'TrxID 9K82JD01 payment done' }
        ]
      }
    }
  ];

  const [messages, setMessages] = useState<Message[]>(isLogistics ? initialLogisticsMessages : initialEcommerceMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the internal message container only (never the parent page or modal)
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  // Reset conversation
  const handleReset = () => {
    setMessages(isLogistics ? initialLogisticsMessages : initialEcommerceMessages);
    setInputText('');
    setIsTyping(false);
  };

  // Preset quick prompt chips
  const quickChips = isLogistics ? [
    { label: '📦 Track NEX-8924', prompt: 'Amar parcel kothay? Consignment NEX-8924' },
    { label: '🛵 Rider Details', prompt: 'Rider er phone number and real-time location dao' },
    { label: '⏰ Reschedule Slot', prompt: 'Ami ekhon bashay nai. Kalka shokal 11 tay delivery kora jabe?' },
    { label: '💳 Pay COD via bKash', prompt: 'Cash on delivery amount ki bKash e deya jabe?' },
    { label: '📍 Change Address', prompt: 'Amar delivery address ektu change korte chai' }
  ] : [
    { label: '📏 Size Chart', prompt: 'Cyberpunk Acid-Wash oversized tee ta ki stock e ache? Size chart ta bolben?' },
    { label: '🚚 Delivery Fee', prompt: 'L size 1 piece nibo. Chittagong e delivery charge koto?' },
    { label: '⚡ bKash Payment', prompt: 'bKash e advance korbo. Payment link den.' },
    { label: '✅ Confirm TrxID', prompt: 'TrxID 9K82JD01 payment done' },
    { label: '🔄 Return Policy', prompt: 'Size fitting na hole exchange er policy ki?' }
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isTyping) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: Message = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      time: timeStr,
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Realistic bot response logic with small typing delay
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botResponse: Message;

      if (isLogistics) {
        if (lower.includes('nex-8924') || lower.includes('track') || lower.includes('parcel')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '📦 *Consignment #NEX-8924 Located!*',
            isCard: true,
            cardData: {
              type: 'logistics',
              title: 'Live Tracking Stream',
              details: [
                { label: 'Status', value: 'Out for Delivery (Rider En-Route)', highlight: true },
                { label: 'Rider', value: 'Tanvir Hossain (01822-491149)' },
                { label: 'Destination', value: 'Uttara Sector 11, Dhaka' },
                { label: 'ETA', value: 'Today, 2:30 PM - 4:00 PM', highlight: true }
              ]
            }
          };
        } else if (lower.includes('rider') || lower.includes('phone') || lower.includes('number') || lower.includes('location')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '🛵 *Delivery Hero Assigned:*\n• *Name:* Tanvir Hossain\n• *Contact:* `01822-491149`\n• *Vehicle:* Hero Splendor (Dhaka Metro-H-4412)\n• *Live GPS:* Mirpur-10 Sector Crossing (1.8 km away)\n\nRider apnar phone e delivery er 15 min aage call korbe.'
          };
        } else if (lower.includes('reschedule') || lower.includes('kalka') || lower.includes('shokal') || lower.includes('time')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '📅 *Delivery Rescheduled Successfully!*\n\nConsignment #NEX-8924 hold kora hoyeche.\n• *New Slot:* Tomorrow Morning (10:00 AM - 1:00 PM)\n• *Secret OTP:* `4 8 2 1` (Parcel delivery receive er shomoy rider ke bolben).\n\nRider Tanvir and merchant notification dispatched.'
          };
        } else if (lower.includes('bkash') || lower.includes('cod') || lower.includes('payment')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '💳 *bKash Payment on Delivery Available!*\n\nDelivery boy Tanvir er kache official *Nexora Merchant QR Code* ache. Cash taka na thakle delivery receive er shomoy bKash app diye scan kore direct pay korte parben.'
          };
        } else if (lower.includes('address') || lower.includes('thikana')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '📍 *Address Update Request Received.*\n\nApnar notun thikana ekhane likhun. Hub manager review kore rider er route map update kore diben.'
          };
        } else {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '✅ Apnar message amader automated dispatch supervisor e forward kora hoyeche. Any urgent help er jonno amader official hotline `09612-NEXORA` te call korte paren!'
          };
        }
      } else {
        // FlowPulse eCommerce Bot
        if (lower.includes('size') || lower.includes('stock') || lower.includes('chart') || lower.includes('drop')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '🔥 *Cyberpunk Acid-Wash Drop in Stock!*\n\n• *M:* Chest 40", Length 28"\n• *L:* Chest 42", Length 29"\n• *XL:* Chest 44", Length 30"\n\nFabric: 240 GSM Pure Combed Cotton (Pre-shrunk).\nPrice: ৳ 850 BDT. Chittagong naki Dhaka te delivery niben?'
          };
        } else if (lower.includes('delivery') || lower.includes('chittagong') || lower.includes('fee') || lower.includes('charge')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '🚚 *Delivery Rates & Timeframe:*\n• *Inside Dhaka:* ৳ 70 BDT (24-36 Hours)\n• *Chittagong City:* ৳ 120 BDT (48 Hours via Steadfast)\n• *Outside Dhaka/Rest of BD:* ৳ 130 BDT\n\n⚡ Advance bKash payment e ৳ 50 flat cashback discount!'
          };
        } else if (lower.includes('bkash') || lower.includes('link') || lower.includes('pay') || lower.includes('advance')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '⚡ *Instant bKash Checkout:*\n\n📦 *Order Code:* #ORD-8942 (Size L)\n💰 *Offer Price:* ৳ 920 BDT (Saved ৳50!)\n📱 *Merchant bKash:* `01996-921149`\n🔗 Pay Link: `bkash.me/pay/urbanbeast-8942`\n\nPayment sesh hole TrxID ti ekhane pathan, automated invoice generate hoye jabe.'
          };
        } else if (lower.includes('trx') || lower.includes('done') || lower.includes('confirm') || lower.includes('9k82jd01')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '✅ *bKash Payment Verified! (TrxID: 9K82JD01)*\n\n🎉 Order #ORD-8942 Confirmed!\n🚚 Steadfast Consignment Code: `#STEAD-89421`\n\nApnar parcel packing sesh hoye ajkei dispatch hobe. Digital invoice SMS & WhatsApp e send kora hoyeche. Dhonnabad!'
          };
        } else if (lower.includes('exchange') || lower.includes('return') || lower.includes('fitting')) {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '🔄 *7-Day Hassle-Free Exchange:*\n\nSize fitting e problem hole 7 diner moddhe doorstep exchange facility available. Delivery hero notun size diye puraton ta niye ashbe.'
          };
        } else {
          botResponse = {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            time: timeStr,
            text: '👋 Thank you! FlowPulse™ AI apnar query record koreche. Apni ki order confirm korte chan naki catalog browse korte chan?'
          };
        }
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-xl h-full flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0b141a] shadow-2xl font-sans select-none">
      
      {/* 1. WhatsApp Top App Bar */}
      <div className="shrink-0 bg-[#005c4b] px-3 py-2.5 text-white flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2.5 min-w-0">
          <button className="text-white/80 hover:text-white transition-colors" title="Back">
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-emerald-700/80 border border-white/20 flex items-center justify-center font-bold text-xs text-white">
              {isLogistics ? <Truck className="w-5 h-5 text-emerald-300" /> : <ShoppingBag className="w-5 h-5 text-emerald-300" />}
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#005c4b]"></span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="text-xs font-bold truncate text-white">
                {isLogistics ? 'Nexora Express Logistics' : `${clientName} Sales Bot`}
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            </div>
            <div className="text-[10px] text-emerald-100/90 truncate flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
              <span>{isTyping ? 'typing...' : 'Verified Business • Automated 24/7'}</span>
            </div>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-3 text-white/80 shrink-0">
          <button 
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-emerald-200 text-[10px] font-mono flex items-center gap-1 transition-colors"
            title="Reset Conversation"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button className="hover:text-white transition-colors"><Phone className="w-4 h-4" /></button>
          <button className="hover:text-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
        </div>
      </div>

      {/* 2. Messages Thread (Scrollable internally ONLY, fits 100% container) */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 min-h-0 overflow-y-auto p-3 space-y-2.5 bg-[#0b141a] bg-cyber-dots no-scrollbar"
      >
        {/* End-to-End Encryption Notice Banner */}
        <div className="flex justify-center my-1">
          <div className="max-w-xs text-center px-3 py-1 rounded-lg bg-[#182229] border border-amber-500/20 text-[#ffd279] text-[10px] leading-snug shadow-sm flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Messages are end-to-end encrypted with Meta Cloud API.</span>
          </div>
        </div>

        {messages.map((msg) => {
          const isBot = msg.sender === 'bot';

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} animate-in fade-in duration-150`}
            >
              <div
                className={`max-w-[88%] sm:max-w-[82%] p-2.5 rounded-xl text-xs leading-relaxed shadow-sm ${
                  isBot
                    ? 'bg-[#202c33] text-slate-100 rounded-tl-none border border-white/5'
                    : 'bg-[#005c4b] text-white rounded-tr-none'
                }`}
              >
                {/* Message text with basic markdown styling */}
                <div className="whitespace-pre-line text-[11.5px] sm:text-xs">
                  {msg.text.split('\n').map((line, idx) => {
                    // Quick formatting for bold markers *text*
                    const formattedLine = line.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
                    return (
                      <span 
                        key={idx} 
                        dangerouslySetInnerHTML={{ __html: formattedLine }} 
                        className="block min-h-[1.1rem]"
                      />
                    );
                  })}
                </div>

                {/* Rich Card Content if Present */}
                {msg.isCard && msg.cardData && (
                  <div className="mt-2 p-2.5 rounded-lg bg-black/40 border border-white/10 space-y-1.5 text-[11px]">
                    <div className="font-bold text-emerald-400 border-b border-white/10 pb-1 flex items-center justify-between">
                      <span>{msg.cardData.title}</span>
                      <Package className="w-3 h-3 text-emerald-400" />
                    </div>

                    <div className="space-y-1 pt-0.5 font-sans">
                      {msg.cardData.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex justify-between items-start gap-2 text-[10.5px]">
                          <span className="text-slate-400 shrink-0">{detail.label}:</span>
                          <span className={`text-right font-medium truncate ${detail.highlight ? 'text-emerald-300 font-bold' : 'text-slate-200'}`}>
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {msg.cardData.actionButtons && msg.cardData.actionButtons.length > 0 && (
                      <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                        {msg.cardData.actionButtons.map((btn, bIdx) => (
                          <button
                            key={bIdx}
                            onClick={() => handleSend(btn.prompt)}
                            className="px-2.5 py-1 rounded bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-200 hover:text-white text-[10px] font-semibold transition-colors flex items-center gap-1"
                          >
                            <span>{btn.label}</span>
                            <ChevronRight className="w-2.5 h-2.5" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Timestamp & double checks */}
                <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                  <span>{msg.time}</span>
                  <CheckCheck className={`w-3.5 h-3.5 ${isBot ? 'text-cyan-400' : 'text-emerald-200'}`} />
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-1 px-3 py-2 rounded-xl bg-[#202c33] text-slate-300 rounded-tl-none max-w-[120px] shadow-sm animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
            <span className="text-[10px] text-slate-400 ml-1">typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. Interactive Quick Prompts Bar (Horizontally scrollable only, shrink-0) */}
      <div className="shrink-0 px-2.5 py-1.5 bg-[#111b21] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#FF7A00]" />
          <span>Quick:</span>
        </span>
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(chip.prompt)}
            disabled={isTyping}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-600/30 text-slate-200 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 text-[10.5px] whitespace-nowrap transition-all flex items-center gap-1 shrink-0 active:scale-95 disabled:opacity-50"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* 4. WhatsApp Message Input Bar (Fixed height, shrink-0) */}
      <div className="shrink-0 bg-[#202c33] px-2.5 py-2 border-t border-white/10 flex items-center gap-2">
        <div className="flex items-center gap-1 text-slate-400">
          <button className="p-1 hover:text-white transition-colors" title="Emoji">
            <Smile className="w-4 h-4" />
          </button>
          <button className="p-1 hover:text-white transition-colors" title="Attach file">
            <Paperclip className="w-4 h-4" />
          </button>
        </div>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex-1 flex items-center gap-1.5 bg-[#2a3942] rounded-full px-3 py-1.5 text-xs text-white"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={isLogistics ? "Type tracking number, rider query, etc..." : "Type size query, bKash checkout, etc..."}
            className="flex-1 bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
          />
        </form>

        {inputText.trim() ? (
          <button
            onClick={() => handleSend()}
            disabled={isTyping}
            className="w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#008f6f] text-white flex items-center justify-center transition-colors shadow-md shrink-0"
            title="Send Message"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        ) : (
          <button 
            onClick={() => handleSend(isLogistics ? 'Rider er location & number dao' : 'bKash e advance korbo. Payment link den.')}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
            title="Voice message"
          >
            <Mic className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};

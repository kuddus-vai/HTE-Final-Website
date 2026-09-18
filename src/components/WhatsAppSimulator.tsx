import React, { useState, useRef, useEffect } from 'react';
import { COMPANY_INFO } from '../data/mockData';
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
  const [messages, setMessages] = useState<SimulatorMessage[]>([
    {
      id: 'm-1',
      sender: 'bot',
      text: "👋 Assalamu Alaikum & Welcome to High-Tech Enterprise! I am your 24/7 automated business assistant.\n\nI handle customer queries, confirm orders, sync your CRM, and qualify leads with zero wait time. Tap an option below or type any question!",
      timestamp: 'Just now',
      card: {
        title: '70% Automated Query Resolution',
        description: 'While you sleep, orders and inquiries are handled instantly in English or Bangla.',
        badge: 'High-Tech Enterprise Engine'
      }
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeLog, setActiveLog] = useState<{
    intent: string;
    confidence: string;
    crmAction: string;
    latency: string;
  }>({
    intent: 'Session_Initialized',
    confidence: '100%',
    crmAction: 'Visitor session tracked & primed in Savar/Dhaka cluster',
    latency: '85ms'
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "How does WhatsApp Auto-Reply work?",
    "Can you integrate with my Shopify store?",
    "How much does the automation package cost?",
    "I want a Free Website Demo for my business"
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        intent: 'General_Inquiry',
        confidence: '98.5%',
        crmAction: 'Lead interaction recorded in CRM',
        latency: '142ms'
      };

      const lower = text.toLowerCase();

      if (lower.includes('work') || lower.includes('70%') || lower.includes('auto-reply')) {
        botReplyText = "Our WhatsApp Auto-Reply engine connects directly to the official Meta Cloud API. It reads customer questions in natural language (English & Bangla), queries your inventory or pricing database, and provides immediate answers in under 3 seconds.\n\nOver 70% of frequent queries (availability, size guide, delivery charges, payment method) are resolved completely autonomously!";
        logData = {
          intent: 'Explain_WhatsApp_Automation',
          confidence: '99.2%',
          crmAction: 'Triggered product knowledge RAG model',
          latency: '160ms'
        };
      } else if (lower.includes('shopify') || lower.includes('woocommerce') || lower.includes('integrate')) {
        botReplyText = "Yes! We build deep 2-way integrations with Shopify, WooCommerce, custom Next.js stores, and local Bangladeshi couriers (Pathao, Steadfast, RedX).\n\nWhen an order arrives on your site, an automated WhatsApp confirmation is dispatched. Abandoned carts trigger automatic recovery messages which recover up to 28% of lost sales!";
        cardData = {
          title: 'eCommerce & Courier Nervous System',
          description: 'Automatic Pathao / Steadfast parcel booking + bKash/Nagad verification.',
          badge: '28% Cart Recovery'
        };
        logData = {
          intent: 'eCommerce_Integration_Match',
          confidence: '99.8%',
          crmAction: 'Connected to Shopify Webhook Simulator',
          latency: '185ms'
        };
      } else if (lower.includes('cost') || lower.includes('price') || lower.includes('package')) {
        botReplyText = "Our setup packages are tailored for maximum ROI:\n\n• Starter Automation: ৳14,999 ($129) one-time\n• Business Growth Suite: ৳34,999 ($299) one-time (Most Popular - includes AI bot, CRM sync & cart recovery)\n• Enterprise Full-Stack: Custom quote for bespoke Next.js web platforms.\n\nAll packages include hands-on training and technical support from our Dhaka/Savar team.";
        cardData = {
          title: 'Special First-Quarter Packages',
          description: 'Pay once, automate 24/7 without recurring per-message software bloat.',
          badge: 'ROI in < 30 Days'
        };
        logData = {
          intent: 'Pricing_Quote_Request',
          confidence: '99.9%',
          crmAction: 'Tagged lead as High-Value Prospect in CRM',
          latency: '120ms'
        };
      } else if (lower.includes('demo') || lower.includes('website') || lower.includes('free')) {
        botReplyText = "Awesome! As part of our featured campaign, we engineer a FREE live website & automation prototype tailored specifically to your business niche before you pay a single taka!\n\nYou can click below to open the demo request form or message our founder directly on WhatsApp.";
        cardData = {
          title: 'Claim Your Free Website & System Demo',
          description: 'Get a custom preview prototype delivered within 24 hours.',
          badge: 'Campaign Offer',
          actionText: 'Open Free Demo Form'
        };
        logData = {
          intent: 'Free_Demo_Initiated',
          confidence: '100%',
          crmAction: 'Opened high-priority demo qualification funnel',
          latency: '95ms'
        };
      } else {
        botReplyText = `Thank you for asking about "${text}"! Our High-Tech Enterprise automation engine can be trained specifically on your company's custom products, service workflows, and payment options.\n\nWould you like to speak directly with an automation architect on WhatsApp at ${COMPANY_INFO.phone}?`;
        logData = {
          intent: 'Custom_Prompt_Handled',
          confidence: '96.2%',
          crmAction: 'Dispatched to Dhaka Savar Support Queue',
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
    setMessages([
      {
        id: 'm-1',
        sender: 'bot',
        text: "👋 Assalamu Alaikum & Welcome to High-Tech Enterprise! I am your 24/7 autonomous AI assistant.\n\nI handle customer queries, confirm orders, sync your CRM, and qualify leads without human wait time. Tap an option below or type any question!",
        timestamp: 'Just now',
        card: {
          title: '70% Automated Query Resolution',
          description: 'While you sleep, orders and inquiries are handled instantly in English or Bangla.',
          badge: 'High-Tech Enterprise Engine'
        }
      }
    ]);
    setActiveLog({
      intent: 'Session_Reset',
      confidence: '100%',
      crmAction: 'Session cleared and re-initialized',
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
            <span>Interactive Production Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            Experience the <span className="text-[#FF7A00]">AI Auto-Reply Bot</span> Live
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Test how our intelligent WhatsApp system responds in real time. Choose a sample prompt or ask anything to see the instant reply and live CRM synchronization.
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
                    Verified AI Business Assistant • Online
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <button 
                  onClick={resetChat} 
                  title="Reset conversation"
                  className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors text-xs flex items-center gap-1"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 hover:text-emerald-400 hover:bg-white/10 rounded-full transition-colors"
                  title="Open in Real WhatsApp"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0B101B] bg-cyber-dots">
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
                            className="mt-2.5 w-full py-1.5 px-3 rounded-lg bg-[#FF6B00] hover:bg-[#FF8A33] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
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
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#1F2C34] text-slate-300 max-w-[120px] rounded-tl-none text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A33] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA149] animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[10px] text-slate-400 ml-1">AI replying</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick interactive prompts */}
            <div className="px-3 py-2 bg-[#121B22]/90 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] text-slate-400 font-mono whitespace-nowrap">Suggestions:</span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap text-[11px] bg-white/5 hover:bg-[#FF6B00]/20 hover:text-[#FFA149] text-slate-300 border border-white/10 rounded-full px-3 py-1 transition-all"
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
                placeholder="Ask about WhatsApp bots, web platforms, or pricing..."
                className="flex-1 bg-[#2A3942] text-white text-xs sm:text-sm px-4 py-2.5 rounded-full outline-none placeholder-slate-400 focus:ring-1 focus:ring-[#FF6B00]"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#FF6B00] hover:bg-[#FF8A33] text-white flex items-center justify-center transition-colors flex-shrink-0"
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
                    Autonomous Engine Telemetry
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#FF8A33] bg-[#FF6B00]/10 px-2 py-0.5 rounded">
                  Active Link
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#080B12] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Classified Intent:</span>
                  <span className="text-white font-semibold text-right">{activeLog.intent}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#080B12] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Model Confidence:</span>
                  <span className="text-emerald-400 font-semibold">{activeLog.confidence}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#080B12] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Turnaround Latency:</span>
                  <span className="text-amber-400 font-semibold">{activeLog.latency}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30">
                  <div className="text-[10px] uppercase tracking-wider text-[#FF8A33] font-bold mb-1">
                    Triggered CRM / Automation Event
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
                <span>Why 70% Automation Wins in 2026</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                In Bangladesh and globally, customers buy on WhatsApp. 
                If your response takes more than 5 minutes, 60% of leads message your competitor. 
                High-Tech Enterprise locks in the customer at the exact second they are ready to purchase.
              </p>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>Test on Your Real Phone: {COMPANY_INFO.phone}</span>
                </a>

                <button
                  onClick={onOpenDemoModal}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#FF7A00]" />
                  <span>Build This For My Business</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

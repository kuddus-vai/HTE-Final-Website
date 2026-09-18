import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  MessageSquare, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Info, 
  HelpCircle, 
  TrendingDown, 
  RefreshCw,
  ExternalLink,
  PhoneCall,
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface CostBreakdownCalculatorProps {
  initialCurrency?: 'BDT' | 'USD';
  onOpenDemoModal: () => void;
}

export const CostBreakdownCalculator: React.FC<CostBreakdownCalculatorProps> = ({
  initialCurrency = 'BDT',
  onOpenDemoModal
}) => {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>(initialCurrency);

  // User input variables
  const [monthlyConversations, setMonthlyConversations] = useState<number>(3000); // 3,000 customer inquiries
  const [setupTier, setSetupTier] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const [aiEngine, setAiEngine] = useState<'hybrid' | 'gemini_advanced' | 'rule_based'>('hybrid');
  const [serverHosting, setServerHosting] = useState<'serverless' | 'vps_dedicated' | 'enterprise_ha'>('serverless');
  const [includeSmsFallback, setIncludeSmsFallback] = useState<boolean>(true);
  const [monthlySmsCount, setMonthlySmsCount] = useState<number>(800);
  const [includeMaintenanceSupport, setIncludeMaintenanceSupport] = useState<boolean>(true);

  // Conversion rate (BDT per USD approx)
  const USD_RATE = 115;

  // 1. One-Time Setup & Architecture Engineering Costs
  const setupCosts = useMemo(() => {
    switch (setupTier) {
      case 'starter':
        return {
          title: 'Starter Bot & Webhook Setup',
          bdt: 12000,
          usd: 105,
          days: 3,
          details: 'Meta Cloud API verified configuration, core FAQs, basic catalog & order trigger, single staff routing.'
        };
      case 'growth':
        return {
          title: 'Growth Omnichannel & Automation System',
          bdt: 24000,
          usd: 210,
          days: 5,
          details: 'Full conversational AI, Sub-second Headless store sync, Pathao & Steadfast 2-way courier webhooks, live agent dashboard.'
        };
      case 'enterprise':
        return {
          title: 'Enterprise Architecture & Multi-Branch Cluster',
          bdt: 45000,
          usd: 390,
          days: 10,
          details: 'Custom POS synchronization, HubSpot/Zoho CRM pipelines, Zero-Trust network boundary, staging & production failovers.'
        };
    }
  }, [setupTier]);

  // 2. Official Messaging API Costs (Meta WhatsApp Cloud API + SMS)
  // Meta policy: First 1,000 user-initiated service conversations per month are FREE.
  // Beyond 1,000: Bangladesh Service Conversation is approx ৳0.58 / conversation (~$0.005)
  // Marketing / Utility broadcast conversation approx ৳0.95 / conversation (~$0.008)
  // Mixed average: ~৳0.65 per chargeable conversation.
  const messagingApiCost = useMemo(() => {
    const freeMetaTier = 1000;
    const chargeableConversations = Math.max(0, monthlyConversations - freeMetaTier);
    const metaCostBDT = Math.round(chargeableConversations * 0.65);
    const metaCostUSD = Number((metaCostBDT / USD_RATE).toFixed(2));

    const smsCostBDT = includeSmsFallback ? Math.round(monthlySmsCount * 0.40) : 0; // 40 poisha per non-masking SMS
    const smsCostUSD = Number((smsCostBDT / USD_RATE).toFixed(2));

    return {
      chargeableConversations,
      freeConversations: Math.min(monthlyConversations, freeMetaTier),
      metaCostBDT,
      metaCostUSD,
      smsCostBDT,
      smsCostUSD,
      totalBDT: metaCostBDT + smsCostBDT,
      totalUSD: Number((metaCostUSD + smsCostUSD).toFixed(2))
    };
  }, [monthlyConversations, includeSmsFallback, monthlySmsCount]);

  // 3. System Deployment & Infrastructure Hosting Costs
  const deploymentCost = useMemo(() => {
    switch (serverHosting) {
      case 'serverless':
        return {
          label: 'Edge Serverless (Vercel / Cloudflare Workers)',
          desc: 'Automatic autoscaling with zero-cold-start. Free tier covers up to 100k requests.',
          bdt: 1200,
          usd: 10
        };
      case 'vps_dedicated':
        return {
          label: 'Managed Cloud VPS (DigitalOcean / Railway)',
          desc: 'High-throughput Node.js daemon with dedicated RAM, Redis caching & auto-backup.',
          bdt: 2800,
          usd: 24
        };
      case 'enterprise_ha':
        return {
          label: 'High-Availability Cloud Cluster (AWS / Google Cloud)',
          desc: 'Multi-region failover, 99.99% uptime guarantee, automated snapshot disaster recovery.',
          bdt: 6500,
          usd: 56
        };
    }
  }, [serverHosting]);

  // 4. Monthly Integrated Subscriptions & AI Token Costs
  const integratedSubscriptionsCost = useMemo(() => {
    // AI Tokens Cost based on model and conversation volume
    let aiCostBDT = 0;
    let aiDesc = '';

    if (aiEngine === 'rule_based') {
      aiCostBDT = 0;
      aiDesc = 'Deterministic state machine - $0 AI token cost';
    } else if (aiEngine === 'hybrid') {
      // Gemini 2.5 Flash tokens for complex questions, cached templates for common orders
      // ~300 tokens per complex turn = approx ৳0.15 per complex turn
      aiCostBDT = Math.round(monthlyConversations * 0.22);
      aiDesc = 'High-speed Gemini Flash (Optimized context caching & intent recognition)';
    } else {
      // Advanced deep reasoning & custom vector embeddings
      aiCostBDT = Math.round(monthlyConversations * 0.55);
      aiDesc = 'Advanced Multi-Agent reasoning & product catalogue semantic search';
    }
    const aiCostUSD = Number((aiCostBDT / USD_RATE).toFixed(2));

    // Courier & CRM sync webhooks
    const syncCostBDT = 800;
    const syncCostUSD = 7;

    // Maintenance & 24/7 SLA monitoring
    const maintenanceBDT = includeMaintenanceSupport ? 2500 : 0;
    const maintenanceUSD = includeMaintenanceSupport ? 22 : 0;

    const totalBDT = aiCostBDT + syncCostBDT + maintenanceBDT;
    const totalUSD = Number((aiCostUSD + syncCostUSD + maintenanceUSD).toFixed(2));

    return {
      aiCostBDT,
      aiCostUSD,
      aiDesc,
      syncCostBDT,
      syncCostUSD,
      maintenanceBDT,
      maintenanceUSD,
      totalBDT,
      totalUSD
    };
  }, [aiEngine, monthlyConversations, includeMaintenanceSupport]);

  // Totals
  const totalOneTimeBDT = setupCosts.bdt;
  const totalOneTimeUSD = setupCosts.usd;

  const totalMonthlyRecurringBDT = 
    messagingApiCost.totalBDT + 
    deploymentCost.bdt + 
    integratedSubscriptionsCost.totalBDT;

  const totalMonthlyRecurringUSD = Number((
    messagingApiCost.totalUSD + 
    deploymentCost.usd + 
    integratedSubscriptionsCost.totalUSD
  ).toFixed(2));

  const firstMonthTotalBDT = totalOneTimeBDT + totalMonthlyRecurringBDT;
  const firstMonthTotalUSD = totalOneTimeUSD + totalMonthlyRecurringUSD;

  // Generate WhatsApp summary text
  const handleSendToWhatsApp = () => {
    const summaryMsg = `Salam High-Tech Enterprise! I calculated my estimated system budget on your Pricing Calculator:%0A%0A` +
      `📌 *System Setup Tier:* ${setupCosts.title} (${currency === 'BDT' ? `৳${totalOneTimeBDT.toLocaleString()}` : `$${totalOneTimeUSD}`})%0A` +
      `💬 *Expected Inquiries:* ${monthlyConversations.toLocaleString()} conversations/month%0A` +
      `🤖 *AI Engine:* ${aiEngine.toUpperCase()}%0A` +
      `☁️ *Cloud Hosting:* ${deploymentCost.label}%0A` +
      `--------------------------------%0A` +
      `💰 *One-Time Setup Cost:* ${currency === 'BDT' ? `৳${totalOneTimeBDT.toLocaleString()}` : `$${totalOneTimeUSD}`}%0A` +
      `🔄 *Estimated Monthly Running Cost:* ${currency === 'BDT' ? `৳${totalMonthlyRecurringBDT.toLocaleString()}/mo` : `$${totalMonthlyRecurringUSD}/mo`}%0A` +
      `   • Meta & SMS APIs: ${currency === 'BDT' ? `৳${messagingApiCost.totalBDT.toLocaleString()}` : `$${messagingApiCost.totalUSD}`}%0A` +
      `   • Server & Cloud: ${currency === 'BDT' ? `৳${deploymentCost.bdt.toLocaleString()}` : `$${deploymentCost.usd}`}%0A` +
      `   • AI Tokens & Sync: ${currency === 'BDT' ? `৳${integratedSubscriptionsCost.totalBDT.toLocaleString()}` : `$${integratedSubscriptionsCost.totalUSD}`}%0A` +
      `--------------------------------%0A` +
      `Please provide the technical proposal and kick-off schedule.`;
    
    window.open(`https://wa.me/8801996921149?text=${summaryMsg}`, '_blank');
  };

  return (
    <div id="cost-calculator" className="rounded-3xl bg-[#090D18] border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-10">
        
        {/* Header section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FFA149] text-xs font-mono font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>TOTAL COST OF OWNERSHIP (TCO) ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit',sans-serif]">
              Complete Cost Breakdown Calculator
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Transparent estimation covering <span className="text-white font-semibold">one-time engineering setup</span>, 
              <span className="text-white font-semibold"> Meta WhatsApp & SMS API costs</span>, 
              <span className="text-white font-semibold"> server deployment</span>, and 
              <span className="text-white font-semibold"> integrated monthly subscriptions</span>.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <span className="text-xs font-mono text-slate-400">Display Currency:</span>
            <div className="inline-flex items-center p-1 rounded-xl bg-[#0F1626] border border-white/10">
              <button
                onClick={() => setCurrency('BDT')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'BDT' ? 'bg-[#FF6B00] text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                ৳ BDT
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD' ? 'bg-[#FF6B00] text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left 7 Columns: Interactive Configuration Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Segment 1: One-Time System Architecture & Setup Tier */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FF7A00]" />
                  <span>1. System Deployment & Setup Tier (One-Time)</span>
                </label>
                <span className="text-[11px] font-mono text-emerald-400">Turnkey delivery</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'starter', name: 'Starter Bot', priceBDT: 12000, priceUSD: 105, timeline: '3 Days' },
                  { id: 'growth', name: 'Growth Omnichannel', priceBDT: 24000, priceUSD: 210, timeline: '5 Days', badge: 'Popular' },
                  { id: 'enterprise', name: 'Enterprise Cluster', priceBDT: 45000, priceUSD: 390, timeline: '10 Days' },
                ].map((tier) => {
                  const isSelected = setupTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSetupTier(tier.id as any)}
                      className={`relative p-4 rounded-2xl border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#141C30] border-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.2)] text-white' 
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {tier.badge && (
                        <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#FF6B00] text-white text-[9px] font-mono font-bold">
                          {tier.badge}
                        </span>
                      )}
                      <div className="text-xs font-bold text-white">{tier.name}</div>
                      <div className="text-base font-black font-mono mt-2 text-[#FFA149]">
                        {currency === 'BDT' ? `৳${tier.priceBDT.toLocaleString()}` : `$${tier.priceUSD}`}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 font-mono">
                        Deployment: {tier.timeline}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-400 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <span className="text-white font-semibold">Included in setup:</span> {setupCosts.details}
              </p>
            </div>

            {/* Segment 2: Messaging Volume & Official Meta / SMS API Costs */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>2. Messaging & API Inquiries (Monthly Variable)</span>
                </label>
                <span className="text-xs font-mono text-[#FFA149] font-bold">
                  {monthlyConversations.toLocaleString()} Inquiries / month
                </span>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="500"
                  max="30000"
                  step="500"
                  value={monthlyConversations}
                  onChange={(e) => setMonthlyConversations(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>500 (Early Store)</span>
                  <span>5,000 (Active Brand)</span>
                  <span>15,000</span>
                  <span>30,000+ (High Volume)</span>
                </div>
              </div>

              {/* Meta Free Tier Callout + Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs space-y-1">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Meta Cloud Free Tier: 1,000 Free/Mo</span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    Meta does not charge for the first 1,000 customer-initiated service conversations each month.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
                  <div className="text-slate-300 font-bold flex items-center justify-between">
                    <span>Chargeable Meta Conversations:</span>
                    <span className="font-mono text-[#FFA149]">{messagingApiCost.chargeableConversations.toLocaleString()}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Est. Meta direct cost: <span className="font-mono text-white font-semibold">
                      {currency === 'BDT' ? `৳${messagingApiCost.metaCostBDT.toLocaleString()}` : `$${messagingApiCost.metaCostUSD}`}
                    </span> / mo
                  </div>
                </div>
              </div>

              {/* SMS Fallback Toggle */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="smsFallbackToggle"
                    checked={includeSmsFallback}
                    onChange={(e) => setIncludeSmsFallback(e.target.checked)}
                    className="w-4 h-4 rounded text-[#FF6B00] accent-[#FF6B00] cursor-pointer"
                  />
                  <label htmlFor="smsFallbackToggle" className="text-xs text-slate-200 cursor-pointer">
                    <span className="font-semibold text-white">Local SMS OTP & Offline Fallback Gateway</span>
                    <span className="block text-[11px] text-slate-400">Sends SMS when customer has no active WhatsApp data</span>
                  </label>
                </div>

                {includeSmsFallback && (
                  <div className="flex items-center gap-2 text-xs shrink-0 self-end sm:self-auto">
                    <span className="text-[11px] text-slate-400 font-mono">~{monthlySmsCount} SMS:</span>
                    <span className="font-mono font-bold text-white">
                      {currency === 'BDT' ? `+৳${messagingApiCost.smsCostBDT}` : `+$${messagingApiCost.smsCostUSD}`}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Segment 3: System Deployment & Cloud Infrastructure */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyan-400" />
                  <span>3. System Hosting & Server Deployment (Monthly)</span>
                </label>
                <span className="text-[11px] font-mono text-slate-400">99.98% SLA Edge</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'serverless', name: 'Edge Serverless', bdt: 1200, usd: 10, note: 'Vercel / Cloudflare' },
                  { id: 'vps_dedicated', name: 'Dedicated VPS', bdt: 2800, usd: 24, note: 'DigitalOcean / Redis' },
                  { id: 'enterprise_ha', name: 'Multi-Region HA', bdt: 6500, usd: 56, note: 'AWS / High Scale' }
                ].map((serv) => {
                  const isSelected = serverHosting === serv.id;
                  return (
                    <div
                      key={serv.id}
                      onClick={() => setServerHosting(serv.id as any)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#141C30] border-cyan-400/80 text-white' 
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{serv.name}</div>
                      <div className="text-sm font-mono font-bold text-cyan-300 mt-1">
                        {currency === 'BDT' ? `৳${serv.bdt.toLocaleString()}` : `$${serv.usd}`}/mo
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{serv.note}</div>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-400 italic">
                {deploymentCost.desc}
              </p>
            </div>

            {/* Segment 4: Integrated Subscriptions, AI Tokens & Sync */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-violet-400" />
                  <span>4. Monthly Integrated Subscriptions & AI Reasoning</span>
                </label>
              </div>

              {/* AI Engine Model Selection */}
              <div className="space-y-2">
                <div className="text-xs text-slate-300 font-medium">Conversational AI Engine:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'rule_based', label: 'Rule-Based Fast Flow', costText: 'Free ($0 AI)' },
                    { id: 'hybrid', label: 'Gemini Hybrid Flash', costText: 'Recommended', highlight: true },
                    { id: 'gemini_advanced', label: 'Advanced Multi-Agent', costText: 'Heavy Reasoning' }
                  ].map((engine) => (
                    <button
                      key={engine.id}
                      type="button"
                      onClick={() => setAiEngine(engine.id as any)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                        aiEngine === engine.id
                          ? 'bg-violet-950/40 border-violet-500 text-white'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-white">{engine.label}</div>
                      <div className="text-[10px] font-mono text-violet-300 mt-0.5">{engine.costText}</div>
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-slate-400">{integratedSubscriptionsCost.aiDesc}</div>
              </div>

              {/* Webhooks & Priority Maintenance */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Courier & CRM 2-Way Sync Webhooks:</span>
                  <span className="font-mono text-white font-semibold">
                    {currency === 'BDT' ? `৳${integratedSubscriptionsCost.syncCostBDT}/mo` : `$${integratedSubscriptionsCost.syncCostUSD}/mo`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="maintenanceToggle"
                      checked={includeMaintenanceSupport}
                      onChange={(e) => setIncludeMaintenanceSupport(e.target.checked)}
                      className="w-4 h-4 rounded text-[#FF6B00] accent-[#FF6B00] cursor-pointer"
                    />
                    <label htmlFor="maintenanceToggle" className="cursor-pointer">
                      <span className="text-white font-medium">Savar HQ 24/7 SLA Engineering Support</span>
                      <span className="block text-[10px] text-slate-400">Direct WhatsApp hotline & uptime monitoring</span>
                    </label>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold shrink-0">
                    {includeMaintenanceSupport 
                      ? (currency === 'BDT' ? `৳${integratedSubscriptionsCost.maintenanceBDT}/mo` : `$${integratedSubscriptionsCost.maintenanceUSD}/mo`)
                      : 'Disabled'
                    }
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right 5 Columns: Dynamic Executive Cost Summary Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#111728] via-[#0E1424] to-[#0A0E1A] border-2 border-[#FF6B00]/40 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] animate-pulse"></span>
                  <span>Real-Time Cost Audit</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-emerald-400">
                  Zero Hidden Margins
                </span>
              </div>

              {/* One-Time vs Recurring Split Box */}
              <div className="space-y-4">
                
                {/* 1. Setup Investment */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>One-Time Engineering Setup:</span>
                    <span className="font-mono text-[11px] text-emerald-400">Paid Once</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                    {currency === 'BDT' ? `৳ ${totalOneTimeBDT.toLocaleString()}` : `$ ${totalOneTimeUSD.toLocaleString()}`}
                  </div>
                  <div className="text-[11px] text-[#FFA149]">
                    {setupCosts.title} • Turnkey deployment in ~{setupCosts.days} days
                  </div>
                </div>

                {/* 2. Monthly Integrated Recurring Breakdown */}
                <div className="p-4 rounded-2xl bg-[#090E1C] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Monthly Running Costs:</span>
                    <span className="text-xl sm:text-2xl font-black font-mono text-cyan-300">
                      {currency === 'BDT' ? `৳ ${totalMonthlyRecurringBDT.toLocaleString()}` : `$ ${totalMonthlyRecurringUSD.toLocaleString()}`}
                      <span className="text-xs text-slate-400 font-normal"> /mo</span>
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Meta WhatsApp + SMS APIs:
                      </span>
                      <span className="font-mono font-medium text-white">
                        {currency === 'BDT' ? `৳ ${messagingApiCost.totalBDT.toLocaleString()}` : `$ ${messagingApiCost.totalUSD}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        Cloud Server Hosting:
                      </span>
                      <span className="font-mono font-medium text-white">
                        {currency === 'BDT' ? `৳ ${deploymentCost.bdt.toLocaleString()}` : `$ ${deploymentCost.usd}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                        AI Tokens, Webhooks & SLA:
                      </span>
                      <span className="font-mono font-medium text-white">
                        {currency === 'BDT' ? `৳ ${integratedSubscriptionsCost.totalBDT.toLocaleString()}` : `$ ${integratedSubscriptionsCost.totalUSD}`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Combined First Month Cash Flow */}
                <div className="p-4 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#FFA149] font-medium">Estimated 1st Month Outlay</div>
                    <div className="text-[11px] text-slate-400">(Setup + 1st Month Operations)</div>
                  </div>
                  <div className="text-2xl font-black font-mono text-white">
                    {currency === 'BDT' ? `৳ ${firstMonthTotalBDT.toLocaleString()}` : `$ ${firstMonthTotalUSD.toLocaleString()}`}
                  </div>
                </div>

              </div>

              {/* Transparency Notice */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 space-y-1 leading-relaxed">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Wholesale API Billing Policy:</span>
                </div>
                <div>
                  Meta Cloud API & SMS charges are billed directly by Meta/Gateways to your merchant card at wholesale cost. 
                  High-Tech Enterprise does not add any markup on third-party API usage.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Send This Breakdown to WhatsApp</span>
                </button>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#FF6B00] hover:bg-[#FF8A33] text-white font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Official Quotation</span>
                </button>
              </div>

            </div>

            {/* Direct Phone Support */}
            <div className="mt-4 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <span>Need custom volume or enterprise multi-tenant pricing?</span>
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="text-[#FFA149] font-mono font-semibold hover:underline flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Sparkles, TrendingUp, Clock, ShieldCheck, ArrowRight, DollarSign } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const RoiCalculator: React.FC<{ onOpenDemoModal: () => void }> = ({ onOpenDemoModal }) => {
  const [dailyQueries, setDailyQueries] = useState<number>(150);
  const [staffCount, setStaffCount] = useState<number>(3);
  const [avgSalaryBDT, setAvgSalaryBDT] = useState<number>(25000);

  // Math logic
  // 70% of queries automated
  const monthlyQueries = dailyQueries * 30;
  const automatedQueries = Math.round(monthlyQueries * 0.70);
  
  // Time per query: ~4 minutes if done manually by human
  const minutesSaved = automatedQueries * 4;
  const hoursSavedPerMonth = Math.round(minutesSaved / 60);

  // Financial savings: portion of salary/labor eliminated or redirected to high-value growth
  // 70% efficiency multiplier on customer support payroll
  const monthlySavingsBDT = Math.round((staffCount * avgSalaryBDT) * 0.65);
  const monthlySavingsUSD = Math.round(monthlySavingsBDT / 120);

  // Extra revenue from instant lead response (estimating 12% boost on converted sales)
  const estimatedExtraOrders = Math.round(monthlyQueries * 0.08);

  return (
    <section id="roi-calculator" className="py-24 bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-xs font-mono font-semibold text-amber-400 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Financial & Time Optimization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            Calculate Your <span className="text-[#FF7A00]">Automation ROI</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            See how much time, payroll overhead, and dropped customer revenue High-Tech Enterprise saves your business every month.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#0E131F] border border-white/10 shadow-xl space-y-6">
            <div className="text-base font-bold text-white flex items-center justify-between">
              <span>Your Current Operations</span>
              <span className="text-xs font-mono text-[#FF8A33]">Live Estimator</span>
            </div>

            {/* Slider 1: Daily Queries */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-slate-300 font-medium">Daily Customer Messages (WhatsApp/Web):</span>
                <span className="text-base font-mono font-bold text-[#FF8A33]">{dailyQueries} msgs/day</span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={dailyQueries}
                onChange={(e) => setDailyQueries(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>20 msgs</span>
                <span>500 msgs</span>
                <span>1,000+ msgs</span>
              </div>
            </div>

            {/* Slider 2: Support Staff Count */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-slate-300 font-medium">Team Members Handling Support:</span>
                <span className="text-base font-mono font-bold text-emerald-400">{staffCount} Person(s)</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={staffCount}
                onChange={(e) => setStaffCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1 staff</span>
                <span>7 staff</span>
                <span>15 staff</span>
              </div>
            </div>

            {/* Slider 3: Average Staff Cost */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-slate-300 font-medium">Average Monthly Salary per Agent:</span>
                <span className="text-base font-mono font-bold text-cyan-400">
                  ৳ {avgSalaryBDT.toLocaleString()} <span className="text-xs text-slate-400">(${Math.round(avgSalaryBDT / 120)})</span>
                </span>
              </div>
              <input
                type="range"
                min="12000"
                max="60000"
                step="2000"
                value={avgSalaryBDT}
                onChange={(e) => setAvgSalaryBDT(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>৳ 12,000</span>
                <span>৳ 35,000</span>
                <span>৳ 60,000+</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-slate-300">
              💡 <span className="text-white font-semibold">High-Tech Enterprise Fact:</span> 70% of messages are repetitive inquiries regarding pricing, stock, size, and shipping status. Our AI bot answers them instantly without tiring.
            </div>
          </div>

          {/* Results Display (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12192B] via-[#0E1321] to-[#0A0D15] border border-[#FF6B00]/40 shadow-[0_15px_50px_rgba(255,107,0,0.15)] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF8A33] mb-4">
                Your Projected Monthly Return
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>Time Saved</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {hoursSavedPerMonth} <span className="text-sm font-normal text-slate-400">hrs/mo</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1">
                    ≈ {Math.round(hoursSavedPerMonth / 8)} full work days
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Cost Recaptured</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                    ৳ {monthlySavingsBDT.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    ≈ ${monthlySavingsUSD.toLocaleString()} USD / month
                  </div>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Automated Queries:</span>
                  <span className="text-white font-bold">{automatedQueries.toLocaleString()} per month</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Response Speed Shift:</span>
                  <span className="text-emerald-400 font-bold">45 min → 1.8 seconds</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Extra Recovered Orders:</span>
                  <span className="text-[#FF8A33] font-bold">~{estimatedExtraOrders} orders / mo</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenDemoModal}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] shadow-lg flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                <Sparkles className="w-4 h-4" />
                <span>Lock In These Savings</span>
              </button>
              
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl font-semibold text-xs text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center"
              >
                Discuss on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Calculator, Sparkles, Zap } from 'lucide-react';

interface RoiCalculatorSectionProps {
  onOpenBooking: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenBooking }) => {
  const [monthlyBudget, setMonthlyBudget] = useState(5000);
  const [industryType, setIndustryType] = useState<'saas' | 'ecommerce' | 'events' | 'b2b'>('saas');

  // Calculation multipliers based on benchmark agency data
  const multipliers = {
    saas: { estReturn: 4.8, estLeads: 240, estReach: '180,000+' },
    ecommerce: { estReturn: 6.2, estLeads: 850, estReach: '450,000+' },
    events: { estReturn: 5.5, estLeads: 1200, estReach: '320,000+' },
    b2b: { estReturn: 4.2, estLeads: 140, estReach: '95,000+' },
  };

  const currentBenchmark = multipliers[industryType];
  const projectedRevenue = Math.round(monthlyBudget * currentBenchmark.estReturn);
  const projectedLeads = Math.round((monthlyBudget / 5000) * currentBenchmark.estLeads);

  return (
    <section id="calculator" className="relative py-24 bg-[#09071A] border-t border-white/10 overflow-hidden">
      {/* Glow Aura */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#2200EE]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#2200EE]/10 border border-[#2200EE]/30 text-xs font-bold uppercase tracking-wider text-[#5533FF] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="text-[#5533FF]">Growth Potential</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Adjust your estimated monthly growth budget to visualize potential reach, lead volume, and ROI powered by Growio.
          </p>
        </div>

        {/* Interactive Tool Card */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Slider Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Industry Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                  Select Your Business Sector:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'saas', label: 'SaaS & Tech' },
                    { id: 'ecommerce', label: 'E-Commerce' },
                    { id: 'events', label: 'Events & Invites' },
                    { id: 'b2b', label: 'B2B Services' },
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setIndustryType(ind.id as any)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                        industryType === ind.id
                          ? 'bg-[#2200EE] text-white shadow-[0_0_15px_#2200EE] border border-[#5533FF]'
                          : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Target Monthly Growth Investment:
                  </label>
                  <span className="text-2xl font-extrabold text-[#5533FF] font-heading">
                    ${monthlyBudget.toLocaleString()}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="50000"
                  step="1000"
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-3 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#2200EE]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-semibold">
                  <span>$2,000/mo</span>
                  <span>$25,000/mo</span>
                  <span>$50,000/mo</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-gray-300 leading-relaxed">
                <span className="text-white font-bold">Note:</span> Estimates are based on historical client benchmark data across Growio SEO, CRO, web engineering, and paid ad acquisition funnels.
              </div>
            </div>

            {/* Projected Results Box (5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#0D0A26] border border-[#2200EE]/40 p-6 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2200EE]/20 rounded-full blur-xl pointer-events-none" />

              <div className="text-xs font-bold uppercase tracking-widest text-[#5533FF] flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Estimated Growio Yield</span>
              </div>

              {/* Revenue Yield */}
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight glow-text-primary">
                  ${projectedRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-gray-300 font-semibold mt-1">
                  Projected Revenue Return ({currentBenchmark.estReturn}x ROAS BENCHMARK)
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xl font-bold text-white font-heading">
                    {projectedLeads.toLocaleString()}
                  </div>
                  <div className="text-[10px] uppercase font-semibold text-gray-400">
                    Est. Inbound Leads
                  </div>
                </div>

                <div>
                  <div className="text-xl font-bold text-white font-heading">
                    {currentBenchmark.estReach}
                  </div>
                  <div className="text-[10px] uppercase font-semibold text-gray-400">
                    Est. Monthly Impressions
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-[#2200EE] hover:bg-[#1C00C8] text-white text-xs font-bold shadow-[0_0_20px_#2200EE] transition-all flex items-center justify-center space-x-2"
              >
                <span>Claim Your Custom Audit</span>
                <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

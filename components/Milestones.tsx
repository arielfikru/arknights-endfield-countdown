import React from 'react';
import { Check, Gift, Lock } from 'lucide-react';

const milestonesData = [
  { count: '500K', reward: 'T-Creds x30000', reached: true },
  { count: '1M', reward: 'Adv. Combat Record', reached: true },
  { count: '3M', reward: 'Basic HH Permit x5', reached: true },
  { count: '5M', reward: '5★ Op. Snowshine', reached: false },
  { count: '8M', reward: 'Special Outfit', reached: false },
];

export const Milestones: React.FC = () => {
  return (
    <section className="bg-[#f0f0f0] text-black py-20 relative overflow-hidden">
        {/* Diagonal Cut Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e5e5e5] -skew-x-12 translate-x-1/4 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                <div>
                    <h2 className="text-4xl font-bold uppercase tracking-tight mb-2">Pre-Registration <br/> Milestones</h2>
                    <div className="h-1 w-20 bg-[#FFE600]"></div>
                </div>
                <div className="text-right mt-6 md:mt-0">
                    <div className="text-sm font-mono-tech text-gray-600">OVERALL PROGRESS</div>
                    <div className="text-5xl font-bold text-black tracking-tighter">67<span className="text-2xl text-[#FFE600]">%</span></div>
                </div>
            </div>

            {/* Progress Bar Container */}
            <div className="relative w-full h-2 bg-gray-300 rounded-full mb-12">
                <div className="absolute top-0 left-0 h-full bg-[#FFE600] w-[67%] shadow-[0_0_10px_#FFE600]"></div>
                {/* Points on the bar */}
                {milestonesData.map((_, idx) => (
                    <div 
                        key={idx} 
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full z-10"
                        style={{ left: `${(idx + 1) * (100 / milestonesData.length) - (100 / milestonesData.length / 2)}%` }}
                    >
                        {idx < 3 && <div className="absolute inset-0 bg-[#FFE600] rounded-full scale-50"></div>}
                    </div>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {milestonesData.map((m, idx) => (
                    <div key={idx} className={`relative group transition-all duration-300 ${m.reached ? 'opacity-100' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`}>
                        {/* Status Badge */}
                        <div className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 uppercase ${m.reached ? 'bg-[#FFE600] text-black' : 'bg-gray-400 text-white'}`}>
                            {m.reached ? 'Achieved' : 'Locked'}
                        </div>

                        <div className="bg-white p-6 border-b-4 border-transparent hover:border-[#FFE600] transition-all h-full shadow-lg flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-100 mb-4 flex items-center justify-center rounded-sm rotate-3 group-hover:rotate-0 transition-transform">
                                {m.reached ? <Check className="text-[#FFE600] w-8 h-8" /> : <Lock className="text-gray-400 w-8 h-8" />}
                            </div>
                            <div className="text-2xl font-bold mb-1 font-mono-tech">{m.count}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">{m.reward}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Floating tech elements */}
        <div className="absolute bottom-10 left-10 text-gray-300 text-9xl font-bold opacity-10 pointer-events-none select-none">
            PRIZE
        </div>
    </section>
  );
};
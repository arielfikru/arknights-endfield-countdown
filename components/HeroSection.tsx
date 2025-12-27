import React from 'react';
import { Countdown } from './Countdown';
import { ChevronRight, Play } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-10 pb-10">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://image-5.uhdpaper.com/wallpaper/arknights-endfield-endministrator-perlica-hd-wallpaper-uhdpaper.com-306@5@c.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]/20"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row items-center md:items-end gap-12 mt-12 md:mt-0">
        
        {/* Left Side: Title and Text */}
        <div className="flex-1 w-full text-center md:text-left space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#FFE600] font-mono-tech text-sm tracking-[0.2em] mb-2 animate-pulse">
                <span>&gt;&gt;</span>
                <span>TARGET_LOCK: ARKNIGHTS ENDFIELD</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white animate-fade-in-up">
              <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent text-stroke mb-[-0.1em] opacity-80 animate-slide-in-left delay-100">ARKNIGHTS</span>
              <span className="block animate-glitch-text delay-500">ENDFIELD</span>
            </h1>
            
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 font-mono-tech text-sm md:text-base border-l-2 border-[#FFE600] pl-4 animate-fade-in-up delay-300">
                Real-time 3D RPG with strategic elements. <br/>
                Explore the planet Talos-II.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-6 pt-8 animate-fade-in-up delay-500">
                <button className="relative bg-[#FFE600] text-black px-8 py-4 font-bold text-lg uppercase tracking-wider clip-button hover:bg-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">Pre-Register <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </button>
                
                <button className="flex items-center gap-3 px-6 py-4 border border-white/30 bg-black/40 backdrop-blur-sm text-white font-mono-tech hover:bg-white/10 hover:border-white transition-all clip-button group">
                    <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                    <span>TRAILER</span>
                </button>
            </div>
        </div>

        {/* Right Side: Countdown */}
        <div className="flex-1 w-full flex justify-center md:justify-end animate-fade-in-up delay-700">
             <div className="bg-black/80 backdrop-blur-md border-t-2 border-[#FFE600] p-6 md:p-10 w-full max-w-xl relative animate-pulse-glow">
                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FFE600]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FFE600]"></div>
                
                <h3 className="text-gray-400 font-mono-tech text-xs uppercase tracking-widest mb-6 flex justify-between">
                    <span>Arknights Endfield</span>
                    <span className="animate-pulse">Launch Countdown</span>
                </h3>
                
                <Countdown targetDate="2026-01-22T00:00:00-05:00" />
                
                <div className="mt-6 flex justify-between items-end border-t border-white/10 pt-4">
                    <div className="text-xs text-gray-500 font-mono-tech">
                        DESTINATION: <br/>
                        TALOS-II
                    </div>
                    <div className="text-[#FFE600] text-xs font-bold uppercase tracking-widest animate-pulse">
                        Awaiting Authorization
                    </div>
                </div>
             </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block opacity-50 animate-float">
        <div className="flex flex-col gap-4 text-[10px] font-mono-tech text-gray-400 writing-vertical-rl">
             <span>ARKNIGHTS_ENDFIELD.EXE</span>
             <span className="animate-pulse">SYS.STATUS.NORMAL</span>
        </div>
      </div>
    </section>
  );
};
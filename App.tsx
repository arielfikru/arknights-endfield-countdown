import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CommunitySection } from './components/CommunitySection';
import { TechDecoration } from './components/TechDecoration';
import { InfoCards } from './components/InfoCards';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative selection:bg-[#FFE600] selection:text-black overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 tech-grid opacity-30"></div>
      
      {/* Scanline CRT Effect */}
      <div className="scanline-bar"></div>
      
      <main className="relative z-10 flex flex-col gap-0">
        <HeroSection />
        
        {/* Transition Line */}
        <div className="h-2 w-full bg-[#FFE600] relative animate-slide-in-left delay-500 opacity-0 fill-mode-forwards">
          <div className="absolute right-20 -top-2 bg-[#0a0a0a] px-4 text-[#FFE600] text-xs font-mono-tech tracking-widest">
            // DATA_SYNC
          </div>
        </div>

        <InfoCards />

        <CommunitySection />

        <div className="py-24 bg-[#111] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFE600] to-transparent opacity-50"></div>
             <div className="container mx-auto px-6 text-center">
                 <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 animate-fade-in-up">
                    Start Your <span className="text-[#FFE600]">Journey</span>
                 </h2>
                 <p className="max-w-2xl mx-auto text-gray-400 mb-12 animate-fade-in-up delay-200">
                    The world of Arknights Endfield awaits. Join the waitlist now to secure your coordinates on Talos-II.
                 </p>
                 <div className="animate-fade-in-up delay-300">
                     <a href="https://endfield.gryphline.com/en-us" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-12 py-4 bg-[#FFE600] text-black font-bold text-lg tracking-widest uppercase clip-button hover:bg-white transition-colors duration-300">
                        <span className="relative z-10">Pre-Register Now</span>
                        <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out -z-0"></div>
                     </a>
                 </div>
                 
                 <div className="mt-12 text-xs text-gray-600 font-mono-tech max-w-md mx-auto animate-fade-in-up delay-500">
                    DISCLAIMER: This is a fan-made website and is not affiliated with Hypergryph, Gryphline, or Yostar. Arknights Endfield and related assets are trademarks of their respective owners.
                 </div>
             </div>
             <TechDecoration className="absolute bottom-10 left-10 opacity-20 animate-float" />
        </div>
      </main>
    </div>
  );
}
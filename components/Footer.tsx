import React from 'react';
import { Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            
            <div className="mb-8 md:mb-0">
                <div className="text-2xl font-bold tracking-tighter mb-4 italic">ENDFIELD INDUSTRIES</div>
                <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
                    This is a fan-made website and is not affiliated with Hypergryph or Gryphline.
                    All assets and trademarks belong to their respective owners.
                </p>
            </div>

            <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-[#FFE600] text-sm uppercase mb-2">Navigation</h4>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">Home</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">News</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">About</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-[#FFE600] text-sm uppercase mb-2">Legal</h4>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8">
            <div className="flex gap-4 mb-4 md:mb-0">
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#FFE600] hover:text-black transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#FFE600] hover:text-black transition-colors">
                    <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#FFE600] hover:text-black transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#FFE600] hover:text-black transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
            </div>
            
            <div className="text-xs text-gray-600 font-mono-tech">
                © 2024 FAN PROJECT. // SYSTEM_OFFLINE
            </div>
        </div>
      </div>
    </footer>
  );
};
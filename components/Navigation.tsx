import React from 'react';
import { Menu, Globe, User } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-4">
            <div className="bg-white text-black font-bold p-1 px-2 text-xl tracking-tighter transform -skew-x-12">
                ENDFIELD
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-white/30"></div>
            <div className="hidden md:block text-xs font-mono-tech text-gray-400">
                OFFICIAL FAN SITE<br/>
                PROTOCOLS ACTIVE
            </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
            {['HOME', 'NEWS', 'CHARACTERS', 'WORLD', 'MEDIA'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-bold text-gray-400 hover:text-[#FFE600] tracking-widest transition-colors relative group"
                >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE600] group-hover:w-full transition-all duration-300"></span>
                </a>
            ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-xs font-mono-tech text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1">
                <Globe className="w-3 h-3" />
                EN
            </button>
            <button className="md:hidden text-white">
                <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center justify-center w-8 h-8 border border-[#FFE600] text-[#FFE600]">
                <User className="w-4 h-4" />
            </div>
        </div>
      </div>
      
      {/* Decorative Line below nav */}
      <div className={`absolute bottom-0 left-0 h-[1px] bg-[#FFE600] transition-all duration-1000 ${scrolled ? 'w-full' : 'w-0'}`}></div>
    </header>
  );
};
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const InfoCards: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Lore Card */}
            <a href="https://game8.co/games/Arknights-Endfield/archives/523676" target="_blank" rel="noopener noreferrer" className="group relative h-[400px] overflow-hidden border border-white/10 hover:border-[#FFE600] transition-colors animate-fade-in-up delay-200 block cursor-pointer">
                <img src={`${import.meta.env.BASE_URL}endministrator.png`} alt="Arknights Endfield Lore" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-[#FFE600] text-xs font-mono-tech mb-2 animate-pulse">
                                ENDFIELD_ARCHIVE // 01
                            </div>
                            <h3 className="text-3xl font-bold uppercase mb-2">The Endministrator</h3>
                            <p className="text-gray-400 text-sm max-w-sm line-clamp-2">
                                In the world of Arknights Endfield, the Endministrator stands as a key figure who led Endfield Industries to pioneer Talos-II.
                            </p>
                        </div>
                        <div className="bg-[#FFE600] p-3 text-black clip-button transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <ArrowUpRight />
                        </div>
                    </div>
                </div>
            </a>

            {/* Media Card */}
            <a href="https://www.youtube.com/watch?v=67Vj96zza08" target="_blank" rel="noopener noreferrer" className="group relative h-[400px] overflow-hidden border border-white/10 hover:border-[#FFE600] transition-colors animate-fade-in-up delay-300 block cursor-pointer">
                 <img src={`${import.meta.env.BASE_URL}operator.69ebf0f6.png`} alt="Combat Mechanics" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                 <div className="absolute inset-0">
                    <div className="w-full h-full flex items-center justify-center">
                        {/* Abstract Tech Graphic */}
                        <div className="w-40 h-40 border border-white/20 rounded-full flex items-center justify-center relative animate-[spin_10s_linear_infinite] group-hover:border-[#FFE600]/50 transition-colors">
                            <div className="absolute inset-0 border-t-2 border-[#FFE600] rounded-full"></div>
                            <div className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center animate-[spin_5s_linear_infinite_reverse]">
                                <div className="w-20 h-20 border border-dashed border-white/30 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                 </div>
                 
                 <div className="absolute top-8 right-8 text-right">
                    <h3 className="text-4xl font-bold text-transparent text-stroke opacity-30 group-hover:opacity-100 transition-opacity duration-500">GAMEPLAY</h3>
                 </div>

                 <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end">
                         <div>
                             <div className="text-[#FFE600] text-xs font-mono-tech mb-2 animate-pulse">
                                SYSTEM_LOGS
                            </div>
                             <h3 className="text-3xl font-bold uppercase mb-2">Combat Mechanics</h3>
                             <p className="text-gray-400 text-sm">
                                Experience the real-time strategy combat of Arknights Endfield.
                             </p>
                         </div>
                         <div className="bg-white p-3 text-black clip-button transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <ArrowUpRight />
                        </div>
                    </div>
                 </div>
            </a>

        </div>
      </div>
    </section>
  );
};
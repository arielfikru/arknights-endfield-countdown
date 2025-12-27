import React from 'react';
import { Users, ExternalLink, Globe, MapPin } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section className="bg-[#111] py-24 border-y border-white/10 relative overflow-hidden">
        {/* Background Decors */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE600] opacity-5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-12 animate-fade-in-up">
                <div className="text-[#FFE600] font-mono-tech text-xs tracking-[0.2em] mb-2">
                    // ESTABLISH_CONNECTION
                </div>
                <h2 className="text-3xl md:text-5xl font-bold uppercase flex flex-col md:flex-row md:items-center gap-4">
                    <span>Community</span>
                    <span className="text-transparent text-stroke md:text-5xl">ChANNELS</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl">
                    Join the expanding network of Operators. Connect with the official Arknights Endfield community or join the local Indonesian division.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Indonesia Group */}
                <a href="https://www.facebook.com/groups/842515167878065/" target="_blank" rel="noopener noreferrer" className="group relative bg-[#0a0a0a] border border-white/10 p-8 hover:border-[#FFE600] transition-all duration-300 overflow-hidden animate-fade-in-up delay-200">
                     {/* Hover Effect Background */}
                     <div className="absolute inset-0 bg-[#FFE600] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                     <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-6 h-6 text-[#FFE600]" />
                     </div>

                     <div className="flex items-start gap-6 relative z-10">
                        <div className="w-16 h-16 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#FFE600] clip-button group-hover:bg-[#FFE600] group-hover:text-black transition-colors duration-500">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-[#FFE600] rounded-full animate-ping"></div>
                                <div className="text-[#FFE600] text-xs font-mono-tech tracking-widest">SECTOR: INDONESIA</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">Arknights Endfield ID</h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                                Official Fan Group for Arknights Endfield Indonesia. Discuss theories, share localized content, and prepare for deployment.
                            </p>
                        </div>
                     </div>
                </a>

                {/* Official Group */}
                <a href="https://www.facebook.com/groups/3791219181012123/" target="_blank" rel="noopener noreferrer" className="group relative bg-[#0a0a0a] border border-white/10 p-8 hover:border-white transition-all duration-300 overflow-hidden animate-fade-in-up delay-300">
                     {/* Hover Effect Background */}
                     <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                     <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-6 h-6 text-white" />
                     </div>

                     <div className="flex items-start gap-6 relative z-10">
                        <div className="w-16 h-16 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white clip-button group-hover:bg-white group-hover:text-black transition-colors duration-500">
                            <Globe className="w-8 h-8" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <div className="text-white/70 text-xs font-mono-tech tracking-widest">GLOBAL FREQUENCY</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">Official Community</h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                                The central hub for Arknights Endfield. Access official announcements, developer logs, and global operator discussions.
                            </p>
                        </div>
                     </div>
                </a>
            </div>
        </div>
    </section>
  );
};
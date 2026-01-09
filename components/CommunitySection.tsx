import React from 'react';
import { Users, ExternalLink, Globe, MapPin } from 'lucide-react';

interface CommunitySectionProps {
    phase: 'PRE_LAUNCH' | 'ANNIVERSARY';
    accentColor: string;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ phase, accentColor }) => {
    const isAnniversary = phase === 'ANNIVERSARY';

    return (
        <section className="bg-[#111] py-24 border-y border-white/10 relative overflow-hidden">
            {/* Background Decors */}
            <div
                className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl pointer-events-none animate-pulse"
                style={{ backgroundColor: accentColor }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-12 animate-fade-in-up">
                    <div className="font-mono-tech text-xs tracking-[0.2em] mb-2" style={{ color: accentColor }}>
                    // {isAnniversary ? 'CELEBRATION_FORUM' : 'ESTABLISH_CONNECTION'}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase flex flex-col md:flex-row md:items-center gap-4">
                        <span>Community</span>
                        <span className="text-transparent text-stroke md:text-5xl">ChANNELS</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl">
                        {isAnniversary
                            ? 'Celebrate with fellow Operators. Join the discussions and share your one-year journey experiences.'
                            : 'Join the expanding network of Operators. Connect with the official Arknights Endfield community.'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Indonesia Group */}
                    <a
                        href="https://www.facebook.com/groups/842515167878065/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-[#0a0a0a] border border-white/10 p-8 transition-all duration-300 overflow-hidden animate-fade-in-up delay-200"
                        style={{ borderLeftColor: accentColor, borderLeftWidth: '4px' }}
                    >
                        {/* Hover Effect Background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundColor: accentColor }}></div>
                        <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="w-6 h-6" style={{ color: accentColor }} />
                        </div>

                        <div className="flex items-start gap-6 relative z-10">
                            <div
                                className="w-16 h-16 bg-[#1a1a1a] border border-white/10 flex items-center justify-center clip-button group-hover:text-black transition-colors duration-500"
                                style={{ color: accentColor, backgroundColor: '#1a1a1a' }}
                            >
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: accentColor }}></div>
                                    <div className="text-xs font-mono-tech tracking-widest" style={{ color: accentColor }}>Community</div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">Arknights Endfield ID</h3>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                                    Official Fan Group for Arknights Endfield Indonesia. Discuss theories, share localized content, and celebrate our progress.
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
                                    <div className="text-white/70 text-xs font-mono-tech tracking-widest">Official</div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">Official Indonesia</h3>
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
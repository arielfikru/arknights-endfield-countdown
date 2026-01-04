import React, { useState, useEffect } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false); // Trigger yellow wipe in
    const [isRevealing, setIsRevealing] = useState(false); // Trigger yellow wipe out

    useEffect(() => {
        // Simulation of loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    // Sequence: 
                    // 1. Wait a moment at 100%
                    // 2. Trigger Wipe In (Yellow covers screen)
                    // 3. Trigger Wipe Out (Yellow leaves screen) -> onComplete
                    setTimeout(() => {
                        setIsExiting(true); // Yellow curtain enters from left

                        setTimeout(() => {
                            onComplete(); // Mount main app content first

                            // Small delay to ensure React renders the content before revealing
                            setTimeout(() => {
                                setIsRevealing(true); // Yellow curtain moves right to reveal content
                            }, 50);
                        }, 800); // Wait for curtain to cover screen

                    }, 200);
                    return 100;
                }
                // Random increment for realistic feel
                const increment = Math.random() * 5 + 1;
                return Math.min(prev + increment, 100);
            });
        }, 50);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] flex flex-col justify-end pointer-events-none`}>

            {/* 1. Black Background Layer (The Loading Screen) */}
            {/* Hide this layer when revealing so main content shows through */}
            <div className={`absolute inset-0 bg-[#0a0a0a] transition-opacity duration-100 ${isRevealing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

                {/* Central Logo / Text with Glitch Effect */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="relative">
                        {/* Main Text */}
                        <div className="text-white font-bold tracking-tighter text-5xl md:text-7xl uppercase relative">
                            <span className="animate-pulse">ENDFIELD</span>
                        </div>
                        {/* Subtitle */}
                        <div className="text-[#FFE600] font-mono-tech text-xs md:text-sm tracking-[0.3em] mt-2 text-center animate-pulse">
              // INITIALIZING_SYSTEM
                        </div>
                    </div>
                </div>

                {/* Tech Decoration - Top Right */}
                <div className={`absolute top-8 right-8 md:right-12 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex flex-col items-end gap-1 text-gray-600 font-mono-tech text-[10px] uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse"></span>
                            <span>SYS_BOOT</span>
                        </div>
                        <div className="text-gray-700">VER.2026.01.05</div>
                    </div>
                </div>

                {/* Tech Decoration - Top Left */}
                <div className={`absolute top-8 left-6 md:left-12 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex flex-col gap-1 text-gray-600 font-mono-tech text-[10px] uppercase tracking-widest">
                        <div>TALOS-II_PROTOCOL</div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-[2px] bg-[#FFE600] animate-pulse"></div>
                            <span>ACTIVE</span>
                        </div>
                    </div>
                </div>

                {/* Progress Info - Bottom Left */}
                <div className={`absolute bottom-24 left-6 md:left-12 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex items-end gap-3 text-[#FFE600] leading-none">
                        <span className="text-6xl md:text-8xl font-bold tracking-tighter font-mono-tech tabular-nums">
                            {Math.floor(progress).toString().padStart(2, '0')}%
                        </span>
                        <div className="flex flex-col gap-1 mb-2">
                            <span className="text-[10px] md:text-xs font-mono-tech text-gray-500 uppercase tracking-widest animate-pulse">
                // LOADING_ASSETS...
                            </span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1.5 h-1.5 ${progress > i * 20 ? 'bg-[#FFE600]' : 'bg-gray-700'} transition-colors duration-200`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar Line */}
                <div className={`absolute bottom-20 left-0 w-full h-[2px] bg-gray-800/50 overflow-hidden transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                    <div
                        className="h-full bg-[#FFE600] transition-all duration-100 ease-out"
                        style={{
                            width: `${progress}%`,
                            boxShadow: '0 0 10px #FFE600, 0 0 20px #FFE600, 0 0 30px #FFE600'
                        }}
                    ></div>
                </div>

                {/* Corner Decorations */}
                <div className={`absolute bottom-6 right-6 md:right-12 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="text-gray-700 font-mono-tech text-[10px] uppercase tracking-widest text-right">
                        <div>CORE_SYS: ONLINE</div>
                        <div className="text-gray-600">MEM_ALLOC: {Math.floor(progress * 2.56)}MB</div>
                    </div>
                </div>

                {/* Scan Lines Effect (subtle) */}
                <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                    }}
                ></div>

            </div>

            {/* 2. Yellow Wipe Curtain */}
            {/* Starts at -100% (Left). Moves to 0% (Center). Then to 100% (Right). */}
            <div
                className="absolute inset-0 bg-[#FFE600] z-50 transform transition-transform duration-[800ms]"
                style={{
                    transform: isRevealing
                        ? 'translateX(100%)' // Move to Right (Reveal)
                        : isExiting
                            ? 'translateX(0%)'   // Move to Center (Cover)
                            : 'translateX(-100%)', // Start at Left (Hidden)
                    transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)'
                }}
            >
                {/* Tech deco on the yellow curtain */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-black/10 font-bold text-[15vw] uppercase tracking-tighter select-none">
                        LOADING
                    </div>
                </div>

                {/* Corner details */}
                <div className="absolute bottom-10 right-10 text-black/30 font-mono-tech text-xs uppercase tracking-widest">
          // TRANSITION_COMPLETE
                </div>

                {/* Geometric decorations */}
                <div className="absolute top-0 left-0 w-full h-1 bg-black/10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10"></div>
            </div>

        </div>
    );
};

import React, { useState, useCallback } from 'react';
import { HeroSection } from './components/HeroSection';
import { CommunitySection } from './components/CommunitySection';
import { TechDecoration } from './components/TechDecoration';
import { InfoCards } from './components/InfoCards';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';

const DATES = {
  LAUNCH: "2026-01-22T00:00:00-05:00",
  ANNIVERSARY_1: "2027-01-22T00:00:00-05:00"
};

const PHASES = {
  PRE_LAUNCH: {
    accent: '#FFE600',
    label: 'Launch Countdown',
    loadingLabel: '// SYSTEM_BOOT...',
    targetDate: DATES.LAUNCH
  },
  ANNIVERSARY: {
    accent: '#00F0FF', // Cyan Neon
    label: '1st Anniversary Celebration',
    loadingLabel: '// ANIV_CELEBRATION...',
    targetDate: DATES.ANNIVERSARY_1
  }
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Determine current phase using URL Search Params (GitHub Pages friendly)
  const urlParams = new URLSearchParams(window.location.search);
  const isAnniversaryPreview = urlParams.get('preview') === 'anniversary';

  const launchDate = new Date(DATES.LAUNCH).getTime();
  const now = new Date().getTime();

  const currentPhase: 'PRE_LAUNCH' | 'ANNIVERSARY' = (isAnniversaryPreview || now > launchDate) ? 'ANNIVERSARY' : 'PRE_LAUNCH';
  const theme = PHASES[currentPhase];

  const handlePreloaderComplete = useCallback(() => {
    setShowContent(true);
    // Delay hiding preloader to allow reveal animation to complete
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden cursor-none"
      style={{
        // @ts-ignore
        '--accent-color': theme.accent,
        '--selection-bg': theme.accent,
        '--selection-text': '#000000'
      } as React.CSSProperties}
    >
      <style>{`
        ::selection {
          background-color: ${theme.accent};
          color: black;
        }
      `}</style>
      {/* Preloader */}
      {isLoading && (
        <Preloader
          onComplete={handlePreloaderComplete}
          accentColor={theme.accent}
          loadingLabel={theme.loadingLabel}
        />
      )}

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 tech-grid opacity-30"></div>

      {/* Scanline CRT Effect */}
      <div className="scanline-bar"></div>

      <CustomCursor />

      {/* Main Content - Only rendered after preloader completes */}
      <main
        className={`relative z-10 flex flex-col gap-0 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <HeroSection
          phase={currentPhase}
          accentColor={theme.accent}
          targetDate={theme.targetDate}
          label={theme.label}
        />

        {/* Transition Line */}
        <div
          className="h-2 w-full relative animate-slide-in-left delay-500 opacity-0 fill-mode-forwards"
          style={{ backgroundColor: theme.accent }}
        >
          <div className="absolute right-20 -top-2 bg-[#0a0a0a] px-4 text-xs font-mono-tech tracking-widest" style={{ color: theme.accent }}>
            // DATA_SYNC
          </div>
        </div>

        <InfoCards phase={currentPhase} accentColor={theme.accent} />

        <CommunitySection phase={currentPhase} accentColor={theme.accent} />

        <div className="py-24 bg-[#111] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-px opacity-50"
            style={{ background: `linear-gradient(to right, transparent, ${theme.accent}, transparent)` }}
          ></div>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 animate-fade-in-up">
              {currentPhase === 'PRE_LAUNCH' ? 'Start Your' : 'Continue Your'} <span style={{ color: theme.accent }}>{currentPhase === 'PRE_LAUNCH' ? 'Journey' : 'Celebration'}</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 mb-12 animate-fade-in-up delay-200">
              {currentPhase === 'PRE_LAUNCH'
                ? 'The world of Arknights Endfield awaits. Join the waitlist now to secure your coordinates on Talos-II.'
                : 'One year of exploration on Talos-II. Join the celebration and see what the future holds for Endfield.'
              }
            </p>
            <div className="animate-fade-in-up delay-300">
              <a
                href="https://endfield.gryphline.com/en-us"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-12 py-4 text-black font-bold text-lg tracking-widest uppercase clip-button hover:bg-white transition-colors duration-300"
                style={{ backgroundColor: theme.accent }}
              >
                <span className="relative z-10">
                  {currentPhase === 'PRE_LAUNCH' ? 'Pre-Register Now' : 'Join Celebration'}
                </span>
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
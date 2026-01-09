import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
  accentColor: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate, accentColor }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [totalMs, setTotalMs] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTotalMs(difference);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTotalMs(0);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 100); // Update more frequently for smoother animation

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4">
      <TimeBlock value={timeLeft.days} label="DAYS" totalMs={totalMs} unit="days" accentColor={accentColor} />
      <TimeBlock value={timeLeft.hours} label="HRS" totalMs={totalMs} unit="hours" accentColor={accentColor} />
      <TimeBlock value={timeLeft.minutes} label="MIN" totalMs={totalMs} unit="minutes" accentColor={accentColor} />
      <TimeBlock value={timeLeft.seconds} label="SEC" totalMs={totalMs} unit="seconds" accentColor={accentColor} isLast />
    </div>
  );
};

const TimeBlock: React.FC<{
  value: number;
  label: string;
  totalMs: number;
  unit: 'days' | 'hours' | 'minutes' | 'seconds';
  accentColor: string;
  isLast?: boolean
}> = ({ value, label, totalMs, unit, accentColor, isLast }) => {
  const formattedValue = value.toString().padStart(2, '0');

  // Calculate progress for each unit based on its cycle time
  const getProgress = () => {
    if (totalMs <= 0) return 0;

    const cycleTimes = {
      days: 24 * 60 * 60 * 1000,      // 1 day in milliseconds
      hours: 60 * 60 * 1000,           // 1 hour in milliseconds
      minutes: 60 * 1000,              // 1 minute in milliseconds
      seconds: 1000                    // 1 second in milliseconds
    };

    const cycleTime = cycleTimes[unit];
    const progress = (totalMs % cycleTime) / cycleTime;
    return progress;
  };

  const progress = getProgress();
  // Transform from -100% (fully left/hidden) to 0% (fully right/visible)
  const translateX = `${(1 - progress) * -100}%`;

  return (
    <div className="flex flex-col items-center relative group">
      <div className="relative w-full aspect-square bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
        {/* Inner scanline decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

        {/* Animated slide effect overlay */}
        <div
          className="absolute inset-0 -translate-y-full group-hover:translate-y-full transition-transform duration-1000 z-10"
          style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}1A, transparent)` }}
        ></div>

        {/* Glitch Number Component */}
        <span className="relative z-20 text-3xl md:text-5xl lg:text-6xl font-bold font-mono-tech tracking-tighter text-white animate-glitch-text chromatic-glitch" data-text={formattedValue}>
          {formattedValue}
        </span>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 z-20"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 z-20"></div>
        <div className="absolute top-0 right-0 w-1 h-1 z-20" style={{ backgroundColor: accentColor, opacity: 0.5 }}></div>
      </div>

      <div className="mt-2 flex items-center gap-2 w-full">
        <span className="text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.2em]">{label}</span>
        {!isLast && <div className="hidden md:block flex-1 h-[1px] bg-gray-800 relative overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(${translateX})`, backgroundColor: accentColor }}
          ></div>
        </div>}
      </div>
    </div>
  );
};
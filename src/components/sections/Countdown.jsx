import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { RevealOnScroll } from '../common/RevealOnScroll';

export const Countdown = ({ targetDate, labels }) => {
  const timeLeft = useCountdown(targetDate);

  const units = [
    { label: labels.d, value: timeLeft.d },
    { label: labels.h, value: timeLeft.h },
    { label: labels.m, value: timeLeft.m },
    { label: labels.s, value: timeLeft.s },
  ];

  return (
    <section className="py-20 bg-white">
      <RevealOnScroll>
        <div className="flex justify-center gap-4 text-wedding-accent">
          {units.map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-wedding-gold/20 rounded-full mb-2">
                <span className="text-2xl md:text-3xl font-serif">{unit.value}</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-wedding-gold font-bold">{unit.label}</span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

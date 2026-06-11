import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownAndFamily = ({ data, settings }) => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = new Date(data.date.iso).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        d: Math.floor(distance / (1000 * 60 * 60 * 24)),
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data.date.iso]);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center bg-wedding-cream/50 backdrop-blur-sm border border-wedding-primary/10 p-4 rounded-lg min-w-[70px] md:min-w-[100px] shadow-sm">
      <span className="text-2xl md:text-3xl font-serif text-wedding-primary">{value}</span>
      <span className="text-[10px] uppercase tracking-widest text-wedding-secondary font-bold mt-1">{label}</span>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        {/* Countdown */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-center gap-3 md:gap-6 mb-8">
            <TimeBox value={timeLeft.d} label="Días" />
            <TimeBox value={timeLeft.h} label="Hrs" />
            <TimeBox value={timeLeft.m} label="Min" />
            <TimeBox value={timeLeft.s} label="Seg" />
          </div>
          
          <button className="px-6 py-2 border border-wedding-primary text-wedding-primary uppercase text-xs tracking-widest hover:bg-wedding-primary hover:text-wedding-cream transition-colors duration-300">
            Agregar a Calendario
          </button>
        </motion.div>

        {/* Family Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif italic text-wedding-primary mb-12">
            Con la bendición de Dios y el amor de nuestros padres
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Bride Parents */}
            <div className="space-y-3">
              <h3 className="font-serif text-wedding-primary uppercase tracking-widest text-sm font-bold">
                {data.family.bride.label}
              </h3>
              <div className="text-wedding-dark font-sans text-lg space-y-1">
                {data.family.bride.parents.map((parent, i) => (
                  <p key={i}>{parent}</p>
                ))}
              </div>
            </div>

            {/* Groom Parents */}
            <div className="space-y-3">
              <h3 className="font-serif text-wedding-primary uppercase tracking-widest text-sm font-bold">
                {data.family.groom.label}
              </h3>
              <div className="text-wedding-dark font-sans text-lg space-y-1">
                {data.family.groom.parents.map((parent, i) => (
                  <p key={i}>{parent}</p>
                ))}
              </div>
            </div>

            {/* Godparents */}
            <div className="space-y-3">
              <h3 className="font-serif text-wedding-primary uppercase tracking-widest text-sm font-bold">
                {data.family.godparents.label}
              </h3>
              <div className="text-wedding-dark font-sans text-lg space-y-1">
                {data.family.godparents.people.map((person, i) => (
                  <p key={i}>{person}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownAndFamily;
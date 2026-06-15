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
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-serif text-wedding-primary">{value}</span>
      <span className="text-[9px] uppercase tracking-[0.2em] text-wedding-secondary/70 font-bold mt-1">{label}</span>
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
          <div className="flex justify-center gap-6 md:gap-12 mb-12">
            <TimeBox value={timeLeft.d} label="Días" />
            <TimeBox value={timeLeft.h} label="Horas" />
            <TimeBox value={timeLeft.m} label="Min" />
            <TimeBox value={timeLeft.s} label="Seg" />
          </div>

          <button className="px-8 py-3 border border-wedding-primary/30 text-wedding-primary uppercase text-[10px] tracking-[0.3em] hover:border-wedding-primary transition-all duration-300">
            Agregar a Calendario
          </button>
        </motion.div>

        {/* Family Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif italic text-wedding-primary mb-16">
            Con la bendición de Dios y el amor de nuestros padres
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: data.family.bride.label, names: data.family.bride.parents },
              { label: data.family.groom.label, names: data.family.groom.parents },
              { label: data.family.godparents.label, names: data.family.godparents.people }
            ].map((group, index) => (
              <div key={index} className="space-y-4">
                {/* Etiqueta: Color secundario más suave y letra más pequeña */}
                <h3 className="font-sans text-wedding-primary/60 uppercase tracking-[0.3em] text-[10px] font-bold">
                  {group.label}
                </h3>

                {/* Nombres: Color primario (fuerte) y peso limpio */}
                <div className="text-wedding-primary font-serif text-lg space-y-1">
                  {group.names.map((name, i) => (
                    <p key={i} className="leading-relaxed">{name}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownAndFamily;
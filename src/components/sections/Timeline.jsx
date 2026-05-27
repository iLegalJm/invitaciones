import React from 'react';
import { RevealOnScroll } from '../common/RevealOnScroll';

export const Timeline = ({ events }) => {
  return (
    <section className="py-24 px-6 bg-wedding-secondary overflow-hidden">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-[10px] text-wedding-gold font-bold mb-4 block">Nuestro Camino</span>
          <h2 className="text-4xl font-serif text-wedding-accent italic">Nuestra Historia</h2>
        </div>
      </RevealOnScroll>

      <div className="relative max-w-2xl mx-auto">
        {/* Línea Central Vertical */}
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-wedding-gold/30 hidden md:block" />

        <div className="space-y-12">
          {events.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.2} y={30}>
              <div className={`relative flex items-center justify-between w-full mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12" />
                
                {/* Punto en la línea */}
                <div className="absolute left-[-5px] md:left-[50%] md:translate-x-[-50%] w-3 h-3 rounded-full bg-wedding-gold border-4 border-wedding-secondary z-10" />

                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <div className={`p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-wedding-gold/10 shadow-sm hover:shadow-md transition-shadow duration-500 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-wedding-gold font-bold text-xs uppercase tracking-widest block mb-2">{item.date}</span>
                    <h3 className="text-xl font-serif text-wedding-accent mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

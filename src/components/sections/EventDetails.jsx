import React from 'react';
import { motion } from 'framer-motion';

export const EventDetails = ({ locations, date }) => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-[10px] text-wedding-primary font-bold mb-4 block"
          >
            Dónde & Cuándo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-serif text-wedding-primary italic"
          >
            Nuestros Momentos
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {Object.entries(locations).map(([key, loc], index) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-wedding-cream p-8 md:p-10 rounded-3xl border border-wedding-neutral/20 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-wedding-primary font-bold bg-white px-3 py-1 rounded-full shadow-sm">
                      {loc.title}
                    </span>
                    <span className="text-wedding-primary font-serif text-xl italic">{loc.time}</span>
                  </div>
                  
                  <h3 className="text-wedding-primary font-serif text-2xl mb-4 group-hover:text-wedding-secondary transition-colors line-clamp-2">
                    {loc.name}
                  </h3>
                  
                  <p className="text-wedding-accent font-sans text-sm leading-relaxed mb-8 opacity-70">
                    {loc.address}
                  </p>
                </div>

                <a 
                  href={loc.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl border border-wedding-primary text-wedding-primary text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-wedding-primary hover:text-white transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
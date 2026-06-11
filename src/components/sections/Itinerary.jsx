import React from 'react';
import { motion } from 'framer-motion';

const Itinerary = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-serif text-wedding-primary text-center mb-24 italic"
        >
          Itinerario
        </motion.h2>

        <div className="relative">
          {/* Línea Vertical: A la izquierda en móvil, al centro en Desktop */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-wedding-secondary/30" />

          <div className="space-y-16 md:space-y-24 relative">
            {data.itinerary.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                // Flex direction: normal en móvil, zigzag en desktop
                className={`flex items-center w-full relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Lado del Contenido */}
                <div className="w-full pl-12 md:pl-0 md:w-[45%] flex flex-col">
                  {/* Alineación: Izquierda en móvil, abrazando el centro en desktop */}
                  <div className={`flex flex-col ${
                    index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
                  } items-start text-left`}
                  >
                    <span className="text-wedding-primary font-serif text-2xl md:text-3xl mb-2">
                      {item.time}
                    </span>
                    <h4 className="text-wedding-dark font-sans font-bold tracking-widest uppercase text-sm md:text-base mb-1">
                      {item.event}
                    </h4>
                    <p className="text-wedding-secondary font-sans italic text-sm md:text-base max-w-[250px]">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Nodo Decorativo (Diamante) */}
                <div className="absolute left-[15px] md:left-1/2 transform -translate-x-1/2 z-10 bg-[#FAF3E0] border border-wedding-primary w-3 h-3 md:w-4 md:h-4 rotate-45 shadow-sm" />

                {/* Espaciador vacío para Desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
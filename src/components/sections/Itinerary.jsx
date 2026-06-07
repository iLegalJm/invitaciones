import React from 'react';
import { motion } from 'framer-motion';

const Itinerary = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-wedding-cream/20">
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif text-wedding-primary text-center mb-20"
        >
          Itinerario
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-wedding-secondary/40" />

          <div className="space-y-24 relative">
            {data.itinerary.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center justify-between w-full ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="w-[42%] space-y-2">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                    <span className="text-wedding-primary font-serif text-xl">
                      {item.time}
                    </span>
                    <h4 className="text-wedding-accent font-semibold tracking-wide uppercase text-sm">
                      {item.event}
                    </h4>
                    <p className="text-wedding-accent/60 text-xs text-center md:text-left">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="z-10 bg-white border-2 border-wedding-secondary w-4 h-4 rounded-full" />

                {/* Empty Side */}
                <div className="w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;

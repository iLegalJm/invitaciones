import React from 'react';
import { motion } from 'framer-motion';

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LocationsSection = ({ data }) => {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-2xl mx-auto text-center">
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-wedding-dark/80 font-sans italic mb-12 text-lg"
        >
          "Nos encantaría celebrar este momento especial contigo"
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          // Diseño plano sin sombras
          className="space-y-8 bg-white/50 backdrop-blur-sm border border-wedding-secondary/20 p-10 md:p-14 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-wedding-secondary/5 rounded-full -mr-16 -mt-16 pointer-events-none" />

          <div className="space-y-2 relative z-10">
             <span className="text-wedding-secondary uppercase tracking-[0.6em] text-[10px] block font-bold">
              La Celebración
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-wedding-primary italic">
              {data.locations.civil.title || "Ceremonia Civil y Recepción"}
            </h3>
          </div>
          
          <div className="space-y-4 relative z-10">
            <p className="font-sans font-bold text-wedding-dark text-lg tracking-widest uppercase">
              {data.date.display} — {data.locations.civil.time}
            </p>
            <div className="w-12 h-[1px] bg-wedding-secondary/30 mx-auto my-4" />
            <p className="text-wedding-dark text-lg md:text-xl font-medium">
              {data.locations.civil.name}
            </p>
            <p className="text-wedding-secondary font-sans text-sm md:text-base italic">
              {data.locations.civil.address}
            </p>
          </div>

          <div className="pt-6 relative z-10 w-full flex justify-center">
            {/* Botón Minimalista (Ghost Button) */}
            <a 
              href={data.locations.civil.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-wedding-primary text-wedding-primary bg-transparent text-[10px] uppercase tracking-[0.2em] hover:bg-wedding-primary hover:text-white transition-all duration-300 rounded-full w-full md:w-auto"
            >
              <MapIcon />
              Ver ubicación
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationsSection;
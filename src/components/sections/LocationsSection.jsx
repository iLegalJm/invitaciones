import React from 'react';
import { motion } from 'framer-motion';

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LocationsSection = ({ data }) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-wedding-accent/70 font-sans italic mb-16 text-lg"
        >
          "Nos encantaría celebrar este momento especial contigo"
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-wedding-secondary/30">
          {/* Religiosa */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pt-8 md:pt-0 pb-8 md:px-8"
          >
            <h3 className="text-2xl font-serif text-wedding-primary">
              {data.locations.religious.title}
            </h3>
            <div className="space-y-2">
              <p className="font-sans font-semibold text-wedding-accent">
                {data.date.display} — {data.locations.religious.time}
              </p>
              <p className="text-wedding-accent/80">
                {data.locations.religious.name}
              </p>
              <p className="text-wedding-accent/60 text-sm">
                {data.locations.religious.address}
              </p>
            </div>
            <a 
              href={data.locations.religious.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-wedding-primary text-white text-xs uppercase tracking-widest hover:bg-wedding-secondary transition-colors duration-300"
            >
              <MapIcon />
              Ver ubicación en el Mapa
            </a>
          </motion.div>

          {/* Civil & Recepción */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 pt-12 md:pt-0 md:px-8"
          >
            <h3 className="text-2xl font-serif text-wedding-primary">
              {data.locations.civil.title}
            </h3>
            <div className="space-y-2">
              <p className="font-sans font-semibold text-wedding-accent">
                {data.date.display} — {data.locations.civil.time}
              </p>
              <p className="text-wedding-accent/80">
                {data.locations.civil.name}
              </p>
              <p className="text-wedding-accent/60 text-sm">
                {data.locations.civil.address}
              </p>
            </div>
            <a 
              href={data.locations.civil.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-wedding-primary text-white text-xs uppercase tracking-widest hover:bg-wedding-secondary transition-colors duration-300"
            >
              <MapIcon />
              Ver ubicación en el Mapa
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

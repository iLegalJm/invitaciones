import React from 'react';
import { RevealOnScroll } from '../common/RevealOnScroll';

export const MapSection = ({ locations }) => {
  return (
    <section className="py-24 px-6 bg-wedding-cream">
      <RevealOnScroll>
        <h2 className="text-4xl font-serif text-center mb-16 text-wedding-accent italic">Ubicación</h2>
      </RevealOnScroll>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {locations.map((loc, index) => (
          <RevealOnScroll key={index} delay={index * 0.2}>
            <div className="text-center group">
              <div className="mb-6 inline-block p-4 rounded-full bg-wedding-secondary group-hover:bg-wedding-gold/10 transition-colors duration-500">
                {/* Icono Placeholder */}
                <svg className="w-8 h-8 text-wedding-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-3 text-wedding-accent">{loc.name}</h3>
              <p className="text-wedding-gold font-bold mb-2 text-sm uppercase tracking-widest">{loc.time}</p>
              <p className="text-gray-500 mb-6 leading-relaxed">{loc.address}</p>
              <a 
                href={loc.googleMaps} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border-b border-wedding-gold text-wedding-gold pb-1 font-semibold hover:text-wedding-accent hover:border-wedding-accent transition-all duration-300"
              >
                Ver en Google Maps
              </a>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

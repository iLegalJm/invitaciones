import React from 'react';
import { motion } from 'framer-motion';

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EventDetails = ({ locations }) => {
  const events = [
    {
      subtitle: "Nuestra Unión",
      title: locations.religious.title,
      name: locations.religious.name,
      address: locations.religious.address,
      timeString: locations.religious.time, 
      mapUrl: locations.religious.googleMaps
    },
    {
      subtitle: "La Celebración",
      title: locations.civil.title,
      name: locations.civil.name,
      address: locations.civil.address,
      timeString: locations.civil.time,
      mapUrl: locations.civil.googleMaps,
    }
  ];

  return (
    <section className="py-16 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* ── Contenedor en Grid para separar del diseño anterior ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {events.map((event, index) => {
            const [timeValue, ampmValue] = (event.timeString || '').split(' ');

            return (
              <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.2, duration: 0.8 }}
                 viewport={{ once: true, margin: "-50px" }}
                 className="relative z-10 flex flex-col items-center text-center p-10 bg-white/40 backdrop-blur-sm border border-wedding-secondary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-tr-[3rem] rounded-bl-[3rem]"
              >
                {/* Cabecera del Evento */}
                <div className="space-y-3 mb-8 w-full border-b border-wedding-secondary/20 pb-6">
                  <span className="text-wedding-secondary uppercase tracking-[0.4em] text-[9px] block font-bold">
                    {event.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-wedding-primary italic">
                    {event.title}
                  </h2>
                </div>
                
                {/* Detalles del Lugar */}
                <div className="space-y-4 flex-grow flex flex-col justify-center">
                  <p className="text-wedding-dark font-sans font-bold text-lg uppercase tracking-widest leading-tight">
                     {event.name}
                  </p>
                  <p className="text-wedding-secondary font-sans text-sm italic leading-relaxed max-w-xs mx-auto">
                     {event.address}
                  </p>
                </div>
                  
                {/* Bloque de Hora */}
                <div className="flex flex-col items-center py-8">
                    <span className="text-wedding-primary font-serif text-4xl md:text-5xl tracking-widest">
                      {timeValue}
                    </span>
                    {ampmValue && (
                      <span className="text-wedding-secondary text-[10px] uppercase tracking-[0.4em] mt-2 block font-bold">
                        {ampmValue}
                      </span>
                    )}
                </div>

                {/* Botón de Mapa Adaptado al Sistema de Diseño */}
                {event.mapUrl && event.mapUrl !== '#' && (
                  <div className="pt-4 w-full flex justify-center mt-auto">
                    <a 
                      href={event.mapUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-3 border border-wedding-primary text-wedding-primary bg-transparent text-[10px] uppercase tracking-[0.2em] hover:bg-wedding-primary hover:text-white transition-all duration-300 rounded-full w-full sm:w-auto"
                    >
                      <MapIcon />
                      Ver ubicación
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
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
    <section className="py-12 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Grid Decorativo */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
             <div className="w-16 h-16 rounded-full bg-[#D5E9F1] border border-[#175294]/30 flex items-center justify-center shadow-md">
                <span className="text-[#175294] font-serif italic text-2xl">&</span>
             </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="aspect-[3/4] rounded-t-full overflow-hidden bg-white p-1 md:p-2 border border-[#308FBB]/20 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070" 
              alt="Momento Ceremonia" 
              className="w-full h-full object-cover object-center rounded-t-full transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-[3/4] rounded-b-full overflow-hidden bg-white p-1 md:p-2 border border-[#308FBB]/20 mt-16 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069" 
              alt="Momento Recepción" 
              className="w-full h-full object-cover object-center rounded-b-full transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Mapeo de Eventos */}
        <div className="space-y-32">
          {events.map((event, index) => {
            const [timeValue, ampmValue] = (event.timeString || '').split(' ');

            return (
              <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="text-center space-y-8 relative z-10"
              >
                <div className="space-y-2">
                  <span className="text-[#308FBB] uppercase tracking-[0.6em] text-[10px] block font-bold">
                    {event.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#175294] italic">
                    {event.title}
                  </h2>
                </div>
                
                <div className="space-y-6 max-w-lg mx-auto flex flex-col items-center">
                  <div className="space-y-2">
                    <p className="text-[#1D2849] font-sans font-bold text-lg md:text-xl uppercase tracking-widest leading-tight">
                       {event.name}
                    </p>
                    <p className="text-[#308FBB] font-sans text-sm md:text-base italic leading-relaxed">
                       {event.address}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center py-4">
                     <div className="w-12 h-[1px] bg-[#308FBB]/30 mb-4" />
                     <span className="text-[#175294] font-serif text-4xl tracking-widest">
                       {timeValue}
                     </span>
                     {ampmValue && (
                       <span className="text-[#308FBB] text-xs uppercase tracking-[0.4em] mt-2 block font-bold">
                         {ampmValue}
                       </span>
                     )}
                  </div>

                  {event.mapUrl && event.mapUrl !== '#' && (
                    <div className="pt-2 w-full flex flex-col items-center gap-4">
                      <a 
                        href={event.mapUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 border border-[#175294] text-[#175294] bg-transparent text-[10px] uppercase tracking-[0.2em] hover:bg-[#175294] hover:text-white transition-all duration-300 rounded-full w-full md:w-auto"
                      >
                        <MapIcon />
                        Ver ubicación
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
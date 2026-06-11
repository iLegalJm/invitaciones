import React from 'react';
import { motion } from 'framer-motion';

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {/* strokeWidth reducido a 1 para iconografía ultradelgada */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ReligiousCeremony = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Grid de Imágenes de Referencia */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
             <div className="w-16 h-16 rounded-full bg-[#FAF3E0] border border-wedding-primary/30 flex items-center justify-center">
                <span className="text-wedding-primary font-serif italic text-2xl">&</span>
             </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            // Eliminado shadow-xl, añadido un borde fino y padding blanco (Passepartout)
            className="aspect-[3/4] rounded-t-full overflow-hidden bg-white p-1 md:p-2 border border-wedding-secondary/20 relative"
          >
            <img 
              src="/assets/images/web11.jpg" 
              alt="Momentos" 
              className="w-full h-full object-cover object-center rounded-t-full transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-[3/4] rounded-b-full overflow-hidden bg-white p-1 md:p-2 border border-wedding-secondary/20 mt-16 relative"
          >
            <img 
              src="/assets/images/web9.jpg" 
              alt="Detalles" 
              className="w-full h-full object-cover object-center rounded-b-full transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Contenido de la Ceremonia */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center space-y-8 relative z-10"
        >
          <div className="space-y-2">
            <span className="text-wedding-secondary uppercase tracking-[0.6em] text-[10px] block font-bold">
              Nuestra Unión
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-wedding-primary italic">
              Ceremonia Religiosa
            </h2>
          </div>
          
          {/* Eliminado shadow-xl, diseño plano y limpio */}
          <div className="space-y-6 max-w-lg mx-auto p-8 md:p-10 rounded-3xl bg-white/80 border border-wedding-secondary/20 relative flex flex-col items-center">
            <p className="text-wedding-dark font-sans font-bold text-lg md:text-xl uppercase tracking-widest leading-tight">
               {data.name || "PARROQUIA SAN ANTONIO DE PADUA"}
            </p>
            <p className="text-wedding-secondary font-sans text-sm md:text-base italic leading-relaxed">
               {data.address || "Av. San Felipe 571, Jesús María - Lima"}
            </p>
            
            <div className="flex flex-col items-center pt-2">
               <div className="w-12 h-[1px] bg-wedding-secondary/30 mb-4" />
               <span className="text-wedding-primary font-serif text-4xl tracking-widest">
                 11:30
               </span>
               <span className="text-wedding-secondary text-xs uppercase tracking-[0.4em] mt-2 block font-bold">
                 A.M.
               </span>
            </div>

            <div className="pt-6 w-full">
              {/* Botón Minimalista (Ghost Button) */}
              <a 
                href={data.googleMaps || "https://maps.app.goo.gl/ejemplo"} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-wedding-primary text-wedding-primary bg-transparent text-[10px] uppercase tracking-[0.2em] hover:bg-wedding-primary hover:text-white transition-all duration-300 rounded-full w-full md:w-auto"
              >
                <MapIcon />
                Ver ubicación
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReligiousCeremony;
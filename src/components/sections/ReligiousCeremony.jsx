import React from 'react';
import { motion } from 'framer-motion';

const ReligiousCeremony = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-wedding-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Grid de Imágenes de Referencia (Estilo Editorial) */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
             <div className="w-16 h-16 rounded-full bg-wedding-cream/80 backdrop-blur-sm border border-wedding-primary flex items-center justify-center">
                <span className="text-wedding-primary font-serif italic text-2xl">&</span>
             </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="aspect-[3/4] rounded-t-full overflow-hidden border border-wedding-primary/20 shadow-2xl relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop" 
              alt="Momentos" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-wedding-primary/10 mix-blend-multiply" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-[3/4] rounded-b-full overflow-hidden border border-wedding-primary/20 shadow-2xl mt-16 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" 
              alt="Detalles" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-wedding-primary/10 mix-blend-multiply" />
          </motion.div>
        </div>

        {/* Contenido de la Ceremonia */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center space-y-8 relative z-10"
        >
          <div className="space-y-2">
            <span className="text-wedding-primary/40 uppercase tracking-[0.6em] text-[10px] block">Nuestra Unión</span>
            <h2 className="text-4xl md:text-5xl font-serif text-wedding-primary italic">
              Ceremonia Religiosa
            </h2>
          </div>
          
          <div className="space-y-6 max-w-lg mx-auto p-8 rounded-3xl border border-wedding-primary/10 bg-white/30 backdrop-blur-sm shadow-inner">
            <p className="text-wedding-accent font-sans font-bold text-xl uppercase tracking-widest leading-tight">
               {data.name}
            </p>
            <p className="text-wedding-accent/70 font-sans text-sm md:text-base italic leading-relaxed">
               {data.address}
            </p>
            
            <div className="flex flex-col items-center pt-4">
               <div className="w-12 h-[1px] bg-wedding-primary/20 mb-6" />
               <span className="text-wedding-primary font-serif text-4xl tracking-widest">
                 11:30
               </span>
               <span className="text-wedding-primary/60 text-xs uppercase tracking-[0.4em] mt-2 block">A.M.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReligiousCeremony;

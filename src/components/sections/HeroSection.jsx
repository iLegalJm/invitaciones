import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = ({ data }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Imagen de Fondo a Pantalla Completa con Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519741344270-dcc2a20f1912?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-wedding-primary/20 to-[#E2CBD8]" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-white/90 uppercase tracking-[0.6em] text-xs md:text-sm font-sans drop-shadow-md"
        >
          ¡Nos Casamos!
        </motion.span>
        
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-white font-serif text-6xl md:text-9xl leading-none drop-shadow-2xl"
          >
            {data.bride.name} <br className="md:hidden" />
            <span className="text-4xl md:text-6xl italic inline-block mx-4 font-light opacity-80">&</span> <br className="md:hidden" />
            {data.groom.name}
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mb-8 overflow-hidden"
        >
          {data.quote && (
            <>
              <motion.p 
                className="text-white/90 font-serif italic text-xl md:text-2xl max-w-lg mx-auto leading-relaxed"
              >
                "{data.quote.text}"
              </motion.p>
              <motion.span 
                 className="text-white/60 text-[10px] uppercase tracking-[0.3em] mt-6 block"
              >
                — {data.quote.verse}
              </motion.span>
            </>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/40" />
          <div className="space-y-1">
            <p className="text-white font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase">08 de Agosto</p>
            <div className="flex items-center justify-center gap-4 text-white/60">
              <span className="h-[1px] w-8 bg-current"></span>
              <p className="font-serif text-xl tracking-[0.5em]">2026</p>
              <span className="h-[1px] w-8 bg-current"></span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Indicador de scroll sutil */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 hover:opacity-100 transition-opacity"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
};

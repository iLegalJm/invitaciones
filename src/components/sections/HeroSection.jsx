import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = ({ data }) => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-12 pb-20">
      {/* Imagen de Fondo con Ajuste de Enfoque Quirúrgico */}
      <div
        className="absolute inset-0 bg-cover transition-transform duration-[10s] scale-105"
        style={{
          // Corrección del formato de ruta para producción
          backgroundImage: `url('/assets/images/DSC_0295.webp')`,
          // Ajuste fino: Desplazamos el punto de anclaje un 10% a la IZQUIERDA (40%) 
          // para centralizar a las personas, manteniendo la vertical al centro.
          backgroundPosition: '40% center',
        }}
      />

      {/* Capa 1: Filtro oscuro sutil para que el texto resalte */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Capa 2: Gradiente limpio inferior hacia crema para fundirse con la web */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#FAF3E0] via-[#FAF3E0]/60 to-transparent" />

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 my-auto">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-white/90 uppercase tracking-[0.6em] text-xs md:text-sm font-sans drop-shadow-md"
        >
          ¡Nos Casamos!
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          // Cambiamos font-serif por font-script
          className="text-white font-script text-6xl md:text-8xl leading-none drop-shadow-2xl"
        >
          {data.bride.name} <br className="md:hidden" />
          {/* Hacemos el ampersand un poco más pequeño para que no compita con la cursiva */}
          <span className="text-4xl md:text-5xl font-sans font-light opacity-80 block my-2">&</span>
          {data.groom.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mb-8 overflow-hidden"
        >
          {data.quote && (
            <>
              <motion.p
                className="text-white/95 font-serif italic text-xl md:text-2xl max-w-lg mx-auto leading-relaxed drop-shadow-md"
              >
                "{data.quote.text}"
              </motion.p>
              <motion.span
                className="text-white/80 text-[10px] uppercase tracking-[0.3em] mt-6 block drop-shadow-md"
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
          className="flex flex-col items-center gap-4 mt-12"
        >
          {/* Ajuste de color para la sección de la fecha */}
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-wedding-primary/40" />
          <div className="space-y-1">
            <p className="text-wedding-primary font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase">08 de Agosto</p>
            <div className="flex items-center justify-center gap-4 text-wedding-secondary">
              <span className="h-[1px] w-8 bg-current"></span>
              <p className="font-serif text-xl tracking-[0.5em]">2026</p>
              <span className="h-[1px] w-8 bg-current"></span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll (Actualizado para contrastar con el fondo crema) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-60 hover:opacity-100 transition-opacity z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-wedding-primary to-transparent" />
      </motion.div>
    </section>
  );
};
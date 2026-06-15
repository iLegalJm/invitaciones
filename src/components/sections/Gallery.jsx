import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ images }) => {
  const [lightbox, setLightbox] = useState(null);

  // La primera imagen es el banner horizontal, las siguientes 4 van en el grid
  const heroImage    = images[0];
  const displayImages = images.slice(1, 5);

  if (!heroImage || displayImages.length < 4) {
    return (
      <div className="text-center py-10 text-wedding-secondary text-sm">
        * Se requieren 5 imágenes en la configuración para mostrar esta galería.
      </div>
    );
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden : { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const allImages = [heroImage, ...displayImages];

  return (
    <section className="py-12 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">

        {/* ── Encabezado ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-wedding-secondary mb-2 leading-none">
            Nuestra Historia
          </p>
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-11 h-px bg-wedding-primary/30" />
            <span className="text-wedding-gold text-[11px] tracking-[0.2em]">✦ ✦ ✦</span>
            <div className="w-11 h-px bg-wedding-primary/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-[0.14em] text-wedding-primary">
            Momentos Inolvidables
          </h2>
        </motion.div>

        {/* ── Banner horizontal (foto portada) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-full aspect-[16/9] md:aspect-[16/7] overflow-hidden bg-wedding-cream mb-2 md:mb-4 cursor-pointer"
          onClick={() => setLightbox(0)}
        >
          <img
            src={heroImage.url}
            alt="Momento principal"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </motion.div>

        {/* ── Grid 2x2 ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-2 md:gap-4"
        >
          {/* Columna Izquierda */}
          <div className="flex flex-col gap-2 md:gap-4">
            <motion.div
              variants={itemVariants}
              className="w-full aspect-[3/4] overflow-hidden bg-wedding-cream cursor-pointer"
              onClick={() => setLightbox(1)}
            >
              <img
                src={displayImages[0].url}
                alt="Momento 1"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full aspect-[4/3] overflow-hidden bg-wedding-cream cursor-pointer"
              onClick={() => setLightbox(2)}
            >
              <img
                src={displayImages[1].url}
                alt="Momento 2"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Columna Derecha */}
          <div className="flex flex-col gap-2 md:gap-4">
            <motion.div
              variants={itemVariants}
              className="w-full aspect-[4/3] overflow-hidden bg-wedding-cream cursor-pointer"
              onClick={() => setLightbox(3)}
            >
              <img
                src={displayImages[2].url}
                alt="Momento 3"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full aspect-[3/4] overflow-hidden bg-wedding-cream cursor-pointer"
              onClick={() => setLightbox(4)}
            >
              <img
                src={displayImages[3].url}
                alt="Momento 4"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
            style={{ background: 'rgba(20,8,4,0.92)' }}
            onClick={() => setLightbox(null)}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full text-wedding-cream/80 hover:text-wedding-cream transition-colors"
              style={{ border: '1px solid rgba(250,243,224,0.25)' }}
              aria-label="Cerrar"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Flecha anterior */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + allImages.length) % allImages.length); }}
              className="absolute left-3 md:left-6 w-10 h-10 flex items-center justify-center rounded-full text-wedding-cream/70 hover:text-wedding-cream transition-colors"
              aria-label="Anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Imagen */}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              src={allImages[lightbox].url}
              alt={`Momento ${lightbox + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
            />

            {/* Flecha siguiente */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % allImages.length); }}
              className="absolute right-3 md:right-6 w-10 h-10 flex items-center justify-center rounded-full text-wedding-cream/70 hover:text-wedding-cream transition-colors"
              aria-label="Siguiente"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Contador */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-wedding-cream/60 text-xs font-sans tracking-[0.2em]">
              {lightbox + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
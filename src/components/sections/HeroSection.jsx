import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const HeroSection = ({ data }) => {
  const photoRef = useRef(null);

  // Ken Burns suave — zoom lento desde el mount[cite: 10]
  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    el.style.transition = 'transform 18s ease-out';
    requestAnimationFrame(() => { el.style.transform = 'scale(1.12)'; });
  }, []);

  // Variantes de entrada en cascada[cite: 10]
  const fadeUp = (delay = 0, y = 28) => ({
    initial   : { opacity: 0, y },
    animate   : { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const revealMask = (delay = 0) => ({
    initial   : { clipPath: 'inset(0 100% 0 0)' },
    animate   : { clipPath: 'inset(0 0% 0 0)' },
    transition: { duration: 1.1, delay, ease: [0.77, 0, 0.18, 1] },
  });

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* ── Foto de fondo con Ken Burns ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={photoRef}
          className="absolute inset-0 bg-cover scale-100"
          style={{
            backgroundImage   : `url('${data?.heroImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070'}')`,
            backgroundPosition: 'center',
            willChange        : 'transform',
          }}
        />
      </div>

      {/* Capas y gradientes base[cite: 10] */}
      <div className="absolute inset-0 bg-[#1D2849]/50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 38%, rgba(116,176,211,0.18) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#D5E9F1] via-[#D5E9F1]/55 to-transparent" />

      {/* ── Contenido ── */}
      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center gap-6">

        {/* Monograma Superior */}
        <motion.div {...fadeUp(0.3, -20)} className="w-28 h-28 md:w-32 md:h-32 mb-2">
          <img 
            src="./assets/images/monograma.png" 
            alt="Monograma" 
            className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* ¡Nos Casamos![cite: 10] */}
        <motion.span
          {...fadeUp(0.5, -16)}
          className="text-white/90 font-sans font-semibold uppercase tracking-[0.55em] text-[10px] drop-shadow-md"
        >
          ¡Nos Casamos!
        </motion.span>

        {/* Nombre novia[cite: 10] */}
        <motion.h1
          {...fadeUp(0.75)}
          className="font-script text-white leading-none drop-shadow-[0_3px_6px_rgba(0,0,0,0.55)]"
          style={{ fontSize: 'clamp(3rem, 14vw, 5.5rem)' }}
        >
          {data?.bride?.name}
        </motion.h1>

        {/* &[cite: 10] */}
        <motion.div {...fadeUp(1.1, 0)} className="flex flex-col items-center gap-1">
          <div className="w-px h-5 bg-white/25" />
          <span
            className="font-script leading-none drop-shadow-md"
            style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', color: '#74B0D3', filter: 'drop-shadow(0 2px 6px rgba(116,176,211,0.4))' }}
          >
            &amp;
          </span>
          <div className="w-px h-5 bg-white/25" />
        </motion.div>

        {/* Nombre novio[cite: 10] */}
        <motion.h1
          {...fadeUp(1.3)}
          className="font-script text-white leading-none drop-shadow-[0_3px_6px_rgba(0,0,0,0.55)]"
          style={{ fontSize: 'clamp(3rem, 14vw, 5.5rem)' }}
        >
          {data?.groom?.name}
        </motion.h1>

        {/* Separador ornamental[cite: 10] */}
        <motion.div {...revealMask(1.7)} className="flex items-center gap-3 w-56 mt-2">
          <div className="flex-1 h-px bg-white/30" />
          <span style={{ color: '#74B0D3', fontSize: 9, letterSpacing: '0.35em' }}>✦ ✦ ✦</span>
          <div className="flex-1 h-px bg-white/30" />
        </motion.div>

        {/* Cita Dinámica[cite: 10] */}
        {data?.quote && (
          <motion.p
            {...fadeUp(2.0)}
            className="font-serif italic text-white/90 leading-relaxed max-w-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
            style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.2rem)' }}
          >
            &ldquo;{data.quote.text}&rdquo;
          </motion.p>
        )}

        {/* Fecha Dinámica[cite: 10] */}
        <motion.div {...fadeUp(2.5)} className="flex flex-col items-center gap-1 mt-4">
          <p
            className="font-serif text-white font-medium drop-shadow-md uppercase"
            style={{ fontSize: 'clamp(1.6rem, 6vw, 2.2rem)', letterSpacing: '0.38em' }}
          >
            {data?.date?.dayMonth || '22 · Agosto'}
          </p>
          <p
            className="font-serif text-white/75 font-light drop-shadow-md"
            style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', letterSpacing: '0.75em' }}
          >
            {data?.date?.year ? data.date.year.toString().split('').join(' ') : '2 0 2 6'}
          </p>
        </motion.div>

        {/* Línea ornamental inferior[cite: 10] */}
        <motion.div {...revealMask(2.9)} className="flex items-center gap-3 w-48 mt-2">
          <div className="flex-1 h-px bg-white/30" />
          <span style={{ color: '#74B0D3', fontSize: 10 }}>✦</span>
          <div className="flex-1 h-px bg-white/30" />
        </motion.div>

      </div>

      {/* ── Scroll indicator: rombo animado[cite: 10] ── */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
      >
        <motion.div
          className="w-px bg-gradient-to-b from-transparent via-white/60 to-white/20"
          animate={{ height: [20, 36, 20], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        <motion.div
          style={{ width: 7, height: 7, background: '#74B0D3', transform: 'rotate(45deg)', boxShadow: '0 0 6px rgba(116,176,211,0.6)' }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>

    </section>
  );
};
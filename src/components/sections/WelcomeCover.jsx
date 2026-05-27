import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente WelcomeCover: Refactorización Premium basada en imagen de referencia.
 * Elimina bloques de esquinas invasivos y perfecciona el sello de lacre.
 */
export const WelcomeCover = ({ eventData, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleStart = () => {
    setIsOpening(true);
    // Tiempo exacto para sincronizar la desaparición con el inicio del audio
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  // Sub-componente del Sello de Lacre Detallado
  const WaxSeal = () => (
    <div className="relative cursor-pointer">
      {/* Aura de brillo animada */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-20px] bg-wedding-gold/20 rounded-full blur-2xl"
      />
      
      <div className="relative w-24 h-24 filter drop-shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-wedding-gold drop-shadow-sm">
          {/* Forma orgánica e irregular del lacre */}
          <path d="M50 4C35 4 22 10 14 22C6 34 2 50 8 68C14 86 32 96 50 96C68 96 86 86 92 68C98 50 94 34 86 22C78 10 65 4 50 4Z" className="opacity-95" />
          <path d="M52 7C40 6 28 12 20 25C12 38 9 55 15 72C21 89 40 98 58 97C76 96 88 84 93 65C98 46 91 30 81 18C71 6 64 8 52 7Z" className="brightness-110" />
          
          {/* Iniciales grabadas en el centro con efecto hundido */}
          <text x="50%" y="62%" textAnchor="middle" className="fill-wedding-accent/20 font-serif italic text-4xl select-none mix-blend-multiply">
            {eventData.groom.name[0]}
          </text>
          <text x="52%" y="60%" textAnchor="middle" className="fill-wedding-gold/80 font-serif italic text-4xl select-none">
            {eventData.groom.name[0]}
          </text>
          
          {/* Brillo especular táctil */}
          <ellipse cx="35" cy="30" rx="15" ry="10" className="fill-white/30 blur-[6px]" />
        </svg>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: "easeOut" } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-wedding-cream overflow-hidden"
        >
          {/* Textura de Papel Lino Ultra-Sutil */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/linen-paper.png')]" />
          
          {/* ADORNOS DE ESQUINAS MINIMALISTAS (Sin bloques blancos) */}
          <div className="absolute inset-8 pointer-events-none border-[1px] border-wedding-gold/10 pointer-events-none">
            {/* Esquina Superior Izquierda */}
            <div className="absolute -top-1 -left-1 w-16 h-16 border-t-2 border-l-2 border-wedding-gold" />
            <div className="absolute -top-1 -left-1 w-4 h-4 bg-wedding-gold" />
            
            {/* Esquina Superior Derecha */}
            <div className="absolute -top-1 -right-1 w-16 h-16 border-t-2 border-r-2 border-wedding-gold" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-wedding-gold" />
            
            {/* Esquina Inferior Izquierda */}
            <div className="absolute -bottom-1 -left-1 w-16 h-16 border-b-2 border-l-2 border-wedding-gold" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-wedding-gold" />
            
            {/* Esquina Inferior Derecha */}
            <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-2 border-r-2 border-wedding-gold" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-wedding-gold" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm">
            {/* Monograma JM */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-10"
            >
              <div className="relative w-28 h-28 border-[1.5px] border-wedding-gold/30 rounded-full flex items-center justify-center p-2">
                <div className="w-full h-full border-[1.5px] border-wedding-gold rounded-full flex items-center justify-center">
                  <span className="text-wedding-gold font-serif text-5xl mt-2 tracking-tighter">
                    {eventData.groom.name[0]}{eventData.bride.name[0]}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="uppercase tracking-[0.5em] text-[11px] text-wedding-gold font-bold mb-6 block">
                Nuestra Boda
              </span>
              
              <h1 className="text-5xl font-serif text-wedding-accent mb-16 leading-tight">
                {eventData.groom.name} <br/> 
                <span className="text-3xl font-serif italic opacity-40">&</span> <br/> 
                {eventData.bride.name}
              </h1>

              <motion.button
                onClick={handleStart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center gap-8"
              >
                <WaxSeal />
                
                <div className="flex flex-col items-center space-y-2">
                  <span className="uppercase tracking-[0.4em] text-[12px] text-wedding-gold font-bold transition-all duration-300 group-hover:text-wedding-accent">
                    Abrir Invitación
                  </span>
                  <div className="w-12 h-[1px] bg-wedding-gold/40 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Viñeta de sombra para profundidad de papel */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.04)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

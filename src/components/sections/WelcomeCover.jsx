import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente WelcomeCover: Refactorización "Alta Costura"
 * Implementa textura de papel de lino, ajustes tipográficos precisos y jerarquía visual mejorada.
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

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.8, ease: "easeOut" } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-wedding-cream overflow-hidden"
          style={{ backgroundColor: '#FAF3E0' }}
        >
          {/* Capa de Textura de Papel de Lino */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '150px 150px'
            }}
          />
          
          {/* MARCOS ELEGANTES (Líneas finas Borgoña) */}
          <div className="absolute inset-6 md:inset-10 pointer-events-none border-[0.5px] border-wedding-primary/20">
            {/* Esquina Superior Izquierda */}
            <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-[1px] border-l-[1px] border-wedding-primary" />
            
            {/* Esquina Superior Derecha */}
            <div className="absolute -top-[1px] -right-[1px] w-12 h-12 border-t-[1px] border-r-[1px] border-wedding-primary" />
            
            {/* Esquina Inferior Izquierda */}
            <div className="absolute -bottom-[1px] -left-[1px] w-12 h-12 border-b-[1px] border-l-[1px] border-wedding-primary" />
            
            {/* Esquina Inferior Derecha */}
            <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-[1px] border-r-[1px] border-wedding-primary" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
            {/* Monogram Circle Fine Line */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mb-8"
            >
              <div className="w-20 h-20 border-[0.5px] border-wedding-primary/40 rounded-full flex items-center justify-center p-1">
                <div className="w-full h-full border-[0.5px] border-wedding-primary rounded-full flex items-center justify-center">
                  <span className="text-wedding-primary font-parisienne text-4xl tracking-tighter">XC</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col items-center"
            >
              <span className="uppercase tracking-[0.6em] text-[10px] text-wedding-primary/70 font-semibold mb-8">
                Nuestra Boda
              </span>
              
              {/* Bloque Tipográfico Unido */}
              <h1 className="flex flex-col items-center">
                <span className="text-6xl md:text-7xl font-parisienne text-wedding-primary leading-tight">
                  Xiomy-lu
                </span>
                <span className="text-3xl font-serif italic text-wedding-primary/30 my-2">&</span>
                <span className="text-6xl md:text-7xl font-parisienne text-wedding-primary leading-tight">
                  Carlos
                </span>
              </h1>

              {/* Sello de Lacre Proporcional */}
              <motion.div
                onClick={handleStart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="my-14 cursor-pointer relative group"
              >
                {/* Aura sutil */}
                <div className="absolute inset-0 bg-wedding-primary/5 blur-3xl rounded-full scale-150 group-hover:bg-wedding-primary/10 transition-colors" />
                
                <img 
                  src="/assets/images/sello.png" 
                  alt="Sello de apertura" 
                  className="w-32 h-32 object-contain drop-shadow-2xl relative z-10"
                />
              </motion.div>
                
              <div className="flex flex-col items-center space-y-3">
                <span className="uppercase tracking-[0.5em] text-[11px] text-wedding-primary font-bold">
                  Abrir Invitación
                </span>
                <div className="w-16 h-[0.5px] bg-wedding-primary/40" />
              </div>
            </motion.div>
          </div>

          {/* Viñeta de sombra para profundidad de papel */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.03)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 text-center space-y-8 bg-transparent flex flex-col items-center overflow-hidden">

      {/* Imagen final de la pareja sin fondo */}
      <img
        src="/assets/images/1.png"
        alt="Xiomy-lu y Carlos"
        className="w-64 md:w-80 mx-auto mb-4 drop-shadow-xl pointer-events-none"
      />

      <div className="flex flex-col items-center justify-center space-y-6 z-10">
        <div className="w-16 h-[1px] bg-wedding-primary/30"></div>

        <p className="font-serif italic text-2xl md:text-4xl text-wedding-primary px-6 max-w-lg leading-relaxed">
          ¡Gracias por acompañarnos en este día tan especial!
        </p>

        <div className="w-16 h-[1px] bg-wedding-primary/30"></div>
      </div>

      <p className="text-[10px] uppercase tracking-[0.4em] text-wedding-secondary font-bold font-sans mt-8">
        Xiomy-lu & Carlos
      </p>
      <p className="text-[8px] uppercase tracking-[0.2em] text-wedding-dark/40 font-sans mt-2">
        08 de Agosto | 2026
      </p>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 text-center space-y-8 bg-transparent">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Decorative Line */}
        <div className="w-16 h-[1px] bg-wedding-primary/30"></div>
        
        <p className="font-script text-4xl md:text-5xl text-wedding-primary">
          ¡Gracias por acompañarnos en este día tan especial!
        </p>
        
        <div className="w-16 h-[1px] bg-wedding-primary/30"></div>
      </div>
      
      <p className="text-[10px] uppercase tracking-[0.4em] text-wedding-primary/50 font-sans">
        Carlos & Xiomy-lu
      </p>
    </footer>
  );
};

export default Footer;


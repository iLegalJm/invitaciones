import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ eventData }) => {
  return (
    <footer className="py-16 px-6 bg-transparent text-center">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-white/40 backdrop-blur-sm border border-wedding-secondary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-tr-[3rem] rounded-bl-[3rem] space-y-6"
        >
          <p className="text-wedding-secondary uppercase tracking-[0.6em] text-[10px] font-bold">
            Con todo nuestro amor
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-wedding-primary italic leading-tight">
            {eventData?.bride?.name || 'Sheyla'} & {eventData?.groom?.name || 'Iván'}
          </h2>

          <div className="w-12 h-px bg-wedding-secondary/30 mx-auto" />

          <p className="text-wedding-secondary/70 font-sans text-[10px] uppercase tracking-widest pt-1">
            Hecho con ❤️ en {eventData?.date?.year || '2026'}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
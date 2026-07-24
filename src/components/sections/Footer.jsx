import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ eventData }) => {
  return (
    <footer className="py-8 px-6 bg-transparent text-center border-t border-[#308FBB]/20 mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto space-y-4"
      >
        <p className="text-[#308FBB] uppercase tracking-[0.6em] text-[10px] font-bold">
          Te Esperamos
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-[#175294] italic leading-tight">
          {eventData?.bride?.name || 'Sheyla'} & {eventData?.groom?.name || 'Iván'}
        </h2>

        <p className="text-[#1D2849]/60 font-sans text-[10px] uppercase tracking-widest pt-3">
          Hecho con ❤️ en {eventData?.date?.year || '2026'}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
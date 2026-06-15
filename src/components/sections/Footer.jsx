import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ eventData }) => {
  return (
    <footer className="py-6 px-6 bg-transparent text-center border-t border-wedding-secondary/10 mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto space-y-4"
      >
        <p className="text-wedding-secondary uppercase tracking-[0.6em] text-[10px] font-bold">
          Te Esperamos
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-wedding-primary italic leading-tight">
          {eventData.bride.name} & {eventData.groom.name}
        </h2>

        <p className="text-wedding-dark/60 font-sans text-[10px] uppercase tracking-widest pt-3">
          Hecho con ❤️ en {eventData.date.year}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
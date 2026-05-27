import React from 'react';
import { motion } from 'framer-motion';

/**
 * Wrapper premium para animaciones de entrada elegantes al hacer scroll.
 */
export const RevealOnScroll = ({ children, delay = 0, y = 30 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Cubic-bezier premium
      }}
    >
      {children}
    </motion.div>
  );
};

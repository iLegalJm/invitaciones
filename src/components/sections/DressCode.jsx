import React from 'react';
import { motion } from 'framer-motion';

const DressCode = ({ data }) => {
  const paletteColors = ['#A87B96', '#C49CB4', '#E2CBD8', '#F3E8EE']; // Variaciones de Mauve

  return (
    <section className="py-20 px-6 bg-wedding-cream/30 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-wedding-primary mb-16 uppercase tracking-widest"
        >
          Código de VESTIMENTA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formal Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex justify-center gap-12">
              {/* Icon Suit */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center bg-wedding-primary/5 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-wedding-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2L12 4L18 2V7L12 12L6 7V2ZM12 13L18 9V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V9L12 13Z" />
                    <circle cx="12" cy="15" r="1" fill="white" />
                    <circle cx="12" cy="18" r="1" fill="white" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-wedding-accent">Hombres</p>
                <p className="text-sm font-sans text-wedding-accent/70">{data.men}</p>
              </div>

              {/* Icon Gown */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center bg-wedding-primary/5 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-wedding-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C10.9 2 10 2.9 10 4V5.1C7.7 5.6 6 7.6 6 10V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V10C18 7.6 16.3 5.6 14 5.1V4C14 2.9 13.1 2 12 2ZM12 7C13.7 7 15 8.3 15 10V11H9V10C9 8.3 10.3 7 12 7Z" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-wedding-accent">Mujeres</p>
                <p className="text-sm font-sans text-wedding-accent/70">{data.women}</p>
              </div>
            </div>
            <p className="text-wedding-primary font-serif italic text-2xl tracking-widest">FORMAL</p>
          </motion.div>

          {/* Palette Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex justify-center -space-x-4">
              {paletteColors.map((color, i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm" 
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="text-xs md:text-sm text-wedding-accent/70 font-sans max-w-xs mx-auto leading-relaxed">
              Sugerimos elegir atuendos fuera de nuestra paleta de colores principal.
            </p>
          </motion.div>
        </div>

        {/* Solo Adultos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 space-y-4"
        >
          <h3 className="text-4xl md:text-5xl font-serif italic text-wedding-primary/60">
            Solo Adultos
          </h3>
          <p className="text-wedding-accent/80 font-sans text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Por la intimidad de nuestra celebración y el carácter del evento, hemos decidido que la recepción sea exclusivamente para personas mayores de edad. Agradecemos su comprensión.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;

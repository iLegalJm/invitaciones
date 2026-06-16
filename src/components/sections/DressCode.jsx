import React from 'react';
import { motion } from 'framer-motion';

const DressCode = ({ data }) => {
  const paletteColors = ['#5E1929', '#8F5260', '#F8F0E5', '#DCAEBA'];

  // Colores claros que se confunden con el fondo crema → les damos borde visible
  const LIGHT_COLORS = new Set(['#F8F0E5', '#f8f0e5']);
  const getBorder = (color) =>
    LIGHT_COLORS.has(color)
      ? '2px solid rgba(94,25,41,0.28)'
      : '2px solid transparent';

  return (
    <section className="py-12 px-6 bg-transparent text-center">
      <div className="max-w-4xl mx-auto">

        {/* ── Encabezado ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <p className="font-script text-3xl text-wedding-secondary mb-2 leading-none">
            Código de Vestimenta
          </p>
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-11 h-px bg-wedding-primary/30" />
            <span className="text-wedding-gold text-[11px] tracking-[0.2em]">✦ ✦ ✦</span>
            <div className="w-11 h-px bg-wedding-primary/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-[0.14em] text-wedding-primary">
            Etiqueta
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">

          {/* ── Columna Formal ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="flex justify-center gap-2">

              {/* Traje */}
              <div className="flex flex-col items-center group">
                <div className="w-40 h-40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="./assets/images/icon/traje.png"
                    alt="Traje formal"
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-wedding-secondary">Hombres</p>
                <p className="text-sm font-sans text-wedding-dark mt-1">{data.men}</p>
              </div>

              {/* Vestido */}
              <div className="flex flex-col items-center group">
                <div className="w-40 h-40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="./assets/images/icon/vestido.png"
                    alt="Vestido formal"
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-wedding-secondary">Mujeres</p>
                <p className="text-sm font-sans text-wedding-dark mt-1">{data.women}</p>
              </div>
            </div>

            <p className="text-wedding-primary font-serif italic text-3xl tracking-widest">FORMAL</p>
          </motion.div>

          {/* ── Columna Paleta ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 flex flex-col items-center justify-center h-full"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-wedding-secondary mb-2">
              Paleta sugerida
            </p>
            <div className="flex justify-center -space-x-2">
              {paletteColors.map((color, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="w-11 h-11 rounded-full relative z-10 hover:z-20 hover:scale-110 transition-transform shadow-sm"
                  style={{ backgroundColor: color, border: getBorder(color) }}
                />
              ))}
            </div>
            <p className="text-xs text-wedding-secondary font-sans max-w-[260px] leading-relaxed italic">
              Sugerimos elegir atuendos fuera de nuestra paleta de colores para las fotografías.
            </p>
          </motion.div>

          {/* ── Columna: Que brille la novia ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 flex flex-col items-center justify-center h-full"
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <div className="w-8 h-px bg-wedding-primary/30" />
              <span className="text-wedding-gold text-[11px]">✦</span>
              <div className="w-8 h-px bg-wedding-primary/30" />
            </div>

            <p className="font-script text-4xl md:text-5xl text-wedding-primary leading-tight">
              Que solo la novia brille
            </p>

            <p className="text-xs md:text-sm text-wedding-secondary font-sans max-w-[280px] leading-relaxed">
              Por favor, evita el <span className="font-bold text-wedding-primary">color blanco</span> en tu atuendo. Reservemos ese color especial para ella en su gran día.
            </p>

            <div className="flex items-center justify-center gap-3 mt-1">
              <div className="w-8 h-px bg-wedding-primary/30" />
              <span className="text-wedding-gold text-[11px]">✦</span>
              <div className="w-8 h-px bg-wedding-primary/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
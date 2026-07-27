import React from 'react';
import { motion } from 'framer-motion';

const DressCode = ({ data }) => {
  const paletteColors = ['#1D2849', '#175294', '#308FBB', '#74B0D3', '#D5E9F1'];

  const LIGHT_COLORS = new Set(['#D5E9F1', '#d5e9f1']);
  const getBorder = (color) =>
    LIGHT_COLORS.has(color)
      ? '2px solid rgba(23,82,148,0.28)'
      : '2px solid transparent';

  // Filtro CSS para convertir íconos al color primario de la boda
  const iconFilter = 'brightness(0) saturate(100%) invert(13%) sepia(21%) saturate(2333%) hue-rotate(188deg) brightness(95%) contrast(92%)';

  return (
    <section className="py-12 px-6 bg-transparent text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 md:p-14 bg-white/40 backdrop-blur-sm border border-wedding-secondary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-tr-[3rem] rounded-bl-[3rem] space-y-12"
        >

          {/* ── Encabezado ── */}
          <div className="space-y-3">
            <span className="text-wedding-secondary uppercase tracking-[0.4em] text-[9px] block font-bold">
              Código de Vestimenta
            </span>
            <div className="flex items-center justify-center gap-3 my-2">
              <div className="w-11 h-px bg-wedding-secondary/30" />
              <span className="text-[#74B0D3] text-[11px]">✦ ✦ ✦</span>
              <div className="w-11 h-px bg-wedding-secondary/30" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-wedding-primary italic">
              Formal
            </h2>
          </div>

          {/* ── Bloque de Atuendos (Hombres / Mujeres) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center max-w-lg mx-auto border-b border-wedding-secondary/20 pb-10">

            {/* Traje */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="./assets/images/icon/traje.png"
                  alt="Traje formal"
                  className="w-full h-full object-contain"
                  style={{ filter: iconFilter, mixBlendMode: 'multiply' }}
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-wedding-secondary">Hombres</p>
              <p className="text-sm font-sans font-semibold text-wedding-primary mt-1">{data?.men || 'Traje'}</p>
            </div>

            {/* Vestido */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="./assets/images/icon/vestido.png"
                  alt="Vestido formal"
                  className="w-full h-full object-contain"
                  style={{ filter: iconFilter, mixBlendMode: 'multiply' }}
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-wedding-secondary">Mujeres</p>
              <p className="text-sm font-sans font-semibold text-wedding-primary mt-1">{data?.women || 'Vestido de gala'}</p>
            </div>

          </div>

          {/* ── Bloque de Paleta Sugerida ── */}
          <div className="space-y-4 max-w-md mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-wedding-secondary">
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
                  className="w-10 h-10 rounded-full relative z-10 hover:z-20 hover:scale-110 transition-transform shadow-sm"
                  style={{ backgroundColor: color, border: getBorder(color) }}
                />
              ))}
            </div>
            <p className="text-xs text-wedding-secondary font-sans italic leading-relaxed">
              Sugerimos elegir atuendos fuera de nuestra paleta de colores para las fotografías.
            </p>
          </div>

          {/* ── Bloque: Que solo la novia brille ── */}
          <div className="pt-6 border-t border-wedding-secondary/20 max-w-md mx-auto space-y-3">
            <h3 className="font-script text-3xl md:text-4xl text-wedding-primary leading-tight">
              Que solo la novia brille
            </h3>
            <p className="text-xs md:text-sm text-wedding-secondary font-sans leading-relaxed">
              Por favor, evita el <span className="font-bold text-wedding-primary">color blanco</span> en tu atuendo. Reservemos ese color especial para ella en su gran día.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GiftSection = ({ giftData }) => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic text-wedding-primary mb-6">
            Mesa de Regalos
          </h2>
          <p className="text-wedding-dark font-sans italic text-lg leading-relaxed max-w-md mx-auto">
            "Celebrar con ustedes es el mejor regalo, pero si desean hacernos un presente, aquí tienen los detalles:"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/80 border border-wedding-secondary/20 rounded-[3rem] p-8 md:p-12 shadow-md relative overflow-visible"
        >
          {/* Adorno sutil en la esquina */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-wedding-secondary/5 rounded-full -mr-16 -mt-16 pointer-events-none" />

          {/* Imagen Flotante (Manos con anillo) */}
          <img
            src="./assets/images/2.png"
            alt="Detalle de manos"
            className="absolute -bottom-16 -left-12 w-40 md:w-56 opacity-90 drop-shadow-lg pointer-events-none z-10"
          />

          <div className="relative z-20">
            <h3 className="text-lg md:text-xl font-serif text-wedding-primary uppercase tracking-[0.2em] mb-10">
              Cuenta Mancomunada<br />Sheyla & Iván
            </h3>

            <div className="space-y-10">
              {giftData.accounts.map((acc, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <div className="text-center">
                    <span className="block text-[10px] uppercase tracking-widest text-wedding-secondary font-bold mb-2">
                      {acc.name}
                    </span>
                    <span className="text-xl md:text-2xl font-sans font-medium text-wedding-dark tracking-widest">
                      {acc.number}
                    </span>
                  </div>

                  <button
                    onClick={() => copyToClipboard(acc.number, index)}
                    className="relative overflow-hidden group px-8 py-2 rounded-full border border-wedding-primary text-wedding-primary text-[10px] uppercase tracking-widest font-bold hover:bg-wedding-primary hover:text-white transition-all duration-300 active:scale-95 bg-white/50 backdrop-blur-sm"
                  >
                    <AnimatePresence mode="wait">
                      {copiedId === index ? (
                        <motion.span
                          key="copied"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                          className="block"
                        >
                          ¡Copiado!
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                          className="block"
                        >
                          Copiar Cuenta
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-wedding-secondary/20">
              <p className="text-sm font-sans text-wedding-secondary font-bold italic tracking-widest uppercase">
                Banco BBVA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
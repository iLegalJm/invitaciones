import React from 'react';
import { motion } from 'framer-motion';

const GuestInteractions = ({ phone }) => {
  const songUrl = `https://wa.me/${phone}?text=${encodeURIComponent('¡Hola! Me gustaría sugerir esta canción para la fiesta: ')}`;
  const wishesUrl = `https://wa.me/${phone}?text=${encodeURIComponent('¡Hola Xiomy-lu y Carlos! Les envío mis mejores deseos: ')}`;

  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Songs Block */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-white/40 backdrop-blur-sm border border-wedding-secondary/10 p-10 rounded-[2.5rem] text-center space-y-6 shadow-sm"
        >
          <div className="w-12 h-12 bg-wedding-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-wedding-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-wedding-primary uppercase tracking-wider">
            Sugerencia DE CANCIONES
          </h3>
          <p className="text-wedding-accent/60 text-sm font-sans italic">
            ¿Qué canción no puede faltar en la fiesta?
          </p>
          <a 
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-wedding-primary text-white text-[10px] uppercase tracking-widest hover:bg-wedding-secondary transition-all rounded-full shadow-md"
          >
            Enviar sugerencia
          </a>
        </motion.div>

        {/* Wishes Block */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-white/40 backdrop-blur-sm border border-wedding-secondary/10 p-10 rounded-[2.5rem] text-center space-y-6 shadow-sm"
        >
          <div className="w-12 h-12 bg-wedding-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-wedding-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-wedding-primary uppercase tracking-wider">
            Buenos DESEOS
          </h3>
          <p className="text-wedding-accent/60 text-sm font-sans italic">
             "Déjanos un mensaje con tus mejores deseos para nosotros."
          </p>
          <a 
            href={wishesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-wedding-primary text-white text-[10px] uppercase tracking-widest hover:bg-wedding-secondary transition-all rounded-full shadow-md"
          >
            Enviar Buenos Deseos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestInteractions;


import React from 'react';
import { motion } from 'framer-motion';

const RSVPAndGallery = ({ rsvpConfig, gallery }) => {
  const whatsappUrl = `https://wa.me/${rsvpConfig.phone}?text=${encodeURIComponent('¡Hola! Confirmo mi asistencia a la boda de Xiomy-lu & Carlos.')}`;

  return (
    <section className="py-24 px-6 bg-wedding-cream/10">
      <div className="max-w-5xl mx-auto">
        {/* RSVP Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-primary mb-6">
            Confirma tu Asistencia
          </h2>
          <p className="text-wedding-accent/70 font-sans mb-10 text-lg">
            Por favor, confirma tu asistencia antes del 1 de julio.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-wedding-primary text-white text-sm uppercase tracking-widest hover:bg-wedding-secondary transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Confirmar por WhatsApp
          </a>
          <div className="mt-12 text-wedding-accent/50 text-xs uppercase tracking-widest space-y-2">
            <p>CUALQUIER CONSULTA O DUDA CON</p>
            <p className="font-bold text-wedding-primary">{rsvpConfig.contactName} (Wedding Planner)</p>
            <p>{rsvpConfig.phone}</p>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-wedding-secondary/20"
        >
          <h3 className="text-3xl font-serif text-wedding-primary text-center mb-16 uppercase tracking-[0.2em]">
            Galería DE FOTOS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-wedding-cream relative overflow-hidden rounded-2xl shadow-md border border-wedding-secondary/10"
              >
                <img 
                  src={`https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&h=600&auto=format&fit=crop`} 
                  alt={`Galería ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPAndGallery;

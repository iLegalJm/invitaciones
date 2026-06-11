import React from 'react';
import { motion } from 'framer-motion';

const RSVPAndGallery = ({ rsvpConfig, gallery }) => {
  const whatsappUrl = `https://wa.me/${rsvpConfig.phone}?text=${encodeURIComponent('¡Hola! Confirmo mi asistencia a la boda de Xiomy-lu & Carlos.')}`;

  // Definición de las imágenes con su configuración de "Mesa de Arte"
  const galleryImages = [
    { 
      src: '/assets/images/DSC_3036.JPG', 
      // Foto 1: Salar Noche. Grande, base.
      layout: 'md:col-span-8 md:col-start-1 aspect-[16/10] z-10', 
      animation: { initial: { opacity: 0, x: -50 } }
    },
    { 
      src: '/assets/images/IMG_5165.heic', 
      // Foto 2: Botella. Vertical, superpuesta ligeramente a la 1.
      layout: 'md:col-span-4 md:col-start-9 aspect-[3/4] md:-ml-20 md:mt-20 z-20', 
      animation: { initial: { opacity: 0, y: 50 }, transition: { delay: 0.2 } }
    },
    { 
      src: '/assets/images/web8.jpg', 
      // Foto 3: Estudio pareja amplia. Horizontal, debajo de la 1, desplazada a la derecha.
      layout: 'md:col-span-6 md:col-start-4 aspect-[4/3] md:-mt-16 z-10', 
      animation: { initial: { opacity: 0, x: 50 }, transition: { delay: 0.4 } }
    },
    { 
      src: '/assets/images/web6.jpg', 
      // Foto 4: Salar atardecer amplia. Cuadrada, "flotando" a la izquierda de la 3.
      layout: 'md:col-span-4 md:col-start-1 aspect-square md:-mt-40 md:ml-10 z-20', 
      animation: { initial: { opacity: 0, scale: 0.8 }, transition: { delay: 0.6 } }
    }
  ];

  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* RSVP Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-primary mb-6">
            Confirma tu Asistencia
          </h2>
          <p className="text-wedding-dark font-sans mb-10 text-lg">
            Por favor, confirma tu asistencia antes del 1 de julio.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-wedding-primary text-white text-sm uppercase tracking-widest hover:bg-wedding-secondary transition-all duration-300 shadow-lg transform hover:-translate-y-1 rounded-full"
          >
            Confirmar por WhatsApp
          </a>
          <div className="mt-12 text-wedding-secondary text-xs uppercase tracking-widest space-y-2">
            <p>CUALQUIER CONSULTA O DUDA CON</p>
            <p className="font-bold text-wedding-primary">{rsvpConfig.contactName} (Wedding Planner)</p>
            <p>{rsvpConfig.phone}</p>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="pt-16 border-t border-wedding-secondary/20 relative"
        >
          <h3 className="text-3xl font-serif text-wedding-primary text-center mb-24 uppercase tracking-[0.2em]">
            Galería de Fotos
          </h3>
          
          {/* Layout Deconstruido (Mesa de Arte) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-start relative pb-20">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={img.animation.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], ...img.animation.transition }}
                whileHover={{ scale: 1.03, zIndex: 50 }}
                className={`bg-white p-2 md:p-3 shadow-xl rounded-[1.5rem] border border-wedding-accent/20 relative ${img.layout}`}
              >
                <div className="overflow-hidden rounded-[1rem] w-full h-full">
                  <img 
                    src={img.src} 
                    alt={`Nuestra boda ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Detalle decorativo sutil de fondo */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-wedding-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPAndGallery;
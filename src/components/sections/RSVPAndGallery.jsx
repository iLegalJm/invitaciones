import React from 'react';
import { motion } from 'framer-motion';

const RSVPAndGallery = ({ rsvpConfig, gallery }) => {
  const whatsappUrl = `https://wa.me/${rsvpConfig.phone}?text=${encodeURIComponent('¡Hola! Confirmo mi asistencia a la boda de Sheyla & Iván.')}`;

  // Definición de las imágenes con su configuración de "Mesa de Arte"
  const galleryImages = [
    {
      src: './assets/images/DSC_3036.JPG',
      // Foto 1: Salar Noche. Grande, base.
      layout: 'md:col-span-8 md:col-start-1 aspect-[16/10] z-10',
      animation: { initial: { opacity: 0, x: -50 } }
    },
    {
      src: './assets/images/IMG_5165.jpg',
      // Foto 2: Botella. Vertical, superpuesta ligeramente a la 1.
      layout: 'md:col-span-4 md:col-start-9 aspect-[3/4] md:-ml-20 md:mt-20 z-20',
      animation: { initial: { opacity: 0, y: 50 }, transition: { delay: 0.2 } }
    },
    {
      src: './assets/images/web8.jpg',
      // Foto 3: Estudio pareja amplia. Horizontal, debajo de la 1, desplazada a la derecha.
      layout: 'md:col-span-6 md:col-start-4 aspect-[4/3] md:-mt-16 z-10',
      animation: { initial: { opacity: 0, x: 50 }, transition: { delay: 0.4 } }
    },
    {
      src: './assets/images/web6.jpg',
      // Foto 4: Salar atardecer amplia. Cuadrada, "flotando" a la izquierda de la 3.
      layout: 'md:col-span-4 md:col-start-1 aspect-square md:-mt-40 md:ml-10 z-20',
      animation: { initial: { opacity: 0, scale: 0.8 }, transition: { delay: 0.6 } }
    }
  ];

  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Galería de Fotos - Versión Editorial Refinada */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-16 relative overflow-hidden"
        >
          <h3 className="text-3xl font-serif text-wedding-primary text-center mb-12 uppercase tracking-[0.2em]">
            Galería de Fotos
          </h3>

          {/* GRID: Mosaico Editorial Refinado */}
          <div className="grid grid-cols-2 gap-[2px] bg-[#D5E9F1]">

            {/* Imagen 1: Protagonista */}
            <div className="col-span-2 aspect-[16/9] overflow-hidden">
              <img
                src="./assets/images/DSC_3036.JPG"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter grayscale-[20%] contrast-[105%]"
              />
            </div>

            {/* Imagen 2 y 3: Simetría */}
            <div className="col-span-1 aspect-[3/4] overflow-hidden">
              <img
                src="./assets/images/web6.jpg"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter grayscale-[20%] contrast-[105%]"
              />
            </div>
            <div className="col-span-1 aspect-[3/4] overflow-hidden">
              <img
                src="./assets/images/web8.jpg"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter grayscale-[20%] contrast-[105%]"
              />
            </div>

            {/* Imagen 4: Cierre */}
            <div className="col-span-2 aspect-[16/9] overflow-hidden">
              <img
                src="./assets/images/IMG_5165.jpg"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter grayscale-[20%] contrast-[105%]"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPAndGallery;
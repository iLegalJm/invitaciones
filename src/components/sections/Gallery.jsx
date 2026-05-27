import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '../common/RevealOnScroll';

export const Gallery = ({ photos = [] }) => {
  return (
    <section className="py-32 px-4 bg-wedding-cream overflow-hidden">
      <RevealOnScroll>
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.4em] text-[10px] text-wedding-gold font-bold mb-4 block">Momentos Especiales</span>
          <h2 className="text-5xl font-serif text-wedding-accent italic">Nuestra Galería</h2>
          <div className="h-[1px] w-16 bg-wedding-gold/30 mx-auto mt-8" />
        </div>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos && photos.length > 0 ? (
          photos.map((photo, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} y={50}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative group rounded-2xl overflow-hidden shadow-2xl bg-wedding-accent"
              >
                <motion.img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
                  loading="lazy"
                  onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&index=${index}` }}
                />
                
                {/* Overlay minimalista */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-serif italic text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {photo.caption}
                  </p>
                </div>
                
                {/* Borde decorativo interno */}
                <div className="absolute inset-4 border border-white/20 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </RevealOnScroll>
          ))
        ) : (
          <div className="text-center col-span-full py-10 opacity-50">No hay fotos en la galería</div>
        )}
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

const IconoEvento = ({ tipo }) => {
  const strokeWidth = 0.8; // Trazo aún más fino
  const className = "w-7 h-7 text-wedding-primary/70"; // Tamaño ligeramente mayor

  const iconos = {
    iglesia: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
        <path d="M12 2L4 8v12h16V8l-8-6z M12 12v8 M9 20h6 M12 2v6" />
      </svg>
    ),
    civil: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
        <circle cx="12" cy="12" r="6" />
        <path d="M12 6V2 M12 22v-4 M6 12H2 M22 12h-4" />
      </svg>
    ),
    brindis: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
        <path d="M18 10L12 3 6 10z M12 10v11 M9 21h6" />
        <path d="M15 6.5L13.5 8" />
      </svg>
    ),
    comida: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
        <path d="M12 2v10m-4-6l8 0 M10 18h4" />
        <path d="M12 20a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4z" />
      </svg>
    )
  };
  return iconos[tipo] || null;
};

const Itinerary = ({ data }) => {
  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <motion.h2 className="text-4xl font-serif text-wedding-primary text-center mb-20 italic">
          Itinerario
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-wedding-primary/30" />

          <div className="space-y-16">
            {data.itinerary.map((item, index) => (
              <motion.div key={index} className="relative flex items-center justify-between w-full">

                {/* Contenido */}
                <div className={`w-5/12 flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start order-2'}`}>

                  {/* Contenedor del texto y el icono */}
                  <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>

                    {/* Texto */}
                    <div>
                      <h4 className="text-wedding-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-1">
                        {item.event}
                      </h4>
                      <p className="text-wedding-secondary font-serif text-lg italic">
                        {item.time}
                      </p>
                    </div>

                    {/* Icono (ahora alineado con el nodo central) */}
                    <div className="p-1 border border-wedding-primary/20 rounded-full">
                      <IconoEvento tipo={item.icono} />
                    </div>

                  </div>
                </div>

                {/* Nodo Central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#FAF3E0] border border-wedding-primary rounded-full z-10" />

                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
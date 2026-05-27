import React from 'react';

export const RSVP = ({ groom, bride, number }) => {
  const handleRSVP = () => {
    const message = encodeURIComponent(`¡Hola! Confirmo mi asistencia para la boda de ${groom} y ${bride}.`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 text-center bg-wedding-gold/5 rounded-lg my-10">
      <h2 className="text-3xl font-serif mb-6">Confirmar Asistencia</h2>
      <p className="mb-8 px-4">Por favor, confírmanos tu asistencia antes de la fecha límite para organizar mejor el evento.</p>
      <button 
        onClick={handleRSVP}
        className="bg-wedding-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-semibold"
      >
        Confirmar por WhatsApp
      </button>
    </section>
  );
};

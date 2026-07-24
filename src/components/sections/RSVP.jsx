import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVP = ({ data }) => {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  // Obtener el teléfono del invitado desde la URL (?id=980501238)
  const params = new URLSearchParams(window.location.search);
  const guestPhone = params.get('id');

  const message = `¡Hola ${data.contactName}! Quiero confirmar mi asistencia a la boda.`;
  const whatsappUrl = `https://wa.me/${data.phone}?text=${encodeURIComponent(message)}`;

  const deadlineDate = new Date(data.deadline + 'T00:00:00');
  const formattedDeadline = deadlineDate.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbxwk6EB-hoVJ8BcmlOyZeSUohk3rw9_3Cy36z5krjWZkMrb7Y-ipPn7Yn0OlGHcuO7wEA/exec';

  const handleConfirm = async (respuesta) => {
    setEnviando(true);

    if (guestPhone) {
      try {
        await fetch(SHEET_API_URL, {
          method: 'POST',
          body: JSON.stringify({ telefono: guestPhone, respuesta }),
          headers: { 'Content-Type': 'text/plain' }
        });
      } catch (err) {
        console.error('Error al registrar en el Sheet:', err);
      }
      setEnviado(true);
    } else {
      // No hay id en la URL: no se puede registrar automáticamente
      setEnviado('sin-id');
    }

    setEnviando(false);

    if (respuesta === 'Asistirá') {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section className="py-12 px-6 bg-[#D5E9F1]/30 border-t border-wedding-secondary/10 text-center">
      <div className="max-w-xl mx-auto space-y-10">

        {/* ── Encabezado ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          <span className="text-wedding-secondary uppercase tracking-[0.6em] text-[10px] block font-bold">
            RSVP
          </span>
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-px bg-wedding-secondary/30" />
            <span className="text-[#74B0D3] text-[11px]">✦</span>
            <div className="w-11 h-px bg-wedding-secondary/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-primary italic">
            ¿Nos acompañas?
          </h2>
          <p className="text-wedding-secondary font-sans text-sm md:text-base leading-relaxed mt-4">
            Esperamos compartir este día tan especial contigo. Por favor, confírmanos tu asistencia antes del <strong>{formattedDeadline}</strong>.
          </p>
        </motion.div>

        {/* ── Noche libre de niños ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="space-y-5 max-w-lg mx-auto pt-2"
        >
          <h3 className="text-3xl md:text-4xl font-script text-wedding-primary leading-tight">
            ¡Noche libre de niños!
          </h3>
          <p className="text-wedding-secondary font-sans text-sm md:text-base leading-relaxed">
            Amamos a sus pequeños, pero esta noche queremos que se relajen, brinden sin culpa y bailen hasta abajo sin preocupaciones. Por eso, nuestra recepción será <strong className="text-wedding-primary">estrictamente para adultos</strong>.
          </p>
        </motion.div>

        {/* ── Botones de confirmación ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {enviado === 'sin-id' ? (
            <p className="text-wedding-secondary font-sans text-sm">
              Por favor confírmanos tu asistencia directamente por WhatsApp para registrar tu respuesta. 💛
            </p>
          ) : enviado ? (
            <p className="text-wedding-primary font-sans text-sm">
              ¡Gracias por tu respuesta! 💛
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleConfirm('Asistirá')}
                disabled={enviando}
                className="inline-flex items-center justify-center px-10 py-4 bg-wedding-primary text-white uppercase text-[10px] tracking-[0.3em] hover:bg-wedding-dark transition-colors duration-300 rounded-full disabled:opacity-50"
              >
                {enviando ? 'Enviando...' : 'Sí, asistiré'}
              </button>
              <button
                onClick={() => handleConfirm('No asistirá')}
                disabled={enviando}
                className="inline-flex items-center justify-center px-10 py-4 border border-wedding-primary text-wedding-primary uppercase text-[10px] tracking-[0.3em] hover:bg-wedding-primary hover:text-white transition-colors duration-300 rounded-full disabled:opacity-50"
              >
                No podré asistir
              </button>
            </div>
          )}

          {!guestPhone && (
            <p className="text-wedding-secondary/60 text-xs italic">
              Nota: este enlace no tiene un identificador de invitado.
            </p>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default RSVP;
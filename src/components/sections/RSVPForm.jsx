import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { RevealOnScroll } from '../common/RevealOnScroll';

/**
 * Formulario RSVP Premium con Floating Labels y Micro-interacciones.
 */
export const RSVPForm = ({ rsvpConfig, eventData }) => {
  const { sendRSVP } = useWhatsApp(rsvpConfig, eventData);
  const [formData, setFormData] = useState({
    name: '',
    attending: 'si',
    guests: '2',
    diet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      setIsSubmitting(true);
      
      // Construir mensaje de WhatsApp
      const attendingText = formData.attending === 'si' ? '✅ SÍ asistiré' : '❌ No podré asistir';
      
      let messageText = `¡Hola *${rsvpConfig.contactName}*! Soy *${formData.name}*.\n\n${attendingText}\n👥 *Acompañantes:* ${formData.guests}`;
      
      if (formData.diet && formData.diet.trim()) {
        messageText += `\n🍽️ *Dieta:* ${formData.diet.trim()}`;
      }
      
      if (formData.message && formData.message.trim()) {
        messageText += `\n💌 *Nota:* ${formData.message.trim()}`;
      }
      
      const whatsappUrl = `https://wa.me/${rsvpConfig.phone}?text=${encodeURIComponent(messageText)}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
      }, 800);
    }
  };

  return (
    <section id="rsvp" className="py-32 px-6 bg-wedding-cream relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wedding-gold/30 to-transparent" />
      
      <RevealOnScroll>
        <div className="max-w-xl mx-auto bg-wedding-cream p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-wedding-gold/10">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.4em] text-[10px] text-wedding-gold font-bold mb-4 block">Confirmación</span>
            <h2 className="text-4xl font-serif text-wedding-accent italic mb-6">¿Nos acompañas?</h2>
            <p className="text-gray-500 font-sans text-sm max-w-xs mx-auto">
              Por favor, confírmanos tu asistencia antes del {new Date(rsvpConfig.deadline).toLocaleDateString()}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Nombre y Apellido */}
            <div className="relative group">
              <input
                required
                type="text"
                id="name"
                value={formData.name}
                className="block w-full px-0 py-3 text-wedding-accent bg-transparent border-b border-gray-200 focus:outline-none focus:border-wedding-gold peer transition-all"
                placeholder=" "
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <label 
                htmlFor="name" 
                className="absolute text-[11px] uppercase tracking-widest font-bold text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:text-wedding-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre y Apellido
              </label>
            </div>

            {/* Asistencia y Acompañantes */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="relative group">
                <select 
                  id="attending"
                  value={formData.attending}
                  className="block w-full px-0 py-3 text-wedding-accent bg-transparent border-b border-gray-200 focus:outline-none focus:border-wedding-gold peer transition-all"
                  onChange={(e) => setFormData({...formData, attending: e.target.value})}
                >
                  <option value="si">Sí, asistiré</option>
                  <option value="no">No podré ir</option>
                </select>
                <label className="absolute text-[10px] text-wedding-gold -top-5 uppercase tracking-widest font-bold">
                  ¿Asistirás?
                </label>
              </div>

              <div className="relative group">
                <select 
                  id="guests"
                  value={formData.guests}
                  className="block w-full px-0 py-3 text-wedding-accent bg-transparent border-b border-gray-200 focus:outline-none focus:border-wedding-gold peer transition-all"
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1, 2].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Persona' : 'Personas'}</option>
                  ))}
                </select>
                <label className="absolute text-[10px] text-wedding-gold -top-5 uppercase tracking-widest font-bold">
                  Acompañantes
                </label>
              </div>
            </div>

            {/* Restricciones Alimentarias */}
            <div className="relative group">
              <input
                type="text"
                id="diet"
                value={formData.diet}
                className="block w-full px-0 py-3 text-wedding-accent bg-transparent border-b border-gray-200 focus:outline-none focus:border-wedding-gold peer transition-all"
                placeholder=" "
                onChange={(e) => setFormData({...formData, diet: e.target.value})}
              />
              <label htmlFor="diet" className="absolute text-[11px] uppercase tracking-widest font-bold text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:text-wedding-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Alergias, vegano, celíaco (Opcional)
              </label>
            </div>

            {/* Mensaje Especial */}
            <div className="relative group">
              <textarea
                id="message"
                value={formData.message}
                rows="2"
                className="block w-full px-0 py-3 text-wedding-accent bg-transparent border-b border-gray-200 focus:outline-none focus:border-wedding-gold peer transition-all resize-none"
                placeholder=" "
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <label htmlFor="message" className="absolute text-[11px] uppercase tracking-widest font-bold text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:text-wedding-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Mensaje para los novios o sugerir canción (Opcional)
              </label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className={`w-full py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl bg-wedding-accent text-white hover:bg-black disabled:bg-gray-400`}
            >
              {isSubmitting ? (
                'Procesando...'
              ) : (
                <>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.307 1.655zm6.222-4.032l.356.211c1.486.882 3.194 1.348 4.938 1.349h.005c5.33 0 9.682-4.351 9.684-9.684.001-2.583-1.006-5.011-2.835-6.841-1.831-1.83-4.258-2.836-6.837-2.836-5.334 0-9.684 4.351-9.686 9.686-.001 2.12.612 4.14 1.767 5.867l.233.349-1.01 3.693 3.784-.994zm11.377-5.602c-.312-.156-1.848-.911-2.136-1.016-.288-.105-.497-.156-.706.156-.21.312-.811 1.016-.994 1.221-.183.204-.366.229-.679.074-.312-.156-1.316-.484-2.506-1.545-.926-.826-1.551-1.846-1.733-2.158-.183-.312-.02-.482.137-.636.141-.139.312-.366.468-.547.156-.182.208-.312.312-.521.104-.209.052-.391-.026-.547-.078-.156-.706-1.703-.967-2.333-.255-.613-.512-.529-.706-.539-.183-.008-.392-.01-.601-.01s-.549.078-.836.391c-.287.312-1.1.1.076-1.1 2.396 0 2.506.463 2.506 2.057 0 .584-1.213 2.232-1.213 3.991 0 1.132.844 2.115 1.545 2.115.114 0 .229-.012.336-.039.638-.162 3.742-1.566 4.271-3.056.529-1.489.529-2.766.374-3.033-.155-.267-.57-.422-.882-.578z"/>
                  </svg>
                  Confirmar Asistencia
                </>
              )}
            </motion.button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

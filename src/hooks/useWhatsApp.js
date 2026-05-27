/**
 * Hook para la construcción de mensajes de WhatsApp estructurados.
 */
export const useWhatsApp = (config, eventData) => {
  const sendRSVP = (formData) => {
    let message = config.whatsappTemplate
      .replace('{groom}', eventData.groom.name)
      .replace('{bride}', eventData.bride.name)
      .replace('{name}', formData.name)
      .replace('{guests}', formData.guests)
      .replace('{diet}', formData.diet || 'Ninguna')
      .replace('{message}', formData.message || 'Sin mensaje adicional');

    const url = `https://wa.me/${config.phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return { sendRSVP };
};

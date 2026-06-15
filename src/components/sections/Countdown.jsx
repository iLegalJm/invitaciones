import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [showMenu, setShowMenu] = useState(false);

  // Lógica del temporizador
  useEffect(() => {
    const targetDate = new Date(data.date.iso).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        d: Math.floor(distance / (1000 * 60 * 60 * 24)),
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data.date.iso]);

  // Configuración del evento
  const title = "Boda de Xiomy-lu & Carlos";
  const details = "Te invitamos a celebrar nuestro gran día.";
  const location = data.location || "Lima, Perú"; 
  const startDate = new Date(data.date.iso);
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 horas de duración

  const formatDate = (date) => date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  // 1. Google Calendar
  const handleGoogle = () => {
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
    window.open(url, "_blank");
    setShowMenu(false);
  };

  // 2. Apple / Outlook (.ics)
  const handleApple = () => {
    const icsContent = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT",
      `SUMMARY:${title}`,
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `DESCRIPTION:${details}`,
      `LOCATION:${location}`,
      "END:VEVENT", "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'invitacion_boda.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowMenu(false);
  };

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-serif text-wedding-primary">{value}</span>
      <span className="text-[9px] uppercase tracking-[0.2em] text-wedding-secondary/70 font-bold mt-1">{label}</span>
    </div>
  );

  return (
    <section className="py-12 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          <div className="flex justify-center gap-6 md:gap-12 mb-12">
            <TimeBox value={timeLeft.d} label="Días" />
            <TimeBox value={timeLeft.h} label="Horas" />
            <TimeBox value={timeLeft.m} label="Min" />
            <TimeBox value={timeLeft.s} label="Seg" />
          </div>

          <div className="relative inline-block">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="px-8 py-3 border border-wedding-primary/30 text-wedding-primary uppercase text-[10px] tracking-[0.3em] hover:border-wedding-primary transition-all duration-300"
            >
              Agregar a Calendario
            </button>

            <AnimatePresence>
              {showMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-xl border border-gray-100 z-50 flex flex-col rounded-md overflow-hidden"
                >
                  <button onClick={handleGoogle} className="p-3 text-[10px] uppercase hover:bg-gray-50 text-left border-b border-gray-100">
                    Google Calendar
                  </button>
                  <button onClick={handleApple} className="p-3 text-[10px] uppercase hover:bg-gray-50 text-left">
                    Apple / Outlook (.ics)
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componentes de secciones
import { WelcomeCover } from './components/sections/WelcomeCover';
import { HeroSection } from './components/sections/HeroSection';
import { Hero } from './components/sections/Hero';
import EventDetails from './components/sections/EventDetails';
import Itinerary from './components/sections/Itinerary';
import DressCode from './components/sections/DressCode';
import { GiftSection } from './components/sections/GiftSection';
import RSVPAndGallery from './components/sections/RSVPAndGallery';
import RSVP from './components/sections/RSVP';
import Footer from './components/sections/Footer';
import Countdown from './components/sections/Countdown';

// Configuración y Tema
import { invitationData } from './config/invitationData';
import { theme } from './theme';

export const InvitacionPrincipal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current && audioRef.current.src) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn("Autoplay bloqueado o error de fuente:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpened ? 'auto' : 'hidden';
  }, [isOpened]);

  if (!invitationData || !invitationData.event) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#D5E9F1] text-[#175294]">
        <p className="font-serif text-xl animate-pulse">Cargando nuestra historia...</p>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen font-sans selection:bg-[#175294] selection:text-white" 
      style={{ backgroundColor: theme.boda.colors.cream, color: theme.boda.colors.dark }}
    >
      {/* Audio */}
      {invitationData.features?.music?.url && (
        <audio ref={audioRef} src={invitationData.features.music.url} loop />
      )}

      {/* Control de Música */}
      {isOpened && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-[#308FBB]/20 transition-all active:scale-95"
          aria-label="Control de música"
        >
          <div className="relative">
            {isPlaying ? (
              <span className="flex gap-[3px] items-end h-4">
                <motion.span animate={{ height: [4, 16, 8, 16, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-[#175294]" />
                <motion.span animate={{ height: [8, 4, 16, 4, 8] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-[#175294]" />
                <motion.span animate={{ height: [16, 8, 4, 8, 16] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-[#175294]" />
              </span>
            ) : (
              <svg className="w-6 h-6 text-[#175294]/40 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>
      )}

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <WelcomeCover onOpen={handleOpen} theme={theme.boda} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col"
            style={{ backgroundColor: theme.boda.colors.cream }}
          >
            <HeroSection data={invitationData.event} />

            <main className="w-full max-w-5xl mx-auto py-12 overflow-hidden">
              <Countdown data={invitationData.event} />
              <EventDetails locations={invitationData.event.locations} />
              <Itinerary items={invitationData.event.itinerary} />
              <DressCode data={invitationData.features.dressCode} />
              <RSVP data={invitationData.features.rsvp} />
              <Footer eventData={invitationData.event} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvitacionPrincipal;

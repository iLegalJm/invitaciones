import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componentes
import { WelcomeCover } from './components/sections/WelcomeCover';
import { HeroSection } from './components/sections/HeroSection';
import ReligiousCeremony from './components/sections/ReligiousCeremony';
import CountdownAndFamily from './components/sections/CountdownAndFamily';
import LocationsSection from './components/sections/LocationsSection';
import Itinerary from './components/sections/Itinerary';
import DressCode from './components/sections/DressCode';
import { GiftSection } from './components/sections/GiftSection';
import RSVPAndGallery from './components/sections/RSVPAndGallery';
import GuestInteractions from './components/sections/GuestInteractions';
import Footer from './components/sections/Footer';
import Countdown from './components/sections/Countdown';

// Configuración y Hooks
import { invitationData } from './config/invitationData';
import FamilySection from './components/sections/FamilySection';
import EventDetails from './components/sections/EventDetails';
import GiftRegistry from './components/sections/GiftRegistry';
import Gallery from './components/sections/Gallery';
import WishesAndSongs from './components/sections/WishesAndSongs';
import RSVP from './components/sections/RSVP';
import PhotoBanner from './components/sections/PhotoBanner';

// Divisor Elegante
const ElegantDivider = () => (
  <div className="flex justify-center items-center py-4 w-full">
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      whileInView={{ height: 48, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[1px] bg-wedding-secondary/40"
    />
  </div>
);

function App() {
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
      <div className="h-screen flex items-center justify-center bg-wedding-cream text-wedding-primary">
        <p className="font-serif text-xl animate-pulse">Cargando nuestra historia...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wedding-cream text-wedding-primary font-sans selection:bg-wedding-primary selection:text-white" style={{ backgroundColor: '#FAF3E0' }}>

      {/* Audio */}
      <audio ref={audioRef} src={invitationData.features.music.url} loop />

      {/* Botón Flotante de Música */}
      {isOpened && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-wedding-secondary/20 transition-all active:scale-95"
          aria-label="Control de música"
        >
          <div className="relative">
            {isPlaying ? (
              <span className="flex gap-[3px] items-end h-4">
                <motion.span animate={{ height: [4, 16, 8, 16, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-wedding-primary" />
                <motion.span animate={{ height: [8, 4, 16, 4, 8] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-wedding-primary" />
                <motion.span animate={{ height: [16, 8, 4, 8, 16] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-wedding-primary" />
              </span>
            ) : (
              <svg className="w-6 h-6 text-wedding-primary/40 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>
      )}

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <WelcomeCover onOpen={handleOpen} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col bg-wedding-cream"
            style={{ backgroundColor: '#FAF3E0' }}
          >
            <HeroSection data={invitationData.event} />

            <main className="w-full max-w-5xl mx-auto py-12 overflow-hidden">

              <Countdown data={invitationData.event} />

              <FamilySection data={invitationData.event} />

              <EventDetails locations={invitationData.event.locations} />

              <Itinerary items={invitationData.event.itinerary} />

              <DressCode data={invitationData.features.dressCode} />

              <PhotoBanner />

              <GiftRegistry data={invitationData.features.gift} />

              <Gallery images={invitationData.features.gallery} />

              <WishesAndSongs />

              <RSVP data={invitationData.features.rsvp} />

              <Footer eventData={invitationData.event} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
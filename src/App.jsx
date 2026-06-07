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

// Configuración y Hooks
import { invitationData } from './config/invitationData';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Manejo de la apertura del sobre
  const handleOpen = () => {
    setIsOpened(true);
    // Intentar reproducir audio al abrir (Interacción del usuario)
    if (audioRef.current && audioRef.current.src) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn("Autoplay bloqueado o error de fuente:", err);
      });
    }
  };

  // Toggle Manual de Música
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

  // Bloquear scroll cuando el sobre está cerrado
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  if (!invitationData || !invitationData.event) {
    return (
      <div className="h-screen flex items-center justify-center bg-wedding-cream text-wedding-primary">
        <p className="font-serif text-xl animate-pulse">Cargando nuestra historia...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wedding-cream text-wedding-accent font-sans selection:bg-wedding-primary selection:text-white">
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src={invitationData.features.music.url} 
        loop 
      />

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
                <motion.span 
                  animate={{ height: [4, 16, 8, 16, 4] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-1 bg-wedding-primary"
                />
                <motion.span 
                  animate={{ height: [8, 4, 16, 4, 8] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-1 bg-wedding-primary"
                />
                <motion.span 
                  animate={{ height: [16, 8, 4, 8, 16] }}
                  transition={{ repeat: Infinity, duration: 0.9 }}
                  className="w-1 bg-wedding-primary"
                />
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
          <WelcomeCover 
            key="cover"
            eventData={invitationData.event} 
            onOpen={handleOpen} 
          />
        ) : (
          <motion.div 
            key="content" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col bg-wedding-cream"
          >
            <HeroSection data={invitationData.event} />
            
            <main className="w-full max-w-5xl mx-auto space-y-24 py-24 px-4 overflow-hidden">
              <section className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-sm border border-wedding-secondary/10 overflow-hidden">
                <ReligiousCeremony 
                  data={invitationData.event.locations.religious} 
                />
              </section>
              
              <section className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-sm border border-wedding-secondary/10 overflow-hidden">
                <CountdownAndFamily 
                  data={invitationData.event} 
                  settings={invitationData.settings} 
                />
              </section>
              
              <section className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-sm border border-wedding-secondary/10 overflow-hidden">
                <LocationsSection 
                  data={invitationData.event} 
                />
              </section>

              <section className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-sm border border-wedding-secondary/10 overflow-hidden">
                <Itinerary 
                  data={invitationData.event}
                />
              </section>

              <section className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-sm border border-wedding-secondary/10 overflow-hidden">
                <DressCode 
                  data={invitationData.features.dressCode} 
                />
              </section>

              <section className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-sm border border-wedding-secondary/10 overflow-hidden">
                <GiftSection 
                  giftData={invitationData.features.gift} 
                />
              </section>

              <section className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-sm border border-wedding-secondary/10 overflow-hidden">
                <RSVPAndGallery 
                  rsvpConfig={invitationData.features.rsvp}
                  gallery={invitationData.features.gallery}
                />
              </section>

              <GuestInteractions 
                phone={invitationData.features.rsvp.phone}
              />

              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;




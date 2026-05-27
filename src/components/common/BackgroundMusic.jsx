import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente BackgroundMusic: Botón flotante premium para controlar el audio.
 * Recibe el estado del hook useAudio desde el padre.
 */
export const BackgroundMusic = ({ isPlaying, onToggle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <button
                onClick={onToggle}
                className="group relative w-14 h-14 flex items-center justify-center transition-all duration-300"
                aria-label={isPlaying ? "Pausar Música" : "Reproducir Música"}
            >
                {/* Fondo con Glassmorphism y Elevación */}
                <div className="absolute inset-0 bg-wedding-cream/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-wedding-gold/20 group-hover:border-wedding-gold/50 transition-colors" />

                {/* Indicador visual de sonido (ondas) */}
                {isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={{ scale: 1.8, opacity: 0 }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                                className="absolute w-full h-full border border-wedding-gold/30 rounded-full"
                            />
                        ))}
                    </div>
                )}

                {/* Icons SVG Premium */}
                <div className="relative z-10 text-wedding-gold">
                    <AnimatePresence mode="wait">
                        {isPlaying ? (
                            <motion.svg
                                key="pause"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </motion.svg>
                        ) : (
                            <motion.svg
                                key="play"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                className="w-6 h-6 ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </motion.svg>
                        )}
                    </AnimatePresence>
                </div>
            </button>
        </motion.div>
    );
};

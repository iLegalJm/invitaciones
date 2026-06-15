import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WishesAndSongs = () => {
    const [wishData, setWishData] = useState({ name: '', message: '' });
    const [songData, setSongData] = useState({ song: '', artist: '' });

    // Estados para controlar los mensajes de éxito
    const [wishSuccess, setWishSuccess] = useState(false);
    const [songSuccess, setSongSuccess] = useState(false);

    const handleWishSubmit = (e) => {
        e.preventDefault();
        // Aquí tu lógica de envío (API/Backend)
        console.log("Deseo:", wishData);

        // Limpiar formulario y mostrar éxito
        setWishData({ name: '', message: '' });
        setWishSuccess(true);
        setTimeout(() => setWishSuccess(false), 4000); // Se oculta en 4 segundos
    };

    const handleSongSubmit = (e) => {
        e.preventDefault();
        // Aquí tu lógica de envío (API/Backend)
        console.log("Canción:", songData);

        // Limpiar formulario y mostrar éxito
        setSongData({ song: '', artist: '' });
        setSongSuccess(true);
        setTimeout(() => setSongSuccess(false), 4000); // Se oculta en 4 segundos
    };

    const inputClasses = "w-full bg-transparent border-b border-wedding-secondary/30 focus:border-wedding-primary outline-none py-3 text-sm md:text-base text-wedding-dark font-sans placeholder-wedding-secondary/50 transition-colors rounded-none";

    return (
        <section className="py-12 px-6 bg-transparent relative">
            <div className="max-w-5xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16">

                    {/* Columna 1: Buenos Deseos */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-10"
                    >
                        <div className="space-y-3">
                            <span className="text-wedding-secondary uppercase tracking-[0.6em] text-[10px] block font-bold">
                                Libro de Firmas
                            </span>
                            <h3 className="text-3xl md:text-4xl font-serif text-wedding-primary italic">
                                Buenos Deseos
                            </h3>
                            <p className="text-wedding-secondary font-sans text-sm leading-relaxed">
                                Déjanos un mensaje para recordar este día por siempre.
                            </p>
                        </div>

                        <form onSubmit={handleWishSubmit} className="space-y-6 relative">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Tu nombre completo"
                                    required
                                    value={wishData.name}
                                    onChange={(e) => setWishData({ ...wishData, name: e.target.value })}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Escribe tu mensaje aquí..."
                                    required
                                    rows="3"
                                    value={wishData.message}
                                    onChange={(e) => setWishData({ ...wishData, message: e.target.value })}
                                    className={`${inputClasses} resize-none`}
                                />
                            </div>

                            <div className="pt-2 flex items-center gap-4">
                                <button
                                    type="submit"
                                    className="inline-block px-8 py-3 border border-wedding-primary text-wedding-primary bg-transparent text-[10px] uppercase tracking-[0.2em] hover:bg-wedding-primary hover:text-white transition-all duration-300 rounded-full"
                                >
                                    Enviar Mensaje
                                </button>

                                {/* Mensaje de Éxito Animado */}
                                <AnimatePresence>
                                    {wishSuccess && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="text-xs italic text-[#5E1929]"
                                        >
                                            ¡Guardado con amor!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>

                    {/* Columna 2: Sugerencia de Canciones */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div className="space-y-3">
                            <span className="text-wedding-secondary uppercase tracking-[0.6em] text-[10px] block font-bold">
                                La Fiesta
                            </span>
                            <h3 className="text-3xl md:text-4xl font-serif text-wedding-primary italic">
                                ¿Qué bailamos?
                            </h3>
                            <p className="text-wedding-secondary font-sans text-sm leading-relaxed">
                                Ayúdanos a crear la playlist perfecta. ¿Qué canción no puede faltar?
                            </p>
                        </div>

                        <form onSubmit={handleSongSubmit} className="space-y-6 relative">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nombre de la canción"
                                    required
                                    value={songData.song}
                                    onChange={(e) => setSongData({ ...songData, song: e.target.value })}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Artista o Grupo"
                                    required
                                    value={songData.artist}
                                    onChange={(e) => setSongData({ ...songData, artist: e.target.value })}
                                    className={inputClasses}
                                />
                            </div>

                            <div className="pt-2 flex items-center gap-4">
                                <button
                                    type="submit"
                                    className="inline-block px-8 py-3 border border-wedding-primary text-wedding-primary bg-transparent text-[10px] uppercase tracking-[0.2em] hover:bg-wedding-primary hover:text-white transition-all duration-300 rounded-full"
                                >
                                    Sugerir Canción
                                </button>

                                {/* Mensaje de Éxito Animado */}
                                <AnimatePresence>
                                    {songSuccess && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="text-xs italic text-[#5E1929]"
                                        >
                                            ¡Añadida a la playlist!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WishesAndSongs;
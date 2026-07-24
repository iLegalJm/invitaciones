import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbxwk6EB-hoVJ8BcmlOyZeSUohk3rw9_3Cy36z5krjWZkMrb7Y-ipPn7Yn0OlGHcuO7wEA/exec';

const WishesAndSongs = () => {
    const [wishData, setWishData] = useState({ name: '', message: '' });
    const [songData, setSongData] = useState({ song: '', artist: '' });

    const [wishSuccess, setWishSuccess] = useState(false);
    const [songSuccess, setSongSuccess] = useState(false);
    const [songSending, setSongSending] = useState(false);

    // Leer id del invitado desde la URL (?id=980501238)
    const params = new URLSearchParams(window.location.search);
    const guestPhone = params.get('id');

    const handleWishSubmit = (e) => {
        e.preventDefault();
        console.log("Deseo:", wishData);
        setWishData({ name: '', message: '' });
        setWishSuccess(true);
        setTimeout(() => setWishSuccess(false), 4000);
    };

    const handleSongSubmit = async (e) => {
        e.preventDefault();
        setSongSending(true);
        try {
            await fetch(SHEET_API_URL, {
                method : 'POST',
                body   : JSON.stringify({
                    tipo    : 'cancion',
                    telefono: guestPhone || null,
                    nombre  : songData.artist, // reutilizamos artist como referencia si no hay id
                    cancion : songData.song,
                    artista : songData.artist,
                }),
                headers: { 'Content-Type': 'text/plain' },
            });
        } catch (err) {
            console.error('Error al guardar canción:', err);
        }
        setSongData({ song: '', artist: '' });
        setSongSending(false);
        setSongSuccess(true);
        setTimeout(() => setSongSuccess(false), 4000);
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
                                            className="text-xs italic text-[#175294]"
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
                                    disabled={songSending}
                                    className="inline-block px-8 py-3 border border-wedding-primary text-wedding-primary bg-transparent text-[10px] uppercase tracking-[0.2em] hover:bg-wedding-primary hover:text-white transition-all duration-300 rounded-full disabled:opacity-50"
                                >
                                    {songSending ? 'Guardando...' : 'Sugerir Canción'}
                                </button>

                                {/* Mensaje de Éxito Animado */}
                                <AnimatePresence>
                                    {songSuccess && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="text-xs italic text-[#175294]"
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
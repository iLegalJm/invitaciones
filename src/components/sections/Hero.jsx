import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = ({ data }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#175294]">
            {/* Parallax Background Layer */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')] bg-cover bg-center opacity-20 grayscale-[30%]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#175294]/50 to-[#175294]" />
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-[#74B0D3]/20 blur-3xl"
            />
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
                className="absolute bottom-40 right-[15%] w-48 h-48 rounded-full bg-[#308FBB]/10 blur-3xl"
            />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-6"
            >
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="uppercase tracking-[0.6em] text-[10px] md:text-xs text-[#74B0D3] font-bold mb-6 block drop-shadow-sm">
                        {data.date.display} • {data.date.year}
                    </span>
                </motion.div>

                <div className="flex flex-col items-center justify-center mb-10">
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                        className="text-7xl md:text-9xl font-serif text-white mb-2"
                    >
                        {data.bride.name}
                    </motion.h1>

                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -45 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 50, delay: 1.2 }}
                        className="my-2"
                    >
                        <span className="text-4xl md:text-5xl font-serif text-[#74B0D3] italic">&</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                        className="text-7xl md:text-9xl font-serif text-white"
                    >
                        {data.groom.name}
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2 }}
                    className="max-w-sm mx-auto"
                >
                    <div className="h-[1px] w-12 bg-[#74B0D3] mx-auto mb-6" />
                    <p className="text-[#D5E9F1] font-sans tracking-wide leading-relaxed italic text-lg">
                        Acompáñanos a celebrar el comienzo de nuestra historia para siempre.
                    </p>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-4"
            >
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#74B0D3]/60 font-medium">Desliza</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-[#74B0D3]/60 to-transparent" />
            </motion.div>
        </section>
    );
};

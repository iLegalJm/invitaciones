import React from 'react';
import { motion } from 'framer-motion';

/*
 * PhotoBanner — Banner full-width con foto de fondo y frase
 * Colocar entre <DressCode /> y <GiftRegistry /> en App.jsx
 *
 * Foto: public/assets/images/IMG_5165.jpg
 */

export const PhotoBanner = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: 'clamp(320px, 55vw, 480px)', overflow: 'hidden' }}>

            {/* ── Foto de fondo con Ken Burns suave ── */}
            <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: 'easeOut' }}
                style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url('./assets/images/DSC_0295.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%',
                    willChange: 'transform',
                }}
            />

            {/* Overlay oscuro */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(20,8,4,.35) 0%, rgba(20,8,4,.55) 100%)',
            }} />

            {/* Overlay dorado sutil en el centro */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(197,160,89,.1) 0%, transparent 70%)',
            }} />

            {/* ── Contenido ── */}
            <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '0 32px', textAlign: 'center', gap: 20,
            }}>

                {/* Línea ornamental superior */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                    <div style={{ width: 40, height: .5, background: 'rgba(223,192,141,.6)' }} />
                    <span style={{ color: '#dfc08d', fontSize: 10, opacity: .8 }}>✦</span>
                    <div style={{ width: 40, height: .5, background: 'rgba(223,192,141,.6)' }} />
                </motion.div>

                {/* Frase principal */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        fontFamily: "'Parisienne', cursive",
                        fontSize: 'clamp(2.2rem, 8vw, 3.8rem)',
                        color: '#FAF3E0',
                        lineHeight: 1.2,
                        textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                        maxWidth: 480,
                    }}
                >
                    Para siempre empieza hoy
                </motion.p>

                {/* Fecha */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        fontFamily: "'IM Fell English SC', serif",
                        fontSize: 11,
                        letterSpacing: '0.4em',
                        color: 'rgba(223,192,141,.85)',
                        textTransform: 'uppercase',
                    }}
                >
                    08 · Agosto · 2026
                </motion.p>

                {/* Línea ornamental inferior */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                    <div style={{ width: 40, height: .5, background: 'rgba(223,192,141,.6)' }} />
                    <span style={{ color: '#dfc08d', fontSize: 10, opacity: .8 }}>✦</span>
                    <div style={{ width: 40, height: .5, background: 'rgba(223,192,141,.6)' }} />
                </motion.div>

            </div>
        </div>
    );
};

export default PhotoBanner;
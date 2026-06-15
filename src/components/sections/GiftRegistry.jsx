import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GiftRegistry = ({ data }) => {
    const [copiedText, setCopiedText] = useState('');
    const [tapped, setTapped]         = useState('');

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTapped(text);
        setTimeout(() => setCopiedText(''), 2800);
        setTimeout(() => setTapped(''), 150);
    };

    return (
        <section style={{ padding: '36px 0', background: 'transparent' }}>
            <div style={{ maxWidth: 520, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>

                {/* ── Encabezado ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 52 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{ marginBottom: 18 }}
                    >
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{ margin: '0 auto', display: 'block' }}>
                            <rect x="4" y="16" width="30" height="19" rx="1" stroke="#5E1929" strokeWidth="0.9" fill="none"/>
                            <rect x="3" y="11" width="32" height="6" rx="1" stroke="#5E1929" strokeWidth="0.9" fill="none"/>
                            <line x1="19" y1="11" x2="19" y2="35" stroke="#5E1929" strokeWidth="0.9"/>
                            <path d="M19 11 C16 7 10 8 10 11 C10 14 15 13 19 11Z" stroke="#c5a059" strokeWidth="0.8" fill="#c5a059" fillOpacity="0.2"/>
                            <path d="M19 11 C22 7 28 8 28 11 C28 14 23 13 19 11Z" stroke="#c5a059" strokeWidth="0.8" fill="#c5a059" fillOpacity="0.2"/>
                        </svg>
                    </motion.div>

                    <p style={{ fontFamily: "'Parisienne', cursive", fontSize: 30, color: '#8F5260', lineHeight: 1, marginBottom: 8 }}>
                        Un regalo con amor
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: '12px 0 16px' }}>
                        <div style={{ width: 44, height: 0.5, background: 'rgba(94,25,41,.3)' }} />
                        <span style={{ color: '#c5a059', fontSize: 11, letterSpacing: '0.2em' }}>✦ ✦ ✦</span>
                        <div style={{ width: 44, height: 0.5, background: 'rgba(94,25,41,.3)' }} />
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
                        fontWeight: 700, letterSpacing: '0.14em',
                        textTransform: 'uppercase', color: '#5E1929',
                        lineHeight: 1.1, marginBottom: 18,
                    }}>
                        {data.title || 'Mesa de Regalos'}
                    </h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8F5260', lineHeight: 1.8, maxWidth: 340, margin: '0 auto' }}>
                        {data.description}
                    </p>
                </motion.div>

                {/* ── Cuentas ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 52 }}>
                    {data.accounts.map((account, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.7, delay: 0.1 + index * 0.12 }}
                        >
                            {/* Banco */}
                            <p style={{
                                fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 700,
                                letterSpacing: '0.28em', textTransform: 'uppercase',
                                color: '#c5a059', marginBottom: 10,
                            }}>
                                {account.bank || account.name}
                            </p>

                            {/* Cuenta mancomunada */}
                            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontStyle: 'italic', color: '#8F5260', marginBottom: 2 }}>
                                Cuenta Mancomunada
                            </p>
                            <p style={{ fontFamily: "'Parisienne', cursive", fontSize: 26, color: '#5E1929', lineHeight: 1.2, marginBottom: 20 }}>
                                Xiomy-lu &amp; Carlos
                            </p>

                            <div style={{ width: 40, height: 0.5, background: 'rgba(94,25,41,0.2)', margin: '0 auto 20px' }} />

                            {/* Micro-copy invitación */}
                            <p style={{
                                fontFamily: 'Inter, sans-serif', fontSize: 10,
                                color: '#8F5260', letterSpacing: '0.12em',
                                textTransform: 'uppercase', marginBottom: 14,
                            }}>
                                Toca para copiar el número
                            </p>

                            {/* Número — botón principal */}
                            <motion.div
                                onClick={() => handleCopy(account.number)}
                                animate={{ scale: tapped === account.number ? 0.96 : 1 }}
                                transition={{ duration: 0.12 }}
                                style={{
                                    cursor  : 'pointer',
                                    display : 'inline-block',
                                    position: 'relative',
                                }}
                            >
                                {/* Brillo dorado de fondo */}
                                <div style={{
                                    position    : 'absolute', inset: 0,
                                    borderRadius: 48,
                                    background  : 'linear-gradient(135deg, rgba(197,160,89,0.13), rgba(94,25,41,0.06))',
                                    border      : '1px solid rgba(197,160,89,0.35)',
                                }} />

                                <div style={{
                                    position     : 'relative',
                                    display      : 'inline-flex',
                                    alignItems   : 'center',
                                    gap          : 12,
                                    padding      : '14px 26px',
                                    borderRadius : 48,
                                }}>
                                    <AnimatePresence mode="wait">
                                        {copiedText === account.number ? (
                                            <motion.div
                                                key="check"
                                                initial={{ opacity: 0, scale: 0.6 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.6 }}
                                                style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" fill="#5E1929" fillOpacity="0.12"/>
                                                    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#5E1929" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                <span style={{
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: 20, color: '#5E1929',
                                                    letterSpacing: '0.08em',
                                                }}>
                                                    {account.number}
                                                </span>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="idle"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                                            >
                                                {/* Ícono copiar a la izquierda del número */}
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                                    <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                        stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                                <span style={{
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: 20, color: '#2D2D2D',
                                                    letterSpacing: '0.08em',
                                                }}>
                                                    {account.number}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Feedback emocional post-copia */}
                            <div style={{ height: 36, marginTop: 14 }}>
                                <AnimatePresence>
                                    {copiedText === account.number && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            transition={{ duration: 0.35 }}
                                        >
                                            <p style={{
                                                fontFamily: "'Parisienne', cursive",
                                                fontSize: 20, color: '#5E1929',
                                                lineHeight: 1,
                                            }}>
                                                ¡Gracias de corazón! 🤍
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Ornamento final ── */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ marginTop: 56 }}
                >
                    <svg width="180" height="30" viewBox="0 0 180 30" fill="none">
                        <path d="M0 15 Q30 4 60 15 Q90 26 120 15 Q150 4 180 15" stroke="#c5a059" strokeWidth=".8" strokeOpacity=".55" fill="none"/>
                        <circle cx="90"  cy="15" r="3"   fill="#c5a059" fillOpacity=".7"/>
                        <circle cx="58"  cy="20" r="1.8" fill="#c5a059" fillOpacity=".4"/>
                        <circle cx="122" cy="20" r="1.8" fill="#c5a059" fillOpacity=".4"/>
                        <circle cx="30"  cy="12" r="1.2" fill="#c5a059" fillOpacity=".3"/>
                        <circle cx="150" cy="12" r="1.2" fill="#c5a059" fillOpacity=".3"/>
                    </svg>
                </motion.div> */}

            </div>
        </section>
    );
};

export default GiftRegistry;
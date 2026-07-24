import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  iglesia : './assets/images/icon/iglesia.png',
  civil   : './assets/images/icon/civil.png',
  brindis : './assets/images/icon/brindis.png',
  bus     : './assets/images/icon/bus.png',
};

const Itinerary = ({ items = [] }) => {
  return (
    <section style={{ padding: '72px 0', background: 'transparent' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 20px' }}>

        {/* ── Encabezado ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <p style={{
            fontFamily : "'Parisienne', cursive",
            fontSize   : 30,
            color      : '#308FBB',
            lineHeight : 1,
            marginBottom: 8,
          }}>
            El Gran Día
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: '10px 0 16px' }}>
            <div style={{ width: 44, height: .5, background: 'rgba(23,82,148,.3)' }} />
            <span style={{ color: '#74B0D3', fontSize: 11, letterSpacing: '0.2em' }}>✦ ✦ ✦</span>
            <div style={{ width: 44, height: .5, background: 'rgba(23,82,148,.3)' }} />
          </div>
          <h2 style={{
            fontFamily   : "'Playfair Display', serif",
            fontSize     : 'clamp(2rem, 8vw, 3.2rem)',
            fontWeight   : 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color        : '#175294',
            lineHeight   : 1.1,
          }}>
            Itinerario
          </h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div style={{ position: 'relative' }}>

          {/* Línea vertical central */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{
              position       : 'absolute',
              left           : '50%',
              transform      : 'translateX(-50%)',
              top            : 0, bottom: 0,
              width          : 1,
              background     : 'rgba(23,82,148,.2)',
              transformOrigin: 'top',
              zIndex         : 1,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {items.map((item, i) => {
              const side  = item.side || (i % 2 === 0 ? 'left' : 'right');
              const isLeft = side === 'left';
              const [time, ampm] = (item.time || '').split(' ');
              const iconSrc = ICON_MAP[item.icono] || null;
              const delay  = 0.1 + i * 0.1;

              const ICON_SIZE = 120;

              return (
                <div
                  key={i}
                  style={{
                    display            : 'grid',
                    gridTemplateColumns: '1fr 32px 1fr',
                    alignItems         : 'center',
                    minHeight          : 140,
                  }}
                >
                  {/* ── Columna izquierda ── */}
                  <div style={{ paddingRight: 6, paddingTop: 8, paddingBottom: 8 }}>
                    {isLeft ? (
                      /* Texto alineado a la derecha */
                      <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.7, delay, ease: [0.22,1,0.36,1] }}
                        style={{ textAlign: 'right' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, justifyContent: 'flex-end', marginBottom: 4 }}>
                          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: '#175294', lineHeight: 1 }}>{time}</span>
                          {ampm && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#308FBB', fontWeight: 700 }}>{ampm}</span>}
                        </div>
                        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D2849', marginBottom: 3, lineHeight: 1.35 }}>{item.event}</p>
                        {item.location && <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, fontStyle: 'italic', color: '#308FBB', lineHeight: 1.4 }}>{item.location}</p>}
                      </motion.div>
                    ) : (
                      /* Ícono pegado al centro, alineado a la derecha */
                      iconSrc && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{ duration: 0.7, delay, ease: [0.22,1,0.36,1] }}
                          style={{ display: 'flex', justifyContent: 'flex-end' }}
                        >
                          <div style={{ width: ICON_SIZE, height: ICON_SIZE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={iconSrc} alt={item.event} style={{ width: ICON_SIZE, height: ICON_SIZE, objectFit: 'contain', mixBlendMode: 'multiply' }} />
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* ── Punto central ── */}
                  <div style={{ display: 'flex', justifyContent: 'center', zIndex: 2 }}>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay }}
                      style={{ width: 11, height: 11, borderRadius: '50%', background: '#175294', flexShrink: 0 }}
                    />
                  </div>

                  {/* ── Columna derecha ── */}
                  <div style={{ paddingLeft: 6, paddingTop: 8, paddingBottom: 8 }}>
                    {!isLeft ? (
                      /* Texto alineado a la izquierda */
                      <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.7, delay, ease: [0.22,1,0.36,1] }}
                        style={{ textAlign: 'left' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginBottom: 4 }}>
                          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: '#175294', lineHeight: 1 }}>{time}</span>
                          {ampm && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#308FBB', fontWeight: 700 }}>{ampm}</span>}
                        </div>
                        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D2849', marginBottom: 3, lineHeight: 1.35 }}>{item.event}</p>
                        {item.location && <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, fontStyle: 'italic', color: '#308FBB', lineHeight: 1.4 }}>{item.location}</p>}
                      </motion.div>
                    ) : (
                      /* Ícono pegado al centro, alineado a la izquierda */
                      iconSrc && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{ duration: 0.7, delay, ease: [0.22,1,0.36,1] }}
                          style={{ display: 'flex', justifyContent: 'flex-start' }}
                        >
                          <div style={{ width: ICON_SIZE, height: ICON_SIZE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={iconSrc} alt={item.event} style={{ width: ICON_SIZE, height: ICON_SIZE, objectFit: 'contain', mixBlendMode: 'multiply' }} />
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Ornamento final */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ textAlign: 'center', marginTop: 48 }}
          >
            <svg width="180" height="30" viewBox="0 0 180 30" fill="none">
              <path d="M0 15 Q30 4 60 15 Q90 26 120 15 Q150 4 180 15" stroke="#74B0D3" strokeWidth=".8" strokeOpacity=".55" fill="none"/>
              <circle cx="90"  cy="15" r="3"   fill="#74B0D3" fillOpacity=".7"/>
              <circle cx="58"  cy="20" r="1.8" fill="#74B0D3" fillOpacity=".4"/>
              <circle cx="122" cy="20" r="1.8" fill="#74B0D3" fillOpacity=".4"/>
              <circle cx="30"  cy="12" r="1.2" fill="#74B0D3" fillOpacity=".3"/>
              <circle cx="150" cy="12" r="1.2" fill="#74B0D3" fillOpacity=".3"/>
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Itinerary;
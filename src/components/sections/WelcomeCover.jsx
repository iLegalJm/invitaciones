import React, { useState, useRef } from 'react';
import theme from '../../theme';

export const WelcomeCover = ({
  onOpen,
  sealSrc = './assets/images/selloi.png',
  embossSrc = './assets/images/floral.png', 
}) => {
  const [step, setStep] = useState(0);
  const openedRef = useRef(false);

  const C = theme.boda.colors;

  const handleOpen = () => {
    if (openedRef.current) return;
    openedRef.current = true;
    
    setStep(1); 
    setTimeout(() => setStep(2), 400); 
    setTimeout(() => setStep(3), 1000); 
    setTimeout(() => {
      setStep(4); 
      setTimeout(() => onOpen?.(), 700);
    }, 1800);
  };

  const textureStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: C.dark, 
    backgroundImage: `url(${embossSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay', 
    backfaceVisibility: 'hidden', 
    transition: 'transform 0.9s cubic-bezier(0.65, 0, 0.15, 1), filter 0.5s ease',
  };

  return (
    <div
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Abrir invitación"
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        perspective: '2000px',
        opacity: step >= 4 ? 0 : 1,
        transform: step >= 3 ? 'scale(1.15)' : 'scale(1)', 
        transition: 'opacity 0.7s ease, transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)',
        pointerEvents: step > 0 ? 'none' : 'auto',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#070C16' }} />

      {/* ══ 3. SOLAPA IZQUIERDA ══ */}
      <div style={{
        ...textureStyle,
        clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
        transformOrigin: 'center left',
        transform: step >= 3 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
        zIndex: 2,
        filter: step < 2 ? 'brightness(0.85)' : 'brightness(1)', 
      }} />

      {/* ══ 4. SOLAPA DERECHA ══ */}
      <div style={{
        ...textureStyle,
        clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
        transformOrigin: 'center right',
        transform: step >= 3 ? 'rotateY(180deg)' : 'rotateY(0deg)',
        zIndex: 2,
        filter: step < 2 ? 'brightness(0.85)' : 'brightness(1)',
      }} />

      {/* ══ 2. SOLAPA INFERIOR ══ */}
      <div style={{
        ...textureStyle,
        clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)',
        transformOrigin: 'bottom center',
        transform: step >= 3 ? 'rotateX(180deg)' : 'rotateX(0deg)',
        zIndex: 3,
        filter: step < 2 ? 'brightness(0.9)' : 'brightness(1)',
      }} />

      {/* ══ SOMBRA FÍSICA DE LA SOLAPA SUPERIOR ══ */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
        transform: 'translateY(4px) scale(1.01)',
        opacity: step >= 2 ? 0 : 1,
        transition: 'opacity 0.3s ease',
        zIndex: 3,
        filter: 'blur(4px)',
      }} />

      {/* ══ 1. SOLAPA SUPERIOR (Principal) ══ */}
      <div style={{
        ...textureStyle,
        clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
        transformOrigin: 'top center',
        transform: step >= 2 ? 'rotateX(-180deg)' : 'rotateX(0deg)',
        zIndex: 4,
        boxShadow: 'inset 0 -2px 10px rgba(0,0,0,0.3)',
      }} />

      {/* ══ SELLO ══ */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: step === 1 
          ? 'translate(-50%, -50%) scale(1.2)' 
          : step >= 2 
            ? 'translate(-50%, -50%) scale(0)' 
            : 'translate(-50%, -50%) scale(1)',
        opacity: step >= 1 ? 0 : 1,
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease 0.1s',
        zIndex: 10,
      }}>
        {/* Sombra de proyección del sello ajustada */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '128px', height: '128px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)',
          filter: 'blur(6px)',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
        }} />
        
        {/* Tamaño de imagen del sello ajustado */}
        <img
          src={sealSrc}
          alt="Sello de la Invitación"
          style={{
            width: '220px', height: '220px',
            maxWidth: '55vw', maxHeight: '55vw',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))'
          }}
        />
      </div>
    </div>
  );
};

export default WelcomeCover;
import React, { useState, useRef } from 'react';
import theme from '../../theme';

export const WelcomeCover = ({
  onOpen,
  sealSrc = './assets/images/selloi.png',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openedRef = useRef(false);

  const C = theme.boda.colors;
  const F = theme.boda.fonts;

  const bgColor = '#FBF9F6';

  const handleOpen = () => {
    if (openedRef.current) return;
    openedRef.current = true;
    setIsOpen(true);
    setTimeout(() => onOpen?.(), 1100);
  };

  const paperTexture = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`;
  
  const geometricPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' fill='none' stroke='%23FFFFFF' stroke-width='0.5' opacity='0.07'/%3E%3Ccircle cx='40' cy='40' r='20' fill='none' stroke='%23FFFFFF' stroke-width='0.5' opacity='0.05'/%3E%3C/svg%3E")`;

  return (
    <div
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Abrir invitación"
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        backgroundColor: bgColor,
        backgroundImage: paperTexture,
        opacity: isOpen ? 0 : 1,
        transition: 'opacity 0.8s ease 0.5s',
        pointerEvents: isOpen ? 'none' : 'auto',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* ══ ESQUINEROS AZULES ══ */}
      <div style={{
        position: 'absolute', bottom: 25, left: 25, width: 35, height: 35,
        borderBottom: `2px solid ${C.accent}`, borderLeft: `2px solid ${C.accent}`,
        opacity: isOpen ? 0 : 1, transition: 'opacity 0.4s'
      }} />
      <div style={{
        position: 'absolute', bottom: 25, right: 25, width: 35, height: 35,
        borderBottom: `2px solid ${C.accent}`, borderRight: `2px solid ${C.accent}`,
        opacity: isOpen ? 0 : 1, transition: 'opacity 0.4s'
      }} />

      {/* ══ CONTENIDO DE TEXTO ══ */}
      <div style={{
        position: 'absolute', top: '58%', left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        opacity: isOpen ? 0 : 1, transition: 'opacity 0.4s ease',
        textAlign: 'center', padding: '0 20px'
      }}>
        <p style={{
          fontFamily: F.body, fontSize: '11px',
          letterSpacing: '0.25em', color: '#666', margin: '0 0 20px 0',
          fontWeight: 400, textTransform: 'uppercase'
        }}>
          Nos honraría tu presencia
        </p>

        {/* Línea azul separadora */}
        <div style={{ width: '30px', height: '1px', background: C.accent, opacity: 0.8, marginBottom: '20px' }} />

        <h1 style={{
          fontFamily: F.heading, fontSize: '30px',
          color: C.dark, margin: '0 0 20px 0', fontWeight: 600,
          letterSpacing: '0.08em'
        }}>
          TE INVITAMOS
        </h1>

        {/* Línea azul separadora */}
        <div style={{ width: '30px', height: '1px', background: C.accent, opacity: 0.8, marginBottom: '25px' }} />

        <p style={{
          fontFamily: F.body, fontSize: '11px',
          letterSpacing: '0.15em', color: C.dark, margin: '0 0 10px 0',
          fontWeight: 500
        }}>
          PARA CELEBRAR NUESTRA UNIÓN
        </p>
      </div>

      {/* ══ SOLAPA DEL SOBRE ══ */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '48%',
        perspective: '1500px', zIndex: 10,
      }}>
        <div style={{
          width: '100%', height: '100%',
          transformOrigin: 'top center',
          transform: isOpen ? 'rotateX(-175deg)' : 'rotateX(0deg)',
          transition: 'transform 1s cubic-bezier(0.65, 0, 0.15, 1)',
          transformStyle: 'preserve-3d',
        }}>
          {/* Capa Base (Borde de la solapa) */}
          <div style={{
            position: 'absolute', inset: '-1px',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            background: `linear-gradient(135deg, ${C.primary}, ${C.dark} 40%, ${C.primary})`,
            boxShadow: isOpen ? '0 30px 60px rgba(0,0,0,0.3)' : '0 15px 35px rgba(29, 40, 73, 0.25)',
          }}>
            {/* Capa Interior */}
            <div style={{
              position: 'absolute',
              top: '0', left: '2px', right: '2px', bottom: '2px',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: `linear-gradient(160deg, ${C.dark} 0%, ${C.primary} 60%, ${C.secondary} 100%)`,
              backgroundImage: `${geometricPattern}, ${paperTexture}`,
              backgroundSize: '100px 100px, 150px 150px',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at top center, transparent 30%, ${C.dark} 120%)`,
                opacity: 0.7
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* ══ SELLO ══ */}
      <div style={{
        position: 'absolute', top: '48%', left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: isOpen ? 0 : 1,
        transition: 'opacity 0.3s ease, transform 0.6s ease',
        zIndex: 15,
      }}>
        <div style={{
          position: 'absolute', top: '55%', left: '50%',
          width: '50px', height: '20px',
          background: 'rgba(29, 40, 73, 0.3)',
          filter: 'blur(6px)',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
        }} />
        
        <img
          src={sealSrc}
          alt="Sello"
          style={{
            width: '90px', 
            height: '90px', 
            objectFit: 'contain',
            filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.4))',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
    </div>
  );
};

export default WelcomeCover;
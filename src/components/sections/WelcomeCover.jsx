import React, { useState, useEffect, useRef } from 'react';

/*
 * WelcomeCover — Animación cinematográfica de boda
 *
 * Fuentes (añadir en index.html):
 * <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,600&family=IM+Fell+English+SC&display=swap" rel="stylesheet"/>
 */

export const WelcomeCover = ({ onOpen }) => {
  const [phase, setPhase] = useState('idle'); // idle | cracking | opening | zooming | done
  const burstRef      = useRef(null);
  const petalLayerRef = useRef(null);
  const sceneRef      = useRef(null);
  const logoRef       = useRef(null);
  const openedRef     = useRef(false);

  const COLORS = [
    'rgba(143,82,96,.65)',  'rgba(235,217,217,.75)',
    'rgba(197,160,89,.55)', 'rgba(94,25,41,.45)',
    'rgba(223,192,141,.65)','rgba(175,120,130,.6)',
    'rgba(163,132,74,.5)',
  ];

  /* ── Spawn pétalos de fondo ── */
  useEffect(() => {
    const layer = petalLayerRef.current;
    if (!layer) return;
    for (let i = 0; i < 22; i++) {
      const p   = document.createElement('div');
      const sz  = 7  + Math.random() * 15;
      const dur = 6  + Math.random() * 9;
      const dx  = (Math.random() - .5) * 160;
      const dr  = (Math.random() - .5) * 540;
      Object.assign(p.style, {
        position     : 'absolute',
        top          : '-60px',
        left         : `${Math.random() * 100}%`,
        width        : `${sz}px`,
        height       : `${sz * 1.5}px`,
        background   : COLORS[Math.floor(Math.random() * COLORS.length)],
        borderRadius : Math.random() > .5 ? '60% 40% 60% 40%' : '40% 60% 40% 60%',
        '--dx'       : `${dx}px`,
        '--dr'       : `${dr}deg`,
        animation    : `wcFall ${dur}s ${Math.random() * 5}s linear infinite`,
        pointerEvents: 'none',
      });
      layer.appendChild(p);
    }
  }, []);

  /* ── Explosión de pétalos (canvas) ── */
  const burstPetals = () => {
    const canvas = burstRef.current;
    if (!canvas) return;
    canvas.style.opacity = '1';
    const ctx = canvas.getContext('2d');
    const cx = 180, cy = 180;
    const ps = Array.from({ length: 70 }, () => {
      const a = Math.random() * Math.PI * 2;
      const sp = 2.5 + Math.random() * 7;
      return {
        x: cx, y: cy,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        sz  : 3 + Math.random() * 11,
        col : COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 1, decay: .018 + Math.random() * .022,
        rot : Math.random() * 360, vr: 3 + Math.random() * 7,
      };
    });
    const draw = () => {
      ctx.clearRect(0, 0, 360, 360);
      let alive = false;
      for (const p of ps) {
        if (p.life <= 0) continue;
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI / 180);
        ctx.globalAlpha = p.life * .9;
        ctx.fillStyle   = p.col;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.sz * .45, p.sz, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        p.x += p.vx; p.y += p.vy;
        p.vy += .14;  p.vx *= .975;
        p.rot += p.vr; p.life -= p.decay;
      }
      if (alive) requestAnimationFrame(draw);
      else canvas.style.opacity = '0';
    };
    draw();
  };

  /* ── Shake del sello ── */
  const shakeSeal = () => {
    const el = document.getElementById('wc-seal');
    if (!el) return;
    const moves = [
      { x: 5, y: -3 }, { x: -6, y: 2 }, { x: 4, y: -5 },
      { x: -5, y: 3  }, { x: 3, y: -2 }, { x: 0, y:  0 },
    ];
    let i = 0;
    const go = () => {
      if (i >= moves.length) return;
      const m = moves[i++];
      el.style.transform = `translate(calc(-50% + ${m.x}px), calc(-50% + ${m.y}px)) scale(1.2)`;
      setTimeout(go, 65);
    };
    go();
  };

  /* ── Secuencia principal ── */
  const handleOpen = () => {
    if (openedRef.current) return;
    openedRef.current = true;
    setPhase('cracking');

    // 1. Shake sello
    shakeSeal();

    // 2. Burst + solapa abre
    setTimeout(() => {
      setPhase('opening');
      burstPetals();
    }, 500);

    // 3. El sobre hace zoom hacia cámara
    setTimeout(() => {
      setPhase('zooming');
      if (sceneRef.current) {
        sceneRef.current.style.transition = 'transform 1.1s cubic-bezier(.55,0,.1,1), opacity .9s ease .25s';
        sceneRef.current.style.transform  = 'scale(14)';
        sceneRef.current.style.opacity    = '0';
      }
      if (logoRef.current) {
        logoRef.current.style.transition = 'opacity .5s ease';
        logoRef.current.style.opacity    = '0';
      }
    }, 1900);

    // 4. Callback → HeroSection
    setTimeout(() => {
      setPhase('done');
      onOpen?.();
    }, 3200);
  };

  if (phase === 'done') return null;

  const isOpen   = phase === 'opening' || phase === 'zooming';
  const flapTx   = isOpen ? 'rotateX(-178deg)' : 'rotateX(0deg)';
  const sealTx   = (() => {
    if (phase === 'cracking') return 'translate(-50%,-50%) scale(1.22) rotate(10deg)';
    if (isOpen)               return 'translate(-50%,-50%) scale(.25) rotate(40deg)';
    return 'translate(-50%,-50%)';
  })();

  return (
    <>
      <style>{`
        @keyframes wcFall {
          0%  { transform:translateY(-60px) translateX(0) rotate(0deg) scale(1); opacity:0 }
          6%  { opacity:.7 }
          88% { opacity:.4 }
          100%{ transform:translateY(108vh) translateX(var(--dx)) rotate(var(--dr)) scale(.7); opacity:0 }
        }
        @keyframes wcAppear {
          from { opacity:0; transform:translateY(-12px) }
          to   { opacity:1; transform:translateY(0) }
        }
      `}</style>

      {/* ── Contenedor raíz fijo ── */}
      <div style={{
        position  : 'fixed', inset: 0, zIndex: 100,
        background: '#0d0500',
        display   : 'flex', alignItems: 'center', justifyContent: 'center',
        perspective: '1400px',
      }}>

        {/* Fondo papel */}
        <div style={{
          position  : 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 90% at 50% 45%,#FAF3E0 0%,#EFE2C0 50%,#D5BB90 100%)',
          animation : 'wcAppear 3s ease .2s both',
        }}>
          <div style={{
            position       : 'absolute', inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E")`,
            backgroundSize : '200px 200px',
            opacity        : .04, mixBlendMode: 'multiply', pointerEvents: 'none',
          }} />
        </div>

        {/* Viñeta */}
        <div style={{
          position  : 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 75% 80% at 50% 50%,transparent 40%,rgba(45,20,5,.35) 100%)',
        }} />

        {/* Marco esquinas */}
        <div style={{
          position: 'absolute', inset: '18px', pointerEvents: 'none',
          border  : '.4px solid rgba(94,25,41,.15)',
          animation: 'wcAppear 1.2s ease 1.8s both',
        }}>
          {[
            { top: -1, left: -1,  borderTop: '1px solid', borderLeft:   '1px solid' },
            { top: -1, right: -1, borderTop: '1px solid', borderRight:  '1px solid' },
            { bottom: -1, left: -1,  borderBottom: '1px solid', borderLeft:  '1px solid' },
            { bottom: -1, right: -1, borderBottom: '1px solid', borderRight: '1px solid' },
          ].map((s, i) => (
            <div key={i} style={{
              position: 'absolute', width: 22, height: 22,
              borderColor: 'rgba(94,25,41,.5)', borderStyle: 'solid', borderWidth: 0, ...s,
            }} />
          ))}
        </div>

        {/* Pétalos */}
        <div ref={petalLayerRef} style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 4,
        }} />

        {/* Cortina blanca de salida */}
        <div style={{
          position  : 'fixed', inset: 0, zIndex: 150,
          background: '#FAF3E0',
          opacity   : phase === 'zooming' ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 1.1s ease .7s',
        }} />

        {/* ── Contenido central ── */}
        <div style={{
          position  : 'relative', zIndex: 10,
          display   : 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
          animation : 'wcAppear 1.4s ease 1s both',
        }}>

          {/* Logo / monograma */}
          <div ref={logoRef} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
            transition: 'opacity .5s ease',
          }}>
            <img
              src="./assets/images/logonovios.png"
              alt="Monograma"
              style={{ width: 150, height: 80, objectFit: 'contain', opacity: .88 }}
            />
            <p style={{
              fontFamily  : "'IM Fell English SC', serif",
              fontSize    : '8.5px', letterSpacing: '.4em',
              color       : 'rgba(94,25,41,.6)', textTransform: 'uppercase',
            }}>
              Te invitan a celebrar
            </p>
          </div>

          {/* ── SOBRE ── */}
          <div ref={sceneRef} style={{ position: 'relative', width: 280, height: 192 }}>

            {/* Cuerpo SVG */}
            <svg viewBox="0 0 280 192" width="280" height="192" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
              <defs>
                <linearGradient id="wc-bg1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#EDDFCA"/>
                  <stop offset="100%" stopColor="#DDD0B5"/>
                </linearGradient>
                <linearGradient id="wc-fl" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#C5AD88"/>
                  <stop offset="100%" stopColor="#EDDFCA" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="wc-fr" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%"   stopColor="#C5AD88"/>
                  <stop offset="100%" stopColor="#EDDFCA" stopOpacity="0"/>
                </linearGradient>
                <filter id="wc-es" x="-10%" y="-8%" width="120%" height="128%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#2A0E02" floodOpacity=".22"/>
                </filter>
              </defs>
              <ellipse cx="140" cy="200" rx="118" ry="12" fill="rgba(80,35,10,.1)"/>
              <rect x="0" y="0" width="280" height="192" rx="3" fill="url(#wc-bg1)" filter="url(#wc-es)"/>
              <path d="M0,0 L140,100 L0,192Z"   fill="url(#wc-fl)" opacity=".5"/>
              <path d="M280,0 L140,100 L280,192Z" fill="url(#wc-fr)" opacity=".5"/>
              <path d="M0,192 L140,100 L280,192Z" fill="#BBA878" opacity=".28"/>
              <rect x="0" y="0" width="280" height="192" rx="3" fill="none" stroke="#175294" strokeWidth=".5" strokeOpacity=".18"/>
              <rect x="9" y="9" width="262" height="174" rx="1" fill="none" stroke="#74B0D3" strokeWidth=".3" strokeOpacity=".22"/>
            </svg>

            {/* Solapa 3D */}
            <div style={{
              position      : 'absolute', top: 0, left: 0,
              width         : '280px', height: '103px',
              transformOrigin: '140px 0',
              transformStyle : 'preserve-3d',
              transform      : flapTx,
              transition     : 'transform 1s cubic-bezier(.4,0,.2,1)',
            }}>
              <svg width="280" height="103" viewBox="0 0 280 103" style={{ overflow: 'visible', display: 'block' }}>
                <defs>
                  <linearGradient id="wc-fp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#E8D9BC"/>
                    <stop offset="100%" stopColor="#CABB99"/>
                  </linearGradient>
                </defs>
                <path d="M0,0 L140,100 L280,0Z" fill="url(#wc-fp)" stroke="#175294" strokeWidth=".5" strokeOpacity=".18"/>
                <path d="M0,0 L140,100 L280,0Z" fill="#C0AD85" opacity=".14"/>
                <text x="140" y="30" textAnchor="middle"
                  fontFamily="'IM Fell English SC',serif" fontSize="8"
                  fill="#74B0D3" fillOpacity=".55" letterSpacing="5">
                  ✦  ✦  ✦
                </text>
              </svg>
            </div>

            {/* Sello */}
            <div
              id="wc-seal"
              onClick={handleOpen}
              style={{
                position  : 'absolute', left: '140px', top: '100px',
                transform : sealTx,
                opacity   : isOpen ? 0 : 1,
                zIndex    : 20, cursor: 'pointer',
                filter    : 'drop-shadow(0 5px 10px rgba(40,8,2,.6))',
                transition: 'transform .45s ease, opacity .6s ease',
              }}
            >
              <img
                src="./assets/images/sello2_m.png"
                alt="Sello de lacre"
                style={{ width: 110, height: 110, objectFit: 'contain' }}
              />
            </div>

            {/* Canvas burst */}
            <canvas
              ref={burstRef}
              width="360" height="360"
              style={{
                position     : 'absolute',
                left         : '140px', top: '100px',
                transform    : 'translate(-50%,-50%)',
                pointerEvents: 'none', zIndex: 25, opacity: 0,
              }}
            />
          </div>

          {/* CTA */}
          <div
            onClick={handleOpen}
            style={{
              display      : 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
              cursor       : 'pointer', userSelect: 'none',
              opacity      : phase === 'idle' ? 1 : 0,
              transform    : phase === 'idle' ? 'translateY(0)' : 'translateY(10px)',
              transition   : 'opacity .5s ease, transform .5s ease',
              animation    : 'wcAppear 1s ease 2.2s both',
            }}
          >
            <span style={{
              fontFamily  : "'IM Fell English SC', serif",
              fontSize    : '9px', letterSpacing: '.48em',
              color       : '#175294', textTransform: 'uppercase',
            }}>
              Abrir Invitación
            </span>
            <div style={{ width: 84, height: '.5px', background: 'rgba(23,82,148,.4)' }} />
          </div>

        </div>
      </div>
    </>
  );
};

export default WelcomeCover;
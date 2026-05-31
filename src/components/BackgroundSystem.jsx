import { useEffect, useRef } from 'react';
import './BackgroundSystem.css';

const SPECKLES = [
  { top: '8%',  left: '6%',  size: 2, delay: 0   },
  { top: '14%', left: '82%', size: 3, delay: 2.1 },
  { top: '22%', left: '44%', size: 2, delay: 1.4 },
  { top: '31%', left: '18%', size: 2, delay: 3.0 },
  { top: '38%', left: '91%', size: 2, delay: 0.7 },
  { top: '44%', left: '32%', size: 3, delay: 1.9 },
  { top: '52%', left: '67%', size: 2, delay: 0.3 },
  { top: '58%', left: '12%', size: 2, delay: 2.8 },
  { top: '65%', left: '78%', size: 3, delay: 1.1 },
  { top: '71%', left: '54%', size: 2, delay: 3.5 },
  { top: '76%', left: '26%', size: 2, delay: 0.9 },
  { top: '82%', left: '88%', size: 2, delay: 2.4 },
  { top: '88%', left: '40%', size: 3, delay: 1.6 },
  { top: '92%', left: '14%', size: 2, delay: 0.5 },
  { top: '17%', left: '60%', size: 2, delay: 3.2 },
  { top: '48%', left: '4%',  size: 2, delay: 1.8 },
  { top: '26%', left: '74%', size: 2, delay: 2.6 },
  { top: '62%', left: '96%', size: 2, delay: 0.2 },
  { top: '85%', left: '58%', size: 3, delay: 1.3 },
  { top: '6%',  left: '36%', size: 2, delay: 3.7 },
];

export default function BackgroundSystem() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = cursorRef.current;
    if (!el) return;

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;
    let rafId;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__base" />
      <div className="bg__grid" />
      <div className="bg__diagonal" />

      <div className="bg__blob bg__blob--gold" />
      <div className="bg__blob bg__blob--navy" />
      <div className="bg__blob bg__blob--navy2" />

      <div className="bg__cursor-glow" ref={cursorRef} />

      <div className="bg__shimmer bg__shimmer--1" />
      <div className="bg__shimmer bg__shimmer--2" />

      <div className="bg__speckles">
        {SPECKLES.map((s, i) => (
          <span
            key={i}
            className="bg__speckle"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="bg__grain" />
    </div>
  );
}

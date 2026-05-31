import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

/**
 * Wraps a single interactive element and gives it a subtle magnetic pull
 * toward the cursor. Desktop / fine-pointer only; disabled for touch and
 * reduced-motion. Movement is transform-only (GPU friendly) via rAF.
 */
export default function MagneticElement({
  children,
  strength = 0.3,
  radius = 90,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const frame = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const reach = radius + rect.width / 2;

      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (dist < reach) {
          el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
        } else {
          el.style.transform = 'translate(0, 0)';
        }
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame.current);
      el.style.transform = 'translate(0, 0)';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.style.transform = '';
    };
  }, [reduced, strength, radius]);

  return (
    <Tag ref={ref} className={`magnetic ${className}`.trim()} style={{ willChange: 'transform' }}>
      {children}
    </Tag>
  );
}

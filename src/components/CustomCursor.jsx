import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

// Text shown inside the ring per state (empty = no label).
const CURSOR_LABELS = {
  view: 'View',
  image: 'View',
  project: 'View',
  drag: 'Drag',
  start: 'Start',
  visit: 'Visit',
  audio: 'Audio',
  lab: 'Lab',
};

/**
 * Higgins Digital Labs custom cursor.
 *
 * Built on the base cursor the user added (dot + lerped ring), extended with
 * intelligent hover states driven by `data-cursor` attributes and element type.
 *
 * - Desktop / fine-pointer only. Touch devices keep the native cursor.
 * - Native cursor is hidden via `html.has-custom-cursor` (set here), so it is
 *   only ever hidden while the custom cursor is actually active.
 * - Persists across route changes (mounted above the router).
 * - Respects reduced motion: ring follows instantly, no scale transitions.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  // Refs the event listeners read without forcing the effect to re-subscribe.
  const variantRef = useRef('default');
  const hiddenRef = useRef(true);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState('default');
  const [hidden, setHidden] = useState(true);

  // Enable only on fine pointers (mouse / trackpad).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(pointer: fine)');
    const apply = (matches) => setEnabled(matches);
    apply(mql.matches);
    const onChange = (e) => apply(e.matches);
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);

  // Toggle the global flag that hides the native cursor.
  useEffect(() => {
    const root = document.documentElement;
    if (enabled) root.classList.add('has-custom-cursor');
    else root.classList.remove('has-custom-cursor');
    return () => root.classList.remove('has-custom-cursor');
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf;

    // Dot is locked to the pointer (instant). Ring follows with only a hair of
    // smoothing so it reads as tight, not floaty.
    const RING_FOLLOW = 0.6;

    const setDot = () => {
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      setDot();
      if (reduced) {
        rx = x;
        ry = y;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      if (hiddenRef.current) {
        hiddenRef.current = false;
        setHidden(false);
      }
    };

    const tick = () => {
      // Snap to pointer once within a pixel to kill perceptible trailing.
      rx += (x - rx) * RING_FOLLOW;
      ry += (y - ry) * RING_FOLLOW;
      if (Math.abs(x - rx) < 0.5) rx = x;
      if (Math.abs(y - ry) < 0.5) ry = y;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    if (!reduced) tick();
    else setDot();

    // Determine the cursor state from the element under the pointer.
    const resolveVariant = (el) => {
      if (!el || !el.closest) return 'default';
      const explicit = el.closest('[data-cursor]');
      if (explicit) return explicit.getAttribute('data-cursor') || 'default';
      if (el.closest('input, textarea, select, [contenteditable="true"]')) {
        return 'text';
      }
      if (el.closest('img, .browser-frame, picture')) return 'image';
      if (el.closest('a, button, [role="button"]')) return 'link';
      return 'default';
    };

    const onOver = (e) => {
      const next = resolveVariant(e.target);
      if (next !== variantRef.current) {
        variantRef.current = next;
        setVariant(next);
      }
    };

    const onLeaveWindow = () => {
      hiddenRef.current = true;
      setHidden(true);
    };
    const onEnterWindow = () => {
      hiddenRef.current = false;
      setHidden(false);
    };

    // Pressed state for a subtle click reaction.
    const onDown = () => ring.classList.add('cursor__ring--down');
    const onUp = () => ring.classList.remove('cursor__ring--down');

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeaveWindow);
    document.addEventListener('mouseenter', onEnterWindow);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeaveWindow);
      document.removeEventListener('mouseenter', onEnterWindow);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={`cursor cursor--${variant}${hidden ? ' cursor--hidden' : ''}`}
      aria-hidden="true"
    >
      <div ref={ringRef} className="cursor__ring">
        <span className="cursor__label">{CURSOR_LABELS[variant] || ''}</span>
      </div>
      <div ref={dotRef} className="cursor__dot" />
    </div>
  );
}

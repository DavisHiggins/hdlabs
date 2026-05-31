import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import './SlicedScreenshotReveal.css';

gsap.registerPlugin(ScrollTrigger);

const SLICES = 8;

/**
 * A screenshot that breaks into horizontal slices and reassembles into a clean
 * image as it scrolls into view. Cinematic, not glitchy — scrubbed to scroll.
 */
export default function SlicedScreenshotReveal({ src, alt = '', url = 'higgins-digital-labs', label }) {
  const wrapRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const slices = wrap.querySelectorAll('.slice__row');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        slices,
        { xPercent: (i) => (i % 2 === 0 ? -16 : 16), opacity: 0.25 },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'none',
          stagger: 0.04,
          scrollTrigger: {
            trigger: wrap,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 0.6,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div className="slice browser-frame" ref={wrapRef} data-cursor="view">
      <div className="browser-frame__bar">
        <div className="browser-frame__dots"><span /><span /><span /></div>
        <span className="browser-frame__url">{url}</span>
        <span className="slice__chip">SCROLL TO REASSEMBLE</span>
      </div>
      <div className="slice__stage" role="img" aria-label={alt}>
        {Array.from({ length: SLICES }).map((_, i) => (
          <span
            key={i}
            className="slice__row"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `100% ${SLICES * 100}%`,
              backgroundPositionY: `${(i / (SLICES - 1)) * 100}%`,
            }}
          />
        ))}
        <span className="slice__overlay" aria-hidden="true" />
        {label && <span className="slice__label">{label}</span>}
      </div>
    </div>
  );
}

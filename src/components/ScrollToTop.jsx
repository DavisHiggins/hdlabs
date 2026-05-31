import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInteraction } from '../context/InteractionContext.jsx';

/**
 * On every route change: jump to the top (window + Lenis), then refresh GSAP
 * ScrollTrigger once the new page has laid out so pinned/scrubbed scenes
 * recalculate their start/end positions cleanly. Also fires the soft
 * transition sound (no-op unless the user has enabled sound).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const { play } = useInteraction();

  useEffect(() => {
    play('transition');
    const lenis = window.__lenis;

    // If a hash target is present (e.g. /work#engine), scroll to it after the
    // new page lays out; otherwise jump to the top.
    if (!hash) {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }

    const t1 = setTimeout(() => ScrollTrigger.refresh(), 120);
    const t2 = setTimeout(() => {
      ScrollTrigger.refresh();
      if (hash) {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: -80 });
          else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 520);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, hash, play]);

  return null;
}

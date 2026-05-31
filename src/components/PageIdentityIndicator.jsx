import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { pageIdentity } from '../data/siteContent.js';
import './PageIdentityIndicator.css';

export default function PageIdentityIndicator() {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);

  const identity = pageIdentity[pathname] || pageIdentity['/'];

  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (frame == null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  const sections = identity.sections;
  const activeIndex = Math.min(
    sections.length - 1,
    Math.floor(progress * sections.length + 0.0001)
  );

  return (
    <>
      {/* Thin top scroll-progress bar (visible on all viewports) */}
      <div className="scroll-progress" aria-hidden="true">
        <span
          className="scroll-progress__fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Side page-identity panel (desktop only) */}
      <aside className="page-id" aria-hidden="true">
        <span className="page-id__label">{identity.label}</span>
        <ul className="page-id__sections">
          {sections.map((section, i) => (
            <li
              key={section}
              className={`page-id__section${i === activeIndex ? ' page-id__section--active' : ''}${i < activeIndex ? ' page-id__section--past' : ''}`}
            >
              <span className="page-id__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="page-id__name">{section}</span>
            </li>
          ))}
        </ul>
        <span className="page-id__pct">{Math.round(progress * 100)}%</span>
      </aside>
    </>
  );
}

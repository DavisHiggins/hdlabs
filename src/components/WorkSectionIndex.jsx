import { useEffect, useState } from 'react';
import './WorkSectionIndex.css';

const ITEMS = [
  { id: 'engine', label: 'Engine', num: '01' },
  { id: 'timeline', label: 'Timeline', num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'focus', label: 'Focus', num: '04' },
  { id: 'launch', label: 'Launch', num: '05' },
];

export default function WorkSectionIndex() {
  const [active, setActive] = useState('engine');

  useEffect(() => {
    const observers = [];
    ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(item.id); },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="work-index" aria-label="Work sections">
      <span className="work-index__label">HDL / Work</span>
      <ul className="work-index__list">
        {ITEMS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`work-index__item${active === item.id ? ' work-index__item--active' : ''}`}
              onClick={() => go(item.id)}
              data-cursor="button"
            >
              <span className="work-index__num">{item.num}</span>
              <span className="work-index__name">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

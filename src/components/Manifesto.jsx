import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import './Manifesto.css';

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  { text: 'The next version of', accent: false },
  { text: 'web design', accent: true },
  { text: 'is not louder.', accent: false },
  { text: 'It is', accent: false },
  { text: 'sharper, faster,', accent: true },
  { text: 'more immersive,', accent: false },
  { text: 'more intentional.', accent: true },
];

export default function Manifesto() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from('.manifesto__line', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.manifesto__body',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 0.8,
        },
      });

      gsap.from('.manifesto__sub', {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.manifesto__sub',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="manifesto" ref={sectionRef}>
      <div className="manifesto__inner">
        <span className="section-label">Manifesto</span>

        <div className="manifesto__body">
          {LINES.map((line, i) => (
            <span key={i} className="manifesto__line-wrap">
              <span className={`manifesto__line${line.accent ? ' manifesto__line--accent' : ''}`}>
                {line.text}
              </span>
            </span>
          ))}
        </div>

        <p className="manifesto__sub">
          Higgins Digital Labs is where premium interfaces, motion systems, and
          performance-focused web strategy are tested before they become
          client-ready standards.
        </p>
      </div>
    </section>
  );
}

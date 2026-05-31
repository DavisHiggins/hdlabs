import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '../data/siteContent.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import HDLogo from './HDLogo.jsx';
import './ServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from('.svc-card', {
        y: 60,
        opacity: 0,
        stagger: 0.07,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  }

  return (
    <section className="svc" ref={sectionRef}>
      <div className="svc__inner">
        <div className="svc__head">
          <span className="section-label">Services</span>
          <h1 className="svc__title">
            Services built for <span className="text-gold">speed, trust, and conversion.</span>
          </h1>
          <p className="svc__intro">
            From the first impression to the final deployment, Higgins Digital Labs turns
            scattered ideas into polished web systems — clean structure, fast performance,
            and full source-code ownership upon launch.
          </p>
        </div>

        <div className="svc__grid">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`svc-card${service.featured ? ' svc-card--featured' : ''}`}
              onMouseMove={handleMouseMove}
              data-index={i}
            >
              <div className="svc-card__glow" />
              {service.featured && (
                <>
                  <span className="svc-card__scan" aria-hidden="true" />
                  <span className="svc-card__watermark" aria-hidden="true">
                    <HDLogo size={120} decorative />
                  </span>
                </>
              )}
              <div className="svc-card__number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="svc-card__title">{service.title}</h3>
              <p className="svc-card__desc">{service.desc}</p>
              <div className="svc-card__arrow">→</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

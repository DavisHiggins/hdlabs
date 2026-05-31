import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import './StartProject.css';

gsap.registerPlugin(ScrollTrigger);

export default function StartProject() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from('.start__line', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.start__title',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.start__gold-line', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.start__title',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.start__sub, .start__cta, .start__details', {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.start__sub',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="start" id="start" ref={sectionRef}>
      <div className="start__bg" aria-hidden="true">
        <div className="start__bg-glow" />
      </div>

      <div className="start__inner">
        <span className="section-label">Start a Project</span>

        <h2 className="start__title">
          <span className="start__line-wrap">
            <span className="start__line">Ready for a website</span>
          </span>
          <span className="start__line-wrap">
            <span className="start__line">that reflects the</span>
          </span>
          <span className="start__line-wrap">
            <span className="start__line start__line--accent">quality of the business?</span>
          </span>
        </h2>

        <span className="start__gold-line" aria-hidden="true" />

        <p className="start__sub">
          Send the current website, goals, and brand assets. Higgins Digital reviews
          the details and sends a quote within 1 – 2 days.
        </p>

        <div className="start__cta">
          <a
            href="mailto:davishiggins@higginsd.com?subject=New%20Project%20Inquiry"
            className="start__btn start__btn--primary no-motion-cta"
            data-cursor="button"
            data-no-magnetic="true"
          >
            <span>Start a Project</span>
            <span className="start__btn-arrow">→</span>
          </a>
          <a
            href="mailto:davishiggins@higginsd.com"
            className="start__btn start__btn--ghost"
            data-cursor="button"
          >
            <span>davishiggins@higginsd.com</span>
          </a>
        </div>

        <div className="start__details">
          <div className="start__detail">
            <span className="start__detail-label">Response Time</span>
            <span className="start__detail-value">1 – 2 days</span>
          </div>
          <div className="start__detail">
            <span className="start__detail-label">Based In</span>
            <span className="start__detail-value">Charlotte, NC</span>
          </div>
          <div className="start__detail">
            <span className="start__detail-label">Working With</span>
            <span className="start__detail-value">Real businesses</span>
          </div>
        </div>
      </div>
    </section>
  );
}

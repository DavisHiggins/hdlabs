import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import HDLogo from './HDLogo.jsx';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const ghostRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const inner = innerRef.current;
    const ghost = ghostRef.current;
    if (!section || !inner) return;

    const ctx = gsap.context(() => {
      gsap.to(inner, {
        scale: 0.94,
        opacity: 0.35,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      if (ghost) {
        gsap.to(ghost, {
          xPercent: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const line = {
    hidden: { opacity: 0, y: 50, clipPath: 'inset(0 0 100% 0)' },
    visible: {
      opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)',
      transition: { duration: 1.1, ease: EASE },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__ghost" ref={ghostRef} aria-hidden="true">
        LABS
      </div>

      <div className="hero__frame" aria-hidden="true">
        <span className="hero__corner hero__corner--tl" />
        <span className="hero__corner hero__corner--tr" />
        <span className="hero__corner hero__corner--bl" />
        <span className="hero__corner hero__corner--br" />
      </div>

      <motion.div
        className="hero__inner"
        ref={innerRef}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__eyebrow" variants={item}>
          <HDLogo size={20} decorative />
          <span>Higgins Digital / Experimental Build</span>
          <span className="hero__eyebrow-dot" />
        </motion.div>

        <h1 className="hero__title">
          <motion.span className="hero__title-line" variants={line}>
            Higgins Digital
          </motion.span>
          <motion.span className="hero__title-line hero__title-line--accent" variants={line}>
            Labs
          </motion.span>
        </h1>

        <motion.p className="hero__tagline" variants={item}>
          High-performance websites, pushed into cinematic motion.
        </motion.p>

        <motion.p className="hero__lead" variants={item}>
          An experimental digital studio environment exploring advanced motion,
          premium interfaces, and performance-focused websites for real businesses.
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <Link to="/work" className="hero__btn hero__btn--primary">
            <span>View the Work</span>
            <span className="hero__btn-arrow">→</span>
          </Link>
          <Link to="/start" className="hero__btn hero__btn--ghost">
            <span>Start a Project</span>
          </Link>
        </motion.div>

        <motion.div className="hero__meta" variants={item}>
          <div className="hero__meta-item">
            <span className="hero__meta-label">Discipline</span>
            <span className="hero__meta-value">Web Studio</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-label">Based</span>
            <span className="hero__meta-value">Charlotte, NC</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-label">Building</span>
            <span className="hero__meta-value">Since 2024</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { rebuildTimelineSteps } from '../data/siteContent.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import './RebuildTimeline.css';

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1];

export default function RebuildTimeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const reduced = useReducedMotion();

  // Gold rail draws in as the section scrolls through the viewport.
  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="rbt section" id="timeline" ref={sectionRef}>
      <div className="page-shell">
        <div className="rbt__head">
          <span className="section-label">Rebuild Timeline</span>
          <h2 className="rbt__title">
            How a site goes from <span className="text-gold">audit to launch.</span>
          </h2>
          <span className="rbt__micro">TRANSFORMATION PIPELINE: READY</span>
        </div>

        <div className="rbt__track">
          <span className="rbt__rail" aria-hidden="true">
            <span className="rbt__rail-fill" ref={lineRef} />
          </span>

          <ol className="rbt__steps">
            {rebuildTimelineSteps.map((step, i) => (
              <motion.li
                key={step.number}
                className="rbt-step"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 2) * 0.05 }}
              >
                <span className="rbt-step__node" aria-hidden="true" />
                <div className="rbt-step__card">
                  <div className="rbt-step__top">
                    <span className="rbt-step__num">{step.number}</span>
                    <span className="rbt-step__status">ACTIVE</span>
                  </div>
                  <h3 className="rbt-step__title">{step.title}</h3>
                  <p className="rbt-step__copy">{step.copy}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

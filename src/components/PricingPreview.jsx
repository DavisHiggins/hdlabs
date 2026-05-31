import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pricingTiers } from '../data/siteContent.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import './PricingPreview.css';

gsap.registerPlugin(ScrollTrigger);

export default function PricingPreview() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from('.pr-card', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pr__grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="pr" ref={sectionRef}>
      <div className="pr__inner">
        <div className="pr__head">
          <span className="section-label">Pricing</span>
          <h1 className="pr__title">
            Premium web systems <span className="text-gold">without agency bloat.</span>
          </h1>
          <p className="pr__intro">
            Every build is scoped around the business, the current site, and the level of
            transformation required. Send the project details and Higgins Digital responds
            with a quote within 1 – 2 days.
          </p>
        </div>

        <div className="pr__grid">
          {pricingTiers.map((tier) => (
            <article
              key={tier.id}
              className={`pr-card${tier.featured ? ' pr-card--featured' : ''}`}
              data-cursor="button"
            >
              {tier.featured && (
                <span className="pr-card__badge">Recommended</span>
              )}

              <div className="pr-card__head">
                <h3 className="pr-card__name">{tier.name}</h3>
                <p className="pr-card__tagline">{tier.tagline}</p>
              </div>

              <ul className="pr-card__list">
                {tier.includes.map((item, i) => (
                  <li key={i} className="pr-card__item">
                    <span className="pr-card__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pr-card__foot">
                <div className="pr-card__timeline">
                  <span className="pr-card__timeline-label">Timeline</span>
                  <span className="pr-card__timeline-value">{tier.timeline}</span>
                </div>
                {tier.notes && <p className="pr-card__notes">{tier.notes}</p>}
                <Link to="/start" className="pr-card__cta">
                  {tier.cta}
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="pr__footnote">
          All projects include full source code ownership, mobile-responsive design,
          and domain-ready deployment.
        </p>
      </div>
    </section>
  );
}

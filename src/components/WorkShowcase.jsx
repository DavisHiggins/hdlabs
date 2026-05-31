import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/siteContent.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import './WorkShowcase.css';

gsap.registerPlugin(ScrollTrigger);

export default function WorkShowcase({ onOpen }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.innerWidth < 900) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = totalWidth - viewportWidth + 80;

      gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${distance + 200}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="work" ref={sectionRef}>
      <div className="work__head">
        <span className="section-label">Selected Work</span>
        <p className="work__intro">
          Scroll through recent transformations — outdated digital presence rebuilt
          into clean, conversion-focused systems that match the quality of the work.
        </p>
      </div>

      <div className="work__viewport">
        <div className="work__track" ref={trackRef}>
          {projects.map((project) => (
            <article key={project.id} className={`work-card work-card--${project.tint}`}>
              <header className="work-card__head">
                <span className="work-card__number">{project.number}</span>
                <span className="work-card__category">{project.category}</span>
              </header>

              <div
                className="work-card__visual browser-frame"
                data-cursor="view"
                role="button"
                tabIndex={0}
                aria-label={`Open ${project.name} case study`}
                onClick={() => onOpen?.(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpen?.(project);
                  }
                }}
              >
                <div className="browser-frame__bar">
                  <div className="browser-frame__dots">
                    <span /><span /><span />
                  </div>
                  <span className="browser-frame__url">
                    {project.href && project.href !== '#'
                      ? project.href.replace('https://', '')
                      : 'higgins-digital-labs'}
                  </span>
                  <span className="work-card__chip">
                    {project.status === 'Live' ? 'Live build' : 'Lab feature'}
                  </span>
                </div>
                {/* Real project screenshot — premium framed, never stretched */}
                <img
                  className="browser-frame__shot"
                  src={project.image}
                  alt={`${project.name} — ${project.category}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="work-card__view" aria-hidden="true">View case study</span>
                <div className="work-card__glow" />
              </div>

              <div className="work-card__body">
                <h3 className="work-card__name">
                  {project.name}
                  <span className="work-card__arrow">↗</span>
                </h3>

                <div className="work-card__rows">
                  <div className="work-card__row">
                    <span className="work-card__row-label">Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="work-card__row">
                    <span className="work-card__row-label">Built</span>
                    <p>{project.built}</p>
                  </div>
                  <div className="work-card__row">
                    <span className="work-card__row-label">Outcome</span>
                    <p>{project.outcome}</p>
                  </div>
                </div>

                <div className="work-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="work-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* End indicator */}
          <div className="work__end">
            <span className="work__end-label">End</span>
            <span className="work__end-line" />
            <Link to="/start" className="work__end-cta">
              Start a Project →
            </Link>
          </div>
        </div>
      </div>

      <div className="work__progress">
        <span className="work__progress-track">
          <span className="work__progress-fill" ref={progressRef} />
        </span>
      </div>
    </section>
  );
}

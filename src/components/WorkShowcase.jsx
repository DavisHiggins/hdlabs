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
      gsap.to(track, {
        // Recalculated on refresh so the swipe distance matches the real layout.
        x: () => -(track.scrollWidth - window.innerWidth + 80),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          // Section is exactly one centered viewport, so pinning at top/top means
          // the head + cards + progress are fully in frame before the swipe starts.
          start: 'top top',
          end: () => '+=' + (track.scrollWidth - window.innerWidth + 280),
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      // Refresh once the project screenshots decode so pin start/end are correct.
      const imgs = section.querySelectorAll('.browser-frame__shot');
      let pending = imgs.length;
      const onLoad = () => {
        pending -= 1;
        if (pending <= 0) ScrollTrigger.refresh();
      };
      imgs.forEach((img) => {
        if (img.complete) onLoad();
        else img.addEventListener('load', onLoad, { once: true });
      });
      const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 400);

      return () => clearTimeout(refreshTimer);
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
            <article
              key={project.id}
              className={`work-card work-card--${project.tint}`}
              style={{
                '--mood-accent': project.mood?.accent,
                '--mood-glow': project.mood?.glow,
              }}
            >
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

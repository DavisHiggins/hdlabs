import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { transformationEngineStages } from '../data/siteContent.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import HDLogo from './HDLogo.jsx';
import './TransformationEngine.css';

gsap.registerPlugin(ScrollTrigger);

// One real build that visibly evolves across the four stages.
const ENGINE_SHOT = '/hbgpicture.png';
const STAGES = transformationEngineStages;

// The animated visual panel that re-skins itself per active stage.
function EngineVisual({ active }) {
  const audit = STAGES[0];
  const launch = STAGES[3];
  return (
    <div className={`engine-visual engine-visual--stage-${active}`}>
      <div className="engine-visual__frame browser-frame">
        <div className="browser-frame__bar">
          <div className="browser-frame__dots"><span /><span /><span /></div>
          <span className="browser-frame__url">higgins-digital-labs / rebuild</span>
          <span className="engine-visual__chip">{STAGES[active].micro}</span>
        </div>

        <div className="engine-visual__screen">
          <img
            className="engine-visual__shot"
            src={ENGINE_SHOT}
            alt="Project being rebuilt by the Transformation Engine"
            loading="lazy"
            decoding="async"
          />

          {/* Stage 01 — Audit: diagnostic scan + corner labels */}
          <div className="engine-layer engine-layer--audit" aria-hidden="true">
            <span className="engine-scan" />
            {audit.tags.map((t, i) => (
              <span key={t} className={`engine-audit-label engine-audit-label--${i + 1}`}>
                <span className="engine-audit-dot" />
                {t}
              </span>
            ))}
          </div>

          {/* Stage 02 — Structure: wireframe blocks snap in */}
          <div className="engine-layer engine-layer--structure" aria-hidden="true">
            <span className="engine-wire engine-wire--nav" />
            <span className="engine-wire engine-wire--hero" />
            <span className="engine-wire engine-wire--cta" />
            <span className="engine-wire engine-wire--b1" />
            <span className="engine-wire engine-wire--b2" />
            <span className="engine-wire engine-wire--b3" />
            <span className="engine-wire-line" />
          </div>

          {/* Stage 03 — Interface: gold accent draw + HD seal */}
          <div className="engine-layer engine-layer--interface" aria-hidden="true">
            <span className="engine-accent engine-accent--1" />
            <span className="engine-accent engine-accent--2" />
            <span className="engine-seal">
              <HDLogo size={44} decorative />
            </span>
          </div>

          {/* Stage 04 — Launch: status chips light up + completion line */}
          <div className="engine-layer engine-layer--launch" aria-hidden="true">
            <div className="engine-status">
              {launch.tags.map((t) => (
                <span key={t} className="engine-status__chip">
                  <span className="engine-status__dot" />
                  {t}
                </span>
              ))}
            </div>
            <span className="engine-complete" />
          </div>
        </div>
      </div>

      <span className="engine-visual__watermark" aria-hidden="true">
        <HDLogo size={150} decorative />
      </span>
    </div>
  );
}

// Horizontal/vertical progress rail: AUDIT → STRUCTURE → INTERFACE → LAUNCH
function StatusRail({ active, progressRef }) {
  return (
    <div className="engine-rail" aria-hidden="true">
      <div className="engine-rail__track">
        <span className="engine-rail__fill" ref={progressRef} />
      </div>
      <ol className="engine-rail__steps">
        {STAGES.map((s, i) => (
          <li
            key={s.title}
            className={`engine-rail__step${i <= active ? ' is-done' : ''}${i === active ? ' is-active' : ''}`}
          >
            <span className="engine-rail__node" />
            <span className="engine-rail__name">{s.title}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function TransformationEngine({ variant = 'full' }) {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const teaserScanProgress = useRef(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  // Full version: pin the stage and drive `active` from scroll progress.
  useEffect(() => {
    if (variant !== 'full') return;
    if (reduced) return;
    if (window.innerWidth < 900) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${STAGES.length * 100}%`,
        pin: '.engine__sticky',
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(
            STAGES.length - 1,
            Math.floor(self.progress * STAGES.length)
          );
          setActive(idx);
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });
      return () => trigger.kill();
    }, section);

    return () => ctx.revert();
  }, [variant, reduced]);

  // ── Teaser (Home) ─────────────────────────────────────────────
  if (variant === 'teaser') {
    return (
      <section className="engine engine--teaser section" id="engine-teaser">
        <div className="page-shell engine-teaser">
          <div className="engine-teaser__copy">
            <span className="engine__micro">HDL Process</span>
            <h2 className="engine-teaser__title">
              A cinematic system for turning ordinary websites into{' '}
              <span className="text-gold">premium digital presence.</span>
            </h2>
            <p className="engine-teaser__text">
              Higgins Digital Labs visualizes the process behind sharper structure,
              stronger interfaces, and high-performance web systems.
            </p>
            <div className="engine-teaser__rail" aria-hidden="true">
              {STAGES.map((s, i) => (
                <span key={s.title} className="engine-teaser__step">
                  <span className="engine-teaser__num">{s.number}</span>
                  {s.title}
                  {i < STAGES.length - 1 && <span className="engine-teaser__arrow">→</span>}
                </span>
              ))}
            </div>
            <Link to="/work#engine" className="btn btn-primary engine-teaser__cta" data-cursor="button">
              View the Engine
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="engine-teaser__visual">
            <div className="engine-visual__frame browser-frame">
              <div className="browser-frame__bar">
                <div className="browser-frame__dots"><span /><span /><span /></div>
                <span className="engine-visual__chip">SYSTEM CHECK</span>
              </div>
              <div className="engine-visual__screen">
                <img
                  className="engine-visual__shot"
                  src={ENGINE_SHOT}
                  alt="Higgins Digital Labs transformation preview"
                  loading="lazy"
                  decoding="async"
                />
                <span className="engine-scan engine-scan--idle" ref={teaserScanProgress} aria-hidden="true" />
                <span className="engine-teaser__badge">
                  <HDLogo size={16} decorative /> HDL
                </span>
              </div>
            </div>
            <span className="engine-teaser__glow" aria-hidden="true" />
          </div>
        </div>
      </section>
    );
  }

  // ── Full (Work) ───────────────────────────────────────────────
  return (
    <section className="engine engine--full" id="engine" ref={sectionRef}>
      <div className="engine__sticky">
        <div className="page-shell engine__inner">
          <div className="engine__head">
            <span className="engine__micro">HDL Process / Interface Reconstruction</span>
            <h2 className="engine__title">The Transformation Engine</h2>
            <p className="engine__subtitle">
              A scroll-driven look at how Higgins Digital Labs turns outdated web presence
              into sharper, faster, more credible digital systems.
            </p>
          </div>

          <div className="engine__grid">
            <div className="engine__stages">
              {STAGES.map((stage, i) => (
                <div
                  key={stage.title}
                  className={`engine-stage${active === i ? ' engine-stage--active' : ''}`}
                >
                  <span className="engine-stage__num">{stage.number}</span>
                  <div className="engine-stage__body">
                    <h3 className="engine-stage__title">{stage.title}</h3>
                    <p className="engine-stage__copy">{stage.copy}</p>
                    <div className="engine-stage__tags">
                      {stage.tags.map((t) => (
                        <span key={t} className="engine-stage__tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <StatusRail active={active} progressRef={progressRef} />
            </div>

            <div className="engine__visual-col">
              <EngineVisual active={active} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked stages, each with its own visual */}
      <div className="engine__mobile">
        <div className="page-shell">
          <div className="engine__head">
            <span className="engine__micro">HDL Process</span>
            <h2 className="engine__title">The Transformation Engine</h2>
          </div>
          <div className="engine__mobile-rail" aria-hidden="true">
            {STAGES.map((s) => (
              <span key={s.title} className="engine__mobile-rail-step">{s.title}</span>
            ))}
          </div>
          {STAGES.map((stage, i) => (
            <article key={stage.title} className="engine-mcard">
              <header className="engine-mcard__head">
                <span className="engine-mcard__num">{stage.number}</span>
                <h3 className="engine-mcard__title">{stage.title}</h3>
              </header>
              <EngineVisual active={i} />
              <p className="engine-mcard__copy">{stage.copy}</p>
              <div className="engine-stage__tags">
                {stage.tags.map((t) => (
                  <span key={t} className="engine-stage__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

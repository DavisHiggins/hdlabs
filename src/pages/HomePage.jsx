import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import HDLogo from '../components/HDLogo.jsx';
import TransformationEngine from '../components/TransformationEngine.jsx';
import LiveMetricsPanel from '../components/LiveMetricsPanel.jsx';
import LabsBridge from '../components/LabsBridge.jsx';
import MagneticElement from '../components/MagneticElement.jsx';
import OSStatusRow from '../components/OSStatusRow.jsx';
import { projects } from '../data/siteContent.js';
import './HomePage.css';

function SceneLabel({ num, title }) {
  return (
    <div className="scene-label">
      <span className="scene-label__num">SCENE {num}</span>
      <span className="scene-label__line" />
      <span className="scene-label__title">{title}</span>
    </div>
  );
}

const EASE = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const CAPABILITIES = [
  'Interface Design',
  'Motion Systems',
  'Performance Builds',
  'Brand Systems',
  'Conversion Paths',
  'Client-Owned Code',
];

const FEATURED = projects.slice(0, 2);

export default function HomePage() {
  return (
    <>
      {/* ── Scene 01 — The Lab ── */}
      <Hero />

      <section className="home-oslab">
        <div className="page-shell home-oslab__inner">
          <SceneLabel num="01" title="The Lab" />
          <OSStatusRow className="home-oslab__status" />
        </div>
      </section>

      {/* Capability marquee strip */}
      <section className="home-strip">
        <div className="home-strip__track">
          {[...CAPABILITIES, ...CAPABILITIES].map((c, i) => (
            <span className="home-strip__item" key={i}>
              <span className="home-strip__dot" />
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── Scene 02 — The Engine ── */}
      <div className="page-shell home-scene-head">
        <SceneLabel num="02" title="The Engine" />
      </div>
      <TransformationEngine variant="teaser" />

      {/* Live diagnostics */}
      <LiveMetricsPanel variant="home" />

      {/* ── Scene 03 — The Output ── */}
      <div className="page-shell home-scene-head">
        <SceneLabel num="03" title="The Output" />
      </div>

      {/* Featured work teaser */}
      <section className="home-featured section">
        <div className="page-shell">
          <motion.div
            className="home-featured__head"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="section-label">Featured</span>
            <h2 className="home-featured__title">
              Recent builds, <span className="text-gold">in motion.</span>
            </h2>
            <Link to="/work" className="home-featured__all">
              View all work →
            </Link>
          </motion.div>

          <div className="home-featured__grid">
            {FEATURED.map((p, i) => (
              <motion.div
                key={p.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
              >
                <MagneticElement strength={0.12} radius={140}>
                  <Link to="/work" className="home-feat-card">
                    <div className="home-feat-card__visual browser-frame" data-cursor="view">
                      <div className="browser-frame__bar">
                        <div className="browser-frame__dots"><span /><span /><span /></div>
                        <span className="browser-frame__url">
                          {p.href && p.href !== '#' ? p.href.replace('https://', '') : 'higgins-digital-labs'}
                        </span>
                      </div>
                      <img
                        className="browser-frame__shot"
                        src={p.image}
                        alt={`${p.name} — ${p.category}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="home-feat-card__body">
                      <span className="home-feat-card__cat">{p.category}</span>
                      <h3 className="home-feat-card__name">
                        {p.name}
                        <span className="home-feat-card__arrow">↗</span>
                      </h3>
                      <p className="home-feat-card__desc">{p.outcome}</p>
                    </div>
                  </Link>
                </MagneticElement>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Higgins Digital ↔ Labs bridge */}
      <LabsBridge />

      {/* Closing CTA */}
      <section className="home-cta section">
        <div className="page-shell home-cta__inner">
          <HDLogo size={64} decorative className="home-cta__logo" />
          <h2 className="home-cta__title">
            Build something <span className="text-gold">sharper.</span>
          </h2>
          <p className="home-cta__copy">
            Higgins Digital builds digital experiences with the structure, speed, and
            polish real businesses need to stand out.
          </p>
          <div className="home-cta__actions">
            <Link
              to="/start"
              className="btn btn-primary no-motion-cta"
              data-cursor="button"
              data-no-magnetic="true"
            >
              Start a Project
            </Link>
            <Link to="/services" className="btn btn-ghost" data-cursor="button">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

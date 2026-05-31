import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TransformationEngine from '../components/TransformationEngine.jsx';
import WorkShowcase from '../components/WorkShowcase.jsx';
import WorkSectionIndex from '../components/WorkSectionIndex.jsx';
import ProjectFocusOverlay from '../components/ProjectFocusOverlay.jsx';
import ProjectScreenshotFrame from '../components/ProjectScreenshotFrame.jsx';
import { projects } from '../data/siteContent.js';
import './WorkPage.css';

const EASE = [0.22, 1, 0.36, 1];

export default function WorkPage() {
  const [focus, setFocus] = useState(null);
  const featured = projects[0];

  return (
    <div className="page-top work-page">
      <WorkSectionIndex />

      <div className="page-shell">
        <motion.header
          className="page-head"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <span className="section-label">Work</span>
          <h1 className="page-head__title">
            Work that makes the business look as strong online as it does in person.
          </h1>
          <p className="page-head__sub">
            Higgins Digital Labs studies how structure, design, motion, and performance
            turn outdated web presence into sharper digital systems.
          </p>
        </motion.header>
      </div>

      {/* 01 — The Transformation Engine */}
      <TransformationEngine variant="full" />

      {/* 02 — Projects */}
      <section id="projects">
        <WorkShowcase onOpen={setFocus} />
      </section>

      {/* 03 — Focus: featured case study */}
      <section id="focus" className="work-focus section">
        <div className="page-shell work-focus__inner">
          <div className="work-focus__copy">
            <span className="section-label">Project Focus</span>
            <h2 className="work-focus__title">
              Open any build as a <span className="text-gold">cinematic case study.</span>
            </h2>
            <p className="work-focus__text">
              Every project card opens a focused preview — the real screenshot, the problem,
              what was built, and the outcome. Click the featured build to try it.
            </p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setFocus(featured)}
              data-cursor="button"
            >
              Open Case Study
            </button>
          </div>

          <div className="work-focus__visual">
            <ProjectScreenshotFrame
              src={featured.image}
              alt={`${featured.name} — ${featured.category}`}
              url={featured.href?.replace('https://', '') || 'higgins-digital-labs'}
              chip="CASE STUDY"
              label={featured.name}
              onClick={() => setFocus(featured)}
            />
          </div>
        </div>
      </section>

      {/* 04 — Launch CTA */}
      <section id="launch" className="work-launch section">
        <div className="page-shell work-launch__inner">
          <span className="engine__micro">Client-ready standard</span>
          <h2 className="work-launch__title">
            From audit to launch — <span className="text-gold">built to represent the business.</span>
          </h2>
          <Link to="/start" className="btn btn-primary no-motion-cta" data-cursor="button" data-no-magnetic="true">
            Start a Project
          </Link>
        </div>
      </section>

      <ProjectFocusOverlay project={focus} onClose={() => setFocus(null)} />
    </div>
  );
}

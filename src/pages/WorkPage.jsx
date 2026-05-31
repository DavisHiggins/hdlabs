import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TransformationEngine from '../components/TransformationEngine.jsx';
import RebuildTimeline from '../components/RebuildTimeline.jsx';
import WorkShowcase from '../components/WorkShowcase.jsx';
import WorkSectionIndex from '../components/WorkSectionIndex.jsx';
import ProjectFocusOverlay from '../components/ProjectFocusOverlay.jsx';
import DeconstructedScreenshot from '../components/DeconstructedScreenshot.jsx';
import BeforeAfterSlider from '../components/BeforeAfterSlider.jsx';
import SlicedScreenshotReveal from '../components/SlicedScreenshotReveal.jsx';
import { projects, hbgCompare } from '../data/siteContent.js';
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
          <span className="section-label">Work · HDL / WORK MODULE</span>
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

      {/* 02 — Rebuild Timeline */}
      <RebuildTimeline />

      {/* 03 — Projects */}
      <section id="projects">
        <WorkShowcase onOpen={setFocus} />
      </section>

      {/* 04 — Focus: deconstruction + before/after + sliced reveal */}
      <section id="focus" className="work-focus section">
        <div className="page-shell">
          <div className="work-focus__head">
            <span className="section-label">Project Focus</span>
            <h2 className="work-focus__title">
              Structure first. <span className="text-gold">Surface second.</span>
            </h2>
            <p className="work-focus__text">
              Hover the build to see its interface layers separate, drag the slider to
              compare the rebuild, and scroll to watch the launch screen reassemble.
            </p>
          </div>

          <div className="work-focus__grid">
            <div className="work-focus__col">
              <span className="work-focus__cap">Interface Deconstruction</span>
              <DeconstructedScreenshot
                src={featured.image}
                alt={`${featured.name} — interface layers`}
                url={featured.href?.replace('https://', '') || 'higginsbg.com'}
                label={featured.name}
                onClick={() => setFocus(featured)}
              />
              <button
                type="button"
                className="btn btn-ghost work-focus__open"
                onClick={() => setFocus(featured)}
                data-cursor="button"
              >
                Open Case Study
              </button>
            </div>

            <div className="work-focus__col">
              <span className="work-focus__cap">Before → After · Higgins Building Group</span>
              <BeforeAfterSlider
                before={hbgCompare.before}
                after={hbgCompare.after}
                beforeLabel={hbgCompare.beforeLabel}
                afterLabel={hbgCompare.afterLabel}
                alt="Higgins Building Group rebuild"
              />
            </div>
          </div>

          <div className="work-focus__reveal">
            <span className="work-focus__cap">Launch Render</span>
            <SlicedScreenshotReveal
              src={hbgCompare.after}
              alt="Higgins Building Group launch render"
              url="higginsbg.com"
              label="Launch — client-ready"
            />
          </div>
        </div>
      </section>

      {/* 05 — Launch CTA */}
      <section id="launch" className="work-launch section">
        <div className="page-shell work-launch__inner">
          <span className="engine__micro">Client-ready standard</span>
          <h2 className="work-launch__title">
            From audit to launch — <span className="text-gold">built to represent the business.</span>
          </h2>
          <Link to="/start" className="btn btn-primary no-motion-cta" data-cursor="start" data-no-magnetic="true">
            Start a Project
          </Link>
        </div>
      </section>

      <ProjectFocusOverlay project={focus} onClose={() => setFocus(null)} />
    </div>
  );
}

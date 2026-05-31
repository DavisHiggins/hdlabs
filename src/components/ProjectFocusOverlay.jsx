import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectScreenshotFrame from './ProjectScreenshotFrame.jsx';
import HDLogo from './HDLogo.jsx';
import './ProjectFocusOverlay.css';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Cinematic case-study preview. Opens when a Work project card is clicked.
 * Esc / close button / backdrop click all dismiss it. Body scroll locks
 * while open. Mobile-safe (panel scrolls internally).
 */
export default function ProjectFocusOverlay({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="focus"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} case study`}
        >
          <motion.div
            className="focus__panel"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <button className="focus__close" onClick={onClose} aria-label="Close" data-cursor="button">
              <span /><span />
            </button>

            <div className="focus__visual">
              <ProjectScreenshotFrame
                src={project.image}
                alt={`${project.name} — ${project.category}`}
                url={project.href && project.href !== '#' ? project.href.replace('https://', '') : 'higgins-digital-labs'}
                chip={project.status === 'Live' ? 'CASE STUDY' : 'LAB FEATURE'}
                cursor="gold"
              />
            </div>

            <div className="focus__body">
              <div className="focus__brand">
                <HDLogo size={22} decorative />
                <span>Higgins Digital Labs</span>
              </div>

              <span className="focus__cat">{project.category}</span>
              <h3 className="focus__name">{project.name}</h3>

              <dl className="focus__rows">
                <div className="focus__row">
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div className="focus__row">
                  <dt>Built</dt>
                  <dd>{project.built}</dd>
                </div>
                <div className="focus__row">
                  <dt>Outcome</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>

              <div className="focus__foot">
                <span className="focus__status">
                  <span className="focus__status-dot" />
                  {project.status}
                </span>
                <div className="focus__tags">
                  {project.tags.map((t) => (
                    <span key={t} className="focus__tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

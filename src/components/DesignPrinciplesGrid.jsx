import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { designPrinciples } from '../data/siteContent.js';
import './DesignPrinciplesGrid.css';

const EASE = [0.22, 1, 0.36, 1];

// Small animated visual per principle — pure CSS/markup, no assets.
function PrincipleVisual({ kind }) {
  switch (kind) {
    case 'grid':
      return (
        <span className="pv pv--grid" aria-hidden="true">
          <span /><span /><span /><span />
        </span>
      );
    case 'path':
      return (
        <span className="pv pv--path" aria-hidden="true">
          <span className="pv__dot" />
        </span>
      );
    case 'bars':
      return (
        <span className="pv pv--bars" aria-hidden="true">
          <span /><span /><span />
        </span>
      );
    case 'shield':
    default:
      return (
        <span className="pv pv--shield" aria-hidden="true">
          <span className="pv__shield" />
        </span>
      );
  }
}

export default function DesignPrinciplesGrid() {
  const [active, setActive] = useState(0);

  return (
    <section className="principles section">
      <div className="page-shell">
        <div className="principles__head">
          <span className="section-label">Design Principles</span>
          <h2 className="principles__title">The thinking behind every build.</h2>
        </div>

        <div className="principles__grid">
          {designPrinciples.map((p, i) => {
            const isActive = active === i;
            return (
              <motion.article
                key={p.title}
                className={`principle${isActive ? ' principle--active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                data-cursor="button"
                layout
                transition={{ layout: { duration: 0.5, ease: EASE } }}
              >
                <div className="principle__top">
                  <span className="principle__index">0{i + 1}</span>
                  <PrincipleVisual kind={p.visual} />
                </div>
                <h3 className="principle__name">{p.title}</h3>
                <p className="principle__meaning">{p.meaning}</p>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className="principle__detail"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <span className="principle__detail-label">How we apply it</span>
                      <p className="principle__application">{p.application}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

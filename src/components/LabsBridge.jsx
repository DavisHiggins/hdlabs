import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { brand } from '../data/siteContent.js';
import HDLogo from './HDLogo.jsx';
import './LabsBridge.css';

const EASE = [0.22, 1, 0.36, 1];

export default function LabsBridge() {
  return (
    <section className="bridge section">
      <div className="page-shell">
        <motion.div
          className="bridge__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="section-label">The Relationship</span>
          <h2 className="bridge__title">One studio. Two environments.</h2>
        </motion.div>

        <motion.div
          className="bridge__panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="bridge__side bridge__side--studio">
            <span className="bridge__tag">Higgins Digital</span>
            <p className="bridge__copy">
              The client-facing studio — high-performance websites built for real
              businesses, ready for production.
            </p>
            <a
              href={brand.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bridge__cta"
              data-cursor="visit"
            >
              Visit Higgins Digital
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="bridge__center" aria-hidden="true">
            <span className="bridge__line bridge__line--left" />
            <span className="bridge__node">
              <HDLogo size={46} decorative />
            </span>
            <span className="bridge__line bridge__line--right" />
          </div>

          <div className="bridge__side bridge__side--labs">
            <span className="bridge__tag bridge__tag--gold">Higgins Digital Labs</span>
            <p className="bridge__copy">
              The experimental interface environment where new motion, layout, and
              conversion systems are tested before becoming client-ready.
            </p>
            <Link to="/start" className="bridge__cta bridge__cta--ghost" data-cursor="button">
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

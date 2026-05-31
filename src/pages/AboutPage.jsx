import { motion } from 'framer-motion';
import Manifesto from '../components/Manifesto.jsx';
import DesignPrinciplesGrid from '../components/DesignPrinciplesGrid.jsx';
import LabsBridge from '../components/LabsBridge.jsx';
import HDLogo from '../components/HDLogo.jsx';
import './AboutPage.css';

const EASE = [0.22, 1, 0.36, 1];

export default function AboutPage() {
  return (
    <div className="page-top about-page">
      <div className="page-shell">
        <motion.header
          className="page-head"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <span className="section-label">About</span>
          <h1 className="page-head__title">
            The lab behind <span className="text-gold">sharper digital experiences.</span>
          </h1>
          <p className="page-head__sub">
            Higgins Digital Labs is where experimental motion systems, high-performance
            frontend ideas, and premium interface concepts are tested before they become
            client-ready standards.
          </p>
        </motion.header>
      </div>

      <Manifesto />

      <DesignPrinciplesGrid />

      <LabsBridge />

      <div className="about-watermark" aria-hidden="true">
        <HDLogo size={260} decorative />
      </div>
    </div>
  );
}

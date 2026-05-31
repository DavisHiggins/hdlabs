import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { routeModuleLabels } from '../data/siteContent.js';
import HDLogo from './HDLogo.jsx';
import HomePage from '../pages/HomePage.jsx';
import WorkPage from '../pages/WorkPage.jsx';
import ServicesPage from '../pages/ServicesPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import PricingPage from '../pages/PricingPage.jsx';
import StartProjectPage from '../pages/StartProjectPage.jsx';
import './PageTransition.css';

const EASE = [0.22, 1, 0.36, 1];

/* Pages animate OPACITY ONLY. A transform/filter on this wrapper would create a
   containing block and break GSAP's position:fixed pinning, so the cinematic
   "movement" lives entirely in the curtain overlay below — never on the page. */
const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5, ease: EASE, delay: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: EASE } },
};

export default function PageTransition() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          className="page"
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/start" element={<StartProjectPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* Cinematic curtain — a sibling overlay (not an ancestor of the page),
          so its transform never interferes with pinned scroll scenes. */}
      <AnimatePresence>
        <motion.div
          key={`curtain-${location.pathname}`}
          className="ptr-curtain"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ transformOrigin: 'top' }}
        >
          <motion.div
            className="ptr-curtain__brand"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{ scale: 1.06, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <HDLogo size={54} decorative priority />
            </motion.div>
            <span className="ptr-curtain__module">
              {routeModuleLabels[location.pathname] || 'HDL / MODULE'}
            </span>
            <span className="ptr-curtain__word">Loading module…</span>
          </motion.div>
          {/* Thin gold line wipe that sweeps across as the curtain lifts */}
          <motion.span
            className="ptr-curtain__sweep"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

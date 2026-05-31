import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './RouteBackground.css';

const VARIANTS = {
  '/': 'home',
  '/work': 'work',
  '/services': 'services',
  '/about': 'about',
  '/pricing': 'pricing',
  '/start': 'start',
};

// Each route gets a distinct, subtle motif layered over the global background.
function Motif({ variant }) {
  switch (variant) {
    case 'work':
      return (
        <>
          <span className="rb-frame rb-frame--1" />
          <span className="rb-frame rb-frame--2" />
          <span className="rb-frame rb-frame--3" />
        </>
      );
    case 'services':
      return (
        <>
          <span className="rb-node rb-node--1" />
          <span className="rb-node rb-node--2" />
          <span className="rb-node rb-node--3" />
          <span className="rb-node rb-node--4" />
          <span className="rb-line rb-line--h" />
          <span className="rb-line rb-line--v" />
        </>
      );
    case 'about':
      return <span className="rb-word">LABS</span>;
    case 'pricing':
      return (
        <>
          <span className="rb-col rb-col--1" />
          <span className="rb-col rb-col--2" />
          <span className="rb-col rb-col--3" />
        </>
      );
    case 'start':
      return <span className="rb-spot" />;
    case 'home':
    default:
      return (
        <>
          <span className="rb-word rb-word--home">HDL</span>
          <span className="rb-cine" />
        </>
      );
  }
}

export default function RouteBackground() {
  const { pathname } = useLocation();
  const variant = VARIANTS[pathname] || 'home';

  return (
    <div className="route-bg" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={variant}
          className={`route-bg__layer route-bg__layer--${variant}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Motif variant={variant} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { labsManifesto, brand } from '../data/siteContent.js';
import { useInteraction } from '../context/InteractionContext.jsx';
import AnimatedWordmark from './AnimatedWordmark.jsx';
import './LabsManifestoOverlay.css';

const EASE = [0.22, 1, 0.36, 1];

const lineV = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.5 + i * 0.12 },
  }),
};

export default function LabsManifestoOverlay() {
  const { manifestoOpen, setManifestoOpen, play } = useInteraction();

  useEffect(() => {
    if (!manifestoOpen) return undefined;
    play('open');
    const onKey = (e) => { if (e.key === 'Escape') setManifestoOpen(false); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [manifestoOpen, setManifestoOpen, play]);

  return (
    <AnimatePresence>
      {manifestoOpen && (
        <motion.div
          className="manifesto-ov"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="dialog"
          aria-modal="true"
          aria-label="Higgins Digital Labs manifesto"
        >
          <div className="manifesto-ov__grid" aria-hidden="true" />

          <button
            className="manifesto-ov__close"
            onClick={() => { play('close'); setManifestoOpen(false); }}
            aria-label="Close manifesto"
            data-cursor="button"
          >
            <span /><span />
          </button>

          <motion.div
            className="manifesto-ov__inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="manifesto-ov__micro">ENTERING LABS MANIFESTO · HDL_OS v5.0</span>
            <AnimatedWordmark />

            <ol className="manifesto-ov__lines">
              {labsManifesto.map((line, i) => (
                <motion.li
                  key={line}
                  className="manifesto-ov__line"
                  variants={lineV}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="manifesto-ov__index">{String(i + 1).padStart(2, '0')}</span>
                  {line}
                </motion.li>
              ))}
            </ol>

            <motion.p
              className="manifesto-ov__note"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              {brand.parent} is the client-facing studio. {brand.name} is the experimental
              interface environment where new motion, layout, and conversion systems are
              tested before becoming client-ready.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

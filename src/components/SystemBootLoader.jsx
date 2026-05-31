import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HDLogo from './HDLogo.jsx';
import './SystemBootLoader.css';

const EASE = [0.22, 1, 0.36, 1];
const SESSION_KEY = 'hdl-boot-seen';

const STEPS = [
  'Initializing Higgins Digital Labs',
  'Loading interface systems',
  'Preparing motion engine',
  'Rendering client transformations',
];

export default function SystemBootLoader() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduced(prefersReduced);

    if (sessionStorage.getItem(SESSION_KEY)) return;

    setVisible(true);
    document.body.style.overflow = 'hidden';

    const timers = [];
    if (prefersReduced) {
      timers.push(setTimeout(() => finish(), 900));
    } else {
      STEPS.forEach((_, i) => {
        timers.push(setTimeout(() => setStep(i), i * 560));
      });
      timers.push(setTimeout(() => finish(), STEPS.length * 560 + 700));
    }

    function finish() {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, '1');
      document.body.style.overflow = '';
    }

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE } }}
        >
          <div className="boot__grid" aria-hidden="true" />

          <motion.div
            className="boot__inner"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.div
              className="boot__logo"
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <HDLogo size={76} decorative priority />
              <span className="boot__logo-ring" aria-hidden="true" />
            </motion.div>

            <span className="boot__brand">Higgins Digital Labs</span>

            {!reduced && (
              <ul className="boot__steps" aria-hidden="true">
                {STEPS.map((s, i) => (
                  <li
                    key={s}
                    className={`boot__step${i <= step ? ' boot__step--done' : ''}${i === step ? ' boot__step--active' : ''}`}
                  >
                    <span className="boot__step-marker">
                      {i < step ? '✓' : i === step ? '›' : ''}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            )}

            <span className="boot__bar" aria-hidden="true">
              <motion.span
                className="boot__bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduced ? 0.7 : STEPS.length * 0.56 + 0.4,
                  ease: 'linear',
                }}
              />
            </span>

            <span className="boot__status">
              {reduced ? 'Loading…' : `SYS ${String(Math.min(step + 1, STEPS.length)).padStart(2, '0')} / 0${STEPS.length}`}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

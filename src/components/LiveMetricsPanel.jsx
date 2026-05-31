import { motion } from 'framer-motion';
import { liveMetrics } from '../data/siteContent.js';
import './LiveMetricsPanel.css';

const EASE = [0.22, 1, 0.36, 1];

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.08 },
  }),
};

export default function LiveMetricsPanel({ variant = 'home' }) {
  return (
    <section className={`metrics metrics--${variant} section`}>
      <div className="page-shell">
        <div className="metrics__head">
          <span className="metrics__badge">
            <span className="metrics__badge-dot" /> System Check
          </span>
          <h2 className="metrics__title">
            Built to <span className="text-gold">perform, not just impress.</span>
          </h2>
        </div>

        <motion.div
          className="metrics__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {liveMetrics.map((m, i) => (
            <motion.article
              key={m.label}
              className="metric-card"
              variants={card}
              custom={i}
              data-cursor="gold"
            >
              <span className="metric-card__scan" aria-hidden="true" />
              <header className="metric-card__top">
                <span className="metric-card__label">{m.label}</span>
                <span className={`metric-card__status metric-card__status--${m.status}`}>
                  <span className="metric-card__status-dot" />
                  {m.status}
                </span>
              </header>
              <p className="metric-card__value">{m.value}</p>
              <p className="metric-card__detail">{m.detail}</p>
              <span className="metric-card__bar" aria-hidden="true">
                <motion.span
                  className="metric-card__bar-fill"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.08 }}
                />
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import './AnimatedWordmark.css';

const EASE = [0.22, 1, 0.36, 1];
const WORDS = ['Higgins', 'Digital', 'Labs'];

/**
 * Premium wordmark: words rise + lock into place, a gold scan line passes over,
 * and "Experimental Interface Systems" reveals beneath. Used in key moments only.
 */
export default function AnimatedWordmark({ subtitle = true, className = '' }) {
  return (
    <div className={`wordmark ${className}`.trim()}>
      <div className="wordmark__row" aria-label="Higgins Digital Labs">
        {WORDS.map((word, i) => (
          <span className="wordmark__word-wrap" key={word}>
            <motion.span
              className={`wordmark__word${i === 2 ? ' wordmark__word--accent' : ''}`}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
            >
              {word}
            </motion.span>
          </span>
        ))}
        <motion.span
          className="wordmark__scan"
          initial={{ x: '-120%', opacity: 0 }}
          animate={{ x: '120%', opacity: [0, 1, 0] }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.7 }}
          aria-hidden="true"
        />
      </div>
      {subtitle && (
        <motion.span
          className="wordmark__sub"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
        >
          Experimental Interface Systems
        </motion.span>
      )}
    </div>
  );
}

import { useCallback, useEffect, useRef, useState } from 'react';
import './BeforeAfterSlider.css';

/**
 * Premium before/after comparison with a gold drag handle.
 * Pointer events unify mouse + touch (the mobile fallback), and a Before/After
 * toggle is provided for tap accessibility. Cursor switches to DRAG over it.
 */
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  alt = 'Higgins Building Group before and after',
}) {
  const wrapRef = useRef(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const setFromClientX = useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [setFromClientX]);

  const onPointerDown = (e) => {
    dragging.current = true;
    setFromClientX(e.clientX);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div className="bas">
      <div
        className="bas__frame"
        ref={wrapRef}
        onPointerDown={onPointerDown}
        data-cursor="drag"
      >
        {/* After (full) */}
        <img className="bas__img" src={after} alt={`${alt} — after`} draggable="false" loading="lazy" decoding="async" />
        <span className="bas__tag bas__tag--after">{afterLabel}</span>

        {/* Before — full-size, clipped to the handle position (responsive) */}
        <div className="bas__before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img
            className="bas__img bas__img--before"
            src={before}
            alt={`${alt} — before`}
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="bas__tag bas__tag--before" style={{ opacity: pos > 12 ? 1 : 0 }}>{beforeLabel}</span>

        {/* Handle */}
        <div
          className="bas__handle"
          style={{ left: `${pos}%` }}
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
        >
          <span className="bas__handle-line" />
          <span className="bas__handle-grip">
            <span className="bas__handle-arrow">‹</span>
            <span className="bas__handle-arrow">›</span>
          </span>
        </div>
      </div>

      {/* Tap toggle fallback */}
      <div className="bas__toggle" role="group" aria-label="Toggle before or after">
        <button
          type="button"
          className={`bas__toggle-btn${pos > 60 ? ' is-on' : ''}`}
          onClick={() => setPos(100)}
          data-cursor="button"
        >
          {beforeLabel}
        </button>
        <button
          type="button"
          className={`bas__toggle-btn${pos < 40 ? ' is-on' : ''}`}
          onClick={() => setPos(0)}
          data-cursor="button"
        >
          {afterLabel}
        </button>
      </div>
    </div>
  );
}

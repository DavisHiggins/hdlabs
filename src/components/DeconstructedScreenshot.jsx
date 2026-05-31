import './DeconstructedScreenshot.css';

// Horizontal interface layers, top → bottom of a typical page.
const LAYERS = ['Nav', 'Hero', 'Content', 'Feature', 'CTA', 'Footer'];

/**
 * On hover, a screenshot separates into stacked interface layers in 3D depth —
 * communicating that Higgins Digital understands structure, not just surface.
 * Falls back to a clean static image when reduced-motion / touch.
 */
export default function DeconstructedScreenshot({
  src,
  alt = '',
  label,
  url = 'higgins-digital-labs',
  onClick,
  className = '',
}) {
  const interactive = typeof onClick === 'function';
  const n = LAYERS.length;

  return (
    <div
      className={`decon browser-frame${interactive ? ' decon--interactive' : ''} ${className}`.trim()}
      data-cursor="view"
      onClick={onClick}
      {...(interactive
        ? {
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(e); }
            },
          }
        : {})}
    >
      <div className="browser-frame__bar">
        <div className="browser-frame__dots"><span /><span /><span /></div>
        <span className="browser-frame__url">{url}</span>
      </div>

      <div className="decon__stage" aria-label={alt} role="img">
        {LAYERS.map((name, i) => (
          <span
            key={name}
            className="decon__layer"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `100% ${n * 100}%`,
              backgroundPositionY: `${(i / (n - 1)) * 100}%`,
              '--i': i,
              '--n': n,
            }}
          >
            <span className="decon__tag">{name}</span>
          </span>
        ))}
        <span className="decon__overlay" aria-hidden="true" />
        {label && <span className="decon__label">{label}</span>}
      </div>
    </div>
  );
}

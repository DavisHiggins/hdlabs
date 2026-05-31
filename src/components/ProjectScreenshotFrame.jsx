import './ProjectScreenshotFrame.css';

/**
 * Premium reusable screenshot frame: browser chrome, reflective glass edge,
 * gold hairline, soft overlay gradient, optional status chip + hover focus.
 * Used in the Transformation Engine, Work cards, and the focus overlay.
 */
export default function ProjectScreenshotFrame({
  src,
  alt = '',
  url = 'higgins-digital-labs',
  chip,
  label,
  className = '',
  cursor = 'view',
  fit = 'cover',
  onClick,
  as: Tag = 'div',
}) {
  const interactive = typeof onClick === 'function';
  return (
    <Tag
      className={`psf browser-frame${interactive ? ' psf--interactive' : ''} ${className}`.trim()}
      data-cursor={cursor}
      onClick={onClick}
      {...(interactive
        ? {
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(e);
              }
            },
          }
        : {})}
    >
      <div className="browser-frame__bar">
        <div className="browser-frame__dots"><span /><span /><span /></div>
        <span className="browser-frame__url">{url}</span>
        {chip && <span className="psf__chip">{chip}</span>}
      </div>
      <div className="psf__shot-wrap">
        <img
          className="browser-frame__shot psf__shot"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{ objectFit: fit }}
        />
        <span className="psf__overlay" aria-hidden="true" />
        {label && <span className="psf__label">{label}</span>}
      </div>
    </Tag>
  );
}

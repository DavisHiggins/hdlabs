// Centralised HD logo so the asset path + alt text stay consistent everywhere.
// The source PNG is square (500x500); aspect ratio is always preserved.
const LOGO_SRC = '/hdlogo.png';

export default function HDLogo({
  size = 36,
  className = '',
  decorative = false,
  priority = false,
}) {
  return (
    <img
      src={LOGO_SRC}
      width={size}
      height={size}
      className={`hd-logo ${className}`.trim()}
      alt={decorative ? '' : 'Higgins Digital Labs'}
      aria-hidden={decorative || undefined}
      draggable="false"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}

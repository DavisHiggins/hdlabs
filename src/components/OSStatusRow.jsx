import { osStatus } from '../data/siteContent.js';
import './OSStatusRow.css';

/**
 * Tasteful HD Labs OS status strip:
 * HDL_OS v5.0 · MOTION ENGINE: ACTIVE · TRANSFORMATION PIPELINE: READY · …
 */
export default function OSStatusRow({ className = '' }) {
  return (
    <div className={`os-row ${className}`.trim()} aria-hidden="true">
      {osStatus.map((line, i) => (
        <span className="os-row__item" key={line}>
          <span className={`os-row__dot${i === 0 ? ' os-row__dot--ver' : ''}`} />
          {line}
        </span>
      ))}
    </div>
  );
}

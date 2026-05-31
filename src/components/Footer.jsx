import { Link } from 'react-router-dom';
import { navItems, brand } from '../data/siteContent.js';
import HDLogo from './HDLogo.jsx';
import './Footer.css';

const HOURS = [
  ['Monday',    '9AM – 6PM'],
  ['Tuesday',   '9AM – 6PM'],
  ['Wednesday', '9AM – 6PM'],
  ['Thursday',  '9AM – 6PM'],
  ['Friday',    '9AM – 6PM'],
  ['Saturday',  'Closed'],
  ['Sunday',    'Closed'],
];

export default function Footer() {
  return (
    <footer className="ftr">
      <span className="ftr__goldline" aria-hidden="true" />
      <div className="ftr__inner">
        <div className="ftr__top">
          {/* Brand */}
          <div className="ftr__brand-col">
            <Link to="/" className="ftr__brand" aria-label={`${brand.name} — home`}>
              <span className="ftr__mark">
                <HDLogo size={40} />
              </span>
              <div className="ftr__wordmark">
                <span className="ftr__higgins">Higgins Digital</span>
                <span className="ftr__digital">Labs</span>
              </div>
            </Link>
            <p className="ftr__tagline">
              High-performance websites for real businesses.
              Experimental interface systems by Higgins Digital.
            </p>
            <a href={`mailto:${brand.email}`} className="ftr__email">
              {brand.email}
            </a>
          </div>

          {/* Navigate */}
          <div className="ftr__col">
            <h4 className="ftr__col-title">Navigate</h4>
            <ul className="ftr__list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="ftr__link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="ftr__col">
            <h4 className="ftr__col-title">Hours</h4>
            <ul className="ftr__list ftr__list--hours">
              {HOURS.map(([day, time]) => (
                <li key={day}>
                  <span className="ftr__day">{day}</span>
                  <span className="ftr__time">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="ftr__col">
            <h4 className="ftr__col-title">Contact</h4>
            <ul className="ftr__list">
              <li>
                <a href={`mailto:${brand.email}`} className="ftr__link">
                  {brand.email}
                </a>
              </li>
              <li>
                <span className="ftr__muted">{brand.location}</span>
              </li>
              <li>
                <a href="https://higginsd.com" target="_blank" rel="noreferrer" className="ftr__link">
                  {brand.site} ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ftr__divider" />

        <div className="ftr__bottom">
          <span className="ftr__copy">© 2026 Higgins Digital. All rights reserved.</span>
          <span className="ftr__loc">{brand.location}</span>
        </div>
      </div>

      <div className="ftr__giant" aria-hidden="true">
        HIGGINS DIGITAL LABS
      </div>
    </footer>
  );
}

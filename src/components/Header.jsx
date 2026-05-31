import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, brand } from '../data/siteContent.js';
import { useInteraction } from '../context/InteractionContext.jsx';
import HDLogo from './HDLogo.jsx';
import SoundToggle from './SoundToggle.jsx';
import './Header.css';

const EASE = [0.22, 1, 0.36, 1];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const { pathname } = useLocation();
  const { setCommandOpen, play } = useInteraction();

  useEffect(() => {
    setIsMac(/mac/i.test(navigator.platform || navigator.userAgent));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const primary = navItems.filter((n) => !n.isCta);
  const onNav = () => play('nav');

  return (
    <>
      <motion.header
        className={`hdr${scrolled ? ' hdr--scrolled' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      >
        <div className="hdr__inner">
          <Link
            className="hdr__brand"
            to="/"
            aria-label={`${brand.name} — home`}
            onClick={onNav}
          >
            <span className="hdr__mark">
              <HDLogo size={34} priority />
              <span className="hdr__glimmer" aria-hidden="true" />
            </span>
            <span className="hdr__wordmark">
              <span className="hdr__wordmark-main">
                <span className="hdr__higgins">Higgins</span>
                <span className="hdr__digital">Digital</span>
                <span className="hdr__labs">Labs</span>
              </span>
              {/* Hidden premium detail: hover reveal */}
              <span className="hdr__reveal" aria-hidden="true">
                Experimental Interface Systems
              </span>
            </span>
          </Link>

          <nav className="hdr__nav" aria-label="Primary navigation">
            {primary.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onNav}
                className={({ isActive }) =>
                  `hdr__link${isActive ? ' hdr__link--active' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        className="hdr__link-indicator"
                        layoutId="nav-indicator"
                        transition={{ duration: 0.35, ease: EASE }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hdr__actions">
            <button
              type="button"
              className="hdr__cmdk"
              onClick={() => setCommandOpen(true)}
              data-cursor="button"
              aria-label="Open command palette"
            >
              <span className="hdr__cmdk-keys">{isMac ? '⌘' : 'Ctrl'} K</span>
            </button>

            <SoundToggle className="hdr__sound" />

            <span className="hdr__cta-wrap">
              <Link
                to="/start"
                className="hdr__cta no-motion-cta"
                onClick={onNav}
                data-cursor="button"
                data-no-magnetic="true"
              >
                Start a Project
                <span className="hdr__cta-arrow">→</span>
              </Link>
            </span>

            <button
              className={`hdr__burger${menuOpen ? ' hdr__burger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="hdr__mobile-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="hdr__mobile-brand">
              <HDLogo size={40} />
              <span>{brand.name}</span>
            </div>

            <nav className="hdr__mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item, i) => {
                const isActive =
                  item.path === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.path);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: EASE }}
                  >
                    <Link
                      to={item.path}
                      className={`hdr__mobile-link${item.isCta ? ' hdr__mobile-link--cta' : ''}${isActive ? ' hdr__mobile-link--active' : ''}`}
                      onClick={() => { setMenuOpen(false); onNav(); }}
                    >
                      <span className="hdr__mobile-num">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="hdr__mobile-footer">
              <button
                type="button"
                className="hdr__mobile-cmdk"
                onClick={() => { setMenuOpen(false); setCommandOpen(true); }}
              >
                Open Command Palette ({isMac ? '⌘' : 'Ctrl'} K)
              </button>
              <span className="hdr__mobile-contact">{brand.email}</span>
              <span className="hdr__mobile-loc">{brand.location}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

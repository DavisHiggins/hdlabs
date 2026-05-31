import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { commands, brand } from '../data/siteContent.js';
import { useInteraction } from '../context/InteractionContext.jsx';
import HDLogo from './HDLogo.jsx';
import './CommandPalette.css';

const EASE = [0.22, 1, 0.36, 1];

export default function CommandPalette() {
  const navigate = useNavigate();
  const { commandOpen, setCommandOpen, toggleLabMode, toggleSound, play } = useInteraction();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const lastFocused = useRef(null);

  // Global shortcut: Cmd/Ctrl + K toggles the palette.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setCommandOpen]);

  // Focus management + open sound.
  useEffect(() => {
    if (commandOpen) {
      lastFocused.current = document.activeElement;
      setQuery('');
      setActive(0);
      play('open');
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(t);
    }
    lastFocused.current?.focus?.();
    return undefined;
  }, [commandOpen, play]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [query]);

  // Group results while preserving a flat index for keyboard nav.
  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach((cmd) => {
      if (!map.has(cmd.group)) map.set(cmd.group, []);
      map.get(cmd.group).push(cmd);
    });
    let i = 0;
    return [...map.entries()].map(([name, items]) => ({
      name,
      items: items.map((cmd) => ({ cmd, index: i++ })),
    }));
  }, [filtered]);

  const close = () => setCommandOpen(false);

  const run = (cmd) => {
    play('select');
    switch (cmd.type) {
      case 'navigate':
        navigate(cmd.path);
        break;
      case 'project':
        // TODO: focus/scroll to a specific project on the Work page.
        navigate('/work');
        break;
      case 'external':
        window.open(cmd.url, '_blank', 'noopener,noreferrer');
        break;
      case 'email':
        window.location.href = `mailto:${cmd.email}`;
        break;
      case 'action':
        if (cmd.action === 'toggleLabMode') toggleLabMode();
        if (cmd.action === 'toggleSound') toggleSound();
        break;
      default:
        break;
    }
    if (cmd.action !== 'toggleLabMode' && cmd.action !== 'toggleSound') close();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      play('close');
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = filtered[active];
      if (cmd) run(cmd);
    }
  };

  return (
    <AnimatePresence>
      {commandOpen && (
        <motion.div
          className="cmdk"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              play('close');
              close();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            className="cmdk__panel"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
            onKeyDown={onKeyDown}
          >
            <div className="cmdk__head">
              <HDLogo size={22} decorative />
              <input
                ref={inputRef}
                className="cmdk__input"
                placeholder="Search commands, pages, projects…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                aria-label="Search commands"
              />
              <span className="cmdk__hint">ESC</span>
            </div>

            <div className="cmdk__results">
              {groups.length === 0 && (
                <p className="cmdk__empty">No commands match “{query}”.</p>
              )}
              {groups.map((group) => (
                <div className="cmdk__group" key={group.name}>
                  <span className="cmdk__group-label">{group.name}</span>
                  {group.items.map(({ cmd, index }) => (
                    <button
                      key={cmd.label}
                      type="button"
                      className={`cmdk__row${active === index ? ' cmdk__row--active' : ''}`}
                      onMouseEnter={() => setActive(index)}
                      onClick={() => run(cmd)}
                      data-cursor="command"
                    >
                      <span className="cmdk__row-label">{cmd.label}</span>
                      <span className="cmdk__row-type">{cmd.type}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div className="cmdk__foot">
              <span>{brand.name}</span>
              <span className="cmdk__foot-keys">
                <kbd>↑</kbd><kbd>↓</kbd> navigate <kbd>↵</kbd> select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

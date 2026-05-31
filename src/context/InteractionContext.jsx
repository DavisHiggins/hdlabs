import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { playSound, setSoundEnabled } from '../utils/sound.js';

const InteractionContext = createContext(null);

const SOUND_KEY = 'hdl-sound-enabled';
const LAB_KEY = 'hdl-lab-mode';

export function InteractionProvider({ children }) {
  const [soundOn, setSoundOn] = useState(false);
  const [labMode, setLabMode] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  // Restore persisted preferences once on mount.
  useEffect(() => {
    const storedSound = localStorage.getItem(SOUND_KEY) === '1';
    const storedLab = localStorage.getItem(LAB_KEY) === '1';
    setSoundOn(storedSound);
    setSoundEnabled(storedSound);
    setLabMode(storedLab);
    document.body.classList.toggle('hdl-lab-mode', storedLab);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundOn((prev) => {
      const next = !prev;
      setSoundEnabled(next);
      localStorage.setItem(SOUND_KEY, next ? '1' : '0');
      if (next) playSound('open'); // confirm with a tone only when turning ON
      return next;
    });
  }, []);

  const toggleLabMode = useCallback(() => {
    setLabMode((prev) => {
      const next = !prev;
      localStorage.setItem(LAB_KEY, next ? '1' : '0');
      document.body.classList.toggle('hdl-lab-mode', next);
      return next;
    });
  }, []);

  // Sound is gated inside the engine; this is just a thin, stable wrapper.
  const play = useCallback((kind) => playSound(kind), []);

  const value = useMemo(
    () => ({
      soundOn,
      labMode,
      commandOpen,
      setCommandOpen,
      toggleSound,
      toggleLabMode,
      play,
    }),
    [soundOn, labMode, commandOpen, toggleSound, toggleLabMode, play]
  );

  return (
    <InteractionContext.Provider value={value}>
      {children}
    </InteractionContext.Provider>
  );
}

export function useInteraction() {
  const ctx = useContext(InteractionContext);
  if (!ctx) {
    // Safe no-op fallback so components never crash outside the provider.
    return {
      soundOn: false,
      labMode: false,
      commandOpen: false,
      setCommandOpen: () => {},
      toggleSound: () => {},
      toggleLabMode: () => {},
      play: () => {},
    };
  }
  return ctx;
}

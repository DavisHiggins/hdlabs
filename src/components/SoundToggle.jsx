import { useInteraction } from '../context/InteractionContext.jsx';
import './SoundToggle.css';

export default function SoundToggle({ className = '' }) {
  const { soundOn, toggleSound } = useInteraction();

  return (
    <button
      type="button"
      className={`sound-toggle${soundOn ? ' sound-toggle--on' : ''} ${className}`.trim()}
      onClick={toggleSound}
      data-cursor="audio"
      aria-pressed={soundOn}
      aria-label={soundOn ? 'Sound on — click to mute' : 'Sound off — click to enable'}
      title={soundOn ? 'Sound on' : 'Sound off'}
    >
      <span className="sound-toggle__bars" aria-hidden="true">
        <span /><span /><span /><span />
      </span>
      <span className="sound-toggle__label">{soundOn ? 'On' : 'Off'}</span>
    </button>
  );
}

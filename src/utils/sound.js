// ─────────────────────────────────────────────────────────────
// Higgins Digital Labs — synthesized UI sound engine (Web Audio).
// No audio files: tiny, premium tones generated on demand. Sound is
// OFF by default and only ever plays when the user has opted in.
// ─────────────────────────────────────────────────────────────

let ctx = null;
let masterGain = null;
let enabled = false;
let lastHover = 0;

function ensureContext() {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.5; // overall ceiling — everything stays quiet
    masterGain.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

export function setSoundEnabled(value) {
  enabled = value;
  if (value) ensureContext(); // warm up on the opt-in gesture
}

export function isSoundEnabled() {
  return enabled;
}

// Short tonal blip with an exponential decay envelope.
function tone({ freq = 440, type = 'sine', duration = 0.08, gain = 0.12, glideTo }) {
  const audio = ensureContext();
  if (!audio) return;
  const osc = audio.createOscillator();
  const g = audio.createGain();
  const now = audio.currentTime;

  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, now + duration);

  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(gain, now + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(g);
  g.connect(masterGain);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

// Soft filtered-noise sweep for transitions.
function whoosh() {
  const audio = ensureContext();
  if (!audio) return;
  const now = audio.currentTime;
  const dur = 0.32;

  const bufferSize = audio.sampleRate * dur;
  const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const src = audio.createBufferSource();
  src.buffer = buffer;

  const filter = audio.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(380, now);
  filter.frequency.exponentialRampToValueAtTime(1400, now + dur);
  filter.Q.value = 0.8;

  const g = audio.createGain();
  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(0.06, now + 0.05);
  g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

  src.connect(filter);
  filter.connect(g);
  g.connect(masterGain);
  src.start(now);
  src.stop(now + dur + 0.02);
}

export function playSound(kind) {
  if (!enabled) return;
  switch (kind) {
    case 'click':
    case 'select':
    case 'nav':
      tone({ freq: 520, type: 'triangle', duration: 0.07, gain: 0.1, glideTo: 380 });
      break;
    case 'hover': {
      const t = performance.now();
      if (t - lastHover < 70) return; // debounce rapid hovers
      lastHover = t;
      tone({ freq: 880, type: 'sine', duration: 0.035, gain: 0.04 });
      break;
    }
    case 'open':
      tone({ freq: 320, type: 'sine', duration: 0.12, gain: 0.09, glideTo: 660 });
      break;
    case 'close':
      tone({ freq: 540, type: 'sine', duration: 0.1, gain: 0.07, glideTo: 280 });
      break;
    case 'transition':
    case 'whoosh':
      whoosh();
      break;
    default:
      break;
  }
}

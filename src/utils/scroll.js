const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const headerOffset = () => {
  const header = document.getElementById('site-header');
  return header ? header.offsetHeight : 0;
};

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
let scrollRaf = 0;

export function smoothScrollTo(targetY, duration) {
  cancelAnimationFrame(scrollRaf);
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const to = Math.max(0, Math.min(targetY, maxY));
  const startY = window.scrollY;
  const dist = to - startY;

  if (prefersReducedMotion() || Math.abs(dist) < 2) {
    window.scrollTo(0, to);
    return;
  }

  const dur = duration || Math.min(1200, Math.max(600, Math.abs(dist) * 0.5));
  const t0 = performance.now();
  const events = ['wheel', 'touchstart', 'keydown', 'mousedown'];
  const stop = () => {
    cancelAnimationFrame(scrollRaf);
    events.forEach((ev) => window.removeEventListener(ev, stop));
  };
  events.forEach((ev) => window.addEventListener(ev, stop, { passive: true }));

  const step = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    window.scrollTo(0, startY + dist * easeInOutCubic(p));
    if (p < 1) scrollRaf = requestAnimationFrame(step);
    else stop();
  };
  scrollRaf = requestAnimationFrame(step);
}

export function goTo(id, opts = {}) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - headerOffset();
  if (opts.instant) window.scrollTo(0, Math.max(0, y));
  else smoothScrollTo(y);
  try {
    window.history.replaceState(null, '', `#${id}`);
  } catch (e) {
    /* sandboxed / file:// */
  }
}

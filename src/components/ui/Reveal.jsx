import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

const canObserve = () =>
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// One shared observer for every <Reveal>
let observer = null;
const listeners = new WeakMap();

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const reveal = listeners.get(entry.target);
          if (reveal) reveal();
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
  }
  return observer;
}

/**
 * Scroll-reveal wrapper (replaces the original `data-reveal` attribute).
 * variant: 'left' | 'right' | 'fade' (default = slide up)   delay: e.g. '0.12s'
 */
export default function Reveal({ as: Tag = 'div', variant, delay, className = '', style, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => !canObserve());

  useEffect(() => {
    if (visible) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const io = getObserver();
    listeners.set(el, () => setVisible(true));
    io.observe(el);
    return () => {
      io.unobserve(el);
      listeners.delete(el);
    };
  }, [visible]);

  const classes = [styles.reveal, variant ? styles[variant] : '', visible ? styles.visible : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} style={delay ? { '--rd': delay, ...style } : style} {...rest}>
      {children}
    </Tag>
  );
}

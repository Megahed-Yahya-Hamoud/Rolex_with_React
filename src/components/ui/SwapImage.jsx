import { useEffect, useState } from 'react';
import styles from './SwapImage.module.css';

/** <img> that pre-loads a new `src` and cross-fades to it (replaces `.img-fade` + `.is-swapping`). */
export default function SwapImage({ src, alt, className = '', ...rest }) {
  const [view, setView] = useState({ src, alt });
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    if (src === view.src) {
      if (alt !== view.alt) setView({ src, alt });
      return undefined;
    }
    let cancelled = false;
    setSwapping(true);
    const pre = new Image();
    const apply = () => {
      if (cancelled) return;
      setView({ src, alt });
      requestAnimationFrame(() => setSwapping(false));
    };
    pre.onload = apply;
    pre.onerror = apply;
    pre.src = src;
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, alt]);

  return (
    <img
      src={view.src}
      alt={view.alt}
      className={`${styles.imgFade} ${swapping ? styles.isSwapping : ''} ${className}`}
      {...rest}
    />
  );
}

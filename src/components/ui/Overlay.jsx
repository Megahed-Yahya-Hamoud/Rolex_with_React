import { useEffect, useRef } from 'react';
import styles from './Overlay.module.css';

const FOCUSABLE = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Full-screen dialog backdrop: Esc to close, click-outside to close, focus trap,
 * and autofocus on the first `[data-autofocus]` element. Scroll-lock / focus-restore
 * live in AppContext.
 */
export default function Overlay({ open, onClose, className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const el = ref.current;

    const timer = setTimeout(() => {
      const target = el && el.querySelector('[data-autofocus]');
      if (target) target.focus({ preventScroll: true });
    }, 60);

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !el) return;
      const focusables = Array.from(el.querySelectorAll(FOCUSABLE)).filter(
        (n) => !n.disabled && n.offsetParent !== null
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={`${styles.overlay} ${open ? styles.isOpen : ''} ${className}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** The animated panel inside an <Overlay>. `bottom` = slides up from the bottom on phones. */
export function Sheet({ bottom = false, className = '', children, ...rest }) {
  return (
    <div className={`${styles.sheet} ${bottom ? styles.sheetBottom : ''} ${className}`} {...rest}>
      {children}
    </div>
  );
}

/** Staggered fade-in item inside an open <Overlay> (replaces `data-in` + `--i`). */
export function InItem({ as: Tag = 'div', index = 0, className = '', style, children, ...rest }) {
  return (
    <Tag className={`${styles.in} ${className}`} style={{ '--i': index, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

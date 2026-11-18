import { forwardRef } from 'react';
import styles from './Collapsible.module.css';

/**
 * Animated height collapse (grid-template-rows 0fr → 1fr).
 * `open`   : expanded on every screen size
 * `mdOpen` : always expanded from the `md` breakpoint up (phone stays collapsible)
 */
const Collapsible = forwardRef(function Collapsible(
  { open = false, mdOpen = false, className = '', children, ...rest },
  ref
) {
  const classes = [styles.collapsible, open ? styles.isOpen : '', mdOpen ? styles.mdOpen : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div ref={ref} className={classes} {...rest}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
});

export default Collapsible;

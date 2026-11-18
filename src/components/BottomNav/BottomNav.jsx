import { tabNav } from '../../data/navigation';
import HashLink from '../ui/HashLink';
import MaterialIcon from '../ui/MaterialIcon';
import styles from './BottomNav.module.css';

/** Phone-only bottom tab bar */
export default function BottomNav({ activeId }) {
  return (
    <nav
      id="bottom-nav"
      aria-label="Sections"
      className={`${styles.bottomNav} ${styles.safe}`}
    >
      <div className={styles.box}>
        {tabNav.map((tab) => {
          const active = tab.spy.includes(activeId);
          return (
            <HashLink
              key={tab.href}
              href={tab.href}
              aria-current={active ? 'true' : undefined}
              className={`${styles.tabLink} ${active ? styles.isActive : ''} ${styles.link}`}
            >
              <MaterialIcon name={tab.icon} className={styles.icon} />
              <span className={styles.span}>{tab.label}</span>
            </HashLink>
          );
        })}
      </div>
    </nav>
  );
}

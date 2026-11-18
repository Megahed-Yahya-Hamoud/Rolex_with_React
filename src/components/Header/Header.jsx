import { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { primaryNav } from '../../data/navigation';
import Collapsible from '../ui/Collapsible';
import CrownIcon from '../ui/CrownIcon';
import HashLink from '../ui/HashLink';
import MaterialIcon from '../ui/MaterialIcon';
import styles from './Header.module.css';

const drawerNav = primaryNav.filter((link) => link.href !== '#concierge');

export default function Header({ activeId }) {
  const { openSearch } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header
      id="site-header"
      className={styles.siteHeader}
    >
      <div className={styles.box}>
        {/* Phone: search */}
        <div className={styles.box2}>
          <button
            type="button"
            aria-label="Search the archive"
            className={styles.button}
            onClick={openSearch}
          >
            <MaterialIcon name="search" className={styles.icon} />
          </button>
        </div>

        {/* Brand Crown / Logo */}
        <HashLink className={`${styles.link} ${styles.group}`} href="#home" aria-label="GENÈVE — back to top">
          <span className={styles.span}>
            <CrownIcon className={styles.crown} />
            <span className={styles.span2}>
              GENÈVE
            </span>
          </span>
        </HashLink>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Primary">
          {primaryNav.map((link) => (
            <HashLink
              key={link.href}
              href={link.href}
              aria-current={link.spy.includes(activeId) ? 'true' : undefined}
              className={`${styles.navLink} ${link.spy.includes(activeId) ? styles.isActive : ''} ${styles.link2}`}
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className={styles.box3}>
          <HashLink
            className={styles.link3}
            href="#concierge"
          >
            Salon
          </HashLink>
          <HashLink
            className={styles.link4}
            href="#concierge"
          >
            Book Private Viewing
          </HashLink>
          <button
            type="button"
            id="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={styles.menuToggle}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MaterialIcon name={menuOpen ? 'close' : 'menu'} className={styles.icon2} />
          </button>
        </div>
      </div>

      {/* Tablet Navigation Drawer */}
      <div className={styles.box4}>
        <Collapsible id="mobile-menu" open={menuOpen} aria-hidden={!menuOpen}>
          <nav
            aria-label="Mobile"
            className={styles.nav2}
          >
            {drawerNav.map((link) => (
              <HashLink
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={link.spy.includes(activeId) ? 'true' : undefined}
                className={`${styles.navLink} ${link.spy.includes(activeId) ? styles.isActive : ''} ${styles.link5}`}
              >
                {link.label}
              </HashLink>
            ))}
            <HashLink
              href="#concierge"
              onClick={closeMenu}
              className={styles.link6}
            >
              Book Private Viewing
            </HashLink>
          </nav>
        </Collapsible>
      </div>
    </header>
  );
}

import { Fragment, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { cityLinks } from '../../data/booking';
import { infoData } from '../../data/infoData';
import { goTo } from '../../utils/scroll';
import CrownIcon from '../ui/CrownIcon';
import HashLink from '../ui/HashLink';
import MaterialIcon from '../ui/MaterialIcon';
import styles from './Footer.module.css';

export default function Footer() {
  const { showToast, snack, selectLocation, reserveAndScroll } = useApp();
  const [email, setEmail] = useState('');

  const showInfo = (key) => {
    const d = infoData[key];
    if (d) showToast({ icon: d.icon, kicker: d.kicker, title: d.title, body: d.body });
  };

  const chooseCity = (city) => {
    selectLocation(city.value);
    goTo('concierge');
    snack(`${city.label} salon selected`);
  };

  const onGazetteSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    showToast({
      icon: 'mark_email_read',
      kicker: 'The Gazette',
      title: 'Subscription Confirmed',
      body: `Thank you (${email.trim()}). You will receive the quarterly Geneva Horological Gazette in strict privacy.`
    });
    setEmail('');
  };


  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.box2}>
          {/* Brand */}
          <div className={styles.box3}>
            <div className={styles.box4}>
              <CrownIcon className={styles.crown} />
              <span className={styles.span}>ROLEX</span>
            </div>
            <p className={styles.text}>
              Perpetual excellence, architectural precision, and the quiet authority of Swiss master watchmaking since 1905.
            </p>
            <p className={styles.text2}>
              <span className={styles.span2}>Rolex-inspired concept design</span>
            </p>
          </div>

          {/* Concierge services */}
          <nav className={styles.nav} aria-label="Concierge services">
            <h3 className={styles.heading}>Concierge Services</h3>
            <ul className={styles.list}>
              <li><HashLink href="#concierge" className={styles.link}>Private Salons &amp; Consultations</HashLink></li>
              <li><button type="button" className={styles.button} onClick={() => showInfo('servicing')}>Servicing &amp; Restoration</button></li>
              <li><button type="button" className={styles.button} onClick={() => showInfo('certificate')}>Certificate of Authenticity</button></li>
              <li><button type="button" className={styles.button} onClick={() => showInfo('care')}>Global Care Protocol</button></li>
              <li>
                <a
                  href="#metiers-dart"
                  className={styles.link}
                  onClick={(e) => { e.preventDefault(); reserveAndScroll('metiers'); }}
                >
                  Bespoke Commissions
                </a>
              </li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className={styles.box5}>
            <h3 className={styles.heading}>The Gazette &amp; Privileges</h3>
            <p className={styles.text3}>
              Subscribe to receive curated invitations to private previews, horological disclosures, and commemorative releases.
            </p>
            <form id="gazette-form" className={styles.gazetteForm} noValidate onSubmit={onGazetteSubmit}>
              <label htmlFor="gazette-input" className={styles.label}>Email address</label>
              <input
                id="gazette-input" type="email" required autoComplete="email"
                className={styles.gazetteInput}
                placeholder="Enter your correspondence address"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className={styles.button2}
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Boutiques Directory */}
        <div className={styles.box6}>
          <ul className={styles.list2}>
            <li className={styles.item}>Ateliers &amp; Boutiques:</li>
            {cityLinks.map((city, i) => (
              <Fragment key={city.value}>
                {i > 0 && (
                  <li className={styles.item2} aria-hidden="true">•</li>
                )}
                <li>
                  <button
                    type="button"
                    className={styles.button3}
                    onClick={() => chooseCity(city)}
                  >
                    {city.label}
                  </button>
                </li>
              </Fragment>
            ))}
          </ul>
          <p className={styles.text4}>
            <span className={styles.span3}>SWISS MADE</span>
            <MaterialIcon name="grade" className={styles.icon} />
            <span className={styles.span3}>MANUFACTURE</span>
          </p>
        </div>

        {/* Copyright & Legal */}
        <div className={styles.box7}>
          <p>© 2025 Montres Rolex SA tribute — Independent Rolex-inspired concept design.</p>
          <ul className={styles.list3}>
            <li><button type="button" className={styles.button4} onClick={() => showInfo('legal')}>Legal Notices</button></li>
            <li><button type="button" className={styles.button4} onClick={() => showInfo('privacy')}>Privacy Policy</button></li>
            <li><button type="button" className={styles.button4} onClick={() => showInfo('cookies')}>Cookies</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

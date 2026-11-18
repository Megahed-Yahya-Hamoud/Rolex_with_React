import { useRef, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { asset } from '../../utils/asset';
import { smoothScrollTo } from '../../utils/scroll';
import Collapsible from '../ui/Collapsible';
import GoldText from '../ui/GoldText';
import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './DaytonaSpotlight.module.css';

const spotlightImage = {
  src: asset('daytona-green-tilt.webp'),
  alt: 'Rolex Cosmograph Daytona in 18 ct yellow gold with emerald green dial'
};

// Tablet / desktop: 3 spec cards
const specCards = [
  { label: 'Calibre', value: '4130 / 4131', note: 'Parachrom hairspring' },
  { label: 'Tachymeter', value: '400 Units/H', note: '18 ct Gold engraved' },
  { label: 'Power Reserve', value: '72 Hours', note: 'Superlative chronometer' }
];

// Phone: 2x2 highlights
const highlights = [
  { icon: 'settings', kicker: 'Calibre 4131', title: 'Column Wheel', text: 'Smooth chronograph start without clutch jumping.' },
  { icon: 'shutter_speed', kicker: 'Chronometry', title: '72-Hour Autonomy', text: 'Paramagnetic blue Parachrom hairspring.' },
  { icon: 'speed', kicker: 'Tachymeter', title: '400 Units/H', text: '18 ct gold engraved scale.' },
  { icon: 'water_drop', kicker: 'Triplock Seal', title: '100 Metres', text: 'Screw-down chronograph pushers.' }
];

export default function DaytonaSpotlight() {
  const { openWatch, reserveAndScroll } = useApp();
  const [chronicleOpen, setChronicleOpen] = useState(false);
  const panelRef = useRef(null);

  const toggleChronicle = () => {
    const open = !chronicleOpen;
    setChronicleOpen(open);
    if (open) {
      setTimeout(() => {
        const panel = panelRef.current;
        if (!panel) return;
        const r = panel.getBoundingClientRect();
        if (r.bottom > window.innerHeight - 90) {
          smoothScrollTo(window.scrollY + (r.bottom - window.innerHeight) + 110, 500);
        }
      }, 350);
    }
  };

  return (
    <section
      id="daytona-spotlight"
      aria-labelledby="daytona-title"
      className={styles.daytonaSpotlight}
    >
      <div className={styles.box}>
        <div className={styles.box2}>
          {/* Image */}
          <Reveal variant="fade" className={styles.box3}>
            <div
              className={styles.box4}
              aria-hidden="true"
            />
            <figure
              className={`${styles.figure} ${styles.group}`}
              onClick={() => openWatch('daytona', spotlightImage)}
            >
              <img
                alt={spotlightImage.alt}
                className={styles.img}
                src={spotlightImage.src}
                width="1200"
                height="1200"
                loading="lazy"
                decoding="async"
              />
              <figcaption className={styles.caption}>
                <span className={styles.span}>
                  <span className={styles.span2}>REF. 116508</span>
                  <span className={styles.span3}>
                    <span className={styles.span4}>Cosmograph Daytona</span>
                    <span className={styles.span5}>Oyster Perpetual Cosmograph Daytona</span>
                  </span>
                </span>
                <button
                  type="button"
                  className={styles.button}
                  title="Inspect technical dossier"
                  aria-label="Inspect technical dossier"
                >
                  <MaterialIcon name="search" className={styles.icon} />
                </button>
              </figcaption>
            </figure>
          </Reveal>

          {/* Copy */}
          <div className={styles.box5}>
            <Reveal
              as="p"
              className={styles.text}
            >
              <span className={styles.span6} />
              <span className={styles.span7}>
                <span className={styles.span4}>Icon of Noble Racing • Ref. 116508</span>
                <span className={styles.span5}>Horological Icon • Chronograph Legend</span>
              </span>
            </Reveal>

            <Reveal
              as="h2"
              id="daytona-title"
              className={styles.daytonaTitle}
            >
              COSMOGRAPH DAYTONA — <br />
              <GoldText className={styles.gold}>AN ICON OF SPEED &amp; NOBLE GOLD.</GoldText>
            </Reveal>

            <p className={styles.text2}>
              Born on the asphalt of Daytona Beach to meet the demands of endurance drivers. Cast entirely in in-house 18 ct yellow gold with an intense emerald green sunburst lacquer dial.
            </p>

            {/* Quote + story: always open on tablet/desktop, expandable on phone */}
            <Reveal className={styles.box6}>
              <Collapsible ref={panelRef} id="daytona-chronicle" open={chronicleOpen} mdOpen>
                <div className={styles.box7}>
                  <blockquote className={styles.quote}>
                    &quot;Born on the high-speed banks of Daytona Beach, perfected in solid 18 ct yellow gold and an unforgettable emerald sunburst dial.&quot;
                  </blockquote>
                  <p className={styles.text3}>
                    Introduced to meet the demands of endurance racing drivers, the Cosmograph Daytona is an enduring legend in sports chronometry. Forged in solid 18 ct yellow gold cast in Rolex&apos;s in-house foundry, this reference pairs a signature tachymetric scale bezel with the venerated column-wheel Calibre 4130 self-winding chronograph calibre, engineered with fewer components to ensure uncompromising chronometric reliability.
                  </p>
                </div>
              </Collapsible>
            </Reveal>

            {/* Desktop / tablet: 3 spec cards */}
            <Reveal className={styles.box8}>
              {specCards.map((c) => (
                <div key={c.label} className={styles.box9}>
                  <span className={styles.span8}>{c.label}</span>
                  <span className={styles.span9}>{c.value}</span>
                  <p className={styles.text4}>{c.note}</p>
                </div>
              ))}
            </Reveal>

            {/* Phone: 2x2 highlights */}
            <ul className={styles.list}>
              {highlights.map((h) => (
                <li key={h.kicker} className={styles.item}>
                  <div className={styles.box10}>
                    <MaterialIcon name={h.icon} className={styles.icon2} />
                    <span className={styles.span10}>{h.kicker}</span>
                  </div>
                  <h3 className={styles.heading}>{h.title}</h3>
                  <p className={styles.text5}>{h.text}</p>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <Reveal className={styles.box11}>
              <button
                type="button"
                onClick={() => openWatch('daytona')}
                className={styles.button2}
              >
                <span className={styles.span4}>Technical Specs</span>
                <span className={styles.span5}>View Technical Dossier</span>
              </button>
              <button
                type="button"
                id="chronicle-btn"
                aria-expanded={chronicleOpen}
                aria-controls="daytona-chronicle"
                onClick={toggleChronicle}
                className={styles.chronicleBtn}
              >
                <span>Racing Story</span>
                <MaterialIcon name={chronicleOpen ? 'expand_less' : 'expand_more'} className={styles.icon2} />
              </button>
              <a
                href="#concierge"
                onClick={(e) => { e.preventDefault(); reserveAndScroll('daytona'); }}
                className={styles.link}
              >
                Request Allocation
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useApp } from '../../context/AppContext';
import { asset } from '../../utils/asset';
import CrownIcon from '../ui/CrownIcon';
import GoldText from '../ui/GoldText';
import HashLink from '../ui/HashLink';
import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './Hero.module.css';

const heroImage = {
  src: asset('daytona-champagne-tilt.webp'),
  alt: 'Rolex Cosmograph Daytona in 18 ct yellow gold with emerald green dial'
};

const stats = [
  { short: 'Calibre', long: 'Day-Date Calibre', value: '3255' },
  { short: 'Reserve', long: 'Power Reserve', value: '70 H' },
  { short: 'Precision', long: 'Superlative Standard', value: '±2 SEC' }
];

export default function Hero() {
  const { openWatch } = useApp();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className={styles.home}
    >
      <div className={styles.box}>
        {/* Copy & actions (phone: flattened so the image can sit between copy and stats) */}
        <div className={styles.box2}>
          <p className={styles.text}>
            <CrownIcon className={styles.crown} />
            <span className={styles.span}>
              <span className={styles.span2}>Manufacture Horlogère • Concept</span>
              <span className={styles.span3}>Manufacture Horlogère Suisse • Rolex-Inspired Concept</span>
            </span>
          </p>

          <h1
            id="hero-title"
            className={styles.heroTitle}
          >
            TIMELESS ELEGANCE. <br />
            <GoldText className={styles.gold}>UNMATCHED PRESTIGE.</GoldText>
          </h1>

          <p className={styles.text2}>
            Discover the superlative pinnacle of Swiss horology. An architectural triumph of sunburst emerald lacquer, fluted 18 ct yellow gold, and perpetual precision engineered to outlive time itself.
          </p>

          <div className={styles.box3}>
            <HashLink
              href="#collection"
              className={`${styles.link} ${styles.group}`}
            >
              <span>EXPLORE COLLECTION</span>
              <MaterialIcon name="arrow_forward" className={styles.icon} />
            </HashLink>
            <HashLink
              href="#metiers-dart"
              className={styles.link2}
            >
              <span>MÉTIERS D'ART</span>
            </HashLink>
          </div>

          <dl className={styles.terms}>
            {stats.map((s, i) => (
              <div
                key={s.short}
                className={styles.box4}
              >
                <dt className={styles.term}>
                  <span className={styles.span2}>{s.short}</span>
                  <span className={styles.span3}>{s.long}</span>
                </dt>
                <dd className={`${styles.definition} ${i === 0 ? styles.definition2 : i === 1 ? styles.definition3 : styles.definition4}`}>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual Stage */}
        <div className={styles.box5}>
          <div
            className={styles.box6}
            style={{ animationDuration: '7s' }}
            aria-hidden="true"
          />
          <Reveal
            as="figure"
            variant="fade"
            className={`${styles.figure} ${styles.group}`}
            onClick={() => openWatch('daytona', heroImage)}
          >
            <img
              alt={heroImage.alt}
              className={styles.img}
              src={heroImage.src}
              width="1200"
              height="1200"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption className={styles.caption}>
              <span className={styles.span4}>
                <span className={styles.span5}>Cosmograph Daytona</span>
                <span className={styles.span6}>Daytona • 18 ct Yellow Gold &amp; Emerald Dial</span>
              </span>
              {/* The click bubbles up to the <figure>, which opens the dossier */}
              <button
                type="button"
                className={styles.button}
                title="Inspect dossier"
                aria-label="Inspect Daytona dossier"
              >
                <MaterialIcon name="search" className={styles.icon2} />
              </button>
            </figcaption>
          </Reveal>
        </div>
      </div>

      {/* Fine Scroll Indicator with Gold Line */}
      <HashLink
        className={`${styles.link3} ${styles.group}`}
        href="#atelier-stats"
      >
        <span className={styles.span7}>Scroll to Discover</span>
        <span className={styles.span8}>
          <span className={styles.span9} />
        </span>
      </HashLink>
    </section>
  );
}

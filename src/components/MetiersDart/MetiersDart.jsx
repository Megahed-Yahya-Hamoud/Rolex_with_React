import { useApp } from '../../context/AppContext';
import { asset } from '../../utils/asset';
import GoldText from '../ui/GoldText';
import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './MetiersDart.module.css';

export default function MetiersDart() {
  const { reserveAndScroll } = useApp();

  return (
    <section
      id="metiers-dart"
      aria-labelledby="metiers-title"
      className={styles.metiersDart}
    >
      <div className={styles.box}>
        <div className={styles.box2}>
          {/* Visual */}
          <Reveal
            as="figure"
            className={`${styles.figure} ${styles.group}`}
          >
            <div className={styles.box3}>
              <img
                alt="Avant-garde Haute Horlogerie timepiece with engraved leaf bezel and emerald alligator strap on tobacco leaf"
                className={styles.img}
                src={asset('hublot-leaf-bezel.webp')}
                width="960"
                height="1200"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.box4} />
            <figcaption className={styles.caption}>
              <span className={styles.span}>
                <span className={styles.span2}>Cabinet de Pièces Uniques</span>
                <span className={styles.span3}>Atelier Gravure &amp; Émail</span>
                <span className={styles.span4}>Hand-Chiseled Botanical Bezel • Royal Green Alligator</span>
              </span>
              <span className={styles.span5}>
                <MaterialIcon name="auto_awesome" className={styles.icon} />
              </span>
            </figcaption>
          </Reveal>

          {/* Copy */}
          <div className={styles.box5}>
            <Reveal as="p" className={styles.text}>
              <MaterialIcon name="brush" className={styles.icon2} />
              <span className={styles.span6}>Exclusive Creations • Métiers d'Art</span>
            </Reveal>

            <Reveal
              as="h2"
              id="metiers-title"
              className={styles.metiersTitle}
            >
              WHERE WATCHMAKING <br />
              <GoldText className={styles.gold}>BECOMES PURE ART.</GoldText>
            </Reveal>

            <Reveal
              as="blockquote"
              className={styles.quote}
            >
              &quot;Every stroke of the master engraver&apos;s burin is a permanent testament to patience, transforming noble gold into a living canvas.&quot;
            </Reveal>

            <Reveal as="p" className={styles.text2}>
              Beyond serial perfection lies the bespoke sanctuary of our Métiers d'Art studio. Here, master craftsmen dedicate up to 140 uninterrupted hours hand-sculpting each bezel motif, blending botanical acanthus leaf engravings with deep emerald lacquers and hand-stitched Mississippiensis leather straps.
            </Reveal>

            <Reveal
              as="ul"
              className={styles.list}
            >
              <li className={styles.item}>
                <span className={styles.span7}>Hand Guillochage</span>
                <span className={styles.span8}>140+ Hours</span>
                <p className={styles.text3}>Manual rose-engine<span className={styles.span9}> engraving</span></p>
              </li>
              <li className={styles.item}>
                <span className={styles.span7}>Limited Roster</span>
                <span className={styles.span8}>Bespoke Only</span>
                <p className={styles.text3}>Private <span className={styles.span9}>client </span>allocation</p>
              </li>
            </Reveal>

            <Reveal className={styles.box6}>
              <a
                href="#concierge"
                onClick={(e) => { e.preventDefault(); reserveAndScroll('metiers'); }}
                className={`${styles.link} ${styles.group}`}
              >
                <span>Inquire About Bespoke Commissions</span>
                <MaterialIcon name="arrow_forward" className={styles.icon3} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

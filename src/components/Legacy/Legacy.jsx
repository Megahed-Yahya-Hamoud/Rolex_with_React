import { asset } from '../../utils/asset';
import CrownIcon from '../ui/CrownIcon';
import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './Legacy.module.css';

export default function Legacy() {
  return (
    <section
      id="legacy"
      aria-labelledby="legacy-title"
      className={styles.legacy}
    >
      <div className={styles.box}>
        <div className={styles.box2}>
          {/* Visual */}
          <Reveal className={styles.box3}>
            <figure className={styles.figure}>
              <div className={styles.box4}>
                <img
                  alt="Rolex Day-Date with fluted gold bezel and emerald green dial"
                  className={styles.img}
                  src={asset('day-date-fluted.webp')}
                  width="1200"
                  height="909"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.box5} />
              <figcaption className={styles.caption}>
                <span className={styles.span}>
                  <CrownIcon className={styles.crown} />
                </span>
                <span className={styles.span2}>
                  <span className={styles.span3}>Perpetual Spirit</span>
                  <span className={styles.span4}>Hans Wilsdorf Foundation • Geneva</span>
                </span>
              </figcaption>
            </figure>

            {/* Decorative Offset Card */}
            <aside className={styles.aside}>
              <p className={styles.text}>&quot;We want to be first in the field and Rolex should be seen as the one and only — the best.&quot;</p>
              <span className={styles.span5}>— Hans Wilsdorf, 1914</span>
            </aside>
          </Reveal>

          {/* Copy */}
          <div className={styles.box6}>
            <Reveal as="p" className={styles.text2}>
              <MaterialIcon name="history_edu" className={styles.icon} />
              <span className={styles.span6}>Heritage &amp; Continuity</span>
            </Reveal>

            <Reveal
              as="h2"
              id="legacy-title"
              className={styles.legacyTitle}
            >
              BEYOND TIME. <br />
              <span className={styles.span7}>BEYOND EXPECTATIONS.</span>
            </Reveal>

            <Reveal
              as="blockquote"
              className={styles.quote}
            >
              &quot;True luxury is not simply measured in hours. It is defined by unwavering dedication, relentless precision, and an enduring commitment to perpetual excellence.&quot;
            </Reveal>

            <Reveal className={styles.box7}>
              <p>In 1926, Rolex created the Oyster — the world&apos;s first waterproof wristwatch — forever sealing the movement against dust, water, and atmospheric shock. Five years later came the Perpetual rotor, an ingenious self-winding mechanism that harnessed the natural movement of the wearer&apos;s wrist to power the escapement continuously.</p>
              <p className={styles.text3}>Today, from our four manufacture sites across Switzerland, every single balance spring, gold alloy, and Cerachrom ceramic insert is developed and manufactured entirely in-house. This complete autonomy ensures that every timepiece bearing the Crown maintains unprecedented chronometric integrity.</p>
            </Reveal>

            <Reveal className={styles.box8}>
              <p className={styles.text4}>
                <span className={styles.span8}>Montres Rolex SA</span>
                <span className={styles.span9}>Académie Horlogère de Genève</span>
              </p>
              <p className={styles.text5}>
                <MaterialIcon name="verified_user" className={styles.icon2} />
                <span className={styles.span10}>5-Year Guarantee</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { asset } from '../../utils/asset';
import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './Craftsmanship.module.css';

const facets = [
  {
    n: '01', icon: 'lens_blur', delay: '.05s', title: 'Rose Gold Appliqué Indices',
    text: 'Individually set by hand with chamfered polished facets that reflect subtle shifts in ambient lighting with liquid brilliance.'
  },
  {
    n: '02', icon: 'palette', delay: '.15s', title: 'Thermal Heat-Blued Hands',
    text: 'Steeped to precisely 290°C to achieve a natural, permanent cobalt blue oxidation that guards against corrosion for generations.'
  },
  {
    n: '03', icon: 'fingerprint', delay: '.25s', title: 'Relief Cartouche Script',
    text: 'Precision relief stamping bearing the revered "PERPETUAL CHRONOMETER" testament across a multi-tiered geometric labyrinth.'
  }
];

export default function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      aria-labelledby="craft-title"
      className={styles.craftsmanship}
    >
      <div className={styles.box}>
        <Reveal as="header" className={styles.header}>
          <p className={styles.text}>Micro-Mechanical Finissage</p>
          <h2 id="craft-title" className={styles.craftTitle}>PERPETUAL CHRONOMETER INTEGRITY</h2>
          <p className={styles.text2}>
            A microscopic examination into the architectural guilloché dial, rose gold faceted hour markers, and heat-blued hands engineered to sub-micron accuracy.
          </p>
        </Reveal>

        <div className={styles.box2}>
          <Reveal as="figure" className={`${styles.figure} ${styles.group}`}>
            <div className={styles.box3}>
              <img
                alt="Ultra close-up macro of perpetual chronometer dial with intricate hand engraving and rose gold indices"
                className={styles.img}
                src={asset('guilloche-macro.webp')}
                width="1149"
                height="860"
                loading="lazy"
                decoding="async"
              />
              <div className={styles.box4} />
              <div className={styles.box5}>
                <span className={styles.span} />
                <span className={styles.span2}>
                  <span className={styles.span3}>40x Macro</span>
                  <span className={styles.span4}>40x Macro Inspection</span>
                </span>
              </div>
              <figcaption className={styles.caption}>
                <span>
                  <span className={styles.span5}>Cartouche &amp; Guilloché</span>
                  <span className={styles.span6}>Superlative Dial Engraving Standard</span>
                </span>
                <span className={styles.span7}>
                  <MaterialIcon name="verified" className={styles.icon} />
                  <span>Certified ±2s / Day</span>
                </span>
              </figcaption>
            </div>
          </Reveal>

          <ul className={styles.list}>
            {facets.map((f) => (
              <Reveal as="li" key={f.n} delay={f.delay}>
                <article className={styles.article}>
                  <div className={styles.box6}>
                    <span className={styles.span8}>Facet {f.n}</span>
                    <MaterialIcon name={f.icon} className={styles.icon2} />
                  </div>
                  <h3 className={styles.heading}>{f.title}</h3>
                  <p className={styles.text3}>{f.text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

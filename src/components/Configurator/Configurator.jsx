import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  bracelets, configImages, diameters, diaScale, metalFilters, metals
} from '../../data/config';
import HashLink from '../ui/HashLink';
import Reveal from '../ui/Reveal';
import SwapImage from '../ui/SwapImage';
import styles from './Configurator.module.css';

export default function Configurator() {
  const { config, updateConfig, inquireWithConfig } = useApp();
  // Counts clicks per field so the summary text re-plays its small fade-in animation
  const [pulse, setPulse] = useState({ dia: 0, metal: 0, brc: 0 });

  const choose = (field, value) => {
    updateConfig(field, value);
    setPulse((p) => ({ ...p, [field]: p[field] + 1 }));
  };

  const metalType = (metals.find((m) => m.value === config.metal) || {}).type;
  const image = metalType === 'steel' || metalType === 'plat' ? configImages.steel : configImages.gold;
  const filter = metalFilters[metalType] || '';


  return (
    <section
      id="configurator"
      aria-labelledby="config-title"
      className={styles.configurator}
    >
      <div className={styles.box}>
        <Reveal
          as="header"
          className={styles.header}
        >
          <div className={styles.box2}>
            <p className={styles.text}>
              <span className={styles.span} />
              <span className={styles.span2}>Interactive Atelier Studio</span>
            </p>
            <h2 id="config-title" className={styles.configTitle}>TIMEPIECE CONFIGURATOR</h2>
            <p className={styles.text2}>
              Simulate case proportions, precious alloys, and bracelet combinations for your bespoke appointment.
            </p>
          </div>
          <p className={styles.text3}>Rolex-Inspired Bespoke Preview</p>
        </Reveal>

        <div className={styles.box3}>
          {/* Interactive Preview Screen */}
          <Reveal className={styles.box4}>
            <div className={styles.box5} />
            <div className={styles.box6}>
              <div className={`${styles.stage} ${styles.box7}`} style={{ '--s': diaScale[config.dia] || 1 }}>
                <SwapImage
                  id="config-watch-img"
                  className={styles.configWatchImg}
                  src={image.src}
                  alt={image.alt}
                  style={{ filter }}
                  width="1200"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p
              className={styles.text4}
              aria-live="polite"
            >
              <span key={`dia-${pulse.dia}`} className={`${styles.span3} ${pulse.dia ? styles.textIn : ''}`}>{config.dia}</span>
              <span className={styles.span4} aria-hidden="true">•</span>
              <span key={`metal-${pulse.metal}`} className={`${styles.span5} ${pulse.metal ? styles.textIn : ''}`}>{config.metal}</span>
              <span className={styles.span4} aria-hidden="true">•</span>
              <span key={`brc-${pulse.brc}`} className={`${styles.span3} ${pulse.brc ? styles.textIn : ''}`}>{config.brc} Bracelet</span>
            </p>
          </Reveal>

          {/* Controls Panel */}
          <Reveal className={styles.box8}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>1. Case Diameter</legend>
              <div className={styles.box9}>
                {diameters.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`${styles.opt} ${styles.button}`}
                    aria-pressed={config.dia === d}
                    onClick={() => choose('dia', d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>2. Noble Metal Alloy</legend>
              <div className={styles.box10}>
                {metals.map((m) => (
                  <button
                    key={m.value}
                    type="button"
                    className={`${styles.opt} ${styles.button2}`}
                    aria-pressed={config.metal === m.value}
                    onClick={() => choose('metal', m.value)}
                  >
                    <span className={styles.span6} style={{ backgroundColor: m.color }} />
                    <span>{m.value}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>3. Bracelet Architecture</legend>
              <div className={styles.box9}>
                {bracelets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`${styles.opt} ${styles.button3}`}
                    aria-pressed={config.brc === b}
                    onClick={() => choose('brc', b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <HashLink
              href="#concierge"
              onClick={(e) => { e.preventDefault(); inquireWithConfig(); }}
              className={styles.link}
            >
              Inquire With This Configuration
            </HashLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

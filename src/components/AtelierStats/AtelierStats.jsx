import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './AtelierStats.module.css';

const items = [
  { icon: 'location_on', label: 'Origin', title: 'Geneva, Switzerland', sub: 'Manufacture Est. 1905' },
  { icon: 'schedule', label: 'Chronometry', title: '±2 Sec / Day Precision', sub: 'Superlative COSC Certified' },
  { icon: 'water_drop', label: 'Hermetic Seal', title: 'Oyster Architecture', sub: '100m to 300m Waterproof' },
  { icon: 'diamond', label: 'Metallurgy', title: 'Oystersteel & 18K Gold', sub: 'In-House Dedicated Foundry' }
];

export default function AtelierStats() {
  return (
    <section
      id="atelier-stats"
      aria-label="Atelier at a glance"
      className={styles.atelierStats}
    >
      <Reveal className={styles.box}>
        <ul className={styles.list}>
          {items.map((item, i) => (
            <li
              key={item.label}
              className={`${styles.item} ${i === 0 ? '' : styles.item2} ${styles.item3}`}
            >
              <div className={styles.box2}>
                <MaterialIcon name={item.icon} className={styles.icon} />
                <span className={styles.span}>{item.label}</span>
              </div>
              <div className={styles.box3}>{item.title}</div>
              <div className={styles.box4}>{item.sub}</div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

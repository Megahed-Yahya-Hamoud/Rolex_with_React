import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './Guarantees.module.css';

const items = [
  {
    icon: 'verified_user', delay: undefined,
    shortTitle: 'Five-Year Guarantee', longTitle: 'Five-Year International Guarantee',
    shortText: 'Green seal assurance',
    longText: 'Every chronometer leaving our Geneva workshops is accompanied by the green seal testament and 5-year worldwide assurance.'
  },
  {
    icon: 'public', delay: '.1s',
    shortTitle: 'Official Network', longTitle: 'Official Service Network',
    shortText: '100+ Flagships',
    longText: 'Expert maintenance by certified master horologists across over 100 dedicated international flagship service centers.'
  },
  {
    icon: 'lock_clock', delay: '.2s',
    shortTitle: 'Heritage Registry', longTitle: 'Enduring Heritage Registry',
    shortText: 'Geneva archives',
    longText: 'Every serial number and individual movement caliber is permanently cataloged in the Geneva historical manufacture archives.'
  }
];

export default function Guarantees() {
  return (
    <section
      aria-label="Guarantees and service network"
      className={styles.section}
    >
      <ul className={styles.list}>
        {items.map((item) => (
          <Reveal
            as="li"
            key={item.icon}
            delay={item.delay}
            className={styles.item}
          >
            <MaterialIcon name={item.icon} className={styles.icon} />
            <h3 className={styles.heading}>
              <span className={styles.span}>{item.shortTitle}</span>
              <span className={styles.span2}>{item.longTitle}</span>
            </h3>
            <p className={styles.text}>{item.shortText}</p>
            <p className={styles.text2}>{item.longText}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

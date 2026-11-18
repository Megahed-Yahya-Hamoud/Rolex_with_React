import styles from './ConceptBanner.module.css';
export default function ConceptBanner() {
  return (
    <aside
      className={styles.aside}
      aria-label="Concept disclaimer"
    >
      <p className={styles.text}>
        <span className={styles.span} />
        <span>A tribute to horological mastery — Rolex-inspired concept design</span>
        <span className={styles.span} />
      </p>
    </aside>
  );
}

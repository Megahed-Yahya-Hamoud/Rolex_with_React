import { collection } from '../../data/collection';
import Reveal from '../ui/Reveal';
import WatchCard from './WatchCard';
import styles from './Collection.module.css';

export default function Collection() {
  return (
    <section
      id="collection"
      aria-labelledby="collection-title"
      className={styles.collection}
    >
      <div className={styles.box}>
        <Reveal
          as="header"
          className={styles.header}
        >
          <div className={styles.box2}>
            <p className={styles.text}>
              <span className={styles.span} />
              <span className={styles.span2}>The Master References</span>
            </p>
            <h2 id="collection-title" className={styles.collectionTitle}>THE CURATED COLLECTION</h2>
            <p className={styles.text2}>
              Iconic silhouettes sculpted from noble golds and Oystersteel, powered by self-winding mechanical calibres certified with superlative precision.
            </p>
          </div>
          <p className={styles.text3}>
            <span className={styles.span3}>Displaying:</span>
            <span className={styles.span4}>{collection.length} Master References</span>
          </p>
        </Reveal>

        {/* Phone: swipeable carousel • Tablet/Desktop: grid */}
        <ul
          id="cards-track"
          aria-label="Master references"
          className={`${styles.cardsTrack} ${styles.noScrollbar}`}
        >
          {collection.map((card) => (
            <WatchCard key={card.key} card={card} />
          ))}
        </ul>

        <p
          className={styles.text4}
          aria-hidden="true"
        >
          Swipe to browse • {collection.length} references
        </p>
      </div>
    </section>
  );
}

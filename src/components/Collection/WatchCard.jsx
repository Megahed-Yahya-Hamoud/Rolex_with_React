import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import MaterialIcon from '../ui/MaterialIcon';
import Reveal from '../ui/Reveal';
import styles from './WatchCard.module.css';

const radialClass = { green: styles.radialGreen, gold: styles.radialGold };
const shadowClass = { gold35: styles.shadowGold35, green35: styles.shadowGreen35, gold25: styles.shadowGold25 };

export default function WatchCard({ card }) {
  const { openWatch, snack } = useApp();
  const [saved, setSaved] = useState(false);
  const image = { src: card.image, alt: card.alt };

  const open = (e) => {
    e.stopPropagation();
    openWatch(card.key, image);
  };

  const toggleSaved = (e) => {
    e.stopPropagation();
    const on = !saved;
    setSaved(on);
    snack(on ? 'Saved to your references' : 'Removed from saved references');
  };

  // Clicking anywhere on the card (except links / buttons) opens the dossier
  const onCardClick = (e) => {
    if (e.target.closest('a, button')) return;
    openWatch(card.key, image);
  };

  return (
    <Reveal as="li" delay={card.delay} className={styles.item}>
      <article
        data-watch={card.key}
        onClick={onCardClick}
        className={`${styles.article} ${styles.group} ${shadowClass[card.shadow]}`}
      >
        <figure className={styles.figure}>
          <div className={`${styles.box} ${radialClass[card.radial]}`} />
          <img
            alt={card.alt}
            className={styles.img}
            src={card.image}
            width="1000"
            height="1000"
            loading="lazy"
            decoding="async"
          />
          <figcaption className={styles.caption}>
            {card.ref}
          </figcaption>
          <button
            type="button"
            title="Bookmark reference"
            aria-label={card.bookmarkLabel}
            aria-pressed={saved}
            onClick={toggleSaved}
            className={`${styles.button} ${saved ? styles.button2 : styles.button3}`}
          >
            <MaterialIcon name="bookmark" fill={saved} className={styles.icon} />
          </button>
        </figure>

        <div className={styles.box2}>
          <div>
            <p className={styles.text}>{card.tagline}</p>
            <h3 className={styles.heading}>{card.title}</h3>
            <p className={styles.text2}>{card.description}</p>
          </div>
          <div className={styles.box3}>
            <p className={styles.text3}>
              <span className={styles.span}>Acquisition</span>
              <span className={styles.span2}>Price Upon Request</span>
            </p>
            <button
              type="button"
              onClick={open}
              className={styles.button4}
            >
              <span>EXPLORE SPECIFICATIONS</span>
              <MaterialIcon name="visibility" className={styles.icon2} />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

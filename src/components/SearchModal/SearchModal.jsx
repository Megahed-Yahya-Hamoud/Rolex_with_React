import { useEffect, useMemo, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { collection } from '../../data/collection';
import { searchIndex } from '../../data/searchIndex';
import { goTo } from '../../utils/scroll';
import MaterialIcon from '../ui/MaterialIcon';
import Overlay, { Sheet } from '../ui/Overlay';
import styles from './SearchModal.module.css';

export default function SearchModal() {
  const { overlay, closeOverlay, openWatch } = useApp();
  const open = overlay === 'search';
  const [query, setQuery] = useState('');

  // Start with an empty query every time the search opens
  useEffect(() => {
    if (open) setQuery('');
  }, [open]);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? searchIndex.filter((i) => q.split(/\s+/).every((w) => i.words.includes(w)))
      : searchIndex.slice(0, 6);
  }, [query]);

  const run = (item) => {
    closeOverlay();
    setTimeout(() => {
      if (item.type === 'watch') {
        const card = collection.find((c) => c.key === item.key);
        openWatch(item.key, card ? { src: card.image, alt: card.alt } : undefined);
      } else {
        goTo(item.key);
      }
    }, 250);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && items[0]) {
      e.preventDefault();
      run(items[0]);
    }
  };

  return (
    <Overlay
      id="search-modal"
      open={open}
      onClose={closeOverlay}
      aria-label="Search the archive"
      className={styles.searchModal}
    >
      <Sheet className={styles.sheet}>
        <div className={styles.box}>
          <MaterialIcon name="search" className={styles.icon} />
          <label htmlFor="search-input" className={styles.label}>Search the manufacture archive</label>
          <input
            id="search-input"
            type="search"
            autoComplete="off"
            data-autofocus
            placeholder="Daytona, Submariner, Calibre, Salon…"
            className={styles.searchInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button
            type="button"
            aria-label="Close search"
            onClick={closeOverlay}
            className={styles.button}
          >
            <MaterialIcon name="close" className={styles.icon2} />
          </button>
        </div>

        <ul id="search-results" aria-live="polite" className={styles.searchResults}>
          {items.length === 0 && (
            <li className={styles.item}>No references found</li>
          )}
          {items.map((item) => (
            <li key={`${item.type}-${item.key}`}>
              <button
                type="button"
                onClick={() => run(item)}
                className={styles.button2}
              >
                <MaterialIcon name={item.icon} className={styles.icon} />
                <span className={styles.span}>
                  <span className={styles.span2}>{item.label}</span>
                  <span className={styles.span3}>{item.hint}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Sheet>
    </Overlay>
  );
}

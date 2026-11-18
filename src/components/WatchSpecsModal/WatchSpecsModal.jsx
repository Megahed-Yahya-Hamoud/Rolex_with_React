import { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { specRows, watchData } from '../../data/watchData';
import CrownIcon from '../ui/CrownIcon';
import MaterialIcon from '../ui/MaterialIcon';
import Overlay, { InItem, Sheet } from '../ui/Overlay';
import SwapImage from '../ui/SwapImage';
import styles from './WatchSpecsModal.module.css';

export default function WatchSpecsModal() {
  const { overlay, closeOverlay, watch, reserveAndScroll } = useApp();
  const open = overlay === 'watch';
  const data = watchData[watch.key];
  const bodyRef = useRef(null);

  // Start at the top every time a dossier opens
  useEffect(() => {
    if (open && bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [open, watch.key]);

  const reserve = () => {
    const key = watch.key;
    closeOverlay();
    setTimeout(() => reserveAndScroll(key), 350);
  };

  return (
    <Overlay
      id="watch-specs-modal"
      open={open}
      onClose={closeOverlay}
      aria-labelledby="modal-watch-name"
      className={styles.watchSpecsModal}
    >
      <Sheet
        bottom
        className={styles.sheet}
      >
        <div className={styles.box}>
          <div className={styles.box2}>
            <CrownIcon className={styles.crown} />
            <span className={styles.span}>{data.ref}</span>
          </div>
          <button
            type="button"
            aria-label="Close dossier"
            data-autofocus
            onClick={closeOverlay}
            className={styles.button}
          >
            <MaterialIcon name="close" className={styles.icon} />
          </button>
        </div>

        <div ref={bodyRef} className={styles.box3}>
          <InItem index={0} className={styles.row}>
            <SwapImage
              className={styles.image}
              src={watch.src}
              alt={watch.alt}
              width="781"
              height="780"
              decoding="async"
            />
            <h3 id="modal-watch-name" className={styles.modalWatchName}>{data.name}</h3>
            <span className={styles.span2}>{data.price}</span>
          </InItem>

          <div className={styles.box4}>
            <InItem index={1} className={styles.row2}>
              <h4 className={styles.subheading}>Technical Characteristics</h4>
            </InItem>
            <dl className={styles.terms}>
              {specRows.map(([label, field], i) => (
                <InItem
                  key={field}
                  index={i + 2}
                  className={`${styles.row3} ${i < specRows.length - 1 ? styles.row4 : ''}`}
                >
                  <dt className={styles.term}>{label}</dt>
                  <dd className={styles.definition}>{data[field]}</dd>
                </InItem>
              ))}
            </dl>
          </div>
        </div>

        <div className={styles.box5}>
          <span className={styles.span3}>Subject to official boutique allocation</span>
          <div className={styles.box6}>
            <button
              type="button"
              onClick={closeOverlay}
              className={styles.button2}
            >
              Close
            </button>
            <button
              type="button"
              onClick={reserve}
              className={styles.button3}
            >
              Reserve Private Viewing
            </button>
          </div>
        </div>
      </Sheet>
    </Overlay>
  );
}

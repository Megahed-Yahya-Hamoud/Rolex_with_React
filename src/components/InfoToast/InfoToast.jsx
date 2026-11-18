import { useApp } from '../../context/AppContext';
import MaterialIcon from '../ui/MaterialIcon';
import Overlay, { Sheet } from '../ui/Overlay';
import styles from './InfoToast.module.css';

/** Confirmation / info dialog (booking confirmed, newsletter, legal notices…) */
export default function InfoToast() {
  const { overlay, closeOverlay, toast } = useApp();
  const t = toast || {};

  return (
    <Overlay
      id="toast-modal"
      open={overlay === 'toast'}
      onClose={closeOverlay}
      aria-labelledby="toast-title"
      className={styles.toastModal}
    >
      <Sheet className={styles.sheet}>
        <div className={styles.box}>
          <MaterialIcon name={t.icon || 'mark_email_read'} className={styles.icon} />
        </div>
        <span className={styles.span}>{t.kicker}</span>
        <h3 id="toast-title" className={styles.toastTitle}>{t.title}</h3>
        <p className={styles.text}>{t.body}</p>
        {t.ref && (
          <div className={styles.box2}>
            <span className={styles.span2}>Protocol Reference</span>
            <span className={styles.span3}>{t.ref}</span>
          </div>
        )}
        <button
          type="button"
          data-autofocus
          onClick={closeOverlay}
          className={`${styles.button} ${t.ref ? '' : styles.button2}`}
        >
          Understood
        </button>
      </Sheet>
    </Overlay>
  );
}

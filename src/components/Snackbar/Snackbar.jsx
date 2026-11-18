import { useApp } from '../../context/AppContext';
import styles from './Snackbar.module.css';

export default function Snackbar() {
  const { snackState } = useApp();

  return (
    <div
      id="snack"
      role="status"
      aria-live="polite"
      className={`${styles.snack} ${snackState.show ? styles.isShow : ''} ${styles.snack2}`}
    >
      {snackState.msg}
    </div>
  );
}

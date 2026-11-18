import styles from './GoldText.module.css';

export default function GoldText({ as: Tag = 'span', className = '', children }) {
  return <Tag className={`${styles.gold} ${className}`}>{children}</Tag>;
}

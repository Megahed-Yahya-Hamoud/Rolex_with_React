import styles from './MaterialIcon.module.css';

/** Google "Material Symbols Outlined" icon. `fill` switches the icon to its filled variant. */
export default function MaterialIcon({ name, fill = false, className = '', ...rest }) {
  const classes = ['material-symbols-outlined', styles.icon, fill ? styles.fill : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={classes} {...rest}>
      {name}
    </span>
  );
}

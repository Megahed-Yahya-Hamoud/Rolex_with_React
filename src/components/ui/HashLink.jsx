import { goTo } from '../../utils/scroll';

/** <a href="#section"> that scrolls with the eased smooth-scroll instead of jumping. */
export default function HashLink({ href, onClick, children, ...rest }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    const id = href.slice(1);
    if (id === '' || document.getElementById(id)) {
      e.preventDefault();
      goTo(id || 'home');
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

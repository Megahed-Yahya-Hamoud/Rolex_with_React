import { useEffect } from 'react';

/** Hides the Material Symbols ligature text until the icon font has loaded. */
export default function useIconsReady() {
  useEffect(() => {
    const root = document.documentElement;
    const ready = () => root.classList.add('icons-ready');

    if (!(document.fonts && document.fonts.load)) {
      ready();
      return undefined;
    }
    document.fonts.load('20px "Material Symbols Outlined"').then(ready, ready);
    const t = setTimeout(ready, 2500);
    return () => clearTimeout(t);
  }, []);
}

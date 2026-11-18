import { useEffect } from 'react';
import { goTo } from '../utils/scroll';

/** Scrolls to /#section on first load. */
export default function useDeepLink() {
  useEffect(() => {
    const run = () => {
      const id = window.location.hash.slice(1);
      if (id && document.getElementById(id)) setTimeout(() => goTo(id, { instant: true }), 60);
    };
    if (document.readyState === 'complete') {
      run();
      return undefined;
    }
    window.addEventListener('load', run);
    return () => window.removeEventListener('load', run);
  }, []);
}

import { useEffect, useState } from 'react';
import { headerOffset } from '../utils/scroll';

/** Returns the id of the section currently under the "reading line". */
export default function useScrollSpy(ids) {
  const [current, setCurrent] = useState(ids[0]);

  useEffect(() => {
    let tick = false;

    const update = () => {
      tick = false;
      const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (!els.length) return;
      const line = headerOffset() + window.innerHeight * 0.3;
      let cur = els[0].id;
      els.forEach((s) => {
        if (s.getBoundingClientRect().top <= line) cur = s.id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        cur = ids[ids.length - 1];
      }
      setCurrent(cur);
    };

    const onScroll = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return current;
}

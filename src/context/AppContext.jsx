import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { watchData } from '../data/watchData';
import {
  DEFAULT_LOCATION, DEFAULT_TIMEPIECE, locationOptions, timepieceOptions
} from '../data/booking';
import { DEFAULT_CONFIG } from '../data/config';
import { goTo } from '../utils/scroll';

const AppContext = createContext(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}

export function AppProvider({ children }) {
  /* ---------------- Snackbar ---------------- */
  const [snackState, setSnackState] = useState({ msg: '', show: false });
  const snackTimer = useRef(0);
  const snack = useCallback((msg) => {
    setSnackState({ msg, show: true });
    clearTimeout(snackTimer.current);
    snackTimer.current = setTimeout(() => setSnackState((s) => ({ ...s, show: false })), 2200);
  }, []);

  /* ---------------- Overlays (only one open at a time) ---------------- */
  const [overlay, setOverlay] = useState(null); // 'watch' | 'toast' | 'search' | null
  const [watch, setWatch] = useState({ key: 'daytona', src: watchData.daytona.image, alt: watchData.daytona.alt });
  const [toast, setToast] = useState(null);

  const closeOverlay = useCallback(() => setOverlay(null), []);
  const openSearch = useCallback(() => setOverlay('search'), []);

  const openWatch = useCallback((key, img) => {
    const valid = watchData[key] ? key : 'daydate';
    const d = watchData[valid];
    setWatch({ key: valid, src: (img && img.src) || d.image, alt: (img && img.alt) || d.alt });
    setOverlay('watch');
  }, []);

  const showToast = useCallback(({ icon, kicker, title, body, ref }) => {
    setToast({ icon: icon || 'mark_email_read', kicker, title, body, ref });
    setOverlay('toast');
  }, []);

  // Scroll lock + focus restore whenever an overlay opens / closes
  const lastFocus = useRef(null);
  const prevOverlay = useRef(null);
  useEffect(() => {
    if (overlay && !prevOverlay.current) {
      lastFocus.current = document.activeElement;
      const sbw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (sbw > 0) document.body.style.paddingRight = `${sbw}px`;
    }
    if (!overlay && prevOverlay.current) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const el = lastFocus.current;
      if (el && document.contains(el)) {
        try { el.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
      }
      lastFocus.current = null;
    }
    prevOverlay.current = overlay;
  }, [overlay]);

  /* ---------------- Booking form (shared with footer / modal / configurator) ---------------- */
  const [booking, setBooking] = useState({ timepiece: DEFAULT_TIMEPIECE, location: DEFAULT_LOCATION });

  const selectTimepiece = useCallback((key) => {
    if (timepieceOptions.some((o) => o.value === key)) setBooking((b) => ({ ...b, timepiece: key }));
  }, []);
  const selectLocation = useCallback((key) => {
    if (locationOptions.some((o) => o.value === key)) setBooking((b) => ({ ...b, location: key }));
  }, []);
  const resetBooking = useCallback(
    () => setBooking({ timepiece: DEFAULT_TIMEPIECE, location: DEFAULT_LOCATION }),
    []
  );

  const reserveAndScroll = useCallback((key) => {
    selectTimepiece(key);
    goTo('concierge');
    setTimeout(() => {
      const input = document.getElementById('client-name');
      if (input) input.focus({ preventScroll: true });
    }, 900);
  }, [selectTimepiece]);

  /* ---------------- Configurator ---------------- */
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [configChosen, setConfigChosen] = useState(false);
  const cfgSummary = `${config.dia} • ${config.metal} • ${config.brc} Bracelet`;

  const updateConfig = useCallback((field, value) => {
    setConfig((c) => ({ ...c, [field]: value }));
    setConfigChosen(true);
  }, []);

  const inquireWithConfig = () => {
    selectTimepiece('metiers');
    setConfigChosen(true);
    reserveAndScroll('metiers');
    snack(`Configuration added: ${cfgSummary}`);
  };

  const value = {
    snackState, snack,
    overlay, closeOverlay, openSearch,
    watch, openWatch,
    toast, showToast,
    booking, selectTimepiece, selectLocation, resetBooking, reserveAndScroll,
    config, updateConfig, configChosen, setConfigChosen, cfgSummary, inquireWithConfig
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

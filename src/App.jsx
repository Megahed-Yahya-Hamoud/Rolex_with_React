import { AppProvider } from './context/AppContext';
import { SPY_IDS } from './data/navigation';
import useDeepLink from './hooks/useDeepLink';
import useIconsReady from './hooks/useIconsReady';
import useScrollSpy from './hooks/useScrollSpy';

import AtelierStats from './components/AtelierStats/AtelierStats';
import BottomNav from './components/BottomNav/BottomNav';
import Collection from './components/Collection/Collection';
import Concierge from './components/Concierge/Concierge';
import ConceptBanner from './components/ConceptBanner/ConceptBanner';
import Configurator from './components/Configurator/Configurator';
import Craftsmanship from './components/Craftsmanship/Craftsmanship';
import DaytonaSpotlight from './components/DaytonaSpotlight/DaytonaSpotlight';
import Footer from './components/Footer/Footer';
import Guarantees from './components/Guarantees/Guarantees';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InfoToast from './components/InfoToast/InfoToast';
import Legacy from './components/Legacy/Legacy';
import MetiersDart from './components/MetiersDart/MetiersDart';
import SearchModal from './components/SearchModal/SearchModal';
import Snackbar from './components/Snackbar/Snackbar';
import WatchSpecsModal from './components/WatchSpecsModal/WatchSpecsModal';
import styles from './App.module.css';

function Page() {
  const activeId = useScrollSpy(SPY_IDS);
  useIconsReady();
  useDeepLink();

  return (
    <>
      <ConceptBanner />
      <Header activeId={activeId} />

      <main className={styles.main}>
        {/* Ambient Light & Atmospheric Emerald Aura */}
        <div className={styles.box} aria-hidden="true">
          <div className={styles.box2} />
          <div className={styles.box3} />
          <div className={styles.box4} />
          <div className={styles.box5} />
        </div>

        <Hero />
        <AtelierStats />
        <Collection />
        <DaytonaSpotlight />
        <MetiersDart />
        <Craftsmanship />
        <Configurator />
        <Legacy />
        <Concierge />
        <Guarantees />
      </main>

      <Footer />
      <BottomNav activeId={activeId} />

      <WatchSpecsModal />
      <InfoToast />
      <SearchModal />
      <Snackbar />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Page />
    </AppProvider>
  );
}

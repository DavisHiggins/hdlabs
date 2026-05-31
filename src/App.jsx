import { InteractionProvider } from './context/InteractionContext.jsx';
import BackgroundSystem from './components/BackgroundSystem.jsx';
import RouteBackground from './components/RouteBackground.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PageTransition from './components/PageTransition.jsx';
import SystemBootLoader from './components/SystemBootLoader.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import PageIdentityIndicator from './components/PageIdentityIndicator.jsx';

export default function App() {
  return (
    <InteractionProvider>
      <BackgroundSystem />
      <RouteBackground />
      <CustomCursor />
      <SystemBootLoader />
      <CommandPalette />

      <SmoothScroll>
        <ScrollToTop />
        <PageIdentityIndicator />
        <Header />
        <PageTransition />
        <Footer />
      </SmoothScroll>
    </InteractionProvider>
  );
}

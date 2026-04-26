import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import SpecialtyHighlights from '../components/SpecialtyHighlights';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <main style={{ flex: 1 }}>
      <Hero />
      <SpecialtyHighlights />
      <WhoWeAre />
      <ContactSection />
      <MapSection />
      <FloatingWhatsApp />
    </main>
  );
}

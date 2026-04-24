import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import EquipmentCatalog from '../components/EquipmentCatalog';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <main style={{ flex: 1 }}>
      <Hero />
      <WhoWeAre />
      <EquipmentCatalog />
      <ContactSection />
      <MapSection />
      <FloatingWhatsApp />
    </main>
  );
}

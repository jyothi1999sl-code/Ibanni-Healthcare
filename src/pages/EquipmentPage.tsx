import EquipmentCatalog from '../components/EquipmentCatalog';
import ContactSection from '../components/ContactSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function EquipmentPage() {
  return (
    <main style={{ flex: 1, paddingTop: '100px' }}>
      <EquipmentCatalog />
      <ContactSection />
      <FloatingWhatsApp />
    </main>
  );
}

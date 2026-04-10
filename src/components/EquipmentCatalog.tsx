import { Link } from 'react-router-dom';
import { Settings, Sun, HeartPulse, Shield, Bed, Layers, Package, ClipboardCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const equipmentList = [
  // Hospital Furnitures
  { id: 1, name: 'Manual Hospital Bed', category: 'Hospital Furnitures', description: 'Standard ward bed with dual crank mechanism for height and backrest adjustment.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-blue-600)" /> },
  { id: 2, name: 'Electric Hospital Bed', category: 'Hospital Furnitures', description: 'Advanced motorized bed with remote control for ICU and specialty ward environments.', image: '/ecg_machine_medical.png', icon: <Bed size={24} color="var(--color-blue-600)" /> },
  { id: 3, name: 'Orthopedic Traction Bed', category: 'Hospital Furnitures', description: 'Specialized bed equipped with overhead traction frame and pulley system for orthopedic support.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-blue-600)" /> },
  { id: 4, name: 'Pediatric Hospital Bed', category: 'Hospital Furnitures', description: 'Safely designed child-friendly bed with drop-side railings and playful, durable finish.', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-blue-600)" /> },
  { id: 5, name: 'Attendant Bed', category: 'Hospital Furnitures', description: 'Compact and comfortable attendant couch designed for overnight stays in patient rooms.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-blue-600)" /> },
  { id: 6, name: 'Hospital Ward Furniture', category: 'Hospital Furnitures', description: 'Modular bedside cabinets, lockers, and ward storage units for organized patient care.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop', icon: <Package size={24} color="var(--color-blue-600)" /> },
  { id: 7, name: 'Blood Donor Couch', category: 'Hospital Furnitures', description: 'Ergonomically designed fully-reclining couch for donor comfort during blood collection.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop', icon: <HeartPulse size={24} color="var(--color-blue-600)" /> },
  { id: 8, name: 'Ambulance Stretcher', category: 'Hospital Furnitures', description: 'High-strength aluminum alloy emergency stretcher with auto-loading and locking features.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 9, name: 'Hospital Trolley', category: 'Hospital Furnitures', description: 'Multi-purpose medical trolleys including medicine, dressing, and crash cart variants.', image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3b0606?q=80&w=2000&auto=format&fit=crop', icon: <Settings size={24} color="var(--color-blue-600)" /> },
  { id: 10, name: 'Examination Table', category: 'Hospital Furnitures', description: 'Fully adjustable delivery and examination table designed for labor and general diagnostics.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', icon: <ClipboardCheck size={24} color="var(--color-blue-600)" /> },
  { id: 11, name: 'Precision Wheelchair', category: 'Hospital Furnitures', description: 'Lightweight, foldable patient transport chair with high-comfort seat and safety brakes.', image: 'https://images.unsplash.com/photo-1538108149393-cefb6b00ee76?q=80&w=2000&auto=format&fit=crop', icon: <Shield size={24} color="var(--color-blue-600)" /> },

  // X ray supplies
  { id: 12, name: 'Lead Apron', category: 'X ray supplies', description: 'Premium radiation protection apparel ensuring maximum safety for healthcare professionals.', image: '/equipment/lead_apron.png', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 13, name: 'Thyroid Collar', category: 'X ray supplies', description: 'Essential neck protection against scatter radiation during radiological procedures.', image: '/equipment/thyroid_collar.png', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 14, name: 'Gonad Shield', category: 'X ray supplies', description: 'Specialized shielding to protect sensitive areas from radiation exposure.', image: '/equipment/gonad_shield.png', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 15, name: 'Head Shield', category: 'X ray supplies', description: 'Comprehensive cranial protection for medical staff in high-radiation environments.', image: '/equipment/head_shield.png', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 16, name: 'Breast Protector', category: 'X ray supplies', description: 'Ergonomic shielding designed for chest protection during imaging.', image: '/equipment/breast_protector.png', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 17, name: 'Lead Gloves', category: 'X ray supplies', description: 'High-attenuation protective gloves for hand safety during fluoroscopy.', image: '/equipment/lead_gloves.png', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 18, name: 'Lead Goggles', category: 'X ray supplies', description: 'Precision leaded eyewear for clear vision and superior eye protection.', image: '/equipment/lead_goggles.png', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 19, name: 'X-Ray View Box', category: 'X ray supplies', description: 'High-illumination film viewers for accurate diagnostic interpretation.', image: '/equipment/xray_view_box.png', icon: <Layers size={24} color="var(--color-blue-600)" /> },
  { id: 20, name: 'Apron Rack', category: 'X ray supplies', description: 'Heavy-duty storage solutions to maintain the integrity of protective apparel.', image: '/equipment/apron_rack.png', icon: <Package size={24} color="var(--color-blue-600)" /> },
  { id: 21, name: 'Mobile Lead Barrier', category: 'X ray supplies', description: 'Portable high-density shielding for flexible room configurations.', image: '/equipment/mobile_lead_barrier.png', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 22, name: 'X-Ray Hanger', category: 'X ray supplies', description: 'Durable clips and frames for secure film processing and storage.', image: '/equipment/xray_hanger.png', icon: <Layers size={24} color="var(--color-blue-600)" /> },
  { id: 23, name: 'X-Ray Cassette', category: 'X ray supplies', description: 'Robust imaging cassettes compatible with modern radiology systems.', image: '/equipment/xray_cassette.png', icon: <Layers size={24} color="var(--color-blue-600)" /> },

  // OT Equipments
  { id: 24, name: 'OT Light (LED Shadowless)', category: 'OT Equipments', description: 'Advanced shadowless LED surgical lighting for superior visibility and cool beam performance.', image: '/equipment/ot_light.png', icon: <Sun size={24} color="var(--color-blue-600)" /> },
  { id: 25, name: 'OT Table (Hydraulic/Electric)', category: 'OT Equipments', description: 'Versatile surgical tables with hydraulic or electric controls for precise patient positioning.', image: '/equipment/ot_table.png', icon: <Settings size={24} color="var(--color-blue-600)" /> },
  { id: 26, name: 'Examination Light', category: 'OT Equipments', description: 'Focused, high-intensity task lighting for diagnostics and minor procedures.', image: '/equipment/examination_light.png', icon: <Sun size={24} color="var(--color-blue-600)" /> },
  { id: 27, name: 'Electrosurgical Unit', category: 'OT Equipments', description: 'Precision cutting and coagulation systems for diverse surgical applications.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop', icon: <Settings size={24} color="var(--color-blue-600)" /> },

  // Infant care equipment
  { id: 28, name: 'Infant Radiant Warmer', category: 'Infant care equipment', description: 'Microprocessor-controlled thermal regulation for maintaining neonate body temperature.', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop', icon: <Sun size={24} color="var(--color-blue-600)" /> },
  { id: 29, name: 'Infant Incubator', category: 'Infant care equipment', description: 'Controlled micro-environment providing heat, humidity, and oxygen for premature infants.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop', icon: <Settings size={24} color="var(--color-blue-600)" /> },
  { id: 30, name: 'Resuscitation Unit', category: 'Infant care equipment', description: 'Emergency ventilation and suction systems designed specifically for neonatal care.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop', icon: <HeartPulse size={24} color="var(--color-blue-600)" /> },
  { id: 31, name: 'Oxygen Hood', category: 'Infant care equipment', description: 'Precise oxygen delivery system for infants requiring respiratory support.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', icon: <Shield size={24} color="var(--color-blue-600)" /> },
  { id: 32, name: 'Phototherapy Unit', category: 'Infant care equipment', description: 'High-intensity LED treatment systems for managing neonatal jaundice.', image: 'https://images.unsplash.com/photo-1538108149393-cefb6b00ee76?q=80&w=2000&auto=format&fit=crop', icon: <Sun size={24} color="var(--color-blue-600)" /> },
];




const categoryDescriptions: Record<string, { title: string, lead: string, points: string[], footer: string }> = {
  'Hospital Furnitures': {
    title: 'Elevate Patient Care with Ibanni Healthcare',
    lead: 'Ibanni Healthcare is a leading manufacturer and supplier of premium hospital furniture. We specialize in durable, high-quality solutions crafted from superior raw materials to ensure a flawless finish and long-lasting performance.',
    points: [
      'Beds & Ward Furniture: Hospital beds, ward essentials, and delivery tables.',
      'Mobility & Emergency: Wheelchairs and ambulance stretchers.',
      'Clinical Equipment: Examination tables, hospital trolleys, and blood donor couches.'
    ],
    footer: 'Experience the reliability of an industry leader dedicated to functional healthcare environments.'
  },
  'X ray supplies': {
    title: 'Superior Radiation Protection with ibanni healthcare',
    lead: 'ibanni healthcare is a leading manufacturer and trusted global supplier of premium X-Ray Supplies and Radiation Protection Apparel. We are committed to providing the highest level of safety for healthcare professionals through products that meet stringent international standards.',
    points: [
      'Apparel: Lead aprons, thyroid shields, gonad/ovarian protectors, and lead gloves.',
      'Specialized Gear: Radiation head shields, breast protectors, and lead goggles.',
      'Equipment: Mobile lead barriers, X-ray view boxes, apron racks, and cassettes.'
    ],
    footer: 'Crafted from high-quality materials for maximum durability and effective shielding, ibanni healthcare is the reliable partner for hospitals and diagnostic labs worldwide.'
  },
  'OT Equipments': {
    title: 'Precision OT Equipment by ibanni healthcare',
    lead: 'ibanni healthcare is a premier manufacturer, supplier, and exporter of high-performance OT Equipment. We specialize in providing technologically advanced solutions designed to enhance surgical precision and ensure optimal patient outcomes.',
    points: [
      'OT Lights & Examination Lights: Exceptional, focused illumination for surgery and clinical exams.',
      'OT Tables: Versatile and ergonomic designs tailored for surgical precision and comfort.',
      'Electrosurgical Units: Controlled energy output for safe and efficient surgical techniques.'
    ],
    footer: 'Committed to excellence and durability, ibanni healthcare delivers equipment that meets the highest industry standards for reliability and safety.'
  },
  'Infant care equipment': {
    title: 'Advanced Neonatal Solutions by ibanni healthcare',
    lead: 'ibanni healthcare is a leading manufacturer and trusted global supplier of high-quality Infant Care Equipment. Our products are meticulously designed to meet stringent medical standards, providing newborns with the stable, safe environment necessary for optimal care.',
    points: [
      'Thermal Regulation: Premium Infant Radiant Warmers and Incubators for precise temperature control.',
      'Critical Care: Reliable Resuscitation Units and Oxygen Hoods for emergency and respiratory support.',
      'Specialized Treatment: Effective Phototherapy Units for treating neonatal jaundice.'
    ],
    footer: 'Recognized for reliability and innovation, ibanni healthcare is the preferred partner for pediatricians and neonatal care centers worldwide.'
  }
};

export default function EquipmentCatalog() {
  const categories = Array.from(new Set(equipmentList.map(item => item.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const fallbackImage = 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop';

  const filteredEquipment = equipmentList.filter(item => item.category === selectedCategory);
  const currentDesc = categoryDescriptions[selectedCategory];

  return (
    <section id="equipment" className="section bg-gradient-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge animate-fade-in-up">Our Portfolio</div>
          <h2 className="animate-fade-in-up delay-100" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Advanced Medical Solutions</h2>
          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.2rem', color: 'var(--color-gray-800)', maxWidth: '700px', margin: '0 auto' }}>
            Discover our meticulously engineered range of furniture and supplies, built for modern medical facilities with precision and care.
          </p>
        </div>

        {/* Category Filter */}
        <div className="animate-fade-in-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginBottom: '4rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ 
                padding: '0.875rem 2rem', 
                fontSize: '1.125rem', 
                fontWeight: 700,
                boxShadow: selectedCategory === cat ? '0 10px 20px -5px rgba(0, 86, 150, 0.4)' : 'var(--shadow-sm)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Description Section */}
        {currentDesc && (
          <div className="animate-fade-in-up" style={{ marginBottom: '5rem', background: 'white', padding: '3.5rem', borderRadius: '2rem', boxShadow: 'var(--shadow-soft)', border: '1px solid rgba(0, 86, 150, 0.05)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h3 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{currentDesc.title}</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-gray-800)', marginBottom: '2rem', lineHeight: 1.8 }}>
                {currentDesc.lead}
              </p>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--color-gray-900)' }}>Our extensive product range includes:</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {currentDesc.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--color-gray-800)' }}>
                      <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '0.6rem' }}></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--color-gray-700)', marginBottom: '3rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                {currentDesc.footer}
              </p>
              
              <div style={{ background: 'var(--color-primary-light)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(0, 86, 150, 0.1)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Package size={20} /> Request a Quote
                </h4>
                <p style={{ color: 'var(--color-gray-800)', lineHeight: 1.6 }}>
                  Please send your requirements and quantities to <a href="mailto:info@ibannihealthcare.com" style={{ fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'underline' }}>info@ibannihealthcare.com</a> for our best CIF/C&F pricing.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredEquipment.map((item, index) => (
            <div 
              key={item.id} 
              className="product-card animate-fade-in-up"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
            >
              <div className="product-image-container">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="product-image"
                  onError={(e) => { e.currentTarget.src = fallbackImage }}
                />
              </div>
              <div className="product-details">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ background: 'var(--color-green-50)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#005696', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.category}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', minHeight: '3.5rem' }}>{item.name}</h3>
                <p style={{ color: 'var(--color-gray-800)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '60px' }}>{item.description}</p>
                
                {item.name === 'Lead Apron' && (
                  <Link 
                    to="/equipment/lead-apron" 
                    className="btn btn-secondary" 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      fontSize: '0.85rem', 
                      padding: '0.5rem 1rem', 
                      width: 'fit-content',
                      marginTop: 'auto',
                      background: 'rgba(0, 86, 150, 0.05)',
                      color: 'var(--color-primary)',
                      border: '1px solid rgba(0, 86, 150, 0.2)'
                    }}
                  >
                    Technical Specs <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

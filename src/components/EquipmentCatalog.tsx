import { Link } from 'react-router-dom';
import { Settings, Sun, HeartPulse, Shield, Bed, Layers, Package, ClipboardCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const equipmentList = [
  // Hospital Furnitures
  { id: 1, name: 'Manual Hospital Bed', category: 'Hospital Furnitures', description: 'Standard ward bed with dual crank mechanism for height and backrest adjustment.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 2, name: 'Electric Hospital Bed', category: 'Hospital Furnitures', description: 'Advanced motorized bed with remote control for ICU and specialty ward environments.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 3, name: 'Orthopedic Traction Bed', category: 'Hospital Furnitures', description: 'Specialized bed equipped with overhead traction frame and pulley system for orthopedic support.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 4, name: 'Pediatric Hospital Bed', category: 'Hospital Furnitures', description: 'Safely designed child-friendly bed with drop-side railings and playful, durable finish.', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 5, name: 'Attendant Bed', category: 'Hospital Furnitures', description: 'Compact and comfortable attendant couch designed for overnight stays in patient rooms.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 6, name: 'Hospital Ward Furniture', category: 'Hospital Furnitures', description: 'Modular bedside cabinets, lockers, and ward storage units for organized patient care.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop', icon: <Package size={24} color="var(--color-secondary)" /> },
  { id: 7, name: 'Blood Donor Couch', category: 'Hospital Furnitures', description: 'Ergonomically designed fully-reclining couch for donor comfort during blood collection.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop', icon: <HeartPulse size={24} color="var(--color-secondary)" /> },
  { id: 8, name: 'Ambulance Stretcher', category: 'Hospital Furnitures', description: 'High-strength aluminum alloy emergency stretcher with auto-loading and locking features.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 9, name: 'Hospital Trolley', category: 'Hospital Furnitures', description: 'Multi-purpose medical trolleys including medicine, dressing, and crash cart variants.', image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3b0606?q=80&w=2000&auto=format&fit=crop', icon: <Settings size={24} color="var(--color-secondary)" /> },
  { id: 10, name: 'Examination Table', category: 'Hospital Furnitures', description: 'Fully adjustable delivery and examination table designed for labor and general diagnostics.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', icon: <ClipboardCheck size={24} color="var(--color-secondary)" /> },
  { id: 11, name: 'Precision Wheelchair', category: 'Hospital Furnitures', description: 'Lightweight, foldable patient transport chair with high-comfort seat and safety brakes.', image: 'https://images.unsplash.com/photo-1538108149393-cefb6b00ee76?q=80&w=2000&auto=format&fit=crop', icon: <Shield size={24} color="var(--color-secondary)" /> },

  // X ray supplies
  { id: 12, name: 'Lead Apron', category: 'X ray supplies', description: 'Premium radiation protection apparel ensuring maximum safety for healthcare professionals.', image: '/equipment/lead_apron.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 13, name: 'Thyroid Collar', category: 'X ray supplies', description: 'Essential neck protection against scatter radiation during radiological procedures.', image: '/equipment/thyroid_collar.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 14, name: 'Gonad Shield', category: 'X ray supplies', description: 'Specialized shielding to protect sensitive areas from radiation exposure.', image: '/equipment/gonad_shield.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 15, name: 'Head Shield', category: 'X ray supplies', description: 'Comprehensive cranial protection for medical staff in high-radiation environments.', image: '/equipment/head_shield.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 16, name: 'Breast Protector', category: 'X ray supplies', description: 'Ergonomic shielding designed for chest protection during imaging.', image: '/equipment/breast_protector.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 17, name: 'Lead Gloves', category: 'X ray supplies', description: 'High-attenuation protective gloves for hand safety during fluoroscopy.', image: '/equipment/lead_gloves.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 18, name: 'Lead Goggles', category: 'X ray supplies', description: 'Precision leaded eyewear for clear vision and superior eye protection.', image: '/equipment/lead_goggles.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 19, name: 'X-Ray View Box', category: 'X ray supplies', description: 'High-illumination film viewers for accurate diagnostic interpretation.', image: '/equipment/xray_view_box.png', icon: <Layers size={24} color="var(--color-secondary)" /> },
  { id: 20, name: 'Apron Rack', category: 'X ray supplies', description: 'Heavy-duty storage solutions to maintain the integrity of protective apparel.', image: '/equipment/apron_rack.png', icon: <Package size={24} color="var(--color-secondary)" /> },
  { id: 21, name: 'Mobile Lead Barrier', category: 'X ray supplies', description: 'Portable high-density shielding for flexible room configurations.', image: '/equipment/mobile_lead_barrier.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 22, name: 'X-Ray Hanger', category: 'X ray supplies', description: 'Durable clips and frames for secure film processing and storage.', image: '/equipment/xray_hanger.png', icon: <Layers size={24} color="var(--color-secondary)" /> },
  { id: 23, name: 'X-Ray Cassette', category: 'X ray supplies', description: 'Robust imaging cassettes compatible with modern radiology systems.', image: '/equipment/xray_cassette.png', icon: <Layers size={24} color="var(--color-secondary)" /> },

  // OT Equipments
  { id: 24, name: 'OT Light (LED Shadowless)', category: 'OT Equipments', description: 'Advanced shadowless LED surgical lighting for superior visibility and cool beam performance.', image: '/equipment/ot_light.png', icon: <Sun size={24} color="var(--color-secondary)" /> },
  { id: 25, name: 'OT Table (Hydraulic/Electric)', category: 'OT Equipments', description: 'Versatile surgical tables with hydraulic or electric controls for precise patient positioning.', image: '/equipment/ot_table.png', icon: <Settings size={24} color="var(--color-secondary)" /> },
  { id: 26, name: 'Examination Light', category: 'OT Equipments', description: 'Focused, high-intensity task lighting for diagnostics and minor procedures.', image: '/equipment/examination_light.png', icon: <Sun size={24} color="var(--color-secondary)" /> },
  { id: 27, name: 'Electrosurgical Unit', category: 'OT Equipments', description: 'Precision cutting and coagulation systems for diverse surgical applications.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop', icon: <Settings size={24} color="var(--color-secondary)" /> },

  // Infant care equipment
  { id: 28, name: 'Infant Radiant Warmer', category: 'Infant care equipment', description: 'Microprocessor-controlled thermal regulation for maintaining neonate body temperature.', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop', icon: <Sun size={24} color="var(--color-secondary)" /> },
  { id: 29, name: 'Infant Incubator', category: 'Infant care equipment', description: 'Controlled micro-environment providing heat, humidity, and oxygen for premature infants.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop', icon: <Settings size={24} color="var(--color-secondary)" /> },
  { id: 30, name: 'Resuscitation Unit', category: 'Infant care equipment', description: 'Emergency ventilation and suction systems designed specifically for neonatal care.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop', icon: <HeartPulse size={24} color="var(--color-secondary)" /> },
  { id: 31, name: 'Oxygen Hood', category: 'Infant care equipment', description: 'Precise oxygen delivery system for infants requiring respiratory support.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 32, name: 'Phototherapy Unit', category: 'Infant care equipment', description: 'High-intensity LED treatment systems for managing neonatal jaundice.', image: 'https://images.unsplash.com/photo-1538108149393-cefb6b00ee76?q=80&w=2000&auto=format&fit=crop', icon: <Sun size={24} color="var(--color-secondary)" /> },
];

const categoryDescriptions: Record<string, { title: string, lead: string, points: string[], footer: string }> = {
  'Hospital Furnitures': {
    title: 'Hospital Furniture Systems',
    lead: 'Ibanni Healthcare manufactures premium hospital furniture crafted from superior materials for long-lasting performance in critical environments.',
    points: ['Beds & Delivery Tables', 'Mobility Solutions', 'Ward Cabinets'],
    footer: 'Functional healthcare environments start here.'
  },
  'X ray supplies': {
    title: 'Radiation Safety Solutions',
    lead: 'Premium Radiation Protection Apparel meeting international standards for diagnostic safety.',
    points: ['Lead Aprons & Shields', 'Protective Eyewear', 'Mobile Barriers'],
    footer: 'Trusted protection for radiologists worldwide.'
  },
  'OT Equipments': {
    title: 'Precision OT Solutions',
    lead: 'Technologically advanced OT lights and tables designed for surgical excellence.',
    points: ['Shadowless LED Lights', 'Hydraulic OT Tables', 'Surgical Units'],
    footer: 'Enhancing outcomes with surgical precision.'
  },
  'Infant care equipment': {
    title: 'Neonatal Care Systems',
    lead: 'Providing newborns with stable, safe micro-environments for optimal neonatal development.',
    points: ['Radiant Warmers', 'Incubators', 'Phototherapy'],
    footer: 'Preferred partner for neonatal centers.'
  }
};

export default function EquipmentCatalog() {
  const categories = Array.from(new Set(equipmentList.map(item => item.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const fallbackImage = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop';
  const filteredEquipment = equipmentList.filter(item => item.category === selectedCategory);
  const currentDesc = categoryDescriptions[selectedCategory];

  return (
    <section id="equipment" className="section" style={{ backgroundColor: '#fdfdfd' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="badge animate-fade-in-up" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
             <Sparkles size={14} /> CATALOGUE 2024
          </div>
          <h2 className="animate-fade-in-up delay-100" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
            Advanced Medical Engineering
          </h2>
          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Explore our meticulously engineered range of medical supplies, built for modern hospitals with clinical precision.
          </p>
        </div>

        <div className="category-layout">
          {/* Enhanced Vertical Sidebar */}
          <aside className="category-sidebar animate-fade-in-up delay-300">
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '2.5rem', 
              boxShadow: 'var(--shadow-soft)',
              border: '1px solid rgba(0,0,0,0.03)'
            }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gray-400)', marginBottom: '2rem', paddingLeft: '0.5rem', fontWeight: 800 }}>
                Department Filter
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                    style={{ 
                      borderRadius: '1.25rem',
                      padding: '1.25rem',
                      border: selectedCategory === cat ? 'none' : '1px solid #f1f5f9'
                    }}
                  >
                    <div className="icon-container" style={{ 
                      background: selectedCategory === cat ? 'rgba(255,255,255,0.2)' : '#f8fafc',
                      color: selectedCategory === cat ? 'white' : 'var(--color-primary)'
                    }}>
                      {cat === 'Hospital Furnitures' && <Bed size={20} />}
                      {cat === 'X ray supplies' && <Shield size={20} />}
                      {cat === 'OT Equipments' && <Sun size={20} />}
                      {cat === 'Infant care equipment' && <HeartPulse size={20} />}
                    </div>
                    <span style={{ fontWeight: 700 }}>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ 
              marginTop: '2rem', 
              padding: '2.5rem', 
              background: '#111827', 
              borderRadius: '2.5rem', 
              color: 'white',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
            }}>
              <h5 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 700 }}>Bulk Inquiry?</h5>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', lineHeight: 1.5 }}>Dedicated support for large-scale hospital project fulfillment.</p>
              <a href="mailto:Ibannihealthcare@gmail.com" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', borderRadius: '1rem', fontSize: '0.9rem' }}>
                Contact Support
              </a>
            </div>
          </aside>

          {/* Catalog Grid Area */}
          <div style={{ flex: 1 }}>
            <div className="animate-fade-in-up" style={{ marginBottom: '2.5rem', background: 'var(--color-primary-light)', padding: '2rem 3rem', borderRadius: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(0, 82, 155, 0.05)' }}>
               <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>{currentDesc.title}</h3>
                  <p style={{ color: 'var(--color-primary)', opacity: 0.8, fontSize: '1rem', marginTop: '0.25rem' }}>{currentDesc.lead}</p>
               </div>
               <div style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                 {filteredEquipment.length} PRODUCTS
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEquipment.map((item, index) => (
                <div 
                  key={item.id} 
                  className="product-card hover-lift animate-fade-in-up"
                  style={{ 
                    animationDelay: `${(index % 6) * 100}ms`,
                    background: 'white',
                    padding: '1rem',
                    border: '1px solid rgba(0,0,0,0.02)',
                    boxShadow: 'var(--shadow-soft)'
                  }}
                >
                  <div style={{ height: '240px', overflow: 'hidden', borderRadius: '1.75rem', background: '#f8fafc', position: 'relative' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                      onError={(e) => { e.currentTarget.src = fallbackImage }}
                    />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', padding: '0.5rem', borderRadius: '0.75rem', boxShadow: 'var(--shadow-sm)' }}>
                      {item.icon}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem 0.5rem 0.5rem' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-secondary)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                      Premium Series
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', color: '#111827', lineHeight: 1.3 }}>{item.name}</h3>
                    <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>{item.description}</p>
                    
                    <Link 
                      to={item.name === 'Lead Apron' ? `/equipment/lead-apron/frontal-protection` : (item.name.includes('Hospital Bed') ? `/equipment/hospital-bed/${item.id === 1 ? 'icu-bed-ss' : 'icu-bed-abs'}` : '#')}
                      className="btn btn-secondary" 
                      style={{ 
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '1.15rem',
                        fontSize: '0.9rem',
                        fontWeight: 700
                      }}
                    >
                      Technical Review <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Settings, Sun, HeartPulse, Shield, Bed, Layers, Package, ClipboardCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const equipmentList = [
  // Hospital Furnitures
  { id: 1, name: 'Manual Hospital Bed', category: 'Hospital Furnitures', description: 'Standard ward bed with dual crank mechanism for height and backrest adjustment.', image: '/equipment/hospital_bed_clean.png', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 2, name: 'Electric Hospital Bed', category: 'Hospital Furnitures', description: 'Advanced motorized bed with remote control for ICU and specialty ward environments.', image: '/equipment/hospital_bed_clean.png', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 3, name: 'Orthopedic Traction Bed', category: 'Hospital Furnitures', description: 'Specialized bed equipped with overhead traction frame and pulley system for orthopedic support.', image: '/equipment/hospital_bed_clean.png', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 4, name: 'Pediatric Hospital Bed', category: 'Hospital Furnitures', description: 'Safely designed child-friendly bed with drop-side railings and playful, durable finish.', image: '/equipment/hospital_bed_clean.png', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 5, name: 'Attendant Bed', category: 'Hospital Furnitures', description: 'Compact and comfortable attendant couch designed for overnight stays in patient rooms.', image: '/equipment/hospital_bed_clean.png', icon: <Bed size={24} color="var(--color-secondary)" /> },
  { id: 6, name: 'Hospital Ward Furniture', category: 'Hospital Furnitures', description: 'Modular bedside cabinets, lockers, and ward storage units for organized patient care.', image: '/equipment/hospital_bed_clean.png', icon: <Package size={24} color="var(--color-secondary)" /> },
  { id: 7, name: 'Blood Donor Couch', category: 'Hospital Furnitures', description: 'Ergonomically designed fully-reclining couch for donor comfort during blood collection.', image: '/equipment/hospital_bed_clean.png', icon: <HeartPulse size={24} color="var(--color-secondary)" /> },
  { id: 8, name: 'Ambulance Stretcher', category: 'Hospital Furnitures', description: 'High-strength aluminum alloy emergency stretcher with auto-loading and locking features.', image: '/equipment/hospital_bed_clean.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 9, name: 'Hospital Trolley', category: 'Hospital Furnitures', description: 'Multi-purpose medical trolleys including medicine, dressing, and crash cart variants.', image: '/equipment/hospital_bed_clean.png', icon: <Settings size={24} color="var(--color-secondary)" /> },
  { id: 10, name: 'Examination Table', category: 'Hospital Furnitures', description: 'Fully adjustable delivery and examination table designed for labor and general diagnostics.', image: '/equipment/hospital_bed_clean.png', icon: <ClipboardCheck size={24} color="var(--color-secondary)" /> },
  { id: 11, name: 'Precision Wheelchair', category: 'Hospital Furnitures', description: 'Lightweight, foldable patient transport chair with high-comfort seat and safety brakes.', image: '/equipment/hospital_bed_clean.png', icon: <Shield size={24} color="var(--color-secondary)" /> },

  // X ray supplies
  { id: 12, name: 'Lead Apron', category: 'X ray supplies', description: 'Premium radiation protection apparel ensuring maximum safety for healthcare professionals.', image: '/equipment/lead_apron_clean.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
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
  { id: 24, name: 'OT Light (LED Shadowless)', category: 'OT Equipments', description: 'Advanced shadowless LED surgical lighting for superior visibility and cool beam performance.', image: '/equipment/ot_light_clean.png', icon: <Sun size={24} color="var(--color-secondary)" /> },
  { id: 25, name: 'OT Table (Hydraulic/Electric)', category: 'OT Equipments', description: 'Versatile surgical tables with hydraulic or electric controls for precise patient positioning.', image: '/equipment/ot_light_clean.png', icon: <Settings size={24} color="var(--color-secondary)" /> },
  { id: 26, name: 'Examination Light', category: 'OT Equipments', description: 'Focused, high-intensity task lighting for diagnostics and minor procedures.', image: '/equipment/ot_light_clean.png', icon: <Sun size={24} color="var(--color-secondary)" /> },
  { id: 27, name: 'Electrosurgical Unit', category: 'OT Equipments', description: 'Precision cutting and coagulation systems for diverse surgical applications.', image: '/equipment/ot_light_clean.png', icon: <Settings size={24} color="var(--color-secondary)" /> },

  // Infant care equipment
  { id: 28, name: 'Infant Radiant Warmer', category: 'Infant care equipment', description: 'Microprocessor-controlled thermal regulation for maintaining neonate body temperature.', image: '/equipment/infant_incubator_clean.png', icon: <Sun size={24} color="var(--color-secondary)" /> },
  { id: 29, name: 'Infant Incubator', category: 'Infant care equipment', description: 'Controlled micro-environment providing heat, humidity, and oxygen for premature infants.', image: '/equipment/infant_incubator_clean.png', icon: <Settings size={24} color="var(--color-secondary)" /> },
  { id: 30, name: 'Resuscitation Unit', category: 'Infant care equipment', description: 'Emergency ventilation and suction systems designed specifically for neonatal care.', image: '/equipment/infant_incubator_clean.png', icon: <HeartPulse size={24} color="var(--color-secondary)" /> },
  { id: 31, name: 'Oxygen Hood', category: 'Infant care equipment', description: 'Precise oxygen delivery system for infants requiring respiratory support.', image: '/equipment/infant_incubator_clean.png', icon: <Shield size={24} color="var(--color-secondary)" /> },
  { id: 32, name: 'Phototherapy Unit', category: 'Infant care equipment', description: 'High-intensity LED treatment systems for managing neonatal jaundice.', image: '/equipment/infant_incubator_clean.png', icon: <Sun size={24} color="var(--color-secondary)" /> },
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
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = Array.from(new Set(equipmentList.map(item => item.category)));
  
  // Initialize from search param or first category
  const initialCategory = searchParams.get('category') || categories[0];
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories.includes(initialCategory) ? initialCategory : categories[0]
  );

  // Sync state if search param changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.includes(cat) && cat !== selectedCategory) {
      setSelectedCategory(cat);
    }
  }, [searchParams, categories, selectedCategory]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSearchParams({ category: cat });
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop';
  const filteredEquipment = equipmentList.filter(item => item.category === selectedCategory);
  const currentDesc = categoryDescriptions[selectedCategory];

  return (
    <section id="equipment" className="section" style={{ backgroundColor: '#fdfdfd', perspective: '1000px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge animate-fade-in-up" style={{ background: 'var(--color-primary-light)', padding: '0.5rem 1.25rem', marginBottom: '1.5rem' }}>
             <Sparkles size={16} /> PORTFOLIO 2024
          </div>
          <h2 className="animate-fade-in-up delay-100" style={{ fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
            Advanced <span style={{ color: 'var(--color-primary)' }}>Engineering</span>
          </h2>
          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.1rem', color: 'var(--color-gray-500)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.6 }}>
            Explore our meticulously engineered range of medical supplies, built for modern hospitals with clinical precision.
          </p>
        </div>

        <div className="category-layout">
          {/* Enhanced Vertical Sidebar with 3D Depth */}
          <aside className="category-sidebar animate-fade-in-up delay-300">
            <div className="depth-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-gray-400)', marginBottom: '1.25rem', fontWeight: 800 }}>
                Specialties
              </h4>
              <div className="category-scroll lg:flex-col" style={{ gap: '0.5rem' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                    style={{ 
                      borderRadius: '1rem',
                      padding: '0.75rem 1rem',
                      border: selectedCategory === cat ? 'none' : '1px solid #f1f5f9',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      flexShrink: 0
                    }}
                  >
                    <div className="icon-container" style={{ 
                      background: selectedCategory === cat ? 'rgba(255,255,255,0.2)' : 'var(--color-primary-light)',
                      color: selectedCategory === cat ? 'white' : 'var(--color-primary)',
                      transform: selectedCategory === cat ? 'scale(1.1) translateZ(10px)' : 'scale(1)',
                      padding: '0.5rem'
                    }}>
                      {cat === 'Hospital Furnitures' && <Bed size={20} />}
                      {cat === 'X ray supplies' && <Shield size={20} />}
                      {cat === 'OT Equipments' && <Sun size={20} />}
                      {cat === 'Infant care equipment' && <HeartPulse size={20} />}
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="hover-lift" style={{ 
              marginTop: '2.5rem', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #001a35 0%, #003366 100%)', 
              borderRadius: '2rem', 
              color: 'white',
              boxShadow: '0 30px 60px -10px rgba(0, 26, 53, 0.3)',
              transformStyle: 'preserve-3d'
            }}>
              <h5 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 800 }}>Bulk Project?</h5>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>Full turn-key hospital installation services available nationwide.</p>
              <a href="mailto:Ibannihealthcare@gmail.com" className="btn btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '1.25rem', fontSize: '1rem', background: 'var(--color-secondary)' }}>
                Request Proposal
              </a>
            </div>
          </aside>

          {/* Catalog Grid Area */}
          <div style={{ flex: 1, width: '100%', minWidth: 0 }}>
            <div className="animate-fade-in-up depth-card" style={{ marginBottom: '2.5rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', background: 'white', gap: '1.5rem' }}>
               <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em' }}>{currentDesc.title}</h3>
                  <p style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem', marginTop: '0.5rem', maxWidth: '500px' }}>{currentDesc.lead}</p>
               </div>
               <div style={{ background: 'var(--color-primary-light)', padding: '0.5rem 1.25rem', borderRadius: '1rem', fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>
                 {filteredEquipment.length} UNITS
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredEquipment.map((item, index) => (
                <div 
                  key={item.id} 
                  className="product-card hover-lift animate-fade-in-up depth-card"
                  style={{ 
                    animationDelay: `${(index % 6) * 100}ms`,
                    background: 'white',
                    padding: '1.5rem',
                    border: '1px solid rgba(255,255,255,1)'
                  }}
                >
                  <div style={{ 
                    height: '280px', 
                    overflow: 'hidden', 
                    borderRadius: '2rem', 
                    background: '#f8fafc', 
                    position: 'relative',
                    transformStyle: 'preserve-3d' 
                  }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.currentTarget.src = fallbackImage }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: '1.5rem', 
                      right: '1.5rem', 
                      background: 'rgba(255,255,255,0.95)', 
                      padding: '0.75rem', 
                      borderRadius: '1.25rem', 
                      boxShadow: 'var(--shadow-md)',
                      transform: 'translateZ(30px)'
                    }}>
                      {item.icon}
                    </div>
                  </div>
                  <div style={{ padding: '2rem 1rem 1rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--color-secondary)', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                      Premium Series
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '1rem', color: '#111827', lineHeight: 1.25 }}>{item.name}</h3>
                    <p style={{ color: 'var(--color-gray-500)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.6, minHeight: '80px' }}>{item.description}</p>
                    
                    <Link 
                      to={item.name === 'Lead Apron' ? `/equipment/lead-apron/frontal-protection` : (item.name.includes('Hospital Bed') ? `/equipment/hospital-bed/${item.id === 1 ? 'icu-bed-ss' : 'icu-bed-abs'}` : '#')}
                      className="btn btn-3d" 
                      style={{ 
                        width: '100%',
                        padding: '1.25rem',
                        borderRadius: '1.5rem',
                        fontSize: '1rem',
                        fontWeight: 800
                      }}
                    >
                      Technical Review <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
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

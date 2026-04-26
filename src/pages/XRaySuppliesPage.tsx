import { ChevronRight, Package, Shield, Mail, Layers, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const xraySupplies = [
  { id: 12, name: 'Lead Apron', category: 'Protective Apparel', description: 'Premium radiation protection apparel ensuring maximum safety for healthcare professionals.', image: '/equipment/lead_apron.png', icon: <Shield size={24} /> },
  { id: 13, name: 'Thyroid Collar', category: 'Protective Apparel', description: 'Essential neck protection against scatter radiation during radiological procedures.', image: '/equipment/thyroid_collar.png', icon: <Shield size={24} /> },
  { id: 14, name: 'Gonad Shield', category: 'Protective Apparel', description: 'Specialized shielding to protect sensitive areas from radiation exposure.', image: '/equipment/gonad_shield.png', icon: <Shield size={24} /> },
  { id: 15, name: 'Head Shield', category: 'Protective Apparel', description: 'Comprehensive cranial protection for medical staff in high-radiation environments.', image: '/equipment/head_shield.png', icon: <Shield size={24} /> },
  { id: 16, name: 'Breast Protector', category: 'Protective Apparel', description: 'Ergonomic shielding designed for chest protection during imaging.', image: '/equipment/breast_protector.png', icon: <Shield size={24} /> },
  { id: 17, name: 'Lead Gloves', category: 'Protective Apparel', description: 'High-attenuation protective gloves for hand safety during fluoroscopy.', image: '/equipment/lead_gloves.png', icon: <Shield size={24} /> },
  { id: 18, name: 'Lead Goggles', category: 'Protective Apparel', description: 'Precision leaded eyewear for clear vision and superior eye protection.', image: '/equipment/lead_goggles.png', icon: <Shield size={24} /> },
  { id: 19, name: 'X-Ray View Box', category: 'Imaging Accessories', description: 'High-illumination film viewers for accurate diagnostic interpretation.', image: '/equipment/xray_view_box.png', icon: <Layers size={24} /> },
  { id: 20, name: 'Apron Rack', category: 'Radiation Shielding', description: 'Heavy-duty storage solutions to maintain the integrity of protective apparel.', image: '/equipment/apron_rack.png', icon: <Package size={24} /> },
  { id: 21, name: 'Mobile Lead Barrier', category: 'Radiation Shielding', description: 'Portable high-density shielding for flexible room configurations.', image: '/equipment/mobile_lead_barrier.png', icon: <Shield size={24} /> },
  { id: 22, name: 'X-Ray Hanger', category: 'Imaging Accessories', description: 'Durable clips and frames for secure film processing and storage.', image: '/equipment/xray_hanger.png', icon: <Layers size={24} /> },
  { id: 23, name: 'X-Ray Cassette', category: 'Imaging Accessories', description: 'Robust imaging cassettes compatible with modern radiology systems.', image: '/equipment/xray_cassette.png', icon: <Layers size={24} /> },
];

export default function XRaySuppliesPage() {
  const [selectedFilter, setSelectedFilter] = useState('All Items');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = xraySupplies.filter(p => {
    if (selectedFilter === 'All Items') return true;
    return p.category === selectedFilter;
  });

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-hero" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        <div className="container">
          <nav className="category-scroll" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--color-gray-600)', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '0.5rem' }}>
            <Link to="/" style={{ color: 'var(--color-primary)' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>X-ray Supplies</span>
          </nav>
          
          <div style={{ maxWidth: '1000px' }}>
            <div className="badge animate-fade-in-up" style={{ background: 'var(--color-blue-50)', color: 'var(--color-blue-700)', marginBottom: '1rem' }}>BARC & AERB Standards</div>
            <h1 className="animate-fade-in-up delay-100" style={{ marginBottom: '1rem', lineHeight: 1.1 }}>
              Advanced <span style={{ color: 'var(--color-primary)' }}>Radiation Protection</span> Solutions
            </h1>
            <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', maxWidth: '800px' }}>
              Scientifically engineered protective gear and diagnostic accessories designed to ensure maximum safety in radiological environments.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="category-layout">
            <aside className="category-sidebar">
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--color-gray-900)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Package size={20} className="text-blue-600" /> CATEGORIES
                </h3>
                <div className="category-scroll lg:flex-col">
                  {['All Items', 'Protective Apparel', 'Imaging Accessories', 'Radiation Shielding'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedFilter(cat)}
                      className={`category-tab ${selectedFilter === cat ? 'active' : ''}`}
                    >
                      <div className="icon-container">
                        {cat === 'All Items' && <Package size={18} />}
                        {cat === 'Protective Apparel' && <Shield size={18} />}
                        {cat === 'Imaging Accessories' && <Layers size={18} />}
                        {cat === 'Radiation Shielding' && <Shield size={18} />}
                      </div>
                      {cat}
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '1rem', fontWeight: 600 }}>SAFETY VERIFIED</h4>
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '1rem', fontSize: '0.8rem', color: '#475569' }}>
                    Ibanni radiation protection products are tested by BARC to meet international attenuation standards.
                  </div>
                </div>
              </div>
            </aside>

            <div style={{ flex: 1 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="product-card"
                    style={{ background: 'white', display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <div style={{ height: '240px', overflow: 'hidden', background: '#f8fafc' }}>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop' }}
                      />
                    </div>
                    <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div className="badge" style={{ marginBottom: '0.5rem', fontSize: '0.65rem' }}>{product.category}</div>
                      <h3 style={{ fontSize: '1rem', color: 'var(--color-gray-900)', lineHeight: 1.4, marginBottom: '1rem', fontWeight: 700 }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '1.5rem', flex: 1 }}>
                        {product.description}
                      </p>
                      <Link 
                        to={product.name === 'Lead Apron' ? '/equipment/lead-apron' : '#'}
                        className="btn btn-primary" 
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '1rem', fontSize: '0.85rem' }}
                      >
                         <Eye size={16} className="mr-2" /> View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div style={{ background: '#001a35', padding: '2rem 1rem', borderRadius: '1.5rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ marginBottom: '1rem', fontWeight: 800 }}>Need a Custom Shielding Solution?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              We specialize in custom room layouts and tailored radiation protection apparel for hospitals and clinics.
            </p>
            <a href="mailto:Ibannihealthcare@gmail.com" className="btn btn-secondary" style={{ padding: '1.125rem 2rem', width: '100%', maxWidth: '350px', background: 'var(--color-secondary)', border: 'none', fontSize: '1rem' }}>
              Consult an Expert <Mail size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

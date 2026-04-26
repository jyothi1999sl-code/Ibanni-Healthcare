import { ChevronRight, Package, Sun, Mail, Settings, Activity, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const otEquipments = [
  { id: 24, name: 'OT Light (LED Shadowless)', category: 'Surgical Lighting', description: 'Advanced shadowless LED surgical lighting for superior visibility and cool beam performance.', image: '/equipment/ot_light.png', icon: <Sun size={24} /> },
  { id: 25, name: 'OT Table (Hydraulic/Electric)', category: 'Surgical Tables', description: 'Versatile surgical tables with hydraulic or electric controls for precise patient positioning.', image: '/equipment/ot_table.png', icon: <Settings size={24} /> },
  { id: 26, name: 'Examination Light', category: 'Surgical Lighting', description: 'Focused, high-intensity task lighting for diagnostics and minor procedures.', image: '/equipment/examination_light.png', icon: <Sun size={24} /> },
  { id: 27, name: 'Electrosurgical Unit', category: 'Energy Systems', description: 'Precision cutting and coagulation systems for diverse surgical applications.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop', icon: <Activity size={24} /> },
];

export default function OTEquipmentsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All Items');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = otEquipments.filter(p => {
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
            <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>OT Equipments</span>
          </nav>
          
          <div style={{ maxWidth: '1000px' }}>
            <div className="badge animate-fade-in-up" style={{ background: 'var(--color-red-50)', color: 'var(--color-red-700)', marginBottom: '1rem' }}>Surgical Excellence</div>
            <h1 className="animate-fade-in-up delay-100" style={{ marginBottom: '1rem', lineHeight: 1.1 }}>
              Precision <span style={{ color: 'var(--color-primary)' }}>Operation Theater</span> Systems
            </h1>
            <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', maxWidth: '800px' }}>
              Technologically advanced surgical infrastructure designed for superior clinical outcomes and maximum surgical efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex-mobile-col" style={{ gap: '2.5rem' }}>
            <aside className="category-sidebar">
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--color-gray-900)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Package size={20} className="text-blue-600" /> CATEGORIES
                </h3>
                <div className="category-scroll lg:flex-col">
                  {['All Items', 'Surgical Lighting', 'Surgical Tables', 'Energy Systems'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedFilter(cat)}
                      className={`category-tab ${selectedFilter === cat ? 'active' : ''}`}
                    >
                      <div className="icon-container">
                        {cat === 'All Items' && <Package size={18} />}
                        {cat === 'Surgical Lighting' && <Sun size={18} />}
                        {cat === 'Surgical Tables' && <Settings size={18} />}
                        {cat === 'Energy Systems' && <Activity size={18} />}
                      </div>
                      {cat}
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '1rem', fontWeight: 600 }}>CLINICAL PRECISION</h4>
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '1rem', fontSize: '0.8rem', color: '#475569' }}>
                    All OT equipment is engineered for easy sterilization and consistent performance in intensive environments.
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
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop' }}
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
                      <button className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', borderRadius: '1rem', fontSize: '0.85rem' }}>
                         <Eye size={16} className="mr-2" /> View Specs
                      </button>
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
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '2rem 1.5rem', borderRadius: '2rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ marginBottom: '1rem', fontWeight: 800 }}>Complete OT Setups</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              We provide full turnkey solutions for new operation theaters, including lighting, ventilation, and surgical infrastructure.
            </p>
            <a href="mailto:Ibannihealthcare@gmail.com" className="btn btn-secondary" style={{ padding: '1.125rem 2rem', width: '100%', maxWidth: '350px', background: 'var(--color-secondary)', border: 'none', fontSize: '1rem' }}>
              Request Full Catalog <Mail size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

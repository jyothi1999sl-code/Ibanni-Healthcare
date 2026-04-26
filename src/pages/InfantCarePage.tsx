import { ChevronRight, Package, Sun, Mail, HeartPulse, Settings, Shield, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const infantCareProducts = [
  { id: 28, name: 'Infant Radiant Warmer', category: 'Neonatal Warmers', description: 'Microprocessor-controlled thermal regulation for maintaining neonate body temperature.', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop', icon: <Sun size={24} /> },
  { id: 29, name: 'Infant Incubator', category: 'Incubators', description: 'Controlled micro-environment providing heat, humidity, and oxygen for premature infants.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop', icon: <Settings size={24} /> },
  { id: 30, name: 'Resuscitation Unit', category: 'Respiratory Support', description: 'Emergency ventilation and suction systems designed specifically for neonatal care.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop', icon: <HeartPulse size={24} /> },
  { id: 31, name: 'Oxygen Hood', category: 'Respiratory Support', description: 'Precise oxygen delivery system for infants requiring respiratory support.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', icon: <Shield size={24} /> },
  { id: 32, name: 'Phototherapy Unit', category: 'Neonatal Warmers', description: 'High-intensity LED treatment systems for managing neonatal jaundice.', image: 'https://images.unsplash.com/photo-1538108149393-cefb6b00ee76?q=80&w=2000&auto=format&fit=crop', icon: <Sun size={24} /> },
];

export default function InfantCarePage() {
  const [selectedFilter, setSelectedFilter] = useState('All Items');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = infantCareProducts.filter(p => {
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
            <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>Infant Care</span>
          </nav>
          
          <div style={{ maxWidth: '100%' }}>
            <div className="badge animate-fade-in-up" style={{ background: 'var(--color-green-50)', color: 'var(--color-green-700)', marginBottom: '1rem', fontSize: '0.75rem' }}>Compassionate Care</div>
            <h1 className="animate-fade-in-up delay-100" style={{ marginBottom: '1rem' }}>
              Safe & Stable <span style={{ color: 'var(--color-primary)' }}>Neonatal</span> Micro-environments
            </h1>
            <p className="animate-fade-in-up delay-200" style={{ fontSize: '1rem', color: 'var(--color-gray-600)', maxWidth: '800px', lineHeight: 1.6 }}>
              Advanced life support and thermal regulation systems designed to protect the most vulnerable patients with clinical precision.
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
                  {['All Items', 'Neonatal Warmers', 'Incubators', 'Respiratory Support'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedFilter(cat)}
                      className={`category-tab ${selectedFilter === cat ? 'active' : ''}`}
                    >
                      <div className="icon-container">
                        {cat === 'All Items' && <Package size={18} />}
                        {cat === 'Neonatal Warmers' && <Sun size={18} />}
                        {cat === 'Incubators' && <Settings size={18} />}
                        {cat === 'Respiratory Support' && <HeartPulse size={18} />}
                      </div>
                      {cat}
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '1rem', fontWeight: 600 }}>SAFETY FIRST</h4>
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '1rem', fontSize: '0.8rem', color: '#475569' }}>
                    Every unit is calibrated to maintain precise thermal and oxygen levels for neonatal safety.
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
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop' }}
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
          <div style={{ background: '#f0fdf4', padding: '2rem 1.5rem', borderRadius: '2rem', textAlign: 'center', border: '1px solid #bbf7d0' }}>
            <h2 style={{ marginBottom: '1rem', fontWeight: 800, color: '#166534' }}>NICU Equipment Supply</h2>
            <p style={{ color: '#374151', fontSize: '1rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              We partner with pediatric hospitals to ensure they have the most reliable equipment for neonatal intensive care.
            </p>
            <a href="mailto:Ibannihealthcare@gmail.com" className="btn btn-primary" style={{ padding: '1.125rem 2rem', width: '100%', maxWidth: '350px', fontSize: '1rem' }}>
              Consult with Specialists <Mail size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ChevronRight, Package, Bed, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { hospitalBedDetails } from '../data/hospitalBedData';

const bedProducts = Object.values(hospitalBedDetails);

export default function HospitalBedPage() {
  const [selectedFilter, setSelectedFilter] = useState('All Models');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = bedProducts.filter(p => {
    if (selectedFilter === 'All Models') return true;
    if (selectedFilter === 'ICU Beds') return p.id.includes('icu');
    if (selectedFilter === 'Fowler Beds') return p.id.includes('fowler');
    if (selectedFilter === 'General Beds') return p.id.includes('plain') || p.id.includes('mesh') || p.id.includes('cholera');
    return true;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-hero" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        <div className="container">
          <nav className="category-scroll" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--color-gray-600)', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '0.5rem' }}>
            <Link to="/" style={{ color: 'var(--color-primary)' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>Hospital Beds</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div style={{ maxWidth: '100%' }}>
              <div className="badge animate-fade-in-up" style={{ background: 'var(--color-blue-50)', color: 'var(--color-blue-700)', marginBottom: '1rem', fontSize: '0.75rem' }}>Global Healthcare Standards</div>
              <h1 className="animate-fade-in-up delay-100" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Premium <span style={{ color: 'var(--color-primary)' }}>Hospital Bed</span> Engineering
              </h1>
              <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '2rem' }}>
                Advanced patient support systems designed for ergonomics, safety, and durability in critical care and general ward environments. Explore our range of highly specialized beds engineered for modern medical facilities worldwide.
              </p>
              
              <div className="animate-fade-in-up delay-300 grid grid-cols-2 gap-4" style={{ maxWidth: '400px' }}>
                <div style={{ background: 'white', padding: '1rem', borderRadius: '1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>10+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)', fontWeight: 600 }}>ICU Models</div>
                </div>
                <div style={{ background: 'white', padding: '1rem', borderRadius: '1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)', fontWeight: 600 }}>ISO Certified</div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up delay-200" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'var(--color-primary-light)', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }}></div>
              <img 
                src="/hospital_bed_premium.png" 
                alt="Premium ICU Hospital Bed" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '2rem', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  position: 'relative',
                  zIndex: 1,
                  border: '4px solid white'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Section with Sidebar */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex-mobile-col" style={{ gap: '2.5rem' }}>
            {/* Sidebar Filter */}
            <aside className="category-sidebar">
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--color-gray-900)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Package size={20} className="text-blue-600" /> CATEGORIES
                </h3>
                <div className="category-scroll lg:flex-col">
                  {[
                    { name: 'All Models', icon: <Bed size={18} /> },
                    { name: 'ICU Beds', icon: <ChevronRight size={18} /> },
                    { name: 'Fowler Beds', icon: <ChevronRight size={18} /> },
                    { name: 'General Beds', icon: <ChevronRight size={18} /> },
                  ].map((filter) => (
                    <button
                      key={filter.name}
                      onClick={() => setSelectedFilter(filter.name)}
                      className={`category-tab ${selectedFilter === filter.name ? 'active' : ''}`}
                      style={{ flexShrink: 0 }}
                    >
                      <div className="icon-container">{filter.icon}</div>
                      <span style={{ whiteSpace: 'nowrap' }}>{filter.name}</span>
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '1rem', fontWeight: 600 }}>ISO CERTIFIED</h4>
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '1rem', fontSize: '0.8rem', color: '#475569' }}>
                    All Ibanni Hospital Furniture is manufactured under ISO 9001:2015 and ISO 13485:2016 quality systems.
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div style={{ flex: 1 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    to={`/equipment/hospital-bed/${product.id}`}
                    className="group product-card"
                    style={{ background: 'white', display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <div style={{ height: '240px', overflow: 'hidden', background: '#f8fafc' }}>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        className="group-hover:scale-110"
                      />
                    </div>
                    <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div className="badge" style={{ marginBottom: '0.5rem', fontSize: '0.65rem' }}>{product.category}</div>
                      <h3 style={{ fontSize: '1rem', color: 'var(--color-gray-900)', lineHeight: 1.4, marginBottom: '1rem', fontWeight: 700 }}>
                        {product.name}
                      </h3>
                      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                        Specification Sheet <ChevronRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ background: 'var(--color-primary-light)', padding: '2rem 1rem', borderRadius: '1.5rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Equip Your Facility Today</h2>
            <p style={{ color: 'var(--color-gray-800)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              We provide customized hospital furniture solutions for clinics, surgery centers, and major medical institutions worldwide.
            </p>
            <a href="mailto:info@ibannihealthcare.com" className="btn btn-primary" style={{ padding: '1.125rem 2rem', width: '100%', maxWidth: '350px', fontSize: '1rem' }}>
              Request Global Pricing <Mail size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ChevronRight, Download, Package, Mail, ExternalLink, HelpCircle, FileText, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const leadApronProducts = [
  { id: 'frontal-protection', name: 'Frontal Protection Lead Apron', image: '/frontal_lead_apron.png' },
  { id: 'lead-free-frontal', name: 'Lead Free Frontal Protection Apron', image: '/lead_free_frontal_apron.png' },
  { id: 'frontal-vest-skirt', name: 'Frontal Protection Lead Vest & Skirt', image: '/frontal_vest_skirt.png' },
  { id: 'lead-free-vest-skirt', name: 'Lead Free Frontal Protection Vest & Skirt', image: '/lead_free_vest_skirt.png' },
  { id: 'full-wrap-apron', name: 'Full Protection - Full Over Lap (Wrap Around Lead Apron)', image: '/full_wrap_apron.png' },
  { id: 'full-wrap-vest-skirt', name: 'Full Protection - Full Over Lap (Wrap Around Lead Vest & Skirt)', image: '/full_wrap_vest_skirt.png' },
  { id: 'partial-wrap-apron', name: 'Full Protection - Partial Over Lap (Wrap Around Lead Apron)', image: '/partial_wrap_apron.png' },
  { id: 'partial-wrap-vest-skirt', name: 'Full Protection - Partial Over Lap (Wrap Around Lead Vest & Skirt)', image: '/partial_wrap_vest_skirt.png' },
];

export default function LeadApronPage() {
  const [selectedFilter, setSelectedFilter] = useState('All Models');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = leadApronProducts.filter(p => {
    if (selectedFilter === 'All Models') return true;
    if (selectedFilter === 'Frontal Protection') return p.id.includes('frontal');
    if (selectedFilter === 'Vests & Skirts') return p.id.includes('vest-skirt');
    if (selectedFilter === 'Full Wrap Around') return p.id.includes('wrap');
    if (selectedFilter === 'Lead Free Range') return p.id.includes('lead-free');
    return true;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-hero" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
            <Link to="/" style={{ color: 'var(--color-primary)' }}>Home</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>Lead Aprons</span>
          </nav>
          
          <div style={{ maxWidth: '1000px' }}>
            <div className="badge animate-fade-in-up" style={{ background: 'var(--color-blue-50)', color: 'var(--color-blue-700)' }}>Industry Leader in Radiation Protection</div>
            <h1 className="animate-fade-in-up delay-100" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Premium <span style={{ color: 'var(--color-primary)' }}>Lead Apron</span> Solutions
            </h1>
            <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.2rem', color: 'var(--color-gray-600)', maxWidth: '800px' }}>
              Scientifically engineered radiation protection apparel designed for the highest level of safety, mobility, and operator comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog Section with Sidebar */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="category-layout">
            {/* Sidebar Filter */}
            <aside className="category-sidebar">
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--color-gray-900)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Package size={20} className="text-blue-600" /> CATEGORIES
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { name: 'All Models', icon: <Shield size={18} /> },
                    { name: 'Frontal Protection', icon: <ChevronRight size={18} /> },
                    { name: 'Vests & Skirts', icon: <ChevronRight size={18} /> },
                    { name: 'Full Wrap Around', icon: <ChevronRight size={18} /> },
                    { name: 'Lead Free Range', icon: <ChevronRight size={18} /> }
                  ].map((filter) => (
                    <button
                      key={filter.name}
                      onClick={() => setSelectedFilter(filter.name)}
                      className={`category-tab ${selectedFilter === filter.name ? 'active' : ''}`}
                    >
                      <div className="icon-container">{filter.icon}</div>
                      {filter.name}
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '1rem', fontWeight: 600 }}>BARC CERTIFIED</h4>
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '1rem', fontSize: '0.8rem', color: '#475569' }}>
                    All Ibanni models are tested and approved by BARC (Bhabha Atomic Research Centre) for maximum safety.
                  </div>
                </div>
              </div>
            </aside>

            <div style={{ flex: 1 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    to={`/equipment/lead-apron/${product.id}`}
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
                      <div className="badge" style={{ marginBottom: '0.5rem', fontSize: '0.65rem' }}>Medical Grade</div>
                      <h3 style={{ fontSize: '1rem', color: 'var(--color-gray-900)', lineHeight: 1.4, marginBottom: '1rem', fontWeight: 700 }}>
                        {product.name}
                      </h3>
                      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                        View Technical Info <ChevronRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Fit & Info Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem' }}>Personalized Solutions</h2>
              <div style={{ padding: '2.5rem', background: 'var(--color-primary)', color: 'white', borderRadius: '2.5rem', boxShadow: '0 20px 40px -10px rgba(0, 86, 150, 0.3)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                   <Package size={28} /> TAILORED FIT LEAD APRON
                </h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                  Make your custom clothing even more personal using our advanced designing services. You can select your own:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ listStyle: 'none', padding: 0 }}>
                  {['Custom Size', 'Protection Levels', 'Core Materials', 'Various Styles', 'Pocket Options', 'Inner/Outer Fabric', 'Binding Material', 'Embroidered Text/Art'].map((opt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }}></div>
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem' }}>Resources & Support</h2>
              <div className="space-y-6">
                <a href="#" className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:bg-blue-50 transition-colors group">
                  <div className="bg-red-50 p-3 rounded-xl text-red-600 group-hover:bg-red-100 transition-colors">
                    <Download size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Download Catalog</h4>
                    <p className="text-sm text-gray-600">Complete Radiation Protection Catalog (PDF)</p>
                  </div>
                </a>
                
                <div style={{ padding: '2rem', border: '1px solid #f1f5f9', borderRadius: '2rem' }}>
                  <h4 className="font-bold flex items-center gap-2 mb-4">
                    <FileText className="text-blue-600" size={20} /> Educational Articles
                  </h4>
                  <ul className="space-y-3">
                    {['Lead Apron Radiology', 'Lead Apron Manufacturers in India', 'IndoSurgicals Lead Apron for Radiology', 'The Importance of Lead Aprons In Radiation Protection'].map((art, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center gap-2 group">
                          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {art}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/faq" className="flex items-center gap-4 p-5 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                  <HelpCircle size={24} />
                  <div>
                    <h4 className="font-bold">Frequently Asked Questions</h4>
                    <p className="text-sm opacity-70">Find answers to common radiation safety questions</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '5rem', background: '#f8fafc', padding: '3rem', borderRadius: '2.5rem', border: '1px solid rgba(0, 86, 150, 0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Request a Personalized Quote</h3>
            <p style={{ color: 'var(--color-gray-700)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Please send your Lead Apron requirements with quantities to <a href="mailto:info@ibannihealthcare.com" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>info@ibannihealthcare.com</a> so that we can provide you our best CIF/C&F prices.
            </p>
            <a href="mailto:info@ibannihealthcare.com" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Contact Sale Department <Mail size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

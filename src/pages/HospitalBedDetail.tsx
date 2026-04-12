import { ChevronRight, Shield, Download, Mail, ExternalLink, Package, Printer, CheckCircle2 } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { hospitalBedDetails } from '../data/hospitalBedData';

export default function HospitalBedDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? hospitalBedDetails[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="section container" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/equipment/hospital-bed" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Product Hero */}
      <section className="bg-gradient-hero" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
            <Link to="/" style={{ color: 'var(--color-primary)' }}>Home</Link>
            <ChevronRight size={16} />
            <Link to="/equipment/hospital-bed" style={{ color: 'var(--color-primary)' }}>Hospital Beds</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="badge" style={{ background: 'var(--color-blue-50)', color: 'var(--color-blue-700)' }}>Certified Medical Grade</div>
              <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{product.name}</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-700)', marginBottom: '2rem', lineHeight: 1.6 }}>
                {product.description}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote" className="btn btn-primary">Get Technical Quote</a>
                <button className="btn btn-secondary" onClick={() => window.print()}>
                  <Printer size={20} /> Print Specs
                </button>
              </div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div style={{ background: 'white', padding: '1rem', borderRadius: '3rem', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: 'auto', borderRadius: '2.5rem' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Detail Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Shield className="text-blue-600" /> Optimal Clinical Usage
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-800)', lineHeight: 1.8 }}>
                  {product.uses}
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.specifications.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span style={{ color: 'var(--color-gray-800)', fontSize: '1.05rem' }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Features */}
            <aside>
              <div style={{ border: '1px solid #f1f5f9', padding: '2.5rem', borderRadius: '2rem', position: 'sticky', top: '7rem' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 700 }}>Key Product Features</h4>
                <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', color: 'var(--color-gray-700)', fontSize: '0.95rem' }}>
                      <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '0.5rem' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #f1f5f9' }} />
                
                <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Support & Sales</h4>
                <div className="space-y-4">
                  <a href="mailto:info@ibannihealthcare.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    <Mail size={18} /> Ibannihealthcare@gmail.com
                  </a>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
                    Contact our sales department for bulk pricing and CIF/C&F shipping details.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section bg-gray-50" id="quote">
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Explore More Bed Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(hospitalBedDetails)
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <Link 
                  key={item.id} 
                  to={`/equipment/hospital-bed/${item.id}`}
                  className="product-card"
                  style={{ background: 'white', padding: '1rem' }}
                >
                  <div style={{ height: '180px', overflow: 'hidden', borderRadius: '1.5rem', marginBottom: '1rem' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.name}</h4>
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    View Specs <ChevronRight size={14} />
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

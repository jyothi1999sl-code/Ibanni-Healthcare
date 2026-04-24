import { ChevronRight, Shield, Download, Mail, ExternalLink, Package, Printer, CheckCircle2, ArrowRight } from 'lucide-react';
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
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Product not found</h2>
        <Link to="/equipment/hospital-bed" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fcfcfd' }}>
      {/* Product Hero */}
      <section className="bg-gradient-hero" style={{ paddingTop: '9rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'var(--color-primary)', opacity: 0.03, borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'var(--color-secondary)', opacity: 0.03, borderRadius: '50%', filter: 'blur(80px)' }}></div>
        
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: 500 }}>
            <Link to="/" style={{ color: 'var(--color-primary)', transition: 'opacity 0.2s' }}>Home</Link>
            <ChevronRight size={14} color="var(--color-gray-400)" />
            <Link to="/equipment/hospital-bed" style={{ color: 'var(--color-primary)', transition: 'opacity 0.2s' }}>Hospital Beds</Link>
            <ChevronRight size={14} color="var(--color-gray-400)" />
            <span style={{ color: 'var(--color-gray-500)' }}>{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <div className="badge" style={{ background: 'var(--color-green-50)', color: 'var(--color-green-700)', padding: '0.5rem 1.25rem', marginBottom: '2rem', border: '1px solid var(--color-green-100)' }}>Certified Medical Engineering</div>
              <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.05, letterSpacing: '-0.04em', color: 'var(--color-gray-900)' }}>
                {product.name}
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-600)', marginBottom: '3rem', lineHeight: 1.6, maxWidth: '90%' }}>
                {product.description}
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="#quote" className="btn btn-3d" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
                  Get Technical Quote <ArrowRight size={20} />
                </a>
                <button className="btn btn-secondary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', background: 'white' }} onClick={() => window.print()}>
                  <Printer size={20} /> Print Specs
                </button>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200" style={{ position: 'relative' }}>
              <div className="animate-float" style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '4rem', 
                boxShadow: '0 50px 100px -20px rgba(0, 82, 155, 0.15), 0 30px 60px -30px rgba(0,0,0,0.1)', 
                position: 'relative',
                zIndex: 2,
                border: '1px solid rgba(255,255,255,1)'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: 'auto', borderRadius: '3rem', display: 'block' }} 
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop' }}
                />
              </div>
              {/* 3D Decorative elements */}
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '80px', height: '80px', background: 'var(--color-secondary)', opacity: 0.1, borderRadius: '20px', transform: 'rotate(15deg)', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', bottom: '-10px', right: '20px', width: '120px', height: '120px', border: '2px dashed var(--color-primary)', opacity: 0.1, borderRadius: '50%', zIndex: 1 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Detail Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="animate-fade-in-up">
                <h3 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', letterSpacing: '-0.02em' }}>
                  <div style={{ background: 'var(--color-primary-light)', padding: '0.75rem', borderRadius: '1rem', color: 'var(--color-primary)' }}>
                    <Shield size={28} />
                  </div>
                  Clinical Applications
                </h3>
                <div style={{ background: 'white', padding: '3rem', borderRadius: '3rem', border: '1px solid var(--color-gray-100)', boxShadow: 'var(--shadow-soft)' }}>
                  <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-800)', lineHeight: 1.8 }}>
                    {product.uses}
                  </p>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)', padding: '4rem', borderRadius: '4rem', color: 'white', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>Technical Specifications</h3>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.5rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>DATA SHEET V2.4</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="hover-lift" style={{ display: 'flex', gap: '1.25rem', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '1.5rem' }}>
                      <CheckCircle2 color="var(--color-secondary)" size={24} className="flex-shrink-0" />
                      <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 500 }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Features */}
            <aside className="animate-fade-in-up delay-300">
              <div className="glass" style={{ padding: '3rem', borderRadius: '3rem', position: 'sticky', top: '8rem', border: '1px solid rgba(0, 82, 155, 0.1)' }}>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>Key Innovations</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {product.features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ minWidth: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-secondary)', marginTop: '0.6rem', boxShadow: '0 0 10px var(--color-secondary)' }}></div>
                      <p style={{ color: 'var(--color-gray-700)', fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.5 }}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ margin: '3rem 0', height: '1px', background: 'linear-gradient(to right, transparent, var(--color-gray-200), transparent)' }}></div>
                
                <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-gray-400)' }}>Inquiry Detail</h4>
                <div className="space-y-6">
                  <div style={{ background: 'var(--color-primary-light)', padding: '1.5rem', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'white', padding: '0.5rem', borderRadius: '0.75rem', color: 'var(--color-primary)' }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>Direct Sales</div>
                      <a href="mailto:Ibannihealthcare@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-gray-900)' }}>Ibannihealthcare@gmail.com</a>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', lineHeight: 1.6, paddingLeft: '0.5rem' }}>
                    Standard leads time: 4-6 weeks for bulk hospital installations.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Suggested Products */}
      <section className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--color-gray-100)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <div className="badge">Related Equipment</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Complete Your Facility</h2>
            </div>
            <Link to="/#equipment" style={{ color: 'var(--color-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Full Catalog <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {Object.values(hospitalBedDetails)
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <Link 
                  key={item.id} 
                  to={`/equipment/hospital-bed/${item.id}`}
                  className="product-card hover-lift"
                  style={{ background: 'white', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.03)' }}
                >
                  <div style={{ height: '220px', overflow: 'hidden', borderRadius: '2rem', marginBottom: '1.5rem', background: '#f1f5f9' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '0 0.5rem 0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>{item.name}</h4>
                    <div style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Detailed Specs <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

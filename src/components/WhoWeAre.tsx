import { CheckCircle2 } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section id="about" className="section bg-white" style={{ padding: '10rem 0' }}>
      <div className="container">
        <div 
          className="grid gap-y-12 lg:gap-x-20 items-start" 
          style={{ gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)' }}
        >
          {/* Map Column */}
          <div className="animate-fade-in-up">
            <div style={{ 
              position: 'relative', 
              borderRadius: '2.5rem', 
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.18)',
              backgroundColor: '#f8fafc',
              padding: '0.5rem',
              border: '1px solid rgba(0,0,0,0.08)',
              width: '100%',
              aspectRatio: '1 / 1.1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/india_map.png" 
                alt="Ibanni Healthcare India Locations" 
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '2rem', 
                right: '2rem', 
                backgroundColor: 'rgba(255,255,255,0.95)', 
                backdropFilter: 'blur(8px)',
                padding: '1.25rem', 
                borderRadius: '1.25rem',
                border: '1px solid rgba(0,0,0,0.1)',
                fontSize: '0.85rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                minWidth: '220px'
              }}>
                <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-gray-900)' }}>Network Presence</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', boxShadow: '0 0 0 4px rgba(0, 76, 145, 0.1)' }}></div>
                  <span style={{ color: 'var(--color-gray-700)' }}>Corporate Office (Bangalore)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', boxShadow: '0 0 0 4px rgba(0, 140, 68, 0.1)' }}></div>
                  <span style={{ color: 'var(--color-gray-700)' }}>Manufacturing Centers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2.5px solid var(--color-secondary)', backgroundColor: 'transparent' }}></div>
                  <span style={{ color: 'var(--color-gray-700)' }}>Authorized Channel Partners</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-fade-in-up delay-100">
            <div className="badge" style={{ marginBottom: '1.5rem', background: 'var(--color-green-50)', color: 'var(--color-green-700)' }}>Who We Are</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.15, fontWeight: 800 }}>
              Ibanni Healthcare: Leading <span style={{ color: 'var(--color-primary)' }}>Manufacturer & Suppliers</span> in India
            </h2>
            
            <p style={{ fontSize: '1.125rem', color: 'var(--color-gray-800)', marginBottom: '1.5rem', lineHeight: 1.75 }}>
              Ibanni Healthcare is established by well-experienced professionals working in the field of Medical Industry for the past <strong>9 years</strong>. With the commitment to provide the best quality products, we have worked with utmost dedication and served hundreds of clients across the nation.
            </p>
            
            <p style={{ fontSize: '1.125rem', color: 'var(--color-gray-800)', marginBottom: '2.5rem', lineHeight: 1.75 }}>
              We are dedicated to overcoming the challenges users face regarding Transparency, Quality, reliability, and after-sales service. We specialize in providing high-class <strong>Hospital Furnitures</strong>, <strong>X-ray supplies</strong>, <strong>OT Equipments</strong>, and <strong>Infant care equipment supplies</strong> across India.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--color-green-50)', padding: '0.5rem', borderRadius: '50%', display: 'flex' }}>
                  <CheckCircle2 color="var(--color-green-600)" size={24} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--color-gray-900)' }}>Reliable & Committed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--color-green-50)', padding: '0.5rem', borderRadius: '50%', display: 'flex' }}>
                  <CheckCircle2 color="var(--color-green-600)" size={24} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--color-gray-900)' }}>Transparent, Accountable & Proactive</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', borderRadius: '1rem', fontWeight: 600, boxShadow: '0 10px 15px -3px rgba(0, 86, 150, 0.3)' }}>
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

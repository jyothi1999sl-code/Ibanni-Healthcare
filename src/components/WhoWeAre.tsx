import { CheckCircle2, MapPin } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#fcfcfd', overflow: 'hidden' }}>
      <div className="container">
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center" 
        >
          {/* Map Column - 3D Perspective */}
          <div className="animate-fade-in-up" style={{ perspective: '1200px' }}>
            <div className="hover-lift" style={{ 
              position: 'relative', 
              borderRadius: '3rem', 
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'white',
              padding: '1rem',
              border: '8px solid white', // OUTER GOOD LOOKING FRAME
              width: '100%',
              aspectRatio: '1 / 1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotateY(-5deg) rotateX(2deg)',
              overflow: 'hidden'
            }}>
              {/* Inner Map Container for hover effect */}
              <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '2rem', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src="/india_map.png" 
                  alt="Ibanni Healthcare India Locations" 
                  className="map-image-zoom"
                  style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </div>
              
              {/* Floating 3D Badge - MADE SMALLER */}
              <div style={{ 
                position: 'absolute', 
                bottom: '2rem', 
                right: '2rem', 
                backgroundColor: 'rgba(255,255,255,0.96)', 
                backdropFilter: 'blur(20px)',
                padding: '1rem', 
                borderRadius: '1.25rem',
                border: '1px solid rgba(255,255,255,1)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                minWidth: '160px',
                transform: 'translateZ(80px)',
                zIndex: 10
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div style={{ background: 'var(--color-primary-light)', padding: '0.4rem', borderRadius: '0.6rem' }}>
                    <MapPin size={16} color="var(--color-primary)" />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--color-gray-900)' }}>National Network</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', boxShadow: '0 0 8px var(--color-primary)' }}></div>
                    <span style={{ color: 'var(--color-gray-700)', fontSize: '0.8rem', fontWeight: 700 }}>HQ: Bangalore</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', boxShadow: '0 0 8px var(--color-secondary)' }}></div>
                    <span style={{ color: 'var(--color-gray-700)', fontSize: '0.8rem', fontWeight: 700 }}>Manufacturing Hubs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-fade-in-up delay-100">
            <div className="badge" style={{ marginBottom: '1.5rem', background: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '0.4rem 1rem', fontWeight: 700 }}>ESTABLISHED EXCELLENCE</div>
            <h2 className="text-gradient" style={{ marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 900, letterSpacing: '-0.03em' }}>
              Leadership in Medical Engineering
            </h2>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-600)', marginBottom: '3rem', lineHeight: 1.8 }}>
              Founded by industry veterans with over <strong>9 years</strong> of specialized expertise, Ibanni Healthcare is dedicated to bridging the gap in medical equipment reliability and clinical transparency.
            </p>
            
            <div className="grid grid-cols-1 gap-6" style={{ marginBottom: '4rem' }}>
              <div className="depth-card hover-lift" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--color-green-50)', padding: '1rem', borderRadius: '1.5rem' }}>
                  <CheckCircle2 color="var(--color-green-600)" size={28} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-gray-900)' }}>Uncompromising Quality</h4>
                  <p style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem' }}>Rigorous BARC & ISO testing on all supplies.</p>
                </div>
              </div>
              <div className="depth-card hover-lift" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '1.5rem' }}>
                   <CheckCircle2 color="var(--color-primary)" size={28} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-gray-900)' }}>Transparent Ethics</h4>
                  <p style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem' }}>Full accountability and proactive after-sales service.</p>
                </div>
              </div>
            </div>

            {/* ALIGNMENT FIXED: Button now aligns with text flow */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="#contact" className="btn btn-3d" style={{ padding: '1rem 3rem', fontSize: '1rem', borderRadius: '1rem' }}>
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

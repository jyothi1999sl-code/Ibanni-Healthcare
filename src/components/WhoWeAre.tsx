import { CheckCircle2, MapPin } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section id="about" className="section" style={{ padding: '12rem 0', backgroundColor: '#fcfcfd', overflow: 'hidden' }}>
      <div className="container">
        <div 
          className="grid gap-y-16 lg:gap-x-24 items-center" 
          style={{ gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)' }}
        >
          {/* Map Column - 3D Perspective */}
          <div className="animate-fade-in-up" style={{ perspective: '1200px' }}>
            <div className="hover-lift" style={{ 
              position: 'relative', 
              borderRadius: '4rem', 
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.12)',
              backgroundColor: 'white',
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.8)',
              width: '100%',
              aspectRatio: '1 / 1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotateY(-5deg) rotateX(2deg)'
            }}>
              <img 
                src="/india_map.png" 
                alt="Ibanni Healthcare India Locations" 
                style={{ width: '85%', height: '85%', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}
              />
              
              {/* Floating 3D Badge */}
              <div style={{ 
                position: 'absolute', 
                bottom: '3rem', 
                right: '-2rem', 
                backgroundColor: 'rgba(255,255,255,0.9)', 
                backdropFilter: 'blur(20px)',
                padding: '2rem', 
                borderRadius: '2.5rem',
                border: '1px solid rgba(255,255,255,1)',
                boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.15)',
                minWidth: '280px',
                transform: 'translateZ(60px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'var(--color-primary-light)', padding: '0.5rem', borderRadius: '0.75rem' }}>
                    <MapPin size={20} color="var(--color-primary)" />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-gray-900)' }}>National Network</div>
                </div>
                <div className="space-y-4">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }}></div>
                    <span style={{ color: 'var(--color-gray-700)', fontSize: '0.95rem', fontWeight: 600 }}>HQ: Bangalore</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', boxShadow: '0 0 10px var(--color-secondary)' }}></div>
                    <span style={{ color: 'var(--color-gray-700)', fontSize: '0.95rem', fontWeight: 600 }}>Manufacturing Hubs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-fade-in-up delay-100">
            <div className="badge" style={{ marginBottom: '2rem', background: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '0.6rem 1.5rem', fontWeight: 700 }}>ESTABLISHED EXCELLENCE</div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', lineHeight: 1.1, fontWeight: 900, letterSpacing: '-0.03em' }}>
              Leadership in <span style={{ color: 'var(--color-primary)' }}>Medical</span> Engineering
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

            <a href="#contact" className="btn btn-3d" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', borderRadius: '1.25rem' }}>
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="location" className="section" style={{ padding: '0', backgroundColor: '#fcfcfd', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
        <div className="animate-fade-in-up" style={{ perspective: '1500px' }}>
          <div className="depth-card" style={{ 
            height: '450px', 
            width: '100%', 
            borderRadius: '0', 
            border: 'none', 
            overflow: 'hidden',
            boxShadow: '0 -20px 40px rgba(0,0,0,0.05)',
            position: 'relative' 
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.971597500353!2d77.487002!3d12.97364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d842cbdb3a1%3A0xc3b5ae2e3e9d8d67!2sSir%20M%20Visvesvaraya%20Layout%206th%20Block!5e0!3m2!1sen!2sin!4v1714045000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1) brightness(1)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ibanni Healthcare Bangalore HQ"
            ></iframe>
            
            {/* 3D Floating "Cute" Location Hub */}
            <div className="hover-lift" style={{ 
              position: 'absolute', 
              top: '2rem', 
              left: '2rem', 
              background: 'rgba(255, 255, 255, 0.95)', 
              backdropFilter: 'blur(20px)',
              padding: '1.5rem',
              borderRadius: '2rem',
              width: '280px',
              border: '1px solid rgba(255,255,255,1)',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.15)',
              transform: 'translateZ(60px)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {/* Header Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  background: 'var(--color-primary)', 
                  padding: '0.5rem', 
                  borderRadius: '0.75rem', 
                  color: 'white',
                  boxShadow: '0 8px 16px rgba(0, 26, 53, 0.2)'
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Headquarters</div>
                  <div style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1rem' }}>Bangalore Office</div>
                </div>
              </div>

              <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.5, fontSize: '0.85rem', fontWeight: 500 }}>
                No.226, BDA 6th Block, Sir M Vishwaraiah Layout, Bangalore-560091
              </p>

              <a 
                href="https://maps.google.com/?q=No.226,+BDA+6th+Block,+Sir+M+Vishwaraiah+Layout,+Bangalore-560091" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-3d" 
                style={{ 
                  width: '100%', 
                  borderRadius: '1rem', 
                  padding: '0.75rem', 
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

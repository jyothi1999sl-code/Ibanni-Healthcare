
export default function MapSection() {
  return (
    <section id="location" className="section" style={{ padding: '0', backgroundColor: '#fcfcfd', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
        <div className="animate-fade-in-up" style={{ perspective: '1500px' }}>
          <div className="depth-card" style={{ 
            height: '400px', 
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
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) brightness(0.95)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ibanni Healthcare Bangalore HQ"
            ></iframe>
            
            {/* 3D Floating Overlay */}
            <div className="hover-lift hidden md:block" style={{ 
              position: 'absolute', 
              top: '4rem', 
              left: '4rem', 
              background: 'rgba(255, 255, 255, 0.9)', 
              backdropFilter: 'blur(20px)',
              padding: '2.5rem',
              borderRadius: '2.5rem',
              maxWidth: '350px',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.2)',
              transform: 'translateZ(50px)'
            }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#001a35' }}>Global Headquarters</h4>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                No.226, BDA 6th Block, Sir M Vishwaraiah Layout, Bangalore-560091
              </p>
              <a 
                href="https://maps.google.com/?q=No.226,+BDA+6th+Block,+Sir+M+Vishwaraiah+Layout,+Bangalore-560091" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ width: '100%', borderRadius: '1.25rem', padding: '1rem', fontWeight: 800 }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

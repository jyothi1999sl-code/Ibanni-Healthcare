import { ArrowRight, ShieldCheck, Award, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="section" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '5rem',
        position: 'relative',
        backgroundImage: 'url("https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay for Text Legibility */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'linear-gradient(to right, rgba(0, 86, 150, 0.9) 0%, rgba(0, 86, 150, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)',
        zIndex: 1 
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <div className="badge" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>Premium Medical Engineering</div>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Empowering Healthcare with <span style={{ color: '#60a5fa' }}>Precision</span>
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '3rem', maxWidth: '700px', lineHeight: 1.6 }}>
            Ibanni conceptualizes and manufactures state-of-the-art medical equipment including advanced ECG machines, digital X-Ray systems, and brilliant OT lights designed for reliability and clinical excellence.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
            <a href="#equipment" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
              Explore Catalog <ArrowRight size={22} />
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', background: 'rgba(255, 255, 255, 0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Request a Quote
            </a>
          </div>
          <div style={{ display: 'flex', gap: '3rem', color: 'rgba(255, 255, 255, 0.8)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, fontSize: '1.2rem' }}><ShieldCheck size={32} color="#60a5fa"/> ISO Certified</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, fontSize: '1.2rem' }}><Award size={32} color="#60a5fa"/> Clinical Grade</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, fontSize: '1.2rem' }}><Zap size={32} color="#60a5fa"/> Advanced Tech</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, ShieldCheck, Award, Zap, ChevronDown } from 'lucide-react';
import ibanniLogo from '../assets/Ibanni.png';

export default function Hero() {
  return (
    <section 
      id="home" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        backgroundColor: '#001a35',
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      {/* Dynamic Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: 0.2, filter: 'blur(100px)', zIndex: 1 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)', opacity: 0.1, filter: 'blur(120px)', zIndex: 1 }}></div>
      
      {/* Parallax Background Image */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.35,
        filter: 'grayscale(20%) brightness(0.8)',
        zIndex: 0
      }}></div>

      {/* Modern Overlay Gradient */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'linear-gradient(135deg, rgba(0, 26, 53, 0.95) 0%, rgba(0, 26, 53, 0.7) 40%, rgba(0, 26, 53, 0.3) 100%)',
        zIndex: 1 
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="badge" style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              color: 'white', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '0.6rem 1.5rem',
              marginBottom: '2.5rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}>
              ESTABLISHED IN MEDICAL EXCELLENCE
            </div>
            
            <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '2rem', color: 'white', letterSpacing: '-0.04em', lineHeight: 1, textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              Precision in <span style={{ color: 'var(--color-secondary)' }}>Imaging</span>,<br />
              Excellence in <span style={{ textDecoration: 'underline', textDecorationColor: 'var(--color-primary)' }}>Care</span>.
            </h1>
            
            <p style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '3.5rem', maxWidth: '650px', lineHeight: 1.5, fontWeight: 400 + 100 }}>
              Ibanni conceptualizes and manufactures state-of-the-art medical equipment designed for reliability and clinical precision.
            </p>
            
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '5rem', flexWrap: 'wrap' }}>
              <a href="#equipment" className="btn btn-3d" style={{ padding: '1.4rem 3rem', fontSize: '1.1rem', borderRadius: '1.25rem' }}>
                Explore Products <ArrowRight size={22} className="ml-2" />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ 
                padding: '1.4rem 3rem', 
                fontSize: '1.1rem', 
                borderRadius: '1.25rem',
                background: 'rgba(255, 255, 255, 0.05)', 
                color: 'white', 
                borderColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(5px)'
              }}>
                Consult an Expert
              </a>
            </div>

            <div style={{ display: 'flex', gap: '3rem', color: 'rgba(255, 255, 255, 0.6)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 700, fontSize: '1.5rem' }}>
                  <ShieldCheck color="var(--color-secondary)" size={24} /> 100+
                </div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Certified Products</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 700, fontSize: '1.5rem' }}>
                  <Award color="var(--color-secondary)" size={24} /> 500+
                </div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hospitals Trusted</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 700, fontSize: '1.5rem' }}>
                  <Zap color="var(--color-secondary)" size={24} /> 24/7
                </div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Technical Support</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up delay-200" style={{ display: 'none' }}>
            {/* Reserved for 3D Product Render or Visual */}
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, color: 'white', opacity: 0.5, animation: 'bounce 2s infinite' }}>
        <ChevronDown size={32} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
        .ml-2 { margin-left: 0.5rem; }
      `}</style>
    </section>
  );
}

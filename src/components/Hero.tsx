import { ArrowRight, ShieldCheck, Award, Zap, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/hero/slide1.png',
    title: 'Future of Medical Imaging',
    accent: 'Precision'
  },
  {
    image: '/hero/slide2.png',
    title: 'Advanced Surgical Solutions',
    accent: 'Technology'
  },
  {
    image: '/hero/slide3.png',
    title: 'Patient-Centric Care',
    accent: 'Excellence'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url("${slide.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 0.4 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 0,
            transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)',
            transitionProperty: 'opacity, transform',
          }}
        />
      ))}

      {/* Modern Overlay Gradient */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'linear-gradient(135deg, rgba(0, 26, 53, 0.9) 0%, rgba(0, 26, 53, 0.6) 40%, rgba(0, 26, 53, 0.2) 100%)',
        zIndex: 1 
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            {/* Heading removed per user request */}
            <div style={{ height: '100px' }}></div> 
            
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

      {/* Slide Indicators */}
      <div style={{ position: 'absolute', bottom: '5rem', left: '2rem', display: 'flex', gap: '1rem', zIndex: 10 }}>
        {slides.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            style={{ 
              width: currentSlide === i ? '40px' : '15px', 
              height: '4px', 
              background: currentSlide === i ? 'var(--color-secondary)' : 'rgba(255,255,255,0.3)', 
              borderRadius: '2px',
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }} 
          />
        ))}
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

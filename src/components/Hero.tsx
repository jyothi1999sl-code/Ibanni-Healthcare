import { ArrowRight, ShieldCheck, Award, Zap, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const slides = [
  { image: '/hero/slide1.png' },
  { image: '/hero/slide2.png' },
  { image: '/hero/slide3.png' }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        backgroundColor: '#000',
        overflow: 'hidden',
        paddingTop: '60px',
        perspective: '1500px'
      }}
    >
      {/* Dynamic Background Slider - NATURAL (No blue mask) */}
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
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            zIndex: 0,
            transform: `scale(${currentSlide === index ? 1.1 : 1}) translate(${tilt.x}px, ${tilt.y}px)`,
            transitionProperty: 'opacity, transform',
          }}
        />
      ))}

      {/* Subtle Natural Vignette (Instead of blue mask) */}
      <div className="glass-vignette" style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 1 
      }}></div>

      {/* 3D Floating Decorative Elements */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '10%', 
        width: '300px', 
        height: '300px', 
        border: '1px solid rgba(255,255,255,0.2)', 
        borderRadius: '50%', 
        zIndex: 2,
        transform: `translate3d(${tilt.x * 2}px, ${tilt.y * 2}px, 50px)`,
        transition: 'transform 0.1s ease-out'
      }}></div>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 3,
        transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out',
        width: '100%',
        maxWidth: '100vw'
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up" style={{ transformStyle: 'preserve-3d' }}>
            {/* Header Area */}
            <div style={{ height: '50px' }}></div>
            
            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginBottom: '2rem', 
              flexWrap: 'wrap',
              transform: 'translateZ(40px)',
              width: '100%'
            }}>
              <a href="#equipment" className="btn btn-3d" style={{ padding: '0.875rem 1.5rem', fontSize: '1rem', borderRadius: '1rem', flex: '1 1 140px', textAlign: 'center', minWidth: 'fit-content' }}>
                Explore Products <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ 
                padding: '0.875rem 1.5rem', 
                fontSize: '1rem', 
                borderRadius: '1rem',
                background: 'rgba(255, 255, 255, 0.2)', 
                color: 'white', 
                borderColor: 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(15px)',
                flex: '1 1 140px',
                textAlign: 'center',
                minWidth: 'fit-content'
              }}>
                Consult an Expert
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div style={{ 
        position: 'absolute', 
        bottom: '6rem', 
        left: '0', 
        width: '100%', 
        zIndex: 5,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div className="container">
          <div className="stats-grid" style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem', 
            color: 'white', 
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateZ(20px)',
            width: '100%',
            maxWidth: '100%'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'center', flex: '1 1 140px', minWidth: '130px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.1rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                <ShieldCheck color="var(--color-secondary)" size={20} /> 100+
              </div>
              <div style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.8, fontWeight: 700, textAlign: 'center' }}>Certified Products</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'center', flex: '1 1 140px', minWidth: '130px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.1rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                <Award color="var(--color-secondary)" size={20} /> 500+
              </div>
              <div style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.8, fontWeight: 700, textAlign: 'center' }}>Hospitals Trusted</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'center', flex: '1 1 140px', minWidth: '130px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.1rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                <Zap color="var(--color-secondary)" size={20} /> 24/7
              </div>
              <div style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.8, fontWeight: 700, textAlign: 'center' }}>Technical Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - GLASS 3D */}
      <div style={{ position: 'absolute', bottom: '5rem', left: '2rem', display: 'flex', gap: '1rem', zIndex: 10 }}>
        {slides.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            style={{ 
              width: currentSlide === i ? '50px' : '20px', 
              height: '6px', 
              background: currentSlide === i ? 'var(--color-secondary)' : 'rgba(255,255,255,0.4)', 
              borderRadius: '3px',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'pointer',
              boxShadow: currentSlide === i ? '0 0 15px var(--color-secondary)' : 'none'
            }} 
          />
        ))}
      </div>

      {/* Floating Scroll Indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, color: 'white', opacity: 0.7, animation: 'bounce 2s infinite' }}>
        <ChevronDown size={32} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

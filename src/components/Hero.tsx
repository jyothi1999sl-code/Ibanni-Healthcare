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

      {/* Floating 3D Abstract Shapes - GLASS DESIGN */}
      <div style={{ 
        position: 'absolute', 
        top: '15%', 
        left: '15%', 
        width: '180px', 
        height: '180px', 
        background: 'rgba(255,255,255,0.03)', 
        border: '1px solid rgba(255,255,255,0.1)', 
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        backdropFilter: 'blur(10px)',
        zIndex: 2,
        transform: `translate3d(${tilt.x * 3}px, ${tilt.y * 3}px, 60px) rotate(${tilt.x}deg)`,
        transition: 'transform 0.1s ease-out',
        animation: 'float 12s infinite alternate ease-in-out'
      }}></div>

      <div style={{ 
        position: 'absolute', 
        bottom: '25%', 
        right: '15%', 
        width: '120px', 
        height: '120px', 
        background: 'rgba(0,192,181,0.05)', 
        border: '1px solid rgba(0,192,181,0.1)', 
        borderRadius: '50%', 
        backdropFilter: 'blur(5px)',
        zIndex: 2,
        transform: `translate3d(${tilt.x * -2}px, ${tilt.y * -2}px, 40px)`,
        transition: 'transform 0.1s ease-out',
        animation: 'float 8s infinite alternate-reverse ease-in-out'
      }}></div>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transform: `rotateY(${tilt.x / 2}deg) rotateX(${tilt.y / 2}deg)`,
        transition: 'transform 0.1s ease-out'
      }}>
        {/* Main Glass Content Card */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(25px)',
          padding: '4rem 2rem',
          borderRadius: '4rem',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
          transform: 'translateZ(100px)'
        }}>
          <div className="animate-fade-in-up" style={{ transformStyle: 'preserve-3d' }}>
            <div className="badge" style={{ 
              background: 'rgba(0, 192, 181, 0.15)', 
              color: 'var(--color-secondary)', 
              border: '1px solid rgba(0, 192, 181, 0.3)',
              padding: '0.6rem 1.5rem',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              marginBottom: '2rem'
            }}>PIONEERING GLOBAL HEALTHCARE</div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
              color: 'white', 
              fontWeight: 900, 
              lineHeight: 1.05, 
              letterSpacing: '-0.04em', 
              marginBottom: '2rem'
            }}>
              The Future of <span className="text-gradient" style={{ display: 'inline-block' }}>Medical Excellence</span>
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', 
              color: 'rgba(255,255,255,0.7)', 
              maxWidth: '750px', 
              margin: '0 auto 3.5rem', 
              lineHeight: 1.6,
              fontWeight: 500
            }}>
              Premium diagnostic systems and surgical infrastructure engineered for the world's most advanced clinical environments.
            </p>

            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center',
              width: '100%'
            }}>
              <a href="#equipment" className="btn btn-3d" style={{ 
                padding: '1.25rem 2.5rem', 
                fontSize: '1.1rem', 
                borderRadius: '1.25rem',
                minWidth: '220px'
              }}>
                Explore Systems <ArrowRight size={22} style={{ marginLeft: '0.75rem' }} />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ 
                padding: '1.25rem 2.5rem', 
                fontSize: '1.1rem', 
                borderRadius: '1.25rem',
                background: 'rgba(255, 255, 255, 0.05)', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                minWidth: '220px'
              }}>
                Strategic Consultation
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

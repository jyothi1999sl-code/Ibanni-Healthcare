import { ShieldCheck, Award, Zap, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const slides = [
  { image: '/hero/slide1.png', label: 'Hospital Beds' },
  { image: '/hero/slide2.png', label: 'OT Equipments' },
  { image: '/hero/slide3.png', label: 'Lab Equipment' }
];

const categoryLinks = [
  { label: 'Hospital Beds', href: '/equipment/hospital-bed', color: 'linear-gradient(135deg, #00529b, #0082d6)', shadow: 'rgba(0,82,155,0.4)' },
  { label: 'OT Equipments', href: '/equipment/ot-equipments', color: 'linear-gradient(135deg, #00c0b5, #00ecc0)', shadow: 'rgba(0,192,181,0.4)' },
  { label: 'Infant Care', href: '/equipment/infant-care', color: 'linear-gradient(135deg, #00a651, #00e06d)', shadow: 'rgba(0,166,81,0.4)' },
  { label: 'X-Ray Supplies', href: '/equipment/x-ray-supplies', color: 'linear-gradient(135deg, #f59e0b, #fbbf24)', shadow: 'rgba(245,158,11,0.4)' },
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
    setTilt({ x: x * 6, y: -y * 6 });
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
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#000',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundImage: `url("${slide.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            zIndex: 0,
            transform: `scale(${currentSlide === index ? 1.05 : 1})`,
          }}
        />
      ))}

      {/* Dark gradient overlay — no blur */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.65) 100%)',
        zIndex: 1
      }}></div>

      {/* ── CATEGORY MENU BAR — pinned to BOTTOM of hero ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 6,
        display: 'flex',
        justifyContent: 'center',
        padding: '1.5rem 1rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {categoryLinks.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              onClick={(e) => { e.preventDefault(); window.location.href = cat.href; }}
              style={{
                background: cat.color,
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.95rem',
                boxShadow: `0 4px 20px ${cat.shadow}`,
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'pointer',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${cat.shadow}`;
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 20px ${cat.shadow}`;
              }}
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── HERO CONTENT — REMOVED, showing clean images ── */}
      <div style={{ flex: 1 }}></div>

      {/* Statistics Bar */}
      <div style={{
        position: 'relative',
        zIndex: 5,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '5rem',
      }}>
        <div className="container">
          <div className="stats-grid" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem' }}>
                <ShieldCheck color="#00ecc0" size={22} /> 100+
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.75, fontWeight: 700 }}>Certified Products</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem' }}>
                <Award color="#00ecc0" size={22} /> 500+
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.75, fontWeight: 700 }}>Hospitals Trusted</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem' }}>
                <Zap color="#00ecc0" size={22} /> 24/7
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.75, fontWeight: 700 }}>Technical Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.75rem', zIndex: 10 }}>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{
              width: currentSlide === i ? '40px' : '10px',
              height: '6px',
              background: currentSlide === i ? '#00ecc0' : 'rgba(255,255,255,0.4)',
              borderRadius: '3px',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '3.5rem', right: '2rem', zIndex: 10, color: 'rgba(255,255,255,0.6)' }}>
        <ChevronDown size={20} style={{ animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}

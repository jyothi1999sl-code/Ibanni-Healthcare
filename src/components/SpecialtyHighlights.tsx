import { Bed, Shield, Sun, HeartPulse, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const specialties = [
  {
    title: 'Hospital Furnitures',
    description: 'Precision medical beds, tables, and ward furniture engineered for ergonomics.',
    icon: <Bed size={32} />,
    link: '/equipment/hospital-bed',
    color: '#3b82f6',
    bg: '#eff6ff'
  },
  {
    title: 'X ray supplies',
    description: 'Advanced radiation protection apparel and diagnostic imaging accessories.',
    icon: <Shield size={32} />,
    link: '/equipment/xray-supplies',
    color: '#0ea5e9',
    bg: '#f0f9ff'
  },
  {
    title: 'OT Equipments',
    description: 'Shadowless LED lighting and precision surgical tables for the modern OT.',
    icon: <Sun size={32} />,
    link: '/equipment/ot-equipments',
    color: '#f43f5e',
    bg: '#fff1f2'
  },
  {
    title: 'Infant care equipment',
    description: 'Neonatal warmers and incubators providing safe micro-environments.',
    icon: <HeartPulse size={32} />,
    link: '/equipment/infant-care',
    color: '#10b981',
    bg: '#f0fdf4'
  }
];

export default function SpecialtyHighlights() {
  return (
    <section className="section" style={{ backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontWeight: 800, marginBottom: '1rem' }}>CORE SPECIALIZATIONS</div>
          <h2 style={{ fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            We are <span style={{ color: 'var(--color-primary)' }}>Specialized</span> in
          </h2>
          <p style={{ color: 'var(--color-gray-500)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Ibanni Healthcare delivers end-to-end medical infrastructure solutions with a focus on precision engineering and clinical safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ width: '100%' }}>
          {specialties.map((item, index) => (
            <Link 
              key={index} 
              to={item.link} 
              className="hover-lift animate-fade-in-up" 
              style={{ 
                animationDelay: `${index * 150}ms`,
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <div 
                className="depth-card" 
                style={{ 
                  padding: '2rem 1.5rem', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.03)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative'
                }}
              >
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '2rem', 
                  background: item.bg, 
                  color: item.color, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  boxShadow: `0 20px 40px -10px ${item.color}20` 
                }}>
                  {item.icon}
                </div>
                
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-gray-900)', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                
                <p style={{ color: 'var(--color-gray-500)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                  {item.description}
                </p>

                <div style={{ 
                  marginTop: 'auto', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: item.color, 
                  fontWeight: 800, 
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Explore Lineup <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

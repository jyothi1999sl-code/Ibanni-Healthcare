import { Shield, Sun, Activity, HeartPulse, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

const categoryLinks = [
  { label: 'Hospital Beds', href: '/equipment/hospital-bed', color: 'linear-gradient(135deg, #00529b, #0082d6)', shadow: 'rgba(0,82,155,0.4)' },
  { label: 'OT Equipments', href: '/equipment/ot-equipments', color: 'linear-gradient(135deg, #00c0b5, #00ecc0)', shadow: 'rgba(0,192,181,0.4)' },
  { label: 'Infant Care', href: '/equipment/infant-care', color: 'linear-gradient(135deg, #00a651, #00e06d)', shadow: 'rgba(0,166,81,0.4)' },
  { label: 'X-Ray Supplies', href: '/equipment/x-ray-supplies', color: 'linear-gradient(135deg, #f59e0b, #fbbf24)', shadow: 'rgba(245,158,11,0.4)' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Equipment', href: '/equipment' },
  ];

  return (
    <nav className="glass-nav" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
      <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', minWidth: '0', flexShrink: 0 }} onClick={() => setIsMenuOpen(false)}>
            <Logo className="navbar-logo" height="45px" />
          </Link>

          {/* ── HEADER CATEGORY PILLS ── */}
          <div className="navbar-category-pills" style={{ 
            gap: '0.75rem', 
            alignItems: 'center',
          }}>
            {categoryLinks.map((cat) => (
              <Link
                key={cat.label}
                to={cat.href}
                style={{
                  background: cat.color,
                  color: 'white',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  boxShadow: `0 4px 12px ${cat.shadow}`,
                  border: '1px solid rgba(255,255,255,0.3)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 6px 15px ${cat.shadow}`;
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 12px ${cat.shadow}`;
                }}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div style={{ gap: '1.5rem', alignItems: 'center' }} className="hidden lg:flex">
          <Link to="/" className="btn-nav-3d">Home</Link>
          <a href="/#about" className="btn-nav-3d">About</a>
          
          <div className="nav-dropdown">
            <Link to="/equipment" className="btn-nav-3d">
              Equipment
            </Link>
            <div className="dropdown-content">
              <Link to="/equipment/hospital-bed" className="dropdown-link">
                <div style={{ padding: '0.5rem', background: 'var(--color-primary-light)', borderRadius: '0.75rem', color: 'var(--color-primary)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                  <Activity size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Hospital Furnitures</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>Precision Medical Beds & Tables</div>
                </div>
              </Link>
              <Link to="/equipment/xray-supplies" className="dropdown-link">
                <div style={{ padding: '0.5rem', background: 'var(--color-secondary-light)', borderRadius: '0.75rem', color: 'var(--color-secondary)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                  <Shield size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>X ray supplies</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>Advanced Radiation Protection</div>
                </div>
              </Link>
              <Link to="/equipment/ot-equipments" className="dropdown-link">
                <div style={{ padding: '0.5rem', background: 'var(--color-accent-light)', borderRadius: '0.75rem', color: 'var(--color-accent)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                  <Sun size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>OT Equipments</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>Surgical Lighting & Systems</div>
                </div>
              </Link>
              <Link to="/equipment/infant-care" className="dropdown-link">
                <div style={{ padding: '0.5rem', background: '#f0fcfc', borderRadius: '0.75rem', color: '#008f87', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                  <HeartPulse size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Infant care equipment</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>Neonatal Support Solutions</div>
                </div>
              </Link>
            </div>
          </div>

          <a href="/#contact" className="btn btn-secondary-3d" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem', borderRadius: '1rem' }}>
            Contact Sales
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer' }}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <Logo height="40px" />
          <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none' }}>
            <X size={32} />
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {categoryLinks.map((cat) => (
              <Link
                key={cat.label}
                to={cat.href}
                className="mobile-nav-link"
                style={{ fontSize: '1.1rem', padding: '1rem', background: cat.color, color: 'white', borderRadius: '1rem', border: 'none' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <a 
            href="/#contact" 
            className="btn btn-3d" 
            style={{ marginTop: '3rem', padding: '1.25rem' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Sales
          </a>
        </div>
      </div>
    </nav>
  );
}

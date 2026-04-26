import { Shield, Sun, Activity, HeartPulse, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

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
        <Link to="/" style={{ display: 'flex', alignItems: 'center', minWidth: '0', flexShrink: 0 }} onClick={() => setIsMenuOpen(false)}>
          <Logo className="navbar-logo" height="45px" />
        </Link>

        {/* ── CENTER: Colorful Category Pills ── */}
        <div className="hidden lg:flex" style={{ gap: '0.6rem', alignItems: 'center', flex: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/equipment/hospital-bed" style={{ background: 'linear-gradient(135deg, #00529b, #0082d6)', color: 'white', padding: '0.4rem 1.1rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.82rem', boxShadow: '0 2px 10px rgba(0,82,155,0.3)', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>Hospital Beds</Link>
          <Link to="/equipment/ot-equipments" style={{ background: 'linear-gradient(135deg, #00c0b5, #00ecc0)', color: 'white', padding: '0.4rem 1.1rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.82rem', boxShadow: '0 2px 10px rgba(0,192,181,0.3)', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>OT Equipments</Link>
          <Link to="/equipment/infant-care" style={{ background: 'linear-gradient(135deg, #00a651, #00e06d)', color: 'white', padding: '0.4rem 1.1rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.82rem', boxShadow: '0 2px 10px rgba(0,166,81,0.3)', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>Infant Care</Link>
          <Link to="/equipment/x-ray-supplies" style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)', color: 'white', padding: '0.4rem 1.1rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.82rem', boxShadow: '0 2px 10px rgba(245,158,11,0.3)', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>X-Ray Supplies</Link>
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

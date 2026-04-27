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

  const mainLinks = [
    { name: 'HOME', href: '/' },
    { name: 'Equipments', href: '/equipment', isDropdown: true },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="glass-nav" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
      <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', minWidth: '0', flexShrink: 0 }} onClick={() => setIsMenuOpen(false)}>
          <Logo className="navbar-logo" height="45px" />
        </Link>

        {/* Desktop Menu */}
        <div style={{ gap: '2rem', alignItems: 'center' }} className="hidden lg:flex">
          {mainLinks.map((link) => (
            link.isDropdown ? (
              <div key={link.name} className="nav-dropdown">
                <Link to={link.href} className="btn-nav-3d" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {link.name}
                </Link>
                <div className="dropdown-content" style={{ minWidth: '240px' }}>
                  {categoryLinks.map((cat) => (
                    <Link key={cat.label} to={cat.href} className="dropdown-link">
                      <div style={{ padding: '0.4rem', background: 'var(--color-primary-light)', borderRadius: '0.5rem' }}>
                        {cat.label === 'Hospital Beds' && <Activity size={18} />}
                        {cat.label === 'OT Equipments' && <Sun size={18} />}
                        {cat.label === 'Infant Care' && <HeartPulse size={18} />}
                        {cat.label === 'X-Ray Supplies' && <Shield size={18} />}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{cat.label}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.name} to={link.href} className="btn-nav-3d" style={{ textTransform: link.name === 'HOME' ? 'uppercase' : 'none', letterSpacing: link.name === 'HOME' ? '0.05em' : 'normal' }}>
                {link.name}
              </Link>
            )
          ))}
          
          <a href="/#contact" className="btn btn-secondary-3d" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem', borderRadius: '1rem' }}>
            Get Quote
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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mainLinks.map((link) => (
            <div key={link.name}>
              <Link 
                to={link.href} 
                className="mobile-nav-link"
                style={{ textTransform: link.name === 'HOME' ? 'uppercase' : 'none' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
              {link.isDropdown && (
                <div style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {categoryLinks.map((cat) => (
                    <Link 
                      key={cat.label} 
                      to={cat.href} 
                      style={{ padding: '0.75rem', fontSize: '1rem', color: 'var(--color-gray-600)', background: 'var(--color-gray-50)', borderRadius: '0.75rem' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <a 
            href="/#contact" 
            className="btn btn-3d" 
            style={{ marginTop: '2rem', padding: '1.25rem' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Sales
          </a>
        </div>
      </div>
    </nav>
  );
}

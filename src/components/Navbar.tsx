import { Shield, Sun, Activity, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="glass-nav" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo height="50px" />
        </Link>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
          <Link to="/" style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>Home</Link>
          <a href="/#about" style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>About</a>
          <a href="/#equipment" style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>Categories</a>

          <div className="nav-dropdown">
            <Link to="/#equipment" style={{ fontWeight: 600, color: 'var(--color-gray-800)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Equipment
            </Link>
            <div className="dropdown-content">
              <Link to="/equipment/hospital-bed" className="dropdown-link">
                <div style={{ padding: '0.5rem', background: '#fcfaf0', borderRadius: '0.5rem', color: '#854d0e' }}>
                  <Activity size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Hospital Furnitures</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Precision Medical Beds & Tables</div>
                </div>
              </Link>
              <Link to="/#equipment" className="dropdown-link">
                <div style={{ padding: '0.5rem', background: '#f0f9ff', borderRadius: '0.5rem', color: '#0369a1' }}>
                  <Shield size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>X ray supplies</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Advanced Radiation Protection</div>
                </div>
              </Link>
              <Link to="/#equipment" className="dropdown-link">
                <div style={{ padding: '0.5rem', background: '#fef2f2', borderRadius: '0.5rem', color: '#991b1b' }}>
                  <Sun size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>OT Equipments</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Surgical Lighting & Systems</div>
                </div>
              </Link>
              <Link to="/#equipment" className="dropdown-link">
                <div style={{ padding: '0.5rem', background: '#f0fdf4', borderRadius: '0.5rem', color: '#166534' }}>
                  <HeartPulse size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Infant care equipment</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Neonatal Support Solutions</div>
                </div>
              </Link>
            </div>
          </div>

          <a href="/#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Contact Sales</a>
        </div>
      </div>
    </nav>
  );
}

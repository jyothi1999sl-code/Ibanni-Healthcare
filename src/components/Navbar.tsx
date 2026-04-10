import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="glass-nav" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.75rem', color: '#005696', letterSpacing: '-0.025em' }}>
            <div style={{ background: '#005696', padding: '0.5rem', borderRadius: '50%', color: 'white', display: 'flex' }}>
              <Activity size={24} />
            </div>
            Ibanni Healthcare
          </Link>
          <span style={{ fontSize: '0.75rem', color: '#005696', fontWeight: 600, marginLeft: '3.5rem', marginTop: '-0.25rem' }}>The world of imaging | GSTIN: 29CFZPS7472A1ZM</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
          <Link to="/" style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>Home</Link>
          <a href="/#equipment" style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>Equipment</a>
          <a href="/#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Contact Sales</a>
        </div>
      </div>
    </nav>
  );
}

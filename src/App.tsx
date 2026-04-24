import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LeadApronPage from './pages/LeadApronPage';
import LeadApronDetail from './pages/LeadApronDetail';
import HospitalBedPage from './pages/HospitalBedPage';
import HospitalBedDetail from './pages/HospitalBedDetail';
import Logo from './components/Logo';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <LoadingScreen isLoading={isLoading} />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment/lead-apron" element={<LeadApronPage />} />
          <Route path="/equipment/lead-apron/:type" element={<LeadApronDetail />} />
          <Route path="/equipment/hospital-bed" element={<HospitalBedPage />} />
          <Route path="/equipment/hospital-bed/:id" element={<HospitalBedDetail />} />
        </Routes>

        <footer style={{ backgroundColor: 'var(--color-gray-900)', color: 'white', padding: '4rem 0 2rem' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <Logo height="60px" />
            </div>
            <p style={{ color: 'var(--color-gray-400)', textAlign: 'center', maxWidth: '600px', lineHeight: 1.6 }}>
              No.226, BDA 6th Block, Sir M Vishwaraiah Layout, Bangalore-560091.
              <br />
              Advancing global healthcare through precision engineering and reliable technology.
            </p>
            <div style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', textAlign: 'center', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span><strong>GSTIN:</strong> 29CFZPS7472A1ZM</span>
              <span><strong>Contact:</strong> 9845135909</span>
              <span><strong>Email:</strong> Ibannihealthcare@gmail.com</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
              <a href="#" style={{ color: 'var(--color-gray-400)', transition: 'color 0.2s' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--color-gray-400)', transition: 'color 0.2s' }}>Terms of Service</a>
              <a href="#" style={{ color: 'var(--color-gray-400)', transition: 'color 0.2s' }}>Support Portal</a>
            </div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-gray-800)', margin: '1rem 0' }}></div>
            <p style={{ color: 'var(--color-gray-500)', fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} Ibanni Medical Systems. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

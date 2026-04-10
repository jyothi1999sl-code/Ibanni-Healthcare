import { ChevronRight, Download, Package, Mail, ExternalLink, HelpCircle, FileText } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const leadApronProducts = [
  { id: 'frontal-protection', name: 'Frontal Protection Lead Apron', image: '/frontal_lead_apron_ibanni_1775835667769.png' },
  { id: 'lead-free-frontal', name: 'Lead Free Frontal Protection Apron', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000' },
  { id: 'vest-skirt', name: 'Frontal Protection Lead Vest & Skirt', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000' },
  { id: 'lead-free-vest-skirt', name: 'Lead Free Frontal Protection Vest & Skirt', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000' },
  { id: 'full-wrap-apron', name: 'Full Protection - Full Over Lap (Wrap Around Lead Apron)', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000' },
  { id: 'full-wrap-vest-skirt', name: 'Full Protection - Full Over Lap (Wrap Around Lead Vest & Skirt)', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000' },
  { id: 'partial-wrap-apron', name: 'Full Protection - Partial Over Lap (Wrap Around Lead Apron)', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000' },
  { id: 'partial-wrap-vest-skirt', name: 'Full Protection - Partial Over Lap (Wrap Around Lead Vest & Skirt)', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000' },
];

export default function LeadApronPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-hero" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
            <Link to="/" style={{ color: 'var(--color-primary)' }}>Home</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>Lead Aprons</span>
          </nav>
          
          <div style={{ maxWidth: '1000px' }}>
            <div className="badge animate-fade-in-up" style={{ background: 'var(--color-blue-50)', color: 'var(--color-blue-700)' }}>Industry Leader in Radiation Protection</div>
            <h1 className="animate-fade-in-up delay-100" style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>
              Ibanni Healthcare: Premium <span style={{ color: 'var(--color-primary)' }}>Lead Apron</span> Solutions
            </h1>
            
            <div className="animate-fade-in-up delay-200 space-y-6" style={{ fontSize: '1.2rem', color: 'var(--color-gray-800)', lineHeight: 1.7 }}>
              <p>
                <strong>Ibanni Healthcare</strong>, one of the largest and most trusted manufacturers, suppliers, and exporters of lead aprons, is proud to present our extensive range of best quality products. Our collection includes Frontal Protection Lead Aprons, Frontal Protection Lead Vests & Skirts, Full Protection Wrap Around Lead Aprons, and Full Protection Wrap Around Lead Vests & Skirts. We also offer BARC (Bhabha Atomic Research Centre) certified Lead Aprons and BARC approved Lead Aprons, ensuring top-notch safety and compliance.
              </p>
              <p>
                Our lead aprons are designed to provide maximum protection in hospitals, clinics, surgery centers, dental practices, and radiology departments. These products are essential for doctors, surgeons, nurses, medical students, paramedical staff, gynecologists, orthopedicians, cardiologists, and other medical professionals. Whether you need a lead apron with a thyroid collar or a custom lead apron, Ibanni Healthcare has you covered with top quality solutions.
              </p>
              <p>
                We understand the importance of safety and convenience, which is why our lead aprons come with specialized designs like pregnancy lead aprons and x-ray lead aprons. For dental professionals, we offer dental lead aprons and adhere to ADA lead apron recommendations. Our lite lead aprons, ultra-lite lead aprons, and zero lead lead aprons provide lightweight yet effective protection, catering to the diverse needs of our global clientele.
              </p>
              <p>
                As a top manufacturer and trusted supplier, we are committed to delivering the best quality lead aprons worldwide. Ibanni Healthcare's products are not only reliable but also comply with international standards, ensuring the safety and well-being of users. Our dedication to excellence has made us a top brand in the industry, providing top quality lead aprons to medical professionals across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Lead Apron Range</h2>
            <p style={{ color: 'var(--color-gray-600)', maxWidth: '600px', margin: '0 auto' }}>Choose from our comprehensive selection of radiation protection apparel, designed for every clinical requirement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadApronProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/equipment/lead-apron/${product.id}`}
                className="group product-card"
                style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}
              >
                <div style={{ height: '280px', overflow: 'hidden', background: '#f8fafc' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-110"
                  />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-gray-900)', lineHeight: 1.4, marginBottom: '1rem', transition: 'color 0.2s' }} className="group-hover:text-blue-600">
                    {product.name}
                  </h3>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                    View Details <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Fit & Info Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem' }}>Personalized Solutions</h2>
              <div style={{ padding: '2.5rem', background: 'var(--color-primary)', color: 'white', borderRadius: '2.5rem', boxShadow: '0 20px 40px -10px rgba(0, 86, 150, 0.3)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                   <Package size={28} /> TAILORED FIT LEAD APRON
                </h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                  Make your custom clothing even more personal using our advanced designing services. You can select your own:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ listStyle: 'none', padding: 0 }}>
                  {['Custom Size', 'Protection Levels', 'Core Materials', 'Various Styles', 'Pocket Options', 'Inner/Outer Fabric', 'Binding Material', 'Embroidered Text/Art'].map((opt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }}></div>
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem' }}>Resources & Support</h2>
              <div className="space-y-6">
                <a href="#" className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:bg-blue-50 transition-colors group">
                  <div className="bg-red-50 p-3 rounded-xl text-red-600 group-hover:bg-red-100 transition-colors">
                    <Download size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Download Catalog</h4>
                    <p className="text-sm text-gray-600">Complete Radiation Protection Catalog (PDF)</p>
                  </div>
                </a>
                
                <div style={{ padding: '2rem', border: '1px solid #f1f5f9', borderRadius: '2rem' }}>
                  <h4 className="font-bold flex items-center gap-2 mb-4">
                    <FileText className="text-blue-600" size={20} /> Educational Articles
                  </h4>
                  <ul className="space-y-3">
                    {['Lead Apron Radiology', 'Lead Apron Manufacturers in India', 'IndoSurgicals Lead Apron for Radiology', 'The Importance of Lead Aprons In Radiation Protection'].map((art, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center gap-2 group">
                          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {art}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/faq" className="flex items-center gap-4 p-5 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                  <HelpCircle size={24} />
                  <div>
                    <h4 className="font-bold">Frequently Asked Questions</h4>
                    <p className="text-sm opacity-70">Find answers to common radiation safety questions</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '5rem', background: '#f8fafc', padding: '3rem', borderRadius: '2.5rem', border: '1px solid rgba(0, 86, 150, 0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Request a Personalized Quote</h3>
            <p style={{ color: 'var(--color-gray-700)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Please send your Lead Apron requirements with quantities to <a href="mailto:info@ibannihealthcare.com" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>info@ibannihealthcare.com</a> so that we can provide you our best CIF/C&F prices.
            </p>
            <a href="mailto:info@ibannihealthcare.com" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Contact Sale Department <Mail size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

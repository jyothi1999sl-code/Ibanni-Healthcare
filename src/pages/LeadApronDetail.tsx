import { useParams, Link } from 'react-router-dom';
import { Shield, ChevronRight, Info, CheckCircle2, Mail, Download } from 'lucide-react';
import { useEffect } from 'react';

interface ApronDetail {
  name: string;
  tagline?: string;
  description: string;
  features: string[];
  materials?: { type: string; desc: string }[];
  protectionLevels?: string[];
  specifications: string[][];
  image: string;
}

const apronDetails: Record<string, ApronDetail> = {
  'frontal-protection': {
    name: 'Frontal Protection Lead Apron',
    tagline: 'High-quality radiation protection designed for safety and professional comfort.',
    description: 'The Ibanni Healthcare Frontal Protection Lead Apron is meticulously designed to provide comprehensive torso protection from the neck to just above the knee. It is an essential piece of equipment for radiologists, technicians, and medical specialists who are regularly exposed to radiation but do not require back-shielding or work facing the source.',
    features: [
      'BARC Tested Core Materials: StPb®, LiPb®, and NoPb®',
      'Ergonomic Frontal Design (Neck to Knee coverage)',
      'Secure Criss-Cross Back Fastening with adjustable closure',
      'Heavy-duty Shoulder Padding for weight distribution',
      'Built-in Dosimeter Badge Pocket for exposure monitoring',
      'PU Coated Outer Fabric: Antimicrobial & Anti-odor',
      'Sizes Available: XS to XXL'
    ],
    materials: [
      { type: 'StPb® Standard Lead', desc: 'High-grade lead vinyl. Cost-effective solution for gamma radiation and high-kV procedures (>120kV).' },
      { type: 'LiPb® Light Lead', desc: 'Antimony and lead blend. Significant weight reduction without compromising protection levels.' },
      { type: 'NoPb® Lead-Free', desc: 'Bismuth, Tungsten, and Antimony mixture. Lightest option & safe for regular disposal.' }
    ],
    protectionLevels: ['0.35mm Pb Equivalent', '0.50mm Pb Equivalent'],
    specifications: [
      ['Fastening System', 'Criss-cross back with adjustable hook & loop'],
      ['Outer Coating', 'Polyurethane (PU) antimicrobial coating'],
      ['Compliance', 'BARC Certified / ISO Standard'],
      ['Fit', 'Adjustable side straps for ergonomic comfort'],
      ['Maintenance', 'Fluid resistant and easy-to-wipe surface']
    ],
    image: '/frontal_lead_apron_ibanni_1775835667769.png'
  },
  'lead-free-frontal': {
    name: 'Lead Free Frontal Protection Apron',
    description: 'Environmentally friendly alternative using 100% lead-free materials without compromising on attenuation efficiency.',
    features: ['Environment Friendly Materials', 'Up to 20% lighter than traditional lead', 'Superior flexibility', 'BARC Approved compliance'],
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000',
    specifications: [
      ['Material', '100% Lead-Free (Bismuth/Tungsten/Antimony)'],
      ['Weight', 'Reduced weight for ergonomic comfort'],
      ['Certification', 'BARC Certified / AERB Approval'],
      ['Usage', 'General Radiology / CT Scan / Cath Lab']
    ]
  },
  // We can add more specific details for each as needed, using a fallback for others
};

export default function LeadApronDetail() {
  const { type } = useParams();
  const detail = apronDetails[type || ''] || {
    name: type?.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') || 'Product Details',
    description: 'Technical medical apparel designed for maximum radiation attenuation and operator comfort during radiological procedures.',
    features: ['International Standard Compliance', 'Ergonomic Weight Distribution', 'Durable Exterior Fabric', 'Customizable Sizes'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000',
    specifications: [
      ['Material', 'Premium Antimony/Lead Vinyl or Lead-Free'],
      ['Equivalence', '0.25mm, 0.35mm, 0.50mm Pb'],
      ['Certification', 'BARC / ISO 9001 / CE'],
      ['Warranty', '12 Months Manufacturing Warranty']
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="container py-12">
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
          <Link to="/" style={{ color: 'var(--color-primary)' }}>Home</Link>
          <ChevronRight size={16} />
          <Link to="/equipment/lead-apron" style={{ color: 'var(--color-primary)' }}>Lead Aprons</Link>
          <ChevronRight size={16} />
          <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>{detail.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <div className="animate-fade-in-up" style={{ position: 'sticky', top: '7rem' }}>
            <div style={{ borderRadius: '2.5rem', overflow: 'hidden', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)', background: '#f8fafc' }}>
              <img 
                src={detail.image} 
                alt={detail.name} 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in-up delay-100">
            <div className="badge" style={{ background: 'var(--color-green-50)', color: 'var(--color-green-700)', marginBottom: '1.5rem' }}>Technical Specification</div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.25rem', lineHeight: 1.1 }}>{detail.name}</h1>
            {detail.tagline && (
              <p style={{ fontSize: '1.4rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.3 }}>
                {detail.tagline}
              </p>
            )}
            <p style={{ fontSize: '1.15rem', color: 'var(--color-gray-700)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {detail.description}
            </p>

            {/* Protection Levels */}
            {detail.protectionLevels && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-500)', marginBottom: '1rem' }}>Available Protection Levels</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {detail.protectionLevels.map((lvl: string) => (
                    <div key={lvl} style={{ padding: '0.75rem 1.5rem', background: '#f0f9ff', color: '#0369a1', borderRadius: '1rem', fontWeight: 700, border: '1px solid #bae6fd' }}>
                      {lvl}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Material Options */}
            {detail.materials && (
              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-500)', marginBottom: '1.5rem' }}>Choice of Core Materials</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {detail.materials.map((mat: { type: string; desc: string }) => (
                    <div key={mat.type} style={{ padding: '1.5rem', background: 'white', borderRadius: '1.25rem', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
                      <div style={{ fontWeight: 700, color: 'var(--color-gray-900)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Shield size={18} className="text-blue-600" /> {mat.type}
                      </div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--color-gray-600)', lineHeight: 1.5 }}>{mat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '2rem', border: '1px solid #f1f5f9', marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Info size={20} className="text-blue-600" /> Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {detail.features.map((feature: string, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" style={{ marginTop: '0.2rem' }} />
                    <span style={{ color: 'var(--color-gray-800)', fontSize: '1rem', lineHeight: 1.4 }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <a href="mailto:info@ibannihealthcare.com" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
                <Mail size={20} /> Request Technical Datasheet
              </a>
              <button className="btn btn-secondary" style={{ width: '100%', padding: '1.25rem', display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
                <Download size={20} /> Download User Manual
              </button>
            </div>
          </div>
        </div>

        {/* Technical Table */}
        <div className="animate-fade-in-up delay-200" style={{ marginTop: '5rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Detailed Specifications</h2>
          <div style={{ overflowX: 'auto', borderRadius: '1.5rem', border: '1px solid #f1f5f9' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ background: '#f8fafc' }}>
                <tr>
                  <th style={{ padding: '1.25rem 2rem', borderBottom: '1px solid #f1f5f9' }}>Feature</th>
                  <th style={{ padding: '1.25rem 2rem', borderBottom: '1px solid #f1f5f9' }}>Specification</th>
                </tr>
              </thead>
              <tbody>
                {detail.specifications.map(([label, val]: string[], i: number) => (
                  <tr key={i}>
                    <td style={{ padding: '1rem 2rem', borderBottom: '1px solid #f1f5f9', fontWeight: 600 }}>{label}</td>
                    <td style={{ padding: '1rem 2rem', borderBottom: '1px solid #f1f5f9' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

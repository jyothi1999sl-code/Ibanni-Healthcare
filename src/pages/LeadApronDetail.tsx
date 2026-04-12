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
    description: 'The Ibanni Healthcare Frontal Protection Lead Apron is meticulously designed to provide comprehensive torso protection from the neck to just above the knee. Ideal for radiologists and technicians who do not require back-shielding.',
    features: [
      'BARC Tested Core Materials: StPb®, LiPb®, and NoPb®',
      'Ergonomic Frontal Design (Neck to Knee coverage)',
      'Secure Criss-Cross Back Fastening',
      'Heavy-duty Shoulder Padding',
      'Built-in Dosimeter Badge Pocket',
      'PU Coated Outer Fabric: Antimicrobial & Anti-odor'
    ],
    materials: [
      { type: 'StPb® Standard Lead', desc: 'High-grade lead vinyl for high-kV procedures (>120kV).' },
      { type: 'LiPb® Light Lead', desc: 'Antimony and lead blend for significant weight reduction.' },
      { type: 'NoPb® Lead-Free', desc: 'Environmentally safe mixture of Bismuth, Tungsten, and Antimony.' }
    ],
    protectionLevels: ['0.35mm Pb Equivalent', '0.50mm Pb Equivalent'],
    specifications: [
      ['Fastening System', 'Criss-cross back with adjustable hook & loop'],
      ['Outer Coating', 'Polyurethane (PU) antimicrobial coating'],
      ['Compliance', 'BARC Certified / ISO Standard'],
      ['Fit', 'Adjustable side straps for ergonomic comfort']
    ],
    image: '/frontal_lead_apron.png'
  },
  'lead-free-frontal': {
    name: 'Lead Free Frontal Protection Apron',
    tagline: 'Eco-friendly and lightweight protection without safety compromise.',
    description: 'A 100% lead-free alternative utilizing Bismuth, Tungsten, and Antimony. Meeting European standards for safe disposal while being significantly lighter than traditional lead.',
    features: [
      '100% Lead-Free Core Material (NoPb®)',
      'Up to 20% lighter than traditional lead',
      'Environmentally friendly for easy disposal',
      'BARC Tested & Approved',
      'Superior flexibility for long-duration use'
    ],
    protectionLevels: ['0.35mm Pb Equivalent', '0.50mm Pb Equivalent'],
    specifications: [
      ['Core Material', 'NoPb® (Lead-Free Bismuth/Tungsten/Antimony)'],
      ['Compliance', 'BARC / AERB / CE Approved'],
      ['Weight Class', 'Ultra-Lite'],
      ['Fastening', 'Hook & Loop with Criss-cross Back']
    ],
    image: '/lead_free_frontal_apron.png'
  },
  'frontal-vest-skirt': {
    name: 'Frontal Protection Lead Vest & Skirt',
    tagline: 'Two-piece design for enhanced weight distribution and cooling.',
    description: 'A premium two-piece radiation protection set. The vest and skirt design distributes the weight between the shoulders and waist, making it ideal for long medical procedures.',
    features: [
      'Enhanced air circulation due to two-piece design',
      'Adjustable belt for weight distribution to waist',
      'Criss-cross back vest with hook & loop closure',
      'BARC Tested Core Materials',
      'Padded shoulders for maximum comfort'
    ],
    protectionLevels: ['0.35mm Pb Equivalent', '0.50mm Pb Equivalent'],
    specifications: [
      ['Set Includes', 'Frontal Vest & Frontal Skirt'],
      ['Fastening', 'Hook & Loop (Vest) / Buckle Fastener (Skirt)'],
      ['Certification', 'BARC Certified / ISO Standard'],
      ['Fabric', 'PU Coated Antimicrobial Outer Fabric']
    ],
    image: '/frontal_vest_skirt.png'
  },
  'lead-free-vest-skirt': {
    name: 'Lead Free Frontal Protection Vest & Skirt',
    tagline: 'Lightest two-piece protection with eco-friendly core.',
    description: 'Combining the ergonomic benefits of a two-piece set with the safety of lead-free core materials. Perfect for high-mobility environments like Cath Labs.',
    features: [
      '100% Lead-Free NoPb® core material',
      'Superior weight distribution to waist',
      'Maximum airflow for cooler operation',
      'BARC tested and environmentally safe',
      'High-kV protection performance'
    ],
    protectionLevels: ['0.35mm Pb Equivalent', '0.50mm Pb Equivalent'],
    specifications: [
      ['Material', 'NoPb® Lead-Free'],
      ['Coverage', 'Adjustable overlap for optimal fit'],
      ['Usage', 'Cath Labs, EP Labs, Dental Clinics'],
      ['Safety', 'Complies with International Safe Disposal Standards']
    ],
    image: '/lead_free_vest_skirt.png'
  },
  'full-wrap-apron': {
    name: 'Full Protection - Full Over Lap (Wrap Around Lead Apron)',
    tagline: '360° protection for high-exposure environments.',
    description: 'Designed for environments with higher levels of radiation exposure. Full overlap at the front provides double protection (axilla to axilla) while maintaining a one-piece profile.',
    features: [
      'Complete 360° wrap-around protection',
      'Full front overlap for double shielding',
      '0.25mm Pb back protection included',
      'Waist belt to reduce shoulder strain',
      'Ideal for Cardiac Catheterization & EP Labs'
    ],
    protectionLevels: ['Front: 0.35/0.50mm Pb', 'Back: 0.25mm Pb'],
    specifications: [
      ['Design', 'Wrap Around Full Overlap'],
      ['Core Material', 'StPb® / LiPb® / NoPb®'],
      ['Closure', 'Hook & Loop with Buckle Straps'],
      ['Application', 'High-dose C-arm procedures']
    ],
    image: '/full_wrap_apron.png'
  },
  'full-wrap-vest-skirt': {
    name: 'Full Protection - Full Over Lap (Wrap Around Lead Vest & Skirt)',
    tagline: 'The gold standard for full-day 360° radiation safety.',
    description: 'Provides comprehensive front and back protection in a two-piece format for maximum ergonomics. The weight is shared perfectly between waist and shoulders for all-day comfort.',
    features: [
      'Maximum ergonomic performance in full-protection class',
      'Double front overlap (axilla to axilla)',
      'Independent vest & skirt for better movement',
      'Padded shoulders and wide lumbar support',
      'BARC Tested materials'
    ],
    protectionLevels: ['Front: 0.35/0.50mm Pb', 'Back: 0.25mm Pb'],
    specifications: [
      ['Set Type', 'Wrap Around Vest & Skirt'],
      ['Overlap', 'Full front-face overlap'],
      ['Fit', 'Adjustable lumbar support belt'],
      ['Certification', 'BARC / ISO / CE Approved']
    ],
    image: '/full_wrap_vest_skirt.png'
  },
  'partial-wrap-apron': {
    name: 'Full Protection - Partial Over Lap (Wrap Around Lead Apron)',
    tagline: 'Balanced 360° protection with optimized weight.',
    description: 'A lighter wrap-around option that provides full front and back protection with a partial overlap at the front to reduce overall weight while maintaining safety standards.',
    features: [
      'Full front and back coverage',
      'Reduced weight through partial overlap design',
      'Side closure for easy movement',
      'Integrated waist belt system',
      'Excellent for general radiology use'
    ],
    protectionLevels: ['Front: 0.35/0.50mm Pb', 'Back: 0.25mm Pb'],
    specifications: [
      ['Type', 'Partial Overlap Wrap Around'],
      ['Closure', 'Side fastening buckle and strap'],
      ['Material Options', 'Standard, Lite, and Lead-Free'],
      ['Quality', 'Fluid resistant antimicrobial fabric']
    ],
    image: '/partial_wrap_apron.png'
  },
  'partial-wrap-vest-skirt': {
    name: 'Full Protection - Partial Over Lap (Wrap Around Lead Vest & Skirt)',
    tagline: 'Ergonomic two-piece 360° protection at reduced weight.',
    description: 'Offers the freedom of a two-piece vest and skirt system with full wrap-around protection. The partial overlap design significantly reduces fatiguing weight for daily operators.',
    features: [
      'Optimized weight for long standing hours',
      'Full wrap protection with partial frontal overlap',
      'Adjustable belt for skirt stability',
      'Dosimeter pocket included as standard',
      'Available in BARC tested NoPb® material'
    ],
    protectionLevels: ['Front: 0.35/0.50mm Pb', 'Back: 0.25mm Pb'],
    specifications: [
      ['Style', 'Two-piece Partial Overlap'],
      ['Weight', 'Lighter than full-overlap models'],
      ['Materials', 'StPb / LiPb / NoPb'],
      ['Sizing', 'XS up to XXL']
    ],
    image: '/partial_wrap_vest_skirt.png'
  }
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

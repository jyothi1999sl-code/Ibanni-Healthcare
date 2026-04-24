import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Info, CheckCircle2, Mail, Download, Award, Zap } from 'lucide-react';
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
  const detail = apronDetails[type || ''] || apronDetails['frontal-protection'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="min-h-screen pt-24" style={{ backgroundColor: '#fcfcfd' }}>
      <div className="container py-12">
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <Link to="/" style={{ color: 'var(--color-primary)' }}>Home</Link>
          <ChevronRight size={14} color="var(--color-gray-400)" />
          <Link to="/#equipment" style={{ color: 'var(--color-primary)' }}>Lead Aprons</Link>
          <ChevronRight size={14} color="var(--color-gray-400)" />
          <span style={{ color: 'var(--color-gray-500)' }}>{detail.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Product Image */}
          <div className="animate-fade-in-up" style={{ position: 'sticky', top: '8rem' }}>
            <div style={{ 
              borderRadius: '3rem', 
              overflow: 'hidden', 
              boxShadow: '0 40px 80px -20px rgba(0, 82, 155, 0.12)', 
              background: 'white',
              padding: '2rem',
              border: '1px solid rgba(0,0,0,0.03)'
            }}>
              <img 
                src={detail.image} 
                alt={detail.name} 
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2rem' }}
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop' }}
              />
            </div>
            
            {/* 3D Visual Badges */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
              <div className="glass" style={{ flex: 1, padding: '1.5rem', borderRadius: '1.5rem', textAlign: 'center', border: '1px solid var(--color-primary-light)' }}>
                <Award color="var(--color-primary)" size={24} style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase' }}>Certified</div>
                <div style={{ fontWeight: 700, color: 'var(--color-gray-900)' }}>BARC Tested</div>
              </div>
              <div className="glass" style={{ flex: 1, padding: '1.5rem', borderRadius: '1.5rem', textAlign: 'center', border: '1px solid var(--color-secondary-light)' }}>
                <Zap color="var(--color-secondary)" size={24} style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase' }}>Performance</div>
                <div style={{ fontWeight: 700, color: 'var(--color-gray-900)' }}>Max Attenuation</div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in-up delay-100">
            <div className="badge" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)', border: '1px solid rgba(0, 82, 155, 0.1)', marginBottom: '1.5rem' }}>Technical Medical Apparel</div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>{detail.name}</h1>
            
            {detail.tagline && (
              <p style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                {detail.tagline}
              </p>
            )}
            
            <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-700)', lineHeight: 1.8, marginBottom: '3.5rem' }}>
              {detail.description}
            </p>

            {/* Protection Levels Chips */}
            {detail.protectionLevels && (
              <div style={{ marginBottom: '3.5rem' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gray-400)', marginBottom: '1.5rem' }}>Equivalence Levels</h4>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {detail.protectionLevels.map((lvl: string) => (
                    <div key={lvl} style={{ padding: '0.75rem 1.75rem', background: 'white', color: 'var(--color-primary)', borderRadius: '1.25rem', fontWeight: 700, border: '1px solid var(--color-primary-light)', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                      {lvl}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Premium Material Cards */}
            {detail.materials && (
              <div style={{ marginBottom: '4rem' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gray-400)', marginBottom: '2rem' }}>Material Science</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {detail.materials.map((mat: { type: string; desc: string }) => (
                    <div key={mat.type} className="hover-lift" style={{ padding: '2rem', background: 'white', borderRadius: '2rem', border: '1px solid #f1f5f9', boxShadow: 'var(--shadow-soft)' }}>
                      <div style={{ fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                        {mat.type}
                      </div>
                      <div style={{ fontSize: '1.05rem', color: 'var(--color-gray-600)', lineHeight: 1.6 }}>{mat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Feature Grid */}
            <div style={{ 
              background: '#111827', 
              padding: '3.5rem', 
              borderRadius: '3rem', 
              marginBottom: '4rem',
              color: 'white',
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'var(--color-secondary)', opacity: 0.1, filter: 'blur(50px)', borderRadius: '50%' }}></div>
              
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '0.75rem' }}>
                  <Info size={24} className="text-secondary" />
                </div>
                Key Performance Indicators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                {detail.features.map((feature: string, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <CheckCircle2 size={18} className="text-secondary flex-shrink-0" style={{ marginTop: '0.3rem' }} />
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.5 }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-End Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:Ibannihealthcare@gmail.com" className="btn btn-3d" style={{ padding: '1.5rem', borderRadius: '1.5rem', fontSize: '1.1rem' }}>
                <Mail size={22} /> Request Datasheet
              </a>
              <button className="btn btn-secondary" style={{ padding: '1.5rem', borderRadius: '1.5rem', fontSize: '1.1rem', background: 'white' }}>
                <Download size={22} /> Quality Certificates
              </button>
            </div>
          </div>
        </div>

        {/* Technical Data Table */}
        <div className="animate-fade-in-up delay-300" style={{ marginTop: '8rem' }}>
          <div className="glass" style={{ padding: '4rem', borderRadius: '4rem', overflow: 'hidden', border: '1px solid rgba(0, 82, 155, 0.05)' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Manufacturing Specs</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.75rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ color: 'var(--color-gray-400)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    <th style={{ padding: '1.5rem 2rem' }}>Quality Parameter</th>
                    <th style={{ padding: '1.5rem 2rem' }}>Verified Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.specifications.map(([label, val]: string[], i: number) => (
                    <tr key={i} className="hover-lift" style={{ background: 'white' }}>
                      <td style={{ padding: '1.75rem 2rem', borderRadius: '1.5rem 0 0 1.5rem', fontWeight: 700, color: 'var(--color-gray-900)' }}>{label}</td>
                      <td style={{ padding: '1.75rem 2rem', borderRadius: '0 1.5rem 1.5rem 0', color: 'var(--color-gray-600)', fontWeight: 500 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Separator */}
      <div style={{ height: '100px', background: 'linear-gradient(to bottom, #fcfcfd, white)' }}></div>
    </div>
  );
}

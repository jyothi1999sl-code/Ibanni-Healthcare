import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Shield, Award, CheckCircle2, Package, Mail } from 'lucide-react';
import { useEffect } from 'react';

interface FurnitureDetail {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specifications: [string, string][];
  image: string;
}

const furnitureDetails: Record<string, FurnitureDetail> = {
  'manual-hospital-bed': {
    name: 'Manual Hospital Bed',
    tagline: 'Reliable and durable hospital beds for general ward use.',
    description: 'Ibanni Healthcare Manual Hospital Beds are designed for long-term patient comfort and ease of use for nursing staff. Featuring a multi-crank mechanism for precise position adjustments.',
    features: [
      'High-quality CRCA steel frame with epoxy coating',
      'Dual/Triple crank mechanism for backrest and knee rest',
      'Stainless steel collapsible side rails',
      'Durable 100mm medical-grade castors with brakes',
      'Provision for IV pole and urine bag holder'
    ],
    specifications: [
      ['Frame Material', 'CRCA Steel (Mild Steel)'],
      ['Coating', 'Antimicrobial Epoxy Powder Coating'],
      ['Adjustment', 'Manual Crank System'],
      ['Load Capacity', 'Up to 200kg']
    ],
    image: '/manual_hospital_bed.png'
  },
  'electric-hospital-bed': {
    name: 'Electric Hospital Bed',
    tagline: 'Advanced motorized control for critical care and ICU environments.',
    description: 'Our Electric Hospital Beds provide effortless positioning for patients and care providers. Equipped with high-performance motors and a user-friendly wired remote.',
    features: [
      'Microprocessor controlled linear actuators',
      'Four-piece modular ABS platform',
      'Integrated controls on tuck-away side rails',
      'One-button Trendelenburg and Cardiac Chair positions',
      'Battery backup for uninterrupted service'
    ],
    specifications: [
      ['Motor System', 'Heavy-duty linear actuators'],
      ['Control', 'Handheld Remote / Nurse Panel'],
      ['Platform', 'ABS / Removable for easy cleaning'],
      ['Positions', 'Back, Knee, Hi-Lo, Trendelenburg']
    ],
    image: '/electric_hospital_bed.png'
  },
  'orthopedic-traction-bed': {
    name: 'Orthopedic Traction Bed',
    tagline: 'Specialized support for orthopedic recovery and limb traction.',
    description: 'Specifically engineered for patients requiring skeletal or skin traction. Features a robust Balkan Frame that allows for various pulley configurations.',
    features: [
      'Full-length overhead Balkan frame',
      'Adjustable pulley system for precise traction',
      'Split-bed platform for versatile leg positioning',
      'Heavy-duty mattress for long-term comfort',
      'Stabilizing floor locks'
    ],
    specifications: [
      ['Traction Frame', 'Stainless Steel Balkan Frame'],
      ['Pulley Type', 'Adjustable silent pulleys'],
      ['Load Capacity', '250kg Static Load'],
      ['Finish', 'Anti-rust Epoxy Coating']
    ],
    image: '/orthopedic_traction_bed.png'
  },
  'pediatric-hospital-bed': {
    name: 'Pediatric Hospital Bed',
    tagline: 'Safe and secure recovery environment for children.',
    description: 'Designed with maximum safety for pediatric patients. Features full-length side railings and optimized gaps to prevent any accidental falls or entrapment.',
    features: [
      'Full-height collapsible side rails',
      'Smooth, rounded edges for child safety',
      'Colorful, non-toxic antimicrobial finish',
      'Manual trendelenburg positioning',
      'Swivel castors with individual brakes'
    ],
    specifications: [
      ['Safety Rail', 'Vertical or Horizontal bars (Gap < 6cm)'],
      ['Frame', 'Reinforced Tubular Steel'],
      ['Design', 'Child-safe locking mechanisms'],
      ['Size', 'Compact Pediatric Dimensions']
    ],
    image: '/pediatric_hospital_bed.png'
  },
  'attendant-bed': {
    name: 'Attendant Bed & Couch',
    tagline: 'Compact and comfortable stay solutions for patient attendants.',
    description: 'Providing comfort for those caring for patients. Our attendant beds are space-efficient and can double as a couch during the day.',
    features: [
      'Foldable/Sliding design for space saving',
      'High-resilience foam mattress',
      'PVC/Lederette upholstery for easy cleaning',
      'Robust frame for long-term durability',
      'Modern aesthetic to match hospital decor'
    ],
    specifications: [
      ['Type', 'Foldable Bed / Day Couch'],
      ['Upholstery', 'Medical Grade PVC'],
      ['Length', 'Standard 180cm'],
      ['Frame', 'Powder Coated Mild Steel']
    ],
    image: '/attendant_bed.png'
  },
  'blood-donor-couch': {
    name: 'Blood Donor Couch & Chair',
    tagline: 'Maximum comfort and ergonomic support for blood donors.',
    description: 'Designed to ensure donor comfort and prevent syncopal episodes. Fully adjustable armrests and reclining positions for optimal blood collection.',
    features: [
      'Step-less motorized or manual recline',
      'Broad, padded armrests with tilt adjustment',
      'Seamless antimicrobial upholstery',
      'Emergency Trendelenburg override',
      'Durable, tip-resistant base'
    ],
    specifications: [
      ['Recline Angle', '90° to 180°'],
      ['Armrest Position', '3D Adjustable'],
      ['Motor', 'Optional low-noise twin motor'],
      ['Weight Limit', '180kg']
    ],
    image: '/blood_donor_couch.png'
  },
  'ambulance-stretcher': {
    name: 'Ambulance Stretcher (Auto-Loading)',
    tagline: 'Rapid and safe patient transport in emergency scenarios.',
    description: 'Built for reliability in high-pressure environments. Our ambulance stretchers feature an auto-loading mechanism that allows a single operator to load patient securely.',
    features: [
      'Lightweight but high-strength Aluminum Alloy',
      'Automatic folding legs for easy loading',
      'Adjustable backrest and leg sections',
      'Patient safety straps and side guards',
      'Locking device for ambulance floor mounting'
    ],
    specifications: [
      ['Material', 'High-Strength Aluminum Alloy'],
      ['Loading Height', 'Standard Ambulance Compatible'],
      ['Weight', 'Lighter than steel alternatives'],
      ['Warranty', '2 Years Structural Warranty']
    ],
    image: '/ambulance_stretcher.png'
  },
  'hospital-trolley': {
    name: 'Hospital Trolleys (Medicine & Dressing)',
    tagline: 'Organized and mobile storage for clinical excellence.',
    description: 'A range of specialized trolleys for medicine distribution, dressing changes, and emergency crash carts. Designed for easy sterilization and smooth mobility.',
    features: [
      'Full Stainless Steel (Grade 304) construction',
      'Drawers with telescopic channels',
      'Corner buffers to prevent impact damage',
      'Rotating oxygen bottle holder on crash carts',
      'Silent, non-marking swivel castors'
    ],
    specifications: [
      ['Material', 'SS 304 / SS 202'],
      ['Castors', '75mm / 100mm Swivel'],
      ['Capacity', 'Multiple drawer configurations'],
      ['Top', 'Seamless with safety rails']
    ],
    image: '/hospital_trolley.png'
  },
  'examination-delivery-table': {
    name: 'Examination & Delivery Tables',
    tagline: 'Versatile tables for diagnostic and labor room use.',
    description: 'Our tables provide the versatility needed for gynae examinations and childbirth procedures. Engineered with ergonomics and hygiene as top priorities.',
    features: [
      'Three-section upholstered platform',
      'Trendelenburg and reverse Trendelenburg positions',
      'Adjustable Lithotomy poles and hand grips',
      'Waste collection tray (stainless steel)',
      'Smooth, lockable castors'
    ],
    specifications: [
      ['Type', 'Hydraulic / Manual / Electrical'],
      ['Upholstery', 'Antimicrobial / Waterproof'],
      ['Standard Size', '180L x 60W x 75H cm'],
      ['Attachments', 'Padded Leg Holders']
    ],
    image: '/examination_delivery_table.png'
  },
  'wheelchairs': {
    name: 'Premium Hospital Wheelchairs',
    tagline: 'Reliable patient mobility with focus on strength and comfort.',
    description: 'Our wheelchairs are built to withstand the rigors of hospital use while providing a smooth, comfortable ride for patients. Foldable for easy storage.',
    features: [
      'Chrome or Powder coated heavy-duty frame',
      'Padded armrests and calf supports',
      'Large solid rear wheels with hand-rims',
      'Front swivel forks with shock absorption',
      'Fixed or detachable footrests'
    ],
    specifications: [
      ['Frame', 'Steel / Aluminum Alloy'],
      ['Wheels', 'Cushion Mag Wheels (Flat-free)'],
      ['Load Capacity', '150kg'],
      ['Weight', 'Lightweight for easy handling']
    ],
    image: '/wheelchair_premium.png'
  },
  'hospital-ward-furniture': {
    name: 'Hospital Ward Furniture',
    tagline: 'Essential bedside storage and ward organization.',
    description: 'A complete range of bedside lockers, cabinets, and screens to ensure an organized and private patient environment.',
    features: [
      'Durable bedside locker with ventilated storage',
      'Modular ward lockers with central locking',
      'Four-fold bedside privacy screens',
      'Easy-to-clean high-gloss finish',
      'Corner protectors for safety'
    ],
    specifications: [
      ['Components', 'Locker, Screen, Cabinet'],
      ['Material', 'Steel / Composite Plastic'],
      ['Finish', 'Anti-corrosive Powder Coated'],
      ['Mobility', 'Optional twin-wheel castors']
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000'
  }
};

export default function FurnitureDetail() {
  const { type } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const detail = furnitureDetails[type || ''] || {
    name: 'Hospital Furniture',
    tagline: 'Professional grade medical furniture.',
    description: 'High-quality medical furniture designed for durability, hygiene, and patient comfort in healthcare settings.',
    features: ['Industry Standard Compliance', 'Durable Construction', 'Ergonomic Design'],
    specifications: [['Material', 'Premium Grade Steel/Stainless Steel']],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000'
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Product Hero */}
      <section className="bg-gradient-hero" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
            <Link to="/" style={{ color: 'var(--color-primary)' }}>Home</Link>
            <ChevronRight size={16} />
            <Link to="/#equipment" style={{ color: 'var(--color-primary)' }}>Equipment</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--color-gray-800)', fontWeight: 600 }}>{detail.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="badge">Premium Furniture Range</div>
              <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{detail.name}</h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>{detail.tagline}</p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-800)', lineHeight: 1.7, marginBottom: '2rem' }}>{detail.description}</p>
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="mailto:info@ibannihealthcare.com" className="btn btn-primary">
                  Request Full Specs <Mail size={18} />
                </a>
                <a href="mailto:info@ibannihealthcare.com" className="btn btn-secondary">
                  Get Bulk Quote
                </a>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-2rem', right: '-2rem', width: '200px', height: '200px', background: 'var(--color-primary-light)', borderRadius: '50%', zIndex: 0, opacity: 0.5 }}></div>
              <div className="glass" style={{ padding: '1rem', borderRadius: '2.5rem', position: 'relative', zIndex: 1 }}>
                <img 
                  src={detail.image} 
                  alt={detail.name} 
                  style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '2rem' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Package className="text-blue-600" /> Key Features
              </h2>
              <div className="space-y-4">
                {detail.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl transition-transform hover:translate-x-2">
                    <CheckCircle2 size={24} className="text-green-600 mt-1 flex-shrink-0" />
                    <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Shield className="text-blue-600" /> Technical Details
              </h2>
              <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '2rem', border: '1px solid #e2e8f0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {detail.specifications.map(([label, val], i) => (
                      <tr key={i} style={{ borderBottom: i === detail.specifications.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                        <td style={{ padding: '1.25rem 0', fontWeight: 700, color: 'var(--color-gray-600)', width: '40%' }}>{label}</td>
                        <td style={{ padding: '1.25rem 0', color: 'var(--color-gray-900)' }}>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div style={{ marginTop: '2.5rem', padding: '2rem', background: 'var(--color-primary)', color: 'white', borderRadius: '2rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Award size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>Global Safety Standard</h4>
                <p style={{ opacity: 0.9 }}>Manufactured and tested to meet international healthcare facility standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Footer */}
      <section className="section bg-gray-50">
        <div className="container">
          <div style={{ background: 'white', padding: '4rem', borderRadius: '3rem', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Set Up Your Facility Today</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-600)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              We provide end-to-end furniture solutions for hospitals, clinics, and labs. Contact our sales department for a tailored catalog and CIF prices.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="mailto:info@ibannihealthcare.com" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>
                Get a Quote <Mail size={20} />
              </a>
              <Link to="/#equipment" className="btn btn-secondary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>
                Explore Other Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

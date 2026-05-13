export interface Product {
  id: string;
  sku: string;
  name: string;
  categoryId: string;
  categoryName: string;
  description: string;
  material?: string;
  images: string[];
  specs: Record<string, string>;
  certifications: string[];
  features: string[];
  isSubcategoryCard?: boolean;
  targetCategoryId?: string;
}

export const categories = [
  { id: 'x-ray-accessories', name: 'X Ray-Accessories', description: 'Comprehensive radiation protection and imaging accessories.', image: '/images/products/lead_sheet.png' },
  { id: 'surgical-ot-equipments', name: 'Surgical OT Equipments', description: 'Advanced equipment for modern surgical environments.', image: '/images/products/ot_lights.png' },
  { id: 'hospital-furnitures', name: 'Hospital Furnitures', description: 'Durable and ergonomic furniture solutions for healthcare facilities.', image: '/images/products/icu_bed.png' },
  { id: 'global-products', name: 'Global Products', description: 'International-standard medical devices for diagnostics and therapy.', image: '/images/products/ecg_machine.png' },
  { id: 'infant-care', name: 'Infant Care', description: 'Sensitive, life-saving technology for neonatal and infant care.', image: '/images/products/baby_incubator.png' },
  { id: 'ot-tables', name: 'OT Tables', description: 'High-precision operating tables for various surgical disciplines.', image: '/images/products/ot_table.png' }
];

export const products: Product[] = [
  // X Ray-Accessories
  {
    id: 'xr-1',
    sku: 'XR-ACC-001',
    name: 'Lead Sheet',
    categoryId: 'x-ray-accessories',
    categoryName: 'X Ray-Accessories',
    description: 'High-purity lead sheets for radiation shielding in diagnostic and therapeutic environments.',
    images: ['/images/products/lead_sheet.png'],
    specs: { 'Material': '99.9% Pure Lead', 'Thickness': '0.5mm - 3.0mm' },
    certifications: ['AERB Approved'],
    features: ['Uniform thickness', 'High density', 'Corrosion resistant']
  },
  {
    id: 'xr-2',
    sku: 'XR-ACC-002',
    name: 'Lead Protection Screen',
    categoryId: 'x-ray-accessories',
    categoryName: 'X Ray-Accessories',
    description: 'Mobile radiation protection screens with lead glass viewing windows for medical staff safety.',
    images: ['/images/products/lead_protection_screen.png'],
    specs: { 'Lead Equivalence': '1.0mmPb / 2.0mmPb', 'Frame': 'Powder Coated Steel' },
    certifications: ['CE Certified'],
    features: ['Heavy-duty castors', 'Panoramic view', 'Durable construction']
  },
  {
    id: 'xr-3',
    sku: 'XR-ACC-003',
    name: 'Lead Glass & Lead Goggles',
    categoryId: 'x-ray-accessories',
    categoryName: 'X Ray-Accessories',
    description: 'Specialized leaded glass for viewing windows and protective eyewear for radiation environments.',
    images: ['/images/products/lead_glass_goggles.png'],
    specs: { 'Lead Equivalence (Glass)': '2.0mmPb', 'Lead Equivalence (Goggles)': '0.75mmPb' },
    certifications: ['ISO 13485'],
    features: ['High transparency', 'Scratch resistant', 'Lightweight eyewear']
  },
  {
    id: 'xr-4',
    sku: 'XR-ACC-004',
    name: 'Thyroid Guard & Gonald Shield',
    categoryId: 'x-ray-accessories',
    categoryName: 'X Ray-Accessories',
    description: 'Essential protective gear for sensitive organs during radiological procedures.',
    images: ['/images/products/thyroid_shield.png'],
    specs: { 'Lead Equivalence': '0.5mmPb', 'Fabric': 'Nylon/PU Coated' },
    certifications: ['AERB Approved'],
    features: ['Adjustable fit', 'Comfortable padding', 'Skin-friendly material']
  },
  {
    id: 'xr-5',
    sku: 'XR-ACC-005',
    name: 'LED Film View Box',
    categoryId: 'x-ray-accessories',
    categoryName: 'X Ray-Accessories',
    description: 'Ultra-slim LED X-ray film illuminators with uniform brightness and flicker-free technology.',
    images: ['/images/products/led_view_box.png'],
    specs: { 'Brightness': '4000 cd/m2', 'Lifespan': '50,000 Hours' },
    certifications: ['CE Certified'],
    features: ['Automatic film sensing', 'Variable dimming', 'Slim design']
  },

  // Surgical OT Equipments
  {
    id: 'ot-1',
    sku: 'OT-EQU-001',
    name: 'OT Table Attachments',
    categoryId: 'surgical-ot-equipments',
    categoryName: 'Surgical OT Equipments',
    description: 'Comprehensive range of specialized attachments for versatile patient positioning during surgery.',
    images: ['/images/products/ot_attachments.png'],
    specs: { 'Material': 'Stainless Steel 304', 'Compatibility': 'Universal Side Rails' },
    certifications: ['ISO 9001'],
    features: ['Ortho attachments', 'Neuro headrest', 'Lithotomy poles']
  },
  {
    id: 'ot-2',
    sku: 'OT-EQU-002',
    name: 'OT Lights & Spot Lights',
    categoryId: 'surgical-ot-equipments',
    categoryName: 'Surgical OT Equipments',
    description: 'High-intensity shadowless surgical LED lights for optimal visibility during procedures.',
    images: ['/images/products/ot_lights.png'],
    specs: { 'Intensity': '160,000 Lux', 'Color Temp': '4500K' },
    certifications: ['CE Certified'],
    features: ['Shadowless technology', 'Cold light', 'Long-life LEDs']
  },

  // Hospital Furnitures
  {
    id: 'hf-1',
    sku: 'HF-FUR-001',
    name: 'Manual & Electrical Patient Beds',
    categoryId: 'hospital-furnitures',
    categoryName: 'Hospital Furnitures',
    description: 'Advanced ICU and ward beds with multi-functional adjustments for patient comfort.',
    images: ['/images/products/icu_bed.png'],
    specs: { 'Functions': '5-Function / 3-Function', 'Operation': 'Manual / Electric' },
    certifications: ['ISO 13485'],
    features: ['ABS side rails', 'Central locking', 'CPR function']
  },
  {
    id: 'hf-2',
    sku: 'HF-FUR-002',
    name: 'Patient Shifting Structures',
    categoryId: 'hospital-furnitures',
    categoryName: 'Hospital Furnitures',
    description: 'Reliable stretchers and shifting trolleys for safe and efficient patient transport.',
    images: ['/images/products/stretcher_trolley.png'],
    specs: { 'Type': 'Hydraulic / Manual', 'Load Capacity': '200kg' },
    certifications: ['CE Certified'],
    features: ['Trendelenburg position', 'Oxygen cylinder holder', 'IV pole']
  },

  // Global Products
  {
    id: 'gp-1',
    sku: 'GP-DIA-001',
    name: 'ECG, EEG, EMG Systems',
    categoryId: 'global-products',
    categoryName: 'Global Products',
    description: 'Precision diagnostic equipment for cardiovascular and neurological monitoring.',
    images: ['/images/products/ecg_machine.png'],
    specs: { 'Channels': '3/6/12 Channel ECG', 'Type': 'Digital' },
    certifications: ['FDA Approved', 'CE'],
    features: ['Interpretation software', 'High resolution', 'Portable design']
  },
  {
    id: 'gp-2',
    sku: 'GP-DIA-002',
    name: 'Patient Monitors',
    categoryId: 'global-products',
    categoryName: 'Global Products',
    description: 'Multi-para patient monitors for continuous tracking of vital signs in ICU and OT.',
    images: ['/images/products/patient_monitor.png'],
    specs: { 'Parameters': 'ECG, SpO2, NIBP, Resp, Temp', 'Display': '12.1" TFT' },
    certifications: ['CE Certified'],
    features: ['Arrhythmia analysis', 'Networkable', 'Battery backup']
  },
  {
    id: 'gp-3',
    sku: 'GP-RES-001',
    name: 'Ventilators & Anesthesia Workstations',
    categoryId: 'global-products',
    categoryName: 'Global Products',
    description: 'Critical care ventilation systems and advanced anesthesia delivery units.',
    images: ['/images/products/ventilator.png'],
    specs: { 'Modes': 'Invasive / Non-Invasive', 'Gas Control': 'Electronic' },
    certifications: ['CE Certified'],
    features: ['Tidal volume control', 'Integrated monitoring', 'Safety alarms']
  },
  {
    id: 'gp-4',
    sku: 'GP-RES-002',
    name: 'Oxygen Concentrator & CPAP/BPAP',
    categoryId: 'global-products',
    categoryName: 'Global Products',
    description: 'Home care and hospital-grade respiratory support devices.',
    images: ['/images/products/oxygen_concentrator.png'],
    specs: { 'O2 Flow': '5L/10L PM', 'Pressure': 'Fixed / Auto' },
    certifications: ['ISO 13485'],
    features: ['High purity O2', 'Quiet operation', 'User-friendly interface']
  },
  {
    id: 'gp-5',
    sku: 'GP-CAR-001',
    name: 'Cardiac Workstation - TMT',
    categoryId: 'global-products',
    categoryName: 'Global Products',
    description: 'Complete cardiac stress test system with advanced treadmill and monitoring software.',
    images: ['/images/products/cardiac_workstation.png'],
    specs: { 'System': 'Digital TMT', 'Treadmill': 'Heavy Duty' },
    certifications: ['CE Certified'],
    features: ['Real-time ST analysis', 'Wireless ECG', 'Detailed reporting']
  },
  {
    id: 'gp-6',
    sku: 'GP-EMER-001',
    name: 'Defibrillator & Nebulizer',
    categoryId: 'global-products',
    categoryName: 'Global Products',
    description: 'Life-saving emergency defibrillators and high-efficiency medical nebulizers.',
    images: ['/images/products/defibrillator.png'],
    specs: { 'Defib Type': 'Biphasic', 'Neb Rate': '0.2ml/min' },
    certifications: ['FDA Approved', 'CE'],
    features: ['Voice prompts', 'Fast charging', 'Compact and portable']
  },

  // Infant Care
  {
    id: 'ic-1',
    sku: 'IC-INF-001',
    name: 'Baby Incubators',
    categoryId: 'infant-care',
    categoryName: 'Infant Care',
    description: 'Controlled micro-environment systems for the care of premature and ill newborns.',
    images: ['/images/products/baby_incubator.png'],
    specs: { 'Control': 'Air / Skin Mode', 'Hood': 'Double Wall' },
    certifications: ['CE Certified'],
    features: ['Humidity control', 'Oxygen therapy port', 'Low noise']
  },
  {
    id: 'ic-2',
    sku: 'IC-INF-002',
    name: 'Infant Warmer & Resuscilator',
    categoryId: 'infant-care',
    categoryName: 'Infant Care',
    description: 'Open care thermal support and emergency resuscitation units for neonates.',
    images: ['https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop'],
    specs: { 'Heater': 'Ceramic / Quartz', 'Control': 'Servo Mode' },
    certifications: ['ISO 9001'],
    features: ['APGAR timer', 'Observation lamp', 'Tilting bed']
  },
  {
    id: 'ic-3',
    sku: 'IC-INF-003',
    name: 'Photo Therapy Units',
    categoryId: 'infant-care',
    categoryName: 'Infant Care',
    description: 'High-intensity LED phototherapy systems for neonatal jaundice treatment.',
    images: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'],
    specs: { 'Light Source': 'Blue LEDs', 'Wavelength': '450-470 nm' },
    certifications: ['CE Certified'],
    features: ['Adjustable height', 'Treatment timer', 'Compact design']
  },

  // OT Tables
  {
    id: 'ott-1',
    sku: 'OTT-TBL-001',
    name: 'Electrical OT Table',
    categoryId: 'ot-tables',
    categoryName: 'OT Tables',
    description: 'Fully motorized operating table with versatile positions for all surgical needs.',
    images: ['/images/products/ot_table.png'],
    specs: { 'Length': '2000mm', 'Width': '520mm', 'Positions': 'Trendelenburg, Lateral, Kidney Bridge' },
    certifications: ['CE Certified', 'ISO 13485'],
    features: ['Radio-translucent top', 'Stainless steel base', 'Remote control operation']
  },
  {
    id: 'ott-2',
    sku: 'OTT-TBL-002',
    name: 'Manual Hydraulic OT Table',
    categoryId: 'ot-tables',
    categoryName: 'OT Tables',
    description: 'Durable hydraulic operating table providing reliable performance and ease of use.',
    images: ['https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800&auto=format&fit=crop'],
    specs: { 'Mechanism': 'Hydraulic Pump', 'Base': 'T-Shaped' },
    certifications: ['ISO 9001'],
    features: ['C-Arm compatible', 'Floor locking mechanism', 'Smooth adjustments']
  }
];

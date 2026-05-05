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
  { id: 'hospital-furniture', name: 'Hospital Furniture', description: 'Durable and ergonomic furniture for patient care and ward management.' },
  { id: 'x-ray-supplies', name: 'X-Ray Supplies', description: 'Radiation protection and imaging supplies adhering to strict safety standards.' },
  { id: 'ot-equipments', name: 'OT Equipments', description: 'Precision surgical equipment for modern operation theaters.' },
  { id: 'infant-care', name: 'Infant Care Equipment', description: 'Sensitive, life-saving technology for neonatal intensive care.' },
  { id: 'infant-radiant-warmer', name: 'Infant Radiant Warmer', description: 'Various models of radiant warmers for neonates.', hidden: true }
];

export const products: Product[] = [
  {
    id: 'p-1',
    sku: 'HF-ICU-001',
    name: 'Advanced 5-Function ICU Bed',
    categoryId: 'hospital-furniture',
    categoryName: 'Hospital Furniture',
    description: 'A fully motorized ICU bed designed for critical care environments. Features an ergonomic design with ABS head and foot boards, split rails, and central locking castors to ensure patient safety and ease of use for healthcare professionals.',
    material: 'Mild Steel / ABS',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', // Bed placeholder
    ],
    specs: {
      'Overall Dimensions': '2140mm L x 1050mm W',
      'Height Adjustment': '450mm to 750mm',
      'Backrest Angle': '0-75°',
      'Knee Rest Angle': '0-40°',
      'Trendelenburg / Rev. Trend.': '±12°',
      'Safe Working Load': '250 kg'
    },
    certifications: ['ISO 9001:2015', 'CE Certified', 'ISO 13485:2016'],
    features: [
      'Four advanced linear actuators',
      'Nurse control panel with lock-out function',
      'CPR release mechanism',
      'Angle indicators for backrest and Trendelenburg'
    ]
  },
  {
    id: 'p-2',
    sku: 'XR-APRON-025',
    name: 'Premium Lead Apron (0.5mmPb)',
    categoryId: 'x-ray-supplies',
    categoryName: 'X-Ray Supplies',
    description: 'High-grade radiation protection apron providing comprehensive coverage. Engineered with multi-layer core material that ensures maximum flexibility and uniform weight distribution to reduce fatigue during extended procedures.',
    material: 'Lead / Nylon',
    images: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Lead Equivalency': '0.5mmPb',
      'Core Material': 'Lightweight Lead',
      'Outer Fabric': 'Waterproof, antimicrobial Nylon',
      'Closure System': 'Velcro with buckle support',
      'Weight': 'Approx 2.8 kg (Size L)'
    },
    certifications: ['CE Certified', 'AERB Approved', 'ISO 13485:2016'],
    features: [
      'Ergonomic thyroid collar included',
      'Padded shoulders for extra comfort',
      'Stain-resistant and easy to clean',
      'Available in multiple sizes (S, M, L, XL)'
    ]
  },
  {
    id: 'p-3',
    sku: 'OT-LED-900',
    name: 'Shadowless LED OT Light (Ceiling Mount)',
    categoryId: 'ot-equipments',
    categoryName: 'OT Equipments',
    description: 'State-of-the-art shadowless surgical light utilizing advanced LED technology to provide bright, cool, and natural color illumination. Designed for deep cavity procedures with exceptional tissue differentiation.',
    material: 'Aerospace Grade Aluminum',
    images: [
      'https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Illumination Intensity': '160,000 + 160,000 Lux',
      'Color Temperature': '3500K - 5000K (Adjustable)',
      'Color Rendering Index (CRI)': '≥ 95',
      'LED Lifespan': '> 50,000 Hours',
      'Focus Diameter': '150 - 300 mm'
    },
    certifications: ['CE Certified', 'FDA Approved', 'ISO 9001:2015'],
    features: [
      'Endoscopy mode for minimally invasive surgery',
      'Sterilizable handle',
      'Touch screen control panel',
      'Aerodynamic design for laminar flow compatibility'
    ]
  },
  {
    id: 'p-4',
    sku: 'IC-WARM-GRP',
    name: 'Infant Radiant Warmer',
    categoryId: 'infant-care',
    categoryName: 'Infant Care Equipment',
    description: 'Microprocessor-controlled infant radiant warmer models designed to provide stable thermal environments for neonates.',
    material: 'Stainless Steel / Acrylic',
    images: [
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {},
    certifications: [],
    features: [],
    isSubcategoryCard: true,
    targetCategoryId: 'infant-radiant-warmer'
  },
  {
    id: 'p-4-1',
    sku: 'IC-WARM-INNWDX',
    name: 'Infant Radiant Warmer - INNWDX',
    categoryId: 'infant-radiant-warmer',
    categoryName: 'Infant Radiant Warmer',
    description: 'Advanced infant radiant warmer INNWDX model with phototherapy unit, swiveling heater assembly, and comprehensive monitoring.',
    images: ['https://www.indosurgicals.com/images/products/Infant-Radiant-Warmer.jpg'],
    specs: {
      'Control Modes': 'Manual and Servo modes for flexible operation',
      'Electrical Specifications': '220V/50Hz, 650 Watts, 5 Amp Fuse',
      'Dimensions': 'Height - 1920mm, Length - 890mm, Width - 860mm',
      'Heater Assembly': 'Radiant heater with inbuilt LED examination lamp',
      'Storage': 'One drawer system for consumables'
    },
    certifications: ['CE Certified', 'ISO 9001'],
    features: [
      'Comprehensive audible and visual alarms (probe, skin temp, power)',
      'Swiveling heater assembly for precise positioning',
      'Spacious baby bed with easy drop-down glasses',
      'High-quality 4" castors with brakes on front two',
      'Antistatic castors available as an option'
    ]
  },
  {
    id: 'p-4-2',
    sku: 'IC-WARM-INDX',
    name: 'Infant Radiant Warmer - INDX',
    categoryId: 'infant-radiant-warmer',
    categoryName: 'Infant Radiant Warmer',
    description: 'Advanced infant radiant warmer INDX model with automatic, manual, and servo control modes for precise neonatal care.',
    images: ['https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop'],
    specs: {
      'Control Modes': 'Automatic, Manual, and Servo modes',
      'Display': 'Large skin/air temperature display (°C and °F)',
      'Air Mode': 'Optional air sensor with 39°C cut-off',
      'Bed Design': 'Spacious oval bed with drop-down/fold-down glasses',
      'Storage': 'Two trays below the baby bed for consumables'
    },
    certifications: ['CE Certified'],
    features: [
      'Programmable user settings for count timer and pre-warming',
      'Comprehensive audio/visual alarms',
      'Adjustable heating 40% to 100% in manual mode',
      'Optional LED or CFL under-surface phototherapy unit',
      'High-quality 4" castors with brakes'
    ]
  },
  {
    id: 'p-4-3',
    sku: 'IC-WARM-INIRW',
    name: 'Infant Radiant Warmer - INIRW',
    categoryId: 'infant-radiant-warmer',
    categoryName: 'Infant Radiant Warmer',
    description: 'Advanced microprocessor-controlled infant radiant warmer system with self-check, featuring manual and servo modes, and comprehensive thermal monitoring for neonatal intensive care.',
    images: ['https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop'],
    specs: {
      'Control System': 'Advanced microprocessor-controlled system with self-check',
      'Control Modes': 'Manual and Servo modes',
      'Heater Assembly': '650-watt heating system (Silica, Quartz, or Ceramic)',
      'Dimensions': '1850mm(H) x 1050mm(L) x 650mm(W)',
      'Electrical': '220V/50Hz, 650 Watts, 5 Amp Fuse'
    },
    certifications: ['CE Certified'],
    features: [
      'Large skin/air temperature display (Celsius/Fahrenheit)',
      'Audible and visual alarms for probe, skin temp, power, and heater fail',
      'Drop-down/fold-down glasses on baby bed with optional X-ray facility',
      'Swiveling main control system for accessibility',
      '4" castors with brakes on front two'
    ]
  },
  {
    id: 'p-4-4',
    sku: 'IC-WARM-INS',
    name: 'Infant Radiant Warmer - INS',
    categoryId: 'infant-radiant-warmer',
    categoryName: 'Infant Radiant Warmer',
    description: 'Digital, microprocessor-based infant radiant warmer INS model with automatic manual, Servo and Air modes.',
    images: ['https://www.indosurgicals.com/images/products/Infant%20Radiant%20Warmer%20-%20INS.jpg'],
    specs: {
      'Control System': 'Digital, microprocessor-based',
      'Control Modes': 'Automatic manual / baby (Servo) / Air modes',
      'Heater Assembly': 'Parabolic heater with 650-watt heating system (Silica, Quartz, Ceramic)',
      'Dimensions': '1850mm(H) x 1050mm(L) x 650mm(W)',
      'Electrical': '220V/50Hz, 650 Watts, 5 Amp Fuse'
    },
    certifications: ['CE Certified', 'ISO 9001'],
    features: [
      'Large skin/air temperature display (Celsius/Fahrenheit)',
      'Adjustable heating 40% to 100% in manual mode',
      'Spacious baby bed with drop-down/fold-down glasses',
      'Swiveling heater assembly for procedures and X-rays',
      'User-programmable settings for timers and pre-warming mode'
    ]
  },
  {
    id: 'p-4-5',
    sku: 'IC-WARM-INNW',
    name: 'Infant Radiant Warmer - INNW',
    categoryId: 'infant-radiant-warmer',
    categoryName: 'Infant Radiant Warmer',
    description: 'Infant radiant warmer INNW model offering simple controls and reliable heating.',
    images: ['https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop'],
    specs: { 'Control': 'Manual', 'Bed': 'Fixed' },
    certifications: ['ISO 9001'],
    features: ['Economical model', 'Easy to move']
  },
  {
    id: 'p-5',
    sku: 'HF-WL-002',
    name: 'Deluxe Ward Locker',
    categoryId: 'hospital-furniture',
    categoryName: 'Hospital Furniture',
    description: 'Sturdy bedside medicine and personal item locker for patient wards. Constructed from high-quality CRCA steel to ensure durability.',
    material: 'CRCA Steel',
    images: [
      'https://images.unsplash.com/photo-1629399222453-677ff8cedc2a?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Dimensions': '400mm L x 400mm W x 800mm H',
      'Drawers': '1 top drawer',
      'Cabinet': '1 bottom cabinet with shelf',
      'Finish': 'Epoxy powder coated'
    },
    certifications: ['ISO 9001:2015'],
    features: [
      'Ventilation louvers',
      'Stainless steel top',
      'Recessed safe handles'
    ]
  },
  {
    id: 'p-6',
    sku: 'IC-INC-200',
    name: 'Infant Incubators',
    categoryId: 'infant-care',
    categoryName: 'Infant Care Equipment',
    description: 'Advanced infant incubator providing a controlled microenvironment for premature or ill newborns.',
    material: 'Acrylic / ABS',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Control Mode': 'Air & Skin mode controlled by micro-computer',
      'Display': 'LED / Touch screen',
      'Humidity Control': 'Passive or Active adjustable'
    },
    certifications: ['CE Certified', 'ISO 13485:2016'],
    features: ['Double wall hood', 'X-Ray cassette tray', 'Alarms for safety']
  },
  {
    id: 'p-7',
    sku: 'IC-RES-300',
    name: 'Resuscitation Unit',
    categoryId: 'infant-care',
    categoryName: 'Infant Care Equipment',
    description: 'Neonatal resuscitation unit designed for critical care emergencies, ensuring clear airways and optimal oxygenation.',
    material: 'Stainless Steel',
    images: [
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Suction Source': 'Built-in or pipeline',
      'Oxygen Delivery': 'T-piece with manometer',
      'Apgar Timer': 'Built-in'
    },
    certifications: ['CE Certified', 'ISO 9001:2015'],
    features: ['Adjustable PIP and PEEP', 'Heated mattress options', 'Integrated suction']
  },
  {
    id: 'p-8',
    sku: 'IC-OX-400',
    name: 'Oxygen Hoods & Accessories',
    categoryId: 'infant-care',
    categoryName: 'Infant Care Equipment',
    description: 'Clear, continuous monitoring oxygen hoods designed to provide accurate oxygen therapy for infants.',
    material: 'Medical Grade Polycarbonate',
    images: [
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Sizes': 'S, M, L available',
      'Adjustment': 'Neck adjustment flap',
      'Portability': 'Lightweight and durable'
    },
    certifications: ['ISO 13485:2016'],
    features: ['High transparency for easy observation', 'Silicone neck pad', 'Compatible with standard tubing']
  },
  {
    id: 'p-9',
    sku: 'IC-PHO-500',
    name: 'Phototherapy Unit',
    categoryId: 'infant-care',
    categoryName: 'Infant Care Equipment',
    description: 'High-efficacy LED phototherapy unit for the treatment of neonatal hyperbilirubinemia.',
    material: 'Aluminum / ABS',
    images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
    ],
    specs: {
      'Light Source': 'Blue LEDs',
      'Wavelength': '450-470 nm',
      'Timer': 'Integrated treatment timer'
    },
    certifications: ['CE Certified', 'FDA Approved'],
    features: ['Adjustable height and angle', 'Cool operation with low heat output', 'Long LED lifespan']
  }
];

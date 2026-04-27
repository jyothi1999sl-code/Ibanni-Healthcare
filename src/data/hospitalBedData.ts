export interface HospitalBedDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  uses: string;
  specifications: string[];
  features: string[];
  image: string;
}

export const hospitalBedDetails: Record<string, HospitalBedDetail> = {
  'icu-bed-ss': {
    id: 'icu-bed-ss',
    name: 'ICU Bed with SS Laminated Panel & SS Side Rail',
    category: 'Manual Hospital Bed',
    description: 'IndoSurgicals Private Limited, one of the largest and most trusted manufacturers, proudly presents the ICU Bed with SS Laminated Panel & SS Side Rail. Designed for superior functionality and patient comfort, this bed is a critical addition to any intensive care unit.',
    uses: 'The ICU Bed with SS Laminated Panel & SS Side Rail is specifically designed to provide optimal support and care for patients in critical conditions. It is an essential piece of equipment in intensive care units, facilitating various medical procedures and ensuring patient safety and comfort.',
    specifications: [
      'Overall Size: Approx. 2250 mm (L) x 1015 mm (W) x 625/820 mm (H)',
      'Adjustability: Four separate screws for backrest and knee rest adjustments',
      'X-Ray Compatibility: Back section is X-ray translucent',
      'Height Adjustment: Hydraulic system for smooth height adjustment',
      'Mobility: Mounted on 125 mm diameter heavy wheels'
    ],
    features: [
      'Stainless steel collapsible side rails',
      'Stainless steel and laminated head/foot boards',
      'Rubber buffers on all corners',
      'O2 cylinder cage and X-ray cassette holder integrated',
      'Pre-treated and epoxy powder coated finish'
    ],
    image: '/equipment/hospital_bed_clean.png'
  },
  'icu-bed-abs': {
    id: 'icu-bed-abs',
    name: 'ICU Bed with ABS Panel and ABS Safety Rails',
    category: 'Manual Hospital Bed',
    description: 'Premium ICU bed featuring modern ABS (Acrylonitrile Butadiene Styrene) panels and safety rails for enhanced ergonomics, durability, and infection control.',
    uses: 'Ideal for critical care units where ease of cleaning and patient safety are paramount. The ABS panels are lightweight and chemically resistant.',
    specifications: [
      'Overall Size: 2100mm L x 900mm W x 600mm H',
      'Manual Crank System: 4 separate cranks for positions',
      'Casters: 125mm with central locking system'
    ],
    features: [
      'Removable ABS head and foot panels',
      'Tuck-away ABS side rails',
      'Drainage bag hooks',
      'IV pole sockets'
    ],
    image: '/equipment/hospital_bed_clean.png'
  },
  'fowler-bed-abs': {
    id: 'fowler-bed-abs',
    name: 'Fowler Bed Mechanical with ABS Panel',
    category: 'Manual Hospital Bed',
    description: 'A versatile mechanical bed designed for general wards and recovery rooms, allowing multiple positions for patient comfort.',
    uses: 'Used in general hospitals and clinics for patients requiring backrest and knee-rest adjustments during recovery.',
    specifications: [
      'Size: 2000mm x 900mm',
      'Backrest angle: 0-75 degrees',
      'Knee-rest angle: 0-40 degrees'
    ],
    features: [
      'Double screw mechanism',
      'Stainless steel IV pole',
      'Perforated mattress area'
    ],
    image: '/equipment/hospital_bed_clean.png'
  },
  'hospital-plain-bed': {
    id: 'hospital-plain-bed',
    name: 'Hospital Plain Bed (General)',
    category: 'Manual Hospital Bed',
    description: 'The standard plain hospital bed, built for durability and ease of maintenance in general patient wards.',
    uses: 'Basic patient accommodation in clinics, community health centers, and general hospital wards.',
    specifications: [
      'Fixed height',
      'Rigid mesh top',
      'Epoxy powder coated'
    ],
    features: [
      'Tubular construction',
      'Provisions for IV rod',
      'Standard sizes'
    ],
    image: '/equipment/hospital_bed_clean.png'
  }
};

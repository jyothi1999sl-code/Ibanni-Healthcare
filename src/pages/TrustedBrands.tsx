import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export default function TrustedBrands() {
  const brands = [
    { name: "Global Imaging", country: "Germany", rating: 5 },
    { name: "MedTech Solutions", country: "USA", rating: 5 },
    { name: "EuroCare Equipment", country: "France", rating: 4 },
    { name: "Apex Healthcare", country: "UK", rating: 5 },
    { name: "Nippon Medical", country: "Japan", rating: 5 },
    { name: "Seoul Clinical", country: "South Korea", rating: 4 },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Trusted by World's Leading Brands</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-20">
          We collaborate with the most prestigious medical equipment manufacturers and healthcare providers globally.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {brands.map((brand, i) => (
            <div key={i} className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
               <div className="bg-slate-100 h-24 rounded-2xl flex items-center justify-center text-slate-400 font-bold tracking-tighter">BRAND {i+1}</div>
               <p className="mt-3 text-xs font-semibold text-slate-400 uppercase">{brand.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-teal-900 rounded-[3rem] p-12 md:p-20 text-white text-left overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10"><CheckCircle2 size={300} /></div>
          <div className="relative z-10 max-w-3xl">
             <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" className="text-teal-400" />)}
             </div>
             <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
               "Ibanni Healthcare has been our primary supplier for over 8 years. Their commitment to quality and post-sale service is exceptional."
             </h2>
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-teal-800 flex items-center justify-center font-bold text-xl">JD</div>
                <div>
                   <div className="font-bold text-lg">Dr. John Doe</div>
                   <div className="text-teal-400">Chief Radiologist, Global Hospital</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function EquipmentCategories() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Equipment Categories</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-fidelity medical imaging and hospital equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.filter(cat => !(cat as any).hidden).map((category) => (
            <Link 
              key={category.id} 
              to={`/catalog?category=${category.id}`}
              className="group relative h-80 rounded-[2rem] overflow-hidden bg-slate-100 flex flex-col justify-end p-8 border border-slate-100 hover:border-teal-500/20 transition-all shadow-sm"
            >
              <img 
                src={(category as any).image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>

                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Explore Catalog <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

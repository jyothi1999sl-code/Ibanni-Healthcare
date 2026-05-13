import React from 'react';
import { Building2, Globe2, Users2, Factory } from 'lucide-react';

export default function OurCompany() {
  return (
    <div className="bg-white">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">A Global Leader in Healthcare Technology</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Ibanni Healthcare was founded with a single vision: to bridge the gap between advanced imaging technology and affordable healthcare. Today, we are proud to be one of the most trusted names in the industry.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">20+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">10k+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Global Clients</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-100 h-64 rounded-3xl flex items-center justify-center"><Building2 size={64} className="text-slate-300" /></div>
             <div className="bg-teal-50 h-64 rounded-3xl mt-12 flex items-center justify-center"><Factory size={64} className="text-teal-200" /></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-4">
                <Globe2 className="text-teal-400 w-12 h-12" />
                <h3 className="text-2xl font-bold">Global Infrastructure</h3>
                <p className="text-slate-400 max-w-xs">State-of-the-art manufacturing facilities and distribution centers worldwide.</p>
              </div>
              <div className="flex flex-col items-center md:items-start gap-4">
                <Users2 className="text-teal-400 w-12 h-12" />
                <h3 className="text-2xl font-bold">Expert Team</h3>
                <p className="text-slate-400 max-w-xs">Over 500 dedicated professionals focused on imaging innovation.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

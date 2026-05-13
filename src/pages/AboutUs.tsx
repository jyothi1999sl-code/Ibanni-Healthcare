import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pioneering Excellence in Healthcare Imaging</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              For over two decades, Ibanni Healthcare has been at the forefront of providing high-quality medical imaging solutions to hospitals and clinics worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Uncompromising Quality</h3>
            <p className="text-slate-600 leading-relaxed">
              All our equipment meets the highest international standards for safety and reliability.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower healthcare professionals with cutting-edge imaging technology that improves patient outcomes.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Global Reach</h3>
            <p className="text-slate-600 leading-relaxed">
              Trusted by over 10,000+ medical facilities in 50+ countries across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-100 rounded-full blur-[80px] opacity-60"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=1200&auto=format&fit=crop" 
                  alt="Founder of Ibanni Healthcare" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-2xl font-bold">Dr. Rajesh Ibanni</div>
                  <div className="text-teal-400 font-medium tracking-widest uppercase text-xs mt-1">Founder & Managing Director</div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 shadow-sm">
                <Users size={16} className="text-teal-600" /> Message from Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                Driving Innovation in <span className="text-teal-600">Global Healthcare</span>
              </h2>
              <div className="relative">
                <svg className="absolute -top-6 -left-6 w-12 h-12 text-slate-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl text-slate-600 italic leading-relaxed relative z-10 mb-8">
                  "At Ibanni Healthcare, we don't just supply equipment; we empower the hands that save lives. Our commitment to precision and reliability is rooted in the belief that every patient deserves the highest standard of technological care, no matter where they are in the world."
                </p>
              </div>
              <p className="text-base text-slate-500 leading-relaxed mb-10">
                With over 20 years of experience in medical technology, our leadership team focuses on bridging the gap between advanced imaging science and practical clinical needs. We continue to invest in R&D to ensure that Ibanni remains a trusted name in hospitals globally.
              </p>
              <div className="flex items-center gap-6">
                <div className="h-[1px] flex-1 bg-slate-200"></div>
                <div className="text-sm font-bold text-slate-900 font-serif tracking-widest uppercase">Rajesh Ibanni</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

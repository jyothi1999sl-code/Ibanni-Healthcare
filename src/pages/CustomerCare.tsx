import React from 'react';
import { HelpCircle, ShieldCheck, RefreshCcw, LifeBuoy } from 'lucide-react';

export default function CustomerCare() {
  const faqs = [
    { q: "What is the warranty period for imaging equipment?", a: "Most of our primary equipment comes with a 2-year comprehensive warranty, extendable up to 5 years." },
    { q: "Do you provide international shipping?", a: "Yes, we ship to over 50 countries worldwide with specialized medical logistics partners." },
    { q: "How can I request technical support?", a: "You can call our 24/7 hotline or submit a support ticket through this page." },
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-16 text-center">Customer Care & Support</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center hover:border-teal-500/30 transition-all group">
            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Warranty Registration</h3>
            <p className="text-slate-500 mb-6">Register your new equipment to activate your comprehensive warranty.</p>
            <button className="text-teal-600 font-bold hover:underline">Register Now &rarr;</button>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center hover:border-blue-500/30 transition-all group">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
              <LifeBuoy size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Technical Helpdesk</h3>
            <p className="text-slate-500 mb-6">Connect with our expert engineers for immediate technical assistance.</p>
            <button className="text-blue-600 font-bold hover:underline">Get Support &rarr;</button>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center hover:border-purple-500/30 transition-all group">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
              <RefreshCcw size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Returns & Exchange</h3>
            <p className="text-slate-500 mb-6">Read our policy on equipment returns and global exchange programs.</p>
            <button className="text-purple-600 font-bold hover:underline">View Policy &rarr;</button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
             <HelpCircle className="text-teal-600" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-slate-100 p-6 group cursor-pointer">
                <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-300 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

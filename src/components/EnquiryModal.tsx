import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
import { Product } from '../data/products';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
  categoryName?: string;
}

export default function EnquiryModal({ isOpen, onClose, product, categoryName }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col font-sans text-slate-900 border border-slate-100">
        
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white">
          <h2 className="text-lg font-bold text-slate-900">Send Enquiry</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-6 bg-slate-50/50">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 ring-1 ring-green-100">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enquiry Sent</h3>
              <p className="text-sm text-slate-500">Our B2B sales team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {product ? (
                <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 w-full shadow-sm">
                  <div className="w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex-shrink-0 p-1">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-600 mb-1">Inquiring About</p>
                    <p className="text-sm font-bold text-slate-900 leading-tight">{product.name}</p>
                    <p className="text-xs text-slate-500 mt-1">SKU: {product.sku}</p>
                  </div>
                </div>
              ) : categoryName && (
                <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 w-full shadow-sm">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-blue-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-600 mb-1">Inquiring About Category</p>
                    <p className="text-sm font-bold text-slate-900 leading-tight">{categoryName}</p>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">First Name <span className="text-blue-500">*</span></label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-sm transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Last Name <span className="text-blue-500">*</span></label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-sm transition-all shadow-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Hospital / Organization <span className="text-blue-500">*</span></label>
                <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-sm transition-all shadow-sm" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Business Email <span className="text-blue-500">*</span></label>
                  <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-sm transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-sm transition-all shadow-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Requirements & Quantities</label>
                <textarea rows={3} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-sm transition-all shadow-sm resize-none" placeholder="Enter configuration details or estimated quantities..."></textarea>
              </div>
              
              <div className="pt-2">
                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-full text-sm uppercase tracking-wide transition-all shadow-md shadow-blue-700/20 hover:shadow-lg hover:-translate-y-0.5">
                  Submit Enquiry
                </button>
                <p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center gap-1.5 font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  ISO 27001 Compliant Data Handling
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

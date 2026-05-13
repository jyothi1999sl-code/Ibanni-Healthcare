import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { products } from '../data/products';
import EnquiryModal from '../components/EnquiryModal';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 font-sans">
        <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/catalog')} className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm font-bold uppercase transition-colors">
          <ArrowLeft size={16} /> Return to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col items-center py-6 overflow-hidden">
      <div className="w-full max-w-[85rem] flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb nav */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 text-sm font-bold text-slate-400 items-center uppercase tracking-wide"
        >
           <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
           <ChevronRightIcon />
           <Link to="/catalog" className="hover:text-blue-600 transition-colors">Catalog</Link>
           <ChevronRightIcon />
           <span className="text-slate-900 truncate">{product.name}</span>
        </motion.div>

        {/* Hero Product View */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-12 shadow-sm flex flex-col lg:flex-row gap-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="aspect-[4/3] bg-slate-50 rounded-[2rem] flex items-center justify-center relative overflow-hidden shadow-inner group">
                <img 
                 src={product.images[0]} 
                 alt={product.name}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur border border-slate-100 text-slate-800 text-xs px-3 py-1.5 font-bold uppercase tracking-wider rounded-full z-10 shadow-sm">
                 {product.categoryName}
               </div>
            </div>
            {/* Thumbnails placeholder layout */}
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square bg-slate-50 border-2 border-blue-600 rounded-2xl overflow-hidden shadow-sm cursor-pointer">
                <img src={product.images[0]} alt="thumbnail" className="w-full h-full object-cover opacity-100" />
              </div>
              <div className="aspect-square bg-slate-50 border border-slate-100 rounded-2xl opacity-60 hover:opacity-100 transition-opacity shadow-inner cursor-pointer"></div>
              <div className="aspect-square bg-slate-50 border border-slate-100 rounded-2xl opacity-60 hover:opacity-100 transition-opacity shadow-inner cursor-pointer"></div>
              <div className="aspect-square bg-slate-50 border border-slate-100 rounded-2xl opacity-60 hover:opacity-100 transition-opacity shadow-inner cursor-pointer"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col pb-4 h-full">
            
            <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              {product.name}
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl font-light">
              {product.description}
            </p>


            
            <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
              <button 
                onClick={() => setIsEnquiryOpen(true)}
                className="flex-1 bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all shadow-md shadow-blue-700/20 hover:shadow-lg hover:-translate-y-0.5"
              >
                Send Enquiry <ArrowRight size={18} />
              </button>
              <button className="flex-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm uppercase tracking-wide border-2 border-slate-200 transition-all shadow-sm hover:shadow">
                <Download size={18} /> Download Specs
              </button>
            </div>
          </div>
        </motion.section>

        {/* Detailed Info Layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-[65%] flex flex-col gap-8"
          >
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Technical Specifications</h3>
              
              <div className="bg-white rounded-2xl overflow-x-auto border border-slate-100">
                <table className="w-full text-left border-collapse min-w-[300px]">
                  <tbody>
                    {product.material && (
                      <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 text-sm font-bold text-slate-500 uppercase tracking-wide w-1/3">Material</td>
                        <td className="py-4 px-6 text-base font-medium text-slate-900">{product.material}</td>
                      </tr>
                    )}
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 text-sm font-bold text-slate-500 uppercase tracking-wide w-1/3">{key}</td>
                        <td className="py-4 px-6 text-base font-medium text-slate-900">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[35%] flex flex-col gap-8"
          >
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">Key Features</h3>
              <ul className="space-y-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-base font-medium text-slate-700 leading-relaxed pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} product={product} />
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 mx-1">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

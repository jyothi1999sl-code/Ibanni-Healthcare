import { Link } from 'react-router-dom';
import { ShieldCheck, Globe2, Factory, Microscope, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { products } from '../data/products';
import { useState } from 'react';
import EnquiryModal from '../components/EnquiryModal';
import { motion } from 'motion/react';

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string | undefined>();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openEnquiry = (categoryName?: string, product?: any) => {
    setSelectedCategoryName(categoryName);
    setSelectedProduct(product);
    setIsEnquiryOpen(true);
  };
  
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="bg-slate-50 text-slate-900 font-sans flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-12 md:gap-16">

        {/* Modern Soft Hero Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-green-50 via-white to-blue-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-14 shadow-sm flex flex-col lg:flex-row gap-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="w-full lg:w-[55%] flex flex-col justify-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="bg-white border border-slate-200 text-blue-700 text-xs px-3 py-1 font-medium rounded-full shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> New Product Line
              </span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Global Medical Supply</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Precision Medical Equipment for <span className="text-blue-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-600">Modern Healthcare</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              Equipping hospitals globally with robust, high-quality, and technologically advanced medical supplies. From ICU solutions to Neonatal Care.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
            >
              <Link to="/catalog" className="flex-1 bg-blue-700 hover:bg-blue-800 text-white text-center py-4 px-6 rounded-full font-medium text-base transition-all shadow-md shadow-blue-700/20 hover:shadow-lg hover:-translate-y-0.5">
                Browse Catalog
              </Link>
              <button onClick={() => openEnquiry()} className="flex-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-center py-4 px-6 rounded-full font-medium text-base transition-all shadow-sm hover:shadow hover:-translate-y-0.5">
                Send Enquiry
              </button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-[45%] h-72 lg:h-auto rounded-3xl flex items-center justify-center relative shadow-inner ring-1 ring-slate-900/5 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              alt="Modern Medical Equipment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent flex justify-center w-full">
              <div className="bg-white/90 backdrop-blur-md inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-800 shadow-sm border border-slate-100/50">
                <CheckCircle2 size={16} className="text-green-600" /> Featured: N-Series Setup
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Soft Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {[
            { icon: ShieldCheck, title: "Global Standards", subtitle: "Reliable and high-performance equipment" },
            { icon: Factory, title: "Direct Manufacturer", subtitle: "Quality controlled production" },
            { icon: Globe2, title: "Worldwide Export", subtitle: "Supplying 50+ countries" }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i} 
              className="bg-white p-8 border border-slate-100 rounded-[2rem] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <item.icon size={26} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Layout for Featured Products & Sidebar */}
        <div className="flex flex-col xl:flex-row gap-8 w-full items-start">
          <div className="w-full xl:w-[65%] flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Featured Equipment</h2>
              <Link to="/catalog" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors group">
                View all Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featuredProducts.map((product, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                  key={product.id} 
                  className="bg-white border border-slate-100 rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group flex flex-col relative overflow-hidden"
                >
                  {/* Category Badge - Glassmorphism */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white/80 backdrop-blur-md border border-white/50 text-blue-800 text-[10px] uppercase tracking-wider px-3 py-1.5 font-bold rounded-full shadow-sm">
                      {product.categoryName}
                    </span>
                  </div>

                  {/* Product Image */}
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] rounded-[1.8rem] overflow-hidden mb-6 bg-slate-50">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>

                  {/* Product Content */}
                  <div className="px-4 pb-6 flex flex-col flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h4>

                    {/* Quick Specs Grid - Strong Details */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(product.specs || {}).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                          <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">{key}</p>
                          <p className="text-xs font-bold text-slate-700 truncate">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
            
            <Link to="/catalog" className="sm:hidden flex items-center justify-center gap-1 w-full bg-slate-100 py-4 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors group">
              View all Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <aside className="w-full xl:w-[35%] flex flex-col gap-6 xl:sticky xl:top-28">

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-blue-900 rounded-[2rem] p-8 text-blue-50 shadow-lg relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-800/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-blue-100 border border-blue-700/50 mb-6 shadow-sm">
                  <ShieldCheck size={16} /> Bulk Inquiries
                </div>
                <div className="text-3xl font-bold mb-4 text-white tracking-tight">Dedicated B2B Support</div>
                <p className="text-base text-blue-100/90 mb-8 leading-relaxed">
                  We provide customized manufacturing solutions for hospital chains and government tenders globally.
                </p>
                <a href="tel:+919845135909" className="block w-full bg-green-500 text-white text-center py-4 rounded-full font-bold text-sm hover:bg-green-400 transition-colors shadow-lg shadow-green-500/30">
                  Call +91 9845135909
                </a>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} categoryName={selectedCategoryName} product={selectedProduct} />
    </main>
  );
}

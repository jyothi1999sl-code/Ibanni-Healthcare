import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, ChevronRight } from 'lucide-react';
import { products, categories, Product } from '../data/products';
import EnquiryModal from '../components/EnquiryModal';
import { motion, AnimatePresence } from 'motion/react';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultCategory = categories.find(cat => !(cat as any).hidden)?.id || 'hospital-furniture';
  const activeCategory = searchParams.get('category') || defaultCategory;
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.categoryId === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.sku.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (catId: string) => {
    setSearchParams(catId === 'all' ? {} : { category: catId });
  };

  const openEnquiry = (product: Product) => {
    setSelectedProduct(product);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8 flex justify-center font-sans mt-4">
      <div className="w-full max-w-7xl flex flex-col gap-8">
        
        {/* Header / Search Area */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="relative z-10 w-full md:w-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Product Catalog</h1>
            <p className="text-base text-slate-500 mt-2 max-w-md">Browse our comprehensive range of certified medical equipment and supplies.</p>
          </div>
          <div className="relative w-full md:w-96 z-10">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border-2 border-slate-100 rounded-full text-sm bg-slate-50 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white shadow-inner transition-all hover:border-slate-200"
              placeholder="Search products or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-1/4 flex-shrink-0 lg:sticky lg:top-28 z-20"
          >
            <div className="bg-white p-4 lg:p-6 border border-slate-100 rounded-[2rem] shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Categories</h3>
              <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.filter(cat => !(cat as any).hidden).map(cat => (
                  <li key={cat.id} className="flex-shrink-0">
                    <button 
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`flex items-center justify-between text-sm font-semibold w-full text-left px-5 py-3 rounded-xl transition-all whitespace-nowrap ${activeCategory === cat.id ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                    >
                      {cat.name}
                      {activeCategory === cat.id && <ChevronRight size={16} className="text-blue-200 hidden lg:block ml-2" />}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="hidden lg:block mt-8 p-6 bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-2xl text-center shadow-sm">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 </div>
                 <div className="text-base font-bold text-slate-900 mb-1">Need Help?</div>
                 <div className="text-sm text-slate-500 mb-5">Speak with technical sales.</div>
                 <button className="w-full bg-white border border-slate-200 text-slate-700 py-3 shadow-sm rounded-full text-sm font-bold hover:bg-slate-50 transition-colors">
                   Contact Sales
                 </button>
              </div>
            </div>
          </motion.aside>

          {/* Main Content Grid */}
          <main className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ staggerChildren: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20"
                >
                  {filteredProducts.map((product, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={product.id} 
                      className="bg-white border border-slate-100 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col group"
                    >
                      {product.isSubcategoryCard ? (
                        <button onClick={() => handleCategoryClick(product.targetCategoryId || '')} className="block text-left relative">
                          <div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] flex items-center justify-center relative overflow-hidden mb-4">
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-slate-100 text-slate-800 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full z-10 shadow-sm">
                              {product.categoryName}
                            </div>
                            <img 
                              src={product.images[0]} 
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                              loading="lazy"
                            />
                          </div>
                          
                          <div className="px-3">
                            <div className="text-xs font-semibold text-blue-600 mb-2 font-mono uppercase tracking-wide">Category</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">{product.name}</h3>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                          </div>
                        </button>
                      ) : (
                        <Link to={`/product/${product.id}`} className="block">
                          <div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] flex items-center justify-center relative overflow-hidden mb-4">
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-slate-100 text-slate-800 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full z-10 shadow-sm">
                              {product.categoryName}
                            </div>
                            <img 
                              src={product.images[0]} 
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                              loading="lazy"
                            />
                          </div>
                          
                          <div className="px-3">
                            <div className="text-xs font-semibold text-blue-600 mb-2 font-mono uppercase tracking-wide">SKU: {product.sku}</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">{product.name}</h3>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                          </div>
                        </Link>
                      )}

                      <div className="mt-auto px-3 pb-3">
                        <div className="flex gap-2 flex-wrap mb-5">
                          {product.certifications.slice(0, 2).map((cert, i) => (
                             <span key={i} className="text-[10px] font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-100 uppercase mt-2">
                               {cert}
                             </span>
                          ))}
                        </div>
                        
                        {product.isSubcategoryCard ? (
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleCategoryClick(product.targetCategoryId || '')}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 flex justify-center items-center rounded-xl font-bold text-sm transition-colors shadow-sm"
                            >
                              View More
                              <ChevronRight size={16} className="ml-1" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <button 
                              onClick={() => openEnquiry(product)}
                              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3 justify-center rounded-xl font-bold text-sm transition-colors shadow-sm text-center"
                            >
                              Enquire
                            </button>
                            <Link 
                              to={`/product/${product.id}`}
                              className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 flex justify-center items-center py-3 rounded-xl font-bold text-sm transition-colors text-center shadow-sm"
                            >
                              Details
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border border-slate-100 rounded-[2.5rem] p-16 text-center shadow-sm flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <SearchIcon size={32} className="text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">No products found</h3>
                  <p className="text-base text-slate-500 mb-8 max-w-sm">Try adjusting your search query or removing filters to find what you're looking for.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSearchParams({ category: activeCategory }); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full transition-all text-sm shadow-md shadow-blue-600/20"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
      
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} product={selectedProduct} />
    </div>
  );
}

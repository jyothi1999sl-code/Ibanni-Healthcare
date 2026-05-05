import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, FileText, ChevronDown, Menu as MenuIcon, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { categories } from '../data/products';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 font-sans border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      {/* Top Bar for B2B Utility */}
      <div className="bg-teal-900 text-teal-50 px-4 sm:px-8 py-2 flex items-center justify-between text-xs font-medium">
        <div className="hidden sm:flex gap-4">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span> ISO 9001:2015</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span> CE CERTIFIED</span>
        </div>
        <div className="hidden md:flex gap-4">
          <span className="opacity-80">Global Export to 45+ Countries</span>
          <span className="opacity-80 border-l border-teal-800 pl-4">ibannihealthcare@gmail.com</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="px-4 sm:px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-2xl font-bold tracking-tight text-blue-800 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            </span>
            Ibanni <span className="font-light text-slate-500">Healthcare</span>
          </Link>
          
          <ul className="hidden md:flex gap-1 items-center">
            <li>
              <Link to="/" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all">Home</Link>
            </li>
            
            <li 
              className="py-2 text-sm font-medium text-slate-600 cursor-pointer relative group"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link to="/catalog" className="px-4 py-2 flex items-center gap-1 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all">
                Catalog <ChevronDown size={14} className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Mega Menu Dropdown */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 w-[600px] mt-2 pt-2 z-50">
                  <div className="bg-white shadow-xl rounded-2xl border border-slate-100 p-6 flex gap-6 ring-1 ring-slate-900/5">
                    <div className="w-1/3 bg-slate-50 p-5 rounded-xl border border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2">Our Catalog</h3>
                      <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                        Trusted by 10,000+ hospitals worldwide. Browse our CE certified medical equipment.
                      </p>
                      <Link to="/catalog" className="inline-flex text-sm text-teal-600 font-medium hover:text-teal-700 items-center gap-1 group/link">
                        View All <ChevronDown size={14} className="rotate-[-90deg] group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="w-2/3 grid grid-cols-2 gap-x-4 gap-y-3">
                      {categories.filter(cat => !(cat as any).hidden).map((cat) => (
                        <Link 
                          key={cat.id} 
                          to={`/catalog?category=${cat.id}`}
                          className="group p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors block"
                        >
                          <h4 className="text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors">{cat.name}</h4>
                          <p className="text-xs text-slate-500 line-clamp-1">{cat.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="#" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all">Certifications</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center relative">
            <Search size={16} className="absolute left-3.5 text-slate-400" />
            <input type="text" placeholder="Search products..." className="bg-slate-100 border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white transition-all shadow-inner" />
          </div>
          <Link to="/catalog" className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors shadow-sm hidden md:block">
            Send Enquiry
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:bg-slate-100 p-2 rounded-full focus:outline-none transition-colors"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-900 bg-slate-50 rounded-xl">Home</Link>
            <Link to="/catalog" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl">Products Catalog</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl">Certifications</Link>
            <Link to="/catalog" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-teal-600 hover:bg-teal-50 rounded-xl mt-2 text-center">Send Enquiry</Link>
          </div>
        </div>
      )}
    </header>
  );
}

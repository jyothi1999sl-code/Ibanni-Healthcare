import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, FileText, ChevronDown, Menu as MenuIcon, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { categories } from '../data/products';
import logo from '@/logo/Ibanni.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 font-sans border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      {/* Top Bar for B2B Utility */}
      <div className="bg-teal-900 text-teal-50 px-4 sm:px-8 py-2 flex items-center justify-between text-xs font-medium">
        <div className="hidden sm:flex gap-4">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span> PREMIUM HEALTHCARE SOLUTIONS</span>
        </div>
        <div className="hidden md:flex gap-4">
          <span className="opacity-80">Global Export to 45+ Countries</span>
          <span className="opacity-80 border-l border-teal-800 pl-4">ibannihealthcare@gmail.com</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="px-4 xl:px-12 py-5 flex justify-between items-center max-w-[1600px] mx-auto gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Ibanni Healthcare" className="h-10 md:h-14 w-auto object-contain" />
          </Link>
        </div>
        
        {/* Navigation Section - Centered and Spaced */}
        <div className="hidden xl:flex flex-grow justify-center">
          <ul className="flex items-center gap-2 2xl:gap-4">
            <li><Link to="/" className="px-3 py-2 text-[15px] 2xl:text-base font-bold text-slate-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-lg transition-all">Home</Link></li>
            <li><Link to="/about" className="px-3 py-2 text-[15px] 2xl:text-base font-bold text-slate-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-lg transition-all whitespace-nowrap">About Us</Link></li>
            
            <li 
              className="relative group"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link to="/categories" className="px-3 py-2 text-[15px] 2xl:text-base font-bold text-slate-700 flex items-center gap-1 hover:text-teal-600 hover:bg-teal-50/50 rounded-lg transition-all whitespace-nowrap">
                Equipment Categories <ChevronDown size={16} className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Mega Menu Dropdown */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] mt-2 pt-4 z-50">
                  <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl border border-slate-100 p-8 flex gap-8 ring-1 ring-slate-900/5">
                    <div className="w-1/3 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center text-center md:text-left">
                      <h3 className="font-bold text-slate-900 mb-2">Our Solutions</h3>
                      <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                        Trusted by 10,000+ hospitals worldwide. Discover our CE certified imaging range.
                      </p>
                      <Link to="/catalog" className="inline-flex text-sm text-teal-600 font-bold hover:text-teal-700 items-center justify-center md:justify-start gap-1 group/link">
                        Full Catalog <ChevronDown size={14} className="rotate-[-90deg] group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="w-2/3 grid grid-cols-2 gap-x-6 gap-y-4">
                      {categories.filter(cat => !(cat as any).hidden).map((cat) => (
                        <Link 
                          key={cat.id} 
                          to={`/catalog?category=${cat.id}`}
                          className="group p-3 rounded-xl hover:bg-slate-50 transition-colors block border border-transparent hover:border-slate-100"
                        >
                          <h4 className="text-[14px] font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{cat.name}</h4>

                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li><Link to="/services" className="px-3 py-2 text-[15px] 2xl:text-base font-bold text-slate-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-lg transition-all">Services</Link></li>
            <li><Link to="/contact" className="px-3 py-2 text-[15px] 2xl:text-base font-bold text-slate-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-lg transition-all whitespace-nowrap">Get In Touch</Link></li>
            <li><Link to="/brands" className="px-3 py-2 text-[15px] 2xl:text-base font-bold text-slate-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-lg transition-all whitespace-nowrap">Trusted Brands</Link></li>
            <li><Link to="/customer-care" className="px-3 py-2 text-[15px] 2xl:text-base font-bold text-slate-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-lg transition-all whitespace-nowrap">Customer Care</Link></li>
          </ul>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-2 2xl:gap-4 flex-shrink-0">
          <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <Link to="/contact" className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full font-bold text-[13px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 hidden lg:block">
            Send Enquiry
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden text-slate-600 hover:bg-slate-100 p-2.5 rounded-full focus:outline-none transition-colors border border-slate-200"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-5 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-5 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">About Us</Link>
            <Link to="/categories" onClick={() => setIsMenuOpen(false)} className="block px-5 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">Equipment Categories</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-5 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">Services</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-5 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">Get In Touch</Link>
            <Link to="/brands" onClick={() => setIsMenuOpen(false)} className="block px-5 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">Trusted Brands</Link>
            <Link to="/customer-care" onClick={() => setIsMenuOpen(false)} className="block px-5 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">Customer Care</Link>
            <div className="pt-6">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-6 py-5 text-center text-lg font-bold text-white bg-teal-600 rounded-2xl shadow-lg active:scale-95 transition-all">
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

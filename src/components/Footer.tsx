import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Award, Globe } from 'lucide-react';
import logo from '@/logo/Ibanni.png';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center">
              <img src={logo} alt="Ibanni Healthcare" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              Leading manufacturer and supplier of premium medical equipment. Supplying to over 10,000+ hospitals in 50+ countries.
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-pointer"><ShieldCheck size={18} /></span>
              <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-pointer"><Award size={18} /></span>
              <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-pointer"><Globe size={18} /></span>
            </div>
          </div>

          {/* Categories Col */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-6">Equipment Categories</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/catalog?category=hospital-furniture" className="hover:text-teal-600 transition-colors">Hospital Furniture</Link></li>
              <li><Link to="/catalog?category=x-ray-supplies" className="hover:text-teal-600 transition-colors">X-Ray Protection</Link></li>
              <li><Link to="/catalog?category=ot-equipments" className="hover:text-teal-600 transition-colors">OT Equipments</Link></li>
              <li><Link to="/catalog?category=infant-care" className="hover:text-teal-600 transition-colors">Infant Care</Link></li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-teal-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-600 transition-colors">Services</Link></li>
              <li><Link to="/brands" className="hover:text-teal-600 transition-colors">Trusted Brands</Link></li>
              <li><Link to="/customer-care" className="hover:text-teal-600 transition-colors">Customer Care</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-6">Registered Office</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Sir M, 226, Vishveshwariaha Layout, BDA 6th Block,<br/>Bengaluru, Karnataka 560091</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-600 flex-shrink-0" />
                <span className="font-semibold text-slate-700">+91 9845135909</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-600 flex-shrink-0" />
                <span className="font-semibold text-slate-700">ibannihealthcare@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ibanni Healthcare. ISO 13485 Compliance.
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center">
             <div className="text-xs font-semibold text-slate-900 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">MADE IN INDIA</div>
             <div className="text-sm font-medium text-slate-500 cursor-pointer hover:text-teal-600 transition-colors">Privacy Policy</div>
             <div className="text-sm font-medium text-slate-500 cursor-pointer hover:text-teal-600 transition-colors">Terms of Supply</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

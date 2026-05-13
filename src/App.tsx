/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import EquipmentCategories from './pages/EquipmentCategories';
import Services from './pages/Services';
import OurCompany from './pages/OurCompany';
import GetInTouch from './pages/GetInTouch';
import TrustedBrands from './pages/TrustedBrands';
import CustomerCare from './pages/CustomerCare';

import Preloader from './components/Preloader';

export default function App() {
  return (
    <Router>
      <Preloader />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/categories" element={<EquipmentCategories />} />
            <Route path="/services" element={<Services />} />
            <Route path="/company" element={<OurCompany />} />
            <Route path="/contact" element={<GetInTouch />} />
            <Route path="/brands" element={<TrustedBrands />} />
            <Route path="/customer-care" element={<CustomerCare />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}


import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    product: 'General Inquiry',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOfTW46pZlx9DUj-FAep80f_4sAov3IHsyu1Kntm0Ie1OrOGzj6KpfaW_aGg4RGbp0ew/exec";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataForSheet = new URLSearchParams();
    formDataForSheet.append('firstName', formData.firstName);
    formDataForSheet.append('lastName', formData.lastName);
    formDataForSheet.append('email', formData.email);
    formDataForSheet.append('product', formData.product);
    formDataForSheet.append('message', formData.message);
    formDataForSheet.append('timestamp', new Date().toISOString());

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataForSheet
      });
      
      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', product: 'General Inquiry', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue submitting your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#fcfcfd', position: 'relative', overflow: 'hidden' }}>
      {/* Aesthetic Background Elements */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'var(--color-primary-light)', borderRadius: '50%', opacity: 0.1, filter: 'blur(80px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: '500px', height: '500px', background: 'var(--color-secondary)', borderRadius: '50%', opacity: 0.03, filter: 'blur(100px)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge animate-fade-in-up" style={{ letterSpacing: '0.15em', fontSize: '0.7rem' }}>INQUIRY HUB</div>
          <h2 className="animate-fade-in-up delay-100" style={{ fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Global Engineering <span style={{ color: 'var(--color-primary)' }}>Solutions</span></h2>
          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1rem', color: 'var(--color-gray-500)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Ready to upgrade your medical facility? Contact our sales engineering team for pricing, demonstrations, and turn-key project support.
          </p>
        </div>

        <div className="animate-fade-in-up">
          <div className="depth-card" style={{ padding: '0', background: 'white', overflow: 'hidden', border: '1px solid rgba(255,255,255,1)', boxShadow: '0 50px 100px -20px rgba(0, 82, 155, 0.15)' }}>
            <div className="flex-mobile-col" style={{ gap: '0', alignItems: 'stretch' }}>
              {/* Contact Details Panel */}
              <div style={{ padding: '3rem 1.25rem', background: 'var(--color-primary)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '300px', height: '300px', background: 'var(--color-primary)', opacity: 0.1, borderRadius: '50%', filter: 'blur(50px)' }}></div>
                
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.02em', position: 'relative' }}>Contact Information</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display: 'flex', gap: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '1rem', height: 'fit-content', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                      <MapPin size={24} color="var(--color-secondary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', fontWeight: 800 }}>Corporate HQ</h4>
                      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontSize: '0.95rem' }}>No.226, BDA 6th Block,<br/>Sir M Vishwaraiah Layout,<br/>Bangalore-560091</p>
                    </div>
                  </a>

                  <a href="tel:+918970876560" className="hover-lift" style={{ display: 'flex', gap: '2rem', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '1.5rem', height: 'fit-content', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                      <Phone size={32} color="var(--color-secondary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', fontWeight: 800 }}>Support Line</h4>
                      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: '1.1rem' }}>+91 98451 35909</p>
                      <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(0, 140, 68, 0.2)', color: 'var(--color-secondary)', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.75rem', border: '1px solid rgba(0, 140, 68, 0.3)' }}>Available 24/7</div>
                    </div>
                  </a>

                  <a href="mailto:Ibannihealthcare@gmail.com" className="hover-lift" style={{ display: 'flex', gap: '2rem', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '1.5rem', height: 'fit-content', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                      <Mail size={32} color="var(--color-secondary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', fontWeight: 800 }}>Digital Response</h4>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Ibannihealthcare@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form Area */}
              <div style={{ padding: '3rem 1.25rem', background: '#fcfcfd' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', fontWeight: 900, color: '#111827' }}>Send Technical Brief</h3>
                
                {isSuccess ? (
                    <div className="animate-fade-in-up" style={{ padding: '4rem 3rem', textAlign: 'center', backgroundColor: 'var(--color-green-50)', borderRadius: '2.5rem', border: '1px solid var(--color-green-100)', boxShadow: '0 20px 40px rgba(0, 140, 68, 0.05)' }}>
                        <CheckCircle2 size={72} color="var(--color-green-500)" style={{ margin: '0 auto 2rem' }} />
                        <h4 style={{ fontSize: '1.8rem', color: 'var(--color-green-700)', marginBottom: '1rem', fontWeight: 900 }}>Inquiry Logged</h4>
                        <p style={{ color: 'var(--color-gray-600)', fontSize: '1.2rem', lineHeight: 1.6 }}>Our engineering consultants will review your brief and respond within 24 business hours.</p>
                    </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label htmlFor="firstName" style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required style={{ padding: '1rem', borderRadius: '1rem', border: '2px solid #edf2f7', outline: 'none', transition: 'all 0.3s', fontSize: '1rem', background: 'white' }} placeholder="Dr. Alex" />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label htmlFor="lastName" style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required style={{ padding: '1rem', borderRadius: '1rem', border: '2px solid #edf2f7', outline: 'none', fontSize: '1rem', background: 'white' }} placeholder="Rivers" />
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Working Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ padding: '1.2rem', borderRadius: '1.25rem', border: '2px solid #edf2f7', outline: 'none', fontSize: '1rem', background: 'white' }} placeholder="alex.rivers@healthcare.com" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <label htmlFor="product" style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Area of Interest</label>
                      <div style={{ position: 'relative' }}>
                        <select id="product" name="product" value={formData.product} onChange={handleInputChange} style={{ padding: '1.2rem', borderRadius: '1.25rem', border: '2px solid #edf2f7', outline: 'none', backgroundColor: 'white', fontSize: '1rem', appearance: 'none', width: '100%', cursor: 'pointer' }}>
                          <option value="Lead Aprons">Radiation Protection Systems</option>
                          <option value="Hospital Furnitures">Hospital Strategic Furniture</option>
                          <option value="OT Equipments">OT Engineering Solutions</option>
                          <option value="Infant Care">Neonatal Excellence</option>
                          <option value="General Inquiry">Strategic Partnership</option>
                        </select>
                        <div style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--color-gray-400)' }}>▾</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Facility Brief</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4} style={{ padding: '1.2rem', borderRadius: '1.25rem', border: '2px solid #edf2f7', outline: 'none', resize: 'vertical', fontSize: '1rem', background: 'white' }} placeholder="Please describe your hospital requirements..."></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn btn-3d" style={{ width: '100%', padding: '1.25rem', marginTop: '1rem', fontSize: '1.1rem', borderRadius: '1.25rem', letterSpacing: '0.05em' }}>
                      {isSubmitting ? 'PROCESSING...' : <><Send size={22} style={{ marginRight: '1rem' }} /> DISPATCH INQUIRY</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

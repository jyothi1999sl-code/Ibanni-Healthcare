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
    <section id="contact" className="section" style={{ backgroundColor: '#fcfcfd', padding: '12rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="badge animate-fade-in-up">CONNECT WITH US</div>
          <h2 className="animate-fade-in-up delay-100" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.03em' }}>Global Engineering <span style={{ color: 'var(--color-primary)' }}>Support</span></h2>
          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Ready to upgrade your medical facility? Contact our sales engineering team for pricing, demonstrations, and turn-key project support.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ perspective: '1500px' }}>
          <div className="depth-card" style={{ padding: '6rem 4rem', background: 'white', overflow: 'visible' }}>
            <div className="grid md:grid-cols-2" style={{ gap: '6rem', alignItems: 'start' }}>
              {/* Contact Details */}
              <div className="space-y-12">
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Inquiry Hub</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display: 'flex', gap: '2rem', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ background: 'var(--color-primary-light)', padding: '1.25rem', borderRadius: '1.5rem', height: 'fit-content', boxShadow: '0 10px 20px rgba(0, 86, 150, 0.1)' }}>
                      <MapPin size={32} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 800 }}>Corporate HQ</h4>
                      <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, fontSize: '1.05rem' }}>No.226, BDA 6th Block,<br/>Sir M Vishwaraiah Layout,<br/>Bangalore-560091</p>
                    </div>
                  </a>

                  <a href="tel:+918970876560" className="hover-lift" style={{ display: 'flex', gap: '2rem', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ background: 'var(--color-primary-light)', padding: '1.25rem', borderRadius: '1.5rem', height: 'fit-content', boxShadow: '0 10px 20px rgba(0, 86, 150, 0.1)' }}>
                      <Phone size={32} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 800 }}>Direct Line</h4>
                      <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, fontSize: '1.05rem' }}>Mobile: +91 98451 35909</p>
                      <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '0.25rem' }}>24/7 Technical Response</p>
                    </div>
                  </a>

                  <a href="mailto:Ibannihealthcare@gmail.com" className="hover-lift" style={{ display: 'flex', gap: '2rem', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ background: 'var(--color-primary-light)', padding: '1.25rem', borderRadius: '1.5rem', height: 'fit-content', boxShadow: '0 10px 20px rgba(0, 86, 150, 0.1)' }}>
                      <Mail size={32} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 800 }}>Digital Desk</h4>
                      <p style={{ color: 'var(--color-gray-600)', fontSize: '1.05rem' }}>Ibannihealthcare@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form - 3D Float */}
              <div style={{ transform: 'translateZ(50px)' }}>
                <div className="depth-card" style={{ padding: '4rem', background: '#fcfcfd', border: '1px solid var(--color-gray-100)', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', fontWeight: 800 }}>Send Technical Brief</h3>
                  
                  {isSuccess ? (
                      <div className="animate-fade-in-up" style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'var(--color-green-50)', borderRadius: '2rem', border: '1px solid var(--color-green-200)' }}>
                          <CheckCircle2 size={64} color="var(--color-green-500)" style={{ margin: '0 auto 1.5rem' }} />
                          <h4 style={{ fontSize: '1.5rem', color: 'var(--color-green-600)', marginBottom: '0.75rem', fontWeight: 800 }}>Inquiry Logged</h4>
                          <p style={{ color: 'var(--color-gray-700)', fontSize: '1.1rem' }}>Our engineering team will contact you within 24 hours.</p>
                      </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <label htmlFor="firstName" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>First Name</label>
                          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required style={{ padding: '1rem', borderRadius: '1rem', border: '2px solid #edf2f7', outline: 'none', transition: 'all 0.2s', fontSize: '1rem' }} placeholder="Dr. Jane" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <label htmlFor="lastName" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Last Name</label>
                          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required style={{ padding: '1rem', borderRadius: '1rem', border: '2px solid #edf2f7', outline: 'none', fontSize: '1rem' }} placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Professional Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ padding: '1rem', borderRadius: '1rem', border: '2px solid #edf2f7', outline: 'none', fontSize: '1rem' }} placeholder="jane@medicalcenter.com" />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label htmlFor="product" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Equipment Interest</label>
                        <select id="product" name="product" value={formData.product} onChange={handleInputChange} style={{ padding: '1rem', borderRadius: '1rem', border: '2px solid #edf2f7', outline: 'none', backgroundColor: 'white', fontSize: '1rem', appearance: 'none' }}>
                          <option value="Lead Aprons">Lead Aprons & Protection</option>
                          <option value="Hospital Furnitures">Hospital Furniture Systems</option>
                          <option value="OT Equipments">OT Shadowless Lighting</option>
                          <option value="Infant Care">Infant Care Equipment</option>
                          <option value="General Inquiry">General Consultation</option>
                        </select>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Detailed Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4} style={{ padding: '1rem', borderRadius: '1rem', border: '2px solid #edf2f7', outline: 'none', resize: 'vertical', fontSize: '1rem' }} placeholder="Describe your facility requirements..."></textarea>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="btn btn-3d" style={{ width: '100%', padding: '1.25rem', marginTop: '1rem', fontSize: '1.1rem' }}>
                        {isSubmitting ? 'SECURE SENDING...' : <><Send size={20} style={{ marginRight: '0.75rem' }} /> Dispatch Inquiry</>}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

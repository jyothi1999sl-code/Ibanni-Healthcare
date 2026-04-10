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

  // Google Apps Script Web App URL for saving to Google Sheets
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOfTW46pZlx9DUj-FAep80f_4sAov3IHsyu1Kntm0Ie1OrOGzj6KpfaW_aGg4RGbp0ew/exec";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare Google Sheets Data
    const formDataForSheet = new URLSearchParams();
    formDataForSheet.append('firstName', formData.firstName);
    formDataForSheet.append('lastName', formData.lastName);
    formDataForSheet.append('email', formData.email);
    formDataForSheet.append('product', formData.product);
    formDataForSheet.append('message', formData.message);
    formDataForSheet.append('timestamp', new Date().toISOString());

    try {
      // Send to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        // We use no-cors to avoid CORS issues from the frontend. We won't get a readable response back, but the data will be sent.
        mode: 'no-cors',
        body: formDataForSheet
      });
      
      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', product: 'General Inquiry', message: '' }); // Reset form
      
      setTimeout(() => setIsSuccess(false), 5000); // Hide success message after 5 seconds

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue submitting your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge">Get in Touch</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Partner with Ibanni</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-800)', maxWidth: '700px', margin: '0 auto' }}>
            Ready to upgrade your medical facility? Contact our sales engineering team for pricing, demonstrations, and support.
          </p>
        </div>

        <div className="glass animate-fade-in-up" style={{ padding: '3rem', borderRadius: '2rem', background: 'white', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(0, 86, 150, 0.1)' }}>
          <div className="grid md:grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
            {/* Contact Details */}
            <div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <a href="https://maps.google.com/?q=1200+Innovation+Drive,+San+Francisco,+CA+94102" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1.5rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '1rem', height: 'fit-content' }}>
                    <MapPin size={28} color="#005696" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Our Office</h4>
                    <p style={{ color: 'var(--color-gray-800)', lineHeight: 1.6 }}>No.226, BDA 6th Block,<br/>Sir M Vishwaraiah Layout,<br/>Bangalore-560091</p>
                  </div>
                </a>

                <a href="tel:+918970876560" style={{ display: 'flex', gap: '1.5rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '1rem', height: 'fit-content' }}>
                    <Phone size={28} color="#005696" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Phone Support</h4>
                    <p style={{ color: 'var(--color-gray-800)', lineHeight: 1.6 }}>Contact: 9845135909</p>
                  </div>
                </a>

                <a href="mailto:sales@ibannimedical.com" style={{ display: 'flex', gap: '1.5rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '1rem', height: 'fit-content' }}>
                    <Mail size={28} color="#005696" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Email</h4>
                    <p style={{ color: 'var(--color-gray-800)' }}>Ibannihealthcare@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="delay-200">
              <div style={{ padding: '2.5rem', borderRadius: '1.5rem', background: 'white', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-gray-100)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send an Inquiry</h3>
                
                {isSuccess ? (
                    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--color-green-50)', borderRadius: '1rem', border: '1px solid var(--color-green-200)' }}>
                        <CheckCircle2 size={48} color="var(--color-green-500)" style={{ margin: '0 auto 1rem' }} />
                        <h4 style={{ fontSize: '1.25rem', color: 'var(--color-green-600)', marginBottom: '0.5rem' }}>Inquiry Submitted</h4>
                        <p style={{ color: 'var(--color-gray-800)' }}>Thank you! Our team will get back to you shortly.</p>
                    </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="firstName" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-gray-200)', outline: 'none', transition: 'border-color 0.2s' }} placeholder="Jane" />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="lastName" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-gray-200)', outline: 'none' }} placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-gray-200)', outline: 'none' }} placeholder="jane@hospital.org" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="product" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>Interested Product</label>
                      <select id="product" name="product" value={formData.product} onChange={handleInputChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-gray-200)', outline: 'none', backgroundColor: 'white' }}>
                        <option value="ECG Machines">ECG Machines</option>
                        <option value="Digital X-Ray Systems">Digital X-Ray Systems</option>
                        <option value="OT Lights">OT Lights</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>Message</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-gray-200)', outline: 'none', resize: 'vertical' }} placeholder="How can we help you?"></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}>
                      {isSubmitting ? 'Processing...' : <><Send size={18} /> Submit Inquiry</>}
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

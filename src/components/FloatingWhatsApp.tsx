import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = "919845135909";
  const MESSAGE = "Hello Ibanni Team, I am interested in your medical equipment.";
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="btn-primary"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        zIndex: 999,
        background: '#005696',
        boxShadow: '0 10px 25px rgba(0, 86, 150, 0.4)',
        border: 'none',
        cursor: 'pointer',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      aria-label="Chat on WhatsApp"
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
    >
      <MessageCircle fill="white" color="white" size={32} />
    </button>
  );
}

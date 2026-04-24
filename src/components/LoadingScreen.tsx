

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
      <img 
        src="/favicon.svg" 
        alt="Ibanni Healthcare" 
        className="loading-logo"
        style={{ height: '120px', width: '120px' }} 
      />
      <div className="loader-bar"></div>
      <p style={{ marginTop: '1rem', color: 'var(--color-gray-500)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Precision Medical Engineering
      </p>
    </div>
  );
}

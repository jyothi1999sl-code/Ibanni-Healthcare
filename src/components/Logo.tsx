import React from 'react';
import ibanniLogo from '../assets/Ibanni.png';

interface LogoProps {
  height?: string;
  className?: string;
}

export default function Logo({ height = "40px", className = "" }: LogoProps) {
  return (
    <div 
      className={`logo-container ${className}`} 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        height,
        cursor: 'pointer'
      }}
    >
      <img 
        src={ibanniLogo} 
        alt="Ibanni Healthcare" 
        style={{ 
          height: '100%', 
          width: 'auto', 
          display: 'block',
          objectFit: 'contain'
        }} 
      />
    </div>
  );
}
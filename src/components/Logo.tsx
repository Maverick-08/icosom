
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 80 80"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        {/* Dark background circle */}
        <circle cx="40" cy="40" r="38" fill="#1A1F2C" />
        
        {/* Grid lines to represent data/coordinate system */}
        <path d="M15,40 L65,40" stroke="#4DB6AC" strokeWidth="0.5" strokeDasharray="2" />
        <path d="M40,15 L40,65" stroke="#4DB6AC" strokeWidth="0.5" strokeDasharray="2" />
        
        {/* Statistical curve (normal distribution) */}
        <path
          d="M15,60 Q20,60 25,58 T35,48 T45,42 T55,48 T65,60"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="2"
        />
        
        {/* Machine learning neural network nodes and connections */}
        <circle cx="25" cy="30" r="3" fill="#4DB6AC" />
        <circle cx="40" cy="25" r="3" fill="#0ea5e9" />
        <circle cx="55" cy="30" r="3" fill="#4DB6AC" />
        <circle cx="25" cy="50" r="3" fill="#0ea5e9" />
        <circle cx="55" cy="50" r="3" fill="#0ea5e9" />
        <circle cx="40" cy="55" r="3" fill="#4DB6AC" />
        
        {/* Neural network connections */}
        <path d="M25,30 L40,25 L55,30" stroke="#4DB6AC" strokeWidth="1" />
        <path d="M25,30 L25,50 L40,55 L55,50 L55,30" stroke="#0ea5e9" strokeWidth="1" />
        <path d="M40,25 L25,50" stroke="#4DB6AC" strokeWidth="1" />
        <path d="M40,25 L55,50" stroke="#4DB6AC" strokeWidth="1" />
        <path d="M40,25 L40,55" stroke="#0ea5e9" strokeWidth="1" />
        
        {/* Optimization target/bullseye */}
        <circle cx="40" cy="40" r="8" fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="4" fill="none" stroke="#4DB6AC" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="1.5" fill="#0ea5e9" />
      </svg>
      <div>
        <div className="text-2xl font-bold tracking-tight text-icosom-dark">ICOSOM</div>
        <div className="text-xs text-gray-500 leading-tight">
          International Conference on<br />
          Statistics, Optimization & Machine Learning
        </div>
      </div>
    </div>
  );
};

export default Logo;

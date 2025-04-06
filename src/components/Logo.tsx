
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 80 80"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <circle cx="40" cy="40" r="38" fill="#1A1F2C" />
        <circle cx="40" cy="40" r="35" fill="none" stroke="#4DB6AC" strokeWidth="1" />
        <path
          d="M20,40 Q40,20 60,40 T20,40"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="2"
        />
        <path
          d="M20,50 Q40,30 60,50"
          fill="none"
          stroke="#4DB6AC"
          strokeWidth="2"
        />
        <circle cx="30" cy="35" r="4" fill="#0ea5e9" />
        <circle cx="50" cy="35" r="4" fill="#4DB6AC" />
        <circle cx="40" cy="48" r="4" fill="#0ea5e9" />
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

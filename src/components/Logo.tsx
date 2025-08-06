
import React from 'react';
import Icon from '../assets/Logo.jpg';
import manitLogo from "../assets/manitLogo.jpg"


interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={manitLogo} alt="Logo" className='w-16 h-16 md:w-24 md:h-24 rounded-full border border-black'/>
      <div>
        <div className="text-2xl text-center font-bold tracking-tight text-icosom-500">ICOSOM</div>
        <div className="text-xs text-center text-gray-500 leading-tight">
          International Conference on<br />
          Statistics, Optimization & Machine Learning
        </div>
      </div>
      <img src={Icon} alt="Logo" className='w-16 h-16 md:w-24 md:h-24 rounded-full border border-black'/>
    </div>
  );
};

export default Logo;

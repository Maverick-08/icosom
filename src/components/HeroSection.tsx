
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative pt-32 pb-40 md:pt-40 md:pb-64 bg-gradient-to-br from-icosom-dark via-icosom-800 to-icosom-900 diagonal-slice overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center md:max-w-3xl md:mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tighter">
            ICOSOM 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            International Conference on<br className="md:hidden" /> Statistics, Optimization &<br className="md:hidden" /> Machine Learning
          </p>
          <p className="text-xl text-gray-300 mb-10">
            June 15-18, 2025 • Bhopal, India
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#register" className="bg-gradient-to-r from-icosom-600 to-icosom-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-icosom-500/20 hover:-translate-y-1">
              Register Now
            </a>
            <a href="#about" className="bg-transparent text-white border border-white/30 hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes with modern blur effects */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-icosom-500/30 blur-2xl"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-icosom-teal/20 blur-3xl"></div>
      <div className="absolute top-40 right-[20%] w-24 h-24 rounded-full bg-icosom-600/30 blur-xl"></div>
      <div className="absolute bottom-20 left-[25%] w-40 h-40 rounded-full bg-icosom-600/10 blur-2xl"></div>
    </section>
  );
};

export default HeroSection;

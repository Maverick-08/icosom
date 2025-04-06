
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative pt-32 pb-40 md:pt-40 md:pb-64 bg-icosom-dark diagonal-slice overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center md:max-w-3xl md:mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ICOSOM 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            International Conference on<br className="md:hidden" /> Statistics, Optimization &<br className="md:hidden" /> Machine Learning
          </p>
          <p className="text-xl text-gray-300 mb-10">
            June 15-18, 2025 • Geneva, Switzerland
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#register" className="gradient-button text-lg py-3 px-8">
              Register Now
            </a>
            <a href="#about" className="bg-transparent text-white border border-white hover:bg-white hover:text-icosom-dark font-semibold py-3 px-8 rounded-lg transition-colors text-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-icosom-500/20 blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-icosom-teal/20 blur-2xl"></div>
      <div className="absolute top-40 right-[20%] w-16 h-16 rounded-full bg-icosom-600/30 blur-lg"></div>
    </section>
  );
};

export default HeroSection;

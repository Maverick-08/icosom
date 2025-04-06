
import React from 'react';

const TracksSection = () => {
  const tracks = [
    "Statistical Learning Theory",
    "Bayesian Inference",
    "Time Series Analysis",
    "Computational Optimization",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Reinforcement Learning",
    "Forecasting Methods",
    "Data Mining",
    "Evolutionary Algorithms",
    "Explainable AI"
  ];

  return (
    <section id="tracks" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conference Tracks</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our conference covers a wide range of topics across statistics, optimization, and machine learning disciplines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="conference-track-item bg-white p-6 rounded-lg shadow-sm border-l-4 border-icosom-500 hover:shadow-md"
            >
              <h3 className="font-medium text-lg text-gray-800">{track}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="text-icosom-600 hover:text-icosom-700 font-medium flex items-center justify-center">
            View Full Program
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;

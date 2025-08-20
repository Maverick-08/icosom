
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TracksSection = () => {
  const tracks = [
    "Probability Theory and Applications",
    "Statistical Inference ",
    "Statistical Quality Control",
    "Reliability and Survival analysis",
    "Applied Statistics",
    "Theoretical Foundations and Algorithms of Optimization",
    "Computational Methods and Software for Optimization",
    "Optimization in Engineering and Sciences",
    "Data-driven and Emerging Optimization Paradigms",
    "Foundation of Artificial Intelligence and Data Science",
    "Applications of ML in Industry and Society",
    "Deep Learning and Computer Vision",
    "LLM and Generative AI",
    "Explainable and Responsible AI"
  ];

  return (
    <section id="tracks" className="py-24 bg-gray-50/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Conference Tracks</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our conference covers a wide range of topics across statistics, optimization, and machine learning disciplines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-default">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-icosom-500 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-medium text-lg text-gray-800">{track}</h3>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <Link to="/tracks" className="text-icosom-600 hover:text-icosom-700 font-medium inline-flex items-center group">
            View Full Program
            <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default TracksSection;

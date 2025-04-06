
import React from 'react';
import { LineChart, BarChartIcon, Database } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <LineChart className="h-12 w-12 text-icosom-500" />,
      title: "Statistics",
      description: "Latest innovations in statistical modeling, inference, and data analysis methodologies."
    },
    {
      icon: <BarChartIcon className="h-12 w-12 text-icosom-600" />,
      title: "Optimization",
      description: "Cutting-edge optimization algorithms and techniques for solving complex real-world problems."
    },
    {
      icon: <Database className="h-12 w-12 text-icosom-teal" />,
      title: "Machine Learning",
      description: "Advanced machine learning approaches and applications across diverse fields."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About The Conference</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ICOSOM 2025 brings together researchers, practitioners, and industry leaders 
            to explore the intersection of statistics, optimization, and machine learning, 
            fostering collaboration and innovation across disciplines.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

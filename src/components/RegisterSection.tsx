
import React from 'react';
import { ArrowRight } from 'lucide-react';

const RegisterSection = () => {
  const registrationSteps = [
    {
      title: "ONLINE REGISTRATION",
      description: "Visit the AWARe 2025 Conference Portal and select the registration link.",
      icon: null,
      color: "bg-blue-500",
    },
    {
      title: "FORM SUBMISSION",
      description: "Fill in the required details (Name, Institution, Contact Information, Category, etc.).",
      icon: <ArrowRight className="w-8 h-8 text-gray-800" />,
      color: "bg-blue-500",
    },
    {
      title: "PAYMENT OPTIONS",
      description: "Online Payment Gateway",
      icon: <ArrowRight className="w-8 h-8 text-gray-800" />,
      color: "bg-blue-500",
    },
    {
      title: "UPLOAD DOCUMENTS",
      description: "Upload proof of student status (if applicable), payment receipt, and any other required documents.",
      icon: <ArrowRight className="w-8 h-8 text-gray-800" />,
      color: "bg-blue-500",
      fullWidth: true,
    },
    {
      title: "CONFIRMATION",
      description: "After successful registration, an email confirmation will be sent with a registration ID. Receipt will be provided at the onsite registration desk.",
      icon: null,
      color: "bg-blue-500",
      fullWidth: true,
    }
  ];

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-800">REGISTRATION</span>
            <span className="text-pink-600 ml-4">PROCESS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {registrationSteps.slice(0, 3).map((step, index) => (
            <div key={index} className="relative flex">
              <div className={`${step.color} text-white p-6 rounded-lg shadow-md w-full`}>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
              {step.icon && (
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  {step.icon}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {registrationSteps.slice(3).map((step, index) => (
            <div key={index} className="relative flex">
              <div className={`${step.color} text-white p-6 rounded-lg shadow-md w-full`}>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
              {step.icon && (
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  {step.icon}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://icosom2025.com/register" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-icosom-600 text-white font-semibold rounded-lg hover:bg-icosom-700 transition-all duration-300"
          >
            Start Registration Process
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;

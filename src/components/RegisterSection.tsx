
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const RegisterSection = () => {
  const registrationOptions = [
    {
      type: "Early Bird",
      price: "$450",
      benefits: [
        "Access to all conference sessions",
        "Conference materials",
        "Welcome reception",
        "Lunch and coffee breaks",
        "Certificate of attendance"
      ],
      recommended: false
    },
    {
      type: "Standard",
      price: "$650",
      benefits: [
        "Access to all conference sessions",
        "Conference materials",
        "Welcome reception",
        "Lunch and coffee breaks",
        "Certificate of attendance",
        "Conference dinner"
      ],
      recommended: true
    },
    {
      type: "Student",
      price: "$250",
      benefits: [
        "Access to all conference sessions",
        "Conference materials",
        "Lunch and coffee breaks",
        "Certificate of attendance"
      ],
      recommended: false
    }
  ];

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Register Now</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Secure your spot at ICOSOM 2025 and be part of this exciting international conference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {registrationOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden ${
                option.recommended ? 'border-2 border-icosom-500 relative' : ''
              }`}
            >
              {option.recommended && (
                <div className="bg-icosom-500 text-white text-center py-1 text-sm font-medium">
                  Recommended
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.type}</h3>
                <p className="text-3xl font-bold text-icosom-600 mb-4">{option.price}</p>
                <ul className="space-y-2 mb-6">
                  {option.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-icosom-600 hover:bg-icosom-700">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;

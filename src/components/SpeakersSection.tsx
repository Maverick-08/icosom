
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Emily Chen",
      role: "AI Research Lead, Stanford University",
      image: "",
      initials: "EC"
    },
    {
      name: "Prof. Michael Johnson",
      role: "Director, Institute for Statistical Science",
      image: "",
      initials: "MJ"
    },
    {
      name: "Dr. Sarah Rodriguez",
      role: "Principal Researcher, Tech Innovations",
      image: "",
      initials: "SR"
    },
    {
      name: "Prof. David Kim",
      role: "Chair of Optimization, MIT",
      image: "",
      initials: "DK"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Keynote Speakers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from leading experts in statistics, optimization, and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4 border-2 border-icosom-100">
                <AvatarImage src={speaker.image} />
                <AvatarFallback className="text-xl bg-icosom-100 text-icosom-800">
                  {speaker.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{speaker.name}</h3>
              <p className="text-gray-600 text-sm">{speaker.role}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="gradient-button">View All Speakers</a>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;

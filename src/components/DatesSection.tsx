
import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DatesSection = () => {
  const importantDates = [
    {
      date: "December 15, 2024",
      event: "Abstract Submission Deadline"
    },
    {
      date: "February 28, 2025",
      event: "Full Paper Submission"
    },
    {
      date: "April 10, 2025",
      event: "Notification of Acceptance"
    },
    {
      date: "May 5, 2025",
      event: "Early Registration Deadline"
    },
    {
      date: "June 15-18, 2025",
      event: "Conference Dates"
    }
  ];

  return (
    <section id="dates" className="py-24 bg-gradient-to-br from-icosom-dark to-icosom-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Dates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-300 to-icosom-teal mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Mark your calendar with these key deadlines for ICOSOM 2025.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {importantDates.map((item, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-none overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-start">
                <Calendar className="h-6 w-6 text-icosom-teal mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">{item.event}</h3>
                  <p className="text-icosom-100">{item.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatesSection;

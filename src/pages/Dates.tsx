
import React from 'react';
import Navbar from '@/components/Navbar';
import DatesSection from '@/components/DatesSection';
import FooterSection from '@/components/FooterSection';

const Dates = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <DatesSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Dates;

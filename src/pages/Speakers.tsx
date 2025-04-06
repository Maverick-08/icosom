
import React from 'react';
import Navbar from '@/components/Navbar';
import SpeakersSection from '@/components/SpeakersSection';
import FooterSection from '@/components/FooterSection';

const Speakers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <SpeakersSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Speakers;

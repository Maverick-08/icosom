
import React from 'react';
import Navbar from '@/components/Navbar';
import TracksSection from '@/components/TracksSection';
import FooterSection from '@/components/FooterSection';

const Tracks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <TracksSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Tracks;

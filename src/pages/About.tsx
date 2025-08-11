
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';
import TracksSection from '@/components/TracksSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
        <TracksSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default About;

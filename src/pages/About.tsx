
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default About;


import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TracksSection from '@/components/TracksSection';
import SpeakersSection from '@/components/SpeakersSection';
import DatesSection from '@/components/DatesSection';
import RegisterSection from '@/components/RegisterSection';
import FooterSection from '@/components/FooterSection';
import OrganizingCommittee from '@/components/OrganizingCommittee';
import KeyNoteSpeakers from '@/components/KeyNoteSpeakers';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <KeyNoteSpeakers />
      <SpeakersSection />
      <OrganizingCommittee />
      <DatesSection />
      <RegisterSection />
      <FooterSection />
    </div>
  );
};

export default Index;

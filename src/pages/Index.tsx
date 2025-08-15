
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
import Places from '@/components/Places';

const Index = () => {
  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <KeyNoteSpeakers />
      <SpeakersSection />
      <OrganizingCommittee />
      <DatesSection />
      <RegisterSection />
      <Places />
      <FooterSection />
    </div>
  );
};

export default Index;

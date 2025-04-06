
import React from 'react';
import Navbar from '@/components/Navbar';
import RegisterSection from '@/components/RegisterSection';
import FooterSection from '@/components/FooterSection';

const Register = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <RegisterSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Register;

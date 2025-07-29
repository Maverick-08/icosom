import Navbar from '@/components/Navbar';
import SpeakersSection from '@/components/SpeakersSection';
import FooterSection from '@/components/FooterSection';
import KeyNoteSpeakers from '@/components/KeyNoteSpeakers';

const Speakers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <KeyNoteSpeakers />
        <SpeakersSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Speakers;

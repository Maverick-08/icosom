import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import guestSpeaker1 from "@/assets/speaker1.jpeg";
import guestSpeaker2 from "@/assets/speaker2.jpeg";
import guestSpeaker3 from "@/assets/speaker3.jpg";
import guestSpeaker4 from "@/assets/speaker4.png";
import guestSpeaker5 from "@/assets/speaker5.png";
import guestSpeaker6 from "@/assets/speaker6.png";
import guestSpeaker7 from "@/assets/speaker7.jpeg";
import guestSpeaker8 from "@/assets/speaker8.jpeg";
import { useLocation } from "react-router-dom";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Prof. Debasis Kundu",
      role: "IIT Kanpur",
      image: guestSpeaker1,
      initials: "DK",
    },
    {
      name: "Prof. Somesh Kumar",
      role: "IIT Kharagpur",
      image: guestSpeaker2,
      initials: "SK",
    },
    {
      name: "Prof. Millie Pant",
      role: "IIT Roorkee",
      image: guestSpeaker3,
      initials: "MP",
    },
    {
      name: "Prof. Debjani Chakraborty",
      role: "IIT Kharagpur",
      image: guestSpeaker4,
      initials: "DC",
    },
    {
      name: "Prof. Pankaj Dutta",
      role: "IIT Bombay",
      image: guestSpeaker5,
      initials: "PD",
    },
    {
      name: "Prof. Swagatam Das,",
      role: "ISI Kolkata",
      image: guestSpeaker6,
      initials: "SD",
    },
    {
      name: "Prof. M. Tanveer",
      role: "IIT Indore",
      image: guestSpeaker7,
      initials: "MT",
    },
    {
      name: "Dr. James Arambam",
      role: "IIT Delhi",
      image: guestSpeaker8,
      initials: "JA",
    },
  ];
  const pathname = useLocation().pathname;

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Invited Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from leading experts in statistics, optimization, and machine
            learning.
          </p>
        </div>

        <div className="lg:max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4 border-2 border-icosom-100">
                <AvatarImage src={speaker.image} />
                <AvatarFallback className="text-xl bg-icosom-100 text-icosom-800">
                  {speaker.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {speaker.name}
              </h3>
              <p className="text-gray-600 text-sm">{speaker.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {!pathname.includes("speakers") && (
            <a href="/speakers" className="gradient-button">
              View All Speakers
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;

import { useLocation } from "react-router-dom";
import keynoteSpeaker1 from "@/assets/keynoteSpeaker1.png";
import keynoteSpeaker2 from "@/assets/keynoteSpeaker2.png";
import keynoteSpeaker3 from "@/assets/keynoteSpeaker3.png";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const KeyNoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Ashis SenGupta",
      role: "ISI Kolkata",
      image: keynoteSpeaker1,
      initials: "AS",
    },
    {
      name: "Prof. Hon Keung Tony Ng",
      role: "Bentley University, USA",
      image: keynoteSpeaker3,
      initials: "HT",
    },
    {
      name: "Prof. Nikhil R Pal",
      role: "ISI Kolkata",
      image: keynoteSpeaker2,
      initials: "NP",
    },
  ]
  const pathname = useLocation().pathname;
  return (
     <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Plenary Speakers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from leading experts in statistics, optimization, and machine learning.
          </p>
        </div>
       
        <div className="lg:max-w-4xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-3 gap-16">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center p-4 w-full bg-slate-50 rounded-lg shadow hover:shadow-md cursor-pointer">
              {/* <Avatar className="h-32 w-32 mx-auto mb-4 border-2 border-icosom-100">
                <AvatarImage src={speaker.image} className="border"/>
                <AvatarFallback className="text-xl bg-icosom-100 text-icosom-800">
                  {speaker.initials}
                </AvatarFallback>
              </Avatar> */}
              <img src={speaker.image} alt={speaker.initials} className="mb-4 mx-auto"/>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{speaker.name}</h3>
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
  )
}

export default KeyNoteSpeakers

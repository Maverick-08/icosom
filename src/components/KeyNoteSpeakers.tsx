import { useLocation } from "react-router-dom";
import keynoteSpeaker1 from "@/assets/keynoteSpeaker1.jpeg"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const KeyNoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Ashis SenGupta",
      role: "President - Indian Statistical Institute",
      image: keynoteSpeaker1,
      initials: "AS",
    },]
  const pathname = useLocation().pathname;
  return (
     <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Note Speakers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from leading experts in statistics, optimization, and machine learning.
          </p>
        </div>
       
        <div className="lg:max-w-2xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-1 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4 border-2 border-icosom-100">
                <AvatarImage src={speaker.image} className="border"/>
                <AvatarFallback className="text-xl bg-icosom-100 text-icosom-800">
                  {speaker.initials}
                </AvatarFallback>
              </Avatar>
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

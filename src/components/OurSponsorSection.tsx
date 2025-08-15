import React from "react";

const OurSponsorSection = () => {
  // Sample sponsor data
  const sponsors = [
    { name: "TechCorp", logo: "https://placehold.co/600x400?text=TechCorp" },
    {
      name: "InnovateInc",
      logo: "https://placehold.co/600x400?text=InnovateInc",
    },
    {
      name: "DataSystems",
      logo: "https://placehold.co/600x400?text=DataSystems",
    },
    { name: "CloudTech", logo: "https://placehold.co/600x400?text=CloudTech" },
    {
      name: "AI Solutions",
      logo: "https://placehold.co/600x400?text=AI+Solutions",
    },
    { name: "DevTools", logo: "https://placehold.co/600x400?text=DevTools" },
    { name: "CyberSafe", logo: "https://placehold.co/600x400?text=CyberSafe" },
    { name: "WebFlow", logo: "https://placehold.co/600x400?text=WebFlow" },
    { name: "DataMine", logo: "https://placehold.co/600x400?text=DataMine" },
    { name: "TechHub", logo: "https://placehold.co/600x400?text=TechHub" },
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors]; // For infinite scrolling

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-medium text-center mb-4">Our Sponsors</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>

        {/* Infinite Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex pt-20 pb-9 animate-marquee space-x-8">
            {duplicatedSponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0 p-5">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-[18vh] w-auto object-contain mx-auto rounded-lg"
                  loading="smooth"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSponsorSection;

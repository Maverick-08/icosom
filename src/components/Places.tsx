import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Places() {
  const placesNearBhopal = [
    { name: "Van Vihar National Park", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Vihar%20National%20Park%2C%20Bhopal.jpg?width=800", link: "https://en.wikipedia.org/wiki/Van_Vihar_National_Park" },
    { name: "Upper Lake (Bhojtal)", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Upper%20Lake%2C%20Bhopal%2C%20M.P.jpg?width=800", link: "https://en.wikipedia.org/wiki/Upper_Lake,_Bhopal" },
    { name: "Taj-ul-Masajid", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taj-ul-masajid.jpg?width=800", link: "https://en.wikipedia.org/wiki/Taj-ul-Masajid" },
    { name: "Madhya Pradesh Tribal Museum", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tribal%20Museum%20Bhopal%2001.jpg?width=800", link: "https://en.wikipedia.org/wiki/Madhya_Pradesh_Tribal_Museum" },
    { name: "State Museum, Bhopal", image: "https://commons.wikimedia.org/wiki/Special:FilePath/State%20museum%20bhopal.jpg?width=800", link: "https://en.wikipedia.org/wiki/State_Museum_Bhopal" },
    { name: "Rani Kamlapati Palace", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rani%20Kamla%20Pati%20Palace.jpg?width=800", link: "https://en.wikipedia.org/wiki/Kamlapati_Palace" },
    { name: "Bhimbetka Rock Shelters", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rock%20Shelter%20at%20Bhimbetka%20UNESCO%20World%20Heritage%20Site.jpg?width=800", link: "https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters" },
    { name: "Bhojeshwar Temple", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20Bhojpur.jpg?width=800", link: "https://en.wikipedia.org/wiki/Bhojeshwar_Temple" },
    { name: "Raisen Fort", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Raisen%20Fort%2C%20Madhya%20Pradesh.jpg?width=800", link: "https://en.wikipedia.org/wiki/Raisen_Fort" }
  ];

  const [cardsPerView, setCardsPerView] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  // Adjust cards per view on resize
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % placesNearBhopal.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + placesNearBhopal.length) % placesNearBhopal.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderCard = (place: typeof placesNearBhopal[0]) => (
    <div
      key={place.name}
      className="flex flex-col items-center min-w-[220px] sm:min-w-[250px] lg:min-w-[280px] p-4 bg-white/30 rounded-lg shadow-md m-2"
    >
      <img src={place.image} alt={place.name} className="w-full h-40 object-cover rounded-md" />
      <a
        href={place.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-gray-800 hover:text-black underline font-semibold"
      >
        {place.name}
      </a>
    </div>
  );

  // Generate visible cards dynamically
  const visibleCards = Array.from({ length: cardsPerView }).map((_, i) =>
    renderCard(placesNearBhopal[(startIndex + i) % placesNearBhopal.length])
  );

  return (
    <div className="flex flex-col items-center py-10 bg-gradient-to-br from-icosom-dark to-icosom-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Places</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-icosom-300 to-icosom-teal mx-auto mb-6 rounded-full"></div>
      <div className="flex items-center justify-center sm:gap-4 sm:p-4">
        <button onClick={handlePrev} className="p-2 bg-black/50 rounded-full hover:bg-gray-400"><ArrowLeft /></button>
        <div className="flex gap-4 overflow-hidden">{visibleCards}</div>
        <button onClick={handleNext} className="p-2 bg-black/50 rounded-full hover:bg-gray-400"><ArrowRight /></button>
      </div>
    </div>
  );
}

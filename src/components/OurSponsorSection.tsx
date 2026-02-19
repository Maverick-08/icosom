import Sponsor1 from "../assets/sponsorLogo.png";
import Sponsor2 from "../assets/sponsorLogo2.png.jpeg";

const OurSponsorSection = () => {
  

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-36 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-medium text-center mb-4">Our Sponsors</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>

       <div className="pt-12 lg:pt-24 flex flex-col sm:flex-row justify-center items-center gap-8">
        <img src={Sponsor1} alt="ANSR Logo"  className="w-70 lg:w-80 h-50 lg:h-40"/>
        <img src={Sponsor2} alt="ANSR Logo"  className="w-70 lg:w-80 h-50 lg:h-60"/>
       </div>

      </div>
    </>
  );
};

export default OurSponsorSection;

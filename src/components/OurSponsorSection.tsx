import Sponsor1 from "../assets/sponsorLogo.png";

const OurSponsorSection = () => {
  

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-36 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-medium text-center mb-4">Our Sponsors</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>

       <div className="pt-12 lg:pt-24 flex justify-center">
        <img src={Sponsor1} alt="ANSR Logo"  className="w-70 lg:w-80 h-50 lg:h-60"/>
       </div>

      </div>
    </>
  );
};

export default OurSponsorSection;

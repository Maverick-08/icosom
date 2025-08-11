import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

const Awards = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="text-center my-36">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Awards
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6 rounded-full"></div>
        {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our conference covers a wide range of topics across statistics,
          optimization, and machine learning disciplines.
        </p> */}
      </div>
      <FooterSection />
    </div>
  );
};

export default Awards;

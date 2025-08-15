import { Trophy } from "@/assets/trophy";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

const Awards = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="text-center mt-36">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Awards
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-20 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-36">
        <div className="md:col-start-2 md:col-span-2 border shadow hover:shadow-md rounded-3xl p-6 flex justify-center items-center flex-col text-center mb-4 md:mb-0">
          <Trophy/>
          <div className="text-xl font-bold mt-4">Best Paper Presentation</div>
        </div>
        <div className="md:col-span-2 md:col-start-5 border shadow hover:shadow-md rounded-3xl p-6 flex justify-center items-center flex-col text-center">
          <Trophy/>
          <div className="text-xl font-bold mt-4">Best Poster Presentation</div>
        </div>
      </div>
      <FooterSection />
    </div>
  );

  
};

export default Awards;

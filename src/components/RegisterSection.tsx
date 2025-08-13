import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RegisterSection = () => {
  const navigate = useNavigate();
  const registrationFeesData = [
    {
      participants: "Students",
      price1: "5,000",
      price2: "6,000",
      price3: "150",
      price4: "175",
    },
    {
      participants: "Academicians",
      price1: "7,000",
      price2: "8,000",
      price3: "250",
      price4: "300",
    },
    {
      participants: "Industry Participants",
      price1: "8,000",
      price2: "10,000",
      price3: "300",
      price4: "350",
    },
    {
      participants: "Attendees",
      price1: "2,000",
      price2: "3,000",
      price3: "100",
      price4: "120",
    },
  ];

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center font-bold mb-16">
          <h2 className="text-4xl mb-4">
            <span className="text-black">Registration</span>
            <span className="text-black ml-4">Fees</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
        </div>

        <div>
          <div className="max-w-6xl mx-auto ">
            <div className="grid grid-cols-5">
              <p className="pt-4 pb-4 text-center text-xs lg:text-xl font-semibold border border-slate-300 ">
                Participants
              </p>
              <p className="pt-4 pb-4 text-center text-xs lg:text-xl font-semibold border-t border-b border-slate-300 ">
                Indians Early Bird <br /> (INR)
              </p>
              <p className="pt-4 pb-4 text-center text-xs lg:text-xl font-semibold border border-slate-300 ">
                Indians Late <br />
                (INR)
              </p>
              <p className="pt-4 pb-4 text-center text-xs lg:text-xl font-semibold border border-slate-300 ">
                Overseas Early Bird <br />
                (USD)
              </p>
              <p className="pt-4 pb-4 text-center text-xs lg:text-xl font-semibold border border-slate-300 ">
                Overseas Late <br />
                (USD)
              </p>

              {registrationFeesData.map((data) => {
                return (
                  <>
                    <p className="pt-4 pb-4 border-b border-l border-r border-slate-300 text-center text-xs md:text-sm lg:text-lg">
                      {data.participants}
                    </p>
                    <p className="pt-4 pb-4 border-b border-slate-300 text-center text-xs md:text-sm lg:text-lg">
                      {data.price1}
                    </p>
                    <p className="pt-4 pb-4 border-b border-slate-300 text-center text-xs md:text-sm lg:text-lg">
                      {data.price2}
                    </p>
                    <p className="pt-4 pb-4 border-b border-slate-300 text-center text-xs md:text-sm lg:text-lg">
                      {data.price3}
                    </p>
                    <p className="pt-4 pb-4 border-b border-r border-slate-300 text-center text-xs md:text-sm lg:text-lg">
                      {data.price4}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://forms.gle/YntYeibCeY6Vw9nG7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-icosom-600 text-white font-semibold rounded-lg hover:bg-icosom-700 transition-all duration-300"
          >
            Start Registration Process
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          {/* <button
            onClick={() => {
              navigate("/update");
            }}
            className="inline-flex items-center px-6 py-3 bg-icosom-600 text-white font-semibold rounded-lg hover:bg-icosom-700 transition-all duration-300"
          >
            Start Registration Process <ArrowRight className="w-5 h-5 ml-2" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;

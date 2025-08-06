import { useEffect, useState } from "react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-40 md:pt-40 md:pb-64 bg-gradient-to-br from-icosom-dark via-icosom-800 to-icosom-900 diagonal-slice overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* <div className="text-center md:max-w-3xl md:mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tighter">
            ICOSOM 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            International Conference on<br className="md:hidden" /> Statistics, Optimization &<br className="md:hidden" /> Machine Learning
          </p>
          <p className="text-xl text-gray-300 mb-10">
            January 16-17, 2026 • Bhopal, India
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#register" className="bg-gradient-to-r from-icosom-600 to-icosom-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-icosom-500/20 hover:-translate-y-1">
              Register Now
            </a>
            <a href="#about" className="bg-transparent text-white border border-white/30 hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              Learn More
            </a>
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="pt-16 lg:pt-0 flex flex-col gap-12 text-center order-2 lg:order-1">
            <div>
              <p className="text-3xl text-center lg:text-5xl font-bold text-white">
                MANIT BHOPAL INDIA
              </p>
              <p className="mt-4 text-3xl text-center lg:text-2xl font-bold text-white">
                WELCOMES YOU TO
              </p>
            </div>

            <Timer />
          </div>

          <div className="text-white order-1 lg:order-2 ">

            <p className="text-center lg:text-left text-xl lg:text-2xl font-bold ">
              1 <sup>st</sup> &nbsp; INTERNATIONAL CONFERENCE ON
            </p>

            <p className="text-center lg:text-left text-4xl lg:text-5xl mt-4 leading-relaxed font-bold">
              STATISTICS, OPTIMIZATION <br />
              AND MACHINE LEARNING{" "}
            </p>

            <p className="text-center lg:text-left text-2xl lg:text-3xl mt-4 lg:mt-6 font-bold text-icosom-300">
              27<sup>th</sup> - 28<sup>th</sup> FEBRUARY, 2026
            </p>

            <p className="text-center lg:text-left mt-8 text-xl font-semibold">Organized By :</p>

            <p className="text-center lg:text-left mt-2 text-xl leading-relaxed lg:leading-none">
              Department of Mathematics, Bioinformatics and Computer
              Applications
            </p>

            <p className="text-center lg:text-left mt-6 lg:mt-4 text-xl leading-relaxed lg:leading-none">
              Maulana Azad National Institute of Technology(MANIT), Bhopal
            </p>

          </div>
        </div>
      </div>

      {/* Abstract shapes with modern blur effects */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-icosom-500/30 blur-2xl"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-icosom-teal/20 blur-3xl"></div>
      <div className="absolute top-40 right-[20%] w-24 h-24 rounded-full bg-icosom-600/30 blur-xl"></div>
      <div className="absolute bottom-20 left-[25%] w-40 h-40 rounded-full bg-icosom-600/10 blur-2xl"></div>
    </section>
  );
};

const Timer = () => {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [hoursRemaining, setHoursRemaining] = useState(0);
  const [minutesRemaining, setMinutesRemaining] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  useEffect(() => {
    const targetDate: Date = new Date("2026-02-27T00:00:00");

    const interval = setInterval(() => {
      const now: Date = new Date();

      const timeDiff: number = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(interval);
        setDaysRemaining(0);
        setHoursRemaining(0);
        setMinutesRemaining(0);
        setSecondsRemaining(0);
        return;
      }

      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      setDaysRemaining(days);
      setHoursRemaining(hours);
      setMinutesRemaining(minutes);
      setSecondsRemaining(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="flex gap-6 lg:gap-12 justify-center bg-white border rounded-3xl p-4">
        <div className="flex flex-col">
          <span className="text-icosom-500 text-3xl lg:text-6xl font-semibold">
            {daysRemaining}
          </span>{" "}
          <span className="text-slate-400">Days</span>
        </div>

        <div className="flex flex-col">
          <span className="text-icosom-500 text-3xl lg:text-6xl font-semibold">
            {hoursRemaining}
          </span>{" "}
          <span className="text-slate-400">Hours</span>
        </div>

        <div className="flex flex-col">
          <span className="text-icosom-500 text-3xl lg:text-6xl font-semibold">
            {minutesRemaining}
          </span>{" "}
          <span className="text-slate-400">Minutes</span>
        </div>

        <div className="flex flex-col">
          <span className="text-icosom-500 text-3xl lg:text-6xl font-semibold">
            {secondsRemaining}
          </span>{" "}
          <span className="text-slate-400">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

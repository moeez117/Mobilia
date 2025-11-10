import React, { useEffect, useState } from "react";

const TeamAlignment = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f9fafb] to-[#eef2f3] py-24 px-6 lg:px-20">
      {/* Subtle Decorative Gradient Glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_right,_#00bfa620,_transparent_60%)]"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* LEFT TEXT SECTION */}
        <div
          className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ease-out ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-[#0a3c6d]">
            Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bfa6] via-[#10ddc1] to-[#0a3c6d]">
              Alignment
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Empower every department to move in sync — with shared insights,
            unified goals, and transparent vendor data.
          </p>

          <div className="mt-10">
            <a
              href="/learn-more"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] text-white font-semibold rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div
          className={`lg:w-1/2 flex items-center justify-center mb-12 lg:mb-0 transition-all duration-1000 ease-out ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00bfa6]/30 to-[#0a3c6d]/20 blur-3xl rounded-full scale-110"></div>
            <img
              src="https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30a6/6736986d33f8bb5dcf4a3391_Group%2050.png"
              alt="Team Alignment Illustration"
              className="relative z-10 w-full max-w-lg h-auto object-contain transition-transform duration-700 ease-out hover:scale-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAlignment;

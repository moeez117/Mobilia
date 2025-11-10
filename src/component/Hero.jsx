import React, { useEffect, useState } from "react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      className="relative w-full bg-black overflow-hidden font-sans pt-0 md:pt-20"
      style={{ marginTop: "-56px" }} // removes the empty space caused by fixed navbar
    >
      {/* Background Image */}
      <div className="relative w-full h-[92vh]">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.SKPR45ODDEtCfjVq8GxwuQHaE6?w=870&h=578&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Mobilia Consulting Background"
          className="w-full h-full object-cover object-center scale-105 brightness-75 transition-transform duration-700 ease-out"
        />

        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

        {/* Hero Content */}
        <div className="absolute inset-x-0 bottom-10 max-w-8xl mx-auto px-2 top-40 md:top-10 sm:px-6 lg:px-8 text-white">
          <div
            className={`max-w-2xl transition-all duration-1000 ease-out ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl :text-6xl font-bold leading-tight tracking-tight">
              Wouldn’t you want to know if you’re{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00bfa6] via-[#10ddc1] to-[#0a3c6d]">
                overspending?
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-200">
              The question every CFO should be asking.
            </p>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              Mobilia helps companies identify and recover overspending on
              indirect expenses — with zero risk and no upfront cost.
            </p>

            <div className="mt-10">
              <a
                href="/book-demo"
                className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 bg-gradient-to-b from-white via-[#f9fafb] to-[#eef2f3] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {[
            {
              title: "Maximize Savings, Minimize Effort",
              desc: "Achieve high ROI with minimal time investment and immediate results.",
              delay: "100ms",
            },
            {
              title: "Streamline Vendor Management",
              desc: "Simplify procurement and strengthen vendor partnerships seamlessly.",
              delay: "300ms",
            },
            {
              title: "Save 20–40%",
              desc: "Reduce fixed costs — without changing vendors or disrupting operations.",
              highlight: true,
              delay: "500ms",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl shadow-md p-6 sm:p-8 transform transition duration-700 ease-out hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#00bfa6]/30 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: card.delay }}
            >
              {card.highlight ? (
                <h4 className="text-3xl font-bold mb-3">
                  Save{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d]">
                    20–40%
                  </span>
                </h4>
              ) : (
                <h4 className="text-xl font-semibold text-[#00bfa6] mb-3">
                  {card.title}
                </h4>
              )}
              <p className="text-gray-700 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

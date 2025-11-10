// src/components/ValueProposition.jsx
import React, { useEffect, useState } from "react";
import {
  HiOutlineAdjustments,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const ValueProposition = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      icon: <HiOutlineClock className="w-12 h-12 text-[#00bfa6]" />,
      heading: "Easy Implementation",
      description:
        "Get started in 30 minutes and save from day one.\n15-Minute Assessment Call\nEliminate inefficient procurement processes.",
    },
    {
      icon: <HiOutlineAdjustments className="w-12 h-12 text-[#00bfa6]" />,
      heading: "Optimization Recommendations",
      description:
        "Approve data-driven insights that uncover hidden overspending and improve efficiency.",
    },
    {
      icon: <HiOutlineCurrencyDollar className="w-12 h-12 text-[#00bfa6]" />,
      heading: "Start Saving Instantly",
      description:
        "Implement recommendations effortlessly and watch measurable savings appear from day one.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001a35] via-[#022b55] to-[#0a3c6d] text-white md:py-18 py-14 md:px-6 px-3">
      {/* ✨ Dynamic Glowing Orbs for Ambient Light */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00bfa6]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10ddc1]/10 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* 🌟 Heading with Gradient Accent */}
        <h2
          className={`text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bfa6] via-[#10ddc1] to-[#6dd5ed]">
            Value Proposition
          </span>
        </h2>

        <p
          className={`text-gray-300 max-w-2xl mx-auto mb-16 text-lg leading-relaxed transition-all duration-1000 delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Empower your business with scalable, data-driven strategies that deliver measurable impact — fast.
        </p>

        {/* 🧩 Value Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-10 flex flex-col items-center text-center transition-all duration-700 ease-out transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#00bfa6]/20 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* 🔮 Icon with Radiant Glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 blur-xl bg-[#00bfa6]/30 rounded-full scale-110"></div>
                <div className="relative z-10 text-[#00bfa6] drop-shadow-[0_0_6px_#00bfa6]">
                  {card.icon}
                </div>
              </div>

              {/* 🩵 Heading */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {card.heading}
              </h3>

              {/* 📄 Description */}
              <p className="text-sm md:text-base text-gray-300 whitespace-pre-line leading-relaxed">
                {card.description}
              </p>

              {/* 🌈 Accent Divider */}
              <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-[#00bfa6] via-[#10ddc1] to-[#0a3c6d] rounded-full"></div>

              {/* ✨ Subtle hover lighting */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00bfa6]/0 via-transparent to-[#00bfa6]/5 opacity-0 hover:opacity-100 rounded-3xl transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* Decorative bottom accent glow */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-gradient-to-t from-[#00bfa6]/10 to-transparent blur-3xl"></div>
      </div>
    </section>
  );
};

export default ValueProposition;

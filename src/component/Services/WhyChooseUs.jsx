// src/components/WhyChooseUs.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const points = [
  {
    title: "Expert Team",
    desc: "Our team combines deep industry knowledge with creative innovation to deliver top-tier results.",
  },
  {
    title: "Data-Driven",
    desc: "Every decision is backed by insights, ensuring your investment generates measurable impact.",
  },
  {
    title: "End-to-End Support",
    desc: "From concept to launch and beyond, we partner with you every step of the way.",
  },
  {
    title: "Proven Results",
    desc: "We’ve successfully helped 100+ businesses grow through tailored digital strategies.",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section
      id="why-us"
      className="relative py-10 bg-gradient-to-b from-[#0a3c6d] via-[#052f56] to-[#001f3d] overflow-hidden"
    >
      {/* Decorative lighting gradients */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#00bfa6]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0a3c6d]/10 rounded-full blur-3xl"></div>

      {/* ✅ Centered Heading Section */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Why <span className="text-[#00bfa6]">Choose</span> Us
        </h2>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          We deliver value-driven solutions built on trust, creativity, and measurable success.
        </p>
      </div>

      {/* ✅ Grid Layout: Cards + Image aligned */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side — Cards */}
        <div data-aos="fade-right" data-aos-duration="1200" className="space-y-6">
          {points.map((item, i) => (
            <li
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-[#00bfa6]/20 hover:border-[#00bfa6]/40 transition-all duration-300 hover:shadow-[#00bfa6]/20 list-none"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#00bfa6] to-[#0a3c6d] text-white flex items-center justify-center text-2xl font-bold shadow-md">
                ✔
              </span>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </div>

        {/* Right side — Image perfectly aligned with cards */}
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="relative flex justify-center items-center mt-10 md:mt-0"
        >
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00bfa6]/30 to-[#0a3c6d]/20 rounded-3xl blur-2xl opacity-60"></div>
          <img
            src="https://thesappers.com/wp-content/uploads/2025/04/360_F_406439650_BaUG3SjU5myg6oP2T45u1WNv1dn3PbKR.jpg"
            alt="Professional Team Collaboration"
            className="relative rounded-3xl shadow-2xl w-full max-w-lg h-[420px] md:h-[500px] object-cover transform transition-transform duration-500 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Discovery",
    desc: "We begin by understanding your goals, audience, and challenges to define clear objectives.",
  },
  {
    title: "Strategy",
    desc: "Our team builds a roadmap that aligns your business vision with proven digital strategies.",
  },
  {
    title: "Execution",
    desc: "From design to deployment, we bring the strategy to life using agile and transparent workflows.",
  },
  {
    title: "Optimization",
    desc: "We monitor, measure, and iterate to ensure continuous improvement and long-term success.",
  },
];

const ServiceProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth duration
      easing: "ease-in-out", // Natural ease curve
      once: true, // Trigger animation once
      offset: 100, // Start a bit before visible
    });
  }, []);

  return (
    <section
      id="process"
      className="relative py-24 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden"
    >
      {/* Decorative gradient background circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#00bfa6]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#0a3c6d]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4 text-[#0a3c6d]">
            Our Process
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            A refined, transparent, and collaborative process designed to deliver
            excellence at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150} // staggered entry
              className="relative group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border border-transparent hover:border-[#00bfa6]/40 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Step number circle */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#00bfa6] to-[#0a3c6d] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-[#0a3c6d] group-hover:text-[#00bfa6] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>

              {/* Hover underline animation */}
              <span className="block mt-4 w-0 group-hover:w-16 h-1 bg-[#00bfa6] transition-all duration-300"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;

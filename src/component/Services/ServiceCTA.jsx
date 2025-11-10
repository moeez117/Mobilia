import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCTA = () => {
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
      id="service-cta"
      className="py-20 bg-gradient-to-b from-[#0a3c6d]/90 to-[#001f3d] text-center"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-white bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Need Expert Help?
        </h2>
        <p
          className="text-gray-200 mb-8 text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let’s discuss how we can help you achieve your goals with our tailored digital services.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Get a Free Consultation
          </a>
          <a
            href="/portfolio"
            className="border-2 border-[#00bfa6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#00bfa6]/10 transition-colors duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;

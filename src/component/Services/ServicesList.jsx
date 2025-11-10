import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaPalette,
  FaChartLine,
  FaMobileAlt,
  FaIdBadge,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    desc: "We build high-performance, responsive websites using the latest technologies that help your brand stand out online.",
    icon: <FaLaptopCode size={28} />,
  },
  {
    title: "UI / UX Design",
    desc: "Intuitive, user-friendly interfaces designed to enhance usability and drive engagement across all devices.",
    icon: <FaPalette size={28} />,
  },
  {
    title: "Digital Strategy",
    desc: "From SEO to analytics, we craft data-driven strategies that grow your audience and increase conversions.",
    icon: <FaChartLine size={28} />,
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps that provide seamless performance and an exceptional user experience.",
    icon: <FaMobileAlt size={28} />,
  },
  {
    title: "Brand Identity",
    desc: "We help you define a strong visual and verbal identity that communicates your brand’s purpose clearly.",
    icon: <FaIdBadge size={28} />,
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing improvements, updates, and technical support to keep your product secure and running smoothly.",
    icon: <FaTools size={28} />,
  },
];

const ServicesList = () => {
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
      id="services-list"
      className="relative py-24 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00bfa6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a3c6d]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4 text-[#0a3c6d]">
            Our Core Services
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            We provide end-to-end digital solutions tailored to your business goals. Every service is backed by strategy, creativity, and measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border border-transparent hover:border-[#00bfa6]/40 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Decorative glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00bfa6]/0 to-[#0a3c6d]/0 group-hover:from-[#00bfa6]/5 group-hover:to-[#0a3c6d]/5 transition-all duration-500"></div>

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#e0f8f4] mb-5 mx-auto group-hover:scale-105 transition-transform duration-300 text-[#00bfa6]">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-[#0a3c6d] group-hover:text-[#00bfa6] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>

              {/* Underline accent on hover */}
              <span className="block mt-4 w-0 group-hover:w-20 h-[3px] bg-[#00bfa6] transition-all duration-300 mx-auto"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

import React, { useEffect, useState } from "react";

const UnifiedVendorManagement = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a3c6d] via-[#02284e] to-[#001a35] text-white py-15 md:py-18 px-3 md:px-6">
      {/* Decorative Glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_#00bfa620,_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-2xl sm:text-5xl font-extrabold mb-16 tracking-tight">
          Unified Vendor{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bfa6] via-[#10ddc1] to-[#6dd5ed]">
            Management
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-20 max-w-6xl mx-auto">
          {/* Left Image with Premium Banner */}
          <div className="relative w-full max-w-md mb-12 md:mb-0 group">
            {/* Elegant Banner */}
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] text-white font-semibold text-lg px-8 py-3 rounded-tr-lg rounded-bl-lg shadow-2xl transform -translate-y-3 -translate-x-3 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
              <span className="block uppercase tracking-wide">Main</span>
              <span className="text-sm font-light">Benefits</span>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Unified Vendor Management"
                className="w-full h-[420px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a3c6d]/40 via-transparent to-[#00bfa6]/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Right Side: Benefit List */}
          <div className="flex-1">
            <ul className="space-y-8 max-w-md mx-auto md:mx-0">
              {[
                {
                  title: "Reduce Fixed Costs",
                  desc: "Cut unnecessary spending — without changing vendors or contracts.",
                },
                {
                  title: "Gain Full Visibility",
                  desc: "Track and analyze all vendor expenses with clarity and precision.",
                },
                {
                  title: "Streamline Management",
                  desc: "Simplify procurement and strengthen your vendor relationships.",
                },
                {
                  title: "Achieve Significant Savings",
                  desc: "Unlock measurable results starting from day one.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className={`transform transition-all duration-700 ease-out ${
                    animate
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  <h3 className="text-xl font-semibold text-[#00bfa6] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] mt-3 rounded-full"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedVendorManagement;

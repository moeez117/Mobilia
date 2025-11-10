import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#052a52] via-[#0a3c6d] to-[#001f3d] text-white pt-18 pb-18 overflow-hidden">
      {/* Decorative gradient shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00bfa6]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10ddc1]/20 rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-5xl md:text-5xl font-bold mb-10 leading-tight tracking-tight">
            Elevate Your Business with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00bfa6] via-[#10ddc1] to-[#52ffe3] animate-gradient-x">
              Our Services
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-xl mx-auto md:mx-0">
            We provide intelligent, data-driven strategies that streamline operations,
            enhance productivity, and uncover growth opportunities. Partner with us
            to turn your vision into measurable success.
          </p>

          <button className="px-10 py-4 bg-gradient-to-r from-[#00bfa6] to-[#10ddc1] font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm">
            Explore Services
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-full md:w-[90%] mt-10 md:mt-8 group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00bfa6]/30 to-[#10ddc1]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80"
              alt="Team collaborating on business services"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[450px] md:h-[520px] transform group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

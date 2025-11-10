import React from "react";

const ImmediateImpact = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9fafb] to-[#eef2f3] py-24">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_#00bfa620,_transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Title Section */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-[#0a3c6d]">
          Immediate Impact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bfa6] via-[#10ddc1] to-[#0a3c6d]">
            & Our Promise
          </span>
        </h2>

        <div className="space-y-2 max-w-2xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>100% Visibility & Savings from Day 1.</p>
          <p>
            We don’t waste time — neither yours nor ours. If you’re reading this,
            we’re confident we can help your business optimize costs effectively.
          </p>
          <p>
            Save <span className="font-semibold text-[#00bfa6]">20–40%</span> with
            your current vendors — quickly and efficiently.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <button className="relative inline-block bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
            CONTACT US
          </button>
          <button className="relative inline-block bg-[#0a3c6d] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#00bfa6] hover:text-white hover:-translate-y-1 transform transition-all duration-300">
            SUPPORT
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00bfa6]/10 to-[#0a3c6d]/10 rounded-2xl blur-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Business meeting"
            className="relative mx-auto rounded-2xl shadow-2xl w-full h-[400px] object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default ImmediateImpact;

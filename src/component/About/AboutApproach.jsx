import React from "react";
import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  return (
    <section className="relative bg-[#0a3c6d] text-white py-28 lg:py-36 overflow-hidden">
      {/* --- Decorative Gradients --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00bfa6]/15 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00bfa6]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* --- Main Title --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-5xl font-extrabold mb-8 tracking-tight"
        >
          Our <span className="text-[#00bfa6]">Philosophy</span>
        </motion.h2>

        {/* --- Elegant Intro Paragraph --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-lg text-[#c7d9e8] leading-relaxed mb-20"
        >
          At <span className="font-semibold text-white">Mobilia Consulting</span>, 
          we don’t just reduce costs — we refine how organizations think about efficiency.  
          Our philosophy is rooted in <span className="text-[#00bfa6] font-medium">strategic insight</span>, 
          <span className="text-[#00bfa6] font-medium"> ethical execution</span>, and 
          <span className="text-[#00bfa6] font-medium"> long-term value</span> that empowers leaders 
          to thrive through clarity, precision, and confidence.
        </motion.p>

        {/* --- Split Layout: Quote + Image --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          {/* Left Side - Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-md text-left"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-xl hover:bg-white/15 transition-all duration-300">
              <p className="text-xl lg:text-2xl font-light italic text-[#eaf4f8] leading-relaxed border-l-4 border-[#00bfa6] pl-6">
                “True financial leadership is about foresight — identifying
                opportunity where others see cost, and creating strength through
                precision.”
              </p>
              <p className="mt-5 text-[#9fb7ca] font-medium">
                — Mobilia Leadership Team
              </p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#00bfa620] w-[420px] lg:w-[500px] h-[300px] lg:h-[360px] group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                alt="Leadership Vision"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a3c6d]/30 via-transparent to-[#00bfa6]/20 opacity-90"></div>
            </div>
          </motion.div>
        </div>

        {/* --- Bottom Statement --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Why Businesses <span className="text-[#00bfa6]">Trust Mobilia</span>
          </h3>
          <p className="text-[#c7d9e8] text-base lg:text-lg leading-relaxed">
            Because we don’t act as vendors — we act as partners.  
            Every insight, every negotiation, and every saving aligns directly 
            with your growth. Our goal is simple: deliver measurable impact 
            with <span className="text-[#00bfa6] font-medium">clarity, control,</span> 
            and <span className="text-[#00bfa6] font-medium">confidence.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

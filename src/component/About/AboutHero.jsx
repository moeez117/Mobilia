// src/components/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-[#0a3c6d] overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a3c6d] via-[#08345c] to-[#0a3c6d]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-28">
        
        {/* --- Left Content --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-8 tracking-tight">
            WE SAVE YOUR <br className="hidden md:block" /> COMPANY MONEY
          </h1>
          <p className="text-[#c7d9e8] text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90">
            Mobilia Consulting was founded to provide CFOs and finance leaders 
            with the tools and insights needed to achieve substantial savings 
            without disrupting day-to-day operations.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-[#00bfa6] hover:bg-[#00a792] text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* --- Right Image with Accent Layers --- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative flex justify-center lg:justify-start"
        >
          {/* Background accent layer */}
          <div className="absolute top-12 -left-10 w-80 h-80 bg-[#00bfa6] rounded-2xl rotate-6 opacity-90 hidden lg:block blur-sm shadow-lg" />

          {/* Foreground image */}
          <div className="relative z-10 rounded-2xl mx-4 overflow-hidden w-80 h-80 lg:w-96 lg:h-96 shadow-2xl border border-[#00bfa620]">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800"
              alt="Mobilia cost optimization"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Subtle glow effect */}
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#00bfa6]/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

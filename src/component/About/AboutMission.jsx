import React from "react";
import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f7fafc] to-[#f0f6fb] py-28 lg:py-36 overflow-hidden">
      {/* --- Faint background heading --- */}
      <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-[5rem] md:text-[7rem] lg:text-[9rem] font-extrabold text-[#0a3c6d]/5 tracking-widest select-none uppercase">
        Our Story
      </h2>

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00bfa6]/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a3c6d]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* --- Subheading --- */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-extrabold text-[#0a3c6d] mb-10 text-center"
        >
          Who <span className="text-[#00bfa6]">We Are</span>
        </motion.h3>

        {/* --- Main Story --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-slate-700 text-lg lg:text-xl leading-relaxed space-y-8 text-center"
        >
          <p className="text-slate-700">
            Mobilia Consulting was founded with one purpose — to empower
            businesses to operate smarter. After over a decade at Verizon and
            AT&amp;T, <span className="font-semibold text-[#0a3c6d]">Donovan</span> 
            realized that companies were overspending unnecessarily on their
            wireless and telecom expenses. His first success? Helping a single
            client save over <span className="font-semibold text-[#00bfa6]">$40,000</span> annually.
          </p>

          <p>
            What began as a focused cost-optimization project evolved into a
            multi-disciplinary consulting firm. Mobilia now helps organizations
            reduce expenses across <span className="font-medium text-[#0a3c6d]">wireless, wired, waste, document storage,</span> 
            and <span className="font-medium text-[#0a3c6d]">shipping</span> categories — all while preserving
            operational efficiency.
          </p>

          <p>
            Our ongoing <span className="text-[#00bfa6] font-medium">invoice management system</span> ensures clients
            never overpay, freeing teams from administrative headaches. We don’t
            just identify savings — we help maintain them, month after month,
            so your focus stays where it should: on growth and innovation.
          </p>
        </motion.div>

        {/* --- Elegant Divider Line --- */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00bfa6] via-[#00bfa6]/50 to-transparent rounded-full"></div>
        </div>

        {/* --- Image Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-[#e6eef5] max-w-5xl w-full group">
            <img
              src="https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30a6/6736986d33f8bb5dcf4a33c8_Rectangle%252032-p-800.jpg"
              alt="Business strategy charts"
              className="w-full h-[360px] lg:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a3c6d]/40 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* --- Subtle Closing Quote --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl italic text-[#0a3c6d] font-light">
            “Every partnership begins with trust — and every dollar saved is
            proof that clarity and accountability drive results.”
          </p>
          <p className="mt-3 text-[#00bfa6] font-semibold">— The Mobilia Team</p>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="relative text-white overflow-hidden py-32 lg:py-44 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* --- Softer Gradient Overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3c6d]/70 via-[#0a3c6d]/75 to-[#031a38]/80"></div>

      {/* --- Subtle Animated Accent Glows --- */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-[#00bfa6]/25 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-24 right-24 w-96 h-96 bg-[#00bfa6]/15 rounded-full blur-3xl"
      />

      {/* --- Hero Content --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md"
        >
          Let’s Talk About Your{" "}
          <span className="text-[#00bfa6]">Cost-Saving Potential</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#e1eef7] text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Partner with Mobilia Consulting to uncover hidden savings, enhance
          efficiency, and strengthen your financial performance — sustainably
          and transparently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="#contact-form"
            className="bg-[#00bfa6] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-[#00a892] hover:shadow-[#00bfa6]/40 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-10 text-[#b8ccdf] text-sm tracking-wide"
        >
          No fees until we find verified savings — that’s our commitment.
        </motion.p>
      </div>
    </section>
  );
}

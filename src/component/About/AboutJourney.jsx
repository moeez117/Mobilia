import React from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";

const timeline = [
  {
    year: "2010",
    icon: <Briefcase className="w-6 h-6 text-[#00bfa6]" />,
    title: "The Beginning",
    desc: "After a decade in telecom, our founder recognized inefficiencies costing businesses millions — and Mobilia Consulting was born.",
  },
  {
    year: "2014",
    icon: <TrendingUp className="w-6 h-6 text-[#00bfa6]" />,
    title: "Expanding Expertise",
    desc: "We grew beyond wireless cost management, introducing multi-category savings including waste, shipping, and IT optimization.",
  },
  {
    year: "2018",
    icon: <Users className="w-6 h-6 text-[#00bfa6]" />,
    title: "Trusted by Enterprises",
    desc: "Partnered with hundreds of organizations nationwide — driving measurable savings and building long-term vendor relationships.",
  },
  {
    year: "2023",
    icon: <Award className="w-6 h-6 text-[#00bfa6]" />,
    title: "Sustainable Leadership",
    desc: "Mobilia continues to redefine cost optimization with data-driven intelligence, ethical strategy, and proven financial impact.",
  },
];

export default function AboutJourney() {
  return (
    <section className="relative bg-gradient-to-b from-[#f7fafc] to-white py-28 lg:py-36 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#00bfa6]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a3c6d]/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* --- Heading --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl lg:text-5xl font-extrabold text-[#0a3c6d] mb-16"
        >
          Our <span className="text-[#00bfa6]">Journey</span> of Growth
        </motion.h2>

        {/* --- Timeline --- */}
        <div className="relative border-l-2 border-[#00bfa6]/30 pl-10 space-y-16">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Circle Marker */}
              <div className="absolute -left-[33px] top-1 w-6 h-6 bg-white border-4 border-[#00bfa6] rounded-full shadow-md flex items-center justify-center">
                {item.icon}
              </div>

              {/* Content */}
              <div className="bg-white/80 backdrop-blur-md border border-[#e3edf3] rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-[#0a3c6d] text-2xl font-semibold mb-1">{item.title}</h3>
                <p className="text-[#00bfa6] font-semibold text-sm mb-3 tracking-wide">
                  {item.year}
                </p>
                <p className="text-slate-600 leading-relaxed text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Summary --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-[#0a3c6d] mb-4">
            A Decade of Dedication
          </h3>
          <p className="text-slate-700 text-lg leading-relaxed">
            What started as a vision to make businesses financially sharper has
            become a movement — helping organizations transform their cost
            structures, improve vendor trust, and unlock long-term value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

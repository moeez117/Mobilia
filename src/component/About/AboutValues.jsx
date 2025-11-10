import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#00bfa6]" />,
    title: "Integrity First",
    desc: "We believe transparency and honesty are non-negotiable. Every recommendation is data-driven, every outcome measurable.",
  },
  {
    icon: <Target className="w-8 h-8 text-[#00bfa6]" />,
    title: "Client-Focused",
    desc: "Your success defines ours. We align our goals with your outcomes to ensure genuine, lasting value creation.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#00bfa6]" />,
    title: "Collaborative Expertise",
    desc: "Our team works hand-in-hand with yours to identify cost-saving opportunities without disrupting daily operations.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#00bfa6]" />,
    title: "Sustainable Results",
    desc: "We ensure savings endure over time — preventing price creep, renegotiating smarter, and continuously monitoring vendor performance.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative bg-[#0a3c6d] py-24 lg:py-32 text-white overflow-hidden">
      {/* --- Subtle gradient overlay behind content --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3c6d]/95 via-[#0a3c6d] to-[#052849] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* --- Left Image --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#00bfa6]/20 rounded-full blur-3xl" />
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border border-[#00bfa620]">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
              alt="Teamwork and strategy"
              className="w-full h-[440px] object-cover"
            />
          </div>
        </motion.div>

        {/* --- Right Content --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-10">
            Our <span className="text-[#00bfa6]">Core Values</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-[#c7d9e8] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

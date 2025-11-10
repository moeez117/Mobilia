import React from "react";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Donovan Green",
    role: "Founder & Managing Partner",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQFzvML622LnCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1627133916205?e=2147483647&v=beta&t=jWsD6b7THVPhX5onOOaedxICeQe_u1sF0vAjo5Ion8Q",
  },
  {
    name: "Sarah Mitchell",
    role: "Director of Strategy",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "James Carter",
    role: "Head of Client Relations",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=800",
  },
];

export default function AboutLeadership() {
  return (
    <section className="relative bg-gradient-to-b from-[#f9fbfc] to-[#eaf4f8] py-28 lg:py-36 overflow-hidden">
      {/* --- Decorative Background Elements --- */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#00bfa6]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0a3c6d]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* --- Heading --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-5xl font-extrabold text-[#0a3c6d] mb-8"
        >
          Meet Our <span className="text-[#00bfa6]">Leadership Team</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16"
        >
          Experienced professionals who’ve transformed cost management into a
          science — leading Mobilia’s mission to create smarter, leaner, and
          more financially resilient organizations.
        </motion.p>

        {/* --- Floating Layout for Leaders --- */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 mt-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-[#00bfa6]/40 mb-6 hover:scale-105 transition-transform duration-500 ease-out">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0a3c6d]">
                {leader.name}
              </h3>
              <p className="text-[#5e7185] text-sm font-medium mt-1">
                {leader.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Final Quote --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <p className="text-lg italic text-[#0a3c6d] leading-relaxed border-l-4 border-[#00bfa6] pl-6">
            “Leadership at Mobilia means commitment — to transparency, to
            measurable outcomes, and to helping every client achieve operational
            excellence without compromise.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}

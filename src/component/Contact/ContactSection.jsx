import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f9fbfc] to-[#eaf4f8] py-28 lg:py-15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Section Heading --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0a3c6d] mb-4">
            Get in <span className="text-[#00bfa6]">Touch</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We’re ready to help your business unlock savings and improve
            efficiency. Reach out — and let’s start a conversation that matters.
          </p>
        </motion.div>

        {/* --- Contact Info Cards + Form Layout --- */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* --- Left: Contact Info Cards --- */}
          <div className="space-y-6"> {/* reduced space between cards */}
            {[
              {
                icon: <Mail className="w-6 h-1 text-[#00bfa6]" />,
                title: "Email Us",
                info: "info@mobiliaconsulting.com",
              },
              {
                icon: <Phone className="w-6 h-1 text-[#00bfa6]" />,
                title: "Call Us",
                info: "+1 (800) 123-4567",
              },
              {
                icon: <MapPin className="w-6 h-1 text-[#00bfa6]" />,
                title: "Visit Us",
                info: "123 Innovation Drive, Dallas, TX",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-start gap-3 bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border border-[#00bfa610]"
              >
                <div className="p-2 bg-[#00bfa6]/10 rounded-xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0a3c6d]">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.info}</p>
                </div>
              </motion.div>
            ))}

            {/* --- Separate Map Under Contact Cards (smaller height) --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 w-full h-48 rounded-xl overflow-hidden border border-[#cde5ec]"
            >
              <iframe
                title="Mobiliaconsulting Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.0123456789!2d-96.800000!3d32.7831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99abcd12345%3A0x1234567890abcdef!2s123+Innovation+Drive%2C+Dallas%2C+TX!5e0!3m2!1sen!2sus!4v1697054671234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* --- Right: Contact Form --- */}
          <motion.form
            id="contact-form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 lg:p-10 border border-[#00bfa610]"
          >
            <h3 className="text-2xl font-semibold text-[#0a3c6d] mb-6">
              Send Us a Message
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#0a3c6d] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-[#cde5ec] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00bfa6] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a3c6d] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-[#cde5ec] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00bfa6] outline-none transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[#0a3c6d] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Inquiry topic"
                  className="w-full border border-[#cde5ec] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00bfa6] outline-none transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[#0a3c6d] mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full border border-[#cde5ec] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00bfa6] outline-none transition-all"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 bg-[#00bfa6] text-white px-8 py-4 rounded-full font-semibold shadow-md hover:bg-[#00a892] hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

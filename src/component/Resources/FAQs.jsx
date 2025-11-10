// src/components/FAQs.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is a contingency-based fixed-cost reduction service?",
    answer:
      "It’s a performance-based model where Mobilia only earns a fee after savings are verified and realized — there are no upfront costs or risks.",
  },
  {
    question: "How does contingency-based pricing work?",
    answer:
      "Mobilia earns a percentage of the verified savings achieved. If no savings are found, you pay nothing — ensuring our goals align with yours.",
  },
  {
    question: "What types of expenses do you typically focus on reducing?",
    answer:
      "We specialize in categories such as wireless, waste, payroll, utilities, and other indirect spend areas with measurable cost reduction potential.",
  },
  {
    question: "Will we need to change vendors to achieve savings?",
    answer:
      "Not always. Mobilia often negotiates improved pricing and terms with your existing vendors to deliver savings without operational disruption.",
  },
  {
    question: "How long does the cost reduction process take?",
    answer:
      "Most categories are completed within 4–6 weeks, though multi-location or complex negotiations may require additional time for validation.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    faqs.forEach((_, i) => {
      const el = contentRefs.current[i];
      if (!el) return;

      if (openIndex === i) {
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = 1;
      } else {
        el.style.maxHeight = "0px";
        el.style.opacity = 0;
      }
    });
  }, [openIndex]);

  return (
    <section
      id="faqs"
      className="relative py-24 bg-gradient-to-b from-[#031424] via-[#052b48] to-[#021320] overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,191,166,0.2),_transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(10,60,109,0.3),_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14 tracking-tight">
          Frequently Asked <span className="text-[#00bfa6]">Questions</span>
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left side - Image */}
          <div className="relative group flex justify-center">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
            <img
              src="https://cdn.prod.website-files.com/6736986d33f8bb5dcf4a30a6/6736986d33f8bb5dcf4a33c0_%E7%9F%A9%E5%BD%A2%2039.png"
              alt="FAQ Discussion Illustration"
              className="relative w-full max-w-lg rounded-3xl shadow-2xl object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* Right side - FAQs */}
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-[#00bfa6]/30 shadow-lg hover:shadow-[#00bfa6]/20 transition-all duration-400"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex justify-between items-center text-left px-6 py-5 text-white"
                >
                  <span className="font-semibold text-[16px] leading-snug pr-4">
                    Q. {faq.question}
                  </span>
                  {openIndex === idx ? (
                    <ChevronUp className="text-[#00bfa6] w-6 h-6 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="text-[#00bfa6] w-6 h-6 transition-transform duration-200" />
                  )}
                </button>

                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: 0, opacity: 0 }}
                >
                  <div className="px-6 pb-5 text-slate-100 text-[15px] leading-relaxed border-t border-[#00bfa6]/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

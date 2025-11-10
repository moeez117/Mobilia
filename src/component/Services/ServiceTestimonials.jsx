import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "Working with this team was a game-changer. They helped us streamline our operations and boost performance.",
    author: "Sarah L., Operations Manager",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "Incredible service and attention to detail. They truly understood our business goals and delivered perfectly.",
    author: "James M., Startup Founder",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const ServiceTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Client Feedback
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200} // staggered delay for sequential effect
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 text-left transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col md:flex-row items-start gap-6"
            >
              <img
                src={t.img}
                alt={t.author}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#00bfa6]"
              />
              <div>
                <p className="italic text-gray-700 mb-4 text-lg">“{t.quote}”</p>
                <cite className="text-gray-500 not-italic font-semibold">{t.author}</cite>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;

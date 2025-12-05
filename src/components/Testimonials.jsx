import React, { useState, useRef } from "react";
import {
  FaFileInvoiceDollar,
  FaClock,
  FaMapMarkerAlt,
  FaCity,
  FaFileContract,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Ranjeet Sinha",
      position: "Founder, ShipKart",
      content:
        '"Asset Sense provided excellent virtual office space in Gurgaon, helping my startup establish a professional presence without high costs. I saved ₹75,000 annually on office rent."',
      initials: "RS",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      icon: <FaFileInvoiceDollar />,
      iconColor: "text-green-500",
      tag: "95% cost savings",
    },
    {
      id: 2,
      name: "Jasleen Kaur",
      position: "CFO, SaaSBee",
      content:
        '" I highly recommend Asset Sense for virtual office space Delhi. Our bank asked for one extra doc and support replied within 3 minutes."',
      initials: "JK",
      bgColor: "bg-purple-500",
      textColor: "text-white",
      icon: <FaClock />,
      iconColor: "text-blue-500",
      tag: "3-min response time",
    },
    {
      id: 3,
      name: "Manish Sharma",
      position: "Director, TechFlow",
      content:
        '"Choosing Asset Sense for a virtual office in Jaipur was a game-changer. Asset Sense helped us expand to 5 states without physical presence."',
      initials: "MS",
      bgColor: "bg-green-500",
      textColor: "text-white",
      icon: <FaMapMarkerAlt />,
      iconColor: "text-red-500",
      tag: "5-state expansion",
    },
    {
      id: 4,
      name: "Anita Shah",
      position: "CEO, TechInnovate",
      content:
        '" Asset Sense handled my virtual office Noida GST registration effortlessly, ensuring compliance and providing a prestigious address. Their expertise saved time and simplified the entire process."',
      initials: "AS",
      bgColor: "bg-yellow-500",
      textColor: "text-white",
      icon: <FaCity />,
      iconColor: "text-indigo-500",
      tag: "Single window service",
    },
    {
      id: 5,
      name: "Praveen Kumar",
      position: "Director, EcomSolutions",
      content:
        '"For an affordable virtual office Ahmedabad, Asset Sense exceeded our expectations.The documentation was ready in hours, not days."',
      initials: "PK",
      bgColor: "bg-pink-500",
      textColor: "text-white",
      icon: <FaFileContract />,
      iconColor: "text-teal-500",
      tag: "Quick documentation",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[index];
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () =>
    scrollToIndex((currentIndex + 1) % testimonialData.length);
  const scrollPrev = () =>
    scrollToIndex(
      (currentIndex - 1 + testimonialData.length) % testimonialData.length
    );

  return (
    <section className="py-16 bg-[var(--color-primary)]" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-heading)] mb-4">
          What Clients Say About{" "}
          <span className="text-[var(--color-important)]">
            Asset Sense Virtual Office
          </span>
        </h2>
        <p className="text-md font-semibold text-center text-[var(--color-subheading)] mb-12">
          Rated 4.9/5 from 384 Google Reviews
        </p>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#161C25] rounded-full p-2 shadow-md hidden md:block"
          >
            <FaChevronLeft className="text-gray-200 text-xl" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#161C25] rounded-full p-2 shadow-md hidden md:block"
          >
            <FaChevronRight className="text-gray-200 text-xl" />
          </button>

          {/* Testimonial Cards */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 sm:w-72 md:w-96 snap-center bg-[var(--color-secondary)] p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${testimonial.bgColor} ${testimonial.textColor} font-bold`}
                  >
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--color-heading)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-[var(--color-subheading)] text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <p className="text-[var(--color-description)] mb-4 text-sm md:text-base">
                  {testimonial.content}
                </p>

                <div className="flex items-center text-sm text-[var(--color-heading)]">
                  <span className={`${testimonial.iconColor} text-lg mr-2`}>
                    {testimonial.icon}
                  </span>
                  <span>{testimonial.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://assetsense.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--cta-color)] text-[var(--color-heading)] text-sm md:text-lg px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Know More About Virtual Office
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React, { useState, useRef } from "react";

const TestimonialsSection = () => {
  // Testimonial data stored in an array
  const testimonialData = [
    {
      id: 1,
      initials: "RS",
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
      name: "R. Sinha",
      position: "Founder, ShipKart",
      content:
        '"Asset Sense registered my GST address in 2 days and saved me ₹75,000 in rent."',
      icon: "fas fa-file-invoice-dollar",
      iconColor: "text-green-500",
      tag: "Filed GST in 2 days",
    },
    {
      id: 2,
      initials: "JK",
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",
      name: "J. Kaur",
      position: "CFO, SaaSBee",
      content:
        '"Our bank asked for one extra doc and support replied within 3 minutes."',
      icon: "fas fa-clock",
      iconColor: "text-blue-500",
      tag: "3-min response time",
    },
    {
      id: 3,
      initials: "MS",
      bgColor: "bg-green-100",
      textColor: "text-green-500",
      name: "M. Sharma",
      position: "Director, TechFlow",
      content:
        '"The virtual office helped us expand to 5 states without physical presence."',
      icon: "fas fa-map-marker-alt",
      iconColor: "text-red-500",
      tag: "5-state expansion",
    },
    {
      id: 4,
      initials: "AS",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-500",
      name: "A. Shah",
      position: "CEO, TechInnovate",
      content:
        '"The virtual office solution helped us establish a presence in multiple cities without the overhead costs."',
      icon: "fas fa-city",
      iconColor: "text-indigo-500",
      tag: "Multi-city presence",
    },
    {
      id: 5,
      initials: "PK",
      bgColor: "bg-pink-100",
      textColor: "text-pink-500",
      name: "P. Kumar",
      position: "Director, EcomSolutions",
      content:
        '"Setting up our business was seamless with Asset Sense. The documentation was ready in hours, not days."',
      icon: "fas fa-file-contract",
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

  const scrollNext = () => {
    const nextIndex = (currentIndex + 1) % testimonialData.length;
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex =
      (currentIndex - 1 + testimonialData.length) % testimonialData.length;
    scrollToIndex(prevIndex);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          What Clients Say About Asset Sense Virtual Office
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Rated 4.9/5 from 384 Google Reviews
        </p>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Previous testimonials"
          >
            <i className="fas fa-chevron-left text-gray-700"></i>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Next testimonials"
          >
            <i className="fas fa-chevron-right text-gray-700"></i>
          </button>

          {/* Testimonial Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-100 md:w-100 sm:w-20  snap-always snap-center flex-shrink-0 bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}
                  >
                    <span className={`${testimonial.textColor} font-semibold`}>
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 md:px-4 mb-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <i
                    className={`${testimonial.icon} ${testimonial.iconColor} mr-2`}
                  ></i>
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
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="text-blue-600 font-semibold hover:underline flex items-center justify-center mx-auto">
            Read 300+ Reviews <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;

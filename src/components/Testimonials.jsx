import React, { useState, useRef } from "react";

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
      icon: "fas fa-file-invoice-dollar",
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
      icon: "fas fa-clock",
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
      icon: "fas fa-map-marker-alt",
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
      icon: "fas fa-city",
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

  const scrollNext = () =>
    scrollToIndex((currentIndex + 1) % testimonialData.length);
  const scrollPrev = () =>
    scrollToIndex(
      (currentIndex - 1 + testimonialData.length) % testimonialData.length
    );

  return (
    <section className="py-16 bg-[#0E141B]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          What Clients Say About Asset Sense Virtual Office
        </h2>
        <p className="text-lg text-center text-gray-300 mb-12">
          Rated 4.9/5 from 384 Google Reviews
        </p>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#161C25] rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Previous testimonials"
          >
            <i className="fas fa-chevron-left text-gray-700"></i>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#161C25] rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Next testimonials"
          >
            <i className="fas fa-chevron-right text-gray-700"></i>
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
                className="flex-shrink-0 w-80 sm:w-72 md:w-96 snap-center bg-[#2f333a] p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {/* Initials Circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${testimonial.bgColor} ${testimonial.textColor} font-bold`}
                  >
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {testimonial.content}
                </p>

                <div className="flex items-center text-sm text-gray-300">
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

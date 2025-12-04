import React, { useRef, useState, useEffect } from "react";
import {
  FaUpload,
  FaBolt,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function GSTStep() {
  const scrollRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const steps = [
    {
      icon: <FaUpload className="text-lg" />,
      title: "Send Documents",
      desc: "Submit your KYC details online.",
      gradient: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
    },
    {
      icon: <FaBolt className="text-lg" />,
      title: "Get Instant NOC",
      desc: "Receive your NOC in 24 hours.",
      gradient: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-50",
    },
    {
      icon: <FaCheckCircle className="text-lg" />,
      title: "Apply for GST",
      desc: "File your GST application seamlessly.",
      gradient: "from-green-500 to-emerald-400",
      bgColor: "bg-green-50",
    },
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.children[0]?.offsetWidth || 280;
    const gap = 16;
    const amount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });

    if (direction === "right" && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else if (direction === "left" && currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)]">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-2">
          Simple & Efficient
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Get Your GST Registration in{" "}
          <span className="text-blue-600">3 Simple Steps</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Fast, simple, and fully compliant — start operating your business
          quickly.
        </p>
      </div>

      {/* Steps Section */}
      <div className="relative max-w-6xl mx-auto">
        {/* Mobile Arrows outside scroll */}
        {isMobile && (
          <>
            <button
              onClick={() => scroll("left")}
              disabled={currentStep === 0}
              className="absolute left-0 top-1/3 -translate-y-1/2 z-20 p-3 bg-white shadow rounded-full text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={currentStep === steps.length - 1}
              className="absolute right-0 top-1/3 -translate-y-1/2 z-20 p-3 bg-white shadow rounded-full text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto scroll-smooth px-1 py-2 scrollbar-hide"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center text-center flex-shrink-0 w-[80vw] sm:w-[300px] lg:w-full h-[280px] rounded-xl shadow ${step.bgColor}`}
            >
              {/* Step Number */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm shadow">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-center w-full h-full px-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white shadow mb-4`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Arrows */}
        {/* {!isMobile && (
          <>
            <button
              onClick={() => scroll("left")}
              className="hidden lg:flex absolute -left-3 top-1/3 -translate-y-1/2 z-10 p-3 bg-white shadow rounded-full"
            >
              <FaChevronLeft className="text-lg" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="hidden lg:flex absolute -right-3 top-1/3 -translate-y-1/2 z-10 p-3 bg-white shadow rounded-full"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </>
        )} */}

        {/* CTA */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-[#17CFBF] text-[var(--color-heading)] font-semibold rounded-lg">
            Start Your GST Registration
          </button>
          <p className="mt-2 text-[var(--color-subheading)] text-xs sm:text-sm">
            No hidden fees • 24/7 Support • 100% Compliance Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState, useEffect } from "react";
import {
  FaUpload,
  FaBolt,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import GSTForm from "./GSTpopup";

export default function GSTStep() {
  const [showPopup, setShowPopup] = useState(false);
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
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)]">
          Get Your GST Registration in{" "}
          <span className="text-[var(--color-important)]">3 Simple Steps</span>
        </h2>
        <p className="text-md font-semibold text-[var(--color-subheading)] mt-2">
          Fast, simple, and fully compliant — start operating your business
          quickly.
        </p>
      </div>

      {/* Steps Section */}
      <div className="relative max-w-6xl mx-auto">
        {/* Mobile Arrows */}
        {isMobile && (
          <>
            <button
              onClick={() => scroll("left")}
              disabled={currentStep === 0}
              className="absolute left-0 top-1/3 -translate-y-1/2 z-20 p-3 bg-gray-400 shadow-sm rounded-full text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="text-[var(--color-primary)]" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={currentStep === steps.length - 1}
              className="absolute right-0 top-1/3 -translate-y-1/2 z-20 p-3 bg-gray-400 shadow-sm rounded-full text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="text-[var(--color-primary)]" />
            </button>
          </>
        )}

        {/* Steps + Arrows */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 overflow-x-auto scroll-smooth px-1 py-2 scrollbar-hide"
        >
          {steps.map((step, index) => (
            <>
              {/* Step Card */}
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center text-center flex-shrink-0 w-[80vw] sm:w-[300px] lg:w-full h-[280px] rounded-xl shadow ${step.bgColor}`}
              >
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-15 h-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm shadow">
                  Step {index + 1}
                </div>

                <div className="flex flex-col items-center justify-center w-full h-full px-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white shadow mb-4`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-md font-semibold text-[var(--color-subheading)] text-sm mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Arrow Between Cards — Only Desktop */}
              {index < steps.length - 1 && (
                <div className=" flex items-center justify-center">
                  <GoArrowRight className="text-gray-600 text-2xl" />
                </div>
              )}
            </>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <div className="relative inline-block">
            <button
              onClick={() => setShowPopup(true)}
              className="px-6 py-3 bg-[var(--cta-color)] cursor-pointer text-[var(--color-heading)] font-semibold rounded-lg relative"
            >
              Take The GST Compliance Shield Quiz
            </button>
            <GSTForm
              show={showPopup}
              onClose={() => setShowPopup(false)}
              city=" "
            />

            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md animate-pulse">
              NEW
            </span>

            <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          </div>

          <p className="mt-2 text-md font-semibold text-[var(--color-subheading)]">
            Avoid Rejection By Answering These Questions Related To
            Documentation
          </p>
        </div>
      </div>
    </div>
  );
}

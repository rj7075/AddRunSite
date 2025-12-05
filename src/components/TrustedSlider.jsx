import React from "react";
import { FaShieldAlt, FaCheckCircle, FaCertificate } from "react-icons/fa";

export default function TrustedBySlider() {
  const logos = [
    "bank/sbi.webp",
    "bank/hdfc.svg",
    "bank/yesbank1.png",
    "bank/icici1.png",
    "bank/PNB_Logo.png",
    "bank/axis2.png",
    "bank/kotak.svg",
    "bank/idfc.svg",
    "bank/indusland.webp",
  ];

  return (
    <div className="w-full bg-[var(--color-primary)] overflow-hidden py-6">
      {/* Title */}

      <h3 className="flex items-center justify-center gap-2 py-5 text-sm font-bold mb-4">
        <span className="flex items-center gap-2 bg-blue-50 text-green-700 px-4 py-2 rounded-full shadow-sm">
          <FaShieldAlt className="text-green-600 text-sm" />
          NOC Accepted at all Major Banks
        </span>
      </h3>

      {/* Slider wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-10 animate-slide">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Bank Logo"
              className="h-10 sm:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-30%); }
        }

        .animate-slide {
          animation: slide 40s linear infinite;
          width: max-content;
        }
      `}</style>

      {/* TRUST BADGES SECTION */}
      <div className="mt-6 text-center">
        <div className="flex flex-wrap justify-center gap-6 mt-3">
          {/* Badge 1 */}
          <div className="flex items-center gap-2 text-md font-semibold text-[var(--color-subheading)]">
            <FaCheckCircle className="text-green-600 text-xl" />
            <span>Verified Service</span>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-2 text-md font-semibold text-[var(--color-subheading)]">
            <FaShieldAlt className="text-green-600 text-xl" />
            <span>Secure & Trusted</span>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-2 text-md font-semibold text-[var(--color-subheading)]">
            <FaCertificate className="text-green-600 text-xl" />
            <span>Certified Experts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import PopupForm from "./PopupForm";
import InlineForm from "./InlineForm";

// React Icons
import { FiClock, FiUsers } from "react-icons/fi";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const Hero1 = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };

  const items = [
    "MCA Compliant",
    "GST Registration Ready",
    "Bank Account Support",
    "Mail Forwarding",
  ];

  return (
    <section className="relative min-h-screen flex py-7 pb-6 items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      {/* Background effects */}
      <div className="absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

      <div className="container mt-30 mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <span className="bg-[#3196a5]/20 text-[#289165] border border-[#3196a5]/30 px-4 py-1 rounded-full text-sm font-bold">
                Go Live in 24 Hours
              </span>

              <h1 className="text-3xl md:text-4xl font-bold leading-tight py-2 text-gray">
                Get an{" "}
                <span className="bg-[var(--color-important)] bg-clip-text text-transparent">
                  MCA- & GST-Ready
                </span>{" "}
                Virtual Office Address in Any Indian City in 3 Days
              </h1>

              {/* Inline Bullet Points */}
              <p className="text-md font-semibold text-[var(--color-subheading)] max-w-xl text-left">
                Perfect for
                {/* List container */}
                <span className="mt-2 flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                    <FaStar className="text-[var(--color-important)] text-sm" />
                    GST registration
                  </span>

                  <span className="flex items-center gap-2">
                    <FaStar className="text-[var(--color-important)] text-sm" />
                    Bank account opening
                  </span>

                  <span className="flex items-center gap-2">
                    <FaStar className="text-[var(--color-important)] text-sm" />
                    MCA compliance
                  </span>
                </span>
                {/* Pricing section */}
                <div className="mt-3 flex items-center">
                  <span>Pricing Starts from</span>
                  <span className="font-bold ml-2 text-[var(--color-heading)]">
                    ₹650/month
                  </span>
                </div>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button
                onClick={() => handleOpenForm("Reserve My Address")}
                className="bg-[var(--cta-color)] cursor-pointer text-[var(--color-heading)] text-md px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Reserve My Address
              </button>

              <PopupForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                formTitle={formTitle}
              />

              {/* Clock Icon */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <FiClock className="text-[#3196a5]" size={18} />
                <span className="font-semibold">Setup in 24 hours</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 pt-8 border-t border-white/10">
              {/* Users Badge */}
              <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-2 py-1 rounded-full shadow-sm">
                <FiUsers className="text-[#3196a5]" size={18} />
                <span className="text-sm font-semibold">
                  Trusted by 500+ Indian founders
                </span>
              </div>

              {/* Stars + Rating */}
              <div className="flex items-center space-x-2 bg-yellow-100 px-2 py-1 rounded-full shadow-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" size={16} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-yellow-800">
                  4.9★ Google rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Side (Form + Feature Points) */}
          <div className="relative">
            <div className="rounded-2xl p-2 shadow-xl">
              {/* FORM BOX – Fixed height issue */}
              <div className="border bg-[#0c5c7c] rounded-xl p-1 flex items-center justify-center h-auto">
                <InlineForm />
              </div>

              {/* 4 Feature Points below form */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 bg-white/10 p-4 rounded-xl">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-lg" />
                    <span className="text-sm text-[var(--color-heading)] font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge top-right */}
            <div className="absolute -top-4 -right-4 bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full text-xs font-medium flex items-center space-x-1 shadow-md">
              <FaStar className="text-yellow-500" size={12} />
              <span>MCA Approved</span>
            </div>

            {/* Floating badge bottom-left */}
            <div className="absolute -bottom-4 -left-4 bg-green-100 text-green-800 px-3 py-2 rounded-full text-xs font-medium shadow-md">
              GST Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;

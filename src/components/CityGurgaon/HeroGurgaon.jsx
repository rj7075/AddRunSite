import { FaStar, FaBuilding, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import React from "react";

const HeroGurgaon = () => {
  return (
    <header className="relative h-screen pb-15 md:pt-10 pt-20 min-h-[600px] flex mt-30  md:mt-10 items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/hero-workspace.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Multi-layer Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/30 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 text-xs animate-fade-in">
          <FaStar className="h-3 w-3 text-yellow-400" />
          Trusted by 500+ Companies
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-0.7xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
          Flexible Coworking & Virtual Office
          <br />
          <span className="text-[#17CFBF]">
            Solutions for Modern Businesses
          </span>
        </h1>

        {/* Subtitle */}
        <p className="md:text-lg text-sm text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up">
          Choose from premium workspaces or register your business at prime
          locations across India. Flexible plans, transparent pricing, zero
          hassle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <button className="flex items-center text-sm gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg  px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
            <FaBuilding className="h-5 w-5" />
            Explore Coworking Spaces
          </button>

          <button className="flex text-sm items-center gap-2 bg-[#17CFBF] hover:bg-[#13b3a5] text-gray-900 shadow-lg  px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
            <FaFileAlt className="h-5 w-5" />
            Explore Virtual Offices
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white animate-fade-in-up">
          {[
            "50+ Locations",
            "No Hidden Charges",
            "Instant Setup",
            "Free Consultation",
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheckCircle className="h-5 w-5 text-[#17CFBF]" />
              <span className="text-xs">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroGurgaon;

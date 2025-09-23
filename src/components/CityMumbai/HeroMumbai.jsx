import {
  FaMapPin,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import PopupForm from "./Form";
import { useState, useEffect } from "react";

const Button = ({ variant, size, className, children, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    hero: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg",
    "cta-secondary":
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-md",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700",
  };

  const sizeClasses = {
    xl: "h-12 px-8 text-lg",
    sm: "h-9 px-4 text-sm",
  };

  const classes = `${baseClasses} ${variantClasses[variant] || ""} ${
    sizeClasses[size] || ""
  } ${className || ""}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

const HeroMumbai = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  return (
    <section className="relative bg-gradient-to-br mt-20 md:mt-10 from-blue-50 to-gray-100 py-16 lg:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 rounded-full -translate-y-48 translate-x-48" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Price Badge */}
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaAward className="h-4 w-4 mr-2" />
            Mumbai Elite Address — ₹19,499/year
            <span className="ml-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
              Limited launch pricing
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Business Address in Mumbai at the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lowest Price
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get a Virtual Office in Mumbai at a prestigious New Marine Lines
            address with a professional receptionist, meeting spaces, and full
            business support from{" "}
            <span className="text-green-600 font-semibold">₹19,499/year</span>.
          </p>

          {/* Core Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
              <FaPhone className="h-5 w-5 text-blue-600" />
              <span>Professional Receptionist</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
              <FaUsers className="h-5 w-5 text-blue-600" />
              <span>Meeting & Conference Rooms</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
              <FaShieldAlt className="h-5 w-5 text-blue-600" />
              <span>GST & Banking Ready</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => handleOpenForm("Reserve My Address")}
              variant="hero"
              size="xl"
              className="min-w-[200px]"
            >
              Reserve Mumbai Address
            </Button>
            <Button
              onClick={() => handleOpenForm("Reserve My Address")}
              variant="cta-secondary"
              size="xl"
              className="min-w-[180px]"
            >
              Compare Plans
            </Button>
            <PopupForm
              isOpen={isFormOpen}
              onClose={() => setIsFormOpen(false)}
              formTitle={formTitle}
            />
          </div>

          {/* Location Details */}
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto border border-gray-200">
            <div className="flex items-start space-x-4">
              <FaMapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Prime Mumbai Location
                </h3>
                <p className="text-gray-600 mb-3">
                  Jolly Bhavan 2, 3rd Floor, New Marine Lines, next to Nirmala
                  Niketan College — 1000 sq ft fully furnished office
                </p>
                <a
                  className="cursor-pointer"
                  target="_blank"
                  href="https://maps.app.goo.gl/WYNsiSi9yVU1WPmM8"
                  alt="location link"
                >
                  <Button
                    className="cursor-pointer"
                    variant="outline"
                    size="sm"
                  >
                    View on Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>10,000+ leads served</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100+ locations network</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>GST-ready documentation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMumbai;

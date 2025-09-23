import { useState } from "react";
import { FaBars, FaWhatsapp, FaTimes } from "react-icons/fa";

const Button = ({ variant, size, className, children, onClick, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    cta: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  const sizeClasses = {
    lg: "h-10 px-6 text-base",
    icon: "h-9 w-9",
  };

  const classes = `${baseClasses} ${variantClasses[variant] || ""} ${
    sizeClasses[size] || ""
  } ${className || ""}`;

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

const NavigationMumbai = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0E141B] backdrop-blur-sm border-b border-gray-200 pb-1">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600">
              <img className=" p-2 w-35 h-20" src="/logo.png" alt="Logo" />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <a
              href="#mumbai"
              className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Mumbai
            </a> */}
            <a
              href="#maharashtra"
              className="text-gray-200  transition-colors duration-200"
            >
              Maharashtra Cities
            </a>
            <a
              href="#pricing"
              className="text-gray-200 transition-colors duration-200"
            >
              Pricing
            </a>
            {/* <a
              href="#book"
              className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Book a Room
            </a>
            <a
              href="#contact"
              className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a> */}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block mb-1">
            <a
              href="https://wa.me/919907800600?text=Hello%20I%20Am%20Interested%20in%20Your%20Virtual%20Office%20Please%20Call%20me%20Back"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-full mt-4 bg-green-600 text-white p-2 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {/* <a
                href="#mumbai"
                className="text-gray-900 hover:text-blue-600 transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                Mumbai
              </a> */}
              <a
                href="#maharashtra"
                className="text-gray-200  transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                Maharashtra Cities
              </a>
              <a
                href="#pricing"
                className="text-gray-200  transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              {/* <a
                href="#book"
                className="text-gray-900 hover:text-blue-600 transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                Book a Room
              </a> */}
              {/* <a
                href="#contact"
                className="text-gray-900 hover:text-blue-600 transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a> */}
              <a
                href="https://wa.me/919907800600?text=Hello%20I%20Am%20Interested%20in%20Your%20Virtual%20Office%20Please%20Call%20me%20Back"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full mt-4 p-2 bg-green-600 text-white flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationMumbai;

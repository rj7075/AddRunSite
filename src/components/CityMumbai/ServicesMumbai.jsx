import {
  FaMapPin,
  FaUsers,
  FaFileAlt,
  FaClock,
  FaPhone,
  FaBuilding,
} from "react-icons/fa";

import { useState } from "react";
import PopupFormMumbai from "./Formmumbai";

const Button = ({ variant, size, className, children, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    pricing:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg",
    cta: "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 shadow-lg",
    "cta-secondary":
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-md",
  };

  const sizeClasses = {
    lg: "h-12 px-6 text-base",
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

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return <div className={`p-6 pb-4 ${className || ""}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return (
    <h3 className={`text-xl font-bold text-gray-900 ${className || ""}`}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className }) => {
  return <p className={`text-gray-600 ${className || ""}`}>{children}</p>;
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 pt-0 ${className || ""}`}>{children}</div>;
};

const ServicesMumbai = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  const services = [
    {
      title: "Mumbai Premium Business Address",
      icon: <FaBuilding className="h-8 w-8 text-blue-600" />,
      description: "Perfect for establishing your Registered Office in Mumbai",
      useCases: [
        "Virtual Office for GST/MCA Documentation",
        "Professional mail handling and forwarding",
        "Brand signage display at premium reception area",
        "Professional Receptionist for Call handling",
      ],
      price: "₹19,499/year",
      location: "Mumbai Premium",
      cta: "Get Mumbai Address",
      variant: "pricing",
      badge: "Most Popular",
    },
    {
      title: "Value Pack — GST Assist",
      icon: <FaFileAlt className="h-8 w-8 text-green-600" />,
      description:
        "Complete GST registration support with professional address",
      useCases: [
        "Virtual Office for GST/MCA Documentation",
        "CA fees included for online GST registration",
        "On-site representative for physical verification",
        "Support for GST registration and current account opening",
      ],
      price: "₹14,499/year",
      location: "Mumbai Location",
      cta: "Get Value Pack",
      variant: "cta",
      badge: "Best Value",
    },
    {
      title: "Flex Access",
      icon: <FaClock className="h-8 w-8 text-blue-600" />,
      description:
        "Hourly access to premium meeting spaces and workspace in Mumbai.",
      useCases: [
        "Hourly/day-pass access to meeting rooms",
        "12-seater conference room bookings",
        "Hot desk access in professional environment",
        "Available to all address holders after contact",
      ],
      price: "On Demand",
      location: "Mumbai Location",
      cta: "Book a Room",
      variant: "cta-secondary",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Business Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From basic Business Address in Mumbai to Virtual Office for GST
            Registration in Mumbai, we have the right package for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative ${
                service.badge === "Most Popular"
                  ? "ring-2 ring-blue-500/20"
                  : ""
              }`}
            >
              {service.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-semibold ${
                      service.badge === "Most Popular"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  {service.icon}
                  <div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <FaMapPin className="h-4 w-4 mr-1" />
                      {service.location}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{useCase}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {service.price}
                    </span>
                    {service.price !== "On Demand" && (
                      <span className="text-sm text-gray-500">
                        Starting from
                      </span>
                    )}
                  </div>

                  <Button
                    onClick={() => handleOpenForm("Reserve My Address")}
                    variant={service.variant}
                    size="lg"
                    className="w-full"
                  >
                    {service.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <PopupFormMumbai
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          formTitle={formTitle}
        />

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <FaPhone className="h-4 w-4 text-blue-600" />
            <span>Receptionist included</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFileAlt className="h-4 w-4 text-blue-600" />
            <span>GST-ready docs</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="h-4 w-4 text-blue-600" />
            <span>Lowest price promise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMumbai;

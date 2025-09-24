import { FaMapPin, FaBuilding, FaStar, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import PopupForm1 from "./PopupForm1";

const Button = ({ variant, size, className, children, disabled, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    cta: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg",
    "cta-secondary":
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-md",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700",
  };

  const sizeClasses = {
    lg: "h-12 px-6 text-base",
    sm: "h-9 px-4 text-sm",
  };

  const classes = `${baseClasses} ${variantClasses[variant] || ""} ${
    sizeClasses[size] || ""
  } ${className || ""}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return <div className={`p-6 pb-3 ${className || ""}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return (
    <h3 className={`font-bold text-gray-900 ${className || ""}`}>{children}</h3>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 pt-0 ${className || ""}`}>{children}</div>;
};

const MaharashtraMumbai = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(" ");

  // Open form with city prefilled
  const openForm = (city = "") => {
    setSelectedCity(city);
    setIsFormOpen(true);
  };
  const cities = [
    {
      name: "Mumbai",
      area: "New Marine Lines",
      price: "₹19,499/year",
      highlight: "Flagship Location",
      features: ["Premium address", "Receptionist", "Meeting rooms"],
      isFlagship: true,
    },
    {
      name: "Thane",
      area: "Business District",
      price: "₹11,499/year",
      highlight: "Growing Hub",
      features: [
        "Business address",
        "Mail handling",
        "Virtual Office Services",
      ],
    },
    {
      name: "Nagpur",
      area: "Central Business",
      price: "₹7,499/year",
      highlight: "Central Location",
      features: [
        "Strategic location",
        "GST support",
        "Professional Registered Office",
      ],
    },
    {
      name: "Pune",
      area: "IT Corridor",
      price: "₹11,499/year",
      highlight: "IT Hub",
      features: [
        "Virtual Workspace Solution",
        "Modern facilities",
        "Business support",
      ],
    },
    {
      name: "Nashik",
      area: "Commercial Zone",
      price: "₹9,499/year",
      highlight: "Wine Capital",
      features: ["Commercial address", "Documentation", "Support"],
    },
    {
      name: "Aurangabad",
      area: "Industrial Area",
      price: "₹9,499/year",
      highlight: "Industrial Hub",
      features: ["Industrial zone", "Business address", "GST ready"],
    },
    {
      name: "Kolhapur",
      area: "Business Center",
      price: "₹7,499/year",
      highlight: "Heritage City",
      features: ["Business district", "Professional address", "Support"],
    },
    {
      name: "More Locations",
      area: "Across Maharashtra",
      price: "Coming Soon",
      highlight: "Expanding Network",
      features: ["New cities", "Same quality", "Best prices"],
      isComingSoon: true,
    },
  ];

  return (
    <section id="maharashtra" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lowest-cost Virtual Offices Across Maharashtra
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Professional business addresses starting from{" "}
            <span className="text-green-600 font-semibold">₹7,499/year</span>
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <FaStar className="h-4 w-4 text-green-600" />
            <span>Same premium service quality across all locations</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cities.map((city, index) => (
            <Card
              key={city.name}
              className={`group relative ${
                city.isFlagship ? "ring-2 ring-blue-500/20" : ""
              } ${city.isComingSoon ? "opacity-75" : ""}`}
            >
              {city.isFlagship && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Flagship
                  </span>
                </div>
              )}

              {city.isComingSoon && (
                <div className="absolute -top-3 right-3">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    Coming Soon
                  </span>
                </div>
              )}

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <FaBuilding className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">{city.name}</CardTitle>
                  </div>
                  <FaArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <FaMapPin className="h-4 w-4 mr-1" />
                  {city.area}
                </div>
                <div className="text-sm text-green-600 font-medium mt-1">
                  {city.highlight}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {city.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-lg font-bold ${
                        city.isComingSoon ? "text-gray-500" : "text-gray-900"
                      }`}
                    >
                      {city.price}
                    </span>
                    {!city.isComingSoon && (
                      <span className="text-xs text-gray-500">
                        Starting from
                      </span>
                    )}
                  </div>

                  <Button
                    onClick={() => openForm(city.name)}
                    variant={
                      city.isFlagship
                        ? "cta"
                        : city.isComingSoon
                        ? "outline"
                        : "cta-secondary"
                    }
                    size="sm"
                    className="w-full"
                    disabled={city.isComingSoon}
                  >
                    {city.isComingSoon ? "Notify Me" : "See Address & Enquire"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <PopupForm1
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          initialCity={selectedCity} // Prefilled city from card or empty
        />

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find your city? We're expanding across Maharashtra.
          </p>
          <Button
            onClick={() => handleOpenForm("Reserve My Address")}
            variant="outline"
            size="lg"
          >
            Request New Location
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaharashtraMumbai;

import {
  FaCheck,
  FaMapPin,
  FaUsers,
  FaFileAlt,
  FaPhone,
  FaBuilding,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import PopupForm from "./Form";
import { useState } from "react";

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
  return <div className={`p-6 pb-6 ${className || ""}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return (
    <h3 className={`font-bold text-gray-900 ${className || ""}`}>{children}</h3>
  );
};

const CardDescription = ({ children, className }) => {
  return <p className={`text-gray-600 ${className || ""}`}>{children}</p>;
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 pt-0 ${className || ""}`}>{children}</div>;
};

const PricingMumbai = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  const plans = [
    {
      name: "Mumbai Premium Business Address",
      price: "₹19,499",
      period: "/year",
      description: "Complete business presence in Mumbai's prime location",
      features: [
        "Premium New Marine Lines business address",
        "Professional receptionist for call handling",
        "Brand name board displayed outside office",
        "Mail handling and forwarding service",
        "Basic compliance documentation for banking",
        "Access to 1000 sq ft furnished office space",
        "Professional meeting room access",
      ],
      cta: "Reserve Mumbai Address",
      badge: "Most Popular",
      icon: <FaBuilding className="h-6 w-6" />,
      variant: "pricing",
    },
    {
      name: "Value Pack (GST Assist)",
      price: "₹9,499",
      period: "/year",
      description:
        "Complete GST registration support with business address for Non-Mumbai Locations",
      features: [
        "Business address across Maharashtra cities",
        "CA fees included for online GST registration",
        "On-site representative for physical verification",
        "Support for GST registration process",
        "Bank current account opening assistance",
        "Complete address documentation package",
        "Professional mail handling service",
      ],
      cta: "Get GST Assist",
      badge: "Best Value",
      icon: <FaFileAlt className="h-6 w-6" />,
      variant: "cta",
    },
    {
      name: "Maharashtra Starter",
      price: "₹7,499",
      period: "/year",
      description: "Basic business address solution across select cities",
      features: [
        "Business address in select Maharashtra cities",
        "Professional mail handling service",
        "Basic compliance documentation",
        "Address verification support",
        "Professional business letterhead usage",
        "GST registration address eligibility",
        "Email and phone support",
      ],
      cta: "Browse Cities",
      icon: <FaMapPin className="h-6 w-6" />,
      variant: "cta-secondary",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-gray-100"
    >
      <div className="container mt-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing, Maximum Value
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Choose the perfect plan for your business needs. No hidden charges,
            no deposits required.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="h-4 w-4 text-green-600" />
              <span>GST-ready docs</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="h-4 w-4 text-green-600" />
              <span>Receptionist included</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="h-4 w-4 text-green-600" />
              <span>Lowest price promise</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.badge === "Most Popular"
                  ? "ring-2 ring-blue-500/20 scale-105"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                      plan.badge === "Most Popular"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {plan.description}
                </CardDescription>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-lg text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    No setup fees • Cancel anytime
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <FaCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Button
                    onClick={() => handleOpenForm("Reserve My Address")}
                    variant={plan.variant}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Instant activation • Professional support included
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <PopupForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          formTitle={formTitle}
        />

        {/* Additional Trust Elements */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Why Asset Sense Workspaces?
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm">
              <div className="space-y-2">
                <FaUsers className="h-6 w-6 text-blue-600 mx-auto" />
                <div className="font-medium">10,000+ Businesses Served</div>
                <div className="text-gray-600">
                  Trusted by SMEs across Maharashtra
                </div>
              </div>
              <div className="space-y-2">
                <FaShieldAlt className="h-6 w-6 text-blue-600 mx-auto" />
                <div className="font-medium">100% Compliance Ready</div>
                <div className="text-gray-600">
                  GST, banking, and legal documentation
                </div>
              </div>
              <div className="space-y-2">
                <FaPhone className="h-6 w-6 text-blue-600 mx-auto" />
                <div className="font-medium">Professional Support</div>
                <div className="text-gray-600">
                  Dedicated receptionist and call handling
                </div>
              </div>
              <div className="space-y-2">
                <FaBuilding className="h-6 w-6 text-blue-600 mx-auto" />
                <div className="font-medium">Premium Locations</div>
                <div className="text-gray-600">
                  Prime business addresses across cities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingMumbai;

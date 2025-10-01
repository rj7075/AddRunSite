import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Daily Pass",
    price: "₹499",
    period: "per day",
    features: [
      "Hot desk access",
      "High-speed WiFi",
      "Free coffee & tea",
      "Printing credits",
      "Lounge access",
    ],
    popular: false,
  },
  {
    name: "Monthly Desk",
    price: "₹6,999",
    period: "per month",
    features: [
      "Dedicated desk",
      "24/7 access",
      "High-speed WiFi",
      "Unlimited coffee & tea",
      "Meeting room hours (5hrs/month)",
      "Mail handling",
      "Locker storage",
    ],
    popular: true,
  },
  {
    name: "Meeting Room",
    price: "₹399",
    period: "per hour",
    features: [
      "Private meeting space",
      "Display screen",
      "Whiteboard",
      "Video conferencing setup",
      "Complimentary refreshments",
    ],
    popular: false,
  },
];

const PricingPlan = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-25 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your work style and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-500 shadow-xl scale-105"
                  : "border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-600">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;

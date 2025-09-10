// Pricing.jsx
const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹7499",
      period: "/year",
      description: "Perfect for freelancers and small businesses",
      features: [
        "Virtual Office Address for GST/MCA Reg",
        "Professional Business Address",
        "Mail Handling & Forwarding",
        "Courier Handling",
        // "GST Registration Support",
        "Email Support",
      ],
      popular: false,
      cta: "Get Started",
      link: "https://inkpot.tech/checkouts/assetsense-virtual-office-registration-7499/",
    },
    {
      name: "Professional",
      price: "₹9499",
      period: "/year",
      description: "Ideal for growing businesses and startups",
      features: [
        "Everything in Starter",
        "Online Submission of GST Application (worth ₹5000 )",
        "Representative for Signing on Behalf of Client (GST/Current Account in Bank).",
        // "Mail Scanning & digital delivery",
        "Meeting Room Starting @₹200/hour",
        "Priority support",
        "Business Registration Assistance",
      ],
      popular: true,
      cta: "Get Started",
      link: "https://inkpot.tech/checkouts/assetsense-virtual-office-registration-9499/",
    },
    {
      name: "Enterprise",
      price: "₹11499",
      period: "/year",
      description: "Complete solution for established companies",
      features: [
        "Everything in Professional",
        "Multiple Location Addresses PPOB/APOB",
        // "Meeting Room access @Multiple Locations",
        "Unlimited Meeting Room Access",
        "Dedicated Account Manager",
        "Phone Support",
        "Virtual Office in Grade A Building",
        "Legal Compliance Consulting",
      ],
      popular: false,
      cta: "Get Started",
      link: "https://inkpot.tech/checkouts/assetsense-virtual-office-registration-11499/",
    },
  ];

  // Custom SVG Icons
  const CheckCircle = () => (
    <svg
      className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ArrowRight = () => (
    <svg
      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );

  const Crown = () => (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.967.744L14.146 7.2 17 8.134a1 1 0 010 1.732l-2.854 1.134-1.18 4.455a1 1 0 01-1.933 0L9.854 10.2 7 8.134a1 1 0 010-1.732l2.854-1.134 1.18-4.455A1 1 0 0112 2z"
        clipRule="evenodd"
      />
    </svg>
  );

  const Zap = () => (
    <svg
      className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );

  return (
    <section className="py-20 lg:py-32 bg-[#0E141B]" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-200">
            Choose Your <span className="text-blue-600">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Money back if GST gets
            rejected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#32363b] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${
                plan.popular ? "ring-2 ring-blue-500 shadow-blue-200" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-2 flex items-center space-x-2">
                    <Crown />
                    <span className="text-sm font-semibold text-gray-200">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-300">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-purple-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={plan.link} target="_blank">
                <button
                  className={`w-full py-4 text-lg font-semibold rounded-lg group ${
                    plan.popular
                      ? "bg-gradient-to-r mt-2 from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-shadow"
                      : "bg-gray-100 text-gray-900 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white transition-all"
                  }`}
                >
                  <span className="flex items-center justify-center">
                    {plan.cta}
                    {plan.popular ? <Zap /> : <ArrowRight />}
                  </span>
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-[#242c35] rounded-2xl p-8 max-w-4xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              All Plans Include
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
  <div className="flex justify-start items-center text-left space-x-2">
    <CheckCircle />
    <span>No Setup Fees</span>
  </div>
  <div className="flex justify-start items-center text-left space-x-2">
    <CheckCircle />
    <span>Cancel Anytime</span>
  </div>
  <div className="flex justify-start items-center text-left space-x-2">
    <CheckCircle />
    <span>30-Day Money Back</span>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

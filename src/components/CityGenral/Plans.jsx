export default function Plans({ plans }) {
  return (
    <div className="py-16 bg-[#1C398E]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-200 font-bold text-center mb-12">
          Choose a Virtual Office based on your needs
        </h2>

        <div className="grid grid-cols-1 bg-[#26335a] md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  {plan.name}
                </h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button pinned at bottom */}
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1C398E] rounded-lg p-8 text-center">
          <h3 className="text-2xl text-gray-200 font-bold mb-4">
            Looking for a customised solution?
          </h3>
          <p className="text-gray-300 mb-6">Connect with our experts now.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              "Permanent signage",
              "Fixed Seat",
              "Day Pass",
              "Meeting Room hours",
            ].map((service, index) => (
              <span
                key={index}
                className="bg-[#2a3450] px-4 py-2 text-gray-300 rounded-full shadow-sm"
              >
                ✓ {service}
              </span>
            ))}
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Experts
          </button>
        </div>
      </div>
    </div>
  );
}

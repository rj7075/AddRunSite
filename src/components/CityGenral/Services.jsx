// src/components/Services.jsx
export default function Services({ services }) {
  // Service icons mapping - you can replace these with actual image paths
  const serviceIcons = {
    "Premium business address": "🏢",
    "End-to-end handling": "📦",
    "Business representation": "👔",
    "Fast document turnaround": "⚡",
    "Business call forwarding": "📞",
  };

  return (
    <div className="py-16 bg-[#1C398E]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-200 font-bold text-center mb-12">
          All services you get with Asset Sense Virtual Office
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Get access to a cost-effective virtual office to take your business to
          new cities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#364266] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-gray-300 mr-4">
                  {serviceIcons[service.title] || "📋"}
                </div>
                <h3 className="text-xl text-gray-400 font-semibold">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1C398E] rounded-xl p-8">
          <h3 className="text-2xl text-gray-200 font-bold text-center mb-8">
            Why Choose Our Virtual Office Services?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-[#464d64] p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-400">Virtual Office clients</div>
            </div>
            <div className="bg-[#464d64] p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-400">Prime locations</div>
            </div>
            <div className="bg-[#464d64] p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-400">Support available</div>
            </div>
          </div>
        </div>

        {/* Additional information section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join hundreds of businesses that have established their presence
            with our virtual office solutions.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Get Your Virtual Office Today
          </button>
        </div>
      </div>
    </div>
  );
}

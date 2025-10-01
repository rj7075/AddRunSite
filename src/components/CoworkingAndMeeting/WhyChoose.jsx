import {
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiShield,
  FiCoffee,
  FiHeadphones,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiTrendingUp,
    title: "Boost Your Productivity",
    description:
      "Professionally designed workspaces that enhance focus and creativity, helping you accomplish more in less time.",
  },
  {
    icon: FiUsers,
    title: "Network & Collaborate",
    description:
      "Connect with like-minded professionals, entrepreneurs, and businesses. Build valuable relationships that grow your career.",
  },
  {
    icon: FiZap,
    title: "Flexible & Cost-Effective",
    description:
      "No long-term leases or overhead costs. Scale up or down as needed. Pay only for the space and time you use.",
  },
  {
    icon: FiShield,
    title: "Professional Business Address",
    description:
      "Enhance your brand credibility with a prestigious business address in prime locations across major cities.",
  },
  {
    icon: FiCoffee,
    title: "Premium Amenities Included",
    description:
      "High-speed WiFi, printing, unlimited coffee/tea, ergonomic furniture, and modern facilities—all included in your membership.",
  },
  {
    icon: FiHeadphones,
    title: "Hassle-Free Work Environment",
    description:
      "Focus on your work while we handle maintenance, utilities, cleaning, and security. Everything taken care of for you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-900">
            Why Choose Our Coworking & Meeting Rooms?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform the way you work with flexible workspaces designed for
            success. Experience the perfect blend of productivity, networking,
            and cost savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 max-w-4xl shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Save up to 70% compared to traditional office spaces
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              No deposits, no hidden charges, no maintenance headaches. Just
              flexible, affordable workspace solutions that grow with your
              business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="text-center px-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Locations</div>
              </div>
              <div className="text-center px-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10k+
                </div>
                <div className="text-sm text-gray-600">Happy Members</div>
              </div>
              <div className="text-center px-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
              <div className="text-center px-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { FaCheck, FaTimes } from "react-icons/fa";

const ComparisonTable = () => {
  const features = [
    { name: "Physical Workspace", coworking: true, virtual: false },
    { name: "Business Address", coworking: true, virtual: true },
    { name: "GST & Company Registration", coworking: true, virtual: true },
    { name: "Mail & Call Handling", coworking: true, virtual: true },
    { name: "Meeting Rooms", coworking: true, virtual: false },
    { name: "Networking Opportunities", coworking: true, virtual: false },
    { name: "24/7 Access", coworking: true, virtual: false },
    { name: "Cost per Month", coworking: "₹8,000+", virtual: "₹1,500+" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose What Fits Your Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare our services side-by-side and find the perfect solution for
            your business
          </p>
        </div>

        <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
                    Coworking Space
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#18CBBF]">
                    Virtual Office
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.coworking === "boolean" ? (
                        feature.coworking ? (
                          <FaCheck className="h-5 w-5 text-blue-600 mx-auto" />
                        ) : (
                          <FaTimes className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm font-semibold text-blue-600">
                          {feature.coworking}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.virtual === "boolean" ? (
                        feature.virtual ? (
                          <FaCheck className="h-5 w-5 text-[#18CBBF] mx-auto" />
                        ) : (
                          <FaTimes className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm font-semibold text-[#18CBBF]">
                          {feature.virtual}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Not sure which option is right for you?{" "}
            <a
              href="#contact"
              className="text-blue-600 font-semibold hover:underline"
            >
              Get in touch with our experts
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

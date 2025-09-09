import {
  FaShieldAlt,
  FaCity,
  FaRupeeSign,
  FaBolt,
  FaUndo,
} from "react-icons/fa";

// Mock data for highlights - replace with your actual data
const highlights = [
  {
    icon: <FaShieldAlt className="text-purple-400 text-2xl" />,
    title: "Secure Locations",
    desc: "All our virtual offices are in secure business districts",
  },
  {
    icon: <FaShieldAlt className="text-purple-400 text-2xl" />,
    title: "24/7 Access",
    desc: "Access your virtual office anytime from anywhere",
  },
  {
    icon: <FaShieldAlt className="text-purple-400 text-2xl" />,
    title: "Mail Handling",
    desc: "Professional mail reception and forwarding services",
  },
  {
    icon: <FaShieldAlt className="text-purple-400 text-2xl" />,
    title: "Business Address",
    desc: "Prestigious address for your business correspondence",
  },
  // {
  //   icon: <FaCity className="text-blue-400 text-2xl" />,
  //   title: "40+ Cities",
  //   desc: "Virtual offices across India’s major business hubs",
  // },
  {
    icon: <FaRupeeSign className="text-green-400 text-2xl" />,
    title: "Affordable Plans",
    desc: "Starting at just ₹499/month with flexible options",
  },
  {
    icon: <FaBolt className="text-yellow-400 text-2xl" />,
    title: "Quick Setup",
    desc: "Paperless documentation in less than 24 hours",
  },
  // {
  //   icon: <FaShieldAlt className="text-purple-400 text-2xl" />,
  //   title: "Reliable Service",
  //   desc: "Trusted by 500+ businesses nationwide",
  // },
  {
    icon: <FaUndo className="text-red-400 text-2xl" />,
    title: "Money-Back Guarantee",
    desc: "Full refund if you’re not satisfied",
  },
];

const Address1 = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* First Column */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#243E4C] w-full p-4 sm:p-6 rounded-xl shadow-md h-full">
            <h3 className="text-lg sm:text-xl text-white font-semibold mb-4">
              40+ Cities Virtual offices across India's major business hubs
            </h3>

            <div className="relative pt-[56.25%] bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/location1.png"
                alt="Virtual office location"
              />
            </div>

            <p className="text-gray-300 flex gap-2 items-start mb-4">
              <FaShieldAlt className="text-purple-400 text-xl mt-1 flex-shrink-0" />
              <span className="text-sm sm:text-base">
                Reliable Service Trusted by 500+ businesses nationwide
              </span>
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm text-center">
                Prime Location
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm text-center">
                Affordable Price
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs sm:text-sm text-center">
                Virtual Office Near You
              </span>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full lg:w-1/2">
          <section className="bg-[#0E141B] mt-6 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 p-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 sm:p-5 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                {item.icon}
                <h3 className="text-white font-semibold mt-3 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Address1;

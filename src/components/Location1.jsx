const Locations = () => {
  const locations = [
    {
      city: "Mumbai",
      area: "Bandra Kurla Complex",
      addresses: 15,
      popular: true,
    },
    {
      city: "Delhi",
      area: "Connaught Place",
      addresses: 12,
      popular: true,
    },
    {
      city: "Gurgaon",
      area: "Golf Course Extn. Road",
      addresses: 18,
      popular: false,
    },
    {
      city: "Noida",
      area: "Sector 62",
      addresses: 10,
      popular: false,
    },
    {
      city: "Chennai",
      area: "OMR IT Corridor",
      addresses: 8,
      popular: false,
    },
    {
      city: "Pune",
      area: "Hinjewadi",
      addresses: 14,
      popular: false,
    },
    {
      city: "Kolkata",
      area: "Salt Lake City",
      addresses: 9,
      popular: false,
    },
    {
      city: "Gift City",
      area: "Swagat Twincity Highstreet",
      addresses: 7,
      popular: false,
    },
  ];

  // Custom SVG Icons
  const MapPin = () => (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
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

  const Building = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );

  return (
    <section className="py-20 lg:py-32 bg-[#0E141B]" id="locations">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-200">
            Other Locations for your
            <br />
            <span className="text-blue-600">Virtual Office</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Establish your business presence in prime commercial locations
            across India's major business hubs. All addresses are legally
            compliant and professionally managed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`bg-[#2b2d30] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer ${
                location.popular ? "ring-2 ring-blue-300" : ""
              }`}
            >
              {location.popular && (
                <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  Popular
                </div>
              )}

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                  <MapPin />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 text-gray-300">
                    {location.city}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{location.area}</p>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Building />
                    <span className="text-sm font-medium">
                      {location.addresses} Addresses
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       <div className="items-center flex justify-center">
        <button className="bg-[#5CC6EC]  text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#267985] hover:to-green-600 transform hover:-translate-y-1">
          City of My Choice
        </button>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center">
          <div className="bg-[#0E141B] rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-md">
            <h3 className="text-3xl font-bold mb-6 text-purple-600">
              It's Time To Grow
              <br />
              Your Business -
              <span className="text-blue-600"> Contact Us For More Info</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to establish your professional presence? Our team will help
              you choose the perfect location and get your virtual office set up
              in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow group min-w-[200px] flex items-center justify-center">
                Get Started Now
                <ArrowRight />
              </button>
              <button className="border border-gray-300 bg-white text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors min-w-[200px]">
                Schedule Consultation
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Free Consultation</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>24-Hour Setup</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>No Hidden Costs</span>
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Locations;

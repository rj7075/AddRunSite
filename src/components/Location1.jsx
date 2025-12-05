import { useState } from "react";
import PopupForm from "./PopupForm"; // Make sure this path is correct

const Locations = () => {
  const locations = [
    {
      city: "Mumbai",
      area: "Bandra Kurla Complex",
      addresses: 15,
      popular: true,
    },
    { city: "Delhi", area: "Connaught Place", addresses: 12, popular: true },
    {
      city: "Gurgaon",
      area: "Golf Course Extn. Road",
      addresses: 18,
      affordable: true,
    },
    { city: "Noida", area: "Sector 62", addresses: 10, affordable: true },
    { city: "Chennai", area: "OMR IT Corridor", addresses: 8 },
    { city: "Pune", area: "Hinjewadi", addresses: 14 },
    { city: "Kolkata", area: "Salt Lake City", addresses: 9 },
    { city: "Gift City", area: "Swagat Twincity Highstreet", addresses: 7 },
  ];

  // Popup state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  // Open form with city prefilled
  const openForm = (city = "") => {
    setSelectedCity(city);
    setIsFormOpen(true);
  };

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
    <section
      className="py-20 lg:py-32 bg-[var(--color-primary)]"
      id="locations"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-heading)]">
            Choose Your City for
            <br />
            <span className="text-[var(--color-important)]">
              Virtual Office
            </span>
          </h2>
          <p className="text-md font-semibold text-[var(--color-subheading)] max-w-3xl mx-auto">
            Establish your business presence in prime commercial locations
            across India's major business hubs. All addresses are legally
            compliant and professionally managed.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl  mx-auto mb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              onClick={() => openForm(location.city)}
              className={`bg-[var(--color-secondary)] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer ${
                location.popular ? "ring-2 ring-blue-300" : ""
              }`}
            >
              {location.popular && (
                <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  Popular
                </div>
              )}
              {location.affordable && (
                <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  Affordable
                </div>
              )}

              <div className="flex items-start space-x-1 ">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                  <MapPin />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 px-1 text-[var(--color-heading)]">
                    {location.city}
                  </h3>

                  <p className="text-[var(--color-subheading)] text-sm mb-3">
                    {location.area}
                  </p>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Building />
                    <span className="text-sm font-medium">
                      {location.addresses} Addresses
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => openForm("")}
                  className="cursor-pointer bg-[var(--cta-color)] border border-gray-700 text-[var(--color-heading)] hover:text-gray-800 hover:bg-[#66D9FF] px-3 py-1.5 rounded-md text-sm transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* City of My Choice Button */}
        <div className="flex justify-center">
          <button
            onClick={() => openForm("")} // Open popup with empty city for custom input
            className="bg-[var(--cta-color)] cursor-pointer text-[var(--color-heading)] text-md px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#267985] hover:to-green-600 transform hover:-translate-y-1"
          >
            City of My Choice
          </button>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        initialCity={selectedCity} // Prefilled city from card or empty
      />
    </section>
  );
};

export default Locations;

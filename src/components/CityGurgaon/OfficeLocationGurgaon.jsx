import { useState } from "react";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import LocationCard from "./LocationCard";
import coworkingImage from "/coworking-feature.png";
import virtualOfficeImage from "/virtual-office.png";
import heroImage from "/hero-workspace.png";

const OfficeLocationsGurgaon = () => {
  const [activeTab, setActiveTab] = useState("coworking");

  const coworkingLocations = [
    {
      name: "Business District Hub",
      location: "Connaught Place, Delhi",
      image: coworkingImage,
      type: "coworking",
      capacity: "50-100 seats",
      price: "₹8,000+",
      features: [
        "High-speed WiFi & Printing",
        "Meeting Rooms Available",
        "24/7 Access",
        "Coffee & Refreshments",
      ],
    },
    {
      name: "Tech Park Center",
      location: "Whitefield, Bangalore",
      image: heroImage,
      type: "coworking",
      capacity: "30-80 seats",
      price: "₹9,500+",
      features: [
        "Private Cabins",
        "Conference Rooms",
        "Gaming Zone",
        "Parking Available",
      ],
    },
    {
      name: "Cyber City Plaza",
      location: "Gurgaon, Haryana",
      image: virtualOfficeImage,
      type: "coworking",
      capacity: "40-90 seats",
      price: "₹10,000+",
      features: [
        "Premium Location",
        "Event Space",
        "Cafeteria",
        "Metro Connectivity",
      ],
    },
    {
      name: "Innovation Square",
      location: "Andheri, Mumbai",
      image: coworkingImage,
      type: "coworking",
      capacity: "60-120 seats",
      price: "₹11,000+",
      features: [
        "Modern Infrastructure",
        "Networking Events",
        "Lounge Area",
        "Reception Services",
      ],
    },
  ];

  const virtualOfficeLocations = [
    {
      name: "Prime Business Address",
      location: "Connaught Place, Delhi",
      image: virtualOfficeImage,
      type: "virtual",
      price: "₹1,500+",
      features: [
        "GST Registration Support",
        "Mail Handling & Scanning",
        "Professional Address",
        "Meeting Room (2 hrs/month)",
      ],
    },
    {
      name: "Corporate Tower",
      location: "BKC, Mumbai",
      image: heroImage,
      type: "virtual",
      price: "₹2,500+",
      features: [
        "Prestigious Location",
        "Call Forwarding",
        "Company Registration",
        "Legal Documentation",
      ],
    },
    {
      name: "Tech Hub Address",
      location: "Electronic City, Bangalore",
      image: coworkingImage,
      type: "virtual",
      price: "₹1,800+",
      features: [
        "Business Address",
        "Mail Management",
        "Reception Services",
        "Meeting Room Access",
      ],
    },
    {
      name: "Business Center",
      location: "DLF Phase 5, Gurgaon",
      image: virtualOfficeImage,
      type: "virtual",
      price: "₹2,000+",
      features: [
        "Prime Corporate Address",
        "Professional Mail Handling",
        "Phone Answering",
        "Workspace Access",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-sm font-medium mb-4">
            Our Locations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Workspace
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our premium locations across major cities. Whether you
            need a physical workspace or a virtual office, we've got you
            covered.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="w-full">
          <div className="flex w-full max-w-md mx-auto rounded-lg bg-gray-100 p-1 mb-8">
            <button
              onClick={() => setActiveTab("coworking")}
              className={`flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "coworking"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <FaBuilding className="h-4 w-4" />
              Coworking Spaces
            </button>
            <button
              onClick={() => setActiveTab("virtual")}
              className={`flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "virtual"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <FaMapMarkerAlt className="h-4 w-4" />
              Virtual Offices
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === "coworking" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {coworkingLocations.map((location, index) => (
                  <LocationCard key={index} {...location} />
                ))}
              </div>
            )}

            {activeTab === "virtual" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {virtualOfficeLocations.map((location, index) => (
                  <LocationCard key={index} {...location} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationsGurgaon;

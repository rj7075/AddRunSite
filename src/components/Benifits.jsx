import React from "react";
import { useState } from "react";

const Benifits = () => {
  const [openItems, setOpenItems] = useState([]);

  const audiences = [
    {
      title: "Conventional Office Rentals",

      description:
        "Perfect for new businesses that need a professional address without the overhead of physical office space.",
      detailsloss: [" High Rentals", "Security", "Lock-in"],

      subtitle: "Virtual Office",
      detailsbenifit: [
        "Save 95% in Annual Office Rentals",
        "No Security",
        "No Lock-in ",
      ],
    },
    {
      title: "Multiple-Window System",

      description:
        "Essential for e-commerce sellers who need GST registration across multiple states.",
      detailsloss: [
        "NOC for GST / MCA",
        "Electricity Bill",
        " Current Account Physical Verification",
      ],
      subtitle: "Single -window service in Virtual Office",
      detailsbenifit: [
        "24 Hrs Turn- around time for NOC",
        "All utility bills from single window",
        " Authorized Representaive for Physical Verification ",
      ],
    },
    {
      title: " Conventional GST online filing",

      description:
        "Ideal for independent professionals who need a corporate presence.",
      detailsloss: [
        "High CA Fees upto ₹ .5000/-",
        "Upto 15 days for getting ARN",
        "No Customer Support",
      ],
      subtitle: "GST filing at Asset Sense",
      detailsbenifit: [
        "Free of Cost",
        "24 hrs Turn-around time for getting ARN",
        "Robust Customer Support",
      ],
    },
    {
      title: " Client Meetings",

      description:
        "Perfect for international businesses entering the Indian market.",
      detailsloss: [
        "Unprofessional places like coffee shop",
        "High Cost in case of office set-up",
        "No option for Booking",
      ],
      subtitle: "Meeting room from Asset Sense Workspaces",
      detailsbenifit: [
        "On Demand Meeting Rooms ",
        "Grade A Buildings in your city",
        "Book in advace ",
      ],
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // SVG Icons for each category
  const iconComponents = [
    // Users icon (Start-ups & SMEs)
    <svg
      key="users"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3196a5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>,
    // Shopping Cart icon (Amazon/Flipkart Sellers)
    <svg
      key="cart"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3196a5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>,
    // Briefcase icon (Consultants & Freelancers)
    <svg
      key="briefcase"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3196a5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>,
    // Globe icon (Global Companies)
    <svg
      key="globe"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3196a5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>,
  ];

  // Chevron Down icon
  const ChevronDown = ({ isOpen }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3196a5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <section className="py-20 relative bg-[var(--color-primary)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            Is This For You?
          </h2>
          <p className="text-xl md:text-sm text-gray-200 max-w-2xl mx-auto">
            Perfect for businesses of all sizes looking for professional
            presence without the overhead
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={index}
                className="border border-gray-600 rounded-xl overflow-hidden bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="p-6 cursor-pointer group"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        {iconComponents[index]}
                      </div>

                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-200">
                          {audience.title}
                        </h3>
                        {/* <p className="text-sm text-gray-300">
                          {audience.subtitle}
                        </p> */}
                      </div>
                    </div>

                    <ChevronDown isOpen={isOpen} />
                  </div>

                  {/* <p className="text-gray-300 mt-4 text-left">
                    {audience.description}
                  </p> */}
                  <div className="bg-gray-900 p-4">
                    <ul className="space-y-2">
                      {audience.detailsloss.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          {/* <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> */}
                          {/* <i class="fas fa-check-circle text-green-500 mr-3"></i> */}
                          <i class="fas fa-times-circle text-red-500 mr-3"></i>

                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="bg-[#49925b] cursor-pointer mt-3 text-gray-100 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-lg font-semibold text-base sm:text-sm hover:bg-gray-100 hover:text-gray-700 transition w-full sm:w-auto">
                    Click Here To Solve
                  </button>
                </div>

                {isOpen && (
                  <div className="bg-[var(--color-primary)] border-t border-blue-100 p-4">
                    <h3 className="font-semibold px-2 py-2 text-lg text-gray-200">
                      {audience.subtitle}
                    </h3>
                    <ul className="space-y-2">
                      {audience.detailsbenifit.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          {/* <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> */}
                          <i class="fas fa-check-circle text-green-500 mr-3"></i>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benifits;

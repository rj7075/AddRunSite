import React from "react";
import { useState } from "react";
import { FaBuilding, FaUsers } from "react-icons/fa";
import { TbWindow } from "react-icons/tb"; // Tabler Window Icon
import { MdGroups } from "react-icons/md"; // Client meeting (group of people)
import { FaFileInvoice } from "react-icons/fa"; // GST filing / invoice
import { HiXCircle } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi2";

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
        "No Security / No Lock-in",
        "Fully Legal in India",
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
        "High CA Fees upto ₹5000/-",
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

  const iconComponent = [
    <FaBuilding size={24} color="#3196a5" />, // Building
    <TbWindow size={24} color="#3196a5" />, // Window
    <FaFileInvoice size={24} color="#3196a5" />, // Online GST Filing
    <MdGroups size={24} color="#3196a5" />, // Client Meeting
  ];

  // SVG Icons for each category

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-heading)]">
            Is This{" "}
            <span className="text-[var(--color-important)]">For You ?</span>
          </h2>
          <p className="text-xl md:text-xl text-[var(--color-subheading)] font-semibold max-w-2xl mx-auto">
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
                className="border border-gray-600 rounded-xl overflow-hidden bg-[var(--color-secondary)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="p-3 cursor-pointer group"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        {iconComponent[index]}
                      </div>

                      <div className="text-left bg-[var(--color-secondary)]">
                        <h3 className="font-semibold text-lg text-gray-600">
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
                  <div className="bg-[var(--color-secondary)] p-3">
                    <ul className="space-y-2">
                      {audience.detailsloss.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <HiXCircle className="text-red-500 text-xl" />

                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="hover:bg-[#49925b] text-gray-900 bg-gray-300 cursor-pointer mt-3 hover:text-gray-100 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-lg font-semibold text-base sm:text-sm transition w-full sm:w-auto">
                    [How to Solve] ↓
                  </button>
                </div>

                {isOpen && (
                  <div className="bg-[#fff] border-t border-blue-300 p-4">
                    <h3 className="font-semibold px-2 py-2 text-lg text-gray-900">
                      {audience.subtitle}
                    </h3>
                    <ul className="space-y-2">
                      {audience.detailsbenifit.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center gap-2 px-2 text-sm text-gray-700"
                        >
                          {/* <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> */}
                          <HiCheckCircle className="text-green-500 text-xl" />

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

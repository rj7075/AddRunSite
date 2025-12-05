import React, { useState } from "react";
import PopupForm from "./PopupForm";
import {
  FaCity,
  FaRupeeSign,
  FaBolt,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

const Address = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  const highlights = [
    // {
    //   icon: <FaCity className="text-blue-400 text-2xl" />,
    //   title: "40+ Cities",
    //   desc: "Virtual offices across India’s major business hubs",
    // },
    {
      icon: <FaRupeeSign className="text-green-400 text-2xl" />,
      title: "Affordable Plans",
      desc: "Starting at just ₹650/month with flexible options",
    },
    {
      icon: <FaBolt className="text-yellow-400 text-2xl" />,
      title: "Quick Setup",
      desc: [
        "Three Step Setup",
        "1. Click on [RESERVE MY ADDRESS]",
        "2. Enter the city of your choice",
        "3. Send your KYC documents",
      ],
    },
    // {
    //   icon: <FaShieldAlt className="text-purple-400 text-2xl" />,
    //   title: "Reliable Service",
    //   desc: "Trusted by 500+ businesses nationwide",
    // },
    {
      icon: <FaUndo className="text-red-400 text-2xl" />,
      title: "Money-Back Guarantee",
      desc: "In case your GST get rejected then get your Money Back ",
    },
  ];
  return (
    <div>
      <section class="py-16 bg-[var(--color-primary)]">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-[var(--color-heading)] mb-4">
            Your{" "}
            <span className="text-[var(--color-important)]">Legal Address</span>
          </h2>
          <p class="text-md text-center text-[var(--color-subheading)] font-semibold mb-12">
            Pick a City of your choice from more than 40+ locations in India
          </p>

          <div className="min-h-screen bg-[var(--color-primary)] py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* First Column */}
              <div className="w-full lg:w-1/2">
                <div className="bg-[var(--color-secondary)] w-full p-4 sm:p-6 rounded-xl shadow-md h-full">
                  <h3 className="text-lg sm:text-xl text-[var(--color-subheading)] font-semibold mb-4">
                    Virtual offices in 40+ Cities across India
                  </h3>

                  <div className="relative h-64 sm:h-80 md:h-75 lg:h-72 bg-[var(--color-secondary)] rounded-lg mb-4 overflow-hidden">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src="/location2.webp"
                      alt="Virtual office location"
                    />
                  </div>

                  <p className="text-[var(--color-subheading)] flex gap-2 items-start mb-4">
                    <FaShieldAlt className="text-purple-700 text-xl mt-1 flex-shrink-0" />
                    <span className="text-md text-[var(--color-subheading)] font-semibold">
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
                <section className="bg-transparant mt-6 lg:mt-0 rounded-medium grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 p-2">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[var(--color-secondary)] p-4 sm:p-5 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
                    >
                      {item.icon}
                      <h3 className="text-[var(--color-heading)] font-semibold mt-3 text-sm sm:text-base">
                        {item.title}
                      </h3>
                      {/* <p className="text-gray-300 text-xs sm:text-sm mt-1">
                        {item.desc}
                      </p> */}
                      {Array.isArray(item.desc) ? (
                        <ul className="list-inside space-y-1 text-left text-sm text-[var(--color-subheading)] mt-2">
                          {item.desc.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[var(--color-subheading)] text-sm sm:text-sm mt-1">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </section>
              </div>
            </div>
            <div className="items-center flex mt-10 justify-center">
              <button
                onClick={() => handleOpenForm("Reserve My Address")}
                className="bg-[var(--cta-color)] cursor-pointer text-[var(--color-heading)] text-md px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#267985] hover:to-green-600 transform hover:-translate-y-1"
              >
                Reserve My Address
              </button>
              <PopupForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                formTitle={formTitle}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Address;

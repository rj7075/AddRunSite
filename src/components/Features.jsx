import React from "react";
import PopupForm from "./PopupForm";
import { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaFileInvoice, FaDoorOpen, FaBan } from "react-icons/fa";

const FeaturesSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };

  const featuresData = [
    {
      id: 1,
      icon: BsCurrencyRupee,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      title: "Lowest Price Guarantee",
      price: "From ₹650/mo",
      description: "Save up to 95% vs. Serviced Office",
    },
    {
      id: 2,
      icon: FaFileInvoice,
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
      title: "Bank Documents in 4 hrs",
      price: "4 hrs delivery",
      description: "NOC, Rent Agreement, Utility Bill Delivered Instantly",
    },
    {
      id: 3,
      icon: FaDoorOpen,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100",
      title: "Meeting Rooms @ ₹200/hr",
      price: "₹200/hr",
      description: "10 hours included every month",
    },
    {
      id: 4,
      icon: FaBan,
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
      title: "Zero Hidden Fees",
      price: "0 Fees",
      description: "Flat invoice, GST credit available",
    },
  ];

  return (
    <section className="py-16 bg-[var(--color-primary)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[var(--color-heading)] mb-4">
          Why <span className="text-[var(--color-important)]">Asset Sense</span>
        </h2>

        <p className="text-md font-semibold text-center text-[var(--color-subheading)] max-w-3xl mx-auto mb-12">
          Everything you need to run a compliant business, at a fraction of the
          cost
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature) => {
            const IconComp = feature.icon; // ✅ FIX HERE

            return (
              <div
                key={feature.id}
                className="bg-[var(--color-secondary)] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComp className={`text-2xl ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-[var(--color-heading)]">
                  {feature.title}
                </h3>

                <p className="mb-4 text-[var(--color-heading)]">
                  {feature.price}
                </p>

                <p className="text-sm text-[var(--color-subheading)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 bg-[var(--color-secondary)] p-8 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-[var(--color-heading)] mb-2">
            Save 95% on{" "}
            <span className="text-[var(--color-important)]">Office Costs</span>
          </h3>

          <p className="text-[var(--color-subheading)] text-md font-semibold mb-6">
            Get all the benefits of a premium business address without the
            overhead
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="bg-[#ffffff] p-4 rounded-lg shadow-sm">
              <span className="text-2xl font-bold text-[var(--color-heading)]">
                ₹650
              </span>
              <span className=" font-semibold text-[var(--color-subheading)]">
                /mo
              </span>
              <p className="text-sm font-semibold text-[var(--color-subheading)]">
                Premium Virtual Office
              </p>
            </div>

            <div className="text-xl text-gray-900">
              <button
                onClick={() => handleOpenForm("Reserve My Address")}
                className="bg-[var(--cta-color)] text-gray-100 items-center justify-center px-2 pb-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-5xl font-bold text-[var(--color-heading)]">
                  →
                </span>
              </button>
              <PopupForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                formTitle={formTitle}
              />
            </div>

            <div className="bg-[#ffffff] p-4 rounded-lg shadow-sm">
              <span className="text-2xl font-bold text-green-600">
                Save 95%
              </span>
              <p className="text-sm font-semibold text-[var(--color-subheading)]">
                Compared to traditional office
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center flex mt-10 justify-center">
        <a
          href="https://assetsense.in/"
          target="_blank" // opens in new tab (optional)
          rel="noopener noreferrer"
          className="bg-[var(--cta-color)] text-[var(--color-heading)] text-md px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#267985] hover:to-green-600 transform hover:-translate-y-1"
        >
          CHECK OUR CITY WISE PAYMENT PLAN
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;

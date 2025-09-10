import React from "react";
import PopupForm from "./PopupForm";
import { useState } from "react";

const FeaturesSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  // Features data stored in an array
  const featuresData = [
    {
      id: 1,
      icon: "fas fa-indian-rupee-sign",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      title: "Lowest Price Guarantee",
      price: "From ₹650/mo",
      description: "Save up to 95% vs. Serviced Office",
    },
    {
      id: 2,
      icon: "fas fa-file-invoice",
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
      title: "Bank Documents in 4 hrs",
      price: "4 hrs delivery",
      description: "NOC, Rent Agreement, Utility Bill Delivered Instantly",
    },
    {
      id: 3,
      icon: "fas fa-door-open",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100",
      title: "Meeting Rooms @ ₹200/hr",
      price: "₹200/hr",
      description: "10 hours included every month",
    },
    {
      id: 4,
      icon: "fas fa-ban",
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
        <h2 className="text-3xl font-bold text-center text-[#dbd5d5] mb-4">
          Why Asset Sense
        </h2>
        <p className="text-lg text-center text-[#a9acab] max-w-3xl mx-auto mb-12">
          Everything you need to run a compliant business, at a fraction of the
          cost
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#151B24] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i
                  className={`${feature.icon} ${feature.iconColor} text-2xl`}
                ></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {feature.title}
              </h3>
              <p className=" mb-4 text-gray-300">{feature.price}</p>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#151B24] p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Save 95% on Office Costs
          </h3>
          <p className="text-gray-300 mb-6">
            Get all the benefits of a premium business address without the
            overhead
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="bg-[#ffffff] p-4 rounded-lg shadow-sm">
              <span className="text-2xl font-bold text-gray-900">₹650</span>
              <span className="text-gray-900">/mo</span>
              <p className="text-sm text-gray-900">Premium Virtual Office</p>
            </div>
            <div className="text-3xl text-gray-900">
              →
              <button
                onClick={() => handleOpenForm("Reserve My Address")}
                className="bg-[#5CC6EC]  text-gray-100 text-5xl px-4 pb-1.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                →
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
              <p className="text-sm text-gray-700">
                Compared to traditional office
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

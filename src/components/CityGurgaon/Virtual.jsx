import React from "react";
import PSQDirector from "/PalmSquare/PSQ Director Room.jpg";
import {
  FaMapMarkerAlt,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const Virtual = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#58f0e6] text-[#4c8d8d] border border-[#20f7e8] text-sm font-medium mb-4">
            Professional Presence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Virtual Office for Business Registration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Establish your business presence with a prestigious address. Perfect
            for GST registration, company formation, and building credibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-6 animate-fade-in-up order-2 md:order-1">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#1e7973] p-3 rounded-lg">
                <FaMapMarkerAlt className="h-6 w-6 text-[#a8c9c7]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Prime Business Address
                </h3>
                <p className="text-gray-600">
                  Get a prestigious address in premium business districts
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#3c6462] p-3 rounded-lg">
                <FaFileAlt className="h-6 w-6 text-[#18CBBF]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  GST & Registration Support
                </h3>
                <p className="text-gray-600">
                  Hassle-free company registration and GST documentation
                  assistance
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#548d89] p-3 rounded-lg">
                <FaEnvelope className="h-6 w-6 text-[#18CBBF]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Mail Handling
                </h3>
                <p className="text-gray-600">
                  Professional mail receiving, scanning, and forwarding services
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#4b7471] p-3 rounded-lg">
                <FaPhone className="h-6 w-6 text-[#18CBBF]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Call Management
                </h3>
                <p className="text-gray-600">
                  Professional call answering and forwarding in your company
                  name
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up order-1 md:order-2">
            <img
              src={PSQDirector}
              alt="Professional virtual office reception area"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {/* Basic Plan */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-[#18CBBF] mb-1">
                ₹1,500
              </div>
              <div className="text-gray-500 text-sm">per month</div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Business Address</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Mail Handling</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">GST Registration</span>
              </li>
            </ul>
          </div>

          {/* Business Plan - Popular */}
          <div className="p-6 bg-white border-2 border-[#96eee8] rounded-lg shadow-xl animate-fade-in-up relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#18CBBF] text-white px-3 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-[#18CBBF] mb-2">
                Business
              </h3>
              <div className="text-3xl font-bold text-[#18CBBF] mb-1">
                ₹3,500
              </div>
              <div className="text-gray-500 text-sm">per month</div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Everything in Basic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Call Forwarding</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Meeting Room (4 hrs)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Priority Support</span>
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-3xl font-bold text-[#18CBBF] mb-1">
                ₹5,500
              </div>
              <div className="text-gray-500 text-sm">per month</div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Everything in Business
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Receptionist Services
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Meeting Room (8 hrs)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="h-5 w-5 text-[#18CBBF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Dedicated Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Virtual;

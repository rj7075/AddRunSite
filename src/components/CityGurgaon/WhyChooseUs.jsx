import React from "react";
import { FaMapMarkerAlt, FaAward, FaBolt, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to establish and grow your business
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">50+ Locations</h3>
            <p className="text-sm text-gray-600">
              Premium addresses across major cities in India
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">
              Transparent Pricing
            </h3>
            <p className="text-sm text-gray-600">
              No hidden charges, clear pricing for all services
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBolt className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Hassle-free Setup</h3>
            <p className="text-sm text-gray-600">
              Complete documentation support for registration
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">100% Legal</h3>
            <p className="text-sm text-gray-600">
              All addresses verified and approved by authorities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

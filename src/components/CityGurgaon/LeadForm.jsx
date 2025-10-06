import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirement: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Here you would typically send to your backend
    console.log("Form submitted:", formData);

    toast.success("Request Submitted! We'll contact you within 24 hours.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      requirement: "",
    });
  };

  return (
    <section id="lead-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="p-6 shadow-lg bg-white border border-gray-200 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaBuilding className="h-5 w-5 text-blue-600" />
            Get Free Consultation
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2"
              >
                <FaEnvelope className="h-4 w-4" />
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2"
              >
                <FaPhone className="h-4 w-4" />
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* City Field */}
            <div>
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2"
              >
                <FaMapMarkerAlt className="h-4 w-4" />
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Mumbai, Delhi, Bangalore..."
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Requirement Field */}
            <div>
              <label
                htmlFor="requirement"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Requirement Type
              </label>
              <select
                id="requirement"
                value={formData.requirement}
                onChange={(e) =>
                  setFormData({ ...formData, requirement: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your need</option>
                <option value="coworking">Coworking Space</option>
                <option value="virtual">Virtual Office</option>
                <option value="both">Both Services</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-sm"
            >
              Book Free Visit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;

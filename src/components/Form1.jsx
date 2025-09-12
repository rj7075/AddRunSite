import { useState } from "react";
import toast from "react-hot-toast";

import PopupForm from "./PopupForm";

const cities = [
  "Bangalore",
  "Hyderabad",
  "Lucknow",
  "Mohali",
  "Ahmedabad",
  "Pune",
  "Surat",
  "Jaipur",
  "Indore",
  "Chandigarh",
  "Coimbatore",
  "Nagpur",
];

export default function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };

  const [selectedCity, setSelectedCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
  });

  const openForm = (city) => {
    setSelectedCity(city);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setFormData({ name: "", city: "", phone: "" });
    setSelectedCity("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("You must agree to our policy before submitting.");
      return;
    }

    // ✅ Google Form hidden "formResponse" endpoint
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSer60HKgpOidicarJbM3By1V6l7gOHFiH_WyNUjWBVpDuQCdw/formResponse";

    // ✅ Map your custom fields to Google Form entry IDs
    const formDataToSend = new FormData();
    formDataToSend.append("entry.2005620554", formData.name); // Name field
    formDataToSend.append("entry.1166974658", selectedCity); // City field
    formDataToSend.append("entry.839337160", formData.phone); // Phone field

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // required since Google doesn't return CORS headers
      });

      // ✅ Success toast
      toast.success(
        `Thank you ${formData.name}! We will contact you for Virtual Office in ${selectedCity}.`
      );

      // ✅ Push event to GTM DataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "popupFormSubmit",
        formCity: selectedCity,
        formName: formData.name,
        formPhone: formData.phone,
      });

      // ✅ Close popup
      closeForm();
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again.");
      console.error("Google Form submission error:", error);
    }
  };

  return (
    <section className="py-16 bg-[#334c68] text-center">
      <div className="text-center mb-12 px-4">
        {/* Heading with gradient underline */}
        <h2 className=" text-3xl sm:text-4xl lg:text-5xl mr-4 font-extrabold text-gray-100 mb-4 relative inline-block">
          Other Locations for Your
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Virtual Office
          </span>
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
        </h2>

        {/* Subtext with background glow and padding */}
        <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg font-medium mb-6 px-4 py-2 bg-[#1a1f27] rounded-lg shadow-md">
          Click on any city where you want Your Virtual Office, or enter a
          custom city of your choice. Our team will reach out to you promptly
          with details and support.
        </p>

        {/* Optional call-to-action button */}
        <button
          onClick={() => handleOpenForm("Reserve My Address")}
          className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105"
        >
          Explore Cities
        </button>
        <PopupForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          formTitle={formTitle}
        />
      </div>

      <div className="p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <button
              key={index}
              onClick={() => openForm(city)}
              className="group relative bg-[#141516] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 hover:border-blue-300 overflow-hidden"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                  <i className="fas fa-city text-blue-600 text-xl"></i>
                </div>
                <span className="font-semibold text-gray-300 group-hover:text-blue-700 transition-colors">
                  {city}
                </span>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Get Virtual Office in {selectedCity}
            </h3>

            <form onSubmit={handleSubmit} id="popupForm" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              {/* ✅ Checkbox */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="policy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4"
                  required
                />
                <label htmlFor="policy" className="text-sm text-gray-700">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/terms&conditions"
                    className="text-blue-600 underline"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                id="popupSubmitBtn"
                type="submit"
                disabled={!agreed}
                className={`w-full py-2 rounded-lg font-semibold transition ${
                  agreed
                    ? "bg-[#5CC6EC] text-white hover:bg-[#161C25]"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

import { useState } from "react";
import toast from "react-hot-toast";

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

      toast.success(
        `Thank you ${formData.name}! We will contact you for Virtual Office in ${selectedCity}.`
      );
      closeForm();
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again.");
      console.error("Google Form submission error:", error);
    }
  };

  return (
    <section className="py-16 bg-[#334c68] text-center">
      <h2 className="text-2xl text-gray-200 font-bold mb-6">
        Other location for your Virtual Office
      </h2>
      <p className="justify-center items-center text-sm mb-4 px-2 font-medium text-gray-300">
        Click On City where You Want Your Virtual Office or Fill Your Desired
        City By Clicking on Any City, Our Team Will Contact You Soon.
      </p>

      {/* City buttons */}
      <div className="flex flex-wrap gap-4 px-3  items-center justify-center">
        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => openForm(city)}
            className="bg-[#3f4047] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5CC6EC] transition"
          >
            {city}
          </button>
        ))}
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

            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button
                type="submit"
                className="w-full bg-[#5CC6EC] text-white py-2 rounded-lg font-semibold hover:bg-[#161C25] transition"
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

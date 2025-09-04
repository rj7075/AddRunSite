import { useState } from "react";

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
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
    setFormData((prev) => ({ ...prev, city }));
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setFormData({ name: "", city: "", phone: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // For now, just log or alert (since no backend)
  //     console.log("Form submitted:", formData);
  //     alert(
  //       `Thank you ${formData.name}! We’ll contact you for Virtual Office in ${formData.city}.`
  //     );
  //     closeForm();
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSer60HKgpOidicarJbM3By1V6l7gOHFiH_WyNUjWBVpDuQCdw/viewform",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // your form data
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        closeForm();
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-[#334c68] text-center">
      <h2 className="text-2xl text-gray-200 font-bold mb-6">
        Choose Your City for Virtual Office
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
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
                value={formData.city}
                onChange={handleChange}
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

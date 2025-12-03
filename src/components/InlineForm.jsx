// InlineForm.jsx
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

export default function InlineForm({ initialCity = "" }) {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: initialCity,
    phone: "",
  });
  const items = [
    "MCA Compliant",
    "GST Registration Ready",
    "Bank Account Support",
    "Mail Forwarding",
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("You must agree to our policy before submitting.");
      return;
    }

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSer60HKgpOidicarJbM3By1V6l7gOHFiH_WyNUjWBVpDuQCdw/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.2005620554", formData.name);
    formDataToSend.append("entry.1166974658", formData.city);
    formDataToSend.append("entry.839337160", formData.phone);

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      toast.success(
        `Thank you ${formData.name}! We will contact you for Virtual Office in ${formData.city}.`
      );

      // GTM event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "inlineFormSubmit",
        formCity: formData.city,
        formName: formData.name,
      });

      setFormData({ name: "", city: "", phone: "" });
      setAgreed(false);
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, city: initialCity }));
  }, [initialCity]);

  return (
    <div className="bg-white rounded-lg shadow-lg w-full h-full p-6 overflow-y-auto">
      <h3 className="text-sm md:text-xl text-black font-semibold mb-4">
        Get Virtual Office in {formData.city || "Your City"}
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border text-black border-gray-300 rounded px-3 py-2"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full border text-black border-gray-300 rounded px-3 py-2"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 text-black rounded px-3 py-2"
        />

        {/* Checkbox */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-4 h-4"
            required
          />
          <label className="text-sm text-gray-700">
            By submitting this form, you agree to our{" "}
            <a href="/terms&conditions" className="text-blue-600 underline">
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
          type="submit"
          className="w-full bg-[#17CFBF] text-white py-2 rounded-lg font-semibold hover:bg-[#161C25] transition"
        >
          Check Availability
        </button>
      </form>
      <div className="mt-10 grid grid-cols-1  sm:grid-cols-2 gap-y-3 gap-x-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-600 text-lg" />
            <span className="text-sm text-gray-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// InlineForm.jsx
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

export default function InlineForm({ initialCity = "", isPopup = false }) {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: " ",
    phone: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("You must agree to our policy before submitting.");
      return;
    }

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSc9z3stoaILghG4MQ5kB2ybL8jqJGxOJZr_TFjyPN-cM4h1fg/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.986636130", formData.name);
    formDataToSend.append("entry.1430806911", formData.city);
    formDataToSend.append("entry.819097800", formData.phone);

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
      setTimeout(() => {
        window.location.href =
          "https://assetsense.in/compliance/gst-registration-checklist#quiz"; // <-- your website
      }, 1000);
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
          className="w-full cursor-pointer bg-[var(--cta-color)] text-[var(--color-heading)] py-2 rounded-lg font-semibold  transition"
        >
          {isPopup ? "Submit" : "Check Availability"}
        </button>
      </form>
    </div>
  );
}

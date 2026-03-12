import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function PropPopupForm({ isOpen, onClose }) {
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    social1: "",
    social2: "",
    social3: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      toast.error("Please agree to the policy first.");
      return;
    }

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeq5ACR8dyz8H6twewkvk50kOvqk1jouWP97DGkMVrwBRUbfg/formResponse";

    const data = new FormData();
    data.append("entry.479153873", formData.name);
    data.append("entry.1826924194", formData.phone);
    data.append("entry.1374637989", formData.city);
    data.append("entry.1302018363", formData.social1);
    data.append("entry.17157182", formData.social2);
    data.append("entry.1967688791", formData.social3);

    try {
      await fetch(formUrl, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      toast.success("Application submitted successfully!");

      // GTM Event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "mogulApplicationSubmit",
        applicantName: formData.name,
        applicantCity: formData.city,
      });

      setFormData({
        name: "",
        phone: "",
        city: "",
        social1: "",
        social2: "",
        social3: "",
      });

      onClose();
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="relative w-[420px] rounded-xl bg-white p-6 shadow-xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Apply for Mogul Partnership
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          {/* Social Links */}
          <input
            type="url"
            name="social1"
            placeholder="Social Media Link (LinkedIn / Instagram)"
            value={formData.social1}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          <input
            type="url"
            name="social2"
            placeholder="Second Social Media Link"
            value={formData.social2}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          <input
            type="url"
            name="social3"
            placeholder="Third Social Media Link"
            value={formData.social3}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          {/* Policy */}
          <div className="flex gap-2 text-sm">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <p>
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
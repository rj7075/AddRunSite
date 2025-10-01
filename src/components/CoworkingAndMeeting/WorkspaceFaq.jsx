import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What are your payment terms?",
    answer:
      "We accept payment via bank transfer, UPI, credit/debit cards, and cash. Monthly plans are billed in advance, while daily passes and meeting rooms can be paid on the day of use.",
  },
  {
    question: "Can I visit before booking?",
    answer:
      "Absolutely! We encourage you to schedule a visit to tour our facilities. You can book a visit through our booking form or call us directly.",
  },
  {
    question: "What amenities are included?",
    answer:
      "All plans include high-speed WiFi, free coffee and tea, printing facilities, and access to common areas. Monthly members get additional perks like mail handling and locker storage.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have dedicated parking for members and visitors. The parking is complimentary for monthly members and available at a nominal charge for daily pass users.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Monthly plans require 30 days notice for cancellation. Daily passes and meeting room bookings can be cancelled up to 24 hours before the scheduled time for a full refund.",
  },
  {
    question: "Do you offer corporate packages?",
    answer:
      "Yes, we offer customized corporate packages for teams of 5 or more. Please contact us for special rates and dedicated office space options.",
  },
];

const WorkSpaceFaq = () => {
  // ✅ Correct state in JavaScript (no TS types here)
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Remove ": number" (TS-only)
  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-25 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our coworking space
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <FiPlus className="w-5 h-5 text-blue-600" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSpaceFaq;

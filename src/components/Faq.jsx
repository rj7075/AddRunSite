import { useState } from "react";
import { faq1 } from "../assets/Faq";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[var(--color-secondary)] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Everything you need to know about our virtual office services
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center border-b border-gray-200 pb-3 mb-3">
              <i className="fas fa-search text-gray-400 mr-3"></i>
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="space-y-4">
            {faq1.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center font-semibold"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <i
                    className={`fas ${
                      openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                    } text-gray-400`}
                  ></i>
                </button>
                {openIndex === index && (
                  <div className="p-4 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

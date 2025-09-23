import { useState } from "react";

export default function FAQ({ faq }) {
  const [openIndex, setOpenIndex] = useState(null); // null = all closed

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle open/close
  };

  return (
    <div className="py-16 bg-[#1C398E]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-200 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-[#21315f] rounded-lg shadow overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg"
              >
                <span className="text-gray-200">{item.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-200">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

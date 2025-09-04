import { useState } from "react";
// import { faq1 } from "../assets/Faq";

const faq1 = [
  {
    question: "Can I register for GST with this address?",
    answer:
      "Yes. Our virtual office address is MCA- and GST-approved, so you can use it for GST registration without any issues.",
    popular: true,
  },
  {
    question: "How fast will I get documents?",
    answer:
      "You will receive all necessary compliance documents like NOC, rent agreement, and utility bill within 24 hours of completing your KYC.",
  },
  {
    question: "Can I receive parcels and mail?",
    answer:
      "Yes. We provide mail handling services. You can collect parcels at the office, or request mail forwarding for added convenience.",
  },
  {
    question: "How long does activation take?",
    answer:
      "Activation usually takes less than 24 hours once we verify your documents and payment.",
  },
  {
    question: "Is mail forwarding included or extra?",
    answer:
      "Basic mail handling is included. Mail forwarding is available as an optional add-on depending on your needs.",
  },
  {
    question: "What about meeting room availability?",
    answer:
      "Our plans include access to professional meeting rooms on a booking basis. You can reserve slots in advance as per availability.",
  },
  {
    question: "Can I use this for company registration?",
    answer:
      "Yes. This address is valid for company incorporation with the Ministry of Corporate Affairs (MCA).",
  },
  {
    question: "What if my bank needs additional documents?",
    answer:
      "We provide complete compliance support. If your bank requires extra documents, our team will assist you with supplementary paperwork.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[var(--color-primary)]" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#fff] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center text-[#747070] mb-12">
          Everything you need to know about our virtual office services
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq1.map((faq, index) => (
              <div
                key={index}
                className="bg-[var(--color-secondary)] rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center font-semibold"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq1.popular && (
                    <span className="bg-primary/20 text-primary border-primary/30">
                      Popular
                    </span>
                  )}
                  <span className="text-[#587270]">{faq.question}</span>
                  <i
                    className={`fas ${
                      openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                    } text-gray-200`}
                  ></i>
                </button>

                {openIndex === index && (
                  <div className="p-4 border-t text-[#929c9a] border-gray-200">
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

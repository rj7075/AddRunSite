import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqGurgaon = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index, section) => {
    const key = `${section}-${index}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const coworkingFAQs = [
    {
      question: "Do coworking spaces offer private cabins?",
      answer:
        "Yes! We offer flexible hot desks, dedicated desks, and private cabins for teams of all sizes. Private cabins provide a secure, quiet workspace while still enjoying the benefits of a collaborative environment.",
    },
    {
      question: "What amenities are included in coworking spaces?",
      answer:
        "All our coworking spaces include high-speed WiFi, printing/scanning facilities, meeting rooms, refreshments, 24/7 access, air conditioning, and professional reception services.",
    },
    {
      question: "Can I book meeting rooms separately?",
      answer:
        "Absolutely! Members get discounted rates on meeting room bookings, and non-members can also book rooms by the hour for presentations, client meetings, or team discussions.",
    },
    {
      question: "Is there a minimum commitment period?",
      answer:
        "We offer flexible plans starting from daily passes to monthly and annual memberships. Choose what works best for your business needs.",
    },
  ];

  const virtualOfficeFAQs = [
    {
      question: "Can I register my company with a virtual office address?",
      answer:
        "Yes! Our virtual office addresses are 100% legal and accepted for company registration, GST registration, business licenses, and all official documentation.",
    },
    {
      question: "What's included in virtual office services?",
      answer:
        "Services include a prestigious business address, mail handling and forwarding, call answering services, GST registration support, and access to meeting rooms when needed.",
    },
    {
      question: "How does mail handling work?",
      answer:
        "We receive all your business mail, scan important documents, and notify you immediately. You can choose to have mail forwarded to your address or collect it during office hours.",
    },
    {
      question: "Can I use the business address on my website?",
      answer:
        "Yes! You can display the address on your website, business cards, marketing materials, and all official documents. It enhances your business credibility significantly.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Coworking FAQ Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Coworking Spaces
            </h3>
            <div className="space-y-3">
              {coworkingFAQs.map((faq, index) => {
                const isOpen = openItems[`coworking-${index}`];
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleItem(index, "coworking")}
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <FaChevronUp className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Virtual Office FAQ Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-semibold text-[#18CBBF] mb-4">
              Virtual Offices
            </h3>
            <div className="space-y-3">
              {virtualOfficeFAQs.map((faq, index) => {
                const isOpen = openItems[`virtual-${index}`];
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleItem(index, "virtual")}
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <FaChevronUp className="h-4 w-4 text-[#18CBBF] flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="h-4 w-4 text-[#18CBBF] flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqGurgaon;

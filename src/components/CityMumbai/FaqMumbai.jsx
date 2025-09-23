import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-4">
      <button
        className="flex items-center justify-between w-full py-4 text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors"
        onClick={onClick}
      >
        <span className="pr-4">{question}</span>
        <span className="flex-shrink-0">
          {isOpen ? (
            <FaChevronUp className="h-4 w-4" />
          ) : (
            <FaChevronDown className="h-4 w-4" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
};

const FaqMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is signage included in the package?",
      answer:
        "Yes! Your company name will be professionally displayed on our reception board, giving your business immediate visibility and credibility. This is included in all our Mumbai Premium Address packages at no additional cost.",
    },
    {
      question: "What is included in ₹19,499 Mumbai plan?",
      answer:
        "The Mumbai Premium Address includes: professional New Marine Lines business address, dedicated receptionist for call handling, your company name board at reception, mail handling and forwarding, access to meeting rooms, basic compliance documentation for banking/GST, and access to our 1000 sq ft furnished office space.",
    },
    {
      question: "How does call handling work?",
      answer:
        "Our trained receptionist will answer calls using your company name, take messages, and forward urgent calls to your mobile. You can provide call handling scripts and specific instructions. All calls are logged and you receive daily/weekly reports of all communications.",
    },
    {
      question: "What documents are provided for bank/GST?",
      answer:
        "We provide address verification letters, No Objection Certificate (NOC), utility bills, property documents, and rental agreements as required by banks and GST authorities. All documents are legally compliant and accepted by major banks and government agencies.",
    },
    {
      question: "What's in the ₹9,499 Value Pack?",
      answer:
        "Value Pack includes business address across Maharashtra cities, professional CA fees for online GST registration on government portal, on-site representative for physical verification (required for GST or bank account opening), complete documentation package, and mail handling service.",
    },
    {
      question: "How does GST physical verification support work?",
      answer:
        "Our representative will be present at your registered address during the GST officer's physical verification visit. They'll coordinate the appointment, ensure all required documents are available, and facilitate the entire verification process to ensure smooth GST registration completion.",
    },
    {
      question: "Can visitors book rooms by the hour?",
      answer:
        "Yes! Meeting rooms and the 12-seater conference room can be booked hourly or for full days. Address holders get priority booking, while external visitors can book after providing contact details. Rates start from ₹500/hour for meeting rooms and ₹1200/hour for conference rooms.",
    },
    {
      question: "Are there hidden charges or deposits?",
      answer:
        "Absolutely no hidden charges! The quoted price includes all basic services. The only additional charges are for extra services like printing (₹2/page), additional mail forwarding beyond 20 items/month, and room bookings beyond the included monthly quota. No security deposits required.",
    },
    {
      question: "Can the address be used on invoices and websites?",
      answer:
        "Yes, you can use this address on all business documents including invoices, websites, business cards, letterheads, and marketing materials. It's a legally registered business address that adds credibility to your brand and is accepted by all authorities.",
    },
    {
      question: "How fast can activation happen?",
      answer:
        "Address activation typically takes 24-48 hours after document submission and payment. For urgent requirements, same-day activation is possible. GST registration support begins immediately, and all documentation can be prepared within 2-3 business days of activation.",
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mt-10 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our virtual office services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        {/* Contact for More Questions */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <button className="flex">
                <FaPhone className="h-4 items-center w-6 mr-2" />
                Request a Call Back
              </button>
            </a>
            <a
              href="mailto:info@assetsense.in"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaEnvelope className="h-4 w-4 mr-2" />
              Email: info@assetsense.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMumbai;

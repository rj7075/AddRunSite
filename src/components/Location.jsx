import {
  FaCity,
  FaRupeeSign,
  FaBolt,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

export default function Location() {
  const highlights = [
    {
      icon: <FaCity className="text-blue-400 text-2xl" />,
      title: "40+ Cities",
      desc: "Virtual offices across India’s major business hubs",
    },
    {
      icon: <FaRupeeSign className="text-green-400 text-2xl" />,
      title: "Affordable Plans",
      desc: "Starting at just ₹499/month with flexible options",
    },
    {
      icon: <FaBolt className="text-yellow-400 text-2xl" />,
      title: "Quick Setup",
      desc: "Paperless documentation in less than 24 hours",
    },
    {
      icon: <FaShieldAlt className="text-purple-400 text-2xl" />,
      title: "Reliable Service",
      desc: "Trusted by 500+ businesses nationwide",
    },
    {
      icon: <FaUndo className="text-red-400 text-2xl" />,
      title: "Money-Back Guarantee",
      desc: "Full refund if you’re not satisfied",
    },
  ];

  return (
    <section className="mt-10 grid gap-6 md:grid-cols-5">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="bg-gray-800 p-5 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
        >
          {item.icon}
          <h3 className="text-white font-semibold mt-3">{item.title}</h3>
          <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

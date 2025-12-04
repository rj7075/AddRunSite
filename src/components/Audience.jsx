import React from "react";
import { LuRocket, LuShoppingCart, LuLaptop, LuGlobe } from "react-icons/lu";

const AudienceSection = () => {
  const audienceData = [
    {
      id: 1,
      icon: <LuRocket className="text-blue-500 text-3xl" />,
      bgColor: "bg-blue-100",
      title: "Start-ups & SMEs launching in NCR",
      description:
        "Perfect for new businesses that need a professional address without the overhead of physical office space.",
    },
    {
      id: 2,
      icon: <LuShoppingCart className="text-green-500 text-3xl" />,
      bgColor: "bg-green-100",
      title: "Amazon / Flipkart Sellers needing multi-state GST",
      description:
        "Essential for e-commerce sellers who need GST registration across multiple states.",
    },
    {
      id: 3,
      icon: <LuLaptop className="text-purple-500 text-3xl" />,
      bgColor: "bg-purple-100",
      title: "Consultants & Freelancers who work remote but need a city HQ",
      description:
        "Ideal for independent professionals who need a corporate presence.",
    },
    {
      id: 4,
      icon: <LuGlobe className="text-red-500 text-3xl" />,
      bgColor: "bg-red-100",
      title: "Global Companies testing Indian market",
      description:
        "Perfect for international businesses entering the Indian market.",
    },
  ];

  return (
    <section className="py-16 bg-[var(--color-primary)]" id="audience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#d6dbdb] mb-4">
          Is This For You?
        </h2>
        <p className="text-lg text-center text-gray-300 mb-12">
          Perfect for businesses of all sizes looking for professional presence
          without the overhead
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="bg-[#161C25] p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#bdbcc4] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

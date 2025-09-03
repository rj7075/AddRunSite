import React from "react";

const AudienceSection = () => {
  // Audience data stored in an array
  const audienceData = [
    {
      id: 1,
      icon: "fas fa-rocket",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      title: "Start-ups & SMEs launching in NCR",
      description:
        "Perfect for new businesses that need a professional address without the overhead of physical office space.",
    },
    {
      id: 2,
      icon: "fas fa-shopping-cart",
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
      title: "Amazon / Flipkart Sellers needing multi-state GST",
      description:
        "Essential for e-commerce sellers who need GST registration across multiple states.",
    },
    {
      id: 3,
      icon: "fas fa-laptop-code",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100",
      title: "Consultants & Freelancers who work remote but need a city HQ",
      description:
        "Ideal for independent professionals who need a corporate presence.",
    },
    {
      id: 4,
      icon: "fas fa-globe-americas",
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
      title: "Global Companies testing Indian market",
      description:
        "Perfect for international businesses entering the Indian market.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Is This For You?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Perfect for businesses of all sizes looking for professional presence
          without the overhead
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i className={`${item.icon} ${item.iconColor} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

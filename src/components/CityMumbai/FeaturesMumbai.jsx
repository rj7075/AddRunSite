import {
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaWifi,
  FaCoffee,
  FaPrint,
  FaUsers,
  FaClock,
  FaFileAlt,
  FaMapPin,
  FaHeadphones,
  FaShieldAlt,
} from "react-icons/fa";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return <div className={`p-6 pb-4 ${className || ""}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return (
    <h3 className={`font-semibold text-gray-900 ${className || ""}`}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className }) => {
  return <p className={`text-gray-600 ${className || ""}`}>{children}</p>;
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 pt-0 ${className || ""}`}>{children}</div>;
};

const FeaturesMumbai = () => {
  const spaceFeatures = [
    {
      icon: <FaBuilding className="h-6 w-6" />,
      title: "1000 Sq Ft Furnished Office",
      description:
        "Professionally designed workspace with modern furnishing and premium interiors",
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: "Meeting & Conference Rooms",
      description:
        "4-6 seater meeting room and 12-seater conference room with AV equipment",
    },
    {
      icon: <FaMapPin className="h-6 w-6" />,
      title: "Coworking Seats Available",
      description:
        "Professional hot desk spaces for temporary office needs and client meetings",
    },
    {
      icon: <FaWifi className="h-6 w-6" />,
      title: "High-Speed Internet",
      description:
        "Dedicated fiber internet connection with backup for uninterrupted connectivity",
    },
  ];

  const operationalFeatures = [
    {
      icon: <FaPhone className="h-6 w-6" />,
      title: "Professional Call Handling",
      description:
        "Trained receptionist answers calls with your company name and handles inquiries professionally",
      addons: false,
    },
    {
      icon: <FaBuilding className="h-6 w-6" />,
      title: "Brand Visibility",
      description:
        "Your company name displayed on professional board at reception area for credibility",
      Addons: false,
    },
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      title: "Mail Management",
      description:
        "Professional mail handling, sorting, and forwarding with 24-hour SLA commitment",
    },
    {
      icon: <FaFileAlt className="h-6 w-6" />,
      title: "Documentation Support",
      description:
        "Complete address verification letters, NOC, and compliance documents for banking/GST",
      Addons: false,
    },
    {
      icon: <FaCoffee className="h-6 w-6" />,
      title: "Complimentary Refreshments",
      description:
        "Free coffee, tea, and light refreshments for you and your visiting clients",
      Addons: false,
    },
    {
      icon: <FaPrint className="h-6 w-6" />,
      title: "Business Services",
      description:
        "Printing, scanning, photocopying services with reasonable per-page charges",
      Addons: true,
    },
    {
      icon: <FaClock className="h-6 w-6" />,
      title: "Extended Access Hours",
      description:
        "Office access from 9 AM to 7 PM on weekdays, meeting rooms bookable on weekends",
      Addons: true,
    },
    {
      icon: <FaHeadphones className="h-6 w-6" />,
      title: "Dedicated Support",
      description:
        "Personal account manager and 24/7 phone/email support for all your business needs",
      Addons: true,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Professional Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our New Marine Lines location provides complete infrastructure and
            services to establish your business presence with credibility and
            professionalism.
          </p>
        </div>

        {/* Space Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Premium Office Space Details
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaceFeatures.map((feature, index) => (
              <Card key={feature.title} className="hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit text-blue-600 mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Operational Features */}
        <div>
          <h3
            id="features"
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Professional Operations & Support
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalFeatures.map((feature, index) => (
              //    <span>{feature.addons? "Addons" : " "}</span>
              <Card key={feature.title} className="hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="p-3 bg-green-100 rounded-lg w-fit text-green-600 mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Strip */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-8 text-center border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Complete Business Solution Comparison
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div className="space-y-2">
                <FaShieldAlt className="h-8 w-8 text-blue-600 mx-auto" />
                <div className="font-semibold">Registered Office</div>
                <div className="text-gray-600">
                  Legal address for all documentation
                </div>
              </div>
              <div className="space-y-2">
                <FaFileAlt className="h-8 w-8 text-blue-600 mx-auto" />
                <div className="font-semibold">Banking & GST</div>
                <div className="text-gray-600">Complete compliance support</div>
              </div>
              <div className="space-y-2">
                <FaPhone className="h-8 w-8 text-blue-600 mx-auto" />
                <div className="font-semibold">Branding & Reception</div>
                <div className="text-gray-600">
                  Professional image & call handling
                </div>
              </div>
              <div className="space-y-2">
                <FaUsers className="h-8 w-8 text-blue-600 mx-auto" />
                <div className="font-semibold">Room Bookings</div>
                <div className="text-gray-600">Meeting spaces on demand</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesMumbai;

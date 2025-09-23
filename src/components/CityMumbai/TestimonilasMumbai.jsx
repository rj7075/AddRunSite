import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 ${className || ""}`}>{children}</div>;
};

const TestimonialsMumbai = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      business: "Digital Marketing Agency",
      location: "Mumbai",
      rating: 5,
      text: "The New Marine Lines address gave our startup instant credibility. The receptionist handles our calls professionally, and GST registration was seamless.",
      avatar: "PS",
    },
    {
      name: "Rahul Patil",
      business: "Import/Export Business",
      location: "Pune",
      rating: 5,
      text: "Asset Sense made our bank account opening process so smooth. The representative was present during verification, and all documents were perfectly prepared.",
      avatar: "RP",
    },
    {
      name: "Sneha Kulkarni",
      business: "Consulting Services",
      location: "Thane",
      rating: 5,
      text: "Best value for money! ₹9,499 for complete GST support was unbeatable. The CA assistance saved us weeks of paperwork and running around.",
      avatar: "SK",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by 10,000+ Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what successful entrepreneurs say about our services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="hover:scale-[1.02]">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <FaQuoteLeft className="h-8 w-8 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-green-600" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.business}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm text-gray-600">Businesses Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-600">Locations Network</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">5⭐</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">24hr</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMumbai;

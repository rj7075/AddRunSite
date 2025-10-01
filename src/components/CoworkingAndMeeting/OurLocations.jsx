import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa6";

const cityLocations = [
  { name: "Bangalore", area: "MG Road, Koramangala" },
  { name: "Surat", area: "Surat, GandhiNagar, Ahmdabad" },
  { name: "Pune", area: "Sector 62, Sector 18" },
  { name: "Mumbai", area: "Andheri, BKC" },
  { name: "Delhi", area: "Connaught Place, Saket" },
  { name: "Hyderabad", area: "Hitech City, Gachibowli" },
  { name: "Pune", area: "Koregaon Park, Hinjewadi" },
  { name: "Chennai", area: "Anna Nagar, OMR" },
  { name: "Gurgaon", area: "Cyber City, Golf Course Road" },
  { name: "Noida", area: "Sector 62, Sector 18" },
];

const OurLocation = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Visit Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium coworking spaces across major cities in India
          </p>
        </div>

        {/* City Locations Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-900">
            Our Locations Across India
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-6xl mx-auto items-stretch">
            {cityLocations.map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaBuilding className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold mb-1 text-gray-900">
                  {city.name}
                </h4>
                <p className="text-gray-600 text-xs mb-3 flex-grow">
                  {city.area}
                </p>
                <button className="w-full text-xs mt-auto bg-transparent border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors py-2 rounded-md">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
         
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Address
                </h3>
                <p className="text-gray-600">
                  123 Business Hub, MG Road
                  <br />
                  Bangalore, Karnataka 560001
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiPhone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Phone
                </h3>
                <p className="text-gray-600">
                  +91 98765 43210
                  <br />
                  +91 98765 43211
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Email
                </h3>
                <p className="text-gray-600">
                  hello@coworkspace.com
                  <br />
                  bookings@coworkspace.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiClock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Hours
                </h3>
                <p className="text-gray-600">
                  24/7 Access for Members
                  <br />
                  Office Hours: Mon-Fri, 9 AM - 6 PM
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8931515479826!2d77.60361531482171!3d12.972442090857907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurLocation;

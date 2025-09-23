// src/components/HeroSection.jsx
export default function HeroSection({ city }) {
  return (
    <div className="relative mt-20 bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section - Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="md:text-4xl text-2xl font-bold mb-6">
            Virtual Office Solutions in {city.title}
          </h1>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Establish a premium business presence in <b>{city.title}</b> with
            our trusted <b>Virtual Office solutions</b>. Get a professional
            address, mail handling, call support, and flexible plans that
            perfectly suit startups, freelancers, and growing businesses.
          </p>

          {/* Key Benefits */}
          <ul className="space-y-3 text-gray-100 mb-8">
            <li>✅ Prime business address in {city.title}</li>
            <li>✅ Mail & courier handling with ease</li>
            <li>✅ GST & business registration support</li>
            <li>✅ Affordable plans with zero hidden cost</li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors">
              Request a Callback
            </button>
            <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Section - Hero Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={city.heroImage}
            alt={city.title}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

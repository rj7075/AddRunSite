import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-[#022040] from-blue-50 to-indigo-50 py-35">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-row mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Go Live in 24 Hours
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Get an <span className="text-gradient">MCA- & GST-Ready</span>{" "}
              Business Address in any City In India.
            </h1>
            {/* <h2 className="text-2xl md:text-3xl font-semibold text-[#6DDBFF] mb-6">
              Get an MCA- & GST-Ready Business Address in any City In India
            </h2> */}
            <p className="text-lg text-[#A6A8AB] mb-8">
              Stop burning cash on rent. Start operating nationwide with a
              compliant virtual office at Welldone Tech Park.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Reserve My Address
              </button>
              <a
                href="https://wa.me/919907800600?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
              >
                <button className="bg-white text-[var(--color-primary)] border border-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  <i className="fas fa-phone-alt mr-2"></i> Watsapp Us
                </button>
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <i className="fas fa-bolt text-[#FFFFFF] mr-2"></i>
                <span className="text-white">Setup in 24 hours</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-user-friends text-[#fff] mr-2"></i>
                <span className="text-white">
                  Trusted by 1500+ Indian founders
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex-row justify-center">
            <div className="bg-[#234053] p-6 rounded-xl shadow-lg max-w-md">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-yellow-400 mr-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="text-gray-700">4.9/5</span>
                </div>
                <div className="text-sm text-white">Google Reviews</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <i className="fas fa-check-circle text-blue-500"></i>
                  </div>
                  <span>MCA Approved</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <i className="fas fa-file-invoice-dollar text-green-500"></i>
                  </div>
                  <span>GST Registration Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

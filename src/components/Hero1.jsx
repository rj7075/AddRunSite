import React from "react";

const Hero1 = () => {
  return (
    <section className="relative min-h-screen flex py-7 pb-6 items-center justify-center overflow-hidden bg-[#011F3F] from-blue-900 via-[#0E141B] to-purple-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMzMTk2YTUiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-30"></div> */}

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-[#3196a5]/20 rounded-full blur-xl animate-bounce"></div>
      <div
        className="absolute bottom-20 left-10 w-32 h-32 bg-[#3196a5]/20 rounded-full blur-xl animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <span className="bg-[#3196a5]/20 text-[#3196a5] border  border-[#3196a5]/30 px-4 py-2 rounded-full text-sm font-bold">
                Go Live in 24 Hours
              </span>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Get an{" "}
                <span className="bg-[#5CC6EC] from-[#3196a5]  bg-clip-text text-transparent">
                  MCA- & GST-Ready
                </span>{" "}
                Business Address in Gurgaon
              </h1>

              <p className="text-xl text-gray-300 max-w-xl">
                Stop burning cash on rent. Start operating nationwide with a
                compliant virtual office at Welldone Tech Park.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button className="bg-[#5CC6EC]  text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#267985] hover:to-green-600 transform hover:-translate-y-1">
                Reserve My Address
              </button>

              <div className="flex items-center space-x-2 text-sm text-gray-300">
                {/* Clock Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Setup in 24 hours</span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-2">
                {/* Users Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3196a5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span className="text-sm text-gray-300">
                  Trusted by 500+ Indian founders
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    // Star Icon
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0"
                      className="text-yellow-400"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  4.9★ Google rating
                </span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-[#131E2C]  border border-white/20 rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-[#213D50] from-[#3196a5]/20 to-green-400/20 rounded-xl flex items-center justify-center">
                {/* Placeholder for GST book visual */}
                <div className="text-center space-y-4">
                  <div className="w-24 h-32 bg-[#3196a5]/30 rounded-lg mx-auto animate-pulse">
                    {/* Document Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#3196a5] mx-auto mt-6"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-300">
                    GST Registration Ready
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full text-xs font-medium flex items-center space-x-1 shadow-md">
              {/* Star Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                className="text-yellow-500"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>MCA Approved</span>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-green-100 text-green-800 px-3 py-2 rounded-full text-xs font-medium shadow-md">
              GST Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;

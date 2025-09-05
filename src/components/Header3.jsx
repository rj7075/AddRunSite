import React from "react";

const Header3 = () => {
  return (
    <div>
      <header className="bg-[#0E141B] top-0 z-50 w-full shadow-md fixed">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                className="mt-4 w-35 h-20 overflow-hidden"
                src="/logo.png"
                alt="logo"
              />
              {/* <p className="text-white">Virtual Office Solutions</p> */}
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#pricing"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="https://wa.me/919907800600?text=Hello%20I%20am%20Interested%20in%20your%20Virtual%20Office%20Services"
                target="_blank"
              >
                <button className="cursor-pointer bg-transparent border border-gray-300 text-[#5CC6EC] hover:text-gray-800 hover:bg-[#66D9FF] px-3 py-1.5 rounded-md text-sm transition-colors">
                  Book a Call
                </button>
              </a>
            </nav>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-xs text-gray-300">
                {/* Phone Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="https://wa.me/919907800600?text=Hello%20I%20am%20Interested%20in%20your%20Virtual%20Office%20Services"
                  target="_blank"
                >
                  <span>Talk to an advisor in 3 min</span>
                </a>
              </div>

              {/* <div className="flex items-center space-x-2 text-xs text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>+91-98XXX XXXX</span>
              </div>{" "} */}

              <a
                href="https://wa.me/919907800600?text=Hello%20I%20am%20Interested%20in%20your%20Virtual%20Office%20Services"
                target="_blank"
              >
                <button className="bg-[#354346] text-white px-4 py-2 rounded-lg hover:bg-[#267985] transition text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
                  </svg>
                  9907800600
                </button>
              </a>
            </div>
          </div>

          {/* Trust badges strip */}
          <div className="border-t border-gray-700 py-2">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-300">
              <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
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
                <span>4.9/5 Google</span>
              </div>
              {/* <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full">
                <span>GST/MCA Approved</span>
              </div> */}
              <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                <span>500+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header3;

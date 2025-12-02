import React from "react";

const Header2 = () => {
  return (
    <div>
      <header className="bg-[#1C2735] sticky top-0 z-50 w-full shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold text-white">Asset Sense</div>
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
              <button className="bg-transparent border border-gray-300 text-gray-300 hover:bg-gray-800 px-3 py-1.5 rounded-md text-sm transition-colors">
                Book a Call
              </button>
            </nav>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-xs text-gray-300">
                <Phone size={12} />
                <span>Talk to an advisor in 3 min</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-300">
                <MessageSquare size={12} />
                <span>+91-98XXX XXXX</span>
              </div>
              <button className="bg-[#3196a5] text-white px-4 py-2 rounded-lg hover:bg-[#267985] transition text-sm flex items-center">
                <MessageSquare size={14} className="mr-1" />
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Trust badges strip */}
          <div className="border-t border-gray-700 py-2">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-300">
              <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                <span>4.9/5 Google</span>
              </div>
              <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full">
                <span>GST/MCA Approved</span>
              </div>
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

export default Header2;

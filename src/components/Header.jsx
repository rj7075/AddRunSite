import React from "react";

const Header = () => {
  return (
    <div className="bg-[#0E141B] shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-100">
          <img className="w-35 h-20" src="/logo.png" alt="logo" />
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline-block bg-yellow-100 text-yellow-800 px-2  py-1 rounded text-sm">
            <i className="fas fa-star text-yellow-500"></i> 4.9/5
          </span>
          <span className="hidden md:inline-block bg-green-100 text-green-800 px-2 py-1  rounded text-sm">
            <i className="fas fa-check-circle"></i> GST/MCA Approved
          </span>
          <span className="hidden md:inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            <i className="fas fa-users"></i> 1500+ Clients
          </span>
          <a
            href="https://wa.me/919907800600?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            className="bg-[#3196a5] text-[#fff] px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Watsapp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

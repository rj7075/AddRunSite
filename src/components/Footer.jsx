import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0E141B] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">
                <a href="/virtual-office">
                  <img className="w-35 h-20" src="/assetlogo.webp" alt="logo" />
                </a>
              </div>
              <p className="text-gray-400">Virtual Office Solutions</p>
              Office Suite: 02-007, 2nd Floor, Emaar The Palm Square, Golf
              Course Road Extn. Sector 66, Gurgaon, Haryana (INDIA)
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/AssetSenseIndia"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/mohan_skills"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/asset-sense-pvt-ltd"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/assetsense1/#"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          {/* <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Asset Sense. All rights reserved.</p>
          </div> */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 space-y-2">
            <div className="flex justify-center gap-4 mb-2">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors text-blue-600 underline"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="/refund-policy"
                className="hover:text-white transition-colors text-blue-600 underline"
              >
                Refund Policy
              </a>
              <span>|</span>
              <a
                href="/terms&conditions"
                className="hover:text-white transition-colors text-blue-600 underline"
              >
                Terms & Conditions
              </a>
            </div>
            <p>© 2025 Asset Sense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

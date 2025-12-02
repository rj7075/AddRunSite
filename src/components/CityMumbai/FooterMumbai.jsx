import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";
import PopupFormMumbai from "./Formmumbai";

const FooterMumbai = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  return (
    <footer className="bg-[#1C2735] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-2">
              <img className="w-35 h-17" src="/assetlogo.webp" alt="siteLogo" />
            </h3>
            <p className="text-blue-100 mb-6 max-w-md">
              Premium business addresses and virtual office solutions across
              India. Trusted by 10,000+ businesses for professional workspace
              needs.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-6">
                <FaMapMarkerAlt className="h-4 w-4 flex-shrink-0" />
                <span>
                  Head Office - 207, 2nd Floor, Emaar The Palm Square, Sector
                  66, Rajesh Pilot Marg, Gurugram, Haryana-122101
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 flex-shrink-0" />
                <span>+91 9907800600</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-4 w-4 flex-shrink-0" />
                <span>info@assetsense.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Mumbai Address
                </a>
              </li>
              <li>
                <a
                  href="#maharashtra"
                  className="hover:text-white transition-colors"
                >
                  Maharashtra Cities
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  GST Registration
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Meeting Rooms
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Business Support
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleOpenForm("Reserve My Address")}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://workspaces.assetsense.in/refund-policy"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="https://workspaces.assetsense.in/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://workspaces.assetsense.in/terms&conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-blue-300">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-blue-200">Follow us:</span>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/AssetSenseIndia"
                className="p-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/mohan_skills"
                className="p-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/asset-sense-pvt-ltd"
                className="p-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/assetsense1
"
                className="p-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <button
            onClick={() => handleOpenForm("Reserve My Address")}
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            Get Started Today
          </button>
        </div>
        <PopupFormMumbai
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          formTitle={formTitle}
        />

        {/* Legal Info */}
        <div className="mt-8 pt-6 border-t border-blue-300 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <div>© 2024 Asset Sense Pvt Ltd. All rights reserved.</div>
            <div className="mt-2 md:mt-0">
              GST invoices available upon request • GSTIN: 27XXXXX1234X1XX
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMumbai;

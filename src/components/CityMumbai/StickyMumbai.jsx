import { useState, useEffect } from "react";
import { FaPhone, FaStar } from "react-icons/fa";
import PopupForm from "./Form";

const StickyMumbai = ({ onBookingOpen }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Custom mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky elements after scrolling past the hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-xl">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <FaStar className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-gray-900">
                  ₹19,499/year
                </span>
              </div>
              <div className="text-xs text-gray-500">Mumbai Premium</div>
            </div>
            <button
              onClick={() => handleOpenForm("Reserve My Address")}
              className="min-w-[140px] bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Address
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sticky Top CTA */}
      {!isMobile && (
        <div className="fixed top-20 right-6 z-50 opacity-0 animate-fade-in">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600">
                Limited Launch Pricing
              </span>
            </div>
            <div className="mb-3">
              <div className="text-lg font-bold text-gray-900">
                Mumbai Premium Address
              </div>
              <div className="text-2xl font-bold text-blue-600">
                ₹19,499/year
              </div>
              <div className="text-xs text-gray-500">
                New Marine Lines • Professional receptionist
              </div>
            </div>
            <button
              onClick={() => handleOpenForm("Reserve My Address")}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Reserve Address
            </button>
            <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-500">
              <span>✓ GST-ready</span>
              <span>✓ Bank approved</span>
              <span>✓ No deposits</span>
            </div>
          </div>
        </div>
      )}
      <PopupForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formTitle={formTitle}
      />

      {/* Floating Call Button */}
      {/* <div className="fixed bottom-6 left-6 z-50">
        <button
          className="rounded-full w-14 h-14 shadow-xl bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
          onClick={() => window.open("tel:+919999999999", "_self")}
        >
          <FaPhone className="h-6 w-6" />
        </button>
      </div> */}
    </>
  );
};

export default StickyMumbai;

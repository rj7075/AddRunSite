import React from "react";

import { useState } from "react";
import PopupForm from "./PopupForm";

const Cta = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  return (
    //     <section class="py-16 bg-[#948787] text-white">
    //       <div class="container mx-auto px-4 gap-4 text-center">
    //         <h2 class="text-3xl font-bold mb-6">
    //           Ready to Activate Your Virtual Office?
    //         </h2>
    //         <p class="text-xl mb-8 max-w-3xl mx-auto">
    //           Still deciding? Talk to a real person now. Join 500+ Indian founders
    //           who have saved time and money with Asset Sense virtual office
    //           solutions
    //         </p>
    //         <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
    //           <button
    //             onClick={() => handleOpenForm("Reserve My Address")}
    //             className="bg-[#e0e0e0]  text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#267985] hover:to-green-600 transform hover:-translate-y-1"
    //           >
    //             Start For 650
    //           </button>
    //           <PopupForm
    //             isOpen={isFormOpen}
    //             onClose={() => setIsFormOpen(false)}
    //             formTitle={formTitle}
    //           />

    //           <a
    //             className="w-full sm:w-auto"
    //             href="https://wa.me/919907800600?text=Hello%2C%20I%20am%20interested%20in%20your%20Virtual%20Office%20Services.%20Please%20call%20me%20back.
    // "
    //             target="_blank"
    //           >
    //             <button className="bg-[#49925b] text-gray-100 px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 hover:text-gray-700 transition w-full sm:w-auto">
    //               Talk to an Expert
    //             </button>
    //           </a>
    //         </div>

    //         <p class="mt-4 text-blue-100">
    //           Go live in 24 hours • No hidden fees • Money-back guarantee
    //         </p>
    //       </div>
    //     </section>
    <section className="py-16 bg-[#314157] text-white">
      <div className="container mx-auto px-4 gap-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Activate Your Virtual Office?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Still deciding? Talk to a real person now. Join 500+ Indian founders
          who have saved time and money with Asset Sense virtual office
          solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={() => handleOpenForm("Reserve My Address")}
            className="bg-[#e2dbdb] text-gray-900 text-lg px-8 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#267985] hover:to-green-600 transform hover:-translate-y-1"
          >
            Start For ₹650
          </button>

          {/* PopupForm should override text color so it doesn't inherit text-white */}
          <PopupForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            formTitle={formTitle}
            className="text-gray-900"
          />

          <a
            className="w-full sm:w-auto"
            href="https://wa.me/919907800600?text=Hello%2C%20I%20am%20interested%20in%20your%20Virtual%20Office%20Services.%20Please%20call%20me%20back."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#49925b] text-gray-100 px-5 py-2.5 sm:px-8 sm:py-2 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 hover:text-gray-700 transition w-full sm:w-auto">
              Talk to an Expert
            </button>
          </a>
        </div>

        <p className="mt-4 text-blue-100">
          Go live in 24 hours • No hidden fees • Money-back guarantee
        </p>
      </div>
    </section>
  );
};

export default Cta;

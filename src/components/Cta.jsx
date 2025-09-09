import React from "react";

const Cta = () => {
  return (
    <section class="py-16 bg-[var(--color-primary)] text-white">
      <div class="container mx-auto px-4 gap-4 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Ready to Activate Your Virtual Office?
        </h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Still deciding? Talk to a real person now. Join 500+ Indian founders
          who have saved time and money with Asset Sense virtual office
          solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="bg-[#5CC6EC] text-gray-100 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 hover:text-gray-700 transition w-full sm:w-auto">
            Start for ₹999
          </button>
          <a
            className="w-full sm:w-auto"
            href="https://wa.me/919907800600?text=Hello,%20I%20am%20interested%20in%20your%20Virtual%20Office.%20Please%20call%20me%20back.
"
            target="_blank"
          >
            <button className="bg-[#49925b] text-gray-100 px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 hover:text-gray-700 transition w-full sm:w-auto">
              Talk to an Expert
            </button>
          </a>
        </div>

        <p class="mt-4 text-blue-100">
          Go live in 24 hours • No hidden fees • Money-back guarantee
        </p>
      </div>
    </section>
  );
};

export default Cta;

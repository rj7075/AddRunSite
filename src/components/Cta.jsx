import React from "react";

const Cta = () => {
  return (
    <div>
      <section class="py-16 bg-[var(--color-primary)] text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">
            Ready to Get Your Virtual Office?
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            Join 500+ Indian founders who have saved time and money with Asset
            Sense virtual office solutions
          </p>
          <button class="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Reserve My Address Now
          </button>
          <p class="mt-4 text-blue-100">
            Go live in 24 hours • No hidden fees • Money-back guarantee
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cta;

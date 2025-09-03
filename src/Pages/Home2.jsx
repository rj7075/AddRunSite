import React from "react";
import FAQSection from "../components/Faq";
import ProCons from "../components/ProCons";
import Cta from "../components/Cta";
import AudienceSection from "../components/Audience";
import TestimonialsSection from "../components/Testimonials";

const Home2 = () => {
  return (
    <div>
      {/* <!-- Header --> */}
      <header class="bg-gradient-to-r shadow-sm py-4">
        <div class="container mx-auto px-4 flex justify-between items-center">
          <div class="text-2xl font-bold text-[var(--color-primary)]">
            Asset Sense
          </div>
          <div class="flex items-center space-x-4">
            <span class="hidden md:inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
              <i class="fas fa-star text-yellow-500"></i> 4.9/5
            </span>
            <span class="hidden md:inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
              <i class="fas fa-check-circle"></i> GST/MCA Approved
            </span>
            <span class="hidden md:inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              <i class="fas fa-users"></i> 500+ Clients
            </span>
            <a
              href="#contact"
              class="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* <!-- Hero Section --> */}
      <section class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-secondary)] mb-6">
              Go Live in 24 Hours
            </h1>
            <h2 class="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-6">
              Get an MCA- & GST-Ready Business Address in Gurgaon
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Stop burning cash on rent. Start operating nationwide with a
              compliant virtual office at Welldone Tech Park.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button class="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Reserve My Address
              </button>
              <button class="bg-white text-[var(--color-primary)] border border-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                <i class="fas fa-phone-alt mr-2"></i> +91-98XXX XXXX
              </button>
            </div>
            <div class="mt-8 flex items-center space-x-6 text-sm text-gray-600">
              <div class="flex items-center">
                <i class="fas fa-bolt text-blue-500 mr-2"></i>
                <span>Setup in 24 hours</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-user-friends text-blue-500 mr-2"></i>
                <span>Trusted by 500+ Indian founders</span>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="bg-white p-6 rounded-xl shadow-lg max-w-md">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <div class="text-yellow-400 mr-1">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <span class="text-gray-700">4.9/5</span>
                </div>
                <div class="text-sm text-gray-500">Google Reviews</div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <i class="fas fa-check-circle text-blue-500"></i>
                  </div>
                  <span>MCA Approved</span>
                </div>
                <div class="flex items-center p-3 bg-green-50 rounded-lg">
                  <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <i class="fas fa-file-invoice-dollar text-green-500"></i>
                  </div>
                  <span>GST Registration Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProCons />

      {/* <!-- Address Section --> */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-[var(--color-secondary)] mb-4">
            Your Legal Address
          </h2>
          <p class="text-xl text-center text-[var(--color-primary)] font-semibold mb-12">
            Welldone Tech Park, Sector 48, Gurgaon
          </p>

          <div class="flex flex-col md:flex-row items-start gap-8">
            <div class="md:w-1/2">
              <div class="bg-white p-6 rounded-xl shadow-md mb-6">
                <h3 class="text-xl font-semibold mb-4">Premium Features</h3>
                <ul class="space-y-3">
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <span>5-min to Huda City Centre metro</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <span>In the same campus as TCS, Wipro</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <span>Free parking & reception</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <span>Professional business address</span>
                  </li>
                </ul>
              </div>
              <button class="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center">
                <i class="fas fa-vr-cardboard mr-2"></i> See the Office (360°
                Tour)
              </button>
            </div>
            <div class="md:w-1/2">
              <div class="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 class="text-xl font-semibold mb-4">
                  Why Welldone Tech Park?
                </h3>
                <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <div class="w-full h-48 bg-blue-100 flex items-center justify-center">
                    <i class="fas fa-building text-blue-400 text-5xl"></i>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">
                  Prime commercial address in the heart of Gurgaon's business
                  district, providing prestige and professionalism for your
                  business.
                </p>
                <div class="flex items-center justify-between">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Prime Location
                  </span>
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Sector 48
                  </span>
                  <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Gurgaon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-[var(--color-secondary)] mb-4">
            Why Asset Sense
          </h2>
          <p class="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Everything you need to run a compliant business, at a fraction of
            the cost
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Feature 1 --> */}
            <div class="bg-gray-50 p-6 rounded-xl text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-indian-rupee-sign text-blue-500 text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Lowest Price Guarantee</h3>
              <p class="text-gray-600 mb-4">From ₹999/mo</p>
              <p class="text-sm text-gray-500">
                Save up to 85% vs. serviced office
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div class="bg-gray-50 p-6 rounded-xl text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-file-invoice text-green-500 text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">
                Bank Documents in 4 hrs
              </h3>
              <p class="text-gray-600 mb-4">4 hrs delivery</p>
              <p class="text-sm text-gray-500">
                NOC, rent agreement, utility bill delivered instantly
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div class="bg-gray-50 p-6 rounded-xl text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-door-open text-purple-500 text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">
                Meeting Rooms @ ₹299/hr
              </h3>
              <p class="text-gray-600 mb-4">₹299/hr</p>
              <p class="text-sm text-gray-500">10 hours included every month</p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div class="bg-gray-50 p-6 rounded-xl text-center">
              <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-ban text-red-500 text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Zero Hidden Fees</h3>
              <p class="text-gray-600 mb-4">0 Fees</p>
              <p class="text-sm text-gray-500">
                Flat invoice, GST credit available
              </p>
            </div>
          </div>

          <div class="mt-12 bg-blue-50 p-8 rounded-xl text-center">
            <h3 class="text-2xl font-bold text-[var(--color-secondary)] mb-2">
              Save 85% on Office Costs
            </h3>
            <p class="text-gray-600 mb-6">
              Get all the benefits of a premium business address without the
              overhead
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <span class="text-2xl font-bold text-[var(--color-primary)]">
                  ₹999
                </span>
                <span class="text-gray-600">/mo</span>
                <p class="text-sm text-gray-500">Premium Virtual Office</p>
              </div>
              <div class="text-3xl text-gray-300">→</div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <span class="text-2xl font-bold text-green-600">Save 85%</span>
                <p class="text-sm text-gray-500">
                  Compared to traditional office
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      {/* <!-- Audience Section --> */}
      <AudienceSection />

      <FAQSection />

      {/* <!-- CTA Section --> */}
      <Cta />
    </div>
  );
};

export default Home2;

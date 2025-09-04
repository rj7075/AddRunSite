import React from "react";

const Address = () => {
  return (
    <div>
      <section class="py-16 bg-[#0E141B]">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-white mb-4">
            Your Legal Address 
          </h2>
          <p class="text-xl text-center text-[#979292] font-semibold mb-12">
            Pick a City of your choice from more than 40+ locations in India
          </p>

          <div class="flex flex-col md:flex-row items-start gap-8">
            <div class="md:w-1/2">
              <div class="bg-[#243E4C] p-6 rounded-xl shadow-md mb-6">
                <h3 class="text-xl font-semibold mb-4 text-white">
                  Premium Features
                </h3>
                <ul class="space-y-3">
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className="text-[#9b9393]">
                      5-min to Huda City Centre metro
                    </span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className="text-[#9b9393]">
                      In the same campus as TCS, Wipro
                    </span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className="text-[#9b9393]">
                      Free parking & reception
                    </span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className="text-[#9b9393]">
                      Professional business address
                    </span>
                  </li>
                </ul>
              </div>
              <button class="w-full bg-[#2a7986] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center">
                <i class="fas fa-vr-cardboard mr-2"></i> See the Office (360°
                Tour)
              </button>
            </div>
            <div class="md:w-1/2">
              <div class="bg-[#243E4C] p-6 rounded-xl shadow-md h-full">
                <h3 class="text-xl text-white font-semibold mb-4">
                  Why Welldone Tech Park?
                </h3>
                <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <div class="w-full h-48 bg-[#789fb3] flex items-center justify-center">
                    <i class="fas fa-building text-blue-600 text-5xl"></i>
                  </div>
                </div>
                <p class="text-gray-300 mb-4">
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
    </div>
  );
};

export default Address;

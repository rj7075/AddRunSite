import React from "react";
import { problemSolutions1 } from "../assets/ProblemSolutions";

const ProCons = () => {
  return (
    <section className="py-16 bg-[#0E141B]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Transform Your Business Setup
        </h2>
        <p className="text-lg text-center text-[#5b5f63] max-w-3xl mx-auto mb-12">
          Stop struggling with traditional office challenges. Get instant
          compliance and massive savings.
        </p>
        <div className="lg:grid-cols-2 grid md:grid-cols-1 gap-12">
          {problemSolutions1.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              {/* Problem */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="bg-[#161C25] p-6 rounded-lg">
                  <div className="text-red-500 text-2xl font-bold mb-2">
                    Problem
                  </div>
                  <h3 className="text-xl text-white font-semibold mb-4">
                    {item.problem.title}
                  </h3>
                  <div className="text-5xl text-red-400 font-bold mb-4">✕</div>
                  <p className="text-[#cbd0d4]">{item.problem.desc}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="md:w-1/2 md:pl-6">
                <div className="bg-[#161C25] p-6 rounded-lg">
                  <div className="text-green-500 text-2xl font-bold mb-2">
                    Solution
                  </div>
                  <h3 className="text-xl text-white font-semibold mb-4">
                    {item.solution.title}
                  </h3>
                  <div className="text-5xl text-green-400 font-bold mb-4">
                    ✓
                  </div>
                  <p className="text-gray-400">{item.solution.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-10">
          <button className="bg-green-400 text-gray-100 px-6 py-3 sm:px-8 sm:py-4m  rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 hover:text-gray-700 transition w-full sm:w-auto">
            Start Saving Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProCons;

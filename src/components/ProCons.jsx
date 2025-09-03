import React from "react";
import { problemSolutions1 } from "../assets/ProblemSolutions";

const ProCons = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[var(--color-secondary)] mb-12">
          Transform Your Business Setup
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Stop struggling with traditional office challenges. Get instant
          compliance and massive savings.
        </p>

        <div className="lg:grid-cols-2 grid md:grid-cols-1 gap-12">
          {problemSolutions1.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              {/* Problem */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="text-red-500 text-2xl font-bold mb-2">
                    Problem
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {item.problem.title}
                  </h3>
                  <div className="text-5xl text-red-400 font-bold mb-4">✕</div>
                  <p className="text-gray-600">{item.problem.desc}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="md:w-1/2 md:pl-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-green-500 text-2xl font-bold mb-2">
                    Solution
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {item.solution.title}
                  </h3>
                  <div className="text-5xl text-green-400 font-bold mb-4">
                    ✓
                  </div>
                  <p className="text-gray-600">{item.solution.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProCons;

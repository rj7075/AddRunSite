import React from "react";
import { problemSolutions1 } from "../assets/ProblemSolutions";
// import images from "../assets/images";

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
        <div className="lg:grid-cols-3 grid md:grid-cols-2 items-center justify-center gap-12">
          <div className="bg-[#161C25] p-6 rounded-lg">
            <img src="./MeetingRooms.png" alt="MeetingRoom" />
          </div>

          <div className="bg-[#161C25] p-6 rounded-lg">
            <img src="./MeetingRooms.png" alt="MeetingRoom" />
          </div>

          <div className="bg-[#161C25] p-6 rounded-lg">
            <img src="./MeetingRooms.png" alt="MeetingRoom" />
          </div>

          <div className="bg-[#161C25] p-6 rounded-lg">
            <img src="./MeetingRooms.png" alt="MeetingRoom" />
          </div>
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

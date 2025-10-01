import { FiArrowRight, FiCalendar } from "react-icons/fi";

const HeroMeeting = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/20" />

        {/* Optional pattern overlay for visual interest */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                              radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your Perfect Workspace
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto">
          Flexible Coworking & Meeting Rooms
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Book on-demand or monthly plans with premium amenities at affordable
          rates
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToBooking}
            className="min-w-[200px] bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-300"
          >
            Book Now <FiArrowRight className="ml-2" />
          </button>
          <button
            onClick={scrollToBooking}
            className="min-w-[200px] bg-transparent backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-300"
          >
            <FiCalendar className="mr-2" /> Schedule a Visit
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroMeeting;

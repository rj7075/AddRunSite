import { FiArrowRight, FiCalendar } from "react-icons/fi";

const HeroMeeting = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center mt-20 justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Optional subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Find Your Perfect Workspace
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto">
          Flexible Coworking & Meeting Rooms
        </p>
        <p className="text-sm md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Book on-demand or monthly plans with premium amenities at affordable
          rates
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToBooking}
            className="min-w-[200px] bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book Now <FiArrowRight className="ml-2" />
          </button>
          <button
            onClick={scrollToBooking}
            className="min-w-[200px] bg-transparent backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FiCalendar className="mr-2" /> Schedule a Visit
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}
    </section>
  );
};

export default HeroMeeting;

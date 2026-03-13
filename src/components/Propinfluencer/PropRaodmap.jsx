import { FaMapPin, FaCheck, FaClock, FaBullseye } from "react-icons/fa";

const phases = [
  {
    icon: FaCheck,
    status: "live",
    label: "Phase 1",
    timing: "Now",
    title: "Launch at Welldone Tech Park",
    description:
      "Our flagship location is live and operational. Partners onboarding now.",
    location: "Welldone Tech Park, Gurgaon",
  },
  {
    icon: FaClock,
    status: "upcoming",
    label: "Phase 2",
    timing: "April Mid 2026",
    title: "Expansion to MG Road & Dwarka",
    description:
      "Two premium locations opening simultaneously. Early partners get priority access.",
    location: "MG Road, Gurgaon + Dwarka, Delhi",
  },
  {
    icon: FaBullseye,
    status: "goal",
    label: "Phase 3",
    timing: "The Goal",
    title: "1 Lac sq. ft. Managed Inventory",
    description:
      "The full portfolio under your fingertips. Exclusive inventory across Delhi-NCR for you to market.",
    location: "Gurgaon, Delhi, Noida",
  },
];

export default function PropRoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative border-t border-gray-200 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-semibold text-xs uppercase tracking-widest text-[#F2B966]">
            Roadmap
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Roadmap to April/May 2026.
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gray-200 md:block" />

          <div className="flex flex-col gap-8 md:gap-12">
            {phases.map((phase) => {
              const Icon = phase.icon;

              return (
                <div key={phase.label} className="relative flex gap-6 md:gap-10">
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden md:block">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        phase.status === "live"
                          ? "border-[#F2B966] bg-[#3d3222]"
                          : "border-gray-400 bg-gray-700"
                      }`}
                    >
                      <Icon
                        className={`text-sm ${
                          phase.status === "live"
                            ? "text-[#F2B966]"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-lg border p-6 transition-colors ${
                      phase.status === "live"
                        ? "border-[#F2B966] bg-[#5a5142]"
                        : "border-gray-400 bg-gray-700"
                    }`}
                  >
                    {/* Phase label */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="font-semibold text-xs uppercase tracking-widest text-[#F2B966]">
                        {phase.label}
                      </span>

                      {phase.status === "live" ? (
                        <span className="rounded bg-[#F2B966] px-2 py-1 font-semibold text-xs text-black">
                          Live
                        </span>
                      ) : (
                        <span className="rounded border border-gray-300 px-2 py-1 font-semibold text-xs text-gray-300">
                          {phase.timing}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg font-semibold text-gray-100">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-gray-300">
                      {phase.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <FaMapPin className="text-[10px]" />
                      <span className="font-semibold">{phase.location}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
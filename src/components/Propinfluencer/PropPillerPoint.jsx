import { FaDollarSign, FaRocket, FaSyncAlt } from "react-icons/fa";

const pillars = [
  {
    icon: FaDollarSign,
    number: "01",
    title: "Zero Capital, Infinite Scale.",
    description:
      "Traditional real estate requires crores. Asset Sense gives you exclusive access to 1 lac sq. ft. of prime office space in Gurgaon, Delhi, and Noida to market as your own.",
    highlight: "0 investment required",
  },
  {
    icon: FaRocket,
    number: "02",
    title: "We Fuel Your Growth.",
    description:
      "We don't just give you a link. Every selected partner gets ₹5,000 in Meta/Google Ad credits to supercharge their content.",
    highlight: "₹5,000 ad credits",
  },
  {
    icon: FaSyncAlt,
    number: "03",
    title: "The Passive Revenue Flywheel.",
    description:
      "Earn a monthly recurring commission for every seat closed. Sell once, get paid every month. Our subscription-based ECS model ensures you get paid as soon as we do.",
    highlight: "Recurring revenue",
  },
];

export default function PropPillerPoint() {
  return (
    <section id="advantage" className="relative py-10">
      <div className="mx-auto max-w-6xl px-6">
<hr />
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-semibold text-xs uppercase tracking-widest text-[#F2B966]">
            Asset Sense Prop-Influencer Advantage
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Three pillars that make this work.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.number}
                className="group relative flex flex-col gap-6 rounded-lg border border-[#F2B966] bg-gray-700 p-8 transition-colors hover:border-blue-400"
              >
                {/* Top */}
                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-500">
                    <Icon className="text-lg text-[#F2B966]" />
                  </div>

                  <span className="font-semibold text-xs text-gray-300">
                    {pillar.number}
                  </span>

                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-[#F2B966]">
                    {pillar.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-200">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlight */}
                <div className="mt-auto">
                  <span className="inline-block rounded-md bg-gray-800 px-3 py-1 font-semibold text-xs text-[#F2B966]">
                    {pillar.highlight}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
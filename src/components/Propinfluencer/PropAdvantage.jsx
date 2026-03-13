import { FaDollarSign, FaRocket, FaSyncAlt } from "react-icons/fa";

const pillars = [
  {
    icon: FaDollarSign,
    number: "01",
    title: "Asset Sense Workspaces is not an idea or a concept.",
    description:
      "It is a live commercial real estate platform operating across Delhi NCR, with managed office inventory, active clients, and expanding locations. Operating since 2012 as Asset Sense Pvt Ltd. ",
    highlight: "Trusted Since 2012",
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Operational Proof",
    description:
      "Our spaces are located inside Grade-A commercial buildings, Welldone Tech Park, Spaze i-Tech Park, Vipul Square and at many more locations. Companies are already paying monthly subscriptions for these offices. ",
    highlight: "Grade A Buildings",
  },
  {
    icon: FaSyncAlt,
    number: "03",
    title: "Why Prop-Influencers Choose Asset Sense ",
    description:
      "Most brokers earn once and start from zero again on the next deal. Asset Sense partners participate in a subscription-based office model, where businesses pay monthly for workspace — creating ongoing earning potential instead of one-time commissions.",
    highlight: "Recurring revenue",
  },
];

export default function PropAdvantage() {
  return (
    <section id="advantage" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-semibold text-xs uppercase tracking-widest text-[#F2B966]">
            Asset Sense Advantage
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
           A Real Business. Backed by Real Assets 
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
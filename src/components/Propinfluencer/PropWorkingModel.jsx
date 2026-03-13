import { FaPen, FaUsers, FaChartBar } from "react-icons/fa";

const steps = [
  {
    icon: FaPen,
    step: "01",
    label: "You Post",
    title: "Create Authority-Driven Content",
    description:
      "Publish high-value content on LinkedIn, YouTube, or Instagram. Position yourself as the go-to workspace advisor in Delhi-NCR.",
    platforms: ["LinkedIn", "YouTube", "Instagram"],
  },
  {
    icon: FaUsers,
    step: "02",
    label: "We Close",
    title: "Core-ASW Team Takes Over",
    description:
      "Our dedicated Core-ASW team (Sales & Ops) handles the site tours, legalities, and onboarding. You generate the lead, we convert it.",
    platforms: ["Site Tours", "Legalities", "Onboarding"],
  },
  {
    icon: FaChartBar,
    step: "03",
    label: "The Tech",
    title: "Track Everything in Real-Time",
    description:
      "Track every lead, every ad rupee spent, and every payout in your Prop-Influencer Dashboard. Full transparency, zero guesswork.",
    platforms: ["Lead Tracking", "Ad Spend", "Payouts"],
  },
];

export default function PropWorkingModel() {
  return (
    <section
      id="how-it-works"
      className="relative border-t border-gray-200 py-15 "
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-semibold text-xs uppercase tracking-widest text-[#F2B966]">
            Core-ASW Sales Engine
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            How the engine works.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid gap-0 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="relative flex flex-col gap-6 border-b border-gray-200 p-8 md:border-b-0 md:border-r last:border-b-0 last:border-r-0"
              >

                {/* Step Number */}
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-[#F2B966]">
                    {step.step}
                  </span>

                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300">
                  <Icon className="text-[#F2B966] text-lg" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-xs uppercase tracking-widest text-[#e4b675]">
                    {step.label}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-100">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {step.platforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-md bg-gray-200 px-2.5 py-1 font-semibold text-xs text-gray-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Arrow connector (desktop) */}
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-gray-700 md:flex">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="text-[#F2B966]"
                    >
                      <path
                        d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
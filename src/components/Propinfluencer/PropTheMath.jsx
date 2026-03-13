import { FaChartLine } from "react-icons/fa";

const revenueRows = [
  { seats: 10, low: "5,000", high: "10,000" },
  { seats: 25, low: "12,500", high: "25,000" },
  { seats: 50, low: "25,000", high: "50,000" },
  { seats: 100, low: "50,000", high: "1,00,000" },
];

export default function PropTheMathSection() {
  return (
    <section
      id="the-math"
      className="relative border-t border-gray-200 py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">

            <div>
              <p className="mb-3 font-semibold text-xs uppercase tracking-widest text-[#F2B966]">
                Transparency
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                The math speaks for itself.
              </h2>
            </div>

            <blockquote className="border-l-2 border-[#F2B966] pl-6">
              <p className="text-lg italic leading-relaxed text-gray-300">
                "A typical Prop-Influencer managing 50 seats at our Welldone Tech Park center
                can generate ₹25,000 - ₹50,000 in monthly recurring revenue
                with zero overhead."
              </p>
            </blockquote>

            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-700">
                  <FaChartLine className="text-sm text-[#F2B966]" />
                </div>

                <span className="text-sm text-gray-300">
                  Zero overhead. Zero risk. Pure margin.
                </span>
              </div>

              <div className="rounded-lg border border-[#f0ece7] bg-gray-700 p-4">
                <p className="font-semibold text-xs text-[#F2B966]">
                  Revenue model: Subscription-based ECS
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  You get paid as soon as we do. Monthly recurring commissions
                  via automated payouts.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE TABLE */}
          <div className="flex flex-col gap-4">

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-700">

              {/* Table Header */}
              <div className="border-b border-gray-200 bg-gray-700 px-6 py-3">
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-semibold text-xs uppercase tracking-wider text-gray-400">
                    Seats
                  </span>
                  <span className="font-semibold text-xs uppercase tracking-wider text-gray-400">
                    Low Est.
                  </span>
                  <span className="font-semibold text-xs uppercase tracking-wider text-gray-400">
                    High Est.
                  </span>
                </div>
              </div>

              {/* Rows */}
              {revenueRows.map((row, i) => (
                <div
                  key={row.seats}
                  className={`grid grid-cols-3 gap-4 px-6 py-4 ${
                    i < revenueRows.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  } ${row.seats === 50 ? "bg-[#7a7164]" : ""}`}
                >
                  <span className="font-semibold text-sm font-semibold text-gray-100">
                    {row.seats}
                  </span>

                  <span className="font-semibold text-sm text-gray-400">
                    ₹{row.low}
                  </span>

                  <span className="font-semibold text-sm font-semibold text-[#F2B966]">
                    ₹{row.high}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-semibold text-xs text-gray-300">
              * Monthly recurring revenue estimates. Actual earnings depend on
              seat pricing and center location.
            </p>

            {/* BAR CHART */}
            <div className="mt-4 flex flex-col gap-3">

              <p className="font-semibold text-xs uppercase tracking-wider text-gray-300">
                Revenue Potential
              </p>

              {revenueRows.map((row) => {
                const numericHigh = parseInt(row.high.replace(/,/g, ""));
                const width = Math.min((numericHigh / 100000) * 100, 100);

                return (
                  <div key={row.seats} className="flex items-center gap-3">

                    <span className="w-10 text-right font-semibold text-xs text-gray-300">
                      {row.seats}
                    </span>

                    <div className="relative h-6 flex-1 overflow-hidden rounded-sm bg-gray-200">
                      <div
                        className="h-full rounded-sm bg-[#F2B966] transition-all duration-700"
                        style={{ width: `${width}%` }}
                      />
                    </div>

                    <span className="w-20 text-right font-semibold text-xs text-[#F2B966]">
                      ₹{row.high}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
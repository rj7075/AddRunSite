// components/IndiaDottedMap.jsx
import React from "react";

/**
 * IndiaDottedMap
 * - Simple stylized "dotted" India map built with SVG shapes + dots
 * - Markers for main business cities with hover tooltip & subtle pulse animation
 * - No external images or icon libs required
 *
 * Usage: <IndiaDottedMap />
 */

const cities = [
  { id: "delhi", name: "Delhi / New Delhi", x: 520, y: 150, highlight: true },
  { id: "gurgaon", name: "Gurgaon / Noida", x: 540, y: 170, highlight: true },
  { id: "mumbai", name: "Mumbai", x: 240, y: 420, highlight: true },
  { id: "pune", name: "Pune", x: 300, y: 480 },
  { id: "bangalore", name: "Bengaluru", x: 560, y: 480, highlight: true },
  { id: "hyderabad", name: "Hyderabad", x: 520, y: 360 },
  { id: "chennai", name: "Chennai", x: 700, y: 520 },
  { id: "ahmedabad", name: "Ahmedabad", x: 380, y: 260 },
  { id: "kolkata", name: "Kolkata", x: 870, y: 260, highlight: true },
];

export default function Map() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Inline keyframes for pulse (Tailwind custom keyframes often require config; using inline style keeps it self-contained) */}
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.6; }
          70% { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .pulse-ring {
          animation: pulse-ring 1.6s cubic-bezier(.66,.05,.21,.9) infinite;
        }
      `}</style>

      <section className="bg-[#0f1720] p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: map */}
          <div className="flex-1 min-h-[320px] rounded-xl bg-gradient-to-br from-[#21303a] to-[#22333a] p-6">
            <h3 className="text-white text-xl font-semibold mb-4">
              Available in all major business cities
            </h3>

            <div className="relative">
              {/* SVG canvas */}
              <svg
                viewBox="0 0 1000 700"
                className="w-full h-[420px] md:h-[360px] rounded-lg overflow-visible"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Stylized dotted map silhouette (approximate shape using grouped circles to feel like a dotted map) */}
                {/* A handful of evenly spaced dots form the background 'map' silhouette */}
                <g opacity="0.12">
                  {Array.from({ length: 380 }).map((_, i) => {
                    // distribute dots roughly within an india-shaped bounding region
                    // produce pseudo-random but stable placement
                    const col = i % 20;
                    const row = Math.floor(i / 20);
                    // grid-like placement then push into a rough India silhouette using simple math
                    const gx = 60 + col * 42 + (row % 2) * 8;
                    const gy = 40 + row * 16 + Math.sin((col + row) / 6) * 8;
                    // keep within svg
                    if (gx > 940 || gy > 620) return null;
                    return (
                      <circle
                        key={i}
                        cx={gx}
                        cy={gy + (gx < 200 ? 12 : 0) + (gx > 800 ? -20 : 0)}
                        r="2.2"
                        fill="#ffffff"
                      />
                    );
                  })}
                </g>

                {/* Light dashed outline (decorative) */}
                <path
                  d="M120 240 C 160 120, 260 80, 360 100 C 480 130, 540 110, 640 140 C 760 180, 820 280, 760 360 C 700 430, 620 470, 540 520 C 480 560, 360 580, 240 540 C 140 510, 100 420, 120 240 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity="0.06"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />

                {/* Markers */}
                {cities.map((c) => (
                  <g
                    key={c.id}
                    className="group cursor-pointer"
                    transform={`translate(${c.x}, ${c.y})`}
                  >
                    {/* pulsing ring for highlighted cities */}
                    {c.highlight && (
                      <circle
                        cx="0"
                        cy="0"
                        r="18"
                        className="pulse-ring"
                        fill="none"
                        stroke="#5eead4"
                        strokeOpacity="0.12"
                        strokeWidth="3"
                      />
                    )}

                    {/* outer ring */}
                    <circle
                      cx="0"
                      cy="0"
                      r="10"
                      fill={c.highlight ? "#34d399" : "#60a5fa"}
                      opacity="0.95"
                    />
                    {/* inner dot */}
                    <circle cx="0" cy="0" r="4" fill="#02111a" />

                    {/* label (appears on hover) */}
                    <foreignObject x="14" y="-34" width="230" height="80">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-[#081019] text-white text-xs px-3 py-2 rounded-xl shadow-lg border border-white/6">
                          <div className="font-semibold text-sm">{c.name}</div>
                          <div className="text-[12px] text-gray-300">
                            Setup in 24 hrs • Starting ₹499
                          </div>
                        </div>
                      </div>
                    </foreignObject>
                    {/* tiny label below for small screens (always visible) */}
                    <text
                      x="0"
                      y="26"
                      textAnchor="middle"
                      fontSize="10"
                      fill="#cfeff7"
                      className="md:opacity-0 opacity-100"
                    >
                      {c.name.split(" ")[0]}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Bottom overlay stats */}
              <div className="mt-4 flex flex-wrap gap-3 items-center">
                <span className="inline-flex items-center gap-2 bg-[#052025] text-[#bfeee0] px-3 py-2 rounded-full text-sm border border-white/6 shadow-sm">
                  <strong>40+</strong> Cities
                </span>
                <span className="inline-flex items-center gap-2 bg-[#052025] text-[#ffdca3] px-3 py-2 rounded-full text-sm border border-white/6 shadow-sm">
                  Affordable plans — from <strong>₹499</strong>/month
                </span>
                <span className="inline-flex items-center gap-2 bg-[#052025] text-[#c7d2fe] px-3 py-2 rounded-full text-sm border border-white/6 shadow-sm">
                  Paperless setup • 24 hours
                </span>
                <span className="inline-flex items-center gap-2 bg-[#052025] text-[#bbf7d0] px-3 py-2 rounded-full text-sm border border-white/6 shadow-sm">
                  Money-back guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Right: short textual reinforcement & city chips */}
          <div className="w-full lg:w-[360px] rounded-xl bg-[#122029] p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">
                Pan-India Virtual Offices
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Premium business addresses in India’s major commercial cities —
                quick setup, affordable subscription plans, trusted by hundreds
                of businesses. If you’re not satisfied, we offer a full
                money-back guarantee.
              </p>

              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <span
                    key={c.id}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      c.highlight
                        ? "bg-[#1b3140] text-[#aee6d6]"
                        : "bg-[#0f2430] text-[#cfeaf3]"
                    } border border-white/5`}
                  >
                    {c.name.split("/")[0].trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <button className="w-full bg-gradient-to-r from-[#16747a] to-[#1d8f8f] text-white py-2 rounded-full font-semibold shadow">
                See Plans — Starting ₹499
              </button>
              <div className="mt-3 text-xs text-gray-300">
                <span className="inline-block mr-2">✅ Quick setup</span>
                <span className="inline-block mr-2">✅ 24-hour activation</span>
                <span className="inline-block">✅ Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

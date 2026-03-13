import { FaArrowRight } from "react-icons/fa";
import PropPopupForm from "./PropForm";
import { useState } from "react";

export default function PropHero() {
    const [open, setOpen] = useState(false);
  return (
    <section className="relative flex min-h-screen items-center pt-20">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,200,0,0.06),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8">

            {/* Badge */}
            <span className="w-fit rounded-md border border-[#F2B966] px-3 py-1 font-semibold text-xs uppercase tracking-widest text-[#F2B966]">
              Exclusive Partnership
            </span>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build a Real Estate Empire{" "}
              <span className="text-[#F2B966]">
                Without Owning a Single Brick
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-lg leading-relaxed text-gray-400">
              Asset Sense Prop-Influencer is a partner program where individuals promote <strong className="text-[#F2B966]">"Managed Office Spaces"</strong> & <strong className="text-[#F2B966]">"Coworking Seats"</strong> across Delhi NCR and earn recurring revenue when companies take offices through their network. Asset Sense operates under the brand name "Asset Sense Workspaces (ASW)". {"Let's hit 1 Lac sq. ft. together."}
            </p>

            <h3 className="text-xl font-semibold text-white">
              Who is it for?
            </h3>

            <ul className="list-disc pl-5 space-y-1 text-[#F2B966] text-sm">
              <li>Real Estate Brokers.</li>
              <li>Influencers</li>
              <li>Start-up Advisors & Consultants</li>
            </ul>



            {/* CTA */}
            <section className="relative">

  {/* background */}
            <div className="absolute inset-0 pointer-events-none"></div>
            

            {/* content */}
            <div className="relative z-10">
                <button
                onClick={() => setOpen(true)}
                className="flex cursor-pointer items-center gap-2 rounded-md bg-[#F2B966] px-3 py-3 font-bold text-xs uppercase tracking-wider text-black hover:bg-[#e09625]"
                >
                Apply for Exclusive Partnership
                <FaArrowRight className="text-xs" />
                </button>
            </div>

            </section>
               <PropPopupForm
                       isOpen={open}
                       onClose={() => setOpen(false)}
                      />
            {/* Stats */}
            <div className="mt-4 flex gap-8 border-t border-gray-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">
                  1L+
                </p>
                <p className="mt-1 text-xs text-gray-300">
                  Sq. ft. inventory
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  10+
                </p>
                <p className="mt-1 text-xs text-gray-300">
                  NCR locations
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#F2B966]">
                  ₹50K+
                </p>
                <p className="mt-1 text-xs text-gray-300">
                  Monthly MRR potential
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative">

            <div className="grid grid-rows-2 gap-3">

              {/* Image 1 */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gray-200">
                <img
                  src="/welldone.png"
                  alt="Premium coworking office space"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-white/20" />

                <span className="absolute bottom-3 left-3 right-3 rounded-md border border-gray-200 bg-white/80 px-2 py-1 font-semibold text-xs text-gray-900">
                  Welldone Tech Park Sohna Road Sector 48 Gurgaon
                </span>
              </div>

              {/* Image 2 */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gray-200">
                <img
                  src="/welldone2.png"
                  alt="Revenue analytics dashboard"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-white/10" />

                <span className="absolute bottom-3 left-3 rounded-md border border-gray-200 bg-white/80 px-2 py-1 font-semibold text-xs text-gray-900 backdrop-blur-sm">
                  
                </span>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
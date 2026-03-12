import { FaArrowRight } from "react-icons/fa";
import PropPopupForm from "./PropForm";
import { useState } from "react";

export default function PropCta() {
   const [open, setOpen] = useState(false);
  return (
    <section className="relative border-t border-gray-200 py-24 lg:py-32">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">

          <p className="font-bold text-xs uppercase tracking-widest text-[#F2B966]">
            Limited Access
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">
            Ready to build your real estate empire?
          </h2>

          <p className="max-w-lg text-lg leading-relaxed text-gray-300">
            Applications are reviewed on a rolling basis. Premium inventory.
            Premium partners only.
          </p>

          {/* CTA Button */}
          <button onClick={() => setOpen(true)} className="flex items-center gap-2 rounded-md bg-[#F2B966] hover:bg-[#e09625] px-6 py-3 font-semibold cursor-pointer text-sm uppercase tracking-wider text-black transition ">
            Apply for Exclusive Partnership
            <FaArrowRight className="text-sm" />
          </button>
          <PropPopupForm
           isOpen={open}
           onClose={() => setOpen(false)}
          />

          {/* Footer Info */}
          <div className="mt-4 flex flex-wrap items-center font-semibold justify-center gap-6 text-xs text-gray-300">
            <span>Zero Capital Required</span>

            <span className="hidden text-gray-300 font-semibold sm:inline">|</span>

            <span>₹5,000 Ad Credits Included</span>

            <span className="hidden text-gray-300 font-semibold sm:inline">|</span>

            <span>Monthly Recurring Revenue</span>
          </div>

        </div>
      </div>
    </section>
  );
}
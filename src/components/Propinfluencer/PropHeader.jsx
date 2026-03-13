import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import PropPopupForm from "./PropForm";

const navLinks = [
  { label: "Advantage", href: "#advantage" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Math", href: "#the-math" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function PropHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all bg-[#1C2735] duration-300`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center">
              <a href="/prop-influencer">
                <img
                  className="w-40 h-17 overflow-hidden"
                  src="/assetlogo.webp"
                  alt="logo"
                />
              </a>
              {/* <p className="text-white">Virtual Office Solutions</p> */}
            </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-200 transition-colors font-semibold hover:text-gray-400"
            >
              {link.label}
            </a>
          ))}

          <button onClick={() => setOpen(true)} className="rounded-md bg-[#F2B966] px-4 py-2 cursor-pointer text-xs font-semibold tracking-wider uppercase text-black hover:bg-[#e09625]">
            Apply Now
          </button>
          
        </div>
         <PropPopupForm
           isOpen={open}
           onClose={() => setOpen(false)}
          />
        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-300 md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-b border-gray-200 bg-white/95 backdrop-blur-xl px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}

            <button className="w-full rounded-md bg-black px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white hover:bg-gray-800">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
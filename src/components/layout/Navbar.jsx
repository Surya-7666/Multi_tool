import { useState } from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 pb-3">
        {/* Top row */}
        <div className="flex items-center justify-between md:grid md:grid-cols-[auto,1fr,auto] md:gap-4">
          {/* LOGO */}
          <button
            type="button"
            onClick={() => scrollTo("overview")}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Multi-tool logo"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="font-medium text-base md:text-lg tracking-wide text-slate-100">
              Multi-tool
            </span>
          </button>

          {/* CENTER NAV - DESKTOP ONLY */}
          <nav className="hidden md:flex justify-center">
            <div className="flex flex-col items-center">
              <div className="flex gap-10 text-[0.9rem] text-slate-300">
                <button
                  type="button"
                  onClick={() => scrollTo("overview")}
                  className="hover:text-white transition"
                >
                  Overview
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("about")}
                  className="hover:text-white transition"
                >
                  About
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("tools")}
                  className="hover:text-white transition"
                >
                  Tools
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("testimonials")}
                  className="hover:text-white transition"
                >
                  Testimonials
                </button>
              </div>

              {/* underline only on desktop */}
              <div className="mt-3 h-px w-[260px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>
          </nav>

          {/* CONTACT BUTTON - DESKTOP ONLY */}
          <div className="hidden md:flex justify-end">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-purple-500/60 bg-white/5 px-5 py-2 text-xs font-medium text-slate-100 hover:bg-white/10 transition"
            >
              Contact Us
            </button>
          </div>

          {/* HAMBURGER - MOBILE ONLY */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 px-3 py-2 text-slate-200"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <span className="text-sm">✕</span>
            ) : (
              <span className="space-y-1">
                <span className="block h-0.5 w-4 bg-slate-200" />
                <span className="block h-0.5 w-4 bg-slate-200" />
                <span className="block h-0.5 w-4 bg-slate-200" />
              </span>
            )}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="mt-3 border-t border-slate-800 pt-3 md:hidden">
            <nav className="flex flex-col gap-2 text-sm text-slate-200">
              <button
                type="button"
                onClick={() => scrollTo("overview")}
                className="text-left py-1 hover:text-white"
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="text-left py-1 hover:text-white"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => scrollTo("tools")}
                className="text-left py-1 hover:text-white"
              >
                Tools
              </button>
              <button
                type="button"
                onClick={() => scrollTo("testimonials")}
                className="text-left py-1 hover:text-white"
              >
                Testimonials
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="mt-2 self-start rounded-full border border-purple-500/60 bg-white/5 px-4 py-2 text-[0.75rem] font-medium text-slate-100 hover:bg-white/10 transition"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

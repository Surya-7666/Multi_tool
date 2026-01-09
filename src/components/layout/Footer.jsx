import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="relative bg-[#050013] pb-10 pt-14">

      {/* MAIN FOOTER CARD */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl border border-purple-500/40 bg-[#0b001a]/70 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.9)] overflow-hidden">

          {/* soft gradient glow */}
          <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.25)_0,_transparent_70%)]" />

          <div className="relative flex flex-col items-center space-y-6">

            {/* LOGO + NAME */}
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.7)]">
                <img
                  src={logo}
                  alt="Multi-tool"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <span className="text-slate-100 font-semibold text-lg tracking-wide">
                Multi-tool
              </span>
            </div>

            {/* NAV LINKS */}
            <div className="flex gap-10 text-slate-300 text-sm">
              <button
                onClick={() =>
                  document.getElementById("overview")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-white transition"
              >
                Home
              </button>

              <button
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-white transition"
              >
                About
              </button>

              <button
                onClick={() =>
                  document.getElementById("tools")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-white transition"
              >
                Tools
              </button>

              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-white transition"
              >
                Contact Us
              </button>
            </div>

            {/* COPYRIGHT */}
            <p className="text-xs text-slate-400 text-center">
              © {new Date().getFullYear()} All Rights Reserved by{" "}
              <span className="text-slate-200 font-medium">Multi-tool</span>
            </p>
          </div>
        </div>
      </div>

      {/* GO UP BUTTON */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(88,28,135,0.8)] hover:brightness-110 active:scale-95 transition"
        >
          Go Up✌️
        </button>
      </div>
    </footer>
  );
}

export default Footer;

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toolsConfig } from "../../data/toolsConfig";
import ToolCard from "../ui/ToolCard";
import ToolModal from "../ui/ToolModal";
import { useToolModal } from "../../hooks/useToolModal";
import logo from "../../assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

function ToolsSection() {
  const sectionRef = useRef(null);
  const orbitRef = useRef([]);
  const logoRef = useRef(null);
  const cardsRef = useRef([]);

  const { selectedTool, openTool, closeTool } = useToolModal();
  const [showAll, setShowAll] = useState(false);

  const visibleTools = showAll ? toolsConfig : toolsConfig.slice(0, 6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* SECTION ENTRY */
      gsap.from(".tools-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      /* ORBIT RINGS – slow infinite rotation */
      orbitRef.current.forEach((ring, i) => {
        gsap.to(ring, {
          rotate: i % 2 === 0 ? 360 : -360,
          duration: 40 + i * 10,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      });

      /* LOGO FLOAT */
      gsap.to(logoRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* TOOL CARDS STAGGER */
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: ".tools-grid",
          start: "top 80%",
          once: true,
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [showAll]);

  return (
    <section
      id="tools"
      ref={sectionRef}
      className="relative bg-[#050013] py-20"
    >
      {/* TOP */}
      <div className="tools-heading max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
          Popular Tools
        </h2>
        <p className="text-sm md:text-base text-slate-300">
          Quick access to your essential tools — fast, simple, and ready to use.
        </p>

        {/* ORBIT */}
        <div className="relative mt-8 h-40 flex items-center justify-center">
          {[0, 1, 2].map((_, i) => (
            <div
              key={i}
              ref={(el) => (orbitRef.current[i] = el)}
              className={`absolute rounded-full border border-purple-500/${
                40 - i * 10
              }`}
              style={{
                width: `${180 + i * 40}px`,
                height: "96px",
              }}
            />
          ))}

          {/* LOGO */}
          <div
            ref={logoRef}
            className="relative h-20 w-20 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-[0_0_60px_rgba(147,51,234,0.85)] border border-purple-400/40"
          >
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>
      </div>

      {/* TOOL GRID CARD */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl border border-purple-500/30 bg-[#090017]/90 px-4 py-6 sm:px-8 sm:py-8 shadow-[0_20px_60px_rgba(15,23,42,0.9)] overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)
              `,
              backgroundSize: "52px 52px",
            }}
          />

            <div className="tools-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
  {visibleTools.map((tool) => (
    <ToolCard
      key={tool.id}
      tool={tool}
      onClick={() => openTool(tool)}
    />
  ))}
</div>


          {toolsConfig.length > 6 && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowAll((p) => !p)}
                className="text-xs sm:text-sm text-slate-200 hover:text-white px-4 py-1.5 rounded-full border border-slate-600/70 bg-white/5 hover:bg-white/10 transition"
              >
                {showAll ? "Show Less ▲" : "Show More ▼"}
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedTool && <ToolModal tool={selectedTool} onClose={closeTool} />}
    </section>
  );
}

export default ToolsSection;
  
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../layout/SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",   // when section enters viewport
          toggleActions: "play none none none",
          once: true,         // play only once
        },
        defaults: {
          ease: "power2.out",
          duration: 0.8,
        },
      });

      // Card reveal
      tl.from(".about-card", {
        y: 30,
        opacity: 0,
      });

      // Text stagger
      tl.from(
        ".about-item",
        {
          y: 16,
          opacity: 0,
          stagger: 0.15,
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="about" className="relative">
      <div ref={sectionRef}>
        {/* Card container */}
        <div className="about-card relative overflow-hidden rounded-3xl border border-purple-500/40 bg-gradient-to-b from-white/5 via-purple-800/10 to-purple-900/40 px-4 py-5 sm:px-8 sm:py-6 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
          {/* inner grid & glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(circle at top, rgba(168,85,247,0.6) 0, transparent 55%),
                linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)
              `,
              backgroundSize: "100% 100%, 42px 42px, 42px 42px",
            }}
          />

          {/* content */}
          <div className="relative text-left text-slate-100 space-y-2 sm:space-y-3">
            <p className="about-item text-xs sm:text-sm font-semibold">
              About Us<span className="ml-1">✌️</span>
            </p>

            <p className="about-item text-sm sm:text-base font-semibold">
              Welcome to <span className="text-white">MultiTool Hub</span>,
            </p>

            <p className="about-item text-[0.75rem] sm:text-sm text-slate-200 leading-relaxed">
              We built this platform with a simple idea:{" "}
              <span className="italic">
                &quot;Why use multiple apps when everything can exist in one
                place?&quot;
              </span>
            </p>

            <p className="about-item text-[0.75rem] sm:text-sm text-slate-200 leading-relaxed">
              Our tools are created for college students<span>🎓</span> and
              anyone who wants quick access to essential utilities — without
              downloading anything or dealing with ads and distractions.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;

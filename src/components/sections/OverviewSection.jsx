import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../layout/SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

function OverviewSection() {
  const sectionRef = useRef(null);

  const handleExplore = () => {
    document
      .getElementById("tools")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
  ".ov-content > *",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    clearProps: "opacity,transform",
  }
);


      gsap.to(".ov-stars", {
        yPercent: -20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".ov-glow", {
        yPercent: -35,
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".ov-grid", {
        yPercent: -25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050013] pt-20 pb-40"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="ov-stars absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22)_0,_transparent_55%)] opacity-40" />

        <div className="ov-glow absolute inset-x-[-40%] bottom-[-35%] h-[360px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.9)_0,_transparent_65%)] opacity-60 blur-3xl" />

        <div
          className="ov-grid absolute inset-x-[-10%] bottom-[-12%] h-[280px] opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148,163,184,0.4) 1px, transparent 1px),
              linear-gradient(to top, rgba(148,163,184,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "42px 30px",
            transform: "perspective(900px) rotateX(70deg)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* CONTENT */}
      <SectionWrapper>
        <div className="ov-content relative z-10 flex flex-col items-center text-center">
          <p className="text-[0.75rem] uppercase tracking-[0.3em] text-slate-300/70 mb-6">
            Multi-tool Overview
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50 mb-4 max-w-3xl">
            All Your Everyday Tools in
            <br className="hidden sm:block" /> One Powerful Place
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mb-12">
            Simple, fast, and reliable utilities for your daily tasks — built
            to feel modern, fast, and beautiful.
          </p>

          {/* 🔥 CTA */}
          <button
            onClick={handleExplore}
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-gradient-to-r from-purple-500 to-indigo-500
              px-10 py-3.5
              text-sm font-semibold
              text-white
              shadow-[0_25px_60px_rgba(88,28,135,0.65)]
              hover:brightness-110
              active:scale-95
              transition
            "
          >
            Explore Now
          </button>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default OverviewSection;

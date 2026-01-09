import { useEffect, useMemo, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../layout/SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const rawTestimonials = [
  {
    name: "Student User",
    role: "Engineering Student",
    quote:
      "Instead of googling a new site for every tiny thing, I just keep this open in a tab.",
  },
  {
    name: "Developer",
    role: "Frontend Dev",
    quote:
      "The color picker and generators save me so much context switching while I’m building UIs.",
  },
  {
    name: "Casual User",
    role: "Just curious",
    quote:
      "I came for the calculator, stayed for the random fun tools and small utilities.",
  },
  {
    name: "Power User",
    role: "Product Designer",
    quote:
      "Having all these tools in one clean place is perfect for quick explorations and mockups.",
  },
  {
    name: "Busy Founder",
    role: "Startup Owner",
    quote:
      "No logins, no ads. Just open, use what I need, and close. Exactly what I wanted.",
  },
  {
    name: "Night Owl",
    role: "Late-night Coder",
    quote:
      "From quick calculations to tiny utilities, this has replaced half my bookmarks.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const SLIDE_DURATION = 7000; // ms

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // GSAP refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const sliderRef = useRef(null);

  // group testimonials into slides of 3
  const slides = useMemo(() => {
    const chunkSize = 3;
    const out = [];
    for (let i = 0; i < rawTestimonials.length; i += chunkSize) {
      out.push(rawTestimonials.slice(i, i + chunkSize));
    }
    return out;
  }, []);

  const totalSlides = slides.length;

  // auto slide
  useEffect(() => {
    if (totalSlides <= 1) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [current, totalSlides]);

  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  const goNext = () =>
    setCurrent((prev) => (prev + 1) % totalSlides);

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(sliderRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 30,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-[#050013] py-20 overflow-hidden"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16)_0,_transparent_55%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(88,28,135,0.6)_0,_transparent_65%)] opacity-40" />
      </div>

      {/* progress animation */}
      <style>{`
        @keyframes testimonial-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>

      <SectionWrapper>
        {/* heading */}
        <div
          ref={headingRef}
          className="relative text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-purple-300 mb-3">
            What They Say
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Our User Kind Words
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Honest feedback from people who actually use MultiTool Hub.
          </p>
        </div>

        {/* slider */}
        <div ref={sliderRef} className="relative mb-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((group, index) => (
                <div
                  key={index}
                  className="min-w-full grid gap-5 md:grid-cols-3"
                >
                  {group.map((t) => (
                    <div
                      key={t.name}
                      className="testimonial-card rounded-2xl bg-[#140826] border border-purple-500/30 px-5 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.9)]"
                    >
                      <p className="text-sm font-semibold text-slate-50 mb-3">
                        Satisfied User
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 mb-6">
                        {t.quote}
                      </p>

                      <div className="h-px bg-slate-700/40 mb-4" />

                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-semibold text-white">
                          {getInitials(t.name)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-50">
                            {t.name}
                          </p>
                          <p className="text-[0.7rem] text-slate-400">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* controls */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <button
              onClick={goPrev}
              className="h-9 w-9 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:bg-slate-800"
            >
              ←
            </button>
            <button
              onClick={goNext}
              className="h-9 w-9 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
            >
              →
            </button>
          </div>

          {totalSlides > 1 && (
            <div className="w-40 h-1.5 rounded-full bg-slate-700/40 overflow-hidden">
              <div
                key={current}
                className="h-full bg-gradient-to-r from-purple-400 to-indigo-400"
                style={{
                  animation: `testimonial-progress ${SLIDE_DURATION}ms linear`,
                }}
              />
            </div>
          )}
        </div>
      </SectionWrapper>
    </section>
  );
}

export default TestimonialsSection;

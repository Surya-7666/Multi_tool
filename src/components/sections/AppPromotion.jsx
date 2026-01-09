import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/observer";
import SectionWrapper from "../layout/SectionWrapper";
import preview from "../../assets/preview.jpeg";

gsap.registerPlugin(ScrollTrigger, Observer);

function AppPromotion() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Text stagger
      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Image slide + scale
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 60,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });

      // Button pop
      gsap.from(buttonRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
        },
      });

      // Observer-based subtle tilt
      Observer.create({
        target: sectionRef.current,
        type: "pointer",
        onMove(self) {
          gsap.to(imageRef.current, {
            rotateY: self.deltaX * 0.02,
            rotateX: -self.deltaY * 0.02,
            duration: 0.3,
            ease: "power1.out",
          });
        },
        onStop() {
          gsap.to(imageRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mobile-app"
      className="bg-[#050013] py-16 overflow-hidden"
    >
      <SectionWrapper>
        <div className="relative rounded-3xl border border-purple-500/35 bg-[#090017]/90 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">

          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.35)_0,_transparent_55%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">

            {/* LEFT */}
            <div ref={textRef} className="space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-purple-300">
                😎 TRY NOW!!!
              </p>

              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                All your tools. One powerful
                <br className="hidden sm:block" /> mobile app.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Experience all multi-tool features in one powerful, easy-to-use
                mobile application.
              </p>

              <button
                ref={buttonRef}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-2 text-xs sm:text-sm font-semibold text-white hover:brightness-110 active:scale-95 transition"
              >
                View our App 👆
              </button>
            </div>

            {/* RIGHT */}
            <div ref={imageRef} className="flex justify-center">
              <div className="w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={preview}
                  alt="Mobile App Preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default AppPromotion;

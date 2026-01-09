import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import spinnerImg from "../../assets/spinner.png";

function SpinnerTool() {
  const controls = useAnimation();
  const [lastClick, setLastClick] = useState(null);
  const [rotation, setRotation] = useState(0); // ✅ track rotation manually

  const handleSpin = () => {
    const now = Date.now();

    let spins = 4;
    let duration = 1.4;

    if (lastClick) {
      const diff = now - lastClick;

      if (diff < 150) {
        spins = 12;
        duration = 1.6;
      } else if (diff < 350) {
        spins = 9;
        duration = 1.5;
      } else if (diff < 800) {
        spins = 6;
        duration = 1.4;
      } else {
        spins = 4;
        duration = 1.6;
      }
    }

    setLastClick(now);

    const nextRotation = rotation + spins * 360;
    setRotation(nextRotation);

    controls.start({
      rotate: nextRotation,
      scale: [1, 1.06, 1],
      transition: {
        duration,
        ease: [0.19, 1.0, 0.22, 1.0],
      },
    });
  };

  return (
    <div className="space-y-4 text-sm text-center">
      <div className="flex justify-center">
        <div className="relative inline-flex flex-col items-center">
          
          {/* glow */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[-12px] h-6 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.75)_0,_transparent_70%)] opacity-70 blur-sm" />

          <motion.img
            src={spinnerImg}
            alt="Relax spinner"
            onClick={handleSpin}
            animate={controls}
            initial={{ rotate: 0 }} // ✅ important
            className="h-40 w-40 md:h-44 md:w-44 cursor-pointer select-none drop-shadow-[0_14px_35px_rgba(88,28,135,0.9)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          />
        </div>
      </div>

     
    </div>
  );
}

export default SpinnerTool;

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import d1 from "../../assets/dice/dice-1.png";
import d2 from "../../assets/dice/dice-2.png";
import d3 from "../../assets/dice/dice-3.png";
import d4 from "../../assets/dice/dice-4.png";
import d5 from "../../assets/dice/dice-5.png";
import d6 from "../../assets/dice/dice-6.png";

const diceImages = { 1: d1, 2: d2, 3: d3, 4: d4, 5: d5, 6: d6 };

function DiceRollerTool() {
  const [value, setValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  const controls = useAnimation();

  const roll = async () => {
    if (rolling) return;

    setRolling(true);

    // Random final value
    const final = Math.floor(Math.random() * 6) + 1;

    // Rapid face change while rolling (fake motion blur)
    let ticks = 0;
    const interval = setInterval(() => {
      ticks++;
      const temp = Math.floor(Math.random() * 6) + 1;
      setValue(temp);
      if (ticks >= 12) clearInterval(interval);
    }, 50);

    // Start 3D-ish roll animation
    controls.set({ rotateX: 0, rotateY: 0, y: 0 });

    controls.start({
      rotateX: 720, // 2 spins
      rotateY: 540, // 1.5 spins
      y: [0, -18, 0, -8, 0], // bounce path
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    });

    // When animation ends, show final value & reset rotation
    setTimeout(async () => {
      setValue(final);
      await controls.start({
        rotateX: 0,
        rotateY: 0,
        y: 0,
        transition: { duration: 0.2 },
      });
      setRolling(false);
    }, 900);
  };

  return (
    <div className="space-y-4 text-sm text-center">
      {/* 3D perspective wrapper */}
      <div className="inline-block" style={{ perspective: 800 }}>
        <motion.img
          src={diceImages[value]}
          alt={`Dice ${value}`}
          animate={controls}
          className="h-24 w-24 select-none drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)] rounded-lg"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      <p className="text-sm text-slate-300">Current value: {value}</p>

      <button
        type="button"
        onClick={roll}
        disabled={rolling}
        className="rounded-md bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-900 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {rolling ? "Rolling..." : "Roll"}
      </button>
    </div>
  );
}

export default DiceRollerTool;

import { useState } from "react";

function CalculatorTool() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");

  const append = (val) => {
    setExpr((prev) => prev + val);
  };

  const clearAll = () => {
    setExpr("");
    setResult("");
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(`return (${expr})`);
      const value = fn();
      setResult(String(value));
    } catch {
      setResult("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+"
  ];

  return (
    <div className="mx-auto w-full max-w-xs rounded-2xl border border-slate-800 bg-[#0b0b14] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      
      {/* Display */}
      <div className="mb-3 rounded-xl bg-black/60 px-3 py-2 text-right">
        <div className="text-xs text-slate-400 truncate">
          {expr || "0"}
        </div>
        <div className="text-lg font-semibold text-emerald-400">
          {result}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "C" ? clearAll() : append(btn)
            }
            className={`rounded-lg py-2 text-sm font-semibold transition active:scale-95
              ${
                btn === "C"
                  ? "bg-rose-500/90 text-white hover:bg-rose-500"
                  : "+-*/".includes(btn)
                  ? "bg-indigo-500/90 text-white hover:bg-indigo-500"
                  : "bg-slate-800 text-slate-100 hover:bg-slate-700"
              }`}
          >
            {btn}
          </button>
        ))}

        {/* Equals */}
        <button
          onClick={calculate}
          className="col-span-4 mt-2 rounded-lg bg-emerald-500 py-2 text-sm font-bold text-slate-950 hover:bg-emerald-400 active:scale-95 transition"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default CalculatorTool;

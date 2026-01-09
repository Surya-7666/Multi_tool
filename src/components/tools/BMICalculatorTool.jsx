import { useState } from "react";

function BMICalculatorTool() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculate = () => {
    const h = Number(height) / 100;
    const w = Number(weight);
    if (!h || !w) {
      setBmi(null);
      return;
    }
    const value = w / (h * h);
    setBmi(value.toFixed(2));
  };

  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-center gap-3">
        <span className="w-24 text-xs text-slate-300">Height (cm)</span>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
      </label>
      <label className="flex items-center gap-3">
        <span className="w-24 text-xs text-slate-300">Weight (kg)</span>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
      </label>
      <button
        type="button"
        onClick={calculate}
        className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Calculate BMI
      </button>
      {bmi && (
        <p className="text-xs text-slate-300">
          BMI: <span className="font-semibold">{bmi}</span>
        </p>
      )}
    </div>
  );
}

export default BMICalculatorTool;

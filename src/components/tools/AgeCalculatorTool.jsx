import { useState } from "react";

function AgeCalculatorTool() {
  const [dob, setDob] = useState("");
  const [ageText, setAgeText] = useState("");

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const now = new Date();

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      days += 30;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAgeText(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-center gap-3">
        <span className="w-24 text-xs text-slate-300">Date of birth</span>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
      </label>
      <button
        type="button"
        onClick={calculate}
        className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Calculate age
      </button>
      {ageText && (
        <p className="text-xs text-slate-300">
          Age: <span className="font-semibold">{ageText}</span>
        </p>
      )}
    </div>
  );
}

export default AgeCalculatorTool;

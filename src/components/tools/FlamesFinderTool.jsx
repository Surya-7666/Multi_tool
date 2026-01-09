import { useState } from "react";

const FLAMES = ["Friends", "Love", "Affection", "Marriage", "Enemies", "Siblings"];

function cleanName(name) {
  return name.toLowerCase().replace(/[^a-z]/g, "");
}

function calculateFlames(name1, name2) {
  let a = cleanName(name1);
  let b = cleanName(name2);

  if (!a || !b) return "";

  for (const ch of [...a]) {
    const index = b.indexOf(ch);
    if (index !== -1) {
      a = a.replace(ch, "");
      b = b.slice(0, index) + b.slice(index + 1);
    }
  }

  const count = (a + b).length;
  if (count === 0) return "Perfect Match";

  let arr = [...FLAMES];
  let idx = 0;
  while (arr.length > 1) {
    idx = (idx + count - 1) % arr.length;
    arr.splice(idx, 1);
  }
  return arr[0];
}

function FlamesFinderTool() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handle = () => {
    setResult(calculateFlames(name1, name2));
  };

  return (
    <div className="space-y-3 text-sm">
      <input
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        placeholder="Enter first name"
      />
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        placeholder="Enter second name"
      />
      <button
        type="button"
        onClick={handle}
        className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Find FLAMES
      </button>
      {result && (
        <p className="text-xs text-slate-300">
          Result: <span className="font-semibold">{result}</span>
        </p>
      )}
    </div>
  );
}

export default FlamesFinderTool;

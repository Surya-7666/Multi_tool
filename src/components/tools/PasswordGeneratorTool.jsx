import { useState } from "react";

function generatePassword(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let out = "";
  for (let i = 0; i < length; i++) {
    out += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return out;
}

function PasswordGeneratorTool() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState(generatePassword(12));

  const regenerate = () => {
    setPassword(generatePassword(Number(length) || 8));
  };

  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-center gap-3">
        <span className="text-xs text-slate-300">Length</span>
        <input
          type="number"
          min={4}
          max={64}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-20 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          readOnly
          value={password}
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
        <button
          type="button"
          onClick={regenerate}
          className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default PasswordGeneratorTool;

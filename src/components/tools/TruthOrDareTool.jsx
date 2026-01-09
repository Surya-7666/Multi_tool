import { useState } from "react";

function TruthOrDareTool() {
  const [mode, setMode] = useState("truth");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    setLoading(true);
    setError("");
    setValue("");

    try {
      const endpoint =
        mode === "truth"
          ? "https://api.truthordarebot.xyz/v1/truth?rating=pg"
          : "https://api.truthordarebot.xyz/v1/dare?rating=pg";

      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      setValue(data.question);
    } catch (err) {
      console.error(err);
      setError("Failed to load. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 text-sm">
      <div className="flex gap-4 text-xs">
        <label className="flex items-center gap-1 cursor-pointer">
          <input
            type="radio"
            checked={mode === "truth"}
            onChange={() => setMode("truth")}
          />
          Truth
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input
            type="radio"
            checked={mode === "dare"}
            onChange={() => setMode("dare")}
          />
          Dare
        </label>
      </div>

      <button
        type="button"
        onClick={generate}
        disabled={loading}
        className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
      >
        {loading ? "Loading..." : "Generate"}
      </button>

      {error && <p className="text-xs text-red-400">{error}</p>}

      {value && (
        <p className="text-xs text-slate-300 whitespace-pre-wrap">
          {value}
        </p>
      )}
    </div>
  );
}

export default TruthOrDareTool;

import { useState } from "react";

function EncodeDecodeTool() {
  const [text, setText] = useState("Hello");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");

  const handleEncode = () => {
    try {
      const out = btoa(text);
      setEncoded(out);
    } catch (e) {
      setEncoded("Failed to encode.");
    }
  };

  const handleDecode = () => {
    try {
      const out = atob(encoded);
      setDecoded(out);
    } catch (e) {
      setDecoded("Failed to decode.");
    }
  };

  return (
    <div className="space-y-3 text-sm">
      <div>
        <p className="text-[0.7rem] text-slate-300 mb-1">Raw text</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
        <button
          type="button"
          onClick={handleEncode}
          className="mt-2 rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Encode (Base64)
        </button>
      </div>

      <div>
        <p className="text-[0.7rem] text-slate-300 mb-1">Encoded</p>
        <textarea
          value={encoded}
          onChange={(e) => setEncoded(e.target.value)}
          rows={3}
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
        <button
          type="button"
          onClick={handleDecode}
          className="mt-2 rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Decode (Base64)
        </button>
      </div>

      {decoded && (
        <div>
          <p className="text-[0.7rem] text-slate-300 mb-1">Decoded result</p>
          <div className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs">
            {decoded}
          </div>
        </div>
      )}
    </div>
  );
}

export default EncodeDecodeTool;

import { useState } from "react";

function TextToSpeechTool() {
  const [text, setText] = useState("Hello from MultiTool Hub!");

  const speak = () => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-3 text-sm">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
      />
      <button
        type="button"
        onClick={speak}
        className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Speak
      </button>
    </div>
  );
}

export default TextToSpeechTool;

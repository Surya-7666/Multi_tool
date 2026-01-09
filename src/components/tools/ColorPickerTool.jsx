import { useState } from "react";

function ColorPickerTool() {
  const [color, setColor] = useState("#00ff88");

  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-center gap-3">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="h-10 w-10 rounded-md border border-slate-700 bg-slate-900"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
      </label>
      <div
        className="h-10 rounded-md border border-slate-800"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default ColorPickerTool;

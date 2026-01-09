import { useState } from "react";

function QRGeneratorTool() {
  const [text, setText] = useState("https://example.com");

  const encoded = encodeURIComponent(text);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encoded}`;

  return (
    <div className="space-y-3 text-sm">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        placeholder="Enter text or URL"
      />
      <div className="flex justify-center">
        <img src={qrUrl} alt="QR Code" className="border border-slate-800 rounded-md" />
      </div>
    </div>
  );
}

export default QRGeneratorTool;

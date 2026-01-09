import { useState } from "react";

function DiscountCalculatorTool() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const p = Number(price);
    const d = Number(discount);
    if (!p || d < 0) {
      setResult("");
      return;
    }
    const discountAmount = (p * d) / 100;
    const final = p - discountAmount;
    setResult(`Final: ${final.toFixed(2)} (You save ${discountAmount.toFixed(2)})`);
  };

  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-center gap-3">
        <span className="w-24 text-xs text-slate-300">Price</span>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
      </label>
      <label className="flex items-center gap-3">
        <span className="w-24 text-xs text-slate-300">Discount %</span>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
      </label>
      <button
        type="button"
        onClick={calculate}
        className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Calculate
      </button>
      {result && <p className="text-xs text-slate-300">{result}</p>}
    </div>
  );
}

export default DiscountCalculatorTool;

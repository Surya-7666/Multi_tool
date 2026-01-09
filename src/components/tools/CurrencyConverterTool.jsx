import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";

const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

function CurrencyConverterTool() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();
        setRates(data.rates);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <Spinner />;

  if (!rates) return <p className="text-xs text-red-400">Failed to load rates.</p>;

  const currencyCodes = Object.keys(rates).slice(0, 60);

  const converted =
    rates && rates[from] && rates[to]
      ? ((amount / rates[from]) * rates[to]).toFixed(2)
      : "";

  return (
    <div className="space-y-3 text-sm">
      <div className="flex gap-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        />
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        >
          {currencyCodes.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <span className="self-center text-xs text-slate-400">to</span>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        >
          {currencyCodes.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <p className="text-xs text-slate-300">
        Converted: <span className="font-semibold">{converted}</span>
      </p>
    </div>
  );
}

export default CurrencyConverterTool;

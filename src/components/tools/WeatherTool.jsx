import { useState } from "react";
import Spinner from "../ui/Spinner";

function WeatherTool() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");
      setData(null);

      // 1️⃣ Get latitude & longitude from city
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1`
      );
      const geo = await geoRes.json();

      if (!geo.results || geo.results.length === 0) {
        setError("City not found");
        return;
      }

      const { latitude, longitude, name, country } = geo.results[0];

      // 2️⃣ Get weather using lat/lon
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weather = await weatherRes.json();

      setData({
        name,
        country,
        temp: weather.current_weather.temperature,
        wind: weather.current_weather.windspeed,
        code: weather.current_weather.weathercode,
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 text-sm">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        placeholder="Enter city name"
      />

      <button
        type="button"
        onClick={fetchWeather}
        className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Check weather
      </button>

      {loading && <Spinner />}

      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}

      {data && !error && (
        <div className="text-xs text-slate-300 space-y-1">
          <p className="font-semibold">
            {data.name}, {data.country}
          </p>
          <p>Temperature: {data.temp} °C</p>
          <p>Wind speed: {data.wind} km/h</p>
        </div>
      )}
    </div>
  );
}

export default WeatherTool;

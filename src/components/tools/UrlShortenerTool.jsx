import { useState } from "react";
import Spinner from "../ui/Spinner";

function UrlShortenerTool() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shorten = async () => {
    if (!url) return;
    try {
      setLoading(true);
      setError("");
      setShortUrl("");

      const apiUrl =
        "https://is.gd/create.php?format=json&url=" +
        encodeURIComponent(url);

      const res = await fetch(apiUrl);
      const data = await res.json();

      if (data.shorturl) {
        setShortUrl(data.shorturl);
      } else {
        setError("Failed to shorten URL.");
      }
    } catch (e) {
      console.error(e);
      setError("Error while shortening URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 text-sm">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
        placeholder="Enter long URL"
      />
      <button
        type="button"
        onClick={shorten}
        className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Shorten
      </button>

      {loading && <Spinner />}

      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}

      {shortUrl && (
        <p className="text-xs text-slate-300 break-all">
          Short URL:{" "}
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default UrlShortenerTool;

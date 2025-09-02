
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dummy check handler (replace with real API call)
  const handleCheck = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (!url.startsWith("http")) {
        setError("Please enter a valid URL (including http/https)");
        setLoading(false);
        return;
      }
      // Randomly simulate up/down
      setStatus(Math.random() > 0.5 ? "Live" : "Down");
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-800 flex flex-col overflow-x-hidden">
      <section className="flex-1 flex flex-col justify-center items-center px-4">
        <div className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-white/20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center drop-shadow-lg">
            WebPulseCheck
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 text-center max-w-md">
            Instantly check if a website or URL is <span className="font-semibold text-indigo-300">live</span> or <span className="font-semibold text-rose-300">down</span>.
          </p>
          <form onSubmit={handleCheck} className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-slate-900 text-base shadow-sm bg-white/90 placeholder:text-slate-400"
              placeholder="Enter URL (e.g. https://example.com)"
              value={url}
              onChange={e => setUrl(e.target.value)}
              disabled={loading}
              required
            />
            <Button
              type="submit"
              className="h-12 px-8 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all"
              disabled={loading}
            >
              {loading ? "Checking..." : "Check"}
            </Button>
          </form>
          <div className="mt-6 min-h-[32px] w-full flex flex-col items-center">
            {error && (
              <span className="text-rose-400 font-medium text-base">{error}</span>
            )}
            {status && !error && (
              <span className={`text-2xl font-bold ${status === "Live" ? "text-green-400" : "text-rose-400"}`}>
                {status === "Live" ? "✅ Site is Live" : "❌ Site is Down"}
              </span>
            )}
          </div>
        </div>
        <div className="mt-12 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} WebPulseCheck. All rights reserved.
        </div>
      </section>
    </main>
  );
};

export default Home;
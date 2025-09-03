
import { useState } from "react";
import { Button } from "@/components/ui/button";


import Header from "../Header";
import Footer from "../Footer";

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
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-950 to-indigo-800 flex flex-col overflow-x-hidden">
      <Header />
      <div className="flex-1 flex flex-col justify-center items-center px-4">
        <div className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-white/20">
         
          

        </div>
        
      </div>
      <Footer />
    </main>
  );
};

export default Home;
import { useState } from "react";

const styles = [
  { id: "gta", label: "GTA", image: "/styles/gta.jpg" },
  { id: "animatronic", label: "Animatronic", image: "/styles/animatronic.jpg" },
  { id: "disney_princess", label: "Disney Princess", image: "/styles/disney.jpg" },
  { id: "anime", label: "Anime", image: "/styles/anime.jpg" },
];

const presets = [
  { id: "youtuber", label: "YouTube Beast", image: "/presets/youtuber.jpg" },
  { id: "tech", label: "Tech Titan", image: "/presets/tech.jpg" },
  { id: "rapper", label: "Luxury Rapper", image: "/presets/rapper.jpg" },
  { id: "pop", label: "Pop Star", image: "/presets/popstar.jpg" },
  { id: "influencer", label: "Influencer Glow", image: "/presets/influencer.jpg" },
  { id: "action", label: "Action Star", image: "/presets/action.jpg" },
];

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🌊 Salty Beach Prompts</h1>

      {/* STYLE */}
      <h2 className="mb-2">Choose Style</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {styles.map((style) => (
          <div
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedStyle === style.id ? "border-indigo-500" : "border-gray-600"
            }`}
          >
            <img src={style.image} className="rounded mb-2" />
            {style.label}
          </div>
        ))}
      </div>

      {/* PRESETS */}
      <h2 className="mb-2">⭐ Vibe</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {presets.map((preset) => (
          <div
            key={preset.id}
            onClick={() => setSelectedPreset(preset.id)}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedPreset === preset.id ? "border-indigo-500" : "border-gray-600"
            }`}
          >
            <img src={preset.image} className="rounded mb-2" />
            {preset.label}
          </div>
        ))}
      </div>

      {/* GENERATE */}
      <button
        className="bg-indigo-600 px-6 py-3 rounded-lg"
        onClick={async () => {
          const res = await fetch("/api/create-checkout-session", {
            method: "POST",
          });
          const data = await res.json();
          window.location.href = data.url;
        }}
      >
        Generate for $0.99
      </button>

      {/* RESULT */}
      {result && (
        <div className="mt-6">
          <h2>🌊 Your Transformation</h2>
          <img src={result} className="rounded mt-2" />
        </div>
      )}
    </div>
  );
              }

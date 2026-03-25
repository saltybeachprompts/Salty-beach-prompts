
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{padding: 40}}>
      <h1>🌊 Salty Beach Prompts</h1>
      <p>Select a style:</p>

      <button onClick={() => setSelected("gta")}>GTA</button>
      <button onClick={() => setSelected("anime")}>Anime</button>
      <button onClick={() => setSelected("disney")}>Disney</button>

      <p>Selected: {selected}</p>
    </div>
  );
}

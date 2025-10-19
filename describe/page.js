"use client";

import { useState } from "react";

export default function DescribePage() {
  const [form, setForm] = useState({
    property_type: "Apartment",
    area_m2: 85,
    bedrooms: 2,
    bathrooms: 1,
    city: "Larnaca",
    year_built: 2015,
    features: "Balkon, Meerblick, Parkplatz",
    highlights: "Helle Räume; ruhige Lage; sanierter Zustand",
    tone: "Sachlich",
    audience: "Käufer",
    language: "de",
  });

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  function update(name, value) {
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onGenerate() {
    setLoading(true);
    setText("");

    // Hier später deinen Backend-Endpunkt einfügen (z. B. /api/describe)
    // Jetzt nur eine Demo-Ausgabe:
    const demoText = `🏠 ${form.property_type} in ${form.city}
Wohnfläche: ${form.area_m2} m² – ${form.bedrooms} Schlafzimmer, ${form.bathrooms} Badezimmer
Highlights: ${form.highlights}

Tonalität: ${form.tone} | Zielgruppe: ${form.audience} | Sprache: ${form.language}`;
    await new Promise(r => setTimeout(r, 1000)); // simuliert KI
    setText(demoText);

    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 20 }}>
      <h1>YourHome24 – Beschreibungs-Assistent</h1>

      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
        <label>Typ
          <select value={form.property_type} onChange={(e)=>update("property_type", e.target.value)}>
            <option>Apartment</option><option>Haus</option><option>Villa</option>
          </select>
        </label>
        <label>Stadt
          <input value={form.city} onChange={(e)=>update("city", e.target.value)} />
        </label>
        <label>Wohnfläche (m²)
          <input type="number" value={form.area_m2} onChange={(e)=>update("area_m2", e.target.value)} />
        </label>
        <label>Schlafzimmer
          <input type="number" value={form.bedrooms} onChange={(e)=>update("bedrooms", e.target.value)} />
        </label>
        <label>Badezimmer
          <input type="number" value={form.bathrooms} onChange={(e)=>update("bathrooms", e.target.value)} />
        </label>
        <label>Baujahr
          <input type="number" value={form.year_built} onChange={(e)=>update("year_built", e.target.value)} />
        </label>
      </div>

      <label style={{ display: "block", marginTop: 8 }}>
        Features (Komma-getrennt)
        <input style={{ width: "100%" }} value={form.features} onChange={(e)=>update("features", e.target
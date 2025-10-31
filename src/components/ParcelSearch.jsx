import { useState, useMemo } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import './ParcelSearch.css';

export default function ParcelSearch({ parcelIndex }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const map = useMap();

  const parcelKeys = useMemo(() => {
    if (!parcelIndex) return [];
    return Object.keys(parcelIndex);
  }, [parcelIndex]);

  const performSearch = (key) => {
    if (!parcelIndex) {
      alert("Parcel data not loaded yet — please wait a moment.");
      return;
    }

    const normalizedKey = key.trim().toLowerCase();
    const feature = parcelIndex[normalizedKey];

    if (feature) {
      const layer = L.geoJSON(feature, {
        style: { color: "red", weight: 3 },
      }).addTo(map);

      map.fitBounds(layer.getBounds());
      setTimeout(() => map.removeLayer(layer), 3000);
    } else {
      alert(`Parcel not found. (You searched for "${key}")`);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setQuery(value);

    if (!parcelIndex || !value) {
      setSuggestions([]);
      return;
    }

    const lower = value.toLowerCase();

    const matches = parcelKeys
      .filter((key) => key.toLowerCase().includes(lower))
      .slice(0, 10);

    setSuggestions(matches);
  };

  const handleSelectSuggestion = (key) => {
    setQuery(key);
    setSuggestions([]);
    performSearch(key);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    performSearch(query);
  };

  return (
    
      <form onSubmit={handleSearch} className="p-search-bar-container">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for parcel number..."
          className="p-search-input-style"
        />
        <button type="submit" className="p-search-button-style">Search</button>
      
      {suggestions.length > 0 && (
        <ul className="p-search-results">
          {suggestions.map((key) => (
            <li
              key={key}
              onClick={() => handleSelectSuggestion(key)}
              className="p-results-style">
              {key}
            </li>
          ))}
        </ul>
      )}
      </form>
  );
}

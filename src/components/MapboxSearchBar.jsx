/* MapboxSearchBar.jsx */

// Imports
import React, { useState } from "react";
import { useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import customMarker from "../assets/pointer.svg"
import debounce from "lodash.debounce";
import "./MapboxSearchBar.css";

// Define consts
const MAPBOX_TOKEN = "pk.eyJ1IjoidG9sc29uMzAyIiwiYSI6ImNtaDUxNTI2ZDAxMTYybHBta3pqbTRianMifQ.-8SjGq6UD7KB2-4Pgfnf7g";

const customIcon = L.icon({
    iconUrl: customMarker,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

// Return and export
export default function MapboxSearchBar() {
  const map = useMap();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const searchMapbox = async (searchText) => {
    if (!searchText) {
      setResults([]);
      return;
    }

    const bbox = [-112, 40, -109.9, 41.5];

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      searchText
    )}.json?access_token=${MAPBOX_TOKEN}&limit=5&bbox=${bbox.join(",")}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.features || []);
    } catch (error) {
      console.error("Mapbox search error:", error);
    }
  };

  const debouncedSearch = debounce(searchMapbox, 400);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleResultClick = (feature) => {
    const [lng, lat] = feature.center;
    setSelectedPosition([lat, lng]);
    map.setView([lat, lng], 16);
    setResults([]);
    setQuery(feature.place_name);
  };

   return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="search-bar-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for address..."
          className="search-input-style"
        />
        <button type="submit" className="search-button-style">Search</button>

        {results.length > 0 && (
          <ul className="search-results">
            {results.map((feature) => (
              <li
                key={feature.id}
                onClick={() => handleResultClick(feature)}
                className="results-style"
              >
                {feature.place_name}
              </li>
            ))}
          </ul>
        )}
      </form>

      {selectedPosition && (
        <Marker position={selectedPosition} icon={customIcon}>
          <Popup>{query}</Popup>
        </Marker>
      )}
    </>
  );
}

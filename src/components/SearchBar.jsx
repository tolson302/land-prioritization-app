/* SearchBar.jsx */

import React, { useState, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const map = useMap();
    const timeoutRef = useRef(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            fetchSuggestions(value);
        }, 300);
    };

    const fetchSuggestions = async (input) => {
        if (!input.trim()) {
            setSuggestions([]);
            return;
        }

        const encodedQuery = encodeURIComponent(input);
        const bbox = '-114.0522,36.9979,-109.0416,42.0016'; // Utah BBOX
        const url = `https://photon.komoot.io/api/?q=${encodedQuery}&limit=5&bbox=${bbox}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.features) {
                setSuggestions(data.features);
            }
        } catch (err) {
            console.error('Autocomplete fetch error:', err);
        }
    };

    const handleSuggestionClick = (feature) => {
        zoomToFeature(feature);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        const encodedQuery = encodeURIComponent(query);
        const bbox = '-114.0522,36.9979,-109.0416,42.0016';
        const url = `https://photon.komoot.io/api/?q=${encodedQuery}&limit=1&bbox=${bbox}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.features && data.features.length > 0) {
                zoomToFeature(data.features[0]);
                setSuggestions([]);
            } else {
                alert('No results found.');
            }
        } catch (err) {
            console.error('Search error:', err);
            alert('Error fetching results.');
        }
    };

    const zoomToFeature = (feature) => {
        const [lon, lat] = feature.geometry.coordinates;
        const latLng = L.latLng(lat, lon);

        map.setView(latLng, 15);

        L.marker(latLng)
            .addTo(map)
            .bindPopup(feature.properties.label || feature.properties.name || 'Unknown')
            .openPopup();

        setQuery(feature.properties.label || feature.properties.name || '');
        setSuggestions([]);
    };

    return (
        <form onSubmit={handleSubmit} className="search-submit-style">
        <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for address"
            className="search-input-style"
        />
        <button type="submit" className="search-button-style">Search</button>
        {suggestions.length > 0 && (
            <ul className="suggestions-list-style">
                {suggestions.map((feature, idx) => (
                    <li
                        key={idx}
                        onClick={() => handleSuggestionClick(feature)}
                        className="suggestions-style"
                    >
                        {feature?.properties?.label || feature?.properties?.name || 'Unnamed place'}
                    </li>
                ))}
            </ul>
        )}
    </form>

        );
    };
export default SearchBar;

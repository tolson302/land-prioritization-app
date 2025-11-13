/* LayersControlPanel.jsx */

// Imports
import React from 'react';
import './Header.css'

// Define consts

// Basemaps
const basemaps = [
  { name: 'OpenStreetMap', id: 'osm' },
  { name: 'Esri Imagery', id: 'esri' },
  { name: 'Light Gray Canvas', id: 'light' },
  { name: 'Dark Gray Canvas', id: 'dark' }
];

// Overlay layers
const overlays = [
  'Cities',
  'CDPs',
  'Neighborhoods',
  'Planning Districts',
  'School Districts',
  'Basin Recreation Dist.',
  'Sewersheds',
  'UT Senate Districts',
  'UT House Districts',
  'Voter Precincts'
];

const LayerControlPanel = ({
  selectedBasemap,
  setSelectedBasemap,
  selectedOverlays,
  setSelectedOverlays
}) => {
  const toggleOverlay = (layer) => {
    setSelectedOverlays(prev =>
      prev.includes(layer)
        ? prev.filter(l => l !== layer)
        : [...prev, layer]
    );
  };

  // Return and export
  return (
    <div className="layers-menu show">
  <h4 style={{ color: 'black', fontSize: '14px' }}>Basemaps</h4>
  {basemaps.map(map => {
    const inputId = `basemap-${map.id}`;
    return (
      <div key={map.id} className="layer-item">
        <input
          type="radio"
          id={inputId}
          name="basemap"
          checked={selectedBasemap === map.id}
          onChange={() => setSelectedBasemap(map.id)}
        />
        <label htmlFor={inputId}>
          {map.name}
        </label>
      </div>
    );
  })}

  <h4 style={{ color: 'black', fontSize: '14px' }}>Map Layers</h4>
  {overlays.map(layer => {
    const inputId = `overlay-${layer.replace(/\s+/g, '-')}`;
    return (
      <div key={layer} className="layer-item">
        <input
          type="checkbox"
          id={inputId}
          checked={selectedOverlays.includes(layer)}
          onChange={() => toggleOverlay(layer)}
        />
        <label htmlFor={inputId}>
          {layer}
        </label>
      </div>
    );
  })}
</div>

  );
};

export default LayerControlPanel;

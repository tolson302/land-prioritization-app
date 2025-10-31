/* Header.jsx*/

import React, { useState } from 'react';
import Legend from './Legend';
import LayerControlPanel from './LayersControlPanel';
import './Header.css';
import logo from '../logo.jpg';

const Header = ({
  selectedBasemap,
  setSelectedBasemap,
  selectedOverlays,
  setSelectedOverlays,
  /* Added 10/30/25 */
  showParcelSearch,
  setShowParcelSearch,
  /* */

}) => {
  const [showLegend, setShowLegend] = useState(false);
  const [showLayers, setShowLayers] = useState(false);

  return (
  <header className="app-header">
  <div className="header-content">

    {/* Left side: Logo + Menu */}
    <div className="header-left">
      <img src={logo} alt="County Logo" className="app-logo" />
      <div className="menu-container">
        <div className="menu-content">
          <a href="https://summit-county-gis-hub-summitcounty.hub.arcgis.com/" target="_blank" rel="noopener noreferrer">
            Summit County GIS Hub
          </a>
          <span className="separator">|</span>
          <a href="https://www.summitcountyutah.gov/" target="_blank" rel="noopener noreferrer">
            Summit County Main Site
          </a>
          <span className="separator">|</span>
          <a href="mailto:tolson@summitcountyutah.gov?subject=Error%20Encountered%20in%20Land%20Prioritization%20App">
            Experiencing a Problem? Click Here
          </a>
        </div>
      </div>
    </div>

    {/* Center: App Title */}
    <div className="header-center">
      <h1 className="app-title">Land Prioritization App</h1>
    </div>

    {/* Right side: Buttons */}
    <div className="header-right">
      <div className="legend-container">
        <button className="legend-button" onClick={() => setShowLegend(!showLegend)}>🗺️ Legend</button>
        <div className={`legend-menu ${showLegend ? 'show' : ''}`}><Legend /></div>
      </div>
      <div className="layers-container">
        <button className="layers-button" onClick={() => setShowLayers(!showLayers)}>🧭 Layers</button>
        <div className={`layers-menu ${showLayers ? 'show' : ''}`}>
          <LayerControlPanel
            selectedBasemap={selectedBasemap}
            setSelectedBasemap={setSelectedBasemap}
            selectedOverlays={selectedOverlays}
            setSelectedOverlays={setSelectedOverlays}
          />
        </div>
      </div>

      {/* Toggle for parcel search; added 10/30/25 */}
      <div className="search-toggle-container">
        <button
          className="search-toggle-button"
          onClick={() => setShowParcelSearch(!showParcelSearch)}
          >
            🔍 {showParcelSearch ? "Parcel Search ▼" : "Parcel Search ▶"}
          </button>
      </div>
    </div>

  </div>
</header>
  );
};

export default Header;

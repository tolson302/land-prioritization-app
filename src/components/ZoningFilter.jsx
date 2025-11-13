/* ZoningFilter.jsx */

// Imports
import React, { useState } from 'react';
import './ZoningFilter.css';

// Define consts
const Dropdown = ({ label, selectedZType, setSelectedZType, zoningTypes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleZDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grocery-filter">
      <button className="gr-dropdown-toggle" onClick={toggleZDropdown}>
        {isOpen ? `▼ Hide ${label}` : `▶ ${label}`}
      </button>

      {isOpen && (
        <div className="gr-filter-options">
          <div>
            <label>
              <input
                type="radio"
                value="All"
                checked={selectedZType === 'All'}
                onChange={() => setSelectedZType('All')}
              />
              All
            </label>
          </div>
          {zoningTypes.map((type) => (
            <div key={type}>
              <label>
                <input
                  type="radio"
                  value={type}
                  checked={selectedZType === type}
                  onChange={() => setSelectedZType(type)}
                />
                {type}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ZoningFilter = ({
  selectedZType, setSelectedZType,
  selectedSnyZType, setSelectedSnyZType
}) => {
  const [isParentOpen, setIsParentOpen] = useState(false);

  // Eastern Summit zoning types
  const easternSummitZoningTypes = [
    'AG/Grazing -  5',
    'AG/Grazing -  10',
    'AG/Grazing -  20',
    'AG/Grazing -  40',
    'AG/Grazing -  80',
    'Coalville City',
    'Commercial',
    'Francis City',
    'Henefer City',
    'Industrial',
    'Kamas City',
    'Oakley City',
    'Park City',
    'Residential - 2.5',
    'Unknown', 
  ];
  // Snyderville Basin zoning types
  const snydervilleZoningTypes = [
    'Community Commercial', 
    'Hillside Stewardship', 
    'Mountain Remote',
    'Neighborhood Commercial',
    'Resort Center',
    'Rural Residential',
    'Service Commercial',
    'Town Center',
    'Unknown'
  ];

  // Return and export
  return (
    <div className="grocery-filter">
      <button className="gr-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
        {isParentOpen ? '▼ Filter by Zoning Type' : '▶ Filter by Zoning Type'}
      </button>

      {isParentOpen && (
        <div className="nested-gr-filters">
          <Dropdown
            label="Eastern Summit Zoning"
            selectedZType={selectedZType}
            setSelectedZType={setSelectedZType}
            zoningTypes={easternSummitZoningTypes}
          />
          <Dropdown
            label="Snyderville Basin Zoning"
            selectedZType={selectedSnyZType}
            setSelectedZType={setSelectedSnyZType}
            zoningTypes={snydervilleZoningTypes}
          />
        </div>
      )}
    </div>
  );
};

export default ZoningFilter;

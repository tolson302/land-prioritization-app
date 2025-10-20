/* VacantFilter.jsx */

import React, { useState } from 'react';
import './OwnerTypeFilter.css';

const VacantFilter = ({ selectedVType, setSelectedVType, vacantTypes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="owner-type-filter">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {isOpen ? '▼ Hide Filter' : '▶ Show Vacant Parcels'}
      </button>

      {isOpen && (
        <div className="filter-options">
          <div>
            <label>
              <input
                type="radio"
                value="All"
                checked={selectedVType === 'All'}
                onChange={() => setSelectedVType('All')}
              />
              All
            </label>
          </div>
          {vacantTypes.map((type) => (
            <div key={type}>
              <label>
                <input
                  type="radio"
                  value={type}
                  checked={selectedVType === type}
                  onChange={() => setSelectedVType(type)}
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

export default VacantFilter;

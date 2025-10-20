/* OwnerTypeFilter.jsx */

import React, { useState } from 'react';
import './OwnerTypeFilter.css';

const OwnerTypeFilter = ({ selectedType, setSelectedType, ownerTypes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="owner-type-filter">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {isOpen ? '▼ Hide Filter' : '▶ Filter by Owner Type'}
      </button>

      {isOpen && (
        <div className="filter-options">
          <div>
            <label>
              <input
                type="radio"
                value="All"
                checked={selectedType === 'All'}
                onChange={() => setSelectedType('All')}
              />
              All
            </label>
          </div>
          {ownerTypes.map((type) => (
            <div key={type}>
              <label>
                <input
                  type="radio"
                  value={type}
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
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

export default OwnerTypeFilter;

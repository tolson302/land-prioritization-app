/* CultureDistanceFilter.jsx */

import React, { useState } from 'react';
import './GroceryDistanceFilter.css';

const CuTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    'Over 20 min',
];

const Dropdown = ({ label, selectedCuValues, setSelectedCuValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
            if (value === 'All') {
                // Reset: clear all selections
                setSelectedCuValues([]);
            } else {
                if (selectedCuValues.includes(value)) {
                    // Deselect this value
                    setSelectedCuValues(selectedCuValues.filter((v) => v !== value));
                } else {
                    // Select this value
                    setSelectedCuValues([...selectedCuValues, value]);
                }
            }
        };
    
        return (
            <div className="gr-filter-group">
                <button className="gr-dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? `▼ ${label}` : `▶ ${label}`}
                </button>
                {isOpen && (
                    <div className="gr-filter-options">
                        <label>
                            <input
                                type="checkbox"
                                value="All"
                                checked={selectedCuValues.length === 0}
                                onChange={() => handleCheckboxChange('All')}
                            />
                            All
                        </label>
                        {CuTimeOptions.map((time) => (
                            <label key={time}>
                                <input
                                    type="checkbox"
                                    value={time}
                                    checked={selectedCuValues.includes(time)}
                                    onChange={() => handleCheckboxChange(time)}
                                />
                                {time}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        );
    };
    
    
    const CultureDistanceFilter = ({
        selectedCuWalkTime, setSelectedCuWalkTime,
        selectedCuBikeTime, setSelectedCuBikeTime,
        selectedCuDriveTime, setSelectedCuDriveTime
    }) => {
        const [isParentOpen, setIsParentOpen] = useState(false);
    
        return (
            <div className="grocery-filter">
                <button className="gr-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                    {isParentOpen ? '▼ Filter by Cultural Amenity Distance' : '▶ Filter by Cultural Amenity Distance'}
                </button>
    
                {isParentOpen && (
                    <div className="nested-gr-filters">
                        <Dropdown
                            label="Filter by Cultural Amenity Walk Time"
                            selectedCuValues={selectedCuWalkTime}
                            setSelectedCuValues={setSelectedCuWalkTime}
                        />
                        <Dropdown
                            label="Filter by Cultural Amenity Bike Time"
                            selectedCuValues={selectedCuBikeTime}
                            setSelectedCuValues={setSelectedCuBikeTime}
                        />
                        <Dropdown
                            label="Filter by Cultural Amenity Drive Time"
                            selectedCuValues={selectedCuDriveTime}
                            setSelectedCuValues={setSelectedCuDriveTime}
                        />
                    </div>
                )}
            </div>
        );
    };
    
    export default CultureDistanceFilter
    
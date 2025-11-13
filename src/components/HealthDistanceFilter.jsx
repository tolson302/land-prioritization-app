/* HealthDistanceFilter.jsx */

// Imports
import React, { useState } from 'react';
import './HealthDistanceFilter.css';

// Define consts
const HealthTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    'Over 20 min',
];

const Dropdown = ({ label, selectedHeValues, setSelectedHeValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
            if (value === 'All') {
                // Reset: clear all selections
                setSelectedHeValues([]);
            } else {
                if (selectedHeValues.includes(value)) {
                    // Deselect this value
                    setSelectedHeValues(selectedHeValues.filter((v) => v !== value));
                } else {
                    // Select this value
                    setSelectedHeValues([...selectedHeValues, value]);
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
                                checked={selectedHeValues.length === 0}
                                onChange={() => handleCheckboxChange('All')}
                            />
                            All
                        </label>
                        {HealthTimeOptions.map((time) => (
                            <label key={time}>
                                <input
                                    type="checkbox"
                                    value={time}
                                    checked={selectedHeValues.includes(time)}
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
    
    
    const HealthDistanceFilter = ({
        selectedHeWalkTime, setSelectedHeWalkTime,
        selectedHeBikeTime, setSelectedHeBikeTime,
        selectedHeDriveTime, setSelectedHeDriveTime
    }) => {
        const [isParentOpen, setIsParentOpen] = useState(false);
    
        // Return and export
        return (
            <div className="grocery-filter">
                <button className="gr-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                    {isParentOpen ? '▼ Filter by Healthcare Distance' : '▶ Filter by Healthcare Distance'}
                </button>
    
                {isParentOpen && (
                    <div className="nested-gr-filters">
                        <Dropdown
                            label="Filter by Healthcare Walk Time"
                            selectedHeValues={selectedHeWalkTime}
                            setSelectedHeValues={setSelectedHeWalkTime}
                        />
                        <Dropdown
                            label="Filter by Healthcare Bike Time"
                            selectedHeValues={selectedHeBikeTime}
                            setSelectedHeValues={setSelectedHeBikeTime}
                        />
                        <Dropdown
                            label="Filter by Healthcare Drive Time"
                            selectedHeValues={selectedHeDriveTime}
                            setSelectedHeValues={setSelectedHeDriveTime}
                        />
                    </div>
                )}
            </div>
        );
    };
    
    export default HealthDistanceFilter
    
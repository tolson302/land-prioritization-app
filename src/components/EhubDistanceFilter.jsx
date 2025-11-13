/* EhubDistanceFilter.jsx */

// Imports
import React, { useState } from 'react';
import './RecDistanceFilter.css';

// Define consts
const EhTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    '20 - 30 min',
    'Over 30 min',
];

const Dropdown = ({ label, selectedEhValues, setSelectedEhValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
            if (value === 'All') {
                // Reset: clear all selections
                setSelectedEhValues([]);
            } else {
                if (selectedEhValues.includes(value)) {
                    // Deselect this value
                    setSelectedEhValues(selectedEhValues.filter((v) => v !== value));
                } else {
                    // Select this value
                    setSelectedEhValues([...selectedEhValues, value]);
                }
            }
        };
    
        return (
            <div className="re-filter-group">
                <button className="re-dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? `▼ ${label}` : `▶ ${label}`}
                </button>
                {isOpen && (
                    <div className="re-filter-options">
                        <label>
                            <input
                                type="checkbox"
                                value="All"
                                checked={selectedEhValues.length === 0}
                                onChange={() => handleCheckboxChange('All')}
                            />
                            All
                        </label>
                        {EhTimeOptions.map((time) => (
                            <label key={time}>
                                <input
                                    type="checkbox"
                                    value={time}
                                    checked={selectedEhValues.includes(time)}
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
    
    
    const EhubDistanceFilter = ({
        selectedEhWalkTime, setSelectedEhWalkTime,
        selectedEhBikeTime, setSelectedEhBikeTime,
        selectedEhDriveTime, setSelectedEhDriveTime
    }) => {
        const [isParentOpen, setIsParentOpen] = useState(false);
    
        // Return and export
        return (
            <div className="rec-filter">
                <button className="re-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                    {isParentOpen ? '▼ Filter by Employment Hub Distance' : '▶ Filter by Employment Hub Distance'}
                </button>
    
                {isParentOpen && (
                    <div className="nested-re-filters">
                        <Dropdown
                            label="Filter by Employment Hub Walk Time"
                            selectedEhValues={selectedEhWalkTime}
                            setSelectedEhValues={setSelectedEhWalkTime}
                        />
                        <Dropdown
                            label="Filter by Employment Hub Bike Time"
                            selectedEhValues={selectedEhBikeTime}
                            setSelectedEhValues={setSelectedEhBikeTime}
                        />
                        <Dropdown
                            label="Filter by Grocery Drive Time"
                            selectedEhValues={selectedEhDriveTime}
                            setSelectedEhValues={setSelectedEhDriveTime}
                        />
                    </div>
                )}
            </div>
        );
    };
    
    export default EhubDistanceFilter
    
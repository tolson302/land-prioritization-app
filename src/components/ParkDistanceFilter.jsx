/* ParkDistanceFilter.jsx */

// Imports
import React, { useState } from 'react';
import './RecDistanceFilter.css';

// Define consts
const PaTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    '20 - 30 min',
    'Over 30 min',
];

const Dropdown = ({ label, selectedPaValues, setSelectedPaValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
            if (value === 'All') {
                // Reset: clear all selections
                setSelectedPaValues([]);
            } else {
                if (selectedPaValues.includes(value)) {
                    // Deselect this value
                    setSelectedPaValues(selectedPaValues.filter((v) => v !== value));
                } else {
                    // Select this value
                    setSelectedPaValues([...selectedPaValues, value]);
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
                                checked={selectedPaValues.length === 0}
                                onChange={() => handleCheckboxChange('All')}
                            />
                            All
                        </label>
                        {PaTimeOptions.map((time) => (
                            <label key={time}>
                                <input
                                    type="checkbox"
                                    value={time}
                                    checked={selectedPaValues.includes(time)}
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
    
    
    const ParkDistanceFilter = ({
        selectedPaWalkTime, setSelectedPaWalkTime,
        selectedPaBikeTime, setSelectedPaBikeTime,
        selectedPaDriveTime, setSelectedPaDriveTime
    }) => {
        const [isParentOpen, setIsParentOpen] = useState(false);
    
        // Return and export
        return (
            <div className="rec-filter">
                <button className="re-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                    {isParentOpen ? '▼ Filter by Park Distance' : '▶ Filter by Park Distance'}
                </button>
    
                {isParentOpen && (
                    <div className="nested-re-filters">
                        <Dropdown
                            label="Filter by Park Walk Time"
                            selectedPaValues={selectedPaWalkTime}
                            setSelectedPaValues={setSelectedPaWalkTime}
                        />
                        <Dropdown
                            label="Filter by Park Bike Time"
                            selectedPaValues={selectedPaBikeTime}
                            setSelectedPaValues={setSelectedPaBikeTime}
                        />
                        <Dropdown
                            label="Filter by Park Drive Time"
                            selectedPaValues={selectedPaDriveTime}
                            setSelectedPaValues={setSelectedPaDriveTime}
                        />
                    </div>
                )}
            </div>
        );
    };
    
    export default ParkDistanceFilter
    
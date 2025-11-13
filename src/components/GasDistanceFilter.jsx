/* GasDistanceFilter.jsx */

// Imports
import React, { useState } from 'react';
import './RecDistanceFilter.css';

// Define consts
const GaTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    '20 - 30 min',
    'Over 30 min',
];

const Dropdown = ({ label, selectedGaValues, setSelectedGaValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
            if (value === 'All') {
                // Reset: clear all selections
                setSelectedGaValues([]);
            } else {
                if (selectedGaValues.includes(value)) {
                    // Deselect this value
                    setSelectedGaValues(selectedGaValues.filter((v) => v !== value));
                } else {
                    // Select this value
                    setSelectedGaValues([...selectedGaValues, value]);
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
                                checked={selectedGaValues.length === 0}
                                onChange={() => handleCheckboxChange('All')}
                            />
                            All
                        </label>
                        {GaTimeOptions.map((time) => (
                            <label key={time}>
                                <input
                                    type="checkbox"
                                    value={time}
                                    checked={selectedGaValues.includes(time)}
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
    
    
    const GasDistanceFilter = ({
        selectedGaWalkTime, setSelectedGaWalkTime,
        selectedGaBikeTime, setSelectedGaBikeTime,
        selectedGaDriveTime, setSelectedGaDriveTime
    }) => {
        const [isParentOpen, setIsParentOpen] = useState(false);
    
        // Return and export
        return (
            <div className="rec-filter">
                <button className="re-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                    {isParentOpen ? '▼ Filter by Gas Station Distance' : '▶ Filter by Gas Station Distance'}
                </button>
    
                {isParentOpen && (
                    <div className="nested-re-filters">
                        <Dropdown
                            label="Filter by Gas Station Walk Time"
                            selectedGaValues={selectedGaWalkTime}
                            setSelectedGaValues={setSelectedGaWalkTime}
                        />
                        <Dropdown
                            label="Filter by Gas Station Bike Time"
                            selectedGaValues={selectedGaBikeTime}
                            setSelectedGaValues={setSelectedGaBikeTime}
                        />
                        <Dropdown
                            label="Filter by Gas Station Drive Time"
                            selectedGaValues={selectedGaDriveTime}
                            setSelectedGaValues={setSelectedGaDriveTime}
                        />
                    </div>
                )}
            </div>
        );
    };
    
    export default GasDistanceFilter
    
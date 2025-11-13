/* SchoolDistanceFilter.jsx */

// Imports
import React, { useState } from 'react';
import './GroceryDistanceFilter.css';

// Define consts
const SchTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    'Over 20 min',
];

const Dropdown = ({ label, selectedSchValues, setSelectedSchValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
            if (value === 'All') {
                // Reset: clear all selections
                setSelectedSchValues([]);
            } else {
                if (selectedSchValues.includes(value)) {
                    // Deselect this value
                    setSelectedSchValues(selectedSchValues.filter((v) => v !== value));
                } else {
                    // Select this value
                    setSelectedSchValues([...selectedSchValues, value]);
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
                                checked={selectedSchValues.length === 0}
                                onChange={() => handleCheckboxChange('All')}
                            />
                            All
                        </label>
                        {SchTimeOptions.map((time) => (
                            <label key={time}>
                                <input
                                    type="checkbox"
                                    value={time}
                                    checked={selectedSchValues.includes(time)}
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
    
    const SchoolDistanceFilter = ({
        selectedSchWalkTime, setSelectedSchWalkTime,
        selectedSchBikeTime, setSelectedSchBikeTime,
        selectedSchDriveTime, setSelectedSchDriveTime
    }) => {
        const [isParentOpen, setIsParentOpen] = useState(false);
    
        // Return and export
        return (
            <div className="grocery-filter">
                <button className="gr-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                    {isParentOpen ? '▼ Filter by School Distance' : '▶ Filter by School Distance'}
                </button>
    
                {isParentOpen && (
                    <div className="nested-gr-filters">
                        <Dropdown
                            label="Filter by School Walk Time"
                            selectedSchValues={selectedSchWalkTime}
                            setSelectedSchValues={setSelectedSchWalkTime}
                        />
                        <Dropdown
                            label="Filter by School Bike Time"
                            selectedSchValues={selectedSchBikeTime}
                            setSelectedSchValues={setSelectedSchBikeTime}
                        />
                        <Dropdown
                            label="Filter by School Drive Time"
                            selectedSchValues={selectedSchDriveTime}
                            setSelectedSchValues={setSelectedSchDriveTime}
                        />
                    </div>
                )}
            </div>
        );
    };
    
    export default SchoolDistanceFilter
    
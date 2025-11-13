/* GroceryDistanceFilter.jsx */

// Imports
import React, { useState } from 'react';
import './GroceryDistanceFilter.css';

// Define consts
const GrTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    'Over 20 min',
];

const Dropdown = ({ label, selectedGrValues, setSelectedGrValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
        if (value === 'All') {
            // Reset: clear all selections
            setSelectedGrValues([]);
        } else {
            if (selectedGrValues.includes(value)) {
                // Deselect this value
                setSelectedGrValues(selectedGrValues.filter((v) => v !== value));
            } else {
                // Select this value
                setSelectedGrValues([...selectedGrValues, value]);
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
                            checked={selectedGrValues.length === 0}
                            onChange={() => handleCheckboxChange('All')}
                        />
                        All
                    </label>
                    {GrTimeOptions.map((time) => (
                        <label key={time}>
                            <input
                                type="checkbox"
                                value={time}
                                checked={selectedGrValues.includes(time)}
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


const GroceryDistanceFilter = ({
    selectedGrWalkTime, setSelectedGrWalkTime,
    selectedGrBikeTime, setSelectedGrBikeTime,
    selectedGrDriveTime, setSelectedGrDriveTime
}) => {
    const [isParentOpen, setIsParentOpen] = useState(false);

    // Return and export
    return (
        <div className="grocery-filter">
            <button className="gr-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                {isParentOpen ? '▼ Filter by Grocery Distance' : '▶ Filter by Grocery Distance'}
            </button>

            {isParentOpen && (
                <div className="nested-gr-filters">
                    <Dropdown
                        label="Filter by Grocery Walk Time"
                        selectedGrValues={selectedGrWalkTime}
                        setSelectedGrValues={setSelectedGrWalkTime}
                    />
                    <Dropdown
                        label="Filter by Grocery Bike Time"
                        selectedGrValues={selectedGrBikeTime}
                        setSelectedGrValues={setSelectedGrBikeTime}
                    />
                    <Dropdown
                        label="Filter by Grocery Drive Time"
                        selectedGrValues={selectedGrDriveTime}
                        setSelectedGrValues={setSelectedGrDriveTime}
                    />
                </div>
            )}
        </div>
    );
};

export default GroceryDistanceFilter

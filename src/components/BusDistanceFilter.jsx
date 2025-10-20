/* BusDistanceFilter.jsx */

import React, { useState } from 'react';
import './GroceryDistanceFilter.css';

const BuTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    'Over 20 min',
];

const Dropdown = ({ label, selectedBuValues, setSelectedBuValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
            if (value === 'All') {
                // Reset: clear all selections
                setSelectedBuValues([]);
            } else {
                if (selectedBuValues.includes(value)) {
                    // Deselect this value
                    setSelectedBuValues(selectedBuValues.filter((v) => v !== value));
                } else {
                    // Select this value
                    setSelectedBuValues([...selectedBuValues, value]);
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
                                checked={selectedBuValues.length === 0}
                                onChange={() => handleCheckboxChange('All')}
                            />
                            All
                        </label>
                        {BuTimeOptions.map((time) => (
                            <label key={time}>
                                <input
                                    type="checkbox"
                                    value={time}
                                    checked={selectedBuValues.includes(time)}
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
    
    
    const BusDistanceFilter = ({
        selectedBuWalkTime, setSelectedBuWalkTime,
        selectedBuBikeTime, setSelectedBuBikeTime,
        selectedBuDriveTime, setSelectedBuDriveTime
    }) => {
        const [isParentOpen, setIsParentOpen] = useState(false);
    
        return (
            <div className="grocery-filter">
                <button className="gr-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                    {isParentOpen ? '▼ Filter by Bus Stop Distance' : '▶ Filter by Bus Stop Distance'}
                </button>
    
                {isParentOpen && (
                    <div className="nested-gr-filters">
                        <Dropdown
                            label="Filter by Bus Stop Walk Time"
                            selectedBuValues={selectedBuWalkTime}
                            setSelectedBuValues={setSelectedBuWalkTime}
                        />
                        <Dropdown
                            label="Filter by Bus Stop Bike Time"
                            selectedBuValues={selectedBuBikeTime}
                            setSelectedBuValues={setSelectedBuBikeTime}
                        />
                    </div>
                )}
            </div>
        );
    };
    
    export default BusDistanceFilter
    
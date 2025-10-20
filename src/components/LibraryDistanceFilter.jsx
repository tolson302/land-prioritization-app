/* LibraryDistanceFilter.jsx */

import React, { useState } from 'react';
import './GroceryDistanceFilter.css'

const LiTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    'Over 20 min',
];

const Dropdown = ({ label, selectedLiValues, setSelectedLiValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
            if (value === 'All') {
                // Reset: clear all selections
                setSelectedLiValues([]);
            } else {
                if (selectedLiValues.includes(value)) {
                    // Deselect this value
                    setSelectedLiValues(selectedLiValues.filter((v) => v !== value));
                } else {
                    // Select this value
                    setSelectedLiValues([...selectedLiValues, value]);
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
                                checked={selectedLiValues.length === 0}
                                onChange={() => handleCheckboxChange('All')}
                            />
                            All
                        </label>
                        {LiTimeOptions.map((time) => (
                            <label key={time}>
                                <input
                                    type="checkbox"
                                    value={time}
                                    checked={selectedLiValues.includes(time)}
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
    
    
    const LibraryDistanceFilter = ({
        selectedLiWalkTime, setSelectedLiWalkTime,
        selectedLiBikeTime, setSelectedLiBikeTime,
        selectedLiDriveTime, setSelectedLiDriveTime
    }) => {
        const [isParentOpen, setIsParentOpen] = useState(false);
    
        return (
            <div className="grocery-filter">
                <button className="gr-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                    {isParentOpen ? '▼ Filter by Library Distance' : '▶ Filter by Library Distance'}
                </button>
    
                {isParentOpen && (
                    <div className="nested-gr-filters">
                        <Dropdown
                            label="Filter by Library Walk Time"
                            selectedLiValues={selectedLiWalkTime}
                            setSelectedLiValues={setSelectedLiWalkTime}
                        />
                        <Dropdown
                            label="Filter by Library Bike Time"
                            selectedLiValues={selectedLiBikeTime}
                            setSelectedLiValues={setSelectedLiBikeTime}
                        />
                        <Dropdown
                            label="Filter by Library Drive Time"
                            selectedLiValues={selectedLiDriveTime}
                            setSelectedLiValues={setSelectedLiDriveTime}
                        />
                    </div>
                )}
            </div>
        );
    };
    
    export default LibraryDistanceFilter
    
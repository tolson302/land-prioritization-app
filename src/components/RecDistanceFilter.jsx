/* RecDistanceFilter.jsx */

import React, { useState } from 'react';
import './RecDistanceFilter.css';

const ReTimeOptions = [
    '0 - 5 min',
    '5 - 10 min',
    '10 - 15 min',
    '15 - 20 min',
    '20 - 30 min',
    'Over 30 min',
];

const Dropdown = ({ label, selectedReValue, setSelectedReValue }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value) => {
        if (value === 'All') {
            // Reset: clear all selections
            setSelectedReValue([]);
        } else {
            if (selectedReValue.includes(value)) {
                // Deselect this value
                setSelectedReValue(selectedReValue.filter((v) => v !== value));
            } else {
                // Select this value
                setSelectedReValue([...selectedReValue, value]);
            }
        }
    };

    return (
        <div className="re-filter-group">
            <button className="re-dropdown-toggle" onClick={() => setIsOpen (!isOpen)}>
                {isOpen ? `▼ ${label}` : `▶ ${label}`}
            </button>
            {isOpen && (
                <div className="re-filter-options">
                    <label>
                        <input
                            type="checkbox"
                            value="All"
                            checked={selectedReValue.length === 0}
                            onChange={() => handleCheckboxChange('All')}
                        />
                        All
                    </label>
                    {ReTimeOptions.map((time) => (
                        <label key={time}>
                            <input
                                type="checkbox"
                                value={time}
                                checked={selectedReValue.includes(time)}
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

const RecDistanceFilter = ({
    selectedReWalkTime, setSelectedReWalkTime,
    selectedReBikeTime, setSelectedReBikeTime,
    selectedReDriveTime, setSelectedReDriveTime
}) => {
    const [isParentOpen, setIsParentOpen] = useState(false);

    return (
        <div className="rec-filter">
            <button className="re-dropdown-toggle" onClick={() => setIsParentOpen(!isParentOpen)}>
                {isParentOpen ? '▼ Filter by Recreation Distance' : '▶ Filter by Recreation Distance'}
            </button>

            {isParentOpen && (
                <div className="nested-re-filters">
                    <Dropdown
                        label="Filter by Recreation Walk Time"
                        selectedReValue={selectedReWalkTime}
                        setSelectedReValue={setSelectedReWalkTime}
                    />
                    <Dropdown
                        label="Filter by Recreation Bike Time"
                        selectedReValue={selectedReBikeTime}
                        setSelectedReValue={setSelectedReBikeTime}
                    />
                    <Dropdown
                        label="Filter by Recreation Drive Time"
                        selectedReValue={selectedReDriveTime}
                        setSelectedReValue={setSelectedReDriveTime}
                    />
                </div>
            )}
        </div>
    );
};

export default RecDistanceFilter

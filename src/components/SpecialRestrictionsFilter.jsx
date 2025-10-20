/* SpecialRestrictionsFilter.jsx */

import React, { useState } from 'react';
import './SpecialRestrictionsFilter.css';

const SpecialOptions = [
    'Yes',
    'No',
];

const Dropdown = ({ label, selectedSpValue, setSelectedSpValue }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sp-filter-group'>
            <button className='sp-dropdown-toggle' onClick={() => setIsOpen (!isOpen)}>
                {isOpen ? `▼ ${label}` : `▶ ${label}`}
            </button>
            {isOpen && (
                <div className='sp-filter-options'>
                    <label>
                        <input
                            type="radio"
                            value="All"
                            checked={selectedSpValue === 'All'}
                            onChange={() => setSelectedSpValue('All')}
                        />
                        All
                    </label>
                    {SpecialOptions.map((time) => (
                        <label key={time}>
                            <input
                                type="radio"
                                value={time}
                                checked={selectedSpValue === time}
                                onChange={() => setSelectedSpValue(time)}
                            />
                            {time}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

const SpecialRestrictionsFilter = ({
    selectedWaValue, setSelectedWaValue,
    selectedSeValue, setSelectedSeValue,
    selectedCoValue, setSelectedCoValue,
    selectedWuValue, setSelectedWuValue
}) => {
    const [isParentOpen, setIsParentOpen] = useState(false);

    return (
        <div className="special-filter">
            <button className='sp-dropdown-toggle' onClick={() => setIsParentOpen(!isParentOpen)}>
                {isParentOpen ? '▼ Filter by Special Restrictions' : '▶ Filter by Special Restrictions'}
            </button>

            {isParentOpen && (
                <div className="nested-sp-filters">
                    <Dropdown
                        label="Water Service Area?"
                        selectedSpValue={selectedWaValue}
                        setSelectedSpValue={setSelectedWaValue}
                    />
                    <Dropdown
                        label="Connected to Sewer?"
                        selectedSpValue={selectedSeValue}
                        setSelectedSpValue={setSelectedSeValue}
                    />
                    <Dropdown
                        label="Conservation Easement?"
                        selectedSpValue={selectedCoValue}
                        setSelectedSpValue={setSelectedCoValue}
                    />
                    <Dropdown
                        label="WUI?"
                        selectedSpValue={selectedWuValue}
                        setSelectedSpValue={setSelectedWuValue}
                    />
                </div>
            )}
        </div>
    );
};

export default SpecialRestrictionsFilter

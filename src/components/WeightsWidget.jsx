/* WeightsWidget.jsx */

// Imports
import React, { useState } from 'react';
import './WeightsWidget.css';

// Define consts
const WeightsWidget = ({ weights, setWeights, resetWeights }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (category, value) => {
    setWeights(prev => ({
      ...prev,
      [category]: parseInt(value, 10)
    }));
  };

  // Return and export
  return (
    <div className="weights-widget-container">
      <div className="weights-widget">
        <div className="widget-header">
          <h3>Weights Widget</h3>
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="toggle-button"
          >
            {isOpen ? '− Hide' : '+ Show'}
          </button>
        </div>

        {isOpen && (
          <div className="widget-body">
            <h4>Adjust Weight Values</h4>

            {Object.entries(weights).map(([key, value]) => (
              <div key={key} className="weight-input">
                <label htmlFor={key}>{key}: {value}</label>
                <input
                  id={key}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={value}
                  onChange={e => handleChange(key, e.target.value)}
                />
              </div>
            ))}

            <button className="reset-button" onClick={resetWeights}>
              Reset to Default
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeightsWidget;

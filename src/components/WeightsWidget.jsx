/* WeightsWidget.jsx */

import React, { useState } from 'react';
import './WeightsWidget.css';

const WeightsWidget = ({ weights, setWeights, resetWeights }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (category, value) => {
    setWeights(prev => ({
      ...prev,
      [category]: parseInt(value, 10)
    }));
  };

  return (
    <div className="weights-widget-container">
      <button onClick={() => setIsOpen(prev => !prev)} className="toggle-button">
        {isOpen ? 'Hide Weights Widget' : 'Show Weights Widget'}
      </button>

      {isOpen && (
        <div className="weights-widget">
          <h3>Adjust Weight Values</h3>
          {Object.entries(weights).map(([key, value]) => (
            <div key={key} className="weight-input">
              <label htmlFor={key}>{key}: {value}</label>
              <input
                id={key}
                type="range"
                min="1"
                max="10"
                step="1"
                list={`tickmarks-${key}`}
                value={value}
                onChange={e => handleChange(key, e.target.value)}
              />
              <datalist id={`tickmarks-${key}`}>
                {[...Array(10)].map((_, i) => {
                  const val = i + 1;
                  return <option key={val} value={val} label={val.toString()} />;
                })}
              </datalist>
            </div>
          ))}
          
          <button className="reset-button" onClick={resetWeights}>
            Reset to Default
          </button>
        </div>
      )}
    </div>
  );
};

export default WeightsWidget;

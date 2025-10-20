/* ChartPanel.jsx */

import React, { useState, useEffect } from 'react';
// import DonutChart from './DonutChart';
import BarChart from './BarChart';
import './ChartPanel.css';
import expandIcon from './../data/ExpandWindow.png';
import minimizeIcon from './../data/MinimizeIcon.svg';

const ChartPanel = ({ parcel, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false);
  }, [parcel]);

  if (!parcel) return null;

  const props = parcel.properties;

  const labels = ['Grocery', 'School', 'Library', 'Healthcare', 'Culture', 'Recreation', 'Bus Stop', 'Gas Station', 'Employment Hub', 'Park'];
  const values = [
    props.GROCERY_SCORE,
    props.SCHOOL_SCORE,
    props.LIBRARY_SCORE,
    props.HEALTH_SCORE,
    props.CULTURE_SCORE,
    props.REC_SCORE,
    props.BUS_SCORE,
    props.GAS_SCORE,
    props.EHUB_SCORE,
    props.PARK_SCORE,
  ];

  return (
    <div className={`chart-panel ${isExpanded ? 'expanded' : ''}`}>
      {/* Top-right controls */}
      <div className="panel-controls">
        <button
          className="panel-button"
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? 'Restore' : 'Expand'}
        >
          <img
            src={isExpanded ? minimizeIcon : expandIcon}
            alt={isExpanded ? 'Restore' : 'Expand'}
          />
        </button>
        <button
          className="panel-button close-button"
          onClick={onClose}
          title="Close"
        >
          ×
        </button>
      </div>

      {/* Panel content */}
      <h4>Accessibility Score Chart</h4>
      <h6>Score 1-10 (10 being best)</h6>
      <p><strong>Parcel ID:</strong> {props.Serial}</p>
      <BarChart labels={labels} values={values} />
    </div>
  );
};

export default ChartPanel;
